import {Component, OnInit, Input} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';

import { Subscription, Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { ChurchActivity } from '../../common/church-activity.model';

import { ShareDataService } from '../../common/share-data.service';


@Component({
	selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
    @Input() activityGroup: string = "";
    @Input() activityState: string = "";
    activityObservable: Observable<ChurchActivity[]>;
    
    slideInterval = 3500;
    images: Array<string>;

    constructor(private _http: HttpClient, 
                private sharedDataService: ShareDataService,
                public sanitizer: DomSanitizer) {}

    ngOnInit() {
        // this._http.get('https://picsum.photos/list')
        //     .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        //     .subscribe(images => this.images = images);
    }

    onSlideChanged(){
    }

    fetchPath(file: string){
        file = file.toLowerCase().trim();
        if (file.startsWith("http://")){
            return file;
        }
        else {
            return "http://watch.churchserve.org/uploads/"+file; 
        }
    }
    
    // private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    //     return [1, 2, 3].map(() => {
    //       const randomId = images[Math.floor(Math.random() * images.length)].id;
    //       return `https://picsum.photos/800/450?image=${randomId}`;
    //     });
    // }

    fetchPromotionsObservable(){
        return this.sharedDataService.fetchPromotionsObservable(this.activityGroup, this.activityState);
    }
    
    
}
