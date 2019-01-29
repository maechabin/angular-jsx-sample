import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VDomModule } from 'ng-vdom';
import { AppComponent, HelloComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [VDomModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent],
})
export class AppModule {}
