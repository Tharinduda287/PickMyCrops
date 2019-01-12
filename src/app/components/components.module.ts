import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmationComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  entryComponents: [
    ConfirmationComponent
  ]
})
export class ComponentsModule { }
