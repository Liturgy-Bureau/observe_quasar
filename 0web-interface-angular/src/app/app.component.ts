import { Component, Compiler, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { UxService } from './services/ux.service';
import { LANGUAGES } from './var/var';
import { fadeAnimation } from './app-animations';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  title = 'web-interface-angular';
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  // for media detection and responsiveness
  isPhonePortrait = false;
  isPhoneLandscape = false;
  isTabletPortrait = false;
  isTabletLandscape = false;
  // UI/UX
  lights: any;

  accopen: boolean = false;
  xchangeopen: boolean = false;
  sidebaropen: boolean = false;
  langopen: boolean = false;

  languages = LANGUAGES;
  selectedLanguage: any;

  opmode: string = '';

  constructor (
    private compiler: Compiler,
    private injector: Injector,
    private responsive: BreakpointObserver,
    private themeservice: ThemeService,
    private uxservice: UxService
  ) {}


  ngOnInit() {
    /* breakpoint observations*/
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
    ])
      .subscribe(result => {

        this.isPhonePortrait = false;
        this.isPhoneLandscape = false;
        this.isTabletPortrait = false;
        this.isTabletLandscape = false;

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isPhonePortrait = true;
          console.log('HANDSET PORTRAIT ' + this.isPhonePortrait);
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]){
          this.isPhoneLandscape = true;
          console.log('HANDSET LANDSCAPE ' + this.isPhoneLandscape);
        }
        else if (breakpoints[Breakpoints.TabletPortrait]){
          this.isTabletPortrait = true;
          console.log('TABLET PORTRAIT ' + this.isTabletPortrait);
        }
        else if (breakpoints[Breakpoints.TabletLandscape]){
          this.isTabletLandscape = true;
          console.log('TABLET LANDSCAPE ' + this.isTabletLandscape);
        }
        else if (breakpoints[Breakpoints.Web]){
          console.log('seems like NORMAL WEB');
        }
      });
    /* end breakpoint observations -continue...*/

    this.lights = localStorage.getItem('lights' || ''); // get the property if exist


    this.initLanguage();

    this.themeservice.changeTheme(this.lights); // initialize theming property to 'lights on'
    this.uxservice.toggleSidebar(false); // initialize sidebar to 'closed'
  }

  // theme toggler
  toggleTheme() {
    this.lights = localStorage.getItem('lights' || '');
    switch (this.lights) {
      case 'ON':
        this.themeservice.changeTheme('OFF');
        break;
      case 'OFF' || null:
        this.themeservice.changeTheme('ON');
        break;
    }

  }

  // account box toggler
  toggleAccBox() {
    this.accopen = !this.accopen;
    console.log('account box opened? ' + this.accopen);
  }

  /* BETTER SOLUTION FOUND - NOT USED
  // XChange toggler
  toggleXChange() {
    this.uxservice.toggleSidebar(false);
    this.xchangeopen = !this.xchangeopen;
    this.uxservice.toggleXChange(this.xchangeopen);
  }
  */

  // sidebar toggler - USED FOR MULTIPLE FUNCTIONALITIES E.G. OVERVIEW, XCHANGE ETC.
  toggleSidebar() {

      this.sidebaropen = !this.sidebaropen;
      this.uxservice.toggleSidebar(this.sidebaropen);
  }

  // language box toggler
  toggleLang() {
    this.langopen = !this.langopen;
    console.log('language selector opened? ' + this.langopen);
  }

  // initialize language (english if none exists as pre selection in local storage)
  initLanguage() {
    if (localStorage.getItem('language')) {
      this.selectedLanguage = localStorage.getItem('language');
    } else {
      this.selectedLanguage = 'english';
    }
  }

  // select another language
  selectLang(i: any) {
    this.selectedLanguage = this.languages[i];
    console.log('language selected? ' + this.selectedLanguage);
    this.toggleLang();
  }


}
