// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       poppins: "Poppins",
//       Barlow: "Barlow",
//       NunitoSans: "Nunito Sans",
//     },
//     extend: {
//       backgroundImage: {
//         "hero-pattern": "url('../src/assets/images/herosec.png')",
//       },
//       transform: ['hover', 'focus'],

//       darkMode: "class",

//       colors: {
//         whites: "rgba(255, 255, 255, 0.7)",
//         whiteColor: "#ffffff",
//         placeHolder: "#7D7D7D",
//         primaryColor: "#232323",
//         secondaryColor: "#343434",
//         darkgray1: "#262626",
//         darkgray2: "#323232",
//         darkgray3: "#191919",
//         darkgray4: "#505050",
//         mutedgray: "#555555",
//         lightgray1: "#424242",
//         lightgray2: "#D9D9D9",
//         lightgray3: "#A7A7A7",
//         lightgray4: "#ABABAB",
//         lightgray5: "#DEDEDE",
//         lightgray6: "#DADADA",
//         lightyellow: "#FEDC5A",
//         darkblue: "#5454D4",
//         lightred: "#F04037",
//         lightpink: "#FCEDEE",
//         custompurple: "rgba(84, 84, 212, 0.1)",
//         lightgreen: "#DEFEEA",
//         seegreen: "#FFEEA6",
//         bordercolor1: "#F3F3F3",
//         borderColor2: "#E7E7E7",
//         blackColor: "#000000",
//       },
//       keyframes: {
//         "infinite-scroll": {
//           from: { transform: "translatex(0)" },
//           to: { transform: "translateX(-100%)" },
//         },
//       },
//         margin:{
//             20:"20px",
//         }

//     },

//     screens: {
//       custom:"500px",
//     },
//     fontSize: {
//       18: "18px",
//       10: "10px",
//       12: "12px",
//       14: "14px",
//       20: "20px",
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/Assets/servicedetailbanner.png')",
        "ceo-pattern": "url('../public/images/ceobgimg.png')",
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 2.5rem))" },
        },
      },
      animation: {
        carousel: "scroll 25s forwards linear infinite",
      },

      darkMode: "class",
      colors: {
        whiteColor: "#ffffff",
        placeHolder: "#7D7D7D",
        primaryColor: "#232323",
        secondaryColor: "#343434",
        darkgray1: "#262626",
        darkgray2: "#323232",
        darkgray3: "#191919",
        darkgray4:  "#2C2C2C",
        mutedgray: "#555555",
        lightgray1: "#424242",
        lightgray2: "#D9D9D9",
        lightgray3: "#A7A7A7",
        lightgray4: "#ABABAB",
        lightgray5: "#DEDEDE",
        lightgray6: "#DADADA",
        lightgray7: "#E4E4E4",
        lightyellow: "#FEDC5A1A",
        lightblue: "#5454D4",
        lightred: "#F040371A",
        lightpink: "#FCEDEE",
        lightblue1: "#BED3FF",
        lightgreen: "#DEFEEA",
        seegreen: "#FFEEA6",
        bordercolor1: "#F3F3F3",
        borderColor2: "#E7E7E7",
        blackColor: "#000000",
      },
      screens: {
        xl: "1240px",
        xxl: "1004px",
        xxl2: "1028px",
      },
    },
  },
  plugins: [],
};
