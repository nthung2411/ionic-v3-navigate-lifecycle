import { Step_2Page } from './../pages/step-2/step-2';
import { DetailPage } from './../pages/detail/detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeProvider } from '../providers/home/home';
import { DetailProvider } from '../providers/detail/detail';
import { Step_1Page } from '../pages/step-1/step-1';

const components = [
  MyApp,
  HomePage,
  DetailPage,
  Step_1Page,
  Step_2Page
];
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HomeProvider,
    DetailProvider
  ]
})
export class AppModule { }
