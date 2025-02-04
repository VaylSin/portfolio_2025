import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800'],
  variable: "--font-jetbrainsMono",
});


export const metadata = {
  title: "SKDigit",
  description: "Texte de description à rajouter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} ${JetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
