import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Importing icons from HeroIcons (or use your preferred icon set)

export default function ContactAndSubscribe() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto container mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Susisiekite su mumis</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between container mx-auto">
        
        {/* Subscription Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center">
          <div className="flex flex-col items-center justify-center pr-6 py-5 sm:py-6 w-full">
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-semibold leading-6 text-black">Prenumeruoti</h3>
              <form className="mt-5 sm:flex sm:items-center justify-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="El. paštas"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-gray-300 px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:ml-3 sm:mt-0 sm:w-auto"
              >
                Prenumeruoti
              </button>
            </form>
            <div className="mt-4">
              <label className="flex items-center text-black">
                <input type="checkbox" className="mr-2" />
                Sutinku su privatumo politika
              </label>
            </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 pl-6 py-5 sm:py-6">
          <ul className="space-y-4 text-black">
            <li className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 mr-3 text-black" />
              <span>El. paštas: <a href="mailto:SilkCurls@gmail.com" className="underline">SilkCurls@gmail.com</a></span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-3 text-black" />
              <span>Facebook: <a href="https://facebook.com/SilkCurls" className="underline">SilkCurls</a></span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-3 text-black" />
              <span>Instagram: <a href="https://instagram.com/silkcurls" className="underline">@silkcurls</a></span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
