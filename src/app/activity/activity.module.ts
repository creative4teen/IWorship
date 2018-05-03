import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActivityComponent } from './activity.component';
import { CurrentActivityComponent } from './current-activity/current-activity.component';
import { StartActivityComponent } from './start-activity/start-activity.component';
import { PastActivityComponent } from './past-activity/past-activity.component';
import { StopActivityComponent } from './current-activity/stop-activity.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ItemTableComponent } from './item-table/item-table.component';

@NgModule({
    declarations: [
        ActivityComponent,
        CurrentActivityComponent,
        StartActivityComponent,
        PastActivityComponent,
        StopActivityComponent,
        ItemTableComponent
    ],
    imports: [
        SharedModule,
        ActivityRoutingModule
    ],
    entryComponents: [StopActivityComponent]
})
export class ActivityModule {}
