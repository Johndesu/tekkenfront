import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { InputModule } from 'src/app/shared/ui/input/input.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    InputModule
  ]
})
export class AccountModule { }
