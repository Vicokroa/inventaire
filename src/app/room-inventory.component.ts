import { Component, Input } from '@angular/core';
import { InventoryItem } from "./inventory-item";


@Component({
    selector: 'app-room-inventory',
    templateUrl: 'room-inventory.component.html',
    styleUrls: ['./room-inventory.component.css']
})

export class RoomInventoryComponent {
    @Input() inventoryItemCollection: InventoryItem[];

    addOne(item: InventoryItem): void {
        item.quantity++;
    }


    removeOne(item: InventoryItem): void {
        item.quantity > 0 ? item.quantity-- : item.quantity = 0;
    }
}
