import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import BannerImage from 'components/banner-image';
import FeaturesSection from 'components/features-section';
import FeaturesGrid from 'components/features-modal';

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
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
