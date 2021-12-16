import { Component, OnInit } from '@angular/core';
import { MissionsService } from './missions.service';

import { Mission } from './missions.model';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  missions: Mission[];

  constructor(private missionsService: MissionsService) { }

  ngOnInit() {
    this.missions = this.missionsService.getAllMissions();
  }

}
