// import { Link } from "react-router-dom";
// import Layout from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import builderChild from "@/assets/parenting.png";
// import iconAssessment from "@/assets/icon-assessment.png";
// import iconDesign from "@/assets/icon-design.png";
// import iconSetup from "@/assets/icon-setup.png";
// import iconManage from "@/assets/icon-manage.png";
// import { 
//   Shield, 
//   Users, 
//   Heart, 
//   CheckCircle, 
//   ShieldCheck, 
//   BookOpen, 
//   HeartHandshake 
// } from "lucide-react";

// const ForParents = () => {
//   const processSteps = [
//     { icon: iconAssessment, title: "Assessment", desc: "Establish requirements, assess our potential partners and understand priorities." },
//     { icon: iconDesign, title: "Design", desc: "Customize space & offerings, understand the space, plan layout accordingly." },
//     { icon: iconSetup, title: "Setup", desc: "Create your with our team, reach with all the financial aid and establish fee." },
//     { icon: iconManage, title: "Manage", desc: "Choose a daycare team with our profiles, have ongoing care through for the started." },
//   ];

//   const benefits = [
//     {
//       icon: Shield,
//       title: "Value",
//       desc: "Families in an extended setting for established companies attract outstanding individuals as they establish.",
//     },
//     {
//       icon: Users,
//       title: "Differentiation",
//       desc: "Leading business benchmarks that underlined as parameters priorities and expectations.",
//     },
//     {
//       icon: Heart,
//       title: "Turnkey Solutions",
//       desc: "Builders for Real matters treat better their functions and turnkey solutions.",
//     },
//   ];

//   // Data for the requested section from the screenshot
//   const parentReasons = [
//     {
//       icon: ShieldCheck,
//       title: "Safety",
//       desc: "Where interest and safety come first. We ensure an environment that is built to keep children secure.",
//     },
//     {
//       icon: BookOpen,
//       title: "Learning",
//       desc: "Curious minds explore and learn with our holistic approach to early childhood development.",
//     },
//     {
//       icon: HeartHandshake,
//       title: "Community",
//       desc: "Fostering a sense of belonging for every child and parent within our nurturing ecosystem.",
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative hero-gradient overflow-hidden">
//         <div className="container mx-auto px-4 py-20 max-md:py-12">
//           <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8 items-center">
//             <div className="space-y-6 animate-fade-in">
//               <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-display font-bold text-primary leading-tight">
//                 Partnering for Thriving Communities
//               </h1>
//               <p className="text-xl max-md:text-lg text-foreground/80 max-w-lg">
//                 Custom On-Site Childcare Solutions for Builders & Tenant Communities
//               </p>
//               <Button asChild variant="cta" size="xl" className="rounded-xl">
//                 <Link to="/build">Get Started</Link>
//               </Button>
//             </div>
//             <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: "0.2s" }}>
//               <img
//                 src={builderChild}
//                 alt="Builder with child"
//                 className="w-80 h-auto object-contain animate-float"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NEW: Why Parents Love Us Section (from Screenshot) */}
//       <section className="py-24 max-md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary text-center mb-16">
//             Why Parents Love Us
//           </h2>
//           <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12">
//             {parentReasons.map((reason, index) => (
//               <div 
//                 key={reason.title} 
//                 className="text-center space-y-4 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex justify-center">
//                   <div className="p-4 rounded-full bg-secondary/30">
//                     <reason.icon className="w-10 h-10 text-primary" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-display font-bold text-primary italic">
//                   {reason.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
//                   {reason.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Process Section */}
//       <section className="py-24 max-md:py-16 bg-card">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary text-center mb-12">
//             Our Process: From Concept to Community
//           </h2>

//           <div className="flex flex-row max-md:flex-col items-center justify-center gap-4 max-md:gap-6">
//             {processSteps.map((step, index) => (
//               <div key={step.title} className="flex items-center gap-4">
//                 <div className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-soft">
//                     <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
//                   </div>
//                   <h3 className="font-display font-bold text-primary mb-2 italic">{step.title}</h3>
//                   <p className="text-sm text-muted-foreground max-w-[180px] mx-auto leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </div>
//                 {index < processSteps.length - 1 && (
//                   <div className="text-primary text-2xl px-2 max-md:hidden">→</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Builder Benefits Section */}
//       <section className="py-24 max-md:py-16 section-gradient">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-12">
//             Builder Benefits
//           </h2>

//           <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={benefit.title}
//                 className="card-soft p-6 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                   <benefit.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-display font-bold text-xl text-primary mb-2 italic">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Safety & Trust Section */}
//       <section className="py-24 max-md:py-16 bg-card">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-8">
//               Your Child's Safety is Our Priority
//             </h2>
//             <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
//               {[
//                 "Trained & verified caregivers",
//                 "24/7 CCTV monitoring",
//                 "Child-safe environment",
//                 "Regular health checkups",
//                 "Nutritious meal plans",
//                 "Emergency protocols",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3 text-left card-soft p-4">
//                   <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
//                   <span className="text-foreground font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>
//             <Button asChild variant="cta" size="xl" className="rounded-xl mt-10">
//               <Link to="/contact">Book a Visit</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default ForParents;


import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import builderChild from "@/assets/parenting.png";
import iconAssessment from "@/assets/icon-assessment.png";
import iconDesign from "@/assets/icon-design.png";
import iconSetup from "@/assets/icon-setup.png";
import iconManage from "@/assets/icon-manage.png";
import { 
  Shield, 
  Users, 
  Heart, 
  CheckCircle, 
  ShieldCheck, 
  BookOpen, 
  HeartHandshake 
} from "lucide-react";

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

  const parentReasons = [
    {
      icon: ShieldCheck,
      title: "Safety",
      desc: "Where interest and safety come first. We ensure an environment that is built to keep children secure.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      desc: "Curious minds explore and learn with our holistic approach to early childhood development.",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      desc: "Fostering a sense of belonging for every child and parent within our nurturing ecosystem.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Increased Image Size & Optimized Layout */}
      <section className="relative hero-gradient overflow-hidden border-b border-primary/5">
        <div className="container mx-auto px-4 py-24 max-md:py-12">
          <div className="grid grid-cols-[1.2fr_0.8fr] max-md:grid-cols-1 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-7xl max-lg:text-6xl max-md:text-4xl font-display font-bold text-primary leading-tight">
                Partnering for <br />
                <span className="text-primary/90">Thriving Communities</span>
              </h1>
              <p className="text-2xl max-md:text-lg text-foreground/70 max-w-xl leading-relaxed">
                Custom On-Site Childcare Solutions for Builders & Tenant Communities
              </p>
              <div className="flex gap-4">
                <Button asChild variant="cta" size="xl" className="rounded-xl px-10 h-16 text-lg">
                  <Link to="/build">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in flex justify-center md:justify-end" style={{ animationDelay: "0.2s" }}>
              {/* Image Container with increased size */}
              <div className="relative w-full max-w-2xl max-md:max-w-md">
                <img
                  src={builderChild}
                  alt="Parenting and Community"
                  className="w-full h-auto object-contain animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Love Us Section */}
      <section className="py-24 max-md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary text-center mb-16">
            Why Parents Love Us
          </h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12">
            {parentReasons.map((reason, index) => (
              <div 
                key={reason.title} 
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center">
                  <div className="p-5 rounded-full bg-red-50 border-2 border-red-500 shadow-sm">
                    <reason.icon className="w-10 h-10 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 max-md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary text-center mb-12">
            Our Process: From Concept to Community
          </h2>

          <div className="flex flex-row max-md:flex-col items-center justify-center gap-4 max-md:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-4">
                <div className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-soft">
                    <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="font-display font-bold text-primary mb-2 italic">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[180px] mx-auto leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="text-primary text-2xl px-2 max-md:hidden">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Benefits Section */}
      <section className="py-24 max-md:py-16 section-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-12">
            Builder Benefits
          </h2>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-soft p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-3 italic">
                  {benefit.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section className="py-24 max-md:py-16 bg-white border-t border-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl max-md:text-3xl font-display font-bold text-primary mb-12">
              Your Child's Safety is Our Priority
            </h2>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
              {[
                "Trained & verified caregivers",
                "24/7 CCTV monitoring",
                "Child-safe environment",
                "Regular health checkups",
                "Nutritious meal plans",
                "Emergency protocols",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-left bg-card/30 border border-primary/5 p-5 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-foreground text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="cta" size="xl" className="rounded-xl mt-12 h-16 px-12 text-lg">
              <Link to="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForParents;