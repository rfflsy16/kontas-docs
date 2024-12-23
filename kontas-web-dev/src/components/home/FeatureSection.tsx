"use client";
import CodePreview from "../ui/CodePreview";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto mb-32">
          {/* Left Side - Text Content */}
          <div className="lg:pt-12 relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-[#4F7BFE]/10 rounded-full blur-2xl"></div>
            <div className="relative space-y-8 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 w-full">
              <h3 className="text-gray-400 mb-3 inline-block bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                🚀 KONTAS - Koding Fantasi
              </h3>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#4F7BFE] to-purple-500 bg-clip-text text-transparent mb-6">
                Platform Modern untuk API Development
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 space-y-6">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#4F7BFE] to-purple-500 rounded-full"></span>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    KONTAS Stack adalah platform pengembangan modern dan super
                    canggih yang dirancang khusus untuk mempercepat proses
                    pengembangan API menggunakan MongoDB dan GraphQL.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Dengan fitur-fitur yang inovatif, KONTAS membantu kamu menciptakan API
                    kompleks hanya dalam{" "}
                    <span className="text-[#4F7BFE] font-semibold relative">
                      hitungan detik!
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4F7BFE]/50"></span>
                    </span>
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/30">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Super Cepat</h4>
                      <p className="text-gray-400">Setup project dalam hitungan detik dengan satu perintah sederhana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/30">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Type Safety</h4>
                      <p className="text-gray-400">End-to-end type safety dengan GraphQL dan TypeScript</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/30">
                    <div className="text-2xl">🛠️</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Developer Experience</h4>
                      <p className="text-gray-400">CLI canggih untuk generate model, schema, dan seeder otomatis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Code Preview */}
          <div className="lg:mt-0 mt-12">
            <CodePreview />
          </div>
        </div>

        {/* Feature Cards Grid - Below Code Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 mt-24">
          <FeatureCard
            icon="⚡"
            title="Kemudahan Setup"
            description="Proses instalasi super cepat menggunakan satu perintah sederhana. Otomatis menghasilkan struktur proyek yg rapi."
          />
          <FeatureCard
            icon="🛠️"
            title="CLI Canggih"
            description="Membuat model, schema, dan seeder hanya dgn satu perintah. Support MongoDB + GraphQL & Express REST."
          />
          <FeatureCard
            icon="🎯"
            title="GraphQL Otomatis"
            description="CRUD otomatis utk model yg dibuat. Dukungan penuh utk GraphQL Playground."
          />
          <FeatureCard
            icon="🌱"
            title="Seeding Mudah"
            description="Reset, tambah, atau hapus data database dgn perintah sederhana. Modular & scalable utk project besar."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
