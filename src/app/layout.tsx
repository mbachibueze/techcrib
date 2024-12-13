
import "./globals.css";
import { Poppins } from "next/font/google";
import { Provider } from "@/components/ui/provider"
import { ReactNode } from "react";



export const metadata = {
  title: "TechCrib",
  description: "Empowering businesses with cutting-edge solutions and innovative designs.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-poppins",
});



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
  