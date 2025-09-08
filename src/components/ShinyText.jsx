const ShinyText = ({ text, disabled = false, speed = 3, className = '', style = {} }) => {
  return (
    <span
      className={`inline-block ${className} ${disabled ? '' : 'animate-shine'}`}
      style={{
        background: disabled 
          ? 'transparent'
          : 'linear-gradient(90deg, currentColor 30%, rgba(255,255,255,0.9) 50%, currentColor 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: disabled ? 'none' : `shine ${speed}s linear infinite`,
        WebkitTextFillColor: disabled ? 'currentColor' : 'transparent',
        ...style
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
