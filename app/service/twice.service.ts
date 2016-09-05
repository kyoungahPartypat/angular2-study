import { Injectable } from '@angular/core';

import { Twice } from '../model/Twice';
import { TWICE } from '../model/mock-twice';


@Injectable()
export class TwiceService {
  getMembers(): Twice[] {
    return TWICE;
  }
}
