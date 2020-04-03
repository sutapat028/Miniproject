import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RoomTypePage } from '../pages/room-type/room-type';
import { RoomComparePage } from '../pages/room-compare/room-compare';
import { RoomDetailPageModule } from '../pages/room-detail/room-detail.module';
import { RoomAddPage } from '../pages/room-add/room-add';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomTypePage,
    RoomComparePage,
    RoomAddPage,
    
    
  ],
  imports: [
    BrowserModule,HttpClientModule,RoomDetailPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoomTypePage,
    RoomComparePage,
    RoomAddPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
