import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 入力値検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // Gmail SMTP設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 運営者宛メール
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `【MAEMUKIお問い合わせ】${subject}`,
      html: `
        <h2>MAEMUKIサイトからお問い合わせがありました</h2>
        <hr>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ項目:</strong> ${subject}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">
          送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        </p>
      `,
    };

    // お客様宛自動返信メール
    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '【MAEMUKI】お問い合わせを受け付けました',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p>${name} 様</p>
          
          <p>この度は、MAEMUKIへお問い合わせいただき、ありがとうございます。<br>
          以下の内容でお問い合わせを受け付けいたしました。</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">お問い合わせ内容</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>お問い合わせ項目:</strong> ${subject}</p>
            <p><strong>お問い合わせ内容:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>内容を確認の上、3営業日以内にご連絡いたします。<br>
          しばらくお待ちください。</p>
          
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>緊急性の高いご相談について</strong></p>
            <p>失業保険に関する緊急性の高いご相談は、LINEでの無料相談もご利用いただけます。<br>
            LINE ID: @508bxanx</p>
          </div>
          
          <hr style="border: none; height: 1px; background-color: #ddd; margin: 30px 0;">
          
          <div style="color: #666; font-size: 12px;">
            <p><strong>株式会社feer</strong><br>
            〒160-0023 東京都新宿区西新宿7丁目5-5プラザ西新宿309<br>
            Website: https://feer-design.com</p>
            
            <p>※このメールは自動送信です。このメールに直接返信いただいても対応できません。<br>
            ご質問等がございましたら、改めてお問い合わせフォームよりご連絡ください。</p>
          </div>
        </div>
      `,
    };

    // メール送信実行
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return NextResponse.json(
      { message: 'メールが正常に送信されました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました。時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}