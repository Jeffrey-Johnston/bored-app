import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activity: any[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  renderActivity = () => {
    this.activitiesService.setActivity(this.activity);
    console.log(this.activity);
  };
}
