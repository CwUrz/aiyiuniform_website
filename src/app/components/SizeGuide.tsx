const heights = [
  '150-155',
  '155-160',
  '160-165',
  '165-170',
  '170-175',
  '175-180',
  '180-185',
  '185-190',
  '190-195',
  '195-200',
] as const;

const sizeColumns = [
  { name: '體重 (kg)', values: ['30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', '100-110', '110-120', '120-130'] },
  { name: '制服外套', values: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'] },
  { name: '制服短袖', values: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18'] },
  { name: '制服長袖', values: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18'] },
  { name: '體育外套', values: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'] },
  { name: '體育短袖', values: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'] },
  { name: '體育長袖', values: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'] },
  { name: '體育短褲', values: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'] },
  { name: '體育長褲', values: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'] },
  { name: '長褲長度', values: ['36長', '', '38長', '', '40長', '', '42長', '', '', ''] },
  { name: '褲子腰圍', values: ['24-26', '26-28', '28-30', '30-32', '32-34', '34-37', '37-40', '40-43', '43-46', '46-50'] },
] as const;

export function SizeGuide() {
  return (
    <section
      id="size-guide"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            尺寸建議表
          </h2>
          <p className="text-gray-600">
            可依照身高、體重與腰圍選擇適合尺寸
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="sticky left-0 bg-gray-900 p-4 text-left min-w-[100px]">
                  <span className="block leading-snug">身高(cm)</span>
                  <span className="block text-gray-400 text-xs mt-0.5">品項</span>
                </th>
                {sizeColumns.map((col) => (
                  <th key={col.name} className="p-4 text-center whitespace-nowrap min-w-[88px]">
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {heights.map((height, rowIndex) => (
                <tr
                  key={height}
                  className={`border-b border-gray-100 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td
                    className={`sticky left-0 p-4 font-medium text-gray-900 whitespace-nowrap ${
                      rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    {height}
                  </td>
                  {sizeColumns.map((col) => (
                    <td key={col.name} className="p-4 text-center">
                      {col.values[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-gray-700">
          <p className="mb-2">
            ・尺寸表僅供參考，實際尺寸可能因學校款式略有差異
          </p>
          <p className="mb-2">
            ・若介於兩個尺寸之間，建議選擇較大尺寸
          </p>
          <p>
            ・如不確定尺寸，可於訂購表單備註身高與體重
          </p>
        </div>
      </div>
    </section>
  );
}
