import { Injectable } from '@angular/core';

import { Twice } from '../model/Twice';
import { TWICE } from '../model/mock-twice';

@Injectable()
export class TwiceService {
  getMembers(): Promise<Twice[]> {
    return Promise.resolve(TWICE);
  }

  getMembersSlowly(): Promise<Twice[]> {
    return new Promise<Twice[]> (resolve => setTimeout(resolve, 2000)).then(() => this.getMembers());
  }

}
