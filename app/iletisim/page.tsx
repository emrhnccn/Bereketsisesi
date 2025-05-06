'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    energy: '',
    intention: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Mail gönderilemedi')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        message: '',
        energy: '',
        intention: ''
      })
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-emerald-800">İletişim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-emerald-800">Bize Ulaşın</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-700">Telefon</h3>
                <p className="text-gray-600">+90 544 134 4125</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-emerald-700">E-posta</h3>
                <p className="text-gray-600">info.bereketsiseleri@gmail.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-emerald-700 mb-4">Bereket Şişeleri Hakkında</h3>
              <p className="text-gray-600">
                Her bereket şişesi, sizin için özel olarak tasarlanır ve doğanın enerjisini taşır. 
                İçerisinde özenle seçilmiş kristaller ve doğal malzemeler bulunur. 
                Amacınıza ve enerji ihtiyacınıza göre özelleştirilir.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-emerald-800">İletişim Formu</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">İsim</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="energy" className="block text-sm font-medium text-gray-700">Enerji Tipi</label>
                <select
                  id="energy"
                  name="energy"
                  value={formData.energy}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="Bolluk ve Bereket">Bolluk ve Bereket</option>
                  <option value="Şifa ve İyileşme">Şifa ve İyileşme</option>
                  <option value="Koruma">Koruma</option>
                  <option value="Aşk ve Uyum">Aşk ve Uyum</option>
                  <option value="Başarı ve Güç">Başarı ve Güç</option>
                </select>
              </div>

              <div>
                <label htmlFor="intention" className="block text-sm font-medium text-gray-700">Dönüşüm İsteği</label>
                <input
                  type="text"
                  id="intention"
                  name="intention"
                  value={formData.intention}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">Mesajınız başarıyla gönderildi!</p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 