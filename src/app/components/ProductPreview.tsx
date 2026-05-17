import { Ruler } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: 'Summer Uniform Set',
    nameZh: '夏季制服套裝',
    price: 'NT$ 1,280',
    image: 'https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODA1MDQyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Winter Uniform Set',
    nameZh: '冬季制服套裝',
    price: 'NT$ 1,680',
    image: 'https://images.unsplash.com/photo-1769107805412-90d9191d53e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODA1MDQyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Sports Jacket',
    nameZh: '運動外套',
    price: 'NT$ 890',
    image: 'https://images.unsplash.com/photo-1770226415002-dbbd40327ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODA1MDQyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'PE Uniform',
    nameZh: '體育服',
    price: 'NT$ 780',
    image: 'https://images.unsplash.com/photo-1770198638064-588d85904c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB1bmlmb3JtJTIwYXNpYW4lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzgyMDM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProductPreview() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium quality school uniforms with professional tailoring
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-gray-900 mb-1">{product.nameZh}</h3>
                  <p className="text-sm text-gray-500">{product.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-900">{product.price}</p>
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
                    <Ruler size={16} />
                    Size Guide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
