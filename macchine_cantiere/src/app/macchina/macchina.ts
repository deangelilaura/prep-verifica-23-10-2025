import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class Macchina {
  pezzi: string[];
  constructor() {
    this.pezzi = ["viti", "bulloni", "ferro"]
  }
}
