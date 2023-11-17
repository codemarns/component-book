export const imageStyles = {
  root: {
    base: "relative w-full flex items-center justify-center p-4 bg-secondary-50 border border-secondary/30 rounded overflow-hidden",
  },
  wrapper: {
    base: "relative w-full",
  },
  overlay: {
    base: "absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-md",
  },
  img: {
    base: "relative w-full h-full object-cover object-center italic duration-300 ease-in-out transition-all",
  },
};
