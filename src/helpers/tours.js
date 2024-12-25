import hoverla from "../assets/img/mob1x/overlay-min.jpg";
import hoverla_2x from "../assets/img/mob2x/overlay_2x.jpg";
import hoverlaTab from "../assets/img/tab1x/overlay_tab.jpg";
import hoverlaTab_2x from "../assets/img/tab2x/overlay_tab_2x.jpg";
import bukovel from "../assets/img/mob1x/overlay-1-min.jpg";
import bukovel_2x from "../assets/img/mob2x/overlay-1_2x.jpg";
import bukovelTab from "../assets/img/tab1x/overlay-1_tab.jpg";
import bukovelTab_2x from "../assets/img/tab2x/overlay-1_tab_2x.jpg";
import carpathians from "../assets/img/mob1x/overlay-2-min.jpg";
import carpathians_2x from "../assets/img/mob2x/overlay-2_2x.jpg";
import carpathiansTab from "../assets/img/tab1x/overlay-2_tab.jpg";
import carpathiansTab_2x from "../assets/img/tab2x/overlay-2_tab_2x.jpg";
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
  },
];
export default tours;
