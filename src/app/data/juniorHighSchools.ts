import {
  uniformProducts,
  sportsProducts,
  backpackProduct,
} from './products';

export const juniorHighSchools = [
  '羅東國中',
  '國華國中',
  '東光國中',
  '文化國中',
  '五結國中',
  '冬山國中',
  '三星國中',
  '順安國中',
  '利澤國中',
  '興中國中',
  '蘇澳國中',
];

const productsForJunior = [
  ...uniformProducts,
  ...sportsProducts,
];

// ===== 工具函式 =====

const removeUniformJacket = (
  products: typeof productsForJunior
) =>
  products.filter(
    (product) => product.name !== '制服外套'
  );

const removeSportsJacket = (
  products: typeof productsForJunior
) =>
  products.filter(
    (product) => product.name !== '體育外套'
  );

const removeAllSportsProducts = (
  products: typeof productsForJunior
) =>
  products.filter(
    (product) =>
      !product.name.startsWith('體育')
  );



// ===== 國中商品配置 =====

export const juniorHighSchoolProductsMap = {
  // 只有制服外套，沒有體育外套

  羅東國中: [
    ...removeSportsJacket(productsForJunior),
    backpackProduct,
  ],

  國華國中: [
    ...removeSportsJacket(productsForJunior),
    backpackProduct,
  ],

  順安國中: [
    ...removeSportsJacket(productsForJunior),
    backpackProduct,
  ],

  蘇澳國中: [
    ...removeSportsJacket(productsForJunior),
    backpackProduct,
  ],



  // 只有制服，沒有任何體育商品

  利澤國中: [
    ...removeAllSportsProducts(productsForJunior),
    backpackProduct,
  ],

  三星國中: [
    ...removeAllSportsProducts(productsForJunior),
    backpackProduct,
  ],



  // 同時有制服外套與體育外套

  冬山國中: [
    ...productsForJunior,
    backpackProduct,
  ],



  // 沒有制服外套，只有體育外套

  東光國中: [
    ...removeUniformJacket(productsForJunior),
    backpackProduct,
  ],

  文化國中: [
    ...removeUniformJacket(productsForJunior),
    backpackProduct,
  ],

  五結國中: [
    ...removeUniformJacket(productsForJunior),
    backpackProduct,
  ],

  興中國中: [
    ...removeUniformJacket(productsForJunior),
    backpackProduct,
  ],
};