import { GraduationCap } from 'lucide-react';

const schools = [
  {
    name: 'Taipei First Girls High School',
    nameZh: '臺北市立第一女子高級中學',
    description: 'Green uniforms with classic design',
  },
  {
    name: 'Jianguo High School',
    nameZh: '臺北市立建國高級中學',
    description: 'Traditional khaki uniform',
  },
  {
    name: 'National Taiwan Normal University High School',
    nameZh: '國立臺灣師範大學附屬高級中學',
    description: 'Navy blue uniform with modern style',
  },
];

export function FeaturedSchools() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Featured Schools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide high-quality uniforms for prestigious schools across Taiwan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  <GraduationCap className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 mb-2 break-words">{school.nameZh}</h3>
                  <p className="text-sm text-gray-500 mb-3 break-words">{school.name}</p>
                  <p className="text-sm text-gray-600">{school.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
