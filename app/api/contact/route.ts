import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message, energy, intention } = await request.json()

    // Gmail SMTP ayarları
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.bereketsiseleri@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password
      }
    })

    // Mail içeriği
    const mailOptions = {
      from: 'info.bereketsiseleri@gmail.com',
      to: 'info.bereketsiseleri@gmail.com',
      subject: 'Yeni İletişim Formu Mesajı',
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Enerji Tipi:</strong> ${energy}</p>
        <p><strong>Dönüşüm İsteği:</strong> ${intention}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `
    }

    // Mail gönderme
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Mail başarıyla gönderildi' }, { status: 200 })
  } catch (error) {
    console.error('Mail gönderme hatası:', error)
    return NextResponse.json(
      { error: 'Mail gönderilirken bir hata oluştu' },
      { status: 500 }
    )
  }
} 