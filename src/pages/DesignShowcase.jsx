import FadeContent from '../components/FadeContent';
import CircularGallery from '../components/CircularGallery';
import restaurantTemplate from '../../attached_assets/image_1757364248682.png';
const DesignShowcase = () => {
  return (
    <div id="portfolio" className="py-16">
      {/* Header with container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <FadeContent delay={0}>
            <div className="inline-block mb-4">
              <span className="text-orange-400 text-sm font-medium tracking-wider uppercase bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20">
                🎨 Our Work
              </span>
            </div>
          </FadeContent>
          
          <FadeContent delay={200}>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Design
              <span className="text-orange-400 font-normal"> Showcase</span>
            </h2>
          </FadeContent>
          
          <FadeContent delay={400}>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of stunning designs and innovative solutions that have helped businesses thrive in the digital landscape.
            </p>
          </FadeContent>
        </div>
      </div>

      {/* Full width gallery container */}
      <div className="w-full px-4 md:px-0">
        <FadeContent delay={600}>
          <div style={{ height: '450px', position: 'relative' }} className="w-full">
            <CircularGallery 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
              items={[
                { image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop&auto=format&q=80`, text: 'E‑Commerce' },
                { image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&auto=format&q=80`, text: 'Corporate' },
                { image: `https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=1200&fit=crop&auto=format&q=80`, text: 'Mobile App' },
                { image: `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop&auto=format&q=80`, text: 'Brand Identity' },
                { image: `https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=1200&fit=crop&auto=format&q=80`, text: 'Portfolio' },
                { image: restaurantTemplate, text: 'Restaurant Template' }
              ]}
            />
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default DesignShowcase;
