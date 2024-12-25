import mob_img_Maria from "../assets/img/mob1x/Ellipse30.png";
import mob_img_Maria_2x from "../assets/img/mob2x/Ellipse30_2x.png";
import mob_img_Ostap from "../assets/img/mob1x/Ellipse31.png";
import mob_img_Ostap_2x from "../assets/img/mob2x/Ellipse31_2x.png";
import tab_img_Maria from "../assets/img/tab1x/Ellipse_28_tab.png";
import tab_img_Maria_2x from "../assets/img/tab2x/Ellipse_28_tab_2x.png";
import tab_img_Ostap from "../assets/img/tab1x/Ellipse_29_tab.png";
import tab_img_Ostap_2x from "../assets/img/tab2x/Ellipse_29_tab_2x.png";

import mob_photoMaria from "../assets/img/mob1x/Rectangle94.jpg";
import mob_photoMaria_2x from "../assets/img/mob2x/Rectangle94_2x.jpg";
import mob_photoOstap from "../assets/img/mob1x/Rectangle93.jpg";
import mob_photoOstap_2x from "../assets/img/mob2x/Rectangle93_2x.jpg";
import tab_photoMaria from "../assets/img/tab1x/Rectangle_92_tab.jpg";
import tab_photoMaria_2x from "../assets/img/tab2x/Rectangle_92_tab_2x.jpg";
import tab_photoOstap from "../assets/img/tab1x/Rectangle_91_tab.jpg";
import tab_photoOstap_2x from "../assets/img/tab2x/Rectangle_91_tab_2x.jpg";
import { nanoid } from "nanoid";

const mariaTextReview =
  "It was really cool! We saw everything - sun, snow, rain, fog! It's very exciting and interesting, you won't regret it - it's worth going and seeing everything with your own yes. Everything is organized at the highest level.";

const ostapTextReview =
  "Good organization, everything went smoothly. Friendly guide Taras told interesting facts about the area and customs throughout the tour.";

const reviews = [
  {
    id: nanoid(),
    name: "Maria",
    mobImage: mob_img_Maria,
    mobImage2x: mob_img_Maria_2x,
    tabImage: tab_img_Maria,
    tabImage2x: tab_img_Maria_2x,
    mobPhoto: mob_photoMaria,
    mobPhoto2x: mob_photoMaria_2x,
    tabPhoto: tab_photoMaria,
    tabPhoto2x: tab_photoMaria_2x,
    textReview: mariaTextReview,
  },
  {
    id: nanoid(),
    name: "Ostap",
    mobImage: mob_img_Ostap,
    mobImage2x: mob_img_Ostap_2x,
    tabImage: tab_img_Ostap,
    tabImage2x: tab_img_Ostap_2x,
    mobPhoto: mob_photoOstap,
    mobPhoto2x: mob_photoOstap_2x,
    tabPhoto: tab_photoOstap,
    tabPhoto2x: tab_photoOstap_2x,
    textReview: ostapTextReview,
  },
];

export default reviews;
