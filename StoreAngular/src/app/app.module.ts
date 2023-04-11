import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { ChangeBackgroundColorDirective } from './CustomDirectives/change-background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SideBarComponent,
    ChangeBackgroundColorDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
