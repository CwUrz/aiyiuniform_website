import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-gray-900">愛一學生制服店</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              首頁
            </a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">
              商品資訊
            </a>
            <a href="#order" className="text-gray-700 hover:text-gray-900 transition-colors">
              我要訂購
            </a>
            <a href="#size-guide" className="text-gray-700 hover:text-gray-900 transition-colors">
              尺寸建議
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              聯絡我們
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                首頁
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                商品資訊
              </a>
              <a
                href="#order"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                我要訂購
              </a>
              <a
                href="#size-guide"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                尺寸建議
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                聯絡我們
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
