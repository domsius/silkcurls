import Link from 'next/link';
import  {features}  from '../data/features-data';

export default function Irasai() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-4xl font-bold mb-10">Irašai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((post, index) => (
          <Link key={index} href={`/irasai/${post.slug}`}>
            <div className="relative isolate overflow-hidden bg-white p-8 rounded-lg shadow-lg">
              <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover rounded-t-lg" />
              <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-gray-600">{post.author.role}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}