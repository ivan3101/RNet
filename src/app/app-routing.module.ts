import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './Components/category/category.component';
import {ArticleComponent} from './Components/article/article.component';
import {HomeComponent} from './Components/home/home.component';
import {IdentificationComponent} from './Components/identification/identification.component';
import {ContactUsComponent} from './Components/contact-us/contact-us.component';
import {AboutUsComponent} from './Components/about-us/about-us.component';
import {LegalComponent} from './Components/legal/legal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'contact-us', component: ContactUsComponent, data: { animation: 'contact-us' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'about-us' } },
  { path: 'legal', component: LegalComponent, data: { animation: 'legal' } },
  { path: 'articles/:articleId', component: ArticleComponent, data: { animation: 'articles/:articleId' } },
  { path: 'category/:categoryId', component: CategoryComponent, data: { animation: 'category' } },
  { path: '**', component: PageNotFoundComponent, data: { animation: '**' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
