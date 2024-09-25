'use client';
import DeliveryIcon from 'components/icons/delivery';
import GiftIcon from 'components/icons/gift';
import HandmadeIcon from 'components/icons/handmade';

const features = [
  {
    id: 1,
    title: 'PATARIMAI GRAŽESNĖMS GARBANOMS',
    description: 'Sužinokite, kaip geriausiai išgauti ilgai išliekančias garbanas be šilumos pažeidimų.',
    imageUrl: '/images/feature1.jpeg',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Plaukų priežiūra', href: '#' },
    author: {
      name: 'Simona',
      role: 'Plaukų priežiūros specialistė',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'SUKIMO PROCESAS',
    description: 'Atraskite mūsų sukimo procesą, kuris padeda išgauti puikias garbanas be šilumos pažeidimų.',
    imageUrl: '/images/feature2.jpeg',
    date: 'Mar 17, 2023',
    datetime: '2023-03-17',
    category: { title: 'Garbanojimo metodai', href: '#' },
    author: {
      name: 'Aurelija',
      role: 'Plaukų formavimo ekspertė',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'APIE MŪSŲ KELIĄ GARBANŲ LINK',
    description: 'Perskaitykite apie mūsų kelionę link tobulų, sveikų garbanų, nenaudojant jokios šilumos.',
    imageUrl: '/images/feature3.jpeg',
    date: 'Mar 18, 2023',
    datetime: '2023-03-18',
    category: { title: 'Plaukų priežiūros istorija', href: '#' },
    author: {
      name: 'Simona & Aurelija',
      role: 'Plaukų priežiūros specialistės',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function FeaturesGrid() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto container">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mūsų funkcijos</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mes siūlome platų įvairių funkcijų asortimentą, kad kiekvienas jūsų užsakymas būtų ypatingas.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt={feature.title}
                  src={feature.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={feature.datetime} className="text-gray-500">
                    {feature.date}
                  </time>
                  <a
                    href={feature.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {feature.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {feature.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt={feature.author.name} src={feature.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={feature.author.href}>
                        <span className="absolute inset-0" />
                        {feature.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{feature.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
