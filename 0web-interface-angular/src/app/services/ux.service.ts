import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxService {

  constructor() { }

  // OVERVIEW SIDEBAR
  toggleSidebar (open: boolean) {
    switch (open) {
      case true:
      document.documentElement.style.setProperty('--sidebar-margin-left', '0%');
      document.documentElement.style.setProperty('--main-box-margin-left', '21%');
      console.log('sidebar opened? ' + open);
        break;
      case false:
      document.documentElement.style.setProperty('--sidebar-margin-left', '-100%');
      document.documentElement.style.setProperty('--main-box-margin-left', '0px');
      console.log('sidebar opened? ' + open);
        break;
      default:
      document.documentElement.style.setProperty('sidebar-margin-left', '-21%');
      document.documentElement.style.setProperty('--main-box-margin-left', '0px');
        break;
    }
  }

  // XCHANGE SIDEBAR
  toggleXChange (open: boolean) {
    switch (open) {
      case true:
      document.documentElement.style.setProperty('--xchange-box-margin-left', '0%');
      document.documentElement.style.setProperty('--main-box-margin-left', '21%');
      console.log('xchange opened? ' + open);
        break;
      case false:
      document.documentElement.style.setProperty('--xchange-box-margin-left', '-100%');
      document.documentElement.style.setProperty('--main-box-margin-left', '0px');
      console.log('xchange opened? ' + open);
        break;
      default:
      document.documentElement.style.setProperty('--xchange-box-margin-left', '-21%');
      document.documentElement.style.setProperty('--main-box-margin-left', '0px');
        break;
    }
  }

}
