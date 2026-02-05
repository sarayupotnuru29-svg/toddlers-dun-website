 import { Link } from "react-router-dom";
 import Layout from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import builderChild from "@/assets/builder-child.png";
 import iconAssessment from "@/assets/icon-assessment.png";
 import iconDesign from "@/assets/icon-design.png";
 import iconSetup from "@/assets/icon-setup.png";
 import iconManage from "@/assets/icon-manage.png";
 import { Shield, Users, Heart, CheckCircle } from "lucide-react";
 
 const ForParents = () => {
   const processSteps = [
     { icon: iconAssessment, title: "Assessment", desc: "Establish requirements, assess our potential partners and understand priorities." },
     { icon: iconDesign, title: "Design", desc: "Customize space & offerings, understand the space, plan layout accordingly." },
     { icon: iconSetup, title: "Setup", desc: "Create your with our team, reach with all the financial aid and establish fee." },
     { icon: iconManage, title: "Manage", desc: "Choose a daycare team with our profiles, have ongoing care through for the started." },
   ];
 
   const benefits = [
     {
       icon: Shield,
       title: "Value",
       desc: "Families in an extended setting for established companies attract outstanding individuals as they establish.",
     },
     {
       icon: Users,
       title: "Differentiation",
       desc: "Leading business benchmarks that underlined as parameters priorities and expectations.",
     },
     {
       icon: Heart,
       title: "Turnkey Solutions",
       desc: "Builders for Real matters treat better their functions and turnkey solutions.",
     },
   ];
 
   return (
     <Layout>
       {/* Hero Section */}
       <section className="relative hero-gradient overflow-hidden">
         <div className="container mx-auto px-4 py-12 lg:py-20">
           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
             <div className="space-y-6 animate-fade-in">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight">
                 Partnering for Thriving Communities
               </h1>
               <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
                 Custom On-Site Childcare Solutions for Builders & Tenant Communities
               </p>
               <Button asChild variant="cta" size="xl" className="rounded-xl">
                 <Link to="/build">Get Started</Link>
               </Button>
             </div>
             <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: "0.2s" }}>
               <img
                 src={builderChild}
                 alt="Builder with child"
                 className="w-80 h-auto object-contain animate-float"
               />
             </div>
           </div>
         </div>
       </section>
 
       {/* Our Process Section */}
       <section className="py-16 lg:py-24 bg-card">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
             Our Process: From Concept to Community
           </h2>
 
           <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
             {processSteps.map((step, index) => (
               <div key={step.title} className="flex items-center gap-4">
                 <div className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                   <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-soft">
                     <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
                   </div>
                   <h3 className="font-display font-bold text-primary mb-2 italic">{step.title}</h3>
                   <p className="text-sm text-muted-foreground max-w-[180px] mx-auto leading-relaxed">
                     {step.desc}
                   </p>
                 </div>
                 {index < processSteps.length - 1 && (
                   <div className="hidden md:block text-primary text-2xl px-2">→</div>
                 )}
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Builder Benefits Section */}
       <section className="py-16 lg:py-24 section-gradient">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12">
             Builder Benefits
           </h2>
 
           <div className="grid md:grid-cols-3 gap-6">
             {benefits.map((benefit, index) => (
               <div
                 key={benefit.title}
                 className="card-soft p-6 animate-fade-in"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                   <benefit.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="font-display font-bold text-xl text-primary mb-2 italic">
                   {benefit.title}
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Safety & Trust Section */}
       <section className="py-16 lg:py-24 bg-card">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
               Your Child's Safety is Our Priority
             </h2>
             <div className="grid sm:grid-cols-2 gap-4">
               {[
                 "Trained & verified caregivers",
                 "24/7 CCTV monitoring",
                 "Child-safe environment",
                 "Regular health checkups",
                 "Nutritious meal plans",
                 "Emergency protocols",
               ].map((item) => (
                 <div key={item} className="flex items-center gap-3 text-left card-soft p-4">
                   <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                   <span className="text-foreground font-medium">{item}</span>
                 </div>
               ))}
             </div>
             <Button asChild variant="cta" size="xl" className="rounded-xl mt-10">
               <Link to="/contact">Book a Visit</Link>
             </Button>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ForParents;