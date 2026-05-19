import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HighSchools } from './components/SeniorHighSchools';
import { JuniorHighSchools } from './components/JuniorHighSchools';
import { ProductCategories } from './components/ProductCategories';
import { About } from './components/About';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { SizeGuide } from './components/SizeGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <HighSchools />
      <JuniorHighSchools />
      <ProductCategories />
      <SizeGuide />
      <About />
      <OrderSection />
      <Footer />
    </div>
  );
}