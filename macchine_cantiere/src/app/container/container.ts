import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  macchine: string[];
  constructor() {
    this.macchine = ["escavatore", "terna", "pala", "minipala", "dumper", "bulldozer", "rullo compattatore", "motolivellatrice", "finitrice", "betoniera"]
  }
}
