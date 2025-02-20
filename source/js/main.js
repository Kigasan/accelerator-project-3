// https://swiperjs.com/get-started#installation
import Swiper from "swiper/bundle";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';

import { SliderInit } from "./slider.js";
import { BurgerInit } from "./burger.js";
import { ProgramsSliderInit } from "./programs-slider.js";
import { FaqInit } from "./faq.js";

SliderInit(Swiper, Pagination);
BurgerInit();
ProgramsSliderInit(Swiper, Navigation);
FaqInit();
