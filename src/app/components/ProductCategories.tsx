import { ArrowRight, Shirt, Minus, Backpack, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { ComponentType } from 'react';
import { SizeModal } from './SizeModal';
import { ProductIcon } from './ProductIcon';
import { JacketIcon } from './icons/JacketIcon';
import { LongSleeveIcon } from './icons/LongSleeveIcon';
import { ShortsIcon } from './icons/ShortsIcon';
import { SkirtIcon } from './icons/SkirtIcon';
import { PantsIcon } from './icons/PantsIcon';

interface SizeInfo {
  label: string;
  values: string[];
}

interface ProductCategory {
  name: string;
  price: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  sizes: SizeInfo[];
}

const productCategories: ProductCategory[] = [
  {
    name: '制服外套',
    price: 'NT$ 850 起',
    icon: JacketIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['S', 'M', 'L', 'XL', '2L', '3L', '4L', '5L', '6L', '7L'],
      },
    ],
  },
  {
    name: '制服短袖',
    price: 'NT$ 380 起',
    icon: Shirt,
    sizes: [
      {
        label: '尺碼',
        values: ['9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
    ],
  },
  {
    name: '制服長袖',
    price: 'NT$ 450 起',
    icon: LongSleeveIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
    ],
  },
  {
    name: '制服短褲',
    price: 'NT$ 420 起',
    icon: ShortsIcon,
    sizes: [
      {
        label: '長度',
        values: ['12', '14', '16'],
      },
      {
        label: '腰圍',
        values: ['25/26', '27/28', '29/30', '31/32', '33/34', '35/36', '37/38'],
      },
    ],
  },
  {
    name: '制服裙子',
    price: 'NT$ 420 起',
    icon: SkirtIcon,
    sizes: [
      {
        label: '長度',
        values: ['6', '7'],
      },
      {
        label: '腰圍',
        values: ['25/26', '27/28', '29/30', '31/32', '33/34', '35/36', '37/38'],
      },
    ],
  },
  {
    name: '制服長褲',
    price: 'NT$ 480 起',
    icon: PantsIcon,
    sizes: [
      {
        label: '長度',
        values: ['36長', '38長', '40長', '42長'],
      },
      {
        label: '腰圍',
        values: ['25/26', '27/28', '29/30', '31/32', '33/34', '35/36', '37/38'],
      },
    ],
  },
  {
    name: '體育外套',
    price: 'NT$ 780 起',
    icon: JacketIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48', '50'],
      },
    ],
  },
  {
    name: '體育短袖',
    price: 'NT$ 350 起',
    icon: Shirt,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48', '50'],
      },
    ],
  },
  {
    name: '體育短褲',
    price: 'NT$ 320 起',
    icon: ShortsIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48', '50', '52'],
      },
    ],
  },
  {
    name: '體育長袖',
    price: 'NT$ 420 起',
    icon: LongSleeveIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48', '50'],
      },
    ],
  },
  {
    name: '體育長褲',
    price: 'NT$ 450 起',
    icon: PantsIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['34', '36', '38x36', '38x38', '38x40', '38x42', '40x38', '40x40', '40x42', '40x44', '42x38', '42', '44', '46', '48', '50', '52'],
      },
    ],
  },
  {
    name: '毛衣',
    price: 'NT$ 680 起',
    icon: LongSleeveIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['S', 'M', 'L', 'XL', '2L', '3L', '4L'],
      },
    ],
  },
  {
    name: '書包',
    price: 'NT$ 550 起',
    icon: Backpack,
    sizes: [
      {
        label: '標準尺寸',
        values: ['均一尺寸'],
      },
    ],
  },
  {
    name: '帽T',
    price: 'NT$ 720 起',
    icon: JacketIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['S', 'M', 'L', 'XL', '2L', '3L'],
      },
    ],
  },
  {
    name: '腰帶',
    price: 'NT$ 180 起',
    icon: Minus,
    sizes: [
      {
        label: '標準尺寸',
        values: ['均一尺寸'],
      },
    ],
  },
];

export function ProductCategories() {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">商品分類</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              提供完整的制服與配件選擇
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {productCategories.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <ProductIcon icon={product.icon} />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group/btn"
                  >
                    查看詳情
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SizeModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name || ''}
        sizes={selectedProduct?.sizes || []}
      />
    </>
  );
}
