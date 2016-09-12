import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './component/app.component';
import { MemberComponent } from './component/member.component'
import { MemberDetailComponent } from './component/member-detail.component';
import { VideoComponent } from './component/video.component';
import { VideoDetailComponent } from './component/video-detail.component';
import { VideoInputComponent } from './component/video-input.component';
import { TwiceService } from './service/twice.service';
import { VideoService } from './service/video.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],

  declarations: [
    AppComponent,
    MemberComponent,
    MemberDetailComponent,
    VideoComponent,
    VideoDetailComponent,
    VideoInputComponent
  ],

  providers: [
    TwiceService,
    VideoService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {}
