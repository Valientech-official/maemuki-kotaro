"use client";

const imgSection = "/assets/765ce4e5f90616f2ec2a252e830b7802e5773eab.png";
const img111 = "/assets/a2a4cdb821fd0067080f496fe6d8c750b24f7124.png";

export default function ThirdSection() {
  return (
    <div 
      className="bg-center bg-cover bg-no-repeat relative w-[390px] h-[605px] z-30" 
      data-name="Section" 
      data-node-id="1:4845" 
      style={{ 
        backgroundImage: `url('${imgSection}')`,
        backgroundColor: '#E2E8F0'
      }}
    >
      <div className="absolute box-border content-stretch flex flex-col h-[605px] items-start justify-start left-1/2 max-w-[450px] px-4 py-0 top-[-10px] translate-x-[-50%]" data-name="Container" data-node-id="1:4849">
        <div 
          className="bg-no-repeat bg-size-[101.02%_102.18%] h-[636.4px] shrink-0 w-[390px] relative z-20" 
          data-name="段落テキストのコピー (11) 1" 
          data-node-id="56:3957" 
          style={{ 
            backgroundImage: `url('/assets/段落テキストのコピー (11) 1.png')`,
            backgroundPosition: 'center top'
          }} 
        />
      </div>
    </div>
  );
}