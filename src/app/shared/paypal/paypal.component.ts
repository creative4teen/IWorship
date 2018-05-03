import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../common/share-data.service';


@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

    constructor(public sharedDataService: ShareDataService) { }

    ngOnInit() {
    }

}
