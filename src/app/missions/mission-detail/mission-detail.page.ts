import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionsService } from '../missions.service';

import { Mission } from '../missions.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
})
export class MissionDetailPage implements OnInit {
  loadedMission: Mission;

  constructor(
    private activatedRoute: ActivatedRoute,
    private missionsService: MissionsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const missionId = paramMap.get('missionId');
      this.loadedMission = this.missionsService.getMission(missionId);
    });
  }

}
