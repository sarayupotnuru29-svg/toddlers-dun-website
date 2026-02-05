 import { Link } from "react-router-dom";
 import Layout from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import stepContact from "@/assets/step-contact.png";
 import stepSpace from "@/assets/step-space.png";
 import stepPricing from "@/assets/step-pricing.png";
 import stepBuild from "@/assets/step-build.png";
 import stepBooking from "@/assets/step-booking.png";
 
 const ForBuilders = () => {
   const steps = [
     {
       number: 1,
       title: "Get in Touch",
       desc: "Builder contacts us. We discuss your community's needs.",
       image: stepContact,
     },
     {
       number: 2,
       title: "Space Selection",
       desc: "We help you choose the perfect on-site location.",
       image: stepSpace,
     },
     {
       number: 3,
       title: "Custom Setup & Pricing",
       desc: "We create a tailored plan and budget for your space.",
       image: stepPricing,
     },
     {
       number: 4,
       title: "Build & Staffing",
       desc: "We handle the full setup and hire qualified caregivers.",
       image: stepBuild,
     },
     {
       number: 5,
       title: "Parents Start Booking",
       desc: "The Den opens! Parents enroll their little ones.",
       image: stepBooking,
     },
   ];
 
   return (
     <Layout>
       {/* Hero Section with decorative elements */}
        <section className="py-24 max-md:py-16 section-gradient relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5" />
         <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/10" />
         <div className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-success/10" />
 
         <div className="container mx-auto px-4 relative">
           <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-display font-bold text-primary mb-6">
               How It Works: From Concept to<br />Community Care in 5 Simple Steps
             </h1>
           </div>
 
           {/* Steps Grid */}
            <div className="grid grid-cols-5 max-md:grid-cols-1 gap-6 mb-16">
             {steps.map((step, index) => (
               <div
                 key={step.number}
                 className="text-center animate-fade-in"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="relative mb-4">
                   <div className="w-40 h-40 mx-auto rounded-2xl bg-card shadow-soft overflow-hidden">
                     <img
                       src={step.image}
                       alt={step.title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 max-md:hidden" />
                   )}
                 </div>
                 <h3 className="font-display font-bold text-lg text-primary mb-2">
                   {step.number}. {step.title}
                 </h3>
                 <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px] mx-auto">
                   {step.desc}
                 </p>
               </div>
             ))}
           </div>
 
           {/* CTA Section */}
           <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
             <p className="text-xl text-foreground mb-6 font-medium">
               Ready to bring Toddlers Den to your community?
             </p>
             <Button asChild variant="cta" size="xl" className="rounded-full px-12">
               <Link to="/build">Start Your Journey Today</Link>
             </Button>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ForBuilders;