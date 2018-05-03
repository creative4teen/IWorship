import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UIService } from '../../shared/ui.service';
import { ShareDataService } from '../../common/share-data.service';

import { ChurchActivity } from '../../common/church-activity.model';

import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Directive, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-past-activity',
  templateUrl: './past-activity.component.html',
  styleUrls: ['./past-activity.component.css']
})

@Directive({
      selector: '[sectionGroup]',
      exportAs: 'sectionGroup'
})

export class PastActivityComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() sectionTitle: string = "";
    @Input() sectionGroup: string = "";

    displayedColumns = ['name', 'title', 'button'];
    dataSource = new MatTableDataSource<ChurchActivity>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private sharedDataService: ShareDataService) {}

    ngOnInit() {
        if (this.sharedDataService.homeChurch.activityArray){
            this.dataSource.data = this.sharedDataService.homeChurch.activityArray.filter(act=>{ return act.state=="done" });
        }
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onSelectActivity(activityid: string) {
        this.sharedDataService.selectActivity(activityid);
    }
    
    ngOnDestroy() {
    }

    
}

