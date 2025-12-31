
"use client";

import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink, FaLinkedin } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { TbCube3dSphere } from "react-icons/tb";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/kibo-ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import type { BundledLanguage } from "@/components/ui/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";
import style from 'styled-jsx/style';

const code = [
  {
    language: "tsx",
    filename: "three-fiber-setup.tsx",
    code: `// Three.js + React Three Fiber Setup
import { Canvas } from '@react-three/fiber';
import { OrbitControls, EffectComposer } from '@react-three/drei';

const ModelViewer = () => {
  return (
    <Canvas>
      <OrbitControls 
        enableDamping 
        dampingFactor={0.05}
      />
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass />
      </EffectComposer>
      <GLTFModel url="/model.glb" />
    </Canvas>
  );
};`,
  }
];


const code2 = [
  {
    language: "python",
    filename: "gemini-component-analysis.py",
    code: `# AI-Powered Component Identification Pipeline
async def identify_components(screenshot, mesh_data):
    # Step 1: Capture highlighted component screenshot
    image_base64 = canvas_to_base64(screenshot)
    
    # Step 2: Send to Gemini Pro via OpenRouter
    response = await openrouter.chat.completions.create(
        model="google/gemini-pro-vision",
        messages=[{
            "role": "user",
            "content": [
                {"type": "image_url", "image_url": image_base64},
                {"type": "text", "text": "Identify this 3D component"}
            ]
        }]
    )
    
    # Step 3: Parse structured JSON response
    component_data = json.loads(response.choices[0].message.content)
    
    return {
        "name": component_data["name"],
        "description": component_data["description"],
        "confidence": component_data["confidence"]
    }`,
  }
];


const code3 = [
  {
    language: "cpp",
    filename: "m5stick-ble-streaming.cpp",
    code: `// M5StickCPlus2 - BLE Quaternion Streaming
#include <M5StickCPlus2.h>
#include <NimBLEDevice.h>

// Madgwick Filter for sensor fusion
Madgwick filter;
float qx, qy, qz, qw;

void setup() {
  M5.begin();
  M5.Imu.Init();
  
  // Initialize BLE
  NimBLEDevice::init("Mesh-Camera-Stick");
  NimBLEServer *pServer = NimBLEDevice::createServer();
  
  // Create quaternion characteristic
  NimBLECharacteristic *pChar = pService->createCharacteristic(
    CHAR_UUID,
    NIMBLE_PROPERTY::READ | NIMBLE_PROPERTY::NOTIFY
  );
}

void loop() {
  // Read IMU data at 500Hz
  M5.Imu.getGyroData(&gx, &gy, &gz);
  M5.Imu.getAccelData(&ax, &ay, &az);
  
  // Madgwick filter fusion
  filter.updateIMU(gx, gy, gz, ax, ay, az);
  
  // Get quaternion
  qx = filter.getQuaternionX();
  qy = filter.getQuaternionY();
  qz = filter.getQuaternionZ();
  qw = filter.getQuaternionW();
  
  // Stream via BLE
  pChar->setValue((uint8_t*)&qx, sizeof(float) * 4);
  pChar->notify();
}`,
  }
];

const code4 = [
  {
    language: "tsx",
    filename: "web-bluetooth-integration.tsx",
    code: `// Web Bluetooth API Integration
const connectToM5Stick = async () => {
  try {
    // Request BLE device
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: 'Mesh-Camera-Stick' }],
      optionalServices: [SERVICE_UUID]
    });
    
    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(SERVICE_UUID);
    const characteristic = await service.getCharacteristic(CHAR_UUID);
    
    // Listen for quaternion updates
    await characteristic.startNotifications();
    characteristic.addEventListener('characteristicvaluechanged', (event) => {
      const value = event.target.value;
      const qx = value.getFloat32(0, true);
      const qy = value.getFloat32(4, true);
      const qz = value.getFloat32(8, true);
      const qw = value.getFloat32(12, true);
      
      // Apply to Three.js camera
      camera.quaternion.set(qx, qy, qz, qw);
    });
  } catch (error) {
    console.error('BLE connection failed:', error);
  }
};`,
  }
];

const code5 = [
{
  language: "txt",
  filename: "terminal.txt",
  code: ` [MESH] AI Component Identification Started
 [MESH] Screenshot captured: 1920x1080
 [MESH] Sending to Gemini Pro via OpenRouter...
 [MESH] Response received in 1.2s
 
 Component Identified:
 ├─ Name: "Helmet Visor Assembly"
 ├─ Category: "Protective Equipment"
 ├─ Confidence: 94.3%
 └─ Description: "Transparent polycarbonate visor with 
    anti-fog coating, designed for impact protection..."
 
 [MESH] Generating annotated wireframe...
 [MESH] GPT-4 educational explanation generated
 [MESH] Total pipeline time: 2.8s
 ✓ Component analysis complete
  `

  
}
];

const code6 = [
  {
    language: "tsx",
    filename: "mesh-splitting.tsx",
    code: `// Ensure indexed geometry and deduplicate
let indexedGeom = geom;
if (!geom.index) {
    indexedGeom = BufferGeometryUtils.mergeVertices(geom);
}

// Build vertex-to-face adjacency
const index = indexedGeom.index.array;
const facesCount = index.length / 3;
const vertexCount = indexedGeom.attributes.position.count;

const vertToFaces = new Array(vertexCount).fill().map(() => []);
for (let i = 0; i < facesCount; i++) {
    vertToFaces[index[i*3]].push(i);
    vertToFaces[index[i*3+1]].push(i);
    vertToFaces[index[i*3+2]].push(i);
}

// BFS to identify connected components
const visitedFaces = new Uint8Array(facesCount);
const components = [];

for (let f = 0; f < facesCount; f++) {
    if (!visitedFaces[f]) {
        const component = [];
        const stack = [f];
        visitedFaces[f] = 1;
        
        while (stack.length) {
            const faceIdx = stack.pop();
            component.push(faceIdx);
            
            const faceVerts = [
                index[faceIdx * 3],
                index[faceIdx * 3 + 1],
                index[faceIdx * 3 + 2]
            ];
            
            // For each vertex, add all connected faces
            faceVerts.forEach((v) => {
                vertToFaces[v].forEach((nbrFace) => {
                    if (!visitedFaces[nbrFace]) {
                        visitedFaces[nbrFace] = 1;
                        stack.push(nbrFace);
                    }
                });
            });
        }
        components.push(component);
    }
}`,
  }
];

export default function MeshPage() {
  const [exiting, setExiting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lightMode, setLightMode] = useState(true); // Force light mode
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'inspiration', label: 'The Problem' },
    { id: 'research', label: 'Research' },
    { 
      id: 'mesh-extraction', 
      label: 'Mesh Extraction',
      subSections: [
        { id: 'buffer-geometry', label: 'BufferGeometryUtils' },
        { id: 'connectivity-algorithm', label: 'Connectivity Algorithm' }
      ]
    },
    { 
      id: 'ai-pipeline', 
      label: 'AI Processing Pipeline',
      subSections: [
        { id: 'gemini-integration', label: 'Gemini Pro Integration' },
        { id: 'component-extraction', label: 'Component Extraction' },
        { id: 'gpt4-explanation', label: 'GPT-4 Explanations' }
      ]
    },
    { id: 'hardware', label: 'Hardware Control',
      subSections: [
        { id: 'm5stick', label: 'M5StickCPlus2' },
        { id: 'ble-integration', label: 'BLE Integration' }]
   },
     { id: 'tech-stack', label: 'Tech Stack' },
     { id: 'experience', label: 'Ending Remarks' },

  ];

  useEffect(() => {
    setLightMode(true); // Always light mode for Mesh
  }, []);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => {
      document.body.style.cursor = "";
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, []);

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }

      if (section.subSections) {
        section.subSections.forEach(subSection => {
          const subElement = document.getElementById(subSection.id);
          if (subElement) {
            observer.observe(subElement);
          }
        });
      }
    });

    

    return () => observer.disconnect();
  }, [loaded]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/innovation");
    }, 200);
  };

  const smoothScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Light theme colors matching innovation page
  const textColor = "#111";
  const fadedText = "#666"; 
  const fadedLabel = "#888";
  const bgColor = "#ffffff";

  const NavigationItem = ({ section, isActive }: { section: { id: string; label: string }, isActive: boolean }) => (
    <li className="relative">
      <button 
        onClick={() => smoothScrollToSection(section.id)}
        className="flex items-center w-full text-left transition-all duration-300 ease-out hover:translate-x-1"
        style={{ 
          color: isActive ? textColor : fadedText,
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: 0,
          paddingLeft: isActive ? "1rem" : "0"
        }}
      >
        <div 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-8px)'
          }}
        >
          <IoIosArrowForward size={12} color="#111" />
        </div>
        <span className="transition-all duration-300">
          {section.label}
        </span>
      </button>
    </li>
  );

  const SubNavigationItem = ({ subSection, isActive }: { subSection: { id: string; label: string }, isActive: boolean }) => (
    <li className="relative ml-4">
      <button 
        onClick={() => smoothScrollToSection(subSection.id)}
        className="flex items-center w-full text-left transition-all duration-300 ease-out hover:translate-x-1"
        style={{ 
          color: isActive ? textColor : fadedText,
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: 0,
          paddingLeft: isActive ? "1rem" : "0",
          fontSize: "0.8rem"
        }}
      >
        <div 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-8px)'
          }}
        >
          <IoIosArrowForward size={10} color="#111" />
        </div>
        <span className="transition-all duration-300">
          {subSection.label}
        </span>
      </button>
    </li>
  );

  return (
    <>
      <style jsx global>{`
        /* Custom scrollbar styles for webkit browsers (Chrome, Safari, Edge) */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
        
        /* Custom scrollbar for Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        
        /* For better compatibility across browsers */
        .custom-scrollbar {
          scrollbar-gutter: stable;
        }

        /* Smooth arrow animation */
        .nav-arrow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Light theme for code blocks on Mesh page */
        .mesh-light-code pre,
        .mesh-light-code code,
        .mesh-light-code [data-rehype-pretty-code-fragment],
        .mesh-light-code [data-language],
        .mesh-light-code [data-theme] {
          background: #f8f9fa !important;
          color: #1a1a1a !important;
        }
        
        .mesh-light-code [data-line] {
          background: transparent !important;
        }
        
        .mesh-light-code [data-line-numbers] {
          color: #6c757d !important;
        }
        
        .mesh-light-code .line {
          color: #1a1a1a !important;
        }
      `}</style>
      <div
        className={`h-screen flex flex-col font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="flex-shrink-0 px-4 sm:px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={handleBack}
              className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer ml-2 sm:ml-6 mt-6 sm:mt-10"
              style={{ color: fadedText }}
              onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
            >
              ← Back
              <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="mx-auto w-full max-w-6xl px-2 sm:px-4 pb-16 flex flex-col lg:flex-row gap-0 lg:gap-8">
        <aside className="hidden lg:block w-64 sticky top-20 self-start">
              <nav>
                <h3 className="inline-flex items-center gap-2" style={{ color: textColor, fontSize: "0.9rem", marginBottom: "1rem" }}>
                   Table of Contents
                </h3>
                <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
                {sections.map((section) => (
  <div key={section.id}>
    <NavigationItem 
      section={section} 
      isActive={activeSection === section.id} 
    />
    {section.subSections && (
      <ul className="space-y-2 mt-2">
        {section.subSections.map((subSection) => (
          <SubNavigationItem
            key={subSection.id}
            subSection={subSection}
            isActive={activeSection === subSection.id}
          />
        ))}
      </ul>
    )}
  </div>
))}
                </ul>
              </nav>
            </aside>
            <div className="flex-1 w-full max-w-3xl p-1" style={{ overflowX: "hidden" }}>
          
          <p style={{ fontSize: "0.6rem", color: fadedText }}>
              December 2025
              </p>

            <header className="space-y-4 mt-3">
                            <h1 style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Mesh – The Coordination Layer for GeoSpatial Data
                <a href="https://mesh3d.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Mesh Website" style={{ paddingLeft: "0.75rem" }}>
                  <FaLink size={15} color={textColor} />
                </a>
                <a href="https://github.com/devp19/Mesh" target="_blank" rel="noopener noreferrer" aria-label="Mesh GitHub">
                  <LiaGithub size={20} color={textColor} />
                </a>

              </h1>

              
              <p style={{ fontSize: "0.9rem", color: fadedText }}>
              Mesh is an AI-powered 3D model processing platform that automates mesh component extraction, identification, and educational visualization... without the complex pipelines. Upload a GLB file or generate a 3D model and have AI automatically identify, annotate, and explain every part, while controlling 3D visualizations (just like IronMan) with physical hardware.
              </p>
               <p style={{ fontSize: "0.9rem", color: fadedText }}>
                 <a href="https://www.linkedin.com/in/devp19/" target="_blank" rel="noopener noreferrer" style={{ color: fadedText, textDecoration: "underline" }}>Dev Patel</a> / <a href="https://www.linkedin.com/in/fenilshah05/" target="_blank" rel="noopener noreferrer" style={{ color: fadedText, textDecoration: "underline" }}>Fenil Shah</a> / <a href="https://www.linkedin.com/in/kushp4444/" target="_blank" rel="noopener noreferrer" style={{ color: fadedText, textDecoration: "underline" }}>Kush Patel</a>
               </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-x-2 sm:gap-y-0">
  <a href="https://www.linkedin.com/posts/devp19_bringing-jarvis-from-ironman-into-the-real-activity-7399168149784297472-krtQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Announcement themed className="bg-gray-100 border border-gray-200 shadow-none hover:bg-gray-200 transition-colors cursor-pointer">
      <AnnouncementTag className="!text-gray-700 !bg-gray-200">LinkedIn</AnnouncementTag>
      <AnnouncementTitle className="!text-gray-700">
        View Post
        <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
      </AnnouncementTitle>
    </Announcement>
  </a>

  <a href="https://mesh3d.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Announcement themed className="bg-gray-100 border border-gray-200 shadow-none hover:bg-gray-200 transition-colors cursor-pointer">
      <AnnouncementTag className="!text-gray-700 !bg-gray-200">Live Demo</AnnouncementTag>
      <AnnouncementTitle className="!text-gray-700">
        mesh3d.vercel.app
        <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
      </AnnouncementTitle>
    </Announcement>
  </a>
</div>

            
            </header>

            <div className="mt-8 rounded-2xl" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
              <img src="/mesh.png" className="w-full h-auto aspect-video object-cover rounded-2xl" alt="Mesh Platform"></img>
            </div>

            <nav className="mt-10 lg:hidden">
              <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "1rem" }}>
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
              </h3>
              <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
              {sections.map((section) => (
  <div key={section.id}>
    <NavigationItem 
      section={section} 
      isActive={activeSection === section.id} 
    />
    {section.subSections && (
      <ul className="space-y-2 mt-2">
        {section.subSections.map((subSection) => (
          <SubNavigationItem
            key={subSection.id}
            subSection={subSection}
            isActive={activeSection === subSection.id}
          />
        ))}
      </ul>
    )}
  </div>
))}
              </ul>
            </nav>

            <article className="prose max-w-none mt-10">
              <section id="introduction">
                <h2 style={{ fontSize: "1.5rem", color: textColor }}>Introduction</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
               
                I've always been fascinated by 3D models, but working with them? That's a whole different story. Traditional 3D model processing is honestly a nightmare. You need complex software like Blender or CAD tools, spend hours manually extracting components, and the whole process is just... tedious. I'd watch engineers and researchers waste entire days breaking down models, identifying parts, and creating educational materials, all by hand.
<br></br>
<br></br>
So I started thinking: <span style={{ color: textColor, fontWeight: 500 }}>What if processing 3D meshes could be as simple as processing images?</span>
<br></br>
<br></br>
What if you could just type in what you want to visualize and have AI automatically identify every component, explain what each part does, and even let you control the visualization with actual physical hardware? Like, imagine just waving your hands in the air and rotating a 3D model in your hand as naturally as you'd rotate a real object.
<br></br>
<br></br>
That's the vision behind Mesh. I wanted to make 3D model analysis accessible to everyone, not just people with years of CAD experience.
         </p>
              </section>

            

              <section id="inspiration">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>The Problem</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Let me paint you a picture of how broken the current workflow is. Say you're an engineer trying to understand a complex mechanical assembly. Here's what you're stuck doing:
                
                < br></br>
                <br></br>
                <span style={{ color: textColor }}>1. Import the model</span> into some specialized software (Blender, SolidWorks, Fusion 360... take your pick)
                <br></br>
                <span style={{ color: textColor }}>2. Manually identify</span> each component by staring at it and guessing
                <br></br>
                <span style={{ color: textColor }}>3. Extract components</span> one by one through the most tedious clicking and selecting you've ever done
                <br></br>
                <span style={{ color: textColor }}>4. Document each part</span> with descriptions, functions, how they relate to each other
                <br></br>
                <span style={{ color: textColor }}>5. Create educational materials</span> with annotations and explanations
                
                <br></br>
                <br></br>
                This whole process? It can take <span style={{ color: textColor, fontWeight: 500 }}>hours or even days</span> for complex models. You need to be an expert in 3D software, know what you're looking at, and have the patience of a saint. For educators trying to create learning materials or engineers documenting assemblies, it's honestly a massive waste of time.
                <br></br>
                <br></br>
                That's where Mesh comes in. Type in what you want to see, click on a component, and boom; instant AI-powered identification, detailed explanations, annotated visualizations. What used to take hours now takes seconds.
                </p>
              </section>

              <section id="research">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>Research</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                When we first started building Mesh, we were super excited about <span style={{ color: textColor }}>SAM3D (Segment Anything Model 3D)</span> — Meta's new model that promised to revolutionize 3D segmentation. The idea was perfect for what we wanted to do: automatically segment 3D models into individual components without any manual work.
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Initial Excitement</span>
                <br></br>
                SAM3D was supposed to be the holy grail. Meta claimed it could segment any 3D object with minimal input, just like SAM did for 2D images. We dove into the research papers, checked out the demos, and started planning how to integrate it into our pipeline. The potential was huge,  imagine automatically breaking down a complex mechanical assembly into hundreds of individual parts with a single click.
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>The Reality Check</span>
                <br></br>
                Then we actually tried to use it. And honestly? It was a bit of a letdown. Here's what we ran into:
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Performance Issues</span> //  SAM3D was incredibly slow. We're talking minutes to process a single model, which completely killed the real-time interaction we wanted. For a platform meant to provide instant feedback, this was a dealbreaker.
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Accuracy Problems</span> // The segmentation quality was... inconsistent. Sometimes it would nail the component boundaries perfectly, other times it would merge separate parts together or split a single component into multiple pieces. For educational purposes where accuracy matters, this was problematic.
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Complex Integration</span> // Getting SAM3D to work with our existing Three.js pipeline was way more complicated than we anticipated. The model required specific input formats, preprocessing steps, and post-processing to clean up the results. It wasn't the plug-and-play solution we hoped for.
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Resource Intensive</span> // Running SAM3D required significant computational resources (like insanely high). Initially we were able to SSH into McMaster's computers and use those for testing but for a web-based platform that needed to work on regular laptops and even mobile devices, this was a major constraint. We couldn't expect users to have high-end GPUs just to analyze a 3D model.
                <br></br>
                <br></br>
                </p>
                
                <div className="mt-8 mb-8 rounded-2xl" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                  <img src="/sam3d.png" className="w-full h-auto object-cover rounded-2xl" alt="SAM3D Research"></img>
                </div>

                <p style={{ color: fadedText, fontSize: "0.9rem" }}>
                <span style={{ color: textColor, fontWeight: 500 }}>The Pivot</span>
                <br></br>
                After a whole night of testing and trying to work around these limitations, we made the tough call to pivot away from SAM3D. Instead, we went with a hybrid approach that combined traditional geometry analysis with AI vision models. This turned out to be way more practical:
                <br></br>
                <br></br>
                • We use <span style={{ color: textColor }}>BufferGeometryUtils</span> to intelligently merge and separate mesh components based on geometric properties
                <br></br>
                • <span style={{ color: textColor }}>Gemini Pro Vision</span> handles the visual identification by analyzing screenshots of highlighted components
                <br></br>
                • <span style={{ color: textColor }}>GPT-4</span> generates educational explanations based on the identified components
                <br></br>
                <br></br>
                This approach gave us the speed we needed (2-3 seconds instead of minutes), better accuracy for component identification, and way simpler integration with our existing stack. Plus, it works in the browser without requiring users to have powerful hardware.
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Lessons Learned</span>
                <br></br>
                SAM3D taught us an important lesson: cutting-edge research models aren't always production-ready. Sometimes the "boring" solution (ideally ours), combining proven techniques in smart ways, works better than trying to force the latest AI model into your pipeline. 
                </p>
              </section>

              <section id="mesh-extraction">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>Mesh Extraction</h2>
                <p id="buffer-geometry" style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Moving on, the part that most people were curious about was how were we even able to extract individual components from 3D models when they were imported as a single unified object? After we decided to pivot from SAM3D, we needed a solid way to actually extract individual components from 3D models. This is where <span style={{ color: textColor }}>BufferGeometryUtils</span> from Three.js became our best friend. It's basically a collection of utilities for manipulating low-level mesh geometry, and it's perfect for what we needed to do.
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>The Challenge</span>
                <br></br>
                When you load a 3D model, especially mechanical assemblies or CAD files, everything is often welded together into one giant mesh. Imagine a car model where the wheels, body, engine, and seats are all just... one continuous blob of triangles. To identify and explain individual components, we first need to <span style={{ color: textColor }}>separate</span> them.
                <br></br>
                <br></br>
                </p>
                
                <div className="mt-8 mb-8 rounded-2xl" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                  <img src="/brainone.png" className="w-full h-auto object-cover rounded-2xl" alt="Single Unified Mesh"></img>
                </div>
                <p className="text-center text-sm mb-8" style={{ color: fadedLabel, marginTop: "-1.5rem" }}>
                  Before: A single unified mesh — everything welded together
                </p>

                <p style={{ color: fadedText, fontSize: "0.9rem" }}>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Why BufferGeometryUtils?</span>
                <br></br>
                BufferGeometryUtils gives us two critical operations:
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Merging Geometries</span> // Combining multiple meshes into one for performance (fewer draw calls = faster rendering)
                <br></br>
                <span style={{ color: textColor }}>Vertex Deduplication</span> // This is the secret sauce. Before we can split a mesh, we need to ensure all shared vertices are actually shared by index. This is crucial for connectivity analysis.
                <br></br>
                <br></br>
                Here's the safety check we always run:
                <br></br>
                <br></br>
                </p>

                <div className="mesh-light-code rounded-2xl mt-5 mb-5 overflow-hidden" style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}>
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

                <p id="connectivity-algorithm" style={{ color: fadedText, fontSize: "0.9rem" }}>
                <span style={{ color: textColor, fontWeight: 500 }}>The Connectivity Algorithm</span>
                <br></br>
                This is where things get really interesting. We built a custom connectivity algorithm that analyzes which faces (triangles) are connected through shared vertices (shoutout Data Structures and Algorithms!!). Think of it like finding islands in an ocean, each "island" is a separate component.
                <br></br>
                <br></br>
                Here's how it works:
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Step 1: Build Vertex-to-Face Map</span>
                <br></br>
                For every vertex in the mesh, we create a list of which faces (triangles) it belongs to. This gives us a quick lookup: "Which faces share this vertex?"
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Step 2: Breadth-First Search (BFS)</span>
                <br></br>
                Starting from an unvisited face, we traverse to all "neighbor" faces — faces that share at least one vertex. We keep expanding outward until we've found all connected faces. That's one component.
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Step 3: Repeat</span>
                <br></br>
                We repeat this process for every unvisited face until we've identified all separate components in the model.
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Step 4: Reconstruct Meshes</span>
                <br></br>
                For each component (set of faces), we create a brand new geometry with just those faces and their vertices. Now each component is its own independent mesh that can be selected, analyzed, or exported separately.
                <br></br>
                <br></br>
                </p>
                
                <div className="mt-8 mb-8 rounded-2xl" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                  <img src="/brainmultiple.png" className="w-full h-auto object-cover rounded-2xl" alt="Multiple Separated Meshes"></img>
                </div>
                <p className="text-center text-sm mb-8" style={{ color: fadedLabel, marginTop: "-1.5rem" }}>
                  After: Multiple separated components — each part is now independent
                </p>

                <p style={{ color: fadedText, fontSize: "0.9rem" }}>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Why This Matters</span>
                <br></br>
                This geometric approach is <span style={{ color: textColor }}>blazing fast</span>. We're talking milliseconds to split even complex models with thousands of components. Compare that to SAM3D's minutes-long processing time, and you can see why we went this route.
                <br></br>
                <br></br>
                Plus, it's deterministic and reliable. If two parts are physically separate in the model (not sharing vertices), they'll always be split correctly. No AI uncertainty, no weird edge cases where the model decides to merge things that shouldn't be merged.
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Real-World Impact</span>
                <br></br>
                When you hit "Split Mesh" in Mesh's UI, this entire pipeline runs under the hood. A welded CAD model or 3D scan gets broken down into logical, interactable parts in real-time. This powers:
                <br></br>
                <br></br>
                • <span style={{ color: textColor }}>Exploded views</span> // visualize how components fit together
                <br></br>
                • <span style={{ color: textColor }}>AI-powered identification</span> // isolate individual parts for Gemini/GPT-4 analysis
                <br></br>
                • <span style={{ color: textColor }}>Component export</span> // save individual parts for CAD or 3D printing
                <br></br>
                • <span style={{ color: textColor }}>Educational visualization</span> // understand complex assemblies piece by piece
                <br></br>
                <br></br>
                The combination of BufferGeometryUtils for geometric manipulation and our custom connectivity algorithm gives us full programmatic control over 3D parts. It's the foundation that makes everything else in Mesh possible.
                </p>
              </section>

              <section id="ai-pipeline">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>AI Processing Pipeline</h2>
                
                <div className="mt-8 mb-8 rounded-2xl overflow-hidden" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                  <video
                    src="/aipipeline.mov"
                    className="w-full h-auto rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div>

                <p id="gemini-integration" style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Now here's where things get interesting. The core of Mesh is this multi-stage AI pipeline we built that takes raw 3D meshes and turns them into actual educational content. When you click on a component in the viewer, a lot happens behind the scenes in just a couple seconds:
                
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Stage 1: Component Selection & Screenshot Capture</span>
                <br></br>
                You click or hover over a mesh component in the Three.js viewer. We capture a high-res screenshot of the canvas with that specific component highlighted and convert it to base64 for transmission.
                
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Stage 2: Gemini Pro Analysis</span>
                <br></br>
                We send that screenshot along with geometric metadata (vertex count, bounding box, position) to <span style={{ color: textColor }}>Gemini Pro via OpenRouter API</span>. Gemini looks at both the visual and geometric data to figure out what the component actually is.
                
  </p>
               
  <div className="mesh-light-code rounded-2xl mt-5 mb-5 overflow-hidden" style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}>
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
               
                <p id="component-extraction" style={{ color: fadedText, fontSize: "0.9rem" }}>

                  <br></br>
                  <span style={{ color: textColor, fontWeight: 500 }}>Stage 3: Structured JSON Parsing</span>
                  <br></br>
                  Gemini sends back a structured JSON response with the component name, description, category, and a confidence score. We parse this with fallback error handling because, you know, AI can be unpredictable sometimes.
                  <br></br>
                  <br></br>
                  <span style={{ color: textColor, fontWeight: 500 }}>Stage 4: Annotated Image Generation</span>
                  <br></br>
                  Here's a cool part. Gemini also generates an annotated wireframe overlay with labels pointing to key features. It's like having someone draw on the component to show you exactly what you're looking at.
                  <br></br>
                  <br></br>
                 </p>
                 
                 <div className="mt-8 mb-8 rounded-2xl" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                   <img src="/annotationmesh.png" className="w-full h-auto object-cover rounded-2xl" alt="Annotated Mesh Wireframe"></img>
                 </div>

                 <p id="gpt4-explanation" style={{ color: fadedText, fontSize: "0.9rem" }}>
  <br></br>
  <span style={{ color: textColor, fontWeight: 500 }}>Stage 5: GPT-4 Educational Explanation</span>
  <br></br>
After identifying the component, we send the mesh geometry, position, and context to <span style={{ color: textColor }}>GPT-4 via OpenRouter</span> to generate actual educational content. GPT-4 digs into the component's role, function, and characteristics to produce detailed explanations that are actually useful for learning or documentation.
   <br></br>
   <br></br>
   <span style={{ color: textColor, fontWeight: 500 }}>Stage 6: Real-Time UI Update</span>
   <br></br>
   Everything displays in real-time with smooth loading states and animations. The entire pipeline? <span style={{ color: textColor }}>2-3 seconds</span>. That's it. From click to comprehensive analysis in less time than it takes to open Blender.
   </p>

   <div className="mesh-light-code rounded-2xl mt-5 mb-5 overflow-hidden" style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}>
     <CodeBlock className="border-none" data={code5} defaultValue={code5[0].language}>
       <CodeBlockBody>
         {(item) => (
           <CodeBlockItem key={item.language} value={item.language}>
             <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false} style={{ marginBottom: '10px' }}>
               {item.code}
             </CodeBlockContent>
           </CodeBlockItem>
         )}
       </CodeBlockBody>
     </CodeBlock>
   </div>

  <p style={{ color: fadedText, fontSize: "0.9rem" }}>
  This whole pipeline combines Gemini Pro's visual understanding with GPT-4's language capabilities to deliver comprehensive 3D model analysis. What used to take hours of manual work now happens automatically in seconds. Pretty wild, honestly.
  </p>

              </section>


              <section id="hardware">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>Hardware Control</h2>
                <p id="m5stick" style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Okay, this is probably my favorite part of Mesh. Physical hardware control. We built custom firmware for the <span style={{ color: textColor }}>Arduino M5StickCPlus2</span> that basically turns it into a 6-axis motion controller for navigating 3D models. It's like having a real object in your hand.
                <br></br>
                <br></br>
                </p>
                
                <div className="mt-8 mb-8 rounded-2xl overflow-hidden" style={{ background: "#f5f5f5", border: "1px solid #e0e0e0" }}>
                  <video
                    src="/movements.mp4"
                    className="w-full h-auto rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div>

                <p style={{ color: fadedText, fontSize: "0.9rem" }}>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>The Hardware Setup</span>
                <br></br>
                The M5StickCPlus2 is this compact ESP32-based device with a built-in 6-axis IMU (gyroscope + accelerometer). We developed two firmware variants for it:
                <br></br>
                <br></br>
                <span style={{ color: textColor }}>Camera Stick:</span> Controls the 3D camera orientation by streaming quaternion data at 500Hz
                <br></br>
                <span style={{ color: textColor }}>Object Stick:</span> Handles button-triggered actions (AI identify, zoom control) encoded as special quaternion patterns
</p>
<div className="mesh-light-code rounded-2xl mt-5 mb-5 overflow-hidden" style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}>
  <CodeBlock className="border-none" data={code3} defaultValue={code3[0].language}>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false} style={{ marginBottom: '10px' }}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
</div>

<p id="ble-integration" style={{ color: fadedText, fontSize: "0.9rem" }}>

  
<span style={{ color: textColor, fontWeight: 500 }}>The Secret Sauce: Madgwick Filter</span>
<br></br>
Raw IMU data is super noisy and drifts like crazy. For those of you that use controllers, it's exactly like StickDrift. So we used the <span style={{ color: textColor }}>Madgwick AHRS algorithm</span> to fuse gyroscope and accelerometer data into stable quaternion orientation. This gives us smooth, drift-free rotation tracking at 500Hz, which is honestly pretty satisfying to see in action.
<br></br>
<br></br>
<span style={{ color: textColor, fontWeight: 500 }}>Relative Orientation System</span>
<br></br>
Instead of absolute orientation, we went with relative quaternions: <code style={{ color: textColor, background: "#f0f0f0", padding: "2px 6px", borderRadius: "4px" }}>q_rel = qCurr × conj(qRef)</code>. This means you can "re-center" the controller anytime by pressing a button. Makes the whole system way more intuitive and comfortable to use.

</p>

<div className="mesh-light-code rounded-2xl mt-5 mb-5 overflow-hidden" style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}>
  <CodeBlock className="border-none" data={code4} defaultValue={code4[0].language}>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false} style={{ marginBottom: '10px' }}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
</div>

<p style={{ color: fadedText, fontSize: "0.9rem" }}>
The end result? A seamless, intuitive way to explore 3D models. You literally just pick up the M5Stick, rotate it in your hand, and watch the 3D model respond in real-time. It feels like you're holding the actual object. That's the kind of interaction we wanted to create. Making complex 3D exploration feel natural and accessible to anyone.
</p>
              </section>


              <section id="tech-stack">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>Tech Stack</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Building Mesh required a pretty diverse tech stack. We needed real-time 3D rendering, AI processing, and hardware integration all working together seamlessly. Here's what we used:
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Frontend</span>
                <br></br>
                • <span style={{ color: textColor }}>Next.js 16 & React 19</span> // As with most of my projects...
                <br></br>
                • <span style={{ color: textColor }}>Three.js + React Three Fiber</span> // for all the WebGL rendering with post-processing effects (bloom, shadows, the works)
                <br></br>
                • <span style={{ color: textColor }}>Framer Motion</span> // For everyone asking about animations
                <br></br>
                • <span style={{ color: textColor }}>Tailwind CSS</span>
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>AI/ML</span>
                <br></br>
                • <span style={{ color: textColor }}>OpenRouter API</span> // unified access to both Gemini Pro and GPT-4
                <br></br>
                • <span style={{ color: textColor }}>Gemini Pro Vision</span> // handles the 3D component identification and image annotation
                <br></br>
                • <span style={{ color: textColor }}>GPT-4</span> // generates all the educational content
                <br></br>
                • <span style={{ color: textColor }}>Sketchfab API</span> // for model search and download functionality
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Hardware</span>
                <br></br>
                • <span style={{ color: textColor }}>Arduino M5StickCPlus2</span> // ESP32-based with a 6-axis IMU
                <br></br>
                • <span style={{ color: textColor }}>NimBLE-Arduino</span> // for efficient BLE communication
                <br></br>
                • <span style={{ color: textColor }}>Madgwick AHRS Filter</span> // the secret sauce for sensor fusion
                <br></br>
                • <span style={{ color: textColor }}>Web Bluetooth API</span> // browser-native BLE integration (works in Chrome/Edge)
                <br></br>
                <br></br>
                <span style={{ color: textColor, fontWeight: 500 }}>Infrastructure</span>
                <br></br>
                • <span style={{ color: textColor }}>Vercel</span> // deployment and hosting (because it just works)
                <br></br>
                • <span style={{ color: textColor }}>Next.js API Routes</span> // backend processing
                <br></br>
                • <span style={{ color: textColor }}>Dynamic Imports</span> // code-splitting and SSR optimization to keep things fast
                </p>
              </section>


              <section id="experience">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: textColor }}>Ending Remarks</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Building Mesh was honestly one of the most fun projects I've worked on. It sits right at the intersection of AI, 3D graphics, and hardware, three things I'm genuinely passionate about. What started as a simple idea ("make 3D model analysis as easy as image analysis") turned into this full platform with AI-powered component identification, educational content generation, and actual physical hardware control.
<br></br>
<br></br>
The most rewarding part? Watching everything come together. Seeing Gemini Pro accurately identify complex mechanical components, watching GPT-4 generate genuinely insightful explanations, and experiencing the seamless hardware control with the M5Stick, it all just clicked. That moment when you pick up the controller and the 3D model responds perfectly? That's the kind of interaction we created.
<br></br>
<br></br>
This project pushed me to learn a ton of new stuff, Three.js, React Three Fiber, Arduino firmware development, BLE protocols, sensor fusion algorithms. Each piece was a challenge, but that's what made it exciting. The end result is a platform that actually makes 3D model analysis accessible to anyone, no specialized software or years of CAD experience required.
<br></br>
<br></br>
This wraps up my project work for 2025. Looking ahead to 2026, I'm aiming to dive deeper into LLM research and the field of Voice AI. This year has been incredible, and I can't wait to see what San Francisco has in store for me next year!
                </p>
              </section>
<div className="mt-90"></div>
            </article>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

