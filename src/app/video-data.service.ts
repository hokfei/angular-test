import { Injectable } from '@angular/core';
import {Video} from './dashboard/types';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private h: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.h.get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(map((videos) =>
          videos.map(v => ({...v, title: v.title.toUpperCase()}))
        )
      );
  }
}
