import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private name: string;
  private boton: string;
  constructor() {
    this.name = 'Angel';
    this.boton = 'Android';
  }

  ngOnInit() {
  }

}
