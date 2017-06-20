import { InventoryItem } from "./inventory-item";
import { InventoryItemService } from "./inventory-item.service";

export class Room {
    id: number;
    name: string;
    inventoryItemCollection: InventoryItem[];

    private _volume: string = '0';
    public get volume() : string {
        var result: number = 0;
        this.inventoryItemCollection.forEach(item => {
            result += Math.round((item.quantity * (item.height * item.length * item.depth / 1000000)) * 100)/100;
        });
        this._volume = result.toFixed(2);
        return this._volume;

    }

    private _itemQuantity: number = 0
    public get itemQuantity() : number {

        this._itemQuantity = 0;
        this.inventoryItemCollection.forEach(item => {
            this._itemQuantity += item.quantity;
        });
        return this._itemQuantity;
    }

    private _DisplayToResume: boolean = false;
    public get displayToResume() : boolean {
        this._DisplayToResume = this.inventoryItemCollection.some(item => item.quantity > 0);
        return this._DisplayToResume;
    }
    
    private _inventoryForResume: InventoryItem[];
    public get inventoryForResume() : InventoryItem[] {
        this._inventoryForResume =  this.inventoryItemCollection.filter(item => item.quantity > 0);
        return this._inventoryForResume;
    }

    
    constructor(id: number, name: string, inventoryItems: InventoryItem[]) {
        this.id = id;
        this.name = name;
        this.inventoryItemCollection = inventoryItems;
    }
}