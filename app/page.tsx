import CaraKerjaSection from "@/components/cara-kerja-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PromosiSection from "@/components/promosi-section";
import Waves1 from "@/components/waves/wave-1";
import Wave1Terbalik from "@/components/waves/wave-1-terbalik";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="w-full bg-gradient-to-r from-violet-200 to-white">
        <Waves1 />
      </div>
      <PromosiSection />
      <div className="w-full bg-gradient-to-b from-violet-400 to-violet-300">
        <Wave1Terbalik />
      </div>
      <CaraKerjaSection />
      <FooterSection />
    </>
  );
};

export default Home;
