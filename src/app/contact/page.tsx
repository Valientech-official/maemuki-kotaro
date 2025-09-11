"use client";

import { useState } from "react";
import Link from "next/link";

// この部分はclient componentなので、メタデータはlayout.tsxまたは別途設定

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(data.error || 'エラーが発生しました。');
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert('ネットワークエラーが発生しました。時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-center relative bg-white min-h-screen">
        <div className="w-full px-6 py-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              送信完了
            </h1>
            <p className="text-gray-600 mb-6">
              お問い合わせありがとうございます。<br/>
              内容を確認の上、3営業日以内にご連絡いたします。
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[390px] mx-auto content-stretch flex flex-col items-center justify-start relative bg-white min-h-screen">
      <div className="w-full px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          お問い合わせ
        </h1>
        
        <div className="space-y-6">
          <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded">
            <p className="mb-2">
              失業保険に関するご相談は、LINEでの無料相談が便利です。
            </p>
            <a 
              href="https://line.me/R/ti/p/@508bxanx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600 transition-colors"
            >
              LINE無料相談はこちら
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ項目 <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="失業保険について">失業保険について</option>
                <option value="サービスについて">サービスについて</option>
                <option value="技術的な問題">技術的な問題</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </form>

          <div className="text-xs text-gray-500 space-y-2">
            <p>
              ※ お問い合わせいただいた内容は、プライバシーポリシーに従って適切に管理いたします。
            </p>
            <p>
              ※ 返信には3営業日程度お時間をいただく場合があります。
            </p>
            <p>
              ※ 緊急性の高いご相談は、LINEでの無料相談をご利用ください。
            </p>
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              運営会社情報
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>株式会社MAEMUKI</p>
              <p>〒160-0023</p>
              <p>東京都新宿区西新宿7丁目5-5プラザ西新宿309</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}