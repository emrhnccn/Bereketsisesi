'use client'

import Image from 'next/image'
import { useCart } from '../context/CartContext'

export default function Market() {
  const { addToCart } = useCart()

  // Ürün verileri
  const products = [
    {
      id: 1,
      name: "Boş Şişe",
      description: "Kendi bereket şişenizi hazırlamak için boş şişe. Doğal malzemelerle doldurarak kendi enerjinizi yaratın.",
      price: 59.99,
      image: "/products/bossise.jpg",
      energyType: "Boş Şişe",
      quantity: 1
    },
    {
      id: 2,
      name: "Şifa Şişesi",
      description: "Fiziksel ve ruhsal şifa için özel olarak hazırlanmış şişe. Doğal kristaller ve şifalı bitkilerle desteklenmiştir.",
      price: 189.99,
      image: "/products/sifasise.jpg",
      energyType: "Şifa ve İyileşme",
      quantity: 1
    },
    {
      id: 3,
      name: "Bereket Şişesi",
      description: "Bolluk ve bereketi hayatınıza çeken özel tasarım şişe. Doğal kristaller ve bitkilerle hazırlanmıştır.",
      price: 189.99,
      image: "/products/bereketsise.jpg",
      energyType: "Bolluk ve Bereket",
      quantity: 1
    },
    {
      id: 4,
      name: "Arıtma Şişesi",
      description: "Negatif enerjileri arındıran ve pozitif enerjiyi çeken özel tasarım şişe.",
      price: 189.99,
      image: "/products/arıtmasise.jpg",
      energyType: "Arındırma ve Koruma",
      quantity: 1
    },
    {
      id: 5,
      name: "Tutku Şişesi",
      description: "Aşk ve tutkuyu hayatınıza çeken özel tasarım şişe. Doğal kristaller ve bitkilerle hazırlanmıştır.",
      price: 189.99,
      image: "/products/tutkusise.jpg",
      energyType: "Aşk ve Tutku",
      quantity: 1
    },
    {
      id: 6,
      name: "Büyüyü Serbest Bırakma Şişesi",
      description: "Geçmişi serbest bırakmanıza yardımcı olan özel tasarım şişe.",
      price: 189.99,
      image: "/products/buyuyuserbestbirakmasise.jpg",
      energyType: "Serbest Bırakma",
      quantity: 1
    },
    {
      id: 7,
      name: "Evlilik Şişesi",
      description: "Evlilik ve aile bağlarını güçlendiren özel tasarım şişe.",
      price: 189.99,
      image: "/products/evliliksise.jpg",
      energyType: "Evlilik ve Aile",
      quantity: 1
    },
    {
      id: 8,
      name: "Cesaret Şişesi",
      description: "İçsel cesareti ve gücü ortaya çıkaran özel tasarım şişe.",
      price: 189.99,
      image: "/products/cesaretsise.jpg",
      energyType: "Cesaret ve Güç",
      quantity: 1
    },
    {
      id: 9,
      name: "Nazara Karşı Şişesi",
      description: "Nazar ve kötü enerjilere karşı koruma sağlayan özel tasarım şişe.",
      price: 189.99,
      image: "/products/nazarakarsisise.jpg",
      energyType: "Koruma",
      quantity: 1
    },
    {
      id: 10,
      name: "Topraklama Şişesi",
      description: "Dünyasal enerjiyle bağlantıyı güçlendiren özel tasarım şişe.",
      price: 189.99,
      image: "/products/topraklamasise.jpg",
      energyType: "Topraklama",
      quantity: 1
    },
    {
      id: 11,
      name: "Anti-Stres Şişesi",
      description: "Stres ve kaygıyı azaltmaya yardımcı olan özel tasarım şişe.",
      price: 189.99,
      image: "/products/antistressise.jpg",
      energyType: "Huzur ve Sakinlik",
      quantity: 1
    },
    {
      id: 12,
      name: "Hızlı Para Akımı Şişesi",
      description: "Maddi bolluğu ve para akışını hızlandıran özel tasarım şişe.",
      price: 189.99,
      image: "/products/hızlıparaakimisise.jpg",
      energyType: "Maddi Bolluk",
      quantity: 1
    },
    {
      id: 13,
      name: "Koruma Şişesi",
      description: "Genel koruma ve güvenlik sağlayan özel tasarım şişe.",
      price: 189.99,
      image: "/products/korumasise.jpg",
      energyType: "Koruma",
      quantity: 1
    },
    {
      id: 14,
      name: "Büyüyü Asaklama Şişesi",
      description: "Negatif büyüleri ve enerjileri durduran özel tasarım şişe.",
      price: 189.99,
      image: "/products/buyuyuyasaklamasise.jpg",
      energyType: "Koruma",
      quantity: 1
    },
    {
      id: 15,
      name: "Dogruluk Şişesi",
      description: "İçsel doğruluğu ve dürüstlüğü destekleyen özel tasarım şişe.",
      price: 189.99,
      image: "/products/dogruluksise.jpg",
      energyType: "Dürüstlük",
      quantity: 1
    },
    {
      id: 16,
      name: "Vizyon Şişesi",
      description: "Gelecek vizyonunu ve sezgileri güçlendiren özel tasarım şişe.",
      price: 189.99,
      image: "/products/vizyonsise.jpg",
      energyType: "Vizyon",
      quantity: 1
    },
    {
      id: 17,
      name: "Arkadaşlık Şişesi",
      description: "Arkadaşlık bağlarını güçlendiren özel tasarım şişe.",
      price: 189.99,
      image: "/products/arkadasliksise.jpg",
      energyType: "Arkadaşlık",
      quantity: 1
    },
    {
      id: 18,
      name: "Romantik Şişesi",
      description: "Romantik ilişkileri güçlendiren özel tasarım şişe.",
      price: 189.99,
      image: "/products/romantiksise.jpg",
      energyType: "Romantizm",
      quantity: 1
    },
    {
      id: 19,
      name: "Beni Takip Et Şişesi",
      description: "Kişisel çekim gücünü artıran özel tasarım şişe.",
      price: 189.99,
      image: "/products/benitakipetsise.jpg",
      energyType: "Çekim",
      quantity: 1
    },
    {
      id: 20,
      name: "İyi Sans Şişesi",
      description: "Şans ve fırsatları çeken özel tasarım şişe.",
      price: 189.99,
      image: "/products/iyisanssise.jpg",
      energyType: "Şans",
      quantity: 1
    },
    {
      id: 21,
      name: "Anti-Kabus Şişesi",
      description: "Kabusları ve kötü rüyaları engelleyen özel tasarım şişe.",
      price: 189.99,
      image: "/products/antikabussise.jpg",
      energyType: "Koruma",
      quantity: 1
    },
    {
      id: 22,
      name: "Hakimiyet Şişesi",
      description: "Kişisel gücü ve hakimiyeti artıran özel tasarım şişe.",
      price: 189.99,
      image: "/products/hakimiyetsise.jpg",
      energyType: "Güç",
      quantity: 1
    },
    {
      id: 23,
      name: "Doğurganlık Şişesi",
      description: "Doğurganlığı ve üretkenliği destekleyen özel tasarım şişe.",
      price: 189.99,
      image: "/products/dogurganlıksise.jpg",
      energyType: "Doğurganlık",
      quantity: 1
    },
    {
      id: 24,
      name: "Mutluluk Şişesi",
      description: "Mutluluk ve neşeyi hayatınıza çeken özel tasarım şişe.",
      price: 189.99,
      image: "/products/mutluluksise.jpg",
      energyType: "Mutluluk",
      quantity: 1
    }
  ]

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-emerald-800">Bereket Şişeleri</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4"
                  priority={product.id <= 4}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {product.energyType}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">{product.price} TL</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 