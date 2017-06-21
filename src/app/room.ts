import { InventoryItem } from './inventory-item';
import { InventoryItemService } from './inventory-item.service';

export class Room {
    id: number;
    name: string;
    inventoryItemCollection: InventoryItem[];

    private _volume = '0';
    public get volume(): string {
        let result = 0;
        this.inventoryItemCollection.forEach(item => {
            result += item.volume;
        });
        this._volume = result.toFixed(2);
        return this._volume;

    }

    private _itemQuantity = 0
    public get itemQuantity(): number {

        this._itemQuantity = 0;
        this.inventoryItemCollection.forEach(item => {
            this._itemQuantity += item.quantity;
        });
        return this._itemQuantity;
    }

    private _DisplayToResume = false;
    public get displayToResume(): boolean {
        this._DisplayToResume = this.inventoryItemCollection.some(item => item.quantity > 0);
        return this._DisplayToResume;
    }

    private _inventoryForResume: InventoryItem[];
    public get inventoryForResume(): InventoryItem[] {
        this._inventoryForResume =  this.inventoryItemCollection.filter(item => item.quantity > 0);
        return this._inventoryForResume;
    }


    constructor(id: number, name: string, inventoryItems: InventoryItem[]) {
        this.id = id;
        this.name = name;
        this.inventoryItemCollection = inventoryItems;
    }
}
