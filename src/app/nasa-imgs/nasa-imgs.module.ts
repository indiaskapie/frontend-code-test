import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaImgsComponent } from './nasa-imgs.component';
import { SingleImgComponent } from './single-img/single-img.component';

@NgModule({
  declarations: [NasaImgsComponent, SingleImgComponent],
  imports: [
    CommonModule
  ],
  exports: [NasaImgsComponent, SingleImgComponent]
})
export class NasaImgsModule { }
