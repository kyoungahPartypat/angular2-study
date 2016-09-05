import { Component, OnInit } from '@angular/core';

import { Twice } from '../model/Twice';
import { TwiceService } from '../service/twice.service';

@Component({
  selector: 'twice-member',
  styles: [`
      #content{width:450px; margin-left:auto; margin-right:auto}
      #content:after{content:" "; display:block; clear:both}

      #content > ul.members{width:120px; float:left}
      #content > ul.members > li{width:100%; margin-bottom:10px; line-height:22px}
      #content > ul.members > li span{display:inline-block}
      #content > ul.members > li > span{width:100%; height:35px; border-radius:20px; border:1px solid #42d8cd}
      #content > ul.members > li > span:hover{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}
      #content > ul.members > li > span > span.member-number{width:30px; height:30px; margin-top:3px; margin-left:5px; margin-right:5px; line-height:30px; text-align:center; font-size:13px; color:#FFF; border-radius:100%; background-color:#42d8cd}

      #content > ul.members > li > span.selected{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}
      #content > ul.members > li > span.selected > span.member-number{color:#cacaca; background-color:#FFF}
    `],
  providers: [TwiceService],
  template: `
      <h1>{{title}}</h1>
      <div id="content">
        <ul class="members">
          <li *ngFor="let member of twice" (click)="onSelect(member)">
            <span [class.selected]="member === selectedMember"><span class="member-number">{{member.id}}</span> {{member.name}}</span>
          </li>
        </ul>
        <member-detail [member]="selectedMember"></member-detail>
      </div>
  `
})

export class MemberComponent implements OnInit {
  twice: Twice[];
  selectedMember: Twice;

  constructor(private twiceService: TwiceService) { }

  getMembers(): void {
    this.twiceService.getMembersSlowly().then(twice => this.twice = twice);
  }

  onSelect(member: Twice): void {
    this.selectedMember = member;
  }

  ngOnInit(): void {
    this.getMembers();
  }
}
