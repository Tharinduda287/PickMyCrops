import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RatingModule } from 'ngx-bootstrap';
import {AdvertisementComponent} from '../../advertisement/advertisement.component';
import {UserHistoryComponent}from '../../user-history/user-history.component';
import {NewAdComponent}from '../../new-ad/new-ad.component';
import { LoginComponent } from '../../login/login.component';
import { ViewAdComponent } from '../../view-ad/view-ad.component';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarouselModule } from 'ngx-bootstrap';
import { MatChipsModule } from '@angular/material';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    RatingModule.forRoot(),
    MatInputModule,
    MatTooltipModule,
    MatGridListModule,
    CarouselModule.forRoot(),
    MatChipsModule,
   
   
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AdvertisementComponent,
    UserHistoryComponent,
    NewAdComponent,
    LoginComponent,SignInComponent,SignUpComponent,
    ViewAdComponent

  ]
})

export class AdminLayoutModule {}
