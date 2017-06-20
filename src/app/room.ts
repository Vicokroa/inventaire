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
        return result.toFixed(2);

    }


    
    private _itemQuantity: number = 0
    
    public get itemQuantity() : number {
        var result: number = 0;
        this.inventoryItemCollection.forEach(item => {
            result += item.quantity;
        });
        return result;
    }

    private _DisplayToResume: boolean = false;
    
    public get displayToResume() : boolean {
        return this.inventoryItemCollection.some(item => item.quantity > 0);
    }
    
    private _inventoryForResume: InventoryItem[];
    
    public get inventoryForResume() : InventoryItem[] {
        return this.inventoryItemCollection.filter(item => item.quantity > 0);
    }
    
    
    


    constructor(id: number, name: string, inventoryItems: InventoryItem[]) {
        this.id = id;
        this.name = name;
        this.inventoryItemCollection = inventoryItems;
    }
}