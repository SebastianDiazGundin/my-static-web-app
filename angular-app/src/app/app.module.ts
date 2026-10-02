import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { declarations } from './core';

@NgModule({
  declarations: [AppComponent, AboutComponent, declarations],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
