"use client";

const imgVector = "/assets/e6203f64d5b913da672db4a31f0ffff922e9fbe3.svg";
const imgVector1 = "/assets/80e4ef46fe9d1933dec0954f16a4434d73b8e6a2.svg";
const imgVector2 = "/assets/374cc57bf027139438119090f5aee4f46486de4f.svg";
const imgComponent1 = "/assets/bc5de95848c5476d14255407c05d346a6fc81e95.svg";

interface Component1Props {
  variant?: string;
}

function Component1({ variant = "1" }: Component1Props) {
  if (variant === "33") {
    return (
      <div className="relative size-full" data-name="variant=33" data-node-id="1:897">
        <div className="absolute bottom-0 left-[0.02%] right-[0.03%] top-[50.7%]" data-name="Vector" data-node-id="1:894">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
        <div className="absolute inset-[22.85%_2.62%_17.22%_12.44%]" data-name="Vector" data-node-id="1:895">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
        <div className="absolute bottom-[41.81%] left-[39.97%] right-[5.47%] top-0" data-name="Vector" data-node-id="1:896">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    );
  }
  return null;
}

export default function Footer() {
  const footerLinks = [
    "プライバシーポリシー",
    "利用者情報の外部送信",
    "特定商取引法に基づく表記",
    "運営者情報",
    "お問い合わせ"
  ];

  return (
    <div 
      className="bg-slate-900 relative w-[390px] h-[329.92px]" 
      data-name="Footer" 
      data-node-id="1:6290"
    >
      <div 
        className="absolute box-border content-stretch flex flex-col h-[329.92px] items-start justify-start left-0 overflow-clip pb-[321.92px] pl-0 pr-[382px] pt-0 top-0 w-[390px]" 
        data-name="image fill" 
        data-node-id="1:6291"
      >
        <div 
          className="overflow-clip relative shrink-0 size-2" 
          data-name="Component 1" 
          data-node-id="1:6292"
        >
          <img alt="" className="block max-w-none size-full" src={imgComponent1} />
        </div>
      </div>
      <div 
        className="absolute content-stretch flex flex-col gap-8 items-center justify-start left-4 right-4 translate-y-[-50%]" 
        data-name="Container" 
        data-node-id="1:6294" 
        style={{ top: "calc(50% + 7.999px)" }}
      >
        <div 
          className="content-stretch flex items-start justify-center relative shrink-0" 
          data-name="Container" 
          data-node-id="1:6295"
        >
          <div 
            className="relative self-stretch shrink-0 w-6" 
            data-name="Component 1" 
            data-node-id="1:6296"
          >
            <Component1 variant="33" />
          </div>
        </div>
        <div 
          className="content-stretch flex flex-col gap-2 items-center justify-center relative shrink-0" 
          data-name="List" 
          data-node-id="1:6300"
        >
          {footerLinks.map((link, index) => (
            <div 
              key={index}
              className="box-border content-stretch flex flex-col items-start justify-start pb-[0.39px] pt-0.5 px-0 relative shrink-0 cursor-pointer hover:text-slate-300 transition-colors" 
              data-name="Item"
            >
              <div 
                className="content-stretch flex items-start justify-start relative shrink-0" 
                data-name="Component 9"
              >
                <div 
                  className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-400"
                >
                  <p className="leading-[19.2px] whitespace-pre">{link}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div 
          className="content-stretch flex flex-col items-start justify-start relative shrink-0" 
          data-name="Container" 
          data-node-id="1:6316"
        >
          <div 
            className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-400 tracking-[0.6px]" 
            data-node-id="1:6317"
          >
            <p className="leading-[12px] whitespace-pre">© 2022-2025 animalbank Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}