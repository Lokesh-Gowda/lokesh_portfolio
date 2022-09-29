import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectComponent } from './project/project.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'about', component: HeaderComponent },
  { path: 'home', component: MainContentComponent },
  { path: 'contact', component: SideNavComponent },
  { path: 'course', component: FooterComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
