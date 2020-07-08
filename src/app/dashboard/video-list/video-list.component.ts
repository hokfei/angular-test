import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Video} from '../types';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Output() selectedVideo = new EventEmitter<Video>();
  public selected;


  constructor() { }

  ngOnInit(): void {
  }

  selectVideo(i: number, video: Video): void {
    this.selected = i;
    this.selectedVideo.emit(video);
    console.log(video.title);
  }
}
