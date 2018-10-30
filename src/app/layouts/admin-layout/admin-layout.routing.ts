import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NewAdComponent } from '../../new-ad/new-ad.component';
import { LoginComponent } from '../../login/login.component';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { ViewAdComponent } from '../../view-ad/view-ad.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { NewsComponent } from 'app/news/news.component';
import { QuestionComponent } from 'app/question/question.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'news',      component: NewsComponent },
    { path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthGuard] },
    { path: 'table-list',     component: TableListComponent },
    { path: 'viewAd',     component: ViewAdComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent,canActivate:[AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'postad',        component: NewAdComponent,canActivate:[AuthGuard] },
    { 
        path: 'login',        component: LoginComponent,
        children:[{path:'',component: SignInComponent }]
    },
    { 
        path: 'signup',        component: LoginComponent,
        children:[{path:'',component: SignUpComponent }]
    },
    { path: 'news/:id',      component: QuestionComponent }

];
