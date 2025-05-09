import '@tremor/react'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import NavbarContainer from "@/components/navbar/NavbarContainer";
import FooterContainer from "@/components/footer/FooterContainer";


export const metadata: Metadata = {
  title: "Devurweb",
  description: "Proyecto portfolio",
  keywords:['Next.js', 'React', 'Javascript'],
  authors : [
    {name: 'Jonathan Javier Urquiza'}
  ],
  publisher: 'Jonathan Javier Urquiza',
  creator: 'Jonathan Javier Urquiza'
};
export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarContainer/>
        {children}
        <FooterContainer/>
        </body>
    </html>
  );
}
