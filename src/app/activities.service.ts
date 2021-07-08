import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityData } from './interfaces/activity-data';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  baseUrl: string = 'http://www.boredapi.com';
  selectedActivity: any[] = [];

  constructor(private http: HttpClient) {}

  getRandomActivity = () => {
    return this.http.get(`${this.baseUrl}/api/activity/`);
  };

  fetchActivity = (activity: string) => {
    return this.http.get(`${this.baseUrl}/api/activity?type=${activity}`);
  };

  setActivity = (activity: ActivityData[]) => {
    this.selectedActivity.unshift(activity);
    this.showActivity();
  };

  showActivity = () => {
    console.log(this.selectedActivity[0].activity);
    console.log(this.selectedActivity[0].type);
    console.log(this.selectedActivity[0].price);
    console.log(this.selectedActivity[0].accessibility);
    return this.selectedActivity[0];
  };
}
