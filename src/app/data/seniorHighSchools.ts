import {
  uniformProducts,
  sportsProducts,
  backpackProduct,
} from './products';

export const seniorHighSchools = [
  '宜蘭高中',
  '蘭陽女中',
  '羅東高中',
  '宜蘭高商',
  '羅東高商',
  '宜蘭高工',
  '羅東高工',
  '聖母護校',
];

// 工具函式
const removeUniformJacket = () =>
  uniformProducts.filter(
    (product) => product.name !== '制服外套'
  );

const removeUniformShorts = (products: any[]) =>
  products.filter(
    (product) => product.name !== '制服短褲'
  );

const removeUniformSkirt = (products: any[]) =>
  products.filter(
    (product) => product.name !== '制服裙子'
  );

const removeSweater = (products: any[]) =>
  products.filter(
    (product) => product.name !== '毛衣'
  );

// 新增帽踢
const hoodieProduct = {
  name: '帽踢',
  price: 'NT$ 950',
  icon: sportsProducts[0].icon,
};

// 女生限定毛衣
const girlsSweaterProduct = {
  name: '毛衣（僅限女生）',
  price: 'NT$ 700',
  icon: uniformProducts[0].icon,
};

// 基礎高中制服（沒有制服短褲）
const highSchoolUniformBase = removeUniformShorts(
  uniformProducts
);

export const seniorHighSchoolProductsMap = {
  // 宜蘭高中
  宜蘭高中: [
    ...removeUniformJacket(
      removeSweater(highSchoolUniformBase)
    ),

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],

  // 蘭陽女中
  蘭陽女中: [
    ...removeUniformJacket(
      removeSweater(highSchoolUniformBase)
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],

  // 羅東高中
  羅東高中: [
    ...removeUniformJacket(
      removeSweater(highSchoolUniformBase)
    ),

    ...sportsProducts,

    backpackProduct,
  ],

  // 宜蘭高商
  宜蘭高商: [
    ...removeUniformJacket(
      removeSweater(highSchoolUniformBase)
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],

  // 羅東高商（唯一同時有制服外套與體育外套）
  羅東高商: [
    ...removeSweater(highSchoolUniformBase),

    girlsSweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],

  // 宜蘭高工
  宜蘭高工: [
    ...removeUniformSkirt(
      removeUniformJacket(
        removeSweater(highSchoolUniformBase)
      )
    ),

    ...sportsProducts,

    backpackProduct,
  ],

  // 羅東高工
  羅東高工: [
    ...removeUniformSkirt(
      removeUniformJacket(
        removeSweater(highSchoolUniformBase)
      )
    ),

    ...sportsProducts,

    backpackProduct,
  ],

  // 聖母護校
  聖母護校: [
    ...removeUniformSkirt(
      removeUniformJacket(
        removeSweater(highSchoolUniformBase)
      )
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],
};