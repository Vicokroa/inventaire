export class InventoryItem {
  id: number;
  name: string;
  quantity: number;
  length: number;
  height: number;
  depth: number;


  constructor(id, name, quantity, length, height, depth) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.length = length;
    this.height = height;
    this.depth = depth;
  }
}
