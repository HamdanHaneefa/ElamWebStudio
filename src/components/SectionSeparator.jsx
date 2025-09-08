import { motion } from 'framer-motion';

const SectionSeparator = ({ variant = 'default' }) => {
  return (
    <div className="w-full flex justify-center py-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div 
        className="w-full max-w-4xl px-8"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {variant === 'gradient' ? (
          <div className="h-[0.5px] bg-gradient-to-r from-transparent via-orange-400/15 to-transparent"></div>
        ) : (
          <div className="h-[0.5px] bg-gradient-to-r from-transparent via-slate-500/15 to-transparent"></div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionSeparator;