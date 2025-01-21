# My React Project CARPATHIANS

This project is a React application built using the following technologies:

- **React JS:** The core JavaScript library for building user interfaces.
- **Module CSS:** For component-level CSS styling, enhancing maintainability and reducing style conflicts.
- **i18next:** For internationalization and localization, enabling easy translation of content.
- **Formik:** For managing form state and handling form submissions efficiently.
- **Slick Carousel:** For creating responsive and touch-enabled carousels to display images or content.

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

   ```

2. **Install dependencies::**

   ```bash
   cd <project-directory>
   npm install
   ```

## Running the Project

**Start the development server::**

```bash
    npm run dev
```

This will typically open the application in your default browser.

## Building for Production

**Build the production bundle::**

```bash
    npm run build
```

This will create an optimized build of the application in the build folder

## Project structure

carpathians/
├── public/
├── src/
│ ├── assets/
│ │ ├──fonts/
│ │ │ ├── montserratMedium500.ttf
│ │ │ ├── montserratRegular400.ttf
│ │ │ └── montserratSemiBold600.ttf
│ │ ├──img/
│ │ │ ├──desk1x/
│ │ │ ├──desk2x/
│ │ │ ├──mob1x/
│ │ │ ├──mob2x/
│ │ │ ├──tab1x/
│ │ │ └──tab2x/
│ │ ├── favicon.svg
│ │ └── icons.svg
│ ├── css/
│ │ ├── additional.css
│ │ ├── fonts.css
│ │ ├── index.css
│ │ ├── reset.css
│ │ └── variables.css
│ ├── helpers/
│ │ ├── galleryImg.js
│ │ ├── notification.js
│ │ ├── reviews.js
│ │ ├── schema.js
│ │ └── tours.js
│ ├── utils/
│ │ └── i18n/
│ │ ├── locales/
│ │ │ ├── en.json
│ │ │ └── pt.json
│ │ └── index.js
│ ├── App.jsx
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
