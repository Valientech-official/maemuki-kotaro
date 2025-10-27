"use client";

import AnimatedCounter from "./AnimatedCounter";

const imgGradientBackground =
  "/assets/c0e6d814a372564455179b3d5fe6229f0241bfce.png";
const img91 = "/assets/0d9446bf6ae251b99a9c7607d5364f7f5e2907c1.png";
const imgContainer = "/assets/07b07fb84de3a344d2762f0437b6ea82b5cc5d70.png";
const img31 = "/assets/fd05d40e5c3b0d797ff1a0caf4d567883493d3c1.png";
const img101 = "/assets/7111ac4d50de3c942680fa284da26804cf761e09.png";
const img71 = "/assets/7cf5f2d69143a956f1d6ec09779bfcccc383f0c5.png";
const img61 = "/assets/段落テキストのコピー (29).png";

export default function SecondSection() {
  return (
    <div
      className="bg-[rgba(228,100,33,0.2)] box-border content-stretch flex flex-col items-start justify-start pb-0 pt-14 px-4 relative w-[390px] overflow-hidden"
      data-name="Section"
      data-node-id="1:4456"
    >
      <div
        className="content-stretch flex flex-col gap-[32.01px] items-start justify-start relative shrink-0 w-full"
        data-name="Container"
        data-node-id="1:4457"
      >
        <div
          className="h-[1310px] relative shrink-0 w-full"
          data-name="Container"
          data-node-id="1:4471"
        >
          <div
            className="absolute content-stretch flex flex-col gap-[11.99px] items-center justify-start left-1/2 top-[369px] translate-x-[-50%]"
            data-name="Container"
            data-node-id="1:4472"
          >
            <div
              className="content-stretch flex flex-col items-center justify-start shrink-0 w-[70px]"
              data-name="Mask Group"
              data-node-id="1:4473"
            />
            <div
              className="content-stretch flex flex-col items-center justify-start shrink-0 w-[70px]"
              data-name="Mask Group"
              data-node-id="1:4476"
            />
          </div>
          <div
            className="absolute box-border content-stretch flex flex-col gap-4 h-[650px] items-center justify-start left-1/2 pb-0 pt-0 px-0 top-[651px] translate-x-[-50%]"
            data-name="Container"
            data-node-id="1:4657"
          >
            <div
              className="absolute bg-center bg-cover bg-no-repeat bottom-0 h-[580px] left-[-50px] rounded-tl-[300px] rounded-tr-[300px] w-[490px] overflow-hidden"
              data-name="Gradient+Background"
              data-node-id="1:4658"
              style={{ backgroundImage: `url('${imgGradientBackground}')` }}
            />
            <div
              className="box-border content-stretch flex flex-col h-[232px] items-center justify-start pb-0 pt-0 px-0 relative shrink-0 w-full z-10"
              data-name="Container"
              data-node-id="1:4659"
            >
              <div
                className="bg-no-repeat bg-size-[100.33%_113.11%] bg-top h-[206px] shrink-0 w-[352px]"
                data-name="段落テキストのコピー (9) 1"
                data-node-id="54:3917"
                style={{ backgroundImage: `url('${img91}')` }}
              />
            </div>
            <div
              className="content-stretch flex flex-col gap-8 items-center justify-end relative shrink-0 w-full z-10"
              data-name="Container"
              data-node-id="1:4733"
            >
              <div
                className="h-[182.77px] relative shrink-0 w-[358px]"
                data-name="Container"
                data-node-id="1:4734"
              >
                <div
                  className="absolute bg-left bg-no-repeat bg-size-[106.52%_195.15%] h-[51px] left-1/2 top-[-26px] translate-x-[-50%] w-[276px]"
                  data-name="Container"
                  data-node-id="1:4735"
                  style={{ backgroundImage: `url('${imgContainer}')` }}
                />
                <a
                  href="https://form.lmes.jp/landing-qr/2007836384-wJY8499E?uLand=azSkN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bg-gradient-to-b from-[#9dde33] left-1/2 rounded to-[#3c840e] top-[49px] translate-x-[-50%] cursor-pointer hover:from-[#8bc929] hover:to-[#2d6b0a] transition-colors block"
                  data-name="Link - LINEで無料診断をする"
                  data-node-id="54:3927"
                >
                  <div className="box-border content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[22px] px-0.5 relative">
                    <div
                      className="content-stretch flex flex-col gap-[11px] items-center justify-center min-w-[354px] relative self-stretch shrink-0"
                      data-name="Container"
                      data-node-id="54:3928"
                    >
                      <div
                        className="box-border content-stretch flex gap-2 items-end justify-center pl-0.5 pr-1 py-0 relative shrink-0 w-full"
                        data-name="Container"
                        data-node-id="54:3929"
                      >
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="54:3930"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[23.4px] relative shrink-0 text-[#ffffff] text-[19.5px] text-nowrap tracking-[0.488px] whitespace-pre"
                            data-node-id="54:3931"
                          >
                            <p className="mb-0">あなたの</p>
                            <p className="">受給額は</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex items-center justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="54:3932"
                        >
                          <AnimatedCounter
                            minValue={80}
                            maxValue={200}
                            duration={2}
                            repeatInterval={3000}
                          />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative shrink-0"
                          data-name="Container"
                          data-node-id="54:3943"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[19.5px] text-nowrap tracking-[0.488px]"
                            data-node-id="54:3944"
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
                        data-node-id="54:3945"
                      >
                        <div
                          className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0"
                          data-name="Container"
                          data-node-id="54:3946"
                        >
                          <div
                            className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[32.416px] text-nowrap tracking-[0.819px]"
                            data-node-id="54:3947"
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
                </a>
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-[155px] shrink-0 w-[332px] relative z-10"
                data-name="段落テキストのコピー (3) 1"
                data-node-id="55:3954"
                style={{ backgroundImage: `url('${img31}')` }}
              />
            </div>
          </div>
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-20 top-[547px] translate-x-[-50%] w-[71px]"
            data-name="段落テキストのコピー (10) 1"
            data-node-id="55:3952"
            style={{
              left: "calc(50% - 2.5px)",
              backgroundImage: `url('${img101}')`,
            }}
          />
          <div
            className="absolute bg-no-repeat bg-size-[103.04%_100%] bg-top-left h-[239px] top-[284px] translate-x-[-50%] w-[307.629px]"
            data-name="段落テキストのコピー (7) 1"
            data-node-id="54:3850"
            style={{
              left: "calc(50% - 0.185px)",
              backgroundImage: `url('${img71}')`,
            }}
          />
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-80 top-[-47px] translate-x-[-50%] w-[375px]"
            data-name="段落テキストのコピー (6) 1"
            data-node-id="54:3845"
            style={{
              left: "calc(50% + 0.5px)",
              backgroundImage: `url('${img61}')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
