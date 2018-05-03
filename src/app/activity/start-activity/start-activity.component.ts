import { Component, OnInit, OnDestroy, Directive, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UIService } from '../../shared/ui.service';
import { ShareDataService } from '../../common/share-data.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './start-activity.component.html',
  styleUrls: ['./start-activity.component.css']
})

@Directive({
    selector: '[sectionGroup]',
    exportAs: 'sectionGroup'
})

export class StartActivityComponent implements OnInit, OnDestroy {
    @Input() sectionTitle: string = "";
    @Input() sectionGroup: string = "";

    isLoading = true;
    private loadingSubscription: Subscription;

    constructor(public sharedDataService: ShareDataService, private uiService: UIService) {}

    ngOnInit() {
        this.loadingSubscription = this.uiService.loadingStateChanged.subscribe( isLoading => { this.isLoading=isLoading; } );
    }


    onStartActivity(form: NgForm) {
        this.sharedDataService.joinActivity(form.value.activityid);
    }

    ngOnDestroy() {
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }
    }


}
