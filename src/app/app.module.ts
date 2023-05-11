import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: '',
        component: ContactInfoComponent,
      },
      {
        path: 'details',
        component: ContactDetailComponent,
      },
    ],
  },
  { path: 'about', component: AboutMeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'courses/:course', component: CourseDetailComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: PageNotFountComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutMeComponent,
    PageNotFountComponent,
    CourseComponent,
    CourseDetailComponent,
    ContactInfoComponent,
    ContactDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
