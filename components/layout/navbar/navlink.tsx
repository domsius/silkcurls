'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-3 pt-5 text-base font-medium ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
