import { Component, Input } from '@angular/core';
import { InventoryItem } from './model/inventory-item';

@Component({
    selector: 'app-inventory-item-detail',
    template: `
        <div *ngIf="inventoryItem">
            <h2>Détails de l'objet "{{inventoryItem.name}}"</h2>
                <div><label>id: </label>{{inventoryItem.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="inventoryItem.name" placeholder="name" />
                </div>
        </div>
    `
})

export class InventoryItemDetailComponent {
    @Input() inventoryItem: InventoryItem;
}
