'use client';
import React, { useState } from 'react';
import DeliveryIcon from 'components/icons/delivery';
import GiftIcon from 'components/icons/gift';
import HandmadeIcon from 'components/icons/handmade';
import Modal from 'components/modal';

const features = [
  {
    icon: DeliveryIcon,
    image: '/images/feature1.jpeg', // Add your image path here
    title: 'PATARIMAI GRAŽESNĖMS GARBANOMS',
    content: (
        <div className="features-modal-content">
          <p>
            • Tam, kad garbanos susiformuotų geriau ir išliktų ilgiau, venkite plaukų kondicionierių, kaukių ir kitokių
            drėkinančių priemonių plaunant plaukus prieš sukimą.
          </p>
          <p>
            • Geriausi rezultatai išgaunami sukant šiek tiek drėgnus plaukus – jiems beveik išdžiūvus po plovimo, arba
            kiek sudrėkinus jau išdžiūvusių plaukų galus. Svarbiausia, kad drėgmės būtų ne per daug ir ant juostos susukti
            plaukai spėtų išdžiūti.
          </p>
          <p>
            • Plaukų formavimo putos padeda dar ilgiau išlaikyti garbanas. Prieš sukant ant juostos, plaukų galus pirštais
            prabraukite su putomis, tik nepadauginkite šios priemonės, jog išėmus juostą sruogos nesuliptų!
          </p>
          <p>
            • Plaukų sruogas sukant ant juostos svarbu garbanojimo juostą laikyti vienoje padėtyje ir nesukti kartu su
            plaukais.
          </p>
          <p>• Kuo tvirčiau susuksite plaukus, tuo garbanos bus ryškesnės.</p>
          <p>
            • Kuo ilgiau plaukai laikomi susukti ant juostos, tuo didesnis garbanų efektas. Rekomenduojame juostą laikyti
            tarp 4-8 val. arba su ja miegoti.
          </p>
          <p>• Garbanojimo juostą išimkite tik įsitikinusi, jog plaukai visiškai sausi.</p>
        </div>
    ),
  },
  {
    icon: GiftIcon,
    image: '/images/feature2.jpeg',
    title: 'SUKIMO PROCESAS',
    content: (
        <div>
          <img src="/images/sukimo-procesas.gif" alt="Sukimo Procesas GIF" className="w-full h-auto" /> {/* Add your GIF path */}
        </div>
    ),
  },
  {
    icon: HandmadeIcon,
    image: '/images/feature3.jpeg',
    title: 'APIE MŪSŲ KELIĄ GARBANŲ LINK',
    content: (
        <div className="features-modal-content">
          <p>
            Pirmą kartą garbanojimo rinkinį išbandžiusios klientės dažnai kreipiasi į mus su klausimu: „kodėl mano
            rezultatas ne toks, kokio tikėjausi pamačiusi jūsų garbanų nuotraukas?“ ir pradeda dvejoti, ar rinkinys
            tinkamas visų tipų plaukams.
          </p>
          <p>
            Tokias klientes skubame nuraminti pasakodamos savo pačių patirtis ir kelią natūralių garbanų link! Kadangi
            garbanos formuojamos be jokio karščio, tobulam rezultatui išgauti reikėjo praktikos, kantrybės ir laiko. Vis
            kartojame, kad kiekvienos mūsų plaukai labai skirtingi, todėl vienoms gražios garbanos susiformuoja jau iš
            pirmo karto, o kitoms, deja, tenka truputį paplušėti.
          </p>
          <p>
            Garbanų formavimąsi lemia keletas veiksnių. Visų pirma, plaukai pratinami prie naujo garbanojimo būdo, todėl
            pirmi bandymai gali būti ne tokie sėkmingi, tačiau garbanos kaskart formuojasi vis lengviau ir išsilaiko
            ilgiau.
          </p>
          <p>
            Taip pat svarbu atrasti plauko storiui tinkamą drėgnumo lygį. Drėgmės plaukuose turėtų būti tiek, kad plaukas
            taptų pakankamai klusnus ir leistų garbanoms susiformuoti, tačiau ne per daug, kad plaukai spėtų išdžiūti ir
            garbanos išsilaikytų.
          </p>
          <p>
            Sukimo procesas bene svarbiausias ir reikalauja praktikos. Per laisvai ar netinkamai susukti plaukai gali
            greitai išsileisti. Kuo tvirčiau susuksite plaukus, tuo ryškesnės gausis garbanos!
          </p>
          <p>
            Galiausiai, rezultatą lemia ir laikas, kurį juostą laikote plaukuose, tačiau jis taip pat priklauso nuo plaukų
            tipo. Jei plaukai linkę garbanotis, užteks vos 4 val., tačiau jei ne – gali prireikti ir 8 val. Būtent todėl
            rekomenduojame plaukus laikyti susuktus 4-8 val.
          </p>
          <p>
            Vos radusi tobulą drėgmės ir laiko balansą savo plaukams turėsite tobulas garbanas išsaugodama sveikus
            plaukus! Natūralios garbanos reikalauja laiko ir praktikos, tačiau nesiliaukite bandžiusios ir jūsų plaukai
            Jums padėkos, o per kelis kartus įvaldžiusi techniką negalėsite savimi atsigrožėti!
          </p>
          <p>Su meile Jums, Simona ir Aurelija</p>
        </div>
      ),
  },
];

const FeaturesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-200 p-4 rounded-lg transition-all duration-300 ease-in-out"
            onClick={() => handleOpenModal(feature.content)}
          >
            {/* Circular image with shadow */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6">
              <img src={feature.image} alt={feature.title} className="object-cover w-full h-full" />
            </div>

            <h3 className="text-lg md:text-xl font-serif italic font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>

          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal} content={modalContent} />
    </div>
  );
};

export default FeaturesModal;