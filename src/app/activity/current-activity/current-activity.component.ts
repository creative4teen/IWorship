import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Directive, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


import { StopActivityComponent } from './stop-activity.component';
import { ShareDataService } from '../../common/share-data.service';
import { Item } from '../../common/item.model';

@Component({
    selector: 'app-current-activity',
    templateUrl: './current-activity.component.html',
    styleUrls: ['./current-activity.component.css']
})

export class CurrentActivityComponent implements OnInit {
    displayedColumns = ['name', 'button'];
    bookSource = new MatTableDataSource<Item>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private dialog: MatDialog, private shareDataService: ShareDataService) {}

    ngOnInit() {
        if (this.shareDataService.homeChurch.activityArray){
            this.bookSource.data = this.shareDataService.homeChurch.itemArray;//.filter(act=>{ return act.state=="done" });
        }
    }

    ngAfterViewInit() {
        this.bookSource.sort = this.sort;
        this.bookSource.paginator = this.paginator;
    }

    doFilter(filterValue: string) {
        this.bookSource.filter = filterValue.trim().toLowerCase();
    }
    
    onSelectBook(bookid: string) {
        // this.shareDataService.selectActivity(activityid);
    }

    onStop() {
        const dialogRef = this.dialog.open(StopActivityComponent, {
            data: {
                progress: 80
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.shareDataService.leftActivity(80);
            }
        });
    }


    values = '';
    onMessageInput() {
        if (this.values){
            this.shareDataService.updateRunningActivityRecords(this.values);
            this.values = '';
        }
    }

    
    bibleSearch(){
        if (this.shareDataService.runningActivity.keywords  &&  this.shareDataService.runningActivity.keywords.length > 0){
            let words = encodeURI(this.shareDataService.runningActivity.keywords);
            return "http://mobile.chinesebibleonline.com/search?key=" + words;
        }
        else {
            return null;
        }
    }


    meetingOn(){
        if (!this.shareDataService.userLogin || !this.shareDataService.userLogin.host){
            return false;
        }
        return this.shareDataService.fetchAMediaOnType("meet"); 
    }


}
