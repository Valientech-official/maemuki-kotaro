import { Metadata } from "next";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "失業給付金申請サポート | まえむき",
  description: "失業給付金の受給額を最大化！プロが申請手続きを完全サポート。80万円～200万円の受給額診断をLINEで無料実施中。転職活動を経済的に支援します。",
  keywords: ["失業給付金", "失業保険", "受給額診断", "申請代行", "転職支援", "LINE診断"],
  openGraph: {
    title: "失業給付金申請サポート | まえむき",
    description: "受給額を最大化！80万円～200万円の診断を無料で実施中",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "まえむき 失業給付金申請サポート",
      },
    ],
  },
  twitter: {
    title: "失業給付金申請サポート | まえむき",
    description: "受給額を最大化！80万円～200万円の診断を無料で実施中",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-[390px] bg-white shadow-lg">
        <Header />
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
      </div>
    </div>
  );
}
