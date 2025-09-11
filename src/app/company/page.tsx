"use client";

export default function CompanyPage() {
  return (
    <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-start relative bg-white min-h-screen">
      <div className="w-full px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          運営者情報
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">会社名</h3>
                <p>株式会社MAEMUKI</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">代表者</h3>
                <p>鎌田 大介</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">所在地</h3>
                <p>
                  〒160-0023<br/>
                  東京都新宿区西新宿7丁目5-5プラザ西新宿309
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">事業内容</h3>
                <p>キャリア伴走型サービス</p>
              </div>



              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">お問い合わせ</h3>
                <p>
                  サービスに関するご質問・ご相談は、LINEお問い合わせフォーム、またはお問い合わせページよりお気軽にご連絡ください。
                </p>
              </div>

            </div>
          </section>

          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              株式会社MAEMUKI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}