 import { useState } from "react";
 import { Link } from "react-router-dom";
 import Layout from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import { ChevronDown, ChevronUp, Users, Package, HeartHandshake } from "lucide-react";
 import babySleeping from "@/assets/baby-sleeping.png";
 import roomFoundation from "@/assets/room-foundation.png";
 import roomGrowth from "@/assets/room-growth.png";
 import roomThriving from "@/assets/room-thriving.png";
 import caregiverKids from "@/assets/caregiver-kids.png";
 
 const BuildDen = () => {
   // Configuration state
   const [roomSize, setRoomSize] = useState<"small" | "medium" | "large">("small");
   const [childrenCount, setChildrenCount] = useState<"10-20" | "20-40" | "40+">("10-20");
   const [communityType, setCommunityType] = useState<"boutique" | "mid-size" | "master-planned">("boutique");
 
   // Essentials state
   const [essentials, setEssentials] = useState({
     cribs: true,
     floorMats: false,
     playArea: false,
     toyPackages: true,
     cctvSystem: false,
   });
 
   // Staff state
   const [staff, setStaff] = useState({
     healthcareAssistant: true,
     caregivers: true,
   });
 
   // Accordion state
   const [openSections, setOpenSections] = useState({
     community: true,
     essentials: true,
     staff: true,
   });
 
   // Price calculation
   const calculatePrice = () => {
     let basePrice = 50000;
 
     // Room size
     if (roomSize === "medium") basePrice += 25000;
     if (roomSize === "large") basePrice += 50000;
 
     // Children count
     if (childrenCount === "20-40") basePrice += 20000;
     if (childrenCount === "40+") basePrice += 40000;
 
     // Community type
     if (communityType === "mid-size") basePrice += 15000;
     if (communityType === "master-planned") basePrice += 30000;
 
     // Essentials
     if (essentials.cribs) basePrice += 15000;
     if (essentials.floorMats) basePrice += 8000;
     if (essentials.playArea) basePrice += 25000;
     if (essentials.toyPackages) basePrice += 10000;
     if (essentials.cctvSystem) basePrice += 20000;
 
     // Staff
     if (staff.healthcareAssistant) basePrice += 12000;
     if (staff.caregivers) basePrice += 18000;
 
     const minPrice = basePrice;
     const maxPrice = Math.round(basePrice * 1.2);
 
     return { min: minPrice, max: maxPrice };
   };
 
   const price = calculatePrice();
 
   const toggleSection = (section: keyof typeof openSections) => {
     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
   };
 
   return (
     <Layout>
        <section className="py-12 max-md:py-8 section-gradient min-h-screen">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl max-md:text-3xl font-display font-bold text-primary text-center mb-2">
             Build Your Toddlers Dun:
           </h1>
           <p className="text-xl text-muted-foreground text-center mb-8">
             Custom Configurator
           </p>
 
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
             {/* Left Column - Configuration */}
             <div className="space-y-4">
               {/* Section 1: Community & Space */}
               <div className="card-soft overflow-hidden">
                 <button
                   onClick={() => toggleSection("community")}
                   className="w-full flex items-center justify-between p-4 bg-primary text-primary-foreground"
                 >
                   <div className="flex items-center gap-3">
                     <Users className="w-5 h-5" />
                     <span className="font-semibold">1. Community & Space</span>
                   </div>
                   {openSections.community ? <ChevronUp /> : <ChevronDown />}
                 </button>
                 {openSections.community && (
                   <div className="p-4 space-y-4">
                     <div>
                       <label className="block text-sm font-semibold text-foreground mb-2">
                         Room Size (sq. ft.):
                       </label>
                       <div className="flex flex-wrap gap-3">
                         {[
                           { value: "small", label: "Small (500-800)" },
                           { value: "medium", label: "Medium (800-1500)" },
                           { value: "large", label: "Large (1500+)" },
                         ].map((option) => (
                           <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                             <input
                               type="radio"
                               name="roomSize"
                               checked={roomSize === option.value}
                               onChange={() => setRoomSize(option.value as typeof roomSize)}
                               className="w-4 h-4 text-primary"
                             />
                             <span className="text-sm">{option.label}</span>
                           </label>
                         ))}
                       </div>
                     </div>
 
                     <div>
                       <label className="block text-sm font-semibold text-foreground mb-2">
                         Number of Children:
                       </label>
                       <div className="flex flex-wrap gap-3">
                         {["10-20", "20-40", "40+"].map((option) => (
                           <label key={option} className="flex items-center gap-2 cursor-pointer">
                             <input
                               type="radio"
                               name="childrenCount"
                               checked={childrenCount === option}
                               onChange={() => setChildrenCount(option as typeof childrenCount)}
                               className="w-4 h-4 text-primary"
                             />
                             <span className="text-sm">{option}</span>
                           </label>
                         ))}
                       </div>
                     </div>
 
                     <div>
                       <label className="block text-sm font-semibold text-foreground mb-2">
                         Community Type:
                       </label>
                       <div className="flex flex-wrap gap-3">
                         {[
                           { value: "boutique", label: "Boutique" },
                           { value: "mid-size", label: "Mid-Size" },
                           { value: "master-planned", label: "Master-Planned" },
                         ].map((option) => (
                           <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                             <input
                               type="radio"
                               name="communityType"
                               checked={communityType === option.value}
                               onChange={() => setCommunityType(option.value as typeof communityType)}
                               className="w-4 h-4 text-primary"
                             />
                             <span className="text-sm">{option.label}</span>
                           </label>
                         ))}
                       </div>
                     </div>
                   </div>
                 )}
               </div>
 
               {/* Section 2: Essentials & Furniture */}
               <div className="card-soft overflow-hidden">
                 <button
                   onClick={() => toggleSection("essentials")}
                   className="w-full flex items-center justify-between p-4 bg-success text-success-foreground"
                 >
                   <div className="flex items-center gap-3">
                     <Package className="w-5 h-5" />
                     <span className="font-semibold">2. Essentials & Furniture</span>
                   </div>
                   {openSections.essentials ? <ChevronUp /> : <ChevronDown />}
                 </button>
                 {openSections.essentials && (
                   <div className="p-4 space-y-3">
                     {[
                       { key: "cribs", label: "Cribs (Qty)" },
                       { key: "floorMats", label: "Floor Mats (Area)" },
                       { key: "playArea", label: "Play Area (Soft Structures)" },
                       { key: "toyPackages", label: "Toy Packages (Age-Appropriate)" },
                       { key: "cctvSystem", label: "CCTV System" },
                     ].map((item) => (
                       <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                         <input
                           type="checkbox"
                           checked={essentials[item.key as keyof typeof essentials]}
                           onChange={() =>
                             setEssentials((prev) => ({
                               ...prev,
                               [item.key]: !prev[item.key as keyof typeof essentials],
                             }))
                           }
                           className="w-4 h-4 text-success rounded"
                         />
                         <span className="text-sm">{item.label}</span>
                       </label>
                     ))}
                   </div>
                 )}
               </div>
 
               {/* Section 3: Staff & Support */}
               <div className="card-soft overflow-hidden">
                 <button
                   onClick={() => toggleSection("staff")}
                   className="w-full flex items-center justify-between p-4 bg-primary text-primary-foreground"
                 >
                   <div className="flex items-center gap-3">
                     <HeartHandshake className="w-5 h-5" />
                     <span className="font-semibold">3. Staff & Support</span>
                   </div>
                   {openSections.staff ? <ChevronUp /> : <ChevronDown />}
                 </button>
                 {openSections.staff && (
                   <div className="p-4 space-y-3">
                     {[
                       { key: "healthcareAssistant", label: "Healthcare Assistant" },
                       { key: "caregivers", label: "Caregivers (Qty)" },
                     ].map((item) => (
                       <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                         <div
                           className={`relative w-10 h-6 rounded-full transition-colors cursor-pointer ${
                             staff[item.key as keyof typeof staff]
                               ? "bg-primary"
                               : "bg-muted"
                           }`}
                           onClick={() =>
                             setStaff((prev) => ({
                               ...prev,
                               [item.key]: !prev[item.key as keyof typeof staff],
                             }))
                           }
                         >
                           <div
                             className={`absolute top-1 w-4 h-4 bg-card rounded-full shadow transition-transform ${
                               staff[item.key as keyof typeof staff]
                                 ? "translate-x-5"
                                 : "translate-x-1"
                             }`}
                           />
                         </div>
                         <span className="text-sm">{item.label}</span>
                       </label>
                     ))}
                   </div>
                 )}
               </div>
             </div>
 
             {/* Right Column - Visual Journey */}
             <div className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                 <div className="card-soft p-3 relative">
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-3 py-1 rounded-full text-xs font-medium text-primary shadow-card border border-border whitespace-nowrap">
                     A Fresh Start
                   </div>
                   <img src={roomFoundation} alt="Foundation" className="w-full h-32 object-cover rounded-lg" />
                   <p className="text-center font-semibold text-primary mt-2 text-sm">1) Foundation</p>
                 </div>
                 <div className="card-soft p-3">
                   <img src={roomThriving} alt="Thriving" className="w-full h-32 object-cover rounded-lg" />
                   <p className="text-center font-semibold text-primary mt-2 text-sm">3) Thriving</p>
                 </div>
                 <div className="card-soft p-3">
                   <img src={roomGrowth} alt="Growth" className="w-full h-32 object-cover rounded-lg" />
                   <p className="text-center font-semibold text-primary mt-2 text-sm">2) Growth</p>
                 </div>
                 <div className="card-soft p-3 relative">
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                     Ready for Joy!
                   </div>
                   <img src={caregiverKids} alt="Ready" className="w-full h-32 object-cover rounded-lg" />
                   <p className="text-center font-semibold text-primary mt-2 text-sm">4) Ready</p>
                 </div>
               </div>
 
               {/* Estimated Investment */}
               <div className="card-soft p-6 text-center">
                 <div className="flex items-center justify-center gap-3 mb-4">
                   <span className="text-4xl">🧮</span>
                   <div>
                     <p className="text-sm text-muted-foreground font-medium">Estimated Investment:</p>
                     <p className="text-2xl font-display font-bold text-primary">
                       ₹{price.min.toLocaleString("en-IN")} - ₹{price.max.toLocaleString("en-IN")}
                     </p>
                   </div>
                 </div>
                 <Button asChild variant="cta" size="lg" className="w-full rounded-xl">
                   <Link to="/contact">Request Detailed Quote & Layout</Link>
                 </Button>
               </div>
             </div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default BuildDen;