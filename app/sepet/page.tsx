'use client'

import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import OrderModal from '../components/OrderModal'

interface OrderData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  note?: string
}

export default function Sepet() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOrderSubmit = async (orderData: OrderData) => {
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderData,
          cartItems: cart
        }),
      })

      if (!response.ok) {
        throw new Error('Sipariş gönderilemedi')
      }

      // Başarılı sipariş sonrası sepeti temizle
      cart.forEach(item => removeFromCart(item.id))
      
      // Modalı kapat
      setIsOrderModalOpen(false)
      
      // Kullanıcıya başarılı mesajı göster
      alert('Siparişiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.')
    } catch (error) {
      console.error('Sipariş hatası:', error)
      alert('Sipariş gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">Sepetim</h1>
        
        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">Sepetiniz boş</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 mb-4">
                  <div className="flex items-center">
                    <div className="relative h-24 w-24 mr-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-emerald-800">{item.name}</h3>
                      <p className="text-gray-600">{item.price} TL</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-800">Sipariş Özeti</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Toplam Ürün:</span>
                    <span>{totalItems} adet</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Toplam Tutar:</span>
                    <span>{totalPrice.toFixed(2)} TL</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOrderModalOpen(true)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg mt-6 hover:bg-emerald-700 transition"
                >
                  Siparişi Tamamla
                </button>
              </div>
            </div>
          </div>
        )}

        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          totalPrice={totalPrice}
          onSubmit={handleOrderSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </main>
  )
} 