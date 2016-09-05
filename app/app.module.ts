import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './component/app.component';
import { MemberComponent } from './component/member.component'
import { MemberDetailComponent } from './component/member-detail.component';
import { TwiceService } from './service/twice.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    MemberComponent,
    MemberDetailComponent
  ],

  providers: [
    TwiceService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {}
