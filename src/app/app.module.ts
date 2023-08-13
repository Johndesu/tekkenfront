import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './modules/account/account.module';
import { SharedModule } from './shared/shared.module';
import { ArticleModule } from './modules/article/article.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule, CoreModule, AccountModule, SharedModule, ArticleModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
