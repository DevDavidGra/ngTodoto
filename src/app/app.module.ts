import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {JqueryComponent} from './jquery/jquery.component';
import {AngularComponent} from './angular/angular.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'jquery', component: JqueryComponent},
    {path: 'angular', component: AngularComponent}
  ]}
];



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
