export function SizeGuide() {
  return (
    <section
      id="size-guide"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            尺寸建議表
          </h2>

          <p className="text-gray-600">
            可依照身高、體重與腰圍選擇適合尺寸
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="sticky left-0 bg-gray-900 p-4 text-left min-w-[140px]">
                  品項
                </th>

                <th className="p-4 text-center">150-155</th>
                <th className="p-4 text-center">155-160</th>
                <th className="p-4 text-center">160-165</th>
                <th className="p-4 text-center">165-170</th>
                <th className="p-4 text-center">170-175</th>
                <th className="p-4 text-center">175-180</th>
                <th className="p-4 text-center">180-185</th>
                <th className="p-4 text-center">185-190</th>
                <th className="p-4 text-center">190-195</th>
                <th className="p-4 text-center">195-200</th>
              </tr>
            </thead>

            <tbody>
              {/* 體重 */}
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="sticky left-0 bg-gray-100 p-4 font-medium text-gray-900">
                  體重 (kg)
                </td>

                <td className="p-4 text-center">30-40</td>
                <td className="p-4 text-center">40-50</td>
                <td className="p-4 text-center">50-60</td>
                <td className="p-4 text-center">60-70</td>
                <td className="p-4 text-center">70-80</td>
                <td className="p-4 text-center">80-90</td>
                <td className="p-4 text-center">90-100</td>
                <td className="p-4 text-center">100-110</td>
                <td className="p-4 text-center">110-120</td>
                <td className="p-4 text-center">120-130</td>
              </tr>

              {/* 制服外套 */}
              <tr className="border-b border-gray-100">
                <td className="sticky left-0 bg-white p-4 font-medium">
                  制服外套
                </td>

                <td className="p-4 text-center">S</td>
                <td className="p-4 text-center">M</td>
                <td className="p-4 text-center">L</td>
                <td className="p-4 text-center">XL</td>
                <td className="p-4 text-center">2XL</td>
                <td className="p-4 text-center">3XL</td>
                <td className="p-4 text-center">4XL</td>
                <td className="p-4 text-center">5XL</td>
                <td className="p-4 text-center">6XL</td>
                <td className="p-4 text-center">7XL</td>
              </tr>

              {/* 制服短袖 */}
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="sticky left-0 bg-gray-50 p-4 font-medium">
                  制服短袖
                </td>

                <td className="p-4 text-center">9</td>
                <td className="p-4 text-center">10</td>
                <td className="p-4 text-center">11</td>
                <td className="p-4 text-center">12</td>
                <td className="p-4 text-center">13</td>
                <td className="p-4 text-center">14</td>
                <td className="p-4 text-center">15</td>
                <td className="p-4 text-center">16</td>
                <td className="p-4 text-center">17</td>
                <td className="p-4 text-center">18</td>
              </tr>

              {/* 制服長袖 */}
              <tr className="border-b border-gray-100">
                <td className="sticky left-0 bg-white p-4 font-medium">
                  制服長袖
                </td>

                <td className="p-4 text-center">9</td>
                <td className="p-4 text-center">10</td>
                <td className="p-4 text-center">11</td>
                <td className="p-4 text-center">12</td>
                <td className="p-4 text-center">13</td>
                <td className="p-4 text-center">14</td>
                <td className="p-4 text-center">15</td>
                <td className="p-4 text-center">16</td>
                <td className="p-4 text-center">17</td>
                <td className="p-4 text-center">18</td>
              </tr>

              {/* 體育系列 */}
              {[
                '體育外套',
                '體育短袖',
                '體育長袖',
                '體育短褲',
                '體育長褲',
              ].map((item, index) => (
                <tr
                  key={item}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0
                      ? 'bg-gray-50'
                      : 'bg-white'
                  }`}
                >
                  <td
                    className={`sticky left-0 p-4 font-medium ${
                      index % 2 === 0
                        ? 'bg-gray-50'
                        : 'bg-white'
                    }`}
                  >
                    {item}
                  </td>

                  <td className="p-4 text-center">36</td>
                  <td className="p-4 text-center">38</td>
                  <td className="p-4 text-center">40</td>
                  <td className="p-4 text-center">42</td>
                  <td className="p-4 text-center">44</td>
                  <td className="p-4 text-center">46</td>
                  <td className="p-4 text-center">48</td>
                  <td className="p-4 text-center">50</td>
                  <td className="p-4 text-center">52</td>
                  <td className="p-4 text-center">54</td>
                </tr>
              ))}

              {/* 長褲長度 */}
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="sticky left-0 bg-gray-50 p-4 font-medium">
                  長褲長度
                </td>

                <td className="p-4 text-center">36長</td>
                <td className="p-4 text-center"></td>
                <td className="p-4 text-center">38長</td>
                <td className="p-4 text-center"></td>
                <td className="p-4 text-center">40長</td>
                <td className="p-4 text-center"></td>
                <td className="p-4 text-center">42長</td>
                <td className="p-4 text-center"></td>
                <td className="p-4 text-center"></td>
                <td className="p-4 text-center"></td>
              </tr>

              {/* 腰圍 */}
              <tr>
                <td className="sticky left-0 bg-white p-4 font-medium">
                  褲子腰圍
                </td>

                <td className="p-4 text-center">24-26</td>
                <td className="p-4 text-center">26-28</td>
                <td className="p-4 text-center">28-30</td>
                <td className="p-4 text-center">30-32</td>
                <td className="p-4 text-center">32-34</td>
                <td className="p-4 text-center">34-37</td>
                <td className="p-4 text-center">37-40</td>
                <td className="p-4 text-center">40-43</td>
                <td className="p-4 text-center">43-46</td>
                <td className="p-4 text-center">46-50</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notice */}
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