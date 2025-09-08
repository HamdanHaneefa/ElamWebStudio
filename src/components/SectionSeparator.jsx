import { motion } from 'framer-motion';

const SectionSeparator = ({ variant = 'default' }) => {
  return (
    <div className="w-full flex justify-center py-8">
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {variant === 'gradient' ? (
          <div className="h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
        ) : (
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionSeparator;