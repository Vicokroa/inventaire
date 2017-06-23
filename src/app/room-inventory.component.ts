import { Component, Input } from '@angular/core';
import { InventoryItem } from './model/inventory-item';


@Component({
    selector: 'app-room-inventory',
    templateUrl: 'room-inventory.component.html',
    styleUrls: ['./room-inventory.component.css'],
})

export class RoomInventoryComponent {
    @Input() inventoryItemCollection: InventoryItem[];

    /**
     * Ajouter un item à la collection
     * @param item Item à ajouter à la collection
     */
    addOne(item: InventoryItem): void {
        item.quantity++;
    }

    /**
     * Retirer un item de la collection
     * @param item Item à retirer de la collection
     */
    removeOne(item: InventoryItem): void {
        item.quantity > 0 ? item.quantity-- : item.quantity = 0;
    }
}
