 import { Link } from "react-router-dom";
 import { Phone, Mail, MapPin } from "lucide-react";
 import Logo from "./Logo";
 
 const Footer = () => {
   return (
     <footer className="bg-primary text-primary-foreground">
       <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
           {/* Brand */}
           <div className="space-y-4">
             <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                 <span className="text-xl">🏠</span>
               </div>
               <span className="font-display font-bold text-xl">Toddlers Dun</span>
             </div>
             <p className="text-primary-foreground/80 text-sm leading-relaxed">
               Creating safe, nurturing spaces for toddlers in communities across India.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
             <ul className="space-y-2">
               {[
                 { label: "Home", path: "/" },
                 { label: "For Builders", path: "/build" },
                 { label: "For Parents", path: "/parents" },
                 { label: "Pricing", path: "/pricing" },
                 { label: "About Us", path: "/about" },
               ].map((link) => (
                 <li key={link.label}>
                   <Link
                     to={link.path}
                     className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Services */}
           <div>
             <h4 className="font-display font-bold text-lg mb-4">Services</h4>
             <ul className="space-y-2 text-sm text-primary-foreground/80">
               <li>Daycare Setup</li>
               <li>Staff Training</li>
               <li>Safety Consultation</li>
               <li>Community Programs</li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                 <Phone className="w-4 h-4 flex-shrink-0" />
                 <span>+91 98765 43210</span>
               </li>
               <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                 <Mail className="w-4 h-4 flex-shrink-0" />
                 <span>hello@toddlersdun.com</span>
               </li>
               <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                 <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                 <span>123 Community Lane, Bengaluru, India</span>
               </li>
             </ul>
           </div>
         </div>
 
         <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
           <p>© 2025 Toddlers Dun. All rights reserved. Made with ❤️ for little ones.</p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;