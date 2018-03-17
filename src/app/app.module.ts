import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
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
import { MobileNavbarComponent } from './Components/mobile-navbar/mobile-navbar.component';
import { IdentificationComponent } from './Components/identification/identification.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LegalComponent } from './Components/legal/legal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ArticleRowComponent,
    ArticleComponent,
    CategoryComponent,
    HomeComponent,
    FeaturedComponent,
    SubstrPipe,
    FeaturedElementComponent,
    MobileNavbarComponent,
    IdentificationComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    LegalComponent,
  ],
  entryComponents: [
    IdentificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SuiModule,
    BrowserAnimationsModule
  ],
  providers: [
    ArticleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
