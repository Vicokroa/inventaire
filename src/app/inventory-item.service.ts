import { Injectable } from '@angular/core';

import { InventoryItem } from './inventory-item';

@Injectable()
export class InventoryItemService {

    /**
     * Calcul du volume d'une collection d'item
     * @param  {InventoryItem[]} items Collection d'item d'entrée dont le Volume doit être retourné
     * @return {number}                Retroune le volume total de la collection
     */
    getVolume(items: InventoryItem[]): number {
        let result = 0;
        items.forEach(item => result += item.volume);
        return result;
    }
}
