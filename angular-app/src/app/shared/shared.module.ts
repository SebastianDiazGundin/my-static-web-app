import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from './list-header.component';
import { CardContentComponent } from './card-content.component';

const components = [CardContentComponent, ListHeaderComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class SharedModule {}
