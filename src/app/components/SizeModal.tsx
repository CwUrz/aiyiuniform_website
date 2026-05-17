import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface SizeInfo {
  label: string;
  values: string[];
}

interface SizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  sizes: SizeInfo[];
}

export function SizeModal({ isOpen, onClose, productName, sizes }: SizeModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto z-50">
          <div className="flex items-start justify-between mb-6">
            <Dialog.Title className="text-2xl text-gray-900">
              {productName} - 尺寸表
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

          <div className="space-y-6">
            {sizes.map((sizeInfo, index) => (
              <div key={index} className="space-y-3">
                {sizeInfo.label && (
                  <h3 className="text-gray-900">{sizeInfo.label}</h3>
                )}
                <div className="flex flex-wrap gap-2">
                  {sizeInfo.values.map((size, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      className="px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              如需尺寸建議，請聯繫我們的專業團隊
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
