import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientModule,
    AdminModule
  ]
})
export class AppModule { }
