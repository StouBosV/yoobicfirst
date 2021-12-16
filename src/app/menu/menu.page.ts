import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Dashboard',
      url:'/menu/dashboard/missions'
    },
    {
      title:'Photos',
      url:'/menu/dashboard/missions'
    },
    {
      title:'Available Missions',
      url:'/menu/dashboard/missions'
    },
    {
      title:'My Missions',
      url:'/menu/dashboard/missions'
    },
    {
      title:'Chat',
      url:'/menu/dashboard/missions'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
