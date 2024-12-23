import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KONTAS - Modern API Development Platform",
  description:
    "Platform pengembangan modern dan super canggih untuk mempercepat proses pengembangan API menggunakan MongoDB dan GraphQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{
            top: "80px", // Jarak dari atas
            left: "50%",
            transform: "translateX(-50%)",
          }}
          toastOptions={{
            className: "dark:bg-gray-800 dark:text-white",
            duration: 2000,
            style: {
              background: "#333",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
          }}
        />
      </body>
    </html>
  );
}
