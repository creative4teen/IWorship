import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UIService } from '../../shared/ui.service';
import { ShareDataService } from '../../common/share-data.service';

import { Item } from '../../common/item.model';

import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Directive, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})

@Directive({
      selector: '[type]',
      exportAs: 'type'
})

export class ItemTableComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() title: string = "";
    @Input() type: string = "";

    displayedColumns = ['name', 'description', 'icon', 'userid', 'gotobutton', 'addbutton', 'removebutton'];
    dataSource = new MatTableDataSource<Item>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private sharedDataService: ShareDataService) {}

    ngOnInit() {
        if (this.sharedDataService.homeChurch.itemArray){
            this.dataSource.data = this.sharedDataService.homeChurch.itemArray.filter(itm=>{ return itm.type==this.type });
        }
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        if (this.sharedDataService.homeChurch.itemArray){
            this.dataSource.data = this.sharedDataService.homeChurch.itemArray.filter(itm=>{ return itm.type==this.type });
        }
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onSelectItem(itemdid: string) {
        // this.sharedDataService.selectActivity(activityid);
    }
    
    ngOnDestroy() {
    }

    
}

