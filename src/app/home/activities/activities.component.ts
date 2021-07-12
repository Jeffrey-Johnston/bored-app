import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivitiesService } from 'src/app/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activityObject: any = {};
  @Output() activityEvent = new EventEmitter<void>();

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {}

  selectRandom = () => {
    this.activitiesService.getRandomActivity().subscribe((response: any) => {
      this.activityObject = response;
      this.activitiesService.setActivity(this.activityObject);
      this.activityEvent.emit();
    });
  };

  getActivity = (activity: string) => {
    this.activitiesService
      .fetchActivity(activity)
      .subscribe((response: any) => {
        this.activityObject = response;
        this.activitiesService.setActivity(this.activityObject);
        this.activityEvent.emit();
      });
  };
}
