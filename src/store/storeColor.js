import { create } from "zustand";

const useColor = create((set) => ({
  mainBgColor: "#fff",
  windowBgColor: "#fff",
  windowBorderColor: "#000",

  reset: () => {
    set(() => ({
      mainBgColor: "#fff",
      windowBgColor: "#fff",
      windowBorderColor: "#000",
    }));
  },

  applyAllBg: (bgColor) => {
    set(() => ({
      mainBgColor: bgColor,
      windowBgColor: bgColor,
    }));
  },

  applyAllBorder: (borderColor) => {
    set(() => ({
      windowBorderColor: borderColor,
    }));
  },
}));
