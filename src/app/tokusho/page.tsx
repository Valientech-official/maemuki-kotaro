"use client";

export default function TokushoPage() {
  return (
    <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-start relative bg-white min-h-screen">
      <div className="w-full px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          特定商取引法に基づく表記
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">販売事業者名</h3>
                <p>株式会社feer</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">代表者名</h3>
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
                <h3 className="font-semibold text-gray-800 mb-2">連絡先</h3>
                <p>
                  お問い合わせは、当サイトのお問い合わせフォーム、またはLINE公式アカウントよりお願いいたします。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">サービス内容</h3>
                <p>失業保険に関する相談・アドバイスサービス</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">料金</h3>
                <p>
                  基本相談：無料<br/>
                  詳細な個別サポートが必要な場合は、別途料金が発生する場合があります。<br/>
                  料金については事前にご説明し、同意をいただいた上でサービスを提供いたします。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">支払方法</h3>
                <p>
                  有料サービスをご利用の場合：<br/>
                  ・銀行振込<br/>
                  ・クレジットカード決済<br/>
                  ・その他当社指定の方法
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">支払時期</h3>
                <p>サービス開始前の前払いとなります。</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">サービス提供時期</h3>
                <p>ご入金確認後、速やかにサービスを開始いたします。</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">キャンセル・返金について</h3>
                <p>
                  ・サービス開始前：キャンセル可能、手数料を除き返金いたします。<br/>
                  ・サービス開始後：サービスの性質上、原則として返金はいたしかねます。<br/>
                  ・詳細については、個別にお問い合わせください。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">個人情報の取り扱い</h3>
                <p>
                  お客様の個人情報については、当社のプライバシーポリシーに従って適切に管理いたします。
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">免責事項</h3>
                <p>
                  当サービスは失業保険に関する情報提供・相談を目的としており、具体的な手続きや結果について保証するものではありません。最終的な判断・手続きはお客様ご自身の責任において行っていただきますようお願いいたします。
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              制定日：2024年1月1日<br/>
              株式会社feer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}