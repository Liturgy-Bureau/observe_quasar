import { Injectable } from '@angular/core';
import { themecolors } from '../var/var';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  changeTheme(lights: string) {
    switch (lights) {
      case 'OFF':
        document.documentElement.style.setProperty('--primary-color', themecolors.dark.primary);
        document.documentElement.style.setProperty('--secondary-color', themecolors.dark.secondary);
        document.documentElement.style.setProperty('--bg-color', themecolors.dark.bg);
        document.documentElement.style.setProperty('--font-color', themecolors.dark.font);
        // document.documentElement.style.setProperty('--btn-hover-color', themecolors.dark.btnhover);
        localStorage.setItem('lights', 'OFF');
        break;
      case 'ON':
        document.documentElement.style.setProperty('--primary-color', themecolors.light.primary);
        document.documentElement.style.setProperty('--secondary-color', themecolors.light.secondary);
        document.documentElement.style.setProperty('--bg-color', themecolors.light.bg);
        document.documentElement.style.setProperty('--font-color', themecolors.light.font);
        // document.documentElement.style.setProperty('--btn-hover-color', themecolors.light.btnhover);
        localStorage.setItem('lights', 'ON');
        break;
      default:
        document.documentElement.style.setProperty('--primary-color', themecolors.light.primary);
        document.documentElement.style.setProperty('--secondary-color', themecolors.light.secondary);
        document.documentElement.style.setProperty('--bg-color', themecolors.light.bg);
        document.documentElement.style.setProperty('--font-color', themecolors.light.font);
        // document.documentElement.style.setProperty('--btn-hover-color', themecolors.light.btnhover);
        localStorage.setItem('lights', 'ON');
        break;

    }
  }

}
