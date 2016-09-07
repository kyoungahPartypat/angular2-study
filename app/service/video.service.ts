import { Injectable } from '@angular/core';

import { TwiceYoutube } from '../model/TwiceYoutube';
import { YOUTUBE } from '../model/mock-youtube';

@Injectable()
class VideoService {
  static getLists(){
    return ['단체', '나연', '정연', '지효', '다현', '채영', '모모', '사나', '미나', '쯔위'];
  };

  getVideos(): Promise<TwiceYoutube[]> {
    return Promise.resolve(YOUTUBE);
  };

}

export { VideoService }
