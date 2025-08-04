import { create } from "zustand";

const defaultBgColor = "#ffffff";
const defaultBorderColor = "#000000";
const defaultTextColor = "#000000";

export const useColor = create((set, get) => ({
  // defaultBgColor: "#ffffff",
  // defaultBorderColor: "#000000",
  // defaultTextColor: "#000000",

  mainBgColor: defaultBgColor,

  window: {
    bgColor: defaultBgColor,
    textColor: defaultTextColor,
    borderColor: defaultBorderColor,
  },

  form: {
    bgColor: defaultBgColor,
    textColor: defaultTextColor,
    borderColor: defaultBorderColor,
    inputBgColor: defaultBgColor,
    inputTextColor: defaultTextColor,
    inputBorderColor: defaultBorderColor,
    inputButtonColor: defaultBgColor,
  },

  // windowBgColor: defaultBgColor,
  // windowTextColor: defaultTextColor,
  // windowBorderColor: defaultBorderColor,

  // formBgColor: defaultBgColor,
  // formTextColor: defaultTextColor,
  // formBorderColor: defaultBorderColor,
  // formInputBgColor: defaultBgColor,
  // formInputTextColor: defaultTextColor,
  // formInputBorderColor: defaultBorderColor,
  // formInputButtonColor: defaultBgColor,

  reset: () => {
    set(() => ({
      mainBgColor: defaultBgColor,

      window: {
        bgColor: defaultBgColor,
        textColor: defaultTextColor,
        borderColor: defaultBorderColor,
      },

      form: {
        bgColor: defaultBgColor,
        textColor: defaultTextColor,
        borderColor: defaultBorderColor,
        inputBgColor: defaultBgColor,
        inputTextColor: defaultTextColor,
        inputBorderColor: defaultBorderColor,
        inputButtonColor: defaultBgColor,
      },

      // windowBgColor: get().defaultBgColor,
      // windowTextColor: get().defaultTextColor,
      // windowBorderColor: get().defaultBorderColor,

      // formBgColor: get().defaultBgColor,
      // formTextColor: get().defaultTextColor,
      // formBorderColor: get().defaultBorderColor,
      // formInputBgColor: get().defaultBgColor,
      // formInputTextColor: get().defaultTextColor,
      // formInputButtonColor: get().defaultBgColor,
      // formInputBorderColor: get().defaultBorderColor,
    }));
  },

  applyAllBg: (bgColor) => {
    set((state) => ({
      mainBgColor: bgColor,
      windowBgColor: bgColor,
      formBgColor: bgColor,
      formInputBgColor: bgColor,

      window: {
        ...state.window,
        bgColor: bgColor,
      },

      form: {
        ...state.form,
        bgColor: bgColor,
        inputBgColor: bgColor,
        inputButtonColor: bgColor,
      },
    }));
  },

  applyAllBorder: (borderColor) => {
    set((state) => ({
      window: {
        ...state.window,
        borderColor: borderColor,
      },

      form: {
        ...state.form,
        borderColor: borderColor,
        inputBorderColor: borderColor,
      },
    }));
  },

  applyAllText: (textColor) => {
    set((state) => ({
      window: {
        ...state.window,
        textColor: textColor,
      },

      form: {
        ...state.form,
        textColor: textColor,
        inputTextColor: textColor,
      },
    }));
  },
}));
