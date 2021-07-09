import { Component, Input, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { ActivityData } from '../interfaces/activity-data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activity: ActivityData[] = [];
  @Input() activityRef!: ActivityData[];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  // renderActivity = () => {
  //   this.activitiesService.setActivity(this.activity);
  //   console.log(this.activity);
  // };
}
