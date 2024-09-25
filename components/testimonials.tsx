'use client';
import { StarIcon } from '@heroicons/react/20/solid';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    body: 'Komoda be rankeneliu su push up mechanizmu – labai patogu ir stilinga',
    author: {
      name: 'Tomas, Kaunas',
      handle: 'tomas_kaunas',
    },
    rating: 5,
  },
  {
    body: 'žurnalinis staliukas puikiai tinka prie mūsų sofos, džiaugiamės pirkiniu!',
    author: {
      name: 'Edita, Alytus',
      handle: 'edita_alytus',
    },
    rating: 5,
  },
  {
    body: 'Tvirta ir kokybiška komoda, puikiai tinka svetainei mūsų svetainei, o svarbiausia, kad žmona patenkinta.',
    author: {
      name: 'Mindaugas, Telšiai',
      handle: 'mindaugas_telsiai',
    },
    rating: 5,
  },
  {
    body: 'Labai patiko komodos modernus dizainas ir greitas pristatymas.',
    author: {
      name: 'Simona, Marijampole',
      handle: 'simona_marijampole',
    },
    rating: 5,
  },
  {
    body: 'puikus baldas Komoda Diuna 4D 193, dziaugiamės pirkiniu!',
    author: {
      name: 'Darius, Vilnius',
      handle: 'darius_vilnius',
    },
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto container">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Atsiliepimai</h2>
        </div>
        <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.author.handle} className="w-full h-auto"> 
                <div className="h-full flex flex-col"> 
                  <figure className="rounded-2xl border border-gray-200 p-8 text-sm leading-6 shadow-lg flex-grow flex flex-col">
                    <blockquote className="text-gray-900 flex-grow">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="flex items-center mt-1">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={`h-5 w-5 flex-shrink-0 ${
                                rating < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}