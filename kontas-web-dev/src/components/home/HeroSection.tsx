import Image from "next/image";
import Link from "next/link";
import CopyButton from "../ui/CopyButton";

export default function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="mb-8">
        <Image
          src="/kontas.png"
          alt="KONTAS Logo"
          width={1000}
          height={1000}
          className="w-[800px] mx-auto object-contain"
          priority
        />
      </div>

      <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 font-light">
        Platform Modern untuk Pengembangan API
      </h2>

      <p className="text-lg mb-8 text-gray-400">
        MongoDB dengan{" "}
        <span className="text-purple-400">End-to-End Type Safety</span>,
        integritas data, dan pengalaman developer yg luar biasa. Di-supercharge
        oleh GraphQL.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
        <Link
          href="/docs/getting-started"
          className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-medium"
        >
          Get Started
        </Link>

        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-lg text-gray-300 font-mono text-sm">
          <span>npx create-kontas my-app</span>
          <CopyButton text="npx create-kontas my-app" />
        </div>
      </div>

      <Link
        href="#features"
        className="text-gray-400 hover:text-gray-300 flex items-center justify-center gap-2"
      >
        See why developers love KONTAS
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Link>
    </div>
  );
}
