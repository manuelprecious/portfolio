import { motion } from 'framer-motion';

export default function Button({ children, href, className = '', ...props }) {
  const baseStyle = "inline-block bg-white text-black font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-sm hover:bg-zinc-200 transition-colors duration-200 select-none text-center";

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}