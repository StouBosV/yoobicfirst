import { Injectable } from '@angular/core';

import { Mission } from './missions.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private missions: Mission[] = [
    {
      id: '1',
      avatar: '../../assets/manager1.jpg',
      name: 'Mission 1',
      location: 'Piraeus, GR',
      date: '15 Dec 2021',
      distance: 2,
      imageUrl: '../../assets/photo1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fulltext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit dui, congue ac erat congue, faucibus auctor turpis.'
    },
    {
      id: '2',
      avatar: '../../assets/manager2.jpg',
      name: 'Mission 2',
      location: 'London, UK',
      date: '16 Dec 2021',
      distance: 5,
      imageUrl: '../../assets/photo2.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fulltext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit dui, congue ac erat congue, faucibus auctor turpis.'
    },
    {
      id: '3',
      avatar: '../../assets/manager3.jpg',
      name: 'Mission 3',
      location: 'Rome, IT',
      date: '17 Dec 2021',
      distance: 8,
      imageUrl: '../../assets/photo3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fulltext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit dui, congue ac erat congue, faucibus auctor turpis.'
    },
    {
      id: '4',
      avatar: '../../assets/manager4.jpg',
      name: 'Mission 4',
      location: 'Paris, FR',
      date: '18 Dec 2021',
      distance: 10,
      imageUrl: '../../assets/photo4.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fulltext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit dui, congue ac erat congue, faucibus auctor turpis.'
    }
  ];

  constructor() { }

  getAllMissions() {
    return  [...this.missions];
  }

  getMission(missionId: string) {
    return {
      ...this.missions.find(mission => mission.id === missionId)
    };
  }
}
