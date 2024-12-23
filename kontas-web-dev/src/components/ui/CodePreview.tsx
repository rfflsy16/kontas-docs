"use client";
import CopyButton from "./CopyButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CommandItem {
  title: string;
  command: string;
  description: string;
  icon: string;
  color: string;
}

export default function CodePreview() {
  const commands: CommandItem[] = [
    {
      title: "Create Project",
      command: "npx create-kontas my-app",
      description: "Buat proyek baru dengan satu perintah",
      icon: "🚀",
      color: "#50FA7B",
    },
    {
      title: "Generate GraphQL Model",
      command: "npx kontas-cli mongajs g User name:string",
      description: "Generate model super cepat untuk GraphQL",
      icon: "⚡",
      color: "#FF79C6",
    },
    {
      title: "Generate REST Model",
      command: "npx kontas-cli mongoejs g User name:string email:string",
      description: "Generate model untuk Express REST API",
      icon: "🛠️",
      color: "#BD93F9",
    },
    {
      title: "Seed Database",
      command: "npm run seed",
      description: "Isi database dengan data testing",
      icon: "🌱",
      color: "#F1FA8C",
    },
    {
      title: "Start Server",
      command: "npm run dev",
      description: "Mulai development server",
      icon: "🔥",
      color: "#8BE9FD",
    },
  ];

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="space-y-6 relative">
      <div className="absolute -left-4 -top-4 w-20 h-20 bg-[#4F7BFE]/10 rounded-full blur-2xl"></div>
      {commands.map((cmd, idx) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
          margin: "-50px 0px -50px 0px",
          once: false,
          amount: 0.5,
        });

        return (
          <motion.div
            key={idx}
            ref={ref}
            className={`flex ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            } relative`}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={item}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 max-w-[85%]">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-base text-gray-300 font-medium">
                  {cmd.icon} {cmd.title}
                </span>
                <CopyButton text={cmd.command} />
              </div>
              <div
                className="font-mono text-base bg-gray-800/50 p-3 rounded-md"
                style={{ color: cmd.color }}
              >
                {cmd.command}
              </div>
              <p className="text-sm text-gray-400 mt-3">{cmd.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
