import { Component } from '@angular/core';

@Component({
  selector: 'twice',
  styles:[`
      h1{text-align:center; margin-top:10px; margin-bottom:30px; color:#42d8cd}
  `],
  template: `
    <h1>{{title}}</h1>
    <twice-member></twice-member>
  `
})

export class AppComponent {
  title = "ONE IN A MILLION! TWICE!";
}
