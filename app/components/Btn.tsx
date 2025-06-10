import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface BtnProps {
  href: string;
  text?: string;
  Icon?: LucideIcon;
  className?: string;
}

const IconBtn: React.FC<BtnProps> = ({ href, text, Icon, className }) => {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 w-auto gap-2 text-gray-800 transition-colors duration-400 ${className || ''}`}
    >
      {Icon && <Icon size={20} />}
      <span>{text}</span> {  }
    </Link>
  );
};

export default IconBtn;
