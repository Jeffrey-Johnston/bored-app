import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  setActivity = (activity: any) => {
    this.selectedActivity.push(activity);
    this.newActivity();
  };

  newActivity = () => {
    return this.selectedActivity;
  };
}
