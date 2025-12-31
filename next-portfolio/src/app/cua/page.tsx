"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import type { BundledLanguage } from "@/components/ui/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";

const code = [
  {
    language: "bash",
    filename: "terminal.sh",
    code: `vmuser@dev-linux:~$ lsmod | grep kvm
kvm_intel             479232  0
kvm                  1388544  1 kvm_intel
`,
  }
];

const code2 = [
  {
    language: "bash",
    filename: "docker.sh",
    code: ` docker run --privileged -d \ -p 6080:6080 \ -p 5554:5554 \ 
    -p 5555:5555 \ -p 5900:5900 \ -e EMULATOR_DEVICE="Samsung Galaxy S10" 
    \ -e WEB_VNC=true \ --device /dev/kvm \ --name android-container \ 
    budtmo/docker-android:emulator_11.0

  `,
  }
];

const code3 = [
  {
    language: "python",
    filename: "__init__.py",
    code: `"""
verify docker and adb dependencies are instaleld
set has_android bool flag to true if both are installed (further used in factory 
to check if provider is available)
"""

try:
    import subprocess
    # Only check for Docker - ADB is inside the container, not needed on host
    subprocess.run(["docker", "--version"], capture_output=True, check=True)
    HAS_ANDROID = True
except (subprocess.SubprocessError, FileNotFoundError):
    HAS_ANDROID = False

from .provider import AndroidDockerProvider

__all__ = ["AndroidDockerProvider", "HAS_ANDROID"]
`,
  }
];

const code4 = [
  {
    language: "python",
    filename: "provider.py",
    code: ` def __init__(
        self,
        port: int = 8000,
        host: str = "localhost",
        image: str = "budtmo/docker-android:emulator_11.0",
        verbose: bool = False,
        storage: Optional[str] = None,
        ephemeral: bool = True,
        vnc_port: int = 6080,
        adb_port: int = 5555,
        device_profile: str = "Samsung Galaxy S10",
        **kwargs
    ):
  `,
  }
];

const code5 = [
  {
    language: "txt",
    filename: "factory.py",
    code: ` // base.py 

  class VMProviderType(StrEnum):
    """Enum of supported VM provider types."""
    LUME = "lume"
    LUMIER = "lumier"
    CLOUD = "cloud"
    WINSANDBOX = "winsandbox"
    DOCKER = "docker"
    ANDROID = "android"
    UNKNOWN = "unknown"
 

  // factory.py
  .
  .
  .
  elif provider_type == VMProviderType.ANDROID:
    try:
        from .androiddocker import AndroidDockerProvider, HAS_ANDROID
        if not HAS_ANDROID:
            raise ImportError(
                "AndroidDockerProvider requires Docker to be installed and running. "
                "Please ensure Docker is installed and the Docker daemon is running."
            )
        return AndroidDockerProvider(
            port=port,
            host=host,
            image=image or "budtmo/docker-android:emulator_11.0",
            verbose=verbose,
            **kwargs
        )
    except ImportError as e:
        logger.error(f"Failed to import AndroidDockerProvider: {e}")
        raise ImportError(
            "Cannot use AndroidDockerProvider: Docker is required. "
            "Please install Docker and ensure the Docker daemon is running."
        ) from e
         
        `,
  }
];

const code6 = [
  {
    language: "python",
    filename: "system_prompt.py",
    code: ` system_prompt = f"""You are an Android automation assistant. Convert user requests into ADB commands.

You can SEE the Android screen in the image provided. Analyze what's visible and determine the correct actions.

Available ADB functions (call these directly):
- home() - Go to home screen
- back() - Press back button
- recents() - Show recent apps
- open_app(package) - Open app by package name (e.g., "com.android.settings")
- open_url(url) - Open URL in browser (automatically adds https:// if missing)
- tap(x, y) - Tap at coordinates (screen is {screen_width}x{screen_height})
- swipe(x1, y1, x2, y2, duration) - Swipe gesture (screen is {screen_width}x{screen_height})
- type_text(text) - Type text
- key_event(keycode) - Send key event (66=Enter, 67=Backspace)

IMPORTANT: Look at the image to find UI elements. The screen resolution is {screen_width}x{screen_height}. When you see UI elements in the image, provide coordinates that match this resolution. If user says "tap the 3 dots top right", look at the image, find the 3 dots icon, estimate its coordinates relative to {screen_width}x{screen_height}, and tap there.

Common package names:
- Settings: com.android.settings
- Chrome: com.android.chrome
- Calculator: com.android.calculator2

For URLs: You can use domain names directly (e.g., "nvidia.com" or "www.nvidia.com"). The system will add https:// automatically.

You can execute MULTIPLE commands in sequence! For example, "open chrome and go to nvidia website":
[
  {{"function": "open_app", "args": {{"package": "com.android.chrome"}}}},
  {{"function": "open_url", "args": {{"url": "nvidia.com"}}}}
]

Another example with navigation:
[
  {{"function": "home"}},
  {{"function": "open_app", "args": {{"package": "com.android.settings"}}}},
  {{"function": "tap", "args": {{"x": 640, "y": 360}}}}
]

Respond with a JSON array of commands to execute. Only return the JSON array, nothing else."""
  `,
  }
];

export default function CuaPage() {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        /* Dark theme code blocks for v2 */
        .v2-dark-code pre,
        .v2-dark-code code,
        .v2-dark-code [data-rehype-pretty-code-fragment],
        .v2-dark-code [data-language],
        .v2-dark-code [data-theme] {
          background: #1a1a1a !important;
          color: #c6cdce !important;
          border: 1px solid #404140 !important;
        }
        
        .v2-dark-code [data-line] {
          background: transparent !important;
        }
        
        .v2-dark-code [data-line-numbers] {
          color: #656765 !important;
        }
        
        .v2-dark-code .line {
          color: #c6cdce !important;
        }
      `}</style>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <button
            onClick={() => router.back()}
            style={{
              color: "#656765",
              fontSize: "0.8rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem 0.5rem",
              marginBottom: "1.5rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              borderRadius: "2px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#c6cdce";
              e.currentTarget.style.backgroundColor = "#404140";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#656765";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            ← back
          </button>
          <p style={{ color: "#656765", fontSize: "0.6rem", margin: 0, marginBottom: "0.5rem" }}>
            october 4th, 2025 · 12min read
          </p>
          <header style={{ marginBottom: "2rem" }}>
            <div className={styles.header}>
              <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>cua (yc x25)</h1>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/company/cua-ai" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
                <a href="https://github.com/trycua/cua" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
              </div>
            </div>
            <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
              android docker provider for computer use agents
            </p>
          </header>

          <div className={styles.divider}></div>

          <article style={{ marginTop: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <img 
                src="/og-cua.png" 
                alt="CUA" 
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
            </div>

            <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
              <section id="introduction">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  introduction
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Cua is an open-source infrastructure for Computer-Use Agents which utilizes Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can control full desktops (macOS, Linux, Windows). After getting reached out to by <a href="https://www.linkedin.com/in/francesco-bonacci-70428a121/" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce", fontStyle: "italic" }}>@Francesco Bonacci</a> (Founder of Cua YC X25), my task was to build an Android Docker provider for the Cua Computer SDK. This would give the ability to run Android devices and control them using the existing Cua agent framework.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  Now, initially, the task seemed daunting but yet fun as I had never worked with Android emulators moreover an Android itself. On top of that, it was my first time working with an existing codebase that I had to understand before I could start working on it.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  initial outlook
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Going into the project, I had no idea what I was getting into. All I knew was that I had to use an existing docker image <a href="https://github.com/budtmo/docker-android" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>(https://github.com/budtmo/docker-android)</a> and build an Android Docker provider for the Cua Computer SDK.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  In hindsight, the requirements were pretty straightforward. Implement <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>AndroidDockerProvider</code> (which extends <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>BaseVMProvider</code>) and register it in <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>VMProviderFactory</code>.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  After getting familiar with the existing setup on how other providers were implemented like Lume, Lumier, Docker etc., it was merely a matter of following the same development pattern. However it was obviously easier said than done.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Turns out, I had completely forgot about the specifications and requirements of the docker image and thought it would be a simple installation via Docker. Once again, having no clue how Android emulators work, I spent a ton of time reading through documentation for the actual image instead of Cua's (I probably spent more time getting the emulator to run than actually implementing the provider!!). Of course, this was the least of my struggles. Turns out, since I was working on a MacOS device with ARM64 instead of the old intel chips, there's something called <span style={{ color: "#c6cdce" }}>KVM (Kernel-based Virtual Machine)</span> which is required to run the docker image.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Simply put, to run the Docker image itself, I had to be on a machine that had KVM support. That's where my first step into the rabbit hole came. I started off by installing <span style={{ color: "#c6cdce" }}>VirtualBox</span> to run a Linux system, all so I could actually start visualizing the emulator...
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  That clearly didn't work. Although you can use a virtual machine to run a Linux system which I thought would have KVM enabled, a subproblem was that nested virtualization wasn't supported on my machine. That's the first time I learned about nested virtualization and how it works!
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ fontStyle: "italic", color: "#c6cdce" }}>Learning 1: If you're running a Linux VM on a physical machine and want to use KVM to host additional VMs inside that guest, the physical host must support and enable nested virtualization.</span>
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Now after experimenting with VirtualBox, Parallels and even a Remote Connection to a Windows machine which Francesco had given me, none of those worked. It was not until I was given access to a Linux VM which Francesco had provisioned for me that I was able to finally check for KVM support and it was enabled!
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code} defaultValue={code[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>
              </section>

              <section id="Emulator">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  android emulator
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Now that I was finally in an environment where I could start the actual development work, I had to make sure that the emulator at least showed up, disregarding the fact that I had no idea how to do it. I did think ahead and saw that the actual Cua implementation was built on 3 OSes, Linux, Windows and MacOS. I figured it would be smart to just run a linux docker container and use that as my environment to run the docker image. So using docker, I just pulled the budtmo docker image and started it up.
                </p>

                <div style={{ marginBottom: "1rem" }}>
                  <video
                    src="/vncdocker.mp4"
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  This is where another issue came up. Although the docker android image was running as seen above, the emulator itself was not showing up. I had no idea what was going on, but I did know that I had to use VNC to connect to the docker image and run the emulator. Up till this point, I have yet to integrate the Cua provider but I knew if I had the emulator running, I could start working on the provider easily as that would just be a change to the docker execution command.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Although multiple emulators were available via the docker image, I saw that the docker image when running, it needed a default emulator/device had to be set on runtime. That's where I figured out the basis of how the docker execution command would fit into the provider.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code2} defaultValue={code2[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Now you'll see that there are a few commands in the docker execution command. This was specifically curated so that the emulator would appear in the NoVNC web interface and would give control to a few ports which was later used for adb connections and VNC clients.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  I've put together a detailed list on what each parameter to the docker execution command does and what the usage of it is.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>docker run</code> | Create and start a new container from an image
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>--privileged</code> | Grant the container extended Linux capabilities needed for the emulator and nested virtualization features
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-d</code> | Run the container detached in the background
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-p 6080:6080</code> | Map host port 6080 to container 6080 to access the web VNC UI in a browser
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-p 5554:5554</code> | Map the emulator console port for emulator control connections
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-p 5555:5555</code> | Map the ADB over TCP port to connect adb from the host to the emulator
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-p 5900:5900</code> | Map native VNC port for standard VNC clients
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-e EMULATOR_DEVICE="Samsung Galaxy S10"</code> | Set the emulator device profile to a Galaxy S10 preset inside the image
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>-e WEB_VNC=true</code> | Enable the noVNC web interface served on port 6080 for browser-based viewing
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>--device /dev/kvm</code> | Pass through the host's KVM device so the emulator can use hardware virtualization acceleration
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>--name android-container</code> | Assign a readable name to the container instance
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>budtmo/docker-android:emulator_11.0</code> | Use the budtmo/docker-android image variant preconfigured with Android 11 emulator
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <img 
                    src="/emulator.png" 
                    alt="Android Emulator" 
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                  />
                </div>
              </section>

              <section id="Cua Implementation">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  cua implementation
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  After setting up the emulator, the next step was to implement the provider into the existing factory method. This was pretty straightforward as I had already done the hard testing with execution commands above when I tried running the emulator.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  I started off with the dependency check and availability flag <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>androiddocker/__init__.py</code>, mimicking that of the previous implementations that were already built.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code3} defaultValue={code3[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  From there, I created the provider class <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>androiddocker/provider.py</code>. In specific, I added a snippet below for the constructor to talk about the parameters that are needed to run the emulator.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code4} defaultValue={code4[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  You'll see some of the parameters are preset to default values, and some are optional. Most of these come from the way providers are to be setup in the factory method. In specific I wanted to talk about the port mappings.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>6080 (noVNC):</code> Browser-based VNC viewers like noVNC typically serve via an HTTP endpoint that upgrades to WebSockets and forward to a VNC server on 5900+x; 6080 is the widely adopted default listen port for that websockify/noVNC endpoint, making it easy to remember and consistent across tooling.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>5555 (ADB over TCP):</code> Android Debug Bridge uses TCP 5555 by convention for networked devices/emulators; most Android tooling assumes 5555 unless specified, simplifying adb connect :5555 workflows.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>8000 (service HTTP API/UI):</code> Lightweight development servers frequently default to 8000 for local APIs and dashboards, avoiding collisions with 80/443 and staying familiar to developers; many Python frameworks use 8000 by default.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Additionally, I registered AndroidDocker into the supported VMProvider types and listed it in the factory implementation.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code5} defaultValue={code5[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce", fontWeight: 500 }}>Agent Workaround</span>
                  <br />
                  Now this is where the fun begins, actually implementing the actions! This definitely turned out to be much more difficult then intended as initially, the existing computer agent was supposed to be able to handle it directly but due to the docker image not being preloaded with pyautogui (which is the basis of what the Cua computer agent utilizes to perform actions), there needed to be a way to convert natural language that the agent can read and convert it into ADB commands that can be executed on the emulator.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Initially, the idea was to create some sort of websocket bridge that would intercept the request and convert it into ADB commands. This turned out to be a challenge because of how the ports are exposed.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  In containerized Android environments like budtmo/docker-android, the VNC port structure becomes particularly problematic. These containers typically expose multiple ports - VNC on 5900, noVNC WebSocket proxy on 6080, and ADB on 5555. The issue is that each VNC session requires its own dedicated port (5900+N pattern), and mapping these dynamically through a WebSocket bridge becomes complex when you need to maintain session isolation and handle multiple concurrent connections.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  That's where I got the idea to just bypass the websocket implementation. Although this is a quick fix, it's not the most secure or scalable solution, but it gets the job done. How it works is that it uses direct Docker exec commands to communicate with the android container. Instead of trying to establish a websocket bridge between the application and the containers VNC/ADB services, the code directly executes ADB commands inside the running container using subprocess calls.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  This pipeline is something similar that I currently use for my work over at Fidelity Investments for automating script calls utilizing nlp.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code6} defaultValue={code6[0].language}>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                  </CodeBlock>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Here's a quick demo below!
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <video
                    src="/test.mp4"
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </section>

              <section id="experience">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  ending remarks
                </h2>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  Wrapping up this project, I've honestly learned a ton by getting the Android Docker system up and running. Messing around with container setup, emulator stuff, and figuring out all the quirks along the way was challenging, but actually pretty fun. I picked up a lot about how everything fits together under the hood, and now I feel way more confident dealing with this kind of tech. Overall, it's been a great hands-on experience, diving into computer use agents and Cua in general!
                </p>
              </section>
            </div>
          </article>

          <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
        </main>
      </div>
    </>
  );
}
