import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Services
import { ThemeService } from './services/theme.service';
import { UxService } from './services/ux.service';
import { OverviewComponent } from './nested-components/overview/overview.component';
import { XchangeComponent } from './nested-components/xchange/xchange.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    XchangeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ThemeService,
    UxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
