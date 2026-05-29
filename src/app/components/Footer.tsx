import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white">
              愛一學生制服店
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              宜蘭地區專業學生制服店
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white">
              快速連結
            </h4>

            <div className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                首頁
              </a>

              <a
                href="#products"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                商品介紹
              </a>

              <a
                href="#size-guide"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                尺寸建議
              </a>

              <a
                href="#order"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                訂購資訊
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white">
              聯絡資訊
            </h4>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />

                <span className="text-gray-400 text-sm">
                  (03) 9543-2100
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />

                <span className="text-gray-400 text-sm">
                  contact@ayi-uniform.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />

                <a
                  href="https://maps.app.goo.gl/6mXoMEfmBjcV6GLo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  宜蘭縣羅東鎮中正路 123 號
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white">
              追蹤我們
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/%E6%84%9B%E4%B8%80%E5%AD%B8%E7%94%9F%E6%9C%8D-100057064795298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Credits */}

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-white mb-4">
            圖片來源
          </h4>

          <ul className="space-y-2 text-sm text-gray-400 break-words">
            <li>
              Skirt icons created by Freepik -
              Flaticon
            </li>

            <li>
              Clothes icons created by Freepik -
              Flaticon
            </li>

            <li>
              Tshirt icons created by bqlqn -
              Flaticon
            </li>

            <li>
              Shirt icons created by Victoruler -
              Flaticon
            </li>

            <li>
              Pants icons created by Freepik -
              Flaticon
            </li>

            <li>
              Short icons created by Good Ware -
              Flaticon
            </li>

            <li>
              Sweater icons created by Freepik -
              Flaticon
            </li>

            <li>
              Clothing icons created by Victoruler -
              Flaticon
            </li>

            <li>
              Jacket icons created by Victoruler -
              Flaticon
            </li>

            <li>
              Backpack icons created by Mayor Icons -
              Flaticon
            </li>

            <li>
              Belt icons created by Hazicon -
              Flaticon
            </li>

            <li>
              Pants icons created by Good Ware -
              Flaticon
            </li>

            <li>
              Pant icons created by Irvan Kurnianto -
              Flaticon
            </li>

            <li>
              Long sleeve icons created by Ains -
              Flaticon
            </li>
          </ul>
        </div>

        {/* Copyright */}

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 愛一學生制服店.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}