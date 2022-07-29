import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PagesComponent } from './Components/pages/pages.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { AdminAddPageComponent } from './Components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './Components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './Components/admin-sidebar/admin-sidebar.component';


import { PageService } from './services/page.service';
import { SidebarService } from './services/sidebar.service';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AdminAddUserComponent } from './Components/admin-add-user/admin-add-user.component';
import { UserService } from './services/user.service';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    AdminPageComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent,
    LoginComponent,
    LogoutComponent,
    AdminAddUserComponent,
    AdminNavbarComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    ToolbarComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule

    
  ],
  providers: [PageService,SidebarService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
