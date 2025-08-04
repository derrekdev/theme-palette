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

  applyAllBg: (colorValue) => {
    set((state) => ({
      mainBgColor: colorValue,

      window: {
        ...state.window,
        bgColor: colorValue,
      },

      form: {
        ...state.form,
        bgColor: colorValue,
        inputBgColor: colorValue,
        inputButtonColor: colorValue,
      },
    }));
  },

  applyMainOnlyBg: (colorValue) => {
    set((state) => ({
      mainBgColor: colorValue,
    }));
  },

  applyAllBorder: (borderColorValue) => {
    set((state) => ({
      window: {
        ...state.window,
        borderColor: borderColorValue,
      },

      form: {
        ...state.form,
        borderColor: borderColorValue,
        inputBorderColor: borderColorValue,
      },
    }));
  },

  applyAllText: (textColorValue) => {
    set((state) => ({
      window: {
        ...state.window,
        textColor: textColorValue,
      },

      form: {
        ...state.form,
        textColor: textColorValue,
        inputTextColor: textColorValue,
      },
    }));
  },
  updateWindowProperty: (colorType, colorValue) => {
    set((state) => ({
      window: {
        ...state.window,
        [colorType]: colorValue,
      },
    }));
  },
  updateFormProperty: (colorType, colorValue) => {
    set((state) => ({
      form: {
        ...state.form,
        [colorType]: colorValue,
      },
    }));
  },
}));

// form: {
//         bgColor: defaultBgColor,
//         textColor: defaultTextColor,
//         borderColor: defaultBorderColor,
//         inputBgColor: defaultBgColor,
//         inputTextColor: defaultTextColor,
//         inputBorderColor: defaultBorderColor,
//         inputButtonColor: defaultBgColor,
//       },
