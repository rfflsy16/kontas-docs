"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VideoBackground from "@/components/home/VideoBackground";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      <VideoBackground />
      <div className="container mx-auto px-4 relative z-10 h-screen flex items-center justify-center">
        <motion.div
          className="text-center space-y-8 backdrop-blur-sm p-12 rounded-xl border border-gray-800/50 max-w-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F7BFE]/5 to-purple-500/5" />

          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-6xl"
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              🚧
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-[#4F7BFE] to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Coming Soon!
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Kami sedang mempersiapkan sesuatu yang luar biasa untuk kamu.
              Halaman ini sedang dalam tahap pengembangan dan akan segera hadir
              dengan fitur-fitur menarik!
            </p>
            <div className="flex flex-col items-center justify-center space-y-2">
              <motion.div
                className="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xl">⚡</span>
                <p className="text-purple-400 font-medium">
                  Development in Progress
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#4F7BFE] to-purple-500 rounded-lg hover:opacity-90 transition text-white font-medium mt-6 group"
            >
              <motion.span
                className="flex items-center space-x-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span>Kembali ke Beranda</span>
                <span>→</span>
              </motion.span>
            </Link>
          </motion.div>

          <div className="absolute -left-4 -top-4 w-32 h-32 bg-[#4F7BFE]/10 rounded-full blur-3xl" />
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </main>
  );
}
