import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProductGridHomepage() {
  // Fetch products from the Shopify collection
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items', // Update with the collection you want to fetch
  });

  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto container pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mūsų produktai</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mes siūlome platų įvairių funkcijų asortimentą, kad kiekvienas jūsų užsakymas būtų ypatingas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-75">
              <Image
                alt={product.featuredImage.altText || product.title}
                src={product.featuredImage.url}
                layout="fill"
                className="object-cover"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-xl font-medium text-gray-900">
                <Link href={`/product/${product.handle}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">
                {product.description || 'No description available.'}
              </p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-base font-medium text-gray-900">
                  {product.priceRange.maxVariantPrice.amount}{' '}
                  {product.priceRange.maxVariantPrice.currencyCode}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}