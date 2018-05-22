import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleBodyComponent } from './components/article-body/article-body.component';
import { ArticleSummaryComponent } from './components/article-summary/article-summary.component';
import { ArticleHeadlineComponent } from './components/article-headline/article-headline.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleBodyComponent,
    ArticleSummaryComponent,
    ArticleHeadlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
