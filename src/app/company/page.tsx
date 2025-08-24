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
                <p>株式会社feer（フィール）</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">代表者</h3>
                <p>代表取締役</p>
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
                <ul className="space-y-1">
                  <li>• PR・広告戦略の企画設計</li>
                  <li>• タレントキャスティング</li>
                  <li>• Webサイト・動画コンテンツ制作</li>
                  <li>• デジタル広告運用</li>
                  <li>• 失業保険相談サービス</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">企業理念</h3>
                <p>
                  「feer free design - 自由に感じるままに行動する」<br/>
                  私たちは、お客様が自由に感じるままに行動できるよう、最適なソリューションを提供いたします。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">失業保険相談サービスについて</h3>
                <p>
                  失業保険の手続きや受給に関する疑問・不安を解決するため、専門的な知識を基に無料相談を実施しています。一人ひとりの状況に合わせた最適なアドバイスを提供し、安心して手続きを進めていただけるようサポートいたします。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">お問い合わせ</h3>
                <p>
                  サービスに関するご質問・ご相談は、LINEお問い合わせフォーム、またはお問い合わせページよりお気軽にご連絡ください。
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">関連サイト</h3>
                <p>
                  コーポレートサイト：
                  <a 
                    href="https://feer-design.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 underline ml-1"
                  >
                    https://feer-design.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              株式会社feer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}