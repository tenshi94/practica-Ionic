import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  private name: string;
  private boton: string;
  constructor() {
    this.name = 'Angel';
    this.boton = 'Apple';
  }

  ngOnInit() {
  }

}
