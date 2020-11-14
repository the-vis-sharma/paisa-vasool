import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileSheetComponent } from './profile-sheet/profile-sheet.component';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationSheetComponent } from './notification-sheet/notification-sheet.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { GroupItemComponent } from './group-item/group-item.component';
import { FriendItemComponent } from './friend-item/friend-item.component';
import { SideMenuListItemComponent } from './side-menu-list-item/side-menu-list-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { CategoryAnalysisChartComponent } from './category-analysis-chart/category-analysis-chart.component';
import { SpendAnalysisChartComponent } from './spend-analysis-chart/spend-analysis-chart.component';
import { StatsComponent } from './stats/stats.component';
import { MonthlySpendComponent } from './monthly-spend/monthly-spend.component';
import { DailySpendComponent } from './daily-spend/daily-spend.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SideMenuComponent,
    ProfileSheetComponent,
    NotificationSheetComponent,
    RelativeTimePipe,
    GroupItemComponent,
    FriendItemComponent,
    SideMenuListItemComponent,
    HomeComponent,
    CategoryAnalysisChartComponent,
    SpendAnalysisChartComponent,
    StatsComponent,
    MonthlySpendComponent,
    DailySpendComponent,
    AddExpenseComponent,
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    AvatarModule,
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatGridListModule,
    ScrollingModule
  ],
  providers: [],
  entryComponents: [AddExpenseComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
