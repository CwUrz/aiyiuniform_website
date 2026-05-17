import heroImage from '../../imports/image.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900">
                愛一學生制服店
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                宜蘭地區高中與國中制服、體育服、外套與配件
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#products"
                className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
              >
                商品介紹
              </a>
              <a
                href="#order"
                className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                我要訂購
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={heroImage}
                alt="愛一學生制服店 - 台灣製學生制服"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
