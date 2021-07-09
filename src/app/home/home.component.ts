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
  activityItem: any = {};
  activity!: string;
  type!: string;
  price!: number;
  accessibility!: number;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  selectRandom = () => {
    this.activitiesService.getRandomActivity().subscribe((response: any) => {
      this.activityArray = response;
      this.activitiesService.setActivity(this.activityArray);
    });
    this.showActivity();
  };

  showActivity = () => {
    this.activityArray = this.activitiesService.newActivity();
    console.log(this.activityArray);
    this.activityItem = this.activityArray[0];
    console.log(this.activityItem);
    this.activityArray.map((item) => {
      this.activity = item.activity;
      this.type = item.type;
      this.price = item.price;
      this.accessibility = item.accessibility;
    });
  };

  // updatedActivity = () => {
  //   this.activity = this.activitiesService.setActivity(this.activity);
  //   console.log(this.activity);
  // };
}
