"use client";

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-start relative bg-white min-h-screen">
      <div className="w-full px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          プライバシーポリシー
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              個人情報の取扱いについて
            </h2>
            <p>
              株式会社feer（以下「当社」）は、お客様の個人情報の保護に関して、個人情報の保護に関する法律、関係法令等を遵守し、適切な取扱いを実施いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              1. 個人情報の収集について
            </h2>
            <p>
              当社は、失業保険相談サービスの提供にあたり、以下の個人情報を収集いたします：
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>お名前</li>
              <li>連絡先（電話番号、メールアドレス、LINEアカウント）</li>
              <li>職歴・雇用状況に関する情報</li>
              <li>失業保険に関する情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              2. 個人情報の利用目的
            </h2>
            <p>収集した個人情報は、以下の目的で利用いたします：</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>失業保険に関する相談・アドバイスの提供</li>
              <li>お客様へのご連絡・情報提供</li>
              <li>サービスの改善・新サービスの開発</li>
              <li>統計データの作成（個人を特定できない形式）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              3. 個人情報の第三者提供
            </h2>
            <p>
              当社は、法令に基づく場合や本人の同意がある場合を除き、個人情報を第三者に提供いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              4. 個人情報の管理
            </h2>
            <p>
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              5. お問い合わせ
            </h2>
            <p>
              個人情報に関するお問い合わせは、以下までご連絡ください：
            </p>
            <div className="mt-2 p-3 bg-gray-50 rounded">
              <p className="font-medium">株式会社feer</p>
              <p>〒160-0023</p>
              <p>東京都新宿区西新宿7丁目5-5プラザ西新宿309</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              6. プライバシーポリシーの変更
            </h2>
            <p>
              当社は、法令の変更等に伴い、本プライバシーポリシーを予告なく変更することがあります。
            </p>
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