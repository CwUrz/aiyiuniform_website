import { Award, Heart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '優質品質',
    description: '精選布料，專業裁製工藝',
  },
  {
    icon: Heart,
    title: '在地信賴',
    description: '深耕宜蘭地區超過 20 年',
  },
  {
    icon: ShieldCheck,
    title: '尺寸保證',
    description: '提供免費修改與尺寸調整服務',
  },
];

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">關於我們</h2>
              <p className="text-gray-600 leading-relaxed">
                愛一學生制服店是宜蘭地區最受信賴的學生制服專賣店。我們專注於提供高品質的制服與體育服，
                為宜蘭地區的高中、國中學生提供專業的服務。
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              我們的專業團隊提供個人化的尺寸諮詢與專業修改服務，確保每位學生都能穿著合身舒適的制服。
              我們重視每個細節，致力於提供最優質的產品與服務。
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gray-50 rounded-xl shadow-sm">
                      <Icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
