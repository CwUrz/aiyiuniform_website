import { Shirt, Backpack } from 'lucide-react';

import { JacketIcon } from '@/components/icons/JacketIcon';
import { LongSleeveIcon } from '@/components/icons/LongSleeveIcon';
import { ShortsIcon } from '@/components/icons/ShortsIcon';
import { SkirtIcon } from '@/components/icons/SkirtIcon';
import { PantsIcon } from '@/components/icons/PantsIcon';

export const uniformProducts = [
  { name: '制服外套', price: 'NT$ 1700', icon: JacketIcon },
  { name: '制服短袖', price: 'NT$ 650', icon: Shirt },
  { name: '制服長袖', price: 'NT$ 700', icon: LongSleeveIcon },
  { name: '制服短褲', price: 'NT$ 700', icon: ShortsIcon },
  { name: '制服裙子', price: 'NT$ 700', icon: SkirtIcon },
  { name: '制服長褲', price: 'NT$ 800', icon: PantsIcon },
  { name: '毛衣', price: 'NT$ 700', icon: JacketIcon },
];

export const sportsProducts = [
  { name: '體育外套', price: 'NT$ 950', icon: JacketIcon },
  { name: '體育短袖', price: 'NT$ 500', icon: Shirt },
  { name: '體育短褲', price: 'NT$ 500', icon: ShortsIcon },
  { name: '體育長袖', price: 'NT$ 600', icon: LongSleeveIcon },
  { name: '體育長褲', price: 'NT$ 650', icon: PantsIcon },
];

export const backpackProduct = {
  name: '書包',
  price: 'NT$ 750',
  icon: Backpack,
};