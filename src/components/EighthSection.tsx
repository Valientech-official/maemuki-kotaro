"use client";

import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const imgGradientBackground = "/assets/c0e6d814a372564455179b3d5fe6229f0241bfce.png";
const img91 = "/assets/0d9446bf6ae251b99a9c7607d5364f7f5e2907c1.png";
const imgContainer = "/assets/07b07fb84de3a344d2762f0437b6ea82b5cc5d70.png";
const img31 = "/assets/fd05d40e5c3b0d797ff1a0caf4d567883493d3c1.png";
const imgVector = "/assets/20cc554386215d329c8d2039abae54ef36795836.svg";
const imgVector1 = "/assets/5f0beee21fc1f4c9c9e954929e6a3bccef057d4c.svg";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function EighthSection() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "失業保険の受給条件が知りたいです",
      answer: "自己都合退職の場合、「会社を辞めた日以前の2年間に、雇用保険に加入していた期間が12ヶ月以上あること」が給付の条件になります。",
      isOpen: true
    },
    {
      question: "受給できる金額はどれくらい増えますか？",
      answer: "",
      isOpen: false
    },
    {
      question: "いつまでに相談すればよいでしょうか？",
      answer: "",
      isOpen: false
    },
    {
      question: "すでに有休消化中ですが、申請できますか？",
      answer: "",
      isOpen: false
    },
    {
      question: "自己都合退職でも問題ないですか？",
      answer: "",
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqItems(prev => prev.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    })));
  };

  return (
    <div 
      className="content-stretch flex flex-col gap-8 items-center justify-center relative w-[390px]" 
      data-name="Section" 
      data-node-id="1:5830"
      style={{ backgroundColor: 'rgba(228, 100, 33, 0.2)' }}
    >
      <div 
        className="content-stretch flex gap-[23.99px] items-center justify-center relative shrink-0" 
        data-name="Container" 
        data-node-id="1:5831"
      >
        <div className="flex flex-row items-center self-stretch">
          <div 
            className="content-stretch flex flex-col h-full items-start justify-start relative shrink-0" 
            data-name="Container" 
            data-node-id="1:5832"
          >
            <div 
              className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[36px] text-nowrap tracking-[1.8px]" 
              data-node-id="1:5833"
            >
              <p className="leading-[36px] whitespace-pre">
                <span className="text-[#000000]">よくある</span>
                <span className="text-[#e46421]">ご質問</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="content-stretch flex flex-col gap-[80.01px] items-center justify-start relative shrink-0 px-4" 
        data-name="Container" 
        data-node-id="1:5851"
      >
        <div 
          className="content-stretch flex flex-col gap-[24.01px] isolate items-center justify-start relative shrink-0" 
          data-name="Container" 
          data-node-id="1:5852"
        >
          <div 
            className="relative rounded shrink-0 w-full z-[2] border border-slate-200" 
            data-name="List" 
            data-node-id="1:5853"
          >
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-slate-200 last:border-b-0">
                <div 
                  className="bg-white box-border content-stretch flex items-center justify-between pb-[17px] pt-4 px-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                    <div 
                      className={`${index === 0 && item.isOpen ? 'bg-[#e46421]' : 'bg-teal-700'} content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-9`}
                    >
                      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-white text-[16px] text-center text-nowrap tracking-[0.7px]">
                        <p className="leading-[16px] whitespace-pre">Q</p>
                      </div>
                    </div>
                    <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-slate-700 tracking-[0.7px]">
                      <p className="leading-[22.4px] whitespace-pre">{item.question}</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-4">
                    <img 
                      alt="" 
                      className={`block max-w-none size-full transition-transform ${item.isOpen ? 'rotate-45' : 'rotate-0'}`} 
                      src={imgVector} 
                    />
                  </div>
                </div>
                
                {item.isOpen && item.answer && (
                  <div className="bg-white box-border content-stretch flex flex-col items-start justify-start p-[16px] border-t border-slate-100">
                    <div className="content-stretch flex gap-4 items-start justify-start overflow-clip relative shrink-0 w-full">
                      <div className="bg-teal-500 content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-9">
                        <div className="flex items-center justify-center relative shrink-0">
                          <img alt="" className="block max-w-none size-full" src={imgVector1} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center leading-[28px] relative shrink-0 text-[13.563px] text-slate-900 tracking-[0.7px] whitespace-pre">
                        <p className="whitespace-pre-wrap">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div 
            className="bg-gradient-to-b from-[#2dd4bf] h-12 relative rounded-3xl shrink-0 to-[#14b8a6] z-[1] cursor-pointer hover:from-[#22d3aa] hover:to-[#0f766e] transition-colors" 
            data-name="Button" 
            data-node-id="1:5900"
          >
            <div className="box-border content-stretch flex h-12 items-center justify-center overflow-clip px-[25px] py-px relative">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0">
                <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-white text-[15.875px] text-center text-nowrap tracking-[0.4px]">
                  <p className="leading-[25.6px] whitespace-pre">もっと見る</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_1px_inset_rgba(255,255,255,0.4)]" />
            <div className="absolute border border-solid border-teal-500 inset-0 pointer-events-none rounded-3xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" />
          </div>
        </div>
        
        <div 
          className="box-border content-stretch flex flex-col gap-4 h-[722px] items-center justify-start pb-20 pt-0 px-0 relative shrink-0" 
          data-name="Container" 
          data-node-id="60:4103"
        >
          <div 
            className="absolute bg-center bg-cover bg-no-repeat bottom-0 h-[650px] left-[-107px] rounded-tl-[411.03px] rounded-tr-[411.03px] w-[558px]" 
            data-name="Gradient+Background" 
            data-node-id="60:4104" 
            style={{ backgroundImage: `url('${imgGradientBackground}')` }} 
          />
          <div 
            className="box-border content-stretch flex flex-col h-[232px] items-center justify-start pb-16 pt-0 px-0 relative shrink-0 w-full z-10" 
            data-name="Container" 
            data-node-id="60:4105"
          >
            <div 
              className="bg-no-repeat bg-size-[100.33%_113.11%] bg-top h-[206px] shrink-0 w-[352px]" 
              data-name="段落テキストのコピー (9) 1" 
              data-node-id="60:4106" 
              style={{ backgroundImage: `url('${img91}')` }} 
            />
          </div>
          <div 
            className="content-stretch flex flex-col gap-8 items-center justify-end relative shrink-0 w-full z-10" 
            data-name="Container" 
            data-node-id="60:4107"
          >
            <div className="h-[182.77px] relative shrink-0 w-[358px]" data-name="Container" data-node-id="60:4108">
              <div 
                className="absolute bg-left bg-no-repeat bg-size-[106.52%_195.15%] h-[51px] left-1/2 top-[-26px] translate-x-[-50%] w-[276px]" 
                data-name="Container" 
                data-node-id="60:4109" 
                style={{ backgroundImage: `url('${imgContainer}')` }} 
              />
              <div 
                className="absolute bg-gradient-to-b from-[#9dde33] left-1/2 rounded to-[#3c840e] top-[49px] translate-x-[-50%] cursor-pointer hover:from-[#8bc929] hover:to-[#2d6b0a] transition-colors" 
                data-name="Link - LINEで無料診断をする" 
                data-node-id="60:4110"
              >
                <div className="box-border content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[22px] px-0.5 relative">
                  <div 
                    className="content-stretch flex flex-col gap-[11px] items-center justify-center min-w-[354px] relative self-stretch shrink-0" 
                    data-name="Container" 
                    data-node-id="60:4111"
                  >
                    <div 
                      className="box-border content-stretch flex gap-2 items-end justify-center pl-0.5 pr-1 py-0 relative shrink-0 w-full" 
                      data-name="Container" 
                      data-node-id="60:4112"
                    >
                      <div 
                        className="content-stretch flex flex-col items-start justify-start relative shrink-0" 
                        data-name="Container" 
                        data-node-id="60:4113"
                      >
                        <div 
                          className="flex flex-col font-bold justify-center leading-[23.4px] relative shrink-0 text-white text-[19.5px] text-nowrap tracking-[0.488px] whitespace-pre" 
                          data-node-id="60:4114"
                        >
                          <p className="mb-0">あなたの</p>
                          <p className="">受給額は</p>
                        </div>
                      </div>
                      <div 
                        className="content-stretch flex items-center justify-start relative shrink-0" 
                        data-name="Container" 
                        data-node-id="60:4115"
                      >
                        <AnimatedCounter minValue={80} maxValue={200} duration={2} repeatInterval={3000} />
                      </div>
                      <div 
                        className="content-stretch flex flex-col items-start justify-start relative shrink-0" 
                        data-name="Container" 
                        data-node-id="60:4126"
                      >
                        <div 
                          className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-white text-[19.5px] text-nowrap tracking-[0.488px]" 
                          data-node-id="60:4127"
                        >
                          <p className="leading-[23.4px] whitespace-pre">万円</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="content-stretch flex items-start justify-center relative shrink-0 w-full" 
                      data-name="Container" 
                      data-node-id="60:4128"
                    >
                      <div 
                        className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0" 
                        data-name="Container" 
                        data-node-id="60:4129"
                      >
                        <div 
                          className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-white text-[32.416px] text-nowrap tracking-[0.819px]" 
                          data-node-id="60:4130"
                        >
                          <p className="leading-[32.76px] whitespace-pre">無料診断スタート</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_2px_inset_rgba(255,255,255,0.4)]" />
                <div className="absolute border-2 border-[#3c840e] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" />
              </div>
            </div>
            <div 
              className="bg-center bg-cover bg-no-repeat h-[155px] shrink-0 w-[332px] relative z-10" 
              data-name="段落テキストのコピー (3) 1" 
              data-node-id="60:4131" 
              style={{ backgroundImage: `url('${img31}')` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}