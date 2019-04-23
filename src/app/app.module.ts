import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LugarPage } from './lugar/lugar.page';
import { PerfilPage } from './perfil/perfil.page';
import { TabsPage } from './tabs/tabs.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
export const firebbaseConfig ={
  apiKey: "AIzaSyBhIMNLGuvxaC36tbeIrfONrRkrpnxbrDE",
    authDomain: "ionicplatzy-4eecf.firebaseapp.com",
    databaseURL: "https://ionicplatzy-4eecf.firebaseio.com",
    projectId: "ionicplatzy-4eecf",
    storageBucket: "ionicplatzy-4eecf.appspot.com",
    messagingSenderId: "226801944554"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebbaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
