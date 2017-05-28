import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { MyApp } from './app.component';
import { Chat } from '../pages/chat/chat';

@NgModule({
  declarations: [
    MyApp,
    Chat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBQDgezVKzH01EjWhooalt3idxn_gubUG4",
      authDomain: "fir-chat-12ae8.firebaseapp.com",
      databaseURL: "https://fir-chat-12ae8.firebaseio.com",
      projectId: "fir-chat-12ae8",
      storageBucket: "fir-chat-12ae8.appspot.com",
      messagingSenderId: "72400940330"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Chat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ]
})
export class AppModule { }
