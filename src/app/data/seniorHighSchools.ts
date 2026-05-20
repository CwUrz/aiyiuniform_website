import {
  uniformProducts,
  sportsProducts,
  backpackProduct,
  hoodieProduct,
  sweaterProduct,
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

const highSchoolUniformBase =
  removeProduct(
    uniformProducts,
    '制服短褲'
  );



// ===== 高中商品配置 =====

export const seniorHighSchoolProductsMap = {

  // ===== 宜蘭高中 =====
  // 無制服外套
  // 有帽踢

  宜蘭高中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // ===== 蘭陽女中 =====
  // 無制服外套
  // 有毛衣
  // 有帽踢

  蘭陽女中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    sweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // ===== 羅東高中 =====
  // 無制服外套

  羅東高中: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    ...sportsProducts,

    backpackProduct,
  ],



  // ===== 宜蘭高商 =====
  // 無制服外套
  // 有毛衣
  // 有帽踢

  宜蘭高商: [
    ...removeProduct(
      highSchoolUniformBase,
      '制服外套'
    ),

    sweaterProduct,

    ...sportsProducts,

    hoodieProduct,

    backpackProduct,
  ],



  // ===== 羅東高商 =====
  // 唯一有 制服外套 + 體育外套
  // 有毛衣

  羅東高商: [
    ...highSchoolUniformBase,

    sweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],



  // ===== 宜蘭高工 =====
  // 無制服外套
  // 無裙子

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



  // ===== 羅東高工 =====
  // 無制服外套
  // 無裙子

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



  // ===== 聖母護校 =====
  // 無制服外套
  // 無裙子
  // 有毛衣

  聖母護校: [
    ...removeProduct(
      removeProduct(
        highSchoolUniformBase,
        '制服外套'
      ),
      '制服裙子'
    ),

    sweaterProduct,

    ...sportsProducts,

    backpackProduct,
  ],
};