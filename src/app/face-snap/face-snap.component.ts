import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
   @Input() faceSnap!: FaceSnap;

   title!: string;
   description!: string;
   creationDate!: Date;
   imageUrl!: string;
   snaps!: number;
   buttonText!: string;

   ngOnInit() {

    this.buttonText = 'Oh Snap!'
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
