import { School } from 'lucide-react';
import { useState } from 'react';

import { SchoolProductsModal } from './SchoolProductsModal';

import {
  juniorHighSchools,
  juniorHighSchoolProductsMap,
} from '@/data/juniorHighSchools';

export function JuniorHighSchools() {
  const [selectedSchool, setSelectedSchool] =
    useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              國中學校
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              提供宜蘭地區各國中學校制服
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {juniorHighSchools.map((school, index) => (
              <div
                key={index}
                onClick={() => setSelectedSchool(school)}
                className="group bg-white rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex flex-col items-center text-center gap-3">

                  <div className="p-3 bg-gray-50 group-hover:bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                    <School className="w-6 h-6 text-gray-900" />
                  </div>

                  <h3 className="text-gray-900">
                    {school}
                  </h3>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <SchoolProductsModal
        isOpen={selectedSchool !== null}
        onClose={() => setSelectedSchool(null)}
        schoolName={selectedSchool || ''}
        products={
          selectedSchool
            ? juniorHighSchoolProductsMap[
                selectedSchool as keyof typeof juniorHighSchoolProductsMap
              ] || []
            : []
        }
      />
    </>
  );
}