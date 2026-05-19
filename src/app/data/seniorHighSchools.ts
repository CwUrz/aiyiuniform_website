import {
  uniformProducts,
  sportsProducts,
  backpackProduct,
  hoodieProduct,
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



// ===== 工具函式 =====

const removeProduct = (
  products: any[],
  productName: string
) =>
  products.filter(
    (product) => product.name !== productName
  );



// ===== 基礎高中制服 =====
// 高中沒有制服短褲
// 預設也先移除毛衣

const highSchoolUniformBase =
  uniformProducts.filter(
    (product) =>
      product.name !== '制服短褲' &&
      product.name !== '毛衣'
  );



// ===== 女生毛衣 =====

const girlsSweaterProduct = {
  name: '毛衣',
  note: '僅限女生',
  price: 'NT$ 700',
  icon: uniformProducts.find(
    (p) => p.name === '毛衣'
  )?.icon,
};



// ===== 高中商品配置 =====

export const seniorHighSchoolProductsMap = {
  // 宜蘭高中
  宜蘭高中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // 蘭陽女中
  蘭陽女中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // 羅東高中
  羅東高中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    ...sportsProducts,

    backpackProduct,
  ],



  // 宜蘭高商
  宜蘭高商: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // 羅東高商
  // 唯一有 制服外套 + 體育外套

  羅東高商: [
    ...highSchoolUniformBase,

    girlsSweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],



  // 宜蘭高工
  // 沒裙子

  宜蘭高工: [
    ...removeProduct(
      removeProduct(
        highSchoolUniformBase,
        '制服外套'
      ),
      '制服裙子'
    ),

    ...sportsProducts,

    backpackProduct,
  ],



  // 羅東高工
  // 沒裙子

  羅東高工: [
    ...removeProduct(
      removeProduct(
        highSchoolUniformBase,
        '制服外套'
      ),
      '制服裙子'
    ),

    ...sportsProducts,

    backpackProduct,
  ],



  // 聖母護校
  // 沒裙子
  // 有女生毛衣

  聖母護校: [
    ...removeProduct(
      removeProduct(
        highSchoolUniformBase,
        '制服外套'
      ),
      '制服裙子'
    ),

    girlsSweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],
};