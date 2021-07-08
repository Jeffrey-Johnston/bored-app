import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { ActivityData } from '../interfaces/activity-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activityArray: ActivityData[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  selectRandom = () => {
    this.activitiesService.getRandomActivity().subscribe((response: any) => {
      this.activityArray = response;
      this.activitiesService.setActivity(this.activityArray);
    });
  };
}
