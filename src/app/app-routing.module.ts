import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './Components/category/category.component';
import {ArticleComponent} from './Components/article/article.component';
import {HomeComponent} from './Components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articles/:articleId', component: ArticleComponent },
  { path: 'category/:categoryId', component: CategoryComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
