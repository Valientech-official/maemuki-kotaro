"use client";

const imgSection = "/assets/114883b8a9555e50e67df164c29f7cbf54115f1f.png";
const img24 = "/assets/c7988c0262b2d1712aa30a9befaf21999d6f2b51.png";
const img25 = "/assets/77f3c353bb51a67ebdc4bfa3d85ea742bae86668.png";

export default function SeventhSection() {
  return (
    <div 
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col items-center justify-start pb-14 pt-8 px-0 relative w-[390px]" 
      data-name="Section" 
      data-node-id="1:5711" 
      style={{ 
        backgroundImage: `url('${imgSection}')`,
        backgroundColor: 'rgba(228, 100, 33, 0.2)'
      }}
    >
      <div 
        className="box-border content-stretch flex flex-col items-center justify-center max-w-[450px] px-4 py-0 relative shrink-0" 
        data-name="Container" 
        data-node-id="1:5712"
      >
        <div 
          className="bg-[78.38%_51.21%] bg-no-repeat bg-size-[109.72%_309.09%] h-[136px] shrink-0 w-[391px]" 
          data-name="段落テキストのコピー (24)" 
          data-node-id="60:4069" 
          style={{ backgroundImage: `url('${img24}')` }} 
        />
        <div 
          className="bg-center bg-cover bg-no-repeat h-[606px] shrink-0 w-[381px]" 
          data-name="段落テキストのコピー (25)" 
          data-node-id="60:4071" 
          style={{ backgroundImage: `url('${img25}')` }} 
        />
      </div>
    </div>
  );
}