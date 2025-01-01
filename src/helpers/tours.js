import hoverla from "../assets/img/mob1x/overlay-min.jpg";
import hoverla1Day from "../assets/img/mob1x/Rectangle73.jpg";
import hoverla2Day from "../assets/img/mob1x/overlay-8.jpg";
import hoverla3Day from "../assets/img/mob1x/Rectangle57.jpg";
import hoverla_2x from "../assets/img/mob2x/overlay_2x.jpg";
import hoverla1Day_2x from "../assets/img/mob2x/Rectangle73_2x.jpg";
import hoverla2Day_2x from "../assets/img/mob2x/overlay-8_2x.jpg";
import hoverla3Day_2x from "../assets/img/mob2x/Rectangle57_2x.jpg";
import hoverlaTab from "../assets/img/tab1x/overlay_tab.jpg";
import hoverlaTab_2x from "../assets/img/tab2x/overlay_tab_2x.jpg";
import hoverlaDesk from "../assets/img/desk1x/overlay_desk.jpg";
import hoverlaDesk_2x from "../assets/img/desk2x/overlay_desk_2x.jpg";

import bukovel from "../assets/img/mob1x/overlay-1-min.jpg";
import bukovel1Day from "../assets/img/mob1x/Rectangle74.jpg";
import bukovel2Day from "../assets/img/mob1x/overlay-5.jpg";
import bukovel3Day from "../assets/img/mob1x/overlay-6.jpg";
import bukovel4Day from "../assets/img/mob1x/overlay-7.jpg";
import bukovel_2x from "../assets/img/mob2x/overlay-1_2x.jpg";
import bukovel1Day_2x from "../assets/img/mob2x/Rectangle74_2x.jpg";
import bukovel2Day_2x from "../assets/img/mob2x/overlay-5_2x.jpg";
import bukovel3Day_2x from "../assets/img/mob2x/overlay-6_2x.jpg";
import bukovel4Day_2x from "../assets/img/mob2x/overlay-7_2x.jpg";
import bukovelTab from "../assets/img/tab1x/overlay-1_tab.jpg";
import bukovelTab_2x from "../assets/img/tab2x/overlay-1_tab_2x.jpg";
import bukovelDesk from "../assets/img/desk1x/overlay-1_desk.jpg";
import bukovelDesk_2x from "../assets/img/desk2x/overlay-2_desk_2x.jpg";

import carpathians from "../assets/img/mob1x/overlay-2-min.jpg";
import carpathians1Day from "../assets/img/mob1x/overlay-3.jpg";
import carpathians2Day from "../assets/img/mob1x/overlay-4.jpg";
import carpathians3Day from "../assets/img/mob1x/3.3-min.jpg";
import carpathians4Day from "../assets/img/mob1x/3.4-min.jpg";
import carpathians5Day from "../assets/img/mob1x/3.5-min.jpg";
import carpathians6Day from "../assets/img/mob1x/3.6-min.jpg";
import carpathians7Day from "../assets/img/mob1x/3.7-min.jpg";
import carpathians_2x from "../assets/img/mob2x/overlay-2_2x.jpg";
import carpathians1Day_2x from "../assets/img/mob2x/overlay-3_2x.jpg";
import carpathians2Day_2x from "../assets/img/mob2x/overlay-4_2x.jpg";
import carpathians3Day_2x from "../assets/img/mob2x/3.3_2x.jpg";
import carpathians4Day_2x from "../assets/img/mob2x/3.4_2x.jpg";
import carpathians5Day_2x from "../assets/img/mob2x/3.5_2x.jpg";
import carpathians6Day_2x from "../assets/img/mob2x/3.6_2x.jpg";
import carpathians7Day_2x from "../assets/img/mob2x/3.7_2x.jpg";
import carpathiansTab from "../assets/img/tab1x/overlay-2_tab.jpg";
import carpathiansTab_2x from "../assets/img/tab2x/overlay-2_tab_2x.jpg";
import carpathiansDesk from "../assets/img/desk1x/overlay-2_desk.jpg";
import carpathiansDesk_2x from "../assets/img/desk2x/overlay-2_desk_2x.jpg";

import { nanoid } from "nanoid";

const tours = [
  {
    id: nanoid(),
    name: "Ascent to Hoverla",
    alt: "image of Hoverla",
    price: 4.999,
    mobImage: hoverla,
    mobImage2x: hoverla_2x,
    tabImage: hoverlaTab,
    tabImage2x: hoverlaTab_2x,
    deskImage: hoverlaDesk,
    deskImage2x: hoverlaDesk_2x,
    moreDetails: [
      {
        day: "1 day",
        bgImage: hoverla1Day,
        bgImage2x: hoverla1Day_2x,
        activities: [
          "Departure from Lviv",
          "Manyava Hermitage",
          "Manyava waterfall",
          "Arrival to Bukovel",
          "Check-in",
          "Dinner",
          "Evening by the fireplace",
        ],
      },
      {
        day: "2 day",
        bgImage: hoverla2Day,
        bgImage2x: hoverla2Day_2x,
        activities: [
          "Breakfast",
          "Ascent to Hoverla",
          "Lunch",
          "Recreation",
          "Sauna",
          "Dinner",
        ],
      },
      {
        day: "3 day",
        bgImage: hoverla3Day,
        bgImage2x: hoverla3Day_2x,
        activities: [
          "Breakfast",
          "A walk around Bukovel",
          "Check out from the hotel",
          "Yaremche",
          "Arrival in Lviv",
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Ski tour to Bukovel",
    alt: "image of Bukovel",
    price: 7.499,
    mobImage: bukovel,
    mobImage2x: bukovel_2x,
    tabImage: bukovelTab,
    tabImage2x: bukovelTab_2x,
    deskImage: bukovelDesk,
    deskImage2x: bukovelDesk_2x,
    moreDetails: [
      {
        day: "1 day",
        bgImage: bukovel1Day,
        bgImage2x: bukovel1Day_2x,
        activities: [
          "Departure from Lviv",
          "Manyava Hermitage",
          "Manyava waterfall",
          "Arrival to Bukovel",
          "Check-in",
          "Dinner",
          "Evening by the fireplace",
        ],
      },
      {
        day: "2 day",
        bgImage: bukovel2Day,
        bgImage2x: bukovel2Day_2x,
        activities: [
          "Breakfast",
          "Recreation",
          "Lunch",
          "Recreation",
          "Dinner",
          "Vacation",
        ],
      },
      {
        day: "3 day",
        bgImage: bukovel3Day,
        bgImage2x: bukovel3Day_2x,
        activities: [
          "Breakfast",
          "A walk around Bukovel",
          "Lunch",
          "Recreation",
          "Sauna",
          "Dinner",
        ],
      },
      {
        day: "4 day",
        bgImage: bukovel4Day,
        bgImage2x: bukovel4Day_2x,
        activities: [
          "Breakfast",
          "Recreation",
          "Lunch",
          "Departure from Bukovel",
          "Yaremche",
          "Arrival in Lviv",
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Week in Carpathians",
    alt: "image of Carpathians",
    price: 9.499,
    mobImage: carpathians,
    mobImage2x: carpathians_2x,
    tabImage: carpathiansTab,
    tabImage2x: carpathiansTab_2x,
    deskImage: carpathiansDesk,
    deskImage2x: carpathiansDesk_2x,
    moreDetails: [
      {
        day: "1 day",
        bgImage: carpathians1Day,
        bgImage2x: carpathians1Day_2x,
        activities: [
          "Departure from Lviv",
          "Dovbush rocks",
          "Lunch",
          "Tustan fortress",
          "Check-in",
          "Dinner",
        ],
      },
      {
        day: "2 day",
        bgImage: carpathians2Day,
        bgImage2x: carpathians2Day_2x,
        activities: [
          "Breakfast",
          "Lake Synevyr",
          "Ecopark Valley of Wolves",
          "Lunch",
          "Excursion to Kolochava",
          "Dinner",
        ],
      },
      {
        day: "3 day",
        bgImage: carpathians3Day,
        bgImage2x: carpathians3Day_2x,
        activities: [
          "Breakfast",
          "Shipit waterfall",
          "Gimba mountain",
          "Recreation",
          "Dinner",
        ],
      },
      {
        day: "4 day",
        bgImage: carpathians4Day,
        bgImage2x: carpathians4Day_2x,
        activities: [
          "Breakfast",
          "Deer farm in Iza",
          "Warm waters in Velyatino",
          "Geographical center of Europe",
          "Dinner",
        ],
      },
      {
        day: "5 day",
        bgImage: carpathians5Day,
        bgImage2x: carpathians5Day_2x,
        activities: ["Breakfast", "Ascent to Hoverla", "Recreation", "Dinner"],
      },
      {
        day: "6 day",
        bgImage: carpathians6Day,
        bgImage2x: carpathians6Day_2x,
        activities: [
          "Breakfast",
          "Hut-museum from the Shadows of Forgotten Ancestors",
          "Lunch",
          "Rafting of free time",
          "Dinner",
        ],
      },
      {
        day: "7 day",
        bgImage: carpathians7Day,
        bgImage2x: carpathians7Day_2x,
        activities: [
          "Breakfast",
          "Dovbush trail",
          "Souvenir fair",
          "Lunch",
          "Probij waterfall",
          "Return to Lviv",
        ],
      },
    ],
  },
];
export default tours;
