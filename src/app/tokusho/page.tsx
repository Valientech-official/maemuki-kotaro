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
                <h3 className="font-semibold text-gray-800 mb-2">販売業者</h3>
                <p>株式会社MAEMUKI</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">運営統括責任者</h3>
                <p>鎌田大介</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">所在地</h3>
                <p>東京都新宿区西新宿7-5-5プラザ西新宿309</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">電話番号</h3>
                <p>問い合わせがあった場合に遅滞なく開示します</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">メールアドレス</h3>
                <p>
                  info@maemuki-support.com<br/>
                  （24時間受付、回答は営業時間内となります）
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">販売価格</h3>
                <p>
                  ・失業手当プラン：¥220,000（税込）<br/>
                  ・傷病手当プラン：¥330,000（税込）<br/>
                  ・失業手当+傷病手当プラン：¥440,000（税込）
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">追加手数料等</h3>
                <p>
                  ・銀行振込手数料：お客様負担<br/>
                  ・インターネット接続には別途、ご契約の通信事業者への通信料が発生します
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">営業時間</h3>
                <p>
                  ・サービスお申込み：24時間受け付け<br/>
                  ・カスタマーサポート対応時間：9:00〜21:00（年中無休）<br/>
                  <br/>
                  ※繁忙期は対応が遅れる場合がございます。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">受け付け可能な決済手段</h3>
                <p>・銀行振込</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">決済期間</h3>
                <p>
                  銀行振込の場合<br/>
                  ご注文から5営業日以内にお支払いください。期限内にお支払いがない場合、注文は自動的にキャンセルとなります。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">引渡時期</h3>
                <p>決済完了後1～3営業日以内にサポートの開始をいたします。サポート期間は給付金の受給期間に合わせて変化します。</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">交換および返品（返金ポリシー）</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">給付金サポート／転職サポートについて</p>
                    <p>お客様のご都合による契約のキャンセルは提携クリニックのご紹介を行う前に限り可能です。その場合は全額返金いたします。サポート開始後のキャンセルは如何なる場合も返金はできません。</p>
                  </div>
                  <div>
                    <p className="font-medium">サービスに不備があった場合</p>
                    <p>当社の責任によるサービス提供の不備があった場合には、状況に応じて返金または代替サービスの提供を検討いたします。お客様サポート（info@maemuki-support.com）までご連絡ください。</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">その他 注意事項</h3>
                <p>
                  ・特定商取引法に基づく表記に関する情報開示請求があった場合には遅滞なく開示いたします。<br/>
                  ・当社のサービスは法的に認められた範囲内での退職代行サービスとなります。<br/>
                  ・労働条件に関する交渉や訴訟代行などの弁護士法に抵触する行為は行っておりません。<br/>
                  ・サービス内容に関してご不明な点がある場合は、お申込み前にお問い合わせください。
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