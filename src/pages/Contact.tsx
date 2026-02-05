 import { useState } from "react";
 import Layout from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import { Phone, Mail, MapPin, Send } from "lucide-react";
 
 const Contact = () => {
   const [formData, setFormData] = useState({
     fullName: "",
     email: "",
     reason: "Builder Enquiry",
     comment: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
 
     const subject = encodeURIComponent(`${formData.reason} - ${formData.fullName}`);
     const body = encodeURIComponent(
       `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nReason: ${formData.reason}\n\nMessage:\n${formData.comment}`
     );
 
     window.location.href = `mailto:hello@toddlersdun.com?subject=${subject}&body=${body}`;
   };
 
   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
     setFormData((prev) => ({
       ...prev,
       [e.target.name]: e.target.value,
     }));
   };
 
   return (
     <Layout>
        <section className="py-24 max-md:py-16 section-gradient min-h-screen">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl max-md:text-4xl font-display font-bold text-primary mb-4">
               Contact Us
             </h1>
             <p className="text-lg text-muted-foreground">
               We'd love to hear from you. Get in touch with our team.
             </p>
           </div>
 
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
             {/* Contact Form */}
             <div className="card-soft p-8 animate-fade-in">
               <h2 className="text-2xl font-display font-bold text-primary mb-6">
                 Application Form
               </h2>
               <form onSubmit={handleSubmit} className="space-y-5">
                 <div>
                   <label className="block text-sm font-semibold text-foreground mb-2">
                     Full Name
                   </label>
                   <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                     placeholder="Enter your full name"
                   />
                 </div>
 
                 <div>
                   <label className="block text-sm font-semibold text-foreground mb-2">
                     Email Address
                   </label>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                     placeholder="Enter your email"
                   />
                 </div>
 
                 <div>
                   <label className="block text-sm font-semibold text-foreground mb-2">
                     Reason for Contact
                   </label>
                   <select
                     name="reason"
                     value={formData.reason}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                   >
                     <option value="Builder Enquiry">Builder Enquiry</option>
                     <option value="Parent Enquiry">Parent Enquiry</option>
                     <option value="Partnership">Partnership</option>
                   </select>
                 </div>
 
                 <div>
                   <label className="block text-sm font-semibold text-foreground mb-2">
                     Your Message
                   </label>
                   <textarea
                     name="comment"
                     value={formData.comment}
                     onChange={handleChange}
                     rows={4}
                     className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                     placeholder="Tell us more about your requirements..."
                   />
                 </div>
 
                 <Button type="submit" variant="cta" size="xl" className="w-full rounded-xl">
                   <Send className="w-5 h-5 mr-2" />
                   Submit Application
                 </Button>
               </form>
             </div>
 
             {/* Contact Details */}
             <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
               <div>
                 <h2 className="text-2xl font-display font-bold text-primary mb-6">
                   Contact Details
                 </h2>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <Phone className="w-5 h-5 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-foreground">Phone</h3>
                       <p className="text-muted-foreground">+91 98765 43210</p>
                     </div>
                   </div>
 
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <Mail className="w-5 h-5 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-foreground">Email</h3>
                       <p className="text-muted-foreground">hello@toddlersdun.com</p>
                     </div>
                   </div>
 
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <MapPin className="w-5 h-5 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-foreground">Address</h3>
                       <p className="text-muted-foreground">
                         123 Community Lane,<br />
                         Bengaluru, India
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
 
               <div className="card-soft p-6">
                 <h3 className="font-display font-bold text-lg text-primary mb-2">
                   Toddlers Dun Support
                 </h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   Our team is available Monday to Saturday, 9 AM to 6 PM IST. We typically respond within 24 hours.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Contact;