import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-8 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Small accent text */}
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20">
              ✨ Ready to Start?
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's Turn Your
            <br />
            <span className="text-orange-400 font-normal">Dream Into Reality</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We bring your vision to life with creativity
            <br />
            and precision. Let's make it happen.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Scroll to contact section
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book A Call
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-700/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright ElamWebStudio. All rights reserved.
            </p>

            {/* Sub-brand mention */}
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>A sub-brand of</span>
              <motion.a 
                href="https://elamai.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                elamai.in
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;