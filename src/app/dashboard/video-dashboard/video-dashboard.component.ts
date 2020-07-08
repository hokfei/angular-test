import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../types';
import {HttpClient} from '@angular/common/http';
import {VideoDataService} from '../../video-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  video: Video | undefined;
  videoList: Observable<Video[]>;

  constructor(service: VideoDataService) {
    this.videoList = service.loadVideos();
/*    service.loadVideos()
      .subscribe((videos) => (this.videoList = videos));
*/
  }

  ngOnInit(): void {
  }

  setSelectedVideo(video: Video): void {
    this.video = video;
  }
}
