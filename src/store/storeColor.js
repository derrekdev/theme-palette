import { create } from "zustand";

export const useColor = create((set) => ({
  mainBgColor: "#ffffff",
  windowBgColor: "#ffffff",
  windowBorderColor: "#000000",

  reset: () => {
    set(() => ({
      mainBgColor: "#ffffff",
      windowBgColor: "#ffffff",
      windowBorderColor: "#000000",
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
