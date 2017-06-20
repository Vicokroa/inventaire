import { Component } from '@angular/core';
import { InventoryItem } from "./inventory-item";
import { Room } from "./room";




var INVENTORYITEMS: InventoryItem[] = [
  { id: 11, name: 'Chaise Longue', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 12, name: 'Chaise de bureau', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 13, name: 'Chaise de cuisine', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 14, name: 'Chaise simple', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 15, name: 'Bureau', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 16, name: 'Table basse', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 17, name: 'Casiers ou tout plein d\'autres trucs', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 18, name: 'Lit simple', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 19, name: 'Lit double', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 20, name: 'Lave-linge', quantity: 0, length: 40, height: 40, depth: 60 },
  { id: 21, name: 'Meulbe bas', quantity: 0, length: 63, height: 52, depth: 31 }
];

function copy(inventory:InventoryItem[]): InventoryItem[] {
  var result = []
  inventory.forEach(item =>
    result.push(new InventoryItem(item.id, item.name, item.quantity, item.length, item.height, item.depth))
  );

  return result;
}

var ROOMS: Room[] = [
  new Room(1, 'Salon', copy(INVENTORYITEMS)),
  new Room(2,  'Cuisine', copy(INVENTORYITEMS)),
  new Room(3, 'Bureau', copy(INVENTORYITEMS)),
  new Room(4, 'Chambre', copy(INVENTORYITEMS))
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Inventaire';
  inventoryItems = INVENTORYITEMS;
  inventoryRooms = [];
  showRoomList = false;
  selectedItem: InventoryItem;
  selectedRoom: Room;
  rooms = ROOMS;
  query: string;

  /**
  * A la sélection d'un ...
  * @param item InventoryItem
  */
  onSelect(item: InventoryItem): void {
    this.selectedItem = item;
  }

  /**
  * Afficher ou non l'inventaire de la pièce
  * @param room Room
  */
  onRoomChoice(room: Room): void {
    this.selectedRoom != room || !this.selectedRoom ? this.selectedRoom = room : this.selectedRoom = null;
    this.query = '';
  }

  /**
  * Click sur le bouton liste des pièces => Afficher/Masquer la liste des pièces
  */
  onAddRoomClick(): void {
    this.showRoomList = !this.showRoomList;
  }

  /**
   * Sélectionner une pièce dans la liste des pièces
   * @param room Room
   */
  onRoomSelect(room: Room): void {
    this.inventoryRooms.push(room);
    this.rooms.splice(this.rooms.indexOf(room), 1);
    this.selectedRoom = room;
    this.showRoomList = false;
  }

  /**
   * Retirer une pièce de l'inventaire
   * @param room Room
   */
  onRoomRemove(room: Room): void {
    room.inventoryItemCollection.forEach(item => item.quantity = 0);
    this.rooms.push(room);
    this.inventoryRooms.splice(this.inventoryRooms.indexOf(room), 1);
    this.rooms.sort(function(a: Room, b:Room){ return a.id - b.id});
  }

 
}


