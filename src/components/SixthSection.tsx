"use client";

const imgBackground = "/assets/5e26e830eab1d93258ec32afefa49ee84ddb54dc.png";
const img20 = "/assets/721fad6f4a013e6fbfb9610d5a175d37477f0873.png";
const img21 = "/assets/ecc00d73882b4e120001dc68c8096d0e3ba56c93.png";
const img22 = "/assets/497b534d355dccad62d303c824feff0a6e0511fd.png";

export default function SixthSection() {
  return (
    <div 
      className="content-stretch flex flex-col items-center justify-start relative w-[390px]" 
      data-name="Section" 
      data-node-id="1:6093"
    >
      <div 
        className="box-border content-stretch flex flex-col items-center justify-center max-w-[450px] px-4 py-0 relative shrink-0 w-[392px]" 
        data-name="Container" 
        data-node-id="1:6094"
      >
        <div 
          className="absolute bg-center bg-cover bg-no-repeat h-[620px] left-1/2 top-[3.39px] translate-x-[-50%] w-[390px]" 
          data-name="Background" 
          data-node-id="1:6095" 
          style={{ backgroundImage: `url('${imgBackground}')` }} 
        />
        <div 
          className="bg-center bg-cover bg-no-repeat h-[163px] shrink-0 w-[392px] relative z-10" 
          data-name="段落テキストのコピー (20)" 
          data-node-id="60:4037" 
          style={{ backgroundImage: `url('${img20}')` }} 
        />
        <div 
          className="bg-center bg-cover bg-no-repeat h-[343px] shrink-0 w-[328px] relative z-10" 
          data-name="段落テキストのコピー (21)" 
          data-node-id="60:4054" 
          style={{ backgroundImage: `url('${img21}')` }} 
        />
        <div 
          className="bg-[0%_0.27%] bg-no-repeat bg-size-[100%_148.49%] h-[117.39px] shrink-0 w-[298px] relative z-10" 
          data-name="段落テキストのコピー (22)" 
          data-node-id="60:4056" 
          style={{ backgroundImage: `url('${img22}')` }} 
        />
      </div>
    </div>
  );
}