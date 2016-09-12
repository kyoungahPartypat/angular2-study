import { Component } from '@angular/core';

import '../rxjs-operators';

@Component({
  selector: 'twice',
  styles:[`
      h1{text-align:center; margin-top:10px; margin-bottom:30px; color:#42d8cd}

      nav{width:150px; margin-left:auto; margin-right:auto; margin-bottom:20px}
      nav:after{content:" "; display:block; clear:both}
      nav > a{display:block; float:left; width:50%; color:#42d8cd; text-align:center; text-decoration:none}

  `],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink = "/members">Members</a>
      <a routerLink = "/video">Video</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = "ONE IN A MILLION! TWICE!";
}
