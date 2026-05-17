import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

interface ProductIconProps {
  icon: LucideIcon | ComponentType<{ className?: string }>;
}

export function ProductIcon({ icon: Icon }: ProductIconProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <Icon className="w-24 h-24 md:w-32 md:h-32 text-gray-700" />
    </div>
  );
}
