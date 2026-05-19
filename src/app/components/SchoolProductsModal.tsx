import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  icon: string;
}

interface SchoolProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName: string;
  products: Product[];
}

export function SchoolProductsModal({
  isOpen,
  onClose,
  schoolName,
  products,
}: SchoolProductsModalProps) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onClose}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-[90vw] max-w-4xl max-h-[85vh] overflow-y-auto z-50">
          <div className="flex items-start justify-between mb-6">
            <Dialog.Title className="text-2xl text-gray-900">
              {schoolName} - 商品清單
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="關閉"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </Dialog.Close>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="aspect-square bg-white p-4">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3">
                  <h4 className="text-sm text-gray-900 mb-1">
                    {product.name}
                  </h4>

                  <p className="text-xs text-gray-600">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              如需訂購，請點選上方「我要訂購」按鈕前往表單
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}