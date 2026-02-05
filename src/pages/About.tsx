 import Layout from "@/components/Layout";
 import builderChild from "@/assets/builder-child.png";
 import babySleeping from "@/assets/baby-sleeping.png";
 import babyCrawling from "@/assets/baby-crawling.png";
 import babyExcited from "@/assets/baby-excited.png";
 import { Heart, Users, Home, Sparkles } from "lucide-react";
 
 const About = () => {
   return (
     <Layout>
       {/* Hero Section */}
       <section className="py-16 lg:py-24 hero-gradient">
         <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 animate-fade-in">
             About Toddlers Dun
           </h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
             Building nurturing spaces where little ones thrive, communities grow, and families find peace of mind.
           </p>
         </div>
       </section>
 
       {/* What is Toddlers Dun */}
       <section className="py-16 lg:py-20 bg-card">
         <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="animate-fade-in">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                 What is Toddlers Dun?
               </h2>
               <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                 Toddlers Dun is India's premier community-focused daycare solution provider. We partner with builders and housing communities to create custom, on-site childcare centers that meet the highest standards of safety and care.
               </p>
               <p className="text-lg text-foreground/80 leading-relaxed">
                 Our mission is simple: make quality childcare accessible to every family, right where they live.
               </p>
             </div>
             <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
               <img
                 src={builderChild}
                 alt="Builder and child"
                 className="w-72 h-auto animate-float"
               />
             </div>
           </div>
         </div>
       </section>
 
       {/* Who It's For */}
       <section className="py-16 lg:py-20 section-gradient">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
             Who Is It For?
           </h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="card-soft p-8 animate-fade-in">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                 <Home className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-2xl font-display font-bold text-primary mb-4">For Builders</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Differentiate your residential projects with built-in daycare facilities. Attract families, increase property value, and create thriving communities that residents love.
               </p>
             </div>
             <div className="card-soft p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
               <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                 <Heart className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-2xl font-display font-bold text-primary mb-4">For Parents</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Find trusted, professional childcare just steps from your home. Enjoy peace of mind knowing your little ones are safe, happy, and learning in a nurturing environment.
               </p>
             </div>
           </div>
         </div>
       </section>
 
       {/* How It Works */}
       <section className="py-16 lg:py-20 bg-card">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
             How It Works
           </h2>
           <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
             {[
               { step: "01", title: "Connect", desc: "Builders reach out to discuss community needs" },
               { step: "02", title: "Design", desc: "We create a custom daycare plan for your space" },
               { step: "03", title: "Build", desc: "Professional setup with all safety standards" },
               { step: "04", title: "Operate", desc: "Ongoing management with trained caregivers" },
             ].map((item, index) => (
               <div
                 key={item.step}
                 className="text-center animate-fade-in"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">
                   {item.step}
                 </div>
                 <h3 className="font-display font-bold text-lg text-primary mb-2">{item.title}</h3>
                 <p className="text-muted-foreground text-sm">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Why We Exist */}
       <section className="py-16 lg:py-20 section-gradient">
         <div className="container mx-auto px-4 text-center max-w-3xl">
           <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
             Why We Exist
           </h2>
           <p className="text-lg text-foreground/80 leading-relaxed mb-8">
             Every child deserves a safe, nurturing environment to grow and learn. Every parent deserves peace of mind. And every community thrives when families are supported. Toddlers Dun exists to make this vision a reality—one community at a time.
           </p>
         </div>
       </section>
 
       {/* Baby Growth Concept */}
       <section className="py-16 lg:py-20 bg-card">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-4">
             The Baby Growth Concept
           </h2>
           <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
             Just like babies grow through stages, so does your daycare center. Watch your space transform from foundation to a thriving community hub.
           </p>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8">
             {[
               { img: babySleeping, label: "Dream", desc: "The vision begins" },
               { img: babyCrawling, label: "Grow", desc: "Taking shape" },
               { img: babyExcited, label: "Thrive", desc: "Full of life!" },
             ].map((stage, index) => (
               <div
                 key={stage.label}
                 className="text-center animate-fade-in"
                 style={{ animationDelay: `${index * 0.15}s` }}
               >
                 <div className="relative">
                   <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center overflow-hidden mx-auto mb-4 shadow-soft">
                     <img src={stage.img} alt={stage.label} className="w-28 h-28 object-cover" />
                   </div>
                   {index < 2 && (
                     <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary text-2xl">
                       →
                     </div>
                   )}
                 </div>
                 <h3 className="font-display font-bold text-lg text-primary">{stage.label}</h3>
                 <p className="text-muted-foreground text-sm">{stage.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default About;