import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ArticleListComponent } from './Components/article-list/article-list.component';
import { ArticleRowComponent } from './Components/article-row/article-row.component';
import { ArticleComponent } from './Components/article/article.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from './Services/article.service';
import { CategoryComponent } from './Components/category/category.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { FeaturedComponent } from './Components/featured/featured.component';
import { SubstrPipe } from './Pipes/substr.pipe';
import { FeaturedElementComponent } from './Components/featured-element/featured-element.component';
import {SidebarService} from './Services/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ArticleListComponent,
    ArticleRowComponent,
    ArticleComponent,
    CategoryComponent,
    HomeComponent,
    FeaturedComponent,
    SubstrPipe,
    FeaturedElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [
    ArticleService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
