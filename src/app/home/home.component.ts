import { Component, Input, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { ActivityData } from '../interfaces/activity-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activityObject: ActivityData[] = [];
  selectedActivity: ActivityData[] = [];
  activity!: string;
  type!: string;
  price!: number;
  accessibility!: number;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  // selectRandom = () => {
  //   this.activitiesService.getRandomActivity().subscribe((response: any) => {
  //     this.activityObject = response;
  //     console.log(this.activityObject);
  //     this.activitiesService.setActivity(this.activityObject);
  //     this.showActivity();
  //   });
  // };

  showActivity = () => {
    this.activityObject = this.activitiesService.newActivity();
    this.activityObject.map((item) => {
      this.activity = item.activity;
      this.type = item.type;
      this.price = item.price;
      this.accessibility = item.accessibility;
    });
  };
}
