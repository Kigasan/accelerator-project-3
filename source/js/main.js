// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/bundle';

import { SliderInit } from './slider.js';
import { BurgerInit } from './burger.js';
import { ProgramsSliderInit } from './programs-slider.js';
import { FaqInit } from './faq.js';
import { ReviewsSliderInit } from './reviews-slider.js';

SliderInit(Swiper, Pagination);
BurgerInit();
ProgramsSliderInit(Swiper, Navigation);
FaqInit();
ReviewsSliderInit(Swiper, Navigation);
