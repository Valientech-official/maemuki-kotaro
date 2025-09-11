"use client";

const imgLogo = "/assets/段落テキストのコピー (26).png";

export default function Footer() {
  const footerLinks = [
    { text: "プライバシーポリシー", href: "/privacy" },
    { text: "利用規約", href: "/terms" },
    { text: "利用者情報の外部送信", href: "/external-transmission" },
    { text: "特定商取引法に基づく表記", href: "/tokusho" },
    { text: "運営者情報", href: "/company" },
    { text: "お問い合わせ", href: "/contact" }
  ];

  return (
    <div 
      className="bg-[#050122] relative w-[390px] py-12 px-4" 
      data-name="Footer" 
      data-node-id="1:6290"
      style={{ 
        backgroundImage: `url('/assets/段落テキストのコピー (27).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="content-stretch flex flex-col gap-8 items-center justify-start">
        {/* MAEMUKIロゴ */}
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <img 
            alt="MAEMUKI" 
            className="h-auto w-auto max-w-[200px]" 
            src={imgLogo} 
          />
        </div>
        
        {/* フッターリンク */}
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="cursor-pointer hover:text-slate-300 transition-colors" 
            >
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-400">
                <p className="leading-[22.4px] whitespace-pre">{link.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}