import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import BannerImage from 'components/banner-image';
import FeaturesSection from 'components/features-section';
import FeaturesGrid from 'components/features-modal';
import ProductGridHomepage from 'components/products-grid-homepage';
import Testimonials from 'components/testimonials';
import ContactAndSubscribe from 'components/contacts';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <BannerImage />
      <FeaturesSection />
      <FeaturesGrid />
      <ProductGridHomepage />
      <Testimonials />
      {/* <ThreeItemGrid />
      <Carousel /> */}
      <ContactAndSubscribe />
      <Footer />
    </>
  );
}
