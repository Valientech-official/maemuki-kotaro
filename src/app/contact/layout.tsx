import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "まえむきへのお問い合わせフォーム。失業給付金申請サポートに関するご質問やご相談を承っております。",
  openGraph: {
    title: "お問い合わせ | まえむき",
    description: "まえむきへのお問い合わせフォーム。失業給付金申請サポートに関するご質問やご相談を承っております。",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}