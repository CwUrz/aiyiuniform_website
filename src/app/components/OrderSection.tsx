import { ExternalLink } from 'lucide-react';

export function OrderSection() {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl text-white mb-4">我要訂購</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                填寫線上訂購表，我們將盡快與您聯繫確認訂單詳情
              </p>
            </div>

            <a
              href="/制服店線上訂購系統_包好.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-lg group"
            >
              前往訂購
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="text-sm text-gray-400 mt-6">
              如有任何問題，歡迎來電洽詢或親臨門市選購
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
