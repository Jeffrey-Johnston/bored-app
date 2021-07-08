import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/activities.service';
import { ActivityData } from 'src/app/interfaces/activity-data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activityArray: ActivityData[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  getActivity = (activity: string) => {
    this.activitiesService
      .fetchActivity(activity)
      .subscribe((response: any) => {
        this.activityArray = response;
        this.activitiesService.setActivity(this.activityArray);
      });
  };
}
