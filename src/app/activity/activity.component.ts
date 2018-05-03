import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShareDataService } from '../common/share-data.service';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit, OnDestroy {
    ongoing = false;
    activitySubscription: Subscription;

    constructor(public shareDataService: ShareDataService) {}

    ngOnInit() {
        this.activitySubscription = this.shareDataService.activityChanged.subscribe(
            act => {
                if (act) {
                    this.ongoing = true;
                } else {
                    this.ongoing = false;
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.activitySubscription) {
            this.activitySubscription.unsubscribe();
        }
    }
}
