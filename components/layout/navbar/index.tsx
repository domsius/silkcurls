import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import LogoIcon from 'components/icons/logo';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  console.log('Menu items:', menu);

  return (
    <nav className="relative flex items-center justify-between bg-white p-4 lg:px-6">
      {/* Mobile hamburger icon */}
      <div className="flex items-center w-1/3 md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      {/* Links section on the left (hidden on small screens) */}
      <div className="hidden md:flex items-center w-1/3">
        {menu.length ? (
          <ul className="gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li
                key={item.title}
                className="relative group"
                style={{ paddingBottom: '10px' }} // Add padding to increase the hoverable area
              >
                <Link
                  href={item.path || '#'}
                  prefetch={true}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
                
                {/* Check if the menu item has sub-items */}
                {item.children && item.children.length > 0 && (
                  <div
                    className="absolute left-0 z-10 mt-0 w-48 bg-white text-sm shadow-lg ring-1 ring-gray-900/5 group-hover:block transition ease-out duration-200 opacity-0 group-hover:opacity-100"
                    style={{ top: '100%' }} // Align dropdown to the bottom of the parent item
                  >
                    <div className="p-2">
                      {item.children.map((subItem: Menu) => (
                        <div
                          key={subItem.title}
                          className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-neutral-600 dark:text-neutral-300"
                        >
                          <Link href={subItem.path}>
                            {subItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Logo section in the center */}
      <div className="flex justify-center w-1/3">
        <Link
          href="/"
          prefetch={true}
          className="mr-2 flex items-center justify-center"
        >
          <LogoIcon className="h-[45px] md:h-[80px]" />
        </Link>
      </div>

      {/* Search and Cart Modal on the right */}
      <div className="flex items-center justify-end w-1/3">
        <div className="hidden md:flex">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <CartModal />
      </div>
    </nav>
  );
}
