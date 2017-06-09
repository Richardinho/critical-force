import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  application
import { AppComponent } from './app.component';

//  pages
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';

//  components
import { MenuComponent } from './sharedcomponents/menu/menu.component';
import { PageHeaderComponent } from './sharedcomponents/pageheader/page-header.component';
import { FooterComponent } from './sharedcomponents/footer/footer.component';
import { MainComponent } from './pages/main.component';


import { MainResolver } from './pages/main-resolver';

//  providers

import { MenuService } from './pages/menu-service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,

        children : [
          {
            path : '',
            component : HomeComponent,
            resolve: {
              foobar : MainResolver
            },
          },
          {
            path : 'work',
            component : WorkComponent,
            resolve: {
              foobar : MainResolver
            },
          },{
            path : 'capabilities',
            component : CapabilitiesComponent,
            resolve: {
              foobar : MainResolver
            },
        }]
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    WorkComponent,
    MenuComponent,
    CapabilitiesComponent,
    PageHeaderComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [
    MenuService,
    MainResolver
  ]
})
export class AppModule { }
