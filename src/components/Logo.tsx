 import { Home, Heart } from "lucide-react";
 
 interface LogoProps {
   className?: string;
   showText?: boolean;
 }
 
 const Logo = ({ className = "", showText = true }: LogoProps) => {
   return (
     <div className={`flex items-center gap-2 ${className}`}>
       <div className="relative">
         <div className="w-10 h-10 bg-gradient-to-br from-primary to-success rounded-xl flex items-center justify-center shadow-soft">
           <Home className="w-5 h-5 text-primary-foreground" />
         </div>
         <Heart className="w-3 h-3 text-accent absolute -bottom-0.5 -right-0.5 fill-accent" />
       </div>
       {showText && (
         <span className="font-display font-bold text-xl text-primary">
           Toddlers Den
         </span>
       )}
     </div>
   );
 };
 
 export default Logo;