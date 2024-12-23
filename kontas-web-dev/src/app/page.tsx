import VideoBackground from "@/components/home/VideoBackground";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
        <VideoBackground />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
