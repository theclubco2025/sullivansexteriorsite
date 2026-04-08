import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./config/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f1f7f2",100:"#dbeedd",200:"#b7ddbc",300:"#8cc695",400:"#63ac70",
          500:"#3f8f4f",600:"#2f7440",700:"#245d34",800:"#1d4b2b",900:"#183e24"
        }
      }
    }
  },
  plugins: []
};
export default config;
