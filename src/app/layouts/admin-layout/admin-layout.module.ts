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
import { RatingModule,ModalModule  } from 'ngx-bootstrap';
import {AdvertisementComponent} from '../../advertisement/advertisement.component';
import {UserHistoryComponent}from '../../user-history/user-history.component';
import {NewAdComponent}from '../../new-ad/new-ad.component';
import { LoginComponent } from '../../login/login.component';
import { ViewAdComponent } from '../../view-ad/view-ad.component';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';
import { CategoryComponent } from '../../admin-settings/category/category.component';

import { 
  CarouselModule,
  AccordionModule 
} from 'ngx-bootstrap';
import {
  MatGridListModule,
  MatChipsModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule 
} from '@angular/material';

import { NewsComponent } from 'app/news/news.component';
import { QuestionComponent } from 'app/question/question.component';
import { QuillModule } from 'ngx-quill';
import { AskQuestionComponent } from 'app/question/ask-question/ask-question.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AdminSettingsComponent } from 'app/admin-settings/admin-settings.component';
import { AddNewCategoryComponent, TestComponent } from 'app/admin-settings/category/category.component';
import {AgmCoreModule} from '@agm/core';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AdvertisementByCategoryComponent } from 'app/dashboard/advertisement-by-category/advertisement-by-category.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    RatingModule.forRoot(),
    MatInputModule,
    MatTooltipModule,
    MatGridListModule,
    CarouselModule.forRoot(),
    MatChipsModule,
    QuillModule,
    ModalModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    AccordionModule.forRoot(),
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    Ng2ImgMaxModule
  ],
  declarations: [
    DashboardComponent,
    NewsComponent,
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
    ViewAdComponent,
    QuestionComponent,
    AskQuestionComponent,
    AdminSettingsComponent,
    AddNewCategoryComponent,
    CategoryComponent,
    TestComponent,
    AdvertisementByCategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  entryComponents: [
    AddNewCategoryComponent,
    TestComponent
  ]
})

export class AdminLayoutModule {}
