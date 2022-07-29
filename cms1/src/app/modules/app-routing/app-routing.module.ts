import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../../Components/pages/pages.component';
import { AdminPageComponent } from '../../Components/admin-page/admin-page.component';
import { AdminAddPageComponent } from '../../Components/admin-add-page/admin-add-page.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { AdminEditPageComponent } from '../../Components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from '../../Components/admin-sidebar/admin-sidebar.component';
import { LoginComponent } from '../../Components/login/login.component';
import { LogoutComponent } from '../../Components/logout/logout.component';
import { AdminAddUserComponent } from 'src/app/Components/admin-add-user/admin-add-user.component';
import { HomeComponent } from '../../Components/home/home.component';
import { SideNavComponent } from 'src/app/Components/side-nav/side-nav.component';

const routes: Routes = [
  {path: ':page',component: PagesComponent},
  {path: 'admin/pages', component: AdminPageComponent},
  {path: 'admin/add-page', component: AdminAddPageComponent},
  {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
  {path:'admin/sidebar', component:AdminSidebarComponent},
  {path:'', component:LoginComponent},
  {path:'home/pages', component:HomeComponent},
  {path:'logout', component:LogoutComponent},
  {path:'admin/sidenav',component:SideNavComponent},
  {path:'admin/add-user',component: AdminAddUserComponent},


  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
