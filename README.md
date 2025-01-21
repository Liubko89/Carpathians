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

```
CARPATHIANS/
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
│ ├── components/
│ │ ├── AboutUs/
│ │ │ ├── AboutUs.jsx
│ │ │ └── AboutUs.module.css
│ │ ├── BookATour/
│ │ │ ├── BookATour.jsx
│ │ │ └── BookATour.module.css
│ │ ├── CloseButton/
│ │ │ └── CloseButton.jsx
│ │ ├── Container/
│ │ │ ├── Container.jsx
│ │ │ └── Container.module.css
│ │ ├── Footer/
│ │ │ ├── Footer.jsx
│ │ │ └── Footer.module.css
│ │ ├── Gallery/
│ │ │ ├── Gallery.jsx
│ │ │ └── Gallery.module.css
│ │ ├── GalleryItem/
│ │ │ ├── GalleryItem.jsx
│ │ │ └── GalleryItem.module.css
│ │ ├── Header/
│ │ │ ├── Header.jsx
│ │ │ └── Header.module.css
│ │ ├── Hero/
│ │ │ ├── Hero.jsx
│ │ │ └── Hero.module.css
│ │ ├── LanguageSelector/
│ │ │ ├── LanguageSelector.jsx
│ │ │ └── LanguageSelector.module.css
│ │ ├── Logo/
│ │ │ ├── Logo.jsx
│ │ │ └── Logo.module.css
│ │ ├── ModalBookTour/
│ │ │ ├── ModalBookTour.jsx
│ │ │ └── ModalBookTour.module.css
│ │ ├── ModalWrapper/
│ │ │ ├── ModalWrapper.jsx
│ │ │ └── ModalWrapper.module.css
│ │ ├── MoreDetailsModal/
│ │ │ ├── MoreDetailsModal.jsx
│ │ │ └── MoreDetailsModal.module.css
│ │ ├── Navigation/
│ │ │ ├── Navigation.jsx
│ │ │ └── Navigation.module.css
│ │ ├── OurAdvantages/
│ │ │ ├── OurAdvantages.jsx
│ │ │ └── OurAdvantages.module.css
│ │ ├── OurAdvantagesListItem/
│ │ │ ├── OurAdvantagesListItem.jsx
│ │ │ └── OurAdvantagesListItem.module.css
│ │ ├── Questions/
│ │ │ ├── Questions.jsx
│ │ │ └── Questions.module.css
│ │ ├── ReviewItem/
│ │ │ ├── ReviewItem.jsx
│ │ │ └── ReviewItem.module.css
│ │ ├── Reviews/
│ │ │ ├── Reviews.jsx
│ │ │ └── Reviews.module.css
│ │ ├── ScrollToTopBtn/
│ │ │ ├── ScrollToTopBtn.jsx
│ │ │ └── ScrollToTopBtn.module.css
│ │ ├── SlickCarousel/
│ │ │ └── SlickCarousel.jsx
│ │ ├── SliderArrow/
│ │ │ ├── SliderArrow.jsx
│ │ │ └── SliderArrow.module.css
│ │ ├── SocialMediaLinks/
│ │ │ ├── SocialMediaLinks.jsx
│ │ │ └── SocialMediaLinks.module.css
│ │ ├── TourDetails/
│ │ │ ├── TourDetails.jsx
│ │ │ └── TourDetails.module.css
│ │ ├── TourDetailsSliderArrow/
│ │ │ ├── TourDetailsSliderArrow.jsx
│ │ │ └── TourDetailsSliderArrow.module.css
│ │ ├── UpcomingTour/
│ │ │ ├── UpcomingTour.jsx
│ │ │ └── UpcomingTour.module.css
│ │ ├── UpcomingTours/
│ │ │ ├── UpcomingTours.jsx
│ │ │ └── UpcomingTours.module.css
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
```
