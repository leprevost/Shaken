import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../../config';
import { AuthService } from '../services/auth.services';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { FavPage } from '../pages/fav/fav';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PopoverPage } from '../pages/popover/popover';
import { ContactPage } from '../pages/contact/contact';
import { VisitUsPage } from '../pages/visit-us/visit-us';
import { ProfilePage } from '../pages/profile/profile';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    CreatePage,
    FavPage,
    TabsPage,
    LoginPage,
    SignupPage,
    PopoverPage,
    ContactPage,
    VisitUsPage,
    ProfilePage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig.fire),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    CreatePage,
    FavPage,
    TabsPage,
    LoginPage,
    SignupPage,
    PopoverPage,
    ContactPage,
    VisitUsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    AuthService,
    AngularFireAuth,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
