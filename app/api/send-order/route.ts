import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { orderData, cartItems } = data

    // E-posta gönderici ayarları
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.bereketsiseleri@gmail.com',
        pass: 'rcqx gucr tucm exyc' // Gmail'den alacağınız uygulama şifresi
      }
    })

    // E-posta içeriği
    const mailOptions = {
      from: 'info.bereketsiseleri@gmail.com',
      to: 'info.bereketsiseleri@gmail.com',
      subject: 'Yeni Sipariş',
      html: `
        <h2>Yeni Sipariş Detayları</h2>
        <h3>Müşteri Bilgileri:</h3>
        <p><strong>Ad Soyad:</strong> ${orderData.name}</p>
        <p><strong>E-posta:</strong> ${orderData.email}</p>
        <p><strong>Telefon:</strong> ${orderData.phone}</p>
        <p><strong>Adres:</strong> ${orderData.address}</p>
        <p><strong>Şehir:</strong> ${orderData.city}</p>
        <p><strong>Not:</strong> ${orderData.note || 'Not belirtilmedi'}</p>
        
        <h3>Sipariş Edilen Ürünler:</h3>
        <ul>
          ${cartItems.map((item: any) => `
            <li>
              ${item.name} - ${item.quantity} adet - ${item.price} TL
            </li>
          `).join('')}
        </ul>
        
        <h3>Toplam Tutar: ${cartItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0).toFixed(2)} TL</h3>
      `
    }

    // E-postayı gönder
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('E-posta gönderme hatası:', error)
    return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 })
  }
} 