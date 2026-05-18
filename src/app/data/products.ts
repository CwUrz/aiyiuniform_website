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

export const uniformProducts = [
  { name: '制服外套', price: 'NT$ 1700', icon: JacketIcon },
  { name: '制服短袖', price: 'NT$ 650', icon: Shirt },
  { name: '制服長袖', price: 'NT$ 700', icon: LongSleeveIcon },
  { name: '制服短褲', price: 'NT$ 700', icon: UniShortsIcon },
  { name: '制服裙子', price: 'NT$ 700', icon: SkirtIcon },
  { name: '制服長褲', price: 'NT$ 800', icon: UniPantsIcon },
  { name: '毛衣', price: 'NT$ 700', icon: SweaterIcon },
];

export const sportsProducts = [
  { name: '體育外套', price: 'NT$ 950', icon: JacketIcon },
  { name: '體育短袖', price: 'NT$ 500', icon: TShirt },
  { name: '體育短褲', price: 'NT$ 500', icon: ShortsIcon },
  { name: '體育長袖', price: 'NT$ 600', icon: PELongSleeveIcon },
  { name: '體育長褲', price: 'NT$ 650', icon: PantsIcon },
  { name: '帽踢', price: 'NT$ 700', icon: HoodieIcon },
];

export const backpackProduct = {
  name: '書包',
  price: 'NT$ 750',
  icon: Backpack,
};