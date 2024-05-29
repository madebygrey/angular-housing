import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ]
})
export class LayoutModule { }
