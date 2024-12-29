import mob_img_Maria from "../assets/img/mob1x/Ellipse30.png";
import mob_img_Maria_2x from "../assets/img/mob2x/Ellipse30_2x.png";
import mob_img_Ostap from "../assets/img/mob1x/Ellipse31.png";
import mob_img_Ostap_2x from "../assets/img/mob2x/Ellipse31_2x.png";
import tab_img_Maria from "../assets/img/tab1x/Ellipse_28_tab.png";
import tab_img_Maria_2x from "../assets/img/tab2x/Ellipse_28_tab_2x.png";
import tab_img_Ostap from "../assets/img/tab1x/Ellipse_29_tab.png";
import tab_img_Ostap_2x from "../assets/img/tab2x/Ellipse_29_tab_2x.png";
import desk_img_Maria from "../assets/img/desk1x/Ellipse32_desk.png";
import desk_img_Maria_2x from "../assets/img/desk2x/Ellipse28_desk_2x.png";
import desk_img_Ostap from "../assets/img/desk1x/Ellipse33_desk.png";
import desk_img_Ostap_2x from "../assets/img/desk2x/Ellipse29_desk_2x.png";
import desk_img_Anita from "../assets/img/desk1x/Ellipse34_desk.png";
import desk_img_Anita_2x from "../assets/img/desk2x/Ellipse30_desk_2x.png";

import mob_photoMaria from "../assets/img/mob1x/Rectangle94.jpg";
import mob_photoMaria_2x from "../assets/img/mob2x/Rectangle94_2x.jpg";
import mob_photoOstap from "../assets/img/mob1x/Rectangle93.jpg";
import mob_photoOstap_2x from "../assets/img/mob2x/Rectangle93_2x.jpg";
import tab_photoMaria from "../assets/img/tab1x/Rectangle_92_tab.jpg";
import tab_photoMaria_2x from "../assets/img/tab2x/Rectangle_92_tab_2x.jpg";
import tab_photoOstap from "../assets/img/tab1x/Rectangle_91_tab.jpg";
import tab_photoOstap_2x from "../assets/img/tab2x/Rectangle_91_tab_2x.jpg";
import desk_photoMaria from "../assets/img/desk1x/Rectangle62_desk.jpg";
import desk_photoMaria_2x from "../assets/img/desk2x/Rectangle62_desk_2x.jpg";
import desk_photoOstap from "../assets/img/desk1x/Rectangle63_desk.jpg";
import desk_photoOstap_2x from "../assets/img/desk2x/Rectangle63_desk_2x.jpg";
import desk_photoAnita from "../assets/img/desk1x/Rectangle64_desk.jpg";
import desk_photoAnita_2x from "../assets/img/desk2x/Rectangle64_desk_2x.jpg";

import { nanoid } from "nanoid";

const mariaTextReview =
  "It was really cool! We saw everything - sun, snow, rain, fog! It's very exciting and interesting, you won't regret it - it's worth going and seeing everything with your own yes. Everything is organized at the highest level.";

const ostapTextReview =
  "Good organization, everything went smoothly. Friendly guide Taras told interesting facts about the area and customs throughout the tour.";

const anitaTextReview =
  "Who is going to the mountains for the first time - this is exactly the tour and the people who organize everything. Guide Makar is interesting stories, selection of a route for a comfortable ascent, motivation and support.";

const reviews = [
  {
    id: nanoid(),
    name: "Maria",
    mobImage: mob_img_Maria,
    mobImage2x: mob_img_Maria_2x,
    tabImage: tab_img_Maria,
    tabImage2x: tab_img_Maria_2x,
    deskImage: desk_img_Maria,
    deskImage2x: desk_img_Maria_2x,
    mobPhoto: mob_photoMaria,
    mobPhoto2x: mob_photoMaria_2x,
    tabPhoto: tab_photoMaria,
    tabPhoto2x: tab_photoMaria_2x,
    deskPhoto: desk_photoMaria,
    deskPhoto2x: desk_photoMaria_2x,
    textReview: mariaTextReview,
  },
  {
    id: nanoid(),
    name: "Ostap",
    mobImage: mob_img_Ostap,
    mobImage2x: mob_img_Ostap_2x,
    tabImage: tab_img_Ostap,
    tabImage2x: tab_img_Ostap_2x,
    deskImage: desk_img_Ostap,
    deskImage2x: desk_img_Ostap_2x,
    mobPhoto: mob_photoOstap,
    mobPhoto2x: mob_photoOstap_2x,
    tabPhoto: tab_photoOstap,
    tabPhoto2x: tab_photoOstap_2x,
    deskPhoto: desk_photoOstap,
    deskPhoto2x: desk_photoOstap_2x,
    textReview: ostapTextReview,
  },

  {
    id: nanoid(),
    name: "Anita",
    mobImage: null,
    mobImage2x: null,
    tabImage: null,
    tabImage2x: null,
    deskImage: desk_img_Anita,
    deskImage2x: desk_img_Anita_2x,
    mobPhoto: null,
    mobPhoto2x: null,
    tabPhoto: null,
    tabPhoto2x: null,
    deskPhoto: desk_photoAnita,
    deskPhoto2x: desk_photoAnita_2x,
    textReview: anitaTextReview,
  },
];

export default reviews;
