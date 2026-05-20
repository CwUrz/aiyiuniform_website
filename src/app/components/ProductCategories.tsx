import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

import { SizeModal } from './SizeModal';

import {
  uniformProducts,
  sportsProducts,
  backpackProduct,
  hoodieProduct,
  sweaterProduct,
  beltProduct,
} from '../data/products';



// ===== 商品分類 =====

const productCategories = [
  ...uniformProducts,

  sweaterProduct,

  ...sportsProducts,

  hoodieProduct,

  backpackProduct,

  beltProduct,
];



export function ProductCategories() {
  const [selectedProduct, setSelectedProduct] =
    useState<any | null>(null);

  return (
    <>
      <section
        id="products"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 標題 */}

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              商品分類
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              提供完整的制服與配件選擇
            </p>
          </div>



          {/* 商品列表 */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

            {productCategories.map(
              (product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >

                  {/* 商品圖片 */}

                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={product.icon}
                      alt={product.name}
                      className="w-full h-full object-contain p-6"
                    />
                  </div>



                  {/* 商品資訊 */}

                  <div className="p-4 space-y-3">

                    <div>
                      <h3 className="text-gray-900 mb-1">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {product.price}
                      </p>
                    </div>



                    {/* 詳情按鈕 */}

                    <button
                      onClick={() =>
                        setSelectedProduct(product)
                      }
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group/btn"
                    >
                      查看詳情

                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>

                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </section>



      {/* 尺寸視窗 */}

      <SizeModal
        isOpen={selectedProduct !== null}
        onClose={() =>
          setSelectedProduct(null)
        }
        productName={
          selectedProduct?.name || ''
        }
        sizes={
          selectedProduct?.sizes || []
        }
      />
    </>
  );
}