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

// 工具函式
const removeUniformJacket = () =>
  uniformProducts.filter(
    (product) => product.name !== '制服外套'
  );

const removeSportsJacket = () =>
  sportsProducts.filter(
    (product) => product.name !== '體育外套'
  );

export const juniorHighSchoolProductsMap = {
  // 只有制服外套，沒有體育外套
  羅東國中: [
    ...uniformProducts,
    ...removeSportsJacket(),
    backpackProduct,
  ],

  國華國中: [
    ...uniformProducts,
    ...removeSportsJacket(),
    backpackProduct,
  ],

  順安國中: [
    ...uniformProducts,
    ...removeSportsJacket(),
    backpackProduct,
  ],

  蘇澳國中: [
    ...uniformProducts,
    ...removeSportsJacket(),
    backpackProduct,
  ],

  // 只有制服，沒有任何體育商品
  利澤國中: [
    ...uniformProducts,
    backpackProduct,
  ],

  三星國中: [
    ...uniformProducts,
    backpackProduct,
  ],

  // 同時有制服外套與體育外套
  冬山國中: [
    ...uniformProducts,
    ...sportsProducts,
    backpackProduct,
  ],

  // 沒有制服外套，只有體育外套
  東光國中: [
    ...removeUniformJacket(),
    ...sportsProducts,
    backpackProduct,
  ],

  文化國中: [
    ...removeUniformJacket(),
    ...sportsProducts,
    backpackProduct,
  ],

  五結國中: [
    ...removeUniformJacket(),
    ...sportsProducts,
    backpackProduct,
  ],

  興中國中: [
    ...removeUniformJacket(),
    ...sportsProducts,
    backpackProduct,
  ],
};