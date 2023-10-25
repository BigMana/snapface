import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'DriX',
      description: 'Best-in-class Unmanned Surface Vessel with outstanding sea keeping capabilities and a proven track record in enhancing sea operations efficiency',
      imageUrl: 'https://images.laprovence.com/media/hermes/20230313/20230313_1_2_5_1_1_obj27742682_1.jpg?twic=v1/crop=746x419@0x138/cover=1250x703',
      createdDate: new Date(),
      routerLink: "/pilot",
      linkText: "Let's try to Pilot The DriX !",
      linkImage: "b",
      snaps: 5,
      location: 'La Ciotat'
    },
    {
      id: 2,
      title: 'A18-D',
      description: 'A18-D is Exail mid size Autonomous Underwater Vehicle, AUV, for deep water applications. It is dedicated to accurate 3D seabed Survey. It performs autonomous mission up to 3000 m depth with 21 h endurance, and is easy transportable by plane for oversea missions. This system can be delivered with a LARS allowing automatic underwater recovery and software for data post processing.',
      imageUrl: 'https://www.ecagroup.com/media-picture/7404-754-473-a18d-credits-exail-balao-hd.jpg',
      createdDate: new Date(),
      audioCaption: 'Listen to the submarine song: ',
      audio: 'assets/sounds/Yellow-Submarine.mp3',
      snaps: 0,
      location: 'Six-Four-Beaches'
    },
    {
      id: 3,
      title: 'Gallente NYX',
      description: '"The "Super Carrier class" NYX With its Drones Hangar high Capacity of 110,000.00 m3, is a gigantic homage to a figure much loved in Gallente society. The ship’s design is based on the scepter of Doule dos Rouvenor III, the king who, during his peaceful 36-year reign, was credited with laying the foundation for the technologically and socially progressive ideologies which have pervaded Gallente thought in the millennia since."',
      imageUrl: 'https://www.eveonlineships.com/public/exserv/gallente-carrier-nyx-3.jpg',
      createdDate: new Date(), //6 mai 2003
      snaps: 0
    },
    {
      id: 4,
      title: 'Protos Carrier',
      description: '"These magnificent capital ships are known to inspire hope in the hearts of templar—or fear in their enemies. Armed with swift interceptors, they are a formidable force on the battlefield."',
      imageUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/starcraft/a/aa/ProBroodM7P1.jpg?width=640',
      createdDate: new Date(), //31 mars 1998
      snaps: 0
    },
    {
      id: 5,
      title: 'T 1',
      description: '"These Unmanned Surface Vessel robobots help carry out difficult agricultural work with as much precision as a human."',
      imageUrl: 'https://c1.staticflickr.com/5/4326/36000331965_1ce415939d_b.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
