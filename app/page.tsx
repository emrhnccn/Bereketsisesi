import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/nature-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4 text-emerald-800">Bereket Şişeleri</h1>
                <p className="text-xl mb-8 text-emerald-700 max-w-2xl">
                  Doğanın enerjisini ve bereketini hayatınıza taşıyın. Size özel hazırlanan bereket şişeleri ile 
                  yaşamınızda pozitif dönüşümler yaratın.
                </p>
                <Link href="/market" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg">
                  Şişeleri Keşfet
                </Link>
              </div>
              <div className="flex-1 relative h-[400px] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-emerald-100/30 rounded-[3rem] shadow-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-emerald-200/30 rounded-[3rem] shadow-lg transform -rotate-3"></div>
                <div className="relative h-full w-full p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-[3rem]">
                    <Image
                      src="/products/anasayfaresim.png"
                      alt="Bereket Şişeleri"
                      fill
                      style={{ borderRadius: '3rem' }}
                      className="object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bereket Şişesi Nedir Bölümü */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Bereket Şişesi Nedir?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Bereket Şişesi, kadim bilgilerden, doğadan ve ritüellerden ilham alarak ortaya çıkmış bir ruhsal yaşam markasıdır.
              </p>
              <p className="mb-4">
                Her bir şişe, belirli bir niyet için özenle hazırlanır: aşkı çağırmak, bolluğu artırmak, kötü enerjilerden korunmak ya da sadece iç huzuru desteklemek...
              </p>
              <p className="mb-4">
                Kullandığımız otlar, kristaller ve semboller tamamen doğal ve enerjisel uyum gözetilerek seçilir. Her ürün, el yapımıdır ve tekil olarak niyetlenerek hazırlanır.
              </p>
              <p>
                Amacımız sadece estetik bir obje sunmak değil; ruhunuza dokunan, enerjinizi destekleyen özel bir yol arkadaşı yaratmaktır.
              </p>
            </div>
          </div>

          {/* Bizi Tercih Etmeniz İçin Nedenler */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800">Bizi Tercih Etmeniz İçin Nedenler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition">
                  <div className="bg-emerald-100 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/products/sisehazirlama.png"
                      alt="Şişe Hazırlama"
                      width={200}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">Her Şişe Özenle ve El Yapımı Hazırlanır</h3>
                  <p className="text-gray-600 mb-4">Otlar, kristaller ve semboller enerjisel uyuma göre seçilir; her biri tek tek niyetlenerek hazırlanır.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition">
                  <div className="bg-emerald-100 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/products/dogafoto.jpg"
                      alt="Doğanın Gücü"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">Doğanın Gerçek Gücünü Taşır</h3>
                  <p className="text-gray-600 mb-4">Şişelerimizde sentetik hiçbir şey yok yalnızca doğanın sunduğu şifa, denge ve dönüşüm enerjisi.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition">
                  <div className="bg-emerald-100 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/products/tesekkürresmi.jpg"
                      alt="Mutlu Müşteriler"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">Mutlu ve Dönüşüm Yaşayan Müşteriler</h3>
                  <p className="text-gray-600 mb-4">Bizim için en büyük ilham, şişelerini alan insanların ruhlarına iyi geldiğini duymak.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-emerald-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 mb-6">
            <p className="text-sm">
              Tüm metin, fotoğraf ve video materyalleri, ilgili sahiplerine ait olup yalnızca tanıtım amacıyla kullanılmaktadır. 
              Bu materyallerin ticari projelerde kullanılmaması rica olunur.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <a 
              href="https://www.instagram.com/bereketsiseleri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">@bereketsiseleri</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
