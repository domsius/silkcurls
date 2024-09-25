import DeliveryIcon from 'components/icons/delivery';
import GiftIcon from 'components/icons/gift';
import HandmadeIcon from 'components/icons/handmade';
import SilkIcon from 'components/icons/silk';

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
    <div className="bg-[#9aaf8f] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-24 h-24 bg-[#d7dfd2] rounded-full flex items-center justify-center mb-4">
              {/* Apply responsive size and color transitions */}
              <feature.icon className="text-[#9aaf8f] hover:text-[#b8a398] transition-colors duration-300 w-[40px] h-[40px]" />
            </div>
            <h3 className="text-lg md:text-xl font-serif italic font-semibold mb-2 text-gray-700">
              {feature.title}
            </h3>
            <div className="w-16 h-0.5 bg-white mb-4"></div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;