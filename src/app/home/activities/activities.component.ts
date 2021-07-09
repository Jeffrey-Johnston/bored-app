import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivitiesService } from 'src/app/activities.service';
import { ActivityData } from 'src/app/interfaces/activity-data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activityArray: ActivityData[] = [];
  activity: any = {};
  @Output() activityEvent = new EventEmitter<void>();

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  // emitActivityEven = ()=>{
  //   this.activityEvent.emit()
  // }

  getActivity = (activity: string) => {
    this.activitiesService
      .fetchActivity(activity)
      .subscribe((response: any) => {
        this.activityArray = response;
        this.activitiesService.setActivity(this.activityArray);
      });
    this.activityEvent.emit(this.activity);
  };
}
