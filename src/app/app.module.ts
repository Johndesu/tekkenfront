import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './modules/account/account.module';
import { SharedModule } from './shared/shared.module';
import { ArticleModule } from './modules/article/article.module';
import { AdminModule } from './modules/admin/admin.module';
import { PublicModule } from './modules/public/public.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Register the Portuguese locale data
registerLocaleData(localePt)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, AccountModule, SharedModule, ArticleModule, AdminModule, PublicModule, AccountModule],
  providers: [
    {
      provide: [HTTP_INTERCEPTORS, {LOCALE_ID, useValue: 'pt'}],
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
