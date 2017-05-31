import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { WorkComponent } from './work.component';
import { MenuComponent } from './menu.component';
import { CapabilitiesComponent } from './capabilities.component';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path : 'work',
        component : WorkComponent
      },{
        path : 'capabilities',
        component : CapabilitiesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    MenuComponent,
    CapabilitiesComponent,
    PageHeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
