"use client";

export default function ExternalTransmissionPage() {
  return (
    <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-start relative bg-white min-h-screen">
      <div className="w-full px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          利用者情報の外部送信について
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <p>
              当サイトでは、サービス向上および利用者体験の改善を目的として、以下のツールを使用し、利用者の行動履歴等を外部事業者に送信しています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              1. Google Analytics
            </h2>
            <div className="space-y-2">
              <p><strong>送信先：</strong>Google LLC</p>
              <p><strong>送信される情報：</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>閲覧したページのURL</li>
                <li>閲覧した日時</li>
                <li>ご利用のブラウザやOS</li>
                <li>IPアドレス（匿名化済み）</li>
                <li>サイト内での行動履歴</li>
              </ul>
              <p><strong>利用目的：</strong>アクセス解析、サイト改善</p>
              <p className="text-xs">
                <a 
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google プライバシーポリシー
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              2. LINE公式アカウント
            </h2>
            <div className="space-y-2">
              <p><strong>送信先：</strong>LINE株式会社</p>
              <p><strong>送信される情報：</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>LINEアカウント情報</li>
                <li>メッセージの内容</li>
                <li>送信日時</li>
              </ul>
              <p><strong>利用目的：</strong>失業保険相談サービスの提供</p>
              <p className="text-xs">
                <a 
                  href="https://line.me/ja/terms/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  LINE プライバシーポリシー
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              3. Meta Pixel（Facebook Pixel）
            </h2>
            <div className="space-y-2">
              <p><strong>送信先：</strong>Meta Platforms, Inc.</p>
              <p><strong>送信される情報：</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>閲覧したページのURL</li>
                <li>リファラー情報</li>
                <li>ユーザーエージェント</li>
                <li>IPアドレス</li>
                <li>サイト内での行動データ</li>
              </ul>
              <p><strong>利用目的：</strong>広告効果の測定、カスタムオーディエンスの作成</p>
              <p className="text-xs">
                <a 
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Meta データポリシー
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              4. 送信の停止について
            </h2>
            <p>
              これらの情報送信を停止したい場合は、各ブラウザの設定でCookieを無効化するか、以下のオプトアウトページをご利用ください：
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                <a 
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-xs"
                >
                  Google Analytics オプトアウト
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-xs"
                >
                  Facebook 広告設定
                </a>
              </li>
            </ul>
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