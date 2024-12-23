"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VideoBackground from "@/components/home/VideoBackground";

export default function ComingSoon() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const pulse = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      <VideoBackground />
      <div className="container mx-auto px-4 relative z-10 h-screen flex items-center justify-center">
        <motion.div
          className="text-center space-y-8 backdrop-blur-sm p-12 rounded-xl border border-gray-800/50 max-w-2xl relative overflow-hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={item}
            className="absolute inset-0 bg-gradient-to-r from-[#4F7BFE]/5 to-purple-500/5"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div variants={item} className="flex justify-center">
            <motion.div 
              className="text-6xl"
              animate={pulse}
            >
              🚧
            </motion.div>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl font-bold bg-gradient-to-r from-[#4F7BFE] to-purple-500 bg-clip-text text-transparent"
          >
            Coming Soon!
          </motion.h2>

          <motion.div variants={item} className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Kami sedang mempersiapkan sesuatu yang luar biasa untuk kamu.
              Halaman ini sedang dalam tahap pengembangan dan akan segera hadir dengan
              fitur-fitur menarik!
            </p>
            <div className="flex flex-col items-center justify-center space-y-2">
              <motion.div 
                className="flex items-center space-x-2 bg-gray-800/30 px-4 py-2 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                  borderColor: ["rgba(79, 123, 254, 0.3)", "rgba(168, 85, 247, 0.3)", "rgba(79, 123, 254, 0.3)"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xl">⚡</span>
                <p className="text-purple-400 font-medium">Development in Progress</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#4F7BFE] to-purple-500 rounded-lg hover:opacity-90 transition text-white font-medium mt-6 group"
            >
              <span className="flex items-center space-x-2">
                <span>Kembali ke Beranda</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="absolute -left-4 -top-4 w-32 h-32 bg-[#4F7BFE]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            variants={item}
            className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </motion.div>
      </div>
    </main>
  );
}
