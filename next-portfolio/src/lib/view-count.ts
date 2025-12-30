// Using Upstash Redis for persistent storage
// If Upstash Redis is not set up, this will fall back gracefully

const VIEW_COUNT_KEY = 'portfolio:view-count';

// Get starting count from environment variable, default to 0 if not set
const getStartingCount = (): number => {
  const envCount = process.env.VIEW_COUNT_START;
  return envCount ? parseInt(envCount, 10) : 0;
};

let redis: any = null;

// Lazy load Redis client
async function getRedis() {
  if (redis) return redis;
  
  try {
    // Try to use @upstash/redis if available
    // Redis.fromEnv() automatically reads from environment variables:
    // - UPSTASH_REDIS_REST_URL
    // - UPSTASH_REDIS_REST_TOKEN
    // - KV_REST_API_URL (Vercel KV)
    // - KV_REST_API_TOKEN (Vercel KV)
    const { Redis } = await import('@upstash/redis');
    redis = Redis.fromEnv();
    return redis;
  } catch (error) {
    // If Upstash is not configured, return null
    console.warn('Upstash Redis not configured, using in-memory fallback:', error);
    return null;
  }
}

// In-memory fallback (resets on server restart)
let inMemoryCount = getStartingCount();

export async function getViewCount(): Promise<number> {
  const client = await getRedis();
  const startingCount = getStartingCount();
  
  if (client) {
    try {
      const count = await client.get(VIEW_COUNT_KEY) as number | null;
      return count ?? startingCount;
    } catch (error) {
      console.error('Error reading from Redis, falling back to in-memory:', error);
      // Reset redis client on error so it can retry next time
      redis = null;
      return inMemoryCount;
    }
  }
  
  return inMemoryCount;
}

export async function incrementViewCount(): Promise<number> {
  const client = await getRedis();
  const startingCount = getStartingCount();
  
  if (client) {
    try {
      // Use Redis INCR for atomic increment
      const newCount = await client.incr(VIEW_COUNT_KEY);
      // If key didn't exist, INCR returns 1, so set it to startingCount + 1
      if (newCount === 1 && startingCount > 0) {
        await client.set(VIEW_COUNT_KEY, startingCount + 1);
        return startingCount + 1;
      }
      return newCount;
    } catch (error) {
      console.error('Error incrementing in Redis, falling back to in-memory:', error);
      // Reset redis client on error so it can retry next time
      redis = null;
      // Fallback to in-memory
      inMemoryCount += 1;
      return inMemoryCount;
    }
  }
  
  // In-memory fallback
  inMemoryCount += 1;
  return inMemoryCount;
}

