import { Component } from '@angular/core';

import { InventoryItem } from './model/inventory-item';
import { Room } from './model/room';




const INVENTORYITEMS: InventoryItem[] = [
  new InventoryItem(11, 'Chaise Longue', 0,  40,  40,  60 ),
  new InventoryItem(12, 'Chaise de bureau', 0,  40,  40,  60 ),
  new InventoryItem(13, 'Chaise de cuisine', 0,  40,  40,  60 ),
  new InventoryItem(14, 'Chaise simple', 0,  40,  40,  60 ),
  new InventoryItem(15, 'Bureau', 0,  40,  40,  60 ),
  new InventoryItem(16, 'Table basse', 0,  40,  40,  60 ),
  new InventoryItem(17, 'Casiers ou tout plein d\'autres trucs', 0,  40,  40,  60 ),
  new InventoryItem(18, 'Lit simple', 0,  40,  40,  60 ),
  new InventoryItem(19, 'Lit double', 0,  40,  40,  60 ),
  new InventoryItem(20, 'Lave-linge', 0,  40,  40,  60 ),
  new InventoryItem(21, 'Meulbe bas', 0,  63,  52,  31 )
];

/**
 * Fonction de copy d'un collection d'item
 * @param inventory {InventoryItem[]} Collection d'items à copier
 */
function copy(inventory: InventoryItem[]): InventoryItem[] {
  const result = []
  inventory.forEach(item =>
    result.push(new InventoryItem(item.id, item.name, item.quantity, item.length, item.height, item.depth))
  );

  return result;
}

const ROOMS: Room[] = [
  new Room(1, 'Salon', copy(INVENTORYITEMS)),
  new Room(2,  'Cuisine', copy(INVENTORYITEMS)),
  new Room(3, 'Bureau', copy(INVENTORYITEMS)),
  new Room(4, 'Chambre', copy(INVENTORYITEMS))
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
    this.selectedRoom !== room || !this.selectedRoom ? this.selectedRoom = room : this.selectedRoom = null;
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
    this.rooms.sort(function(a: Room, b: Room){ return a.id - b.id});
  }


}


