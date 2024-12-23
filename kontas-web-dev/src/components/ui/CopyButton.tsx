"use client";
import { useState } from "react";
import toast from "react-hot-toast";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      toast.success("Copied to clipboard! ✨", {
        position: "top-center",
        style: {
          background: "#333",
          color: "#fff",
        },
        duration: 2000,
      });

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy!");
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      className="p-1 hover:bg-gray-700 rounded transition-all duration-200"
      onClick={handleCopy}
      aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
    >
      {isCopied ? "✅" : "📋"}
    </button>
  );
};

export default CopyButton;
