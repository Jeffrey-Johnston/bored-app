import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityData } from './interfaces/activity-data';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  baseUrl: string = 'http://www.boredapi.com';
  selectedActivity: any[] = [];
  activity: any = {};

  constructor(private http: HttpClient) {}

  getRandomActivity = () => {
    return this.http.get(`${this.baseUrl}/api/activity/`);
  };

  fetchActivity = (activity: string) => {
    return this.http.get(`${this.baseUrl}/api/activity?type=${activity}`);
  };

  setActivity = (activity: ActivityData[]) => {
    this.selectedActivity.push(activity);
    this.newActivity();
  };

  newActivity = () => {
    this.activity = this.selectedActivity;
    return this.activity;
  };
}
