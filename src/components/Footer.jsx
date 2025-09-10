import FadeContent from './FadeContent';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Main Content */}
        <FadeContent duration={800} className="mb-12">
          {/* Small accent text */}
          <FadeContent delay={200} duration={600} className="inline-block mb-6">
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20">
              ✨ Ready to Start?
            </span>
          </FadeContent>

          {/* Main Heading */}
          <FadeContent delay={400} duration={800}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Let's Turn Your
              <br />
              <span className="text-orange-400 font-normal">Dream Into Reality</span>
            </h2>
          </FadeContent>

          {/* Description */}
          <FadeContent delay={600} duration={800}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We bring your vision to life with creativity
              <br />
              and precision. Let's make it happen.
            </p>
          </FadeContent>

          {/* CTA Button */}
          <FadeContent delay={800} duration={800}>
            <button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] active:scale-95 transition-all duration-300"
              onClick={() => {
                // Scroll to contact form section
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book A Call
            </button>
          </FadeContent>
        </FadeContent>

        {/* Bottom Section */}
        <FadeContent delay={1000} duration={800} className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright ElamWebStudio. All rights reserved.
            </p>

            {/* Subsidiary mention */}
            <div className="flex items-center gap-2 text-sm text-gray-400 hover:scale-105 transition-transform duration-300">
              <span>A subsidiary of</span>
              <a 
                href="https://elamai.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300 hover:-translate-y-0.5"
              >
                elamai.in
              </a>
            </div>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
};

export default Footer;