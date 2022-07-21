import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeCtaComponent } from './home/home-cta/home-cta.component';
import { HowToComponent } from './how-to/how-to.component';
import { CategoryComponent } from './category/category.component';
import { CategoryMenuComponent } from './category/category-menu/category-menu.component';
import { CategoryFeedComponent } from './category/category-feed/category-feed.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MeetTeamComponent } from './meet-team/meet-team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeCtaComponent,
    HowToComponent,
    CategoryComponent,
    CategoryMenuComponent,
    CategoryFeedComponent,
    AboutUsComponent,
    MeetTeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
