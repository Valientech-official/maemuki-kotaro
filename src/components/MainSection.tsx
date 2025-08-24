"use client";

import AnimatedCounter from "./AnimatedCounter";
import WarningBanner from "./WarningBanner";

const imgSection = "/assets/114883b8a9555e50e67df164c29f7cbf54115f1f.png";
const img1 = "/assets/1329945e1ec1dfabf96328544cee5756c52ce9ea.png";
const img31 = "/assets/fd05d40e5c3b0d797ff1a0caf4d567883493d3c1.png";
const img2 = "/assets/07b07fb84de3a344d2762f0437b6ea82b5cc5d70.png";
const imgImageBackground =
  "/assets/2dd65ec8aac718017c782ecf6707c5a25baa26fe.png";
const img4 = "/assets/11c2a2bb75744378766868312f87e935261430c4.png";
const imgVector = "/assets/4eeee62fbc51abf7825dde4f40ac642dd2459414.svg";
const imgComponent1 = "/assets/d1dec2121c0c79125eaeea4981d65932377e81a7.svg";

interface Component1Props {
  variant?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40"
    | "41"
    | "42"
    | "43"
    | "44"
    | "45"
    | "46"
    | "47"
    | "48"
    | "49"
    | "50";
}

function Component1({ variant = "1" }: Component1Props) {
  if (variant === "34") {
    return (
      <div
        className="relative size-full"
        data-name="variant=34"
        data-node-id="1:900"
      >
        <div
          className="absolute bottom-[6%] left-0 right-[-0.04%] top-[6.93%]"
          data-name="Vector"
          data-node-id="1:899"
        >
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  return null;
}

export default function MainSection() {
  return (
    <>
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[72px] px-0 relative w-[390px] main-section"
      data-name="Section"
      data-node-id="1:3904"
      style={{ 
        backgroundImage: `url('${imgSection}')`
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(228, 100, 33, 0.2)' }}
      />
      <div
        className="box-border content-stretch flex flex-col h-[908px] items-start justify-start max-w-[450px] px-4 py-0 relative shrink-0 w-full z-10"
        data-name="Container"
        data-node-id="1:3905"
      >
        <WarningBanner />
        <div
          className="h-[932.42px] relative shrink-0 w-full"
          data-name="Container"
          data-node-id="1:3916"
        >
          <div
            className="absolute content-stretch flex flex-col h-[364px] items-center justify-center top-[-16px] translate-x-[-50%]"
            data-name="Margin"
            data-node-id="1:3917"
            style={{ left: "calc(50% - 0.5px)" }}
          >
            <div
              className="bg-center bg-cover bg-no-repeat h-[387px] shrink-0 w-[363px]"
              data-name="ファーストビュー 1"
              data-node-id="45:19782"
              style={{ backgroundImage: `url('${img1}')` }}
            />
          </div>
          <div
            className="absolute content-stretch flex flex-col h-[478px] items-start justify-start left-1/2 top-[328px] translate-x-[-50%]"
            data-name="Margin"
            data-node-id="1:4146"
          >
            <div
              className="content-stretch flex flex-col gap-8 h-[452px] items-center justify-start relative shrink-0 w-[368px]"
              data-name="Container"
              data-node-id="1:4147"
            >
              <div
                className="h-[234px] relative shrink-0 w-full"
                data-name="Container"
                data-node-id="1:4148"
              >
                <div
                  className="absolute bg-gradient-to-b from-[#9dde33] left-1/2 rounded to-[#3c840e] top-[99.52px] translate-x-[-50%] cursor-pointer hover:from-[#8bc929] hover:to-[#2d6b0a] transition-colors"
                  data-name="Link - LINEで無料診断をする"
                  data-node-id="1:4174"
                >
                  <div className="box-border content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[22px] px-0.5 relative">
                    <div
                      className="content-stretch flex flex-col gap-[11px] items-center justify-center min-w-[354px] relative self-stretch shrink-0"
                      data-name="Container"
                      data-node-id="1:4175"
                    >
                      <div
                        className="box-border content-stretch flex gap-2 items-end justify-center pl-0.5 pr-1 py-0 relative shrink-0 w-full"
                        data-name="Container"
                        data-node-id="1:4176"
                      >
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="1:4177"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[23.4px] relative shrink-0 text-[#ffffff] text-[19.5px] text-nowrap tracking-[0.488px] whitespace-pre"
                            data-node-id="1:4178"
                          >
                            <p className="mb-0">あなたの</p>
                            <p className="">受給額は</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex items-center justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="1:4179"
                        >
                          <AnimatedCounter minValue={80} maxValue={200} duration={2} repeatInterval={3000} />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="1:4190"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[19.5px] text-nowrap tracking-[0.488px]"
                            data-node-id="1:4191"
                          >
                            <p className="leading-[23.4px] whitespace-pre">
                              万円
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                        data-name="Container"
                        data-node-id="1:4192"
                      >
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0"
                          data-name="Container"
                          data-node-id="1:4193"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[32.416px] text-nowrap tracking-[0.819px]"
                            data-node-id="1:4194"
                          >
                            <p className="leading-[32.76px] whitespace-pre">
                              無料診断スタート
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_2px_inset_rgba(255,255,255,0.4)]" />
                  <div
                    aria-hidden="true"
                    className="absolute border-2 border-[#3c840e] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
                  />
                </div>
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-[155px] shrink-0 w-[332px]"
                data-name="段落テキストのコピー (3) 1"
                data-node-id="47:19791"
                style={{ backgroundImage: `url('${img31}')` }}
              />
            </div>
          </div>
          <div
            className="absolute content-stretch flex gap-[14.592px] items-center justify-center top-[328px] translate-x-[-50%] w-[321px]"
            data-name="Container"
            data-node-id="1:4149"
            style={{ left: "calc(50% + 8.5px)" }}
          >
            <div
              className="bg-center bg-cover bg-no-repeat h-[102px] shrink-0 w-[301px]"
              data-name="段落テキストのコピー (2)"
              data-node-id="47:19788"
              style={{ backgroundImage: `url('${img2}')` }}
            />
          </div>
          <div
            className="absolute box-border content-stretch flex flex-col h-[207px] items-center justify-center left-1/2 pb-0 pt-12 px-0 translate-x-[-50%] translate-y-[-50%]"
            data-name="Margin"
            data-node-id="1:4260"
            style={{ top: "calc(50% + 354.29px)" }}
          >
            <div
              className="absolute bg-center bg-cover bg-no-repeat h-20 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[390px] z-0"
              data-name="Image+Background"
              data-node-id="1:4262"
              style={{
                top: "calc(50% + 47.5px)",
                backgroundImage: `url('${imgImageBackground}')`,
              }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[97.67px] shrink-0 w-[322px] relative z-10"
              data-name="段落テキストのコピー (4)"
              data-node-id="47:19795"
              style={{ backgroundImage: `url('${img4}')` }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
