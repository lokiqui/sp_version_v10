import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AvionPage } from './avion.page';

import { AvionPageRoutingModule } from './avion-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvionPageRoutingModule
  ],
  declarations: [AvionPage]
})
export class AvionPageModule {}
