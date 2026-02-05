 import { useState } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Menu, X } from "lucide-react";
 import Logo from "./Logo";
 import { Button } from "./ui/button";
 
 const navLinks = [
   { label: "Home", path: "/" },
   { label: "For Builders", path: "/builders" },
   { label: "Solutions", path: "/pricing" },
   { label: "Pricing", path: "/pricing" },
   { label: "For Parents", path: "/parents" },
   { label: "About Us", path: "/about" },
 ];
 
 const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();
 
   return (
     <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-card">
       <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20 max-md:h-16">
           <Link to="/" className="flex-shrink-0">
             <Logo />
           </Link>
 
           {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center gap-1">
             {navLinks.map((link) => (
               <Link
                 key={link.label}
                 to={link.path}
                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                   location.pathname === link.path
                     ? "text-primary bg-primary/5"
                     : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                 }`}
               >
                 {link.label}
               </Link>
             ))}
           </div>
 
           <div className="hidden lg:block">
             <Button asChild variant="cta" size="lg" className="rounded-xl">
               <Link to="/build">Build Your Toddlers Den</Link>
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg"
             aria-label="Toggle menu"
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </nav>
 
         {/* Mobile Navigation */}
         {isOpen && (
           <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
             <div className="flex flex-col gap-2">
               {navLinks.map((link) => (
                 <Link
                   key={link.label}
                   to={link.path}
                   onClick={() => setIsOpen(false)}
                   className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                     location.pathname === link.path
                       ? "text-primary bg-primary/5"
                       : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                   }`}
                 >
                   {link.label}
                 </Link>
               ))}
               <Button asChild variant="cta" size="lg" className="mt-2 rounded-xl">
                 <Link to="/build" onClick={() => setIsOpen(false)}>
                   Build Your Toddlers Den
                 </Link>
               </Button>
             </div>
           </div>
         )}
       </div>
     </header>
   );
 };
 
 export default Navbar;