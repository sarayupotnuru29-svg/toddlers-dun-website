//  import { Link } from "react-router-dom";
//  import Layout from "@/components/Layout";
//  import { Button } from "@/components/ui/button";
//  import heroDaycare from "@/assets/home.png";
//  import babySleeping from "@/assets/mini_den.png";
//  import babyCrawling from "@/assets/standard_den.png";
//  import babyExcited from "@/assets/Premium_den.png";
//  import roomFoundation from "@/assets/room-foundation.png";
//  import roomGrowth from "@/assets/room-growth.png";
//  import roomThriving from "@/assets/room-thriving.png";
 
//  const Index = () => {
//    return (
//      <Layout>
//        {/* Hero Section */}
//         <section className="relative hero-gradient overflow-hidden">
//           <div className="container mx-auto px-4 py-20 max-md:py-12">
//             <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8 items-center">
//              <div className="space-y-6 animate-fade-in">
//                 <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-display font-bold text-primary leading-tight">
//                  Create Your Community Daycare Center
//                </h1>
//                 <p className="text-xl max-md:text-lg text-foreground/80 max-w-lg">
//                  Custom On-Site Childcare Solutions for Builders & Gated Communities
//                </p>
//                <Button asChild variant="cta" size="xl" className="rounded-xl">
//                  <Link to="/build">Get Started</Link>
//                </Button>
//              </div>
//              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
//                <div className="rounded-3xl overflow-hidden shadow-soft-lg">
//                  <img
//                    src={heroDaycare}
//                    alt="Cozy daycare interior"
//                    className="w-full h-auto object-cover"
//                  />
//                </div>
//              </div>
//            </div>
//          </div>
//        </section>
 
//        {/* Build Your Toddlers Den Section */}
//         <section className="py-24 max-md:py-16 bg-card">
//          <div className="container mx-auto px-4">
//            <div className="text-center mb-12">
//               <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-4">
//                Build Your Toddlers Den
//              </h2>
//              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                Watch your daycare center grow from foundation to a thriving community space
//              </p>
//            </div>
 
//            {/* Baby Growth Journey */}
//             <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mb-16">
//              {[
//                { img: babySleeping, label: "Start", desc: "Dream begins" },
//                { img: babyCrawling, label: "Growing", desc: "Taking shape" },
//                { img: babyExcited, label: "Ready", desc: "Ready for joy!" },
//              ].map((stage, index) => (
//                <div
//                  key={stage.label}
//                  className="text-center animate-fade-in"
//                  style={{ animationDelay: `${index * 0.1}s` }}
//                >
//                  <div className="relative inline-block mb-4">
//                    <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center overflow-hidden">
//                      <img
//                        src={stage.img}
//                        alt={stage.label}
//                        className="w-28 h-28 object-cover"
//                      />
//                    </div>
//                     {index < 2 && (
//                       <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 text-primary text-3xl max-md:hidden">
//                        →
//                      </div>
//                    )}
//                  </div>
//                  <h3 className="font-display font-bold text-lg text-primary">
//                    {stage.label}
//                  </h3>
//                  <p className="text-muted-foreground">{stage.desc}</p>
//                </div>
//              ))}
//            </div>
 
//            {/* Room Evolution */}
//             <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
//              {[
//                { img: roomFoundation, label: "1) Foundation", badge: "A Fresh Start" },
//                { img: roomGrowth, label: "2) Growth", badge: null },
//                { img: roomThriving, label: "3) Thriving", badge: null },
//                { img: null, label: "4) Your Estimate", badge: "Ready for Joy!" },
//              ].map((room, index) => (
//                <div
//                  key={room.label}
//                  className="card-soft p-4 animate-fade-in"
//                  style={{ animationDelay: `${index * 0.1}s` }}
//                >
//                  {room.img ? (
//                    <div className="relative">
//                      {room.badge && (
//                        <div className="absolute -top-2 left-4 bg-card px-3 py-1 rounded-full text-xs font-medium text-primary shadow-card border border-border">
//                          {room.badge}
//                        </div>
//                      )}
//                      <img
//                        src={room.img}
//                        alt={room.label}
//                        className="w-full h-40 object-cover rounded-xl mb-3"
//                      />
//                    </div>
//                  ) : (
//                    <div className="h-40 bg-secondary rounded-xl mb-3 flex flex-col items-center justify-center">
//                      {room.badge && (
//                        <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-2">
//                          {room.badge}
//                        </div>
//                      )}
//                      <div className="text-3xl mb-2">🧮</div>
//                      <p className="text-sm text-muted-foreground font-medium">
//                        ₹1,25,000 - ₹1,50,000
//                      </p>
//                    </div>
//                  )}
//                  <p className="font-display font-semibold text-primary text-center">
//                    {room.label}
//                  </p>
//                </div>
//              ))}
//            </div>
 
//            <div className="text-center mt-12">
//              <Button asChild variant="cta" size="xl" className="rounded-xl">
//                <Link to="/build">Build Your Custom Daycare →</Link>
//              </Button>
//            </div>
//          </div>
//        </section>
 
//        {/* Trust Section */}
//         <section className="py-24 max-md:py-16 section-gradient">
//          <div className="container mx-auto px-4 text-center">
//             <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-8">
//              Trusted by Communities Across India
//            </h2>
//             <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
//              {[
//                { number: "50+", label: "Communities Served" },
//                { number: "2000+", label: "Happy Toddlers" },
//                { number: "100%", label: "Safety Compliance" },
//              ].map((stat) => (
//                <div key={stat.label} className="card-soft p-8">
//                  <div className="text-4xl font-display font-bold text-accent mb-2">
//                    {stat.number}
//                  </div>
//                  <div className="text-muted-foreground font-medium">{stat.label}</div>
//                </div>
//              ))}
//            </div>
//          </div>
//        </section>
//      </Layout>
//    );
//  };
 
//  export default Index;



import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

import heroDaycare from "@/assets/home.png";
import babySleeping from "@/assets/mini_den.png";
import babyCrawling from "@/assets/standard_den.png";
import babyExcited from "@/assets/Premium_den.png";

import roomFoundation from "@/assets/room-foundation.png";
import roomGrowth from "@/assets/room-growth.png";
import roomThriving from "@/assets/room-thriving.png";

const Index = () => {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 py-20 max-md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-display font-bold text-primary leading-tight">
                Create Your Community Daycare Center
              </h1>

              <p className="text-xl max-md:text-lg text-foreground/80 max-w-xl">
                Custom On-Site Childcare Solutions for Builders & Gated Communities
              </p>

              <Button asChild variant="cta" size="xl" className="rounded-xl">
                <Link to="/build">Get Started</Link>
              </Button>
            </div>

            {/* Right Image */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                <img
                  src={heroDaycare}
                  alt="Cozy daycare interior"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUILD YOUR TODDLERS DEN ================= */}
      <section className="py-24 max-md:py-16 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-4">
              Build Your Toddlers Den
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch your daycare center grow from foundation to a thriving
              community space
            </p>
          </div>

          {/* Baby Growth Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {[
              { img: babySleeping, label: "Start", desc: "Dream begins" },
              { img: babyCrawling, label: "Growing", desc: "Taking shape" },
              { img: babyExcited, label: "Ready", desc: "Ready for joy!" },
            ].map((stage, index) => (
              <div
                key={stage.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-5">
                  <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src={stage.img}
                      alt={stage.label}
                      className="w-28 h-28 object-cover"
                    />
                  </div>

                  {index < 2 && (
                    <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-primary text-3xl hidden md:block">
                      →
                    </div>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-primary">
                  {stage.label}
                </h3>
                <p className="text-muted-foreground">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Room Evolution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: roomFoundation,
                label: "1) Foundation",
                badge: "A Fresh Start",
              },
              { img: roomGrowth, label: "2) Growth" },
              { img: roomThriving, label: "3) Thriving" },
              {
                img: null,
                label: "4) Your Estimate",
                badge: "Ready for Joy!",
              },
            ].map((room, index) => (
              <div
                key={room.label}
                className="card-soft p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {room.img ? (
                  <div className="relative">
                    {room.badge && (
                      <div className="absolute -top-2 left-4 bg-card px-3 py-1 rounded-full text-xs font-medium text-primary shadow-card border border-border">
                        {room.badge}
                      </div>
                    )}
                    <img
                      src={room.img}
                      alt={room.label}
                      className="w-full h-40 object-cover rounded-xl mb-3"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-secondary rounded-xl mb-3 flex flex-col items-center justify-center">
                    {room.badge && (
                      <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                        {room.badge}
                      </div>
                    )}
                    <div className="text-3xl mb-2">🧮</div>
                    <p className="text-sm text-muted-foreground font-medium">
                      ₹1,25,000 – ₹1,50,000
                    </p>
                  </div>
                )}

                <p className="font-display font-semibold text-primary text-center">
                  {room.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild variant="cta" size="xl" className="rounded-xl">
              <Link to="/build">Build Your Custom Daycare →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-24 max-md:py-16 section-gradient">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl max-md:text-3xl font-display font-bold text-primary mb-12">
            Trusted by Communities Across India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Communities Served" },
              { number: "2000+", label: "Happy Toddlers" },
              { number: "100%", label: "Safety Compliance" },
            ].map((stat) => (
              <div key={stat.label} className="card-soft p-8">
                <div className="text-4xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
