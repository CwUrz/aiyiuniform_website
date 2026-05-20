import Shirt from '../components/icons/polo-shirt.png';
import TShirt from '../components/icons/tshirt.png';
import Backpack from '../components/icons/backpack.png';
import JacketIcon from '../components/icons/jacket.png';
import LongSleeveIcon from '../components/icons/shirt.png';
import PELongSleeveIcon from '../components/icons/longsleeves.png';
import ShortsIcon from '../components/icons/shorts.png';
import UniShortsIcon from '../components/icons/uniform-shorts.png';
import SkirtIcon from '../components/icons/skirt.png';
import PantsIcon from '../components/icons/pants.png';
import UniPantsIcon from '../components/icons/trousers.png';
import SweaterIcon from '../components/icons/sweater.png';
import HoodieIcon from '../components/icons/hood.png';

export interface SizeInfo {
  label: string;
  values: string[];
}

export interface Product {
  name: string;
  price: string;
  icon: string;
  sizes: SizeInfo[];
}

export const uniformProducts: Product[] = [
  {
    name: '制服外套',
    price: 'NT$ 1700',
    icon: JacketIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
      },
    ],
  },

  {
    name: '制服短袖',
    price: 'NT$ 650',
    icon: Shirt,
    sizes: [
      {
        label: '尺碼',
        values: ['9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
    ],
  },

  {
    name: '制服長袖',
    price: 'NT$ 700',
    icon: LongSleeveIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
    ],
  },

  {
    name: '制服短褲',
    price: 'NT$ 700',
    icon: UniShortsIcon,
    sizes: [
      {
        label: '腰圍',
        values: ['24', '26', '28', '30', '32', '34', '36'],
      },
    ],
  },

  {
    name: '制服裙子',
    price: 'NT$ 700',
    icon: SkirtIcon,
    sizes: [
      {
        label: '腰圍',
        values: ['24', '26', '28', '30', '32', '34'],
      },
    ],
  },

  {
    name: '制服長褲',
    price: 'NT$ 800',
    icon: UniPantsIcon,
    sizes: [
      {
        label: '腰圍',
        values: ['28', '30', '32', '34', '36', '38'],
      },
      {
        label: '褲長',
        values: ['36長', '38長', '40長', '42長'],
      },
    ],
  },
];

export const sweaterProduct: Product = {
  name: '毛衣',
  price: 'NT$ 700',
  icon: SweaterIcon,
  sizes: [
    {
      label: '尺碼',
      values: ['S', 'M', 'L', 'XL', '2XL'],
    },
  ],
};

export const sportsProducts: Product[] = [
  {
    name: '體育外套',
    price: 'NT$ 950',
    icon: JacketIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48'],
      },
    ],
  },

  {
    name: '體育短袖',
    price: 'NT$ 500',
    icon: TShirt,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48'],
      },
    ],
  },

  {
    name: '體育短褲',
    price: 'NT$ 500',
    icon: ShortsIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46'],
      },
    ],
  },

  {
    name: '體育長袖',
    price: 'NT$ 600',
    icon: PELongSleeveIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48'],
      },
    ],
  },

  {
    name: '體育長褲',
    price: 'NT$ 650',
    icon: PantsIcon,
    sizes: [
      {
        label: '尺碼',
        values: ['36', '38', '40', '42', '44', '46', '48'],
      },
    ],
  },
];

export const hoodieProduct: Product = {
  name: '帽踢',
  price: 'NT$ 700',
  icon: HoodieIcon,
  sizes: [
    {
      label: '尺碼',
      values: ['S', 'M', 'L', 'XL', '2XL'],
    },
  ],
};

export const backpackProduct: Product = {
  name: '書包',
  price: 'NT$ 750',
  icon: Backpack,
  sizes: [
    {
      label: '尺寸',
      values: ['均一尺寸'],
    },
  ],
};