import DeliveryIcon from 'components/icons/delivery';
import GiftIcon from 'components/icons/gift';
import HandmadeIcon from 'components/icons/handmade';
import SilkIcon from 'components/icons/silk';

// Your feature data
const features = [
  {
    icon: DeliveryIcon,
    title: 'ATSIIMKITE PAŠTOMATE',
    description: 'Patogūs pristatymo būdai tiek Lietuvoje, tiek užsienyje.',
  },
  {
    icon: GiftIcon,
    title: 'SKONINGAS ĮPAKAVIMAS',
    description: 'Skoningas įpakavimas leis pasijusti ypatingai, tarsi išpakavus dovaną.',
  },
  {
    icon: HandmadeIcon,
    title: 'RANKŲ DARBO',
    description: 'Garantuojame aukštą kiekvieno gaminio kokybę.',
  },
  {
    icon: SilkIcon,
    title: '100% ŠILKAS',
    description: 'Sveika, patogu, prabangu.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mūsų funkcijos</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mes siūlome platų įvairių funkcijų asortimentą, kad kiekvienas jūsų užsakymas būtų ypatingas.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <feature.icon className="text-black hover:text-[#b8a398]  border-transition-colors duration-300 w-[40px] h-[40px]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{feature.title}</h3>
              <p className="text-base leading-7 text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSection;
