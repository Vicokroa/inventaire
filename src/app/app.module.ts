import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InventoryItemDetailComponent } from './inventoty-item-detail.component';
import { RoomInventoryComponent } from './room-inventory.component';
import { FilterItemPipe } from './filter-item.pipe';

import { InventoryItemService } from './inventory-item.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryItemDetailComponent,
    RoomInventoryComponent,
    FilterItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [InventoryItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private inventoryItemService: InventoryItemService) {}
 }
