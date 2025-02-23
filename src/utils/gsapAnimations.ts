// utils/gsapAnimations.ts
import { gsap } from 'gsap';

export const animateFromTop = (element: HTMLElement) => {
  gsap.from(element, { y: -50, opacity: 0, duration: 1 });
};

export const animateFromLeft = (element: HTMLElement) => {
  gsap.from(element, { x: -50, opacity: 0, duration: 1 });
};

export const animateFromRight = (element: HTMLElement) => {
  gsap.from(element, { x: 50, opacity: 0, duration: 1 });
};

export const animateFromBottom = (element: HTMLElement) => {
  gsap.from(element, { y: 50, opacity: 0, duration: 1 });
};
