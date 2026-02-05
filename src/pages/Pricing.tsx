 import { Link } from "react-router-dom";
 import Layout from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import { Check } from "lucide-react";
 import babySleeping from "@/assets/baby-sleeping.png";
 import babyCrawling from "@/assets/baby-crawling.png";
 import babyExcited from "@/assets/baby-excited.png";
 
 const Pricing = () => {
   const plans = [
     {
       name: "MINI DEN",
       subtitle: "(Starter)",
       image: babySleeping,
       features: [
         "Up to 15 Toddlers",
         "Basic Care Staff",
         "Sleep & Play Zones",
       ],
       buttonText: "INQUIRE MINI",
       popular: false,
     },
     {
       name: "STANDARD DEN",
       subtitle: "(Popular)",
       image: babyCrawling,
       features: [
         "Up to 40 Toddlers",
         "Caregivers + Supervisor",
         "Structured Learning",
         "CCTV App Access",
       ],
       buttonText: "INQUIRE STANDARD",
       popular: true,
     },
     {
       name: "PREMIUM DEN",
       subtitle: "(Flagship)",
       image: babyExcited,
       features: [
         "50+ Toddlers",
         "Full Staff incl. Nurse",
         "Advanced Sensory Gym",
         "Dedicated Event Space",
       ],
       buttonText: "INQUIRE PREMIUM",
       popular: false,
     },
   ];
 
   return (
     <Layout>
        <section className="py-24 max-md:py-16 section-gradient min-h-[80vh]">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl max-md:text-4xl font-display font-bold text-primary mb-4">
               Solutions & Pricing
             </h1>
             <p className="text-lg text-muted-foreground uppercase tracking-wider font-semibold">
               Scalable Solutions for Every Project Size.
             </p>
           </div>
 
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-w-5xl mx-auto">
             {plans.map((plan, index) => (
               <div
                 key={plan.name}
                 className={`relative card-soft p-6 flex flex-col animate-fade-in ${
                   plan.popular ? "ring-2 ring-primary shadow-soft-lg" : ""
                 }`}
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 {plan.popular && (
                   <div className="absolute -top-0 -right-0">
                     <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl transform rotate-0">
                       POPULAR CHOICE
                     </div>
                   </div>
                 )}
 
                 <div className="flex justify-center mb-6">
                   <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                     <img
                       src={plan.image}
                       alt={plan.name}
                       className="w-20 h-20 object-cover"
                     />
                   </div>
                 </div>
 
                 <h3 className="font-display font-bold text-xl text-center text-primary mb-1">
                   {plan.name}
                 </h3>
                 <p className="text-center text-muted-foreground text-sm mb-6">
                   {plan.subtitle}
                 </p>
 
                 <ul className="space-y-3 mb-8 flex-1">
                   {plan.features.map((feature) => (
                     <li key={feature} className="flex items-start gap-3">
                       <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                       <span className="text-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
 
                 <Button
                   asChild
                   variant="default"
                   size="lg"
                   className="w-full rounded-full"
                 >
                   <Link to="/contact">{plan.buttonText}</Link>
                 </Button>
               </div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Pricing;