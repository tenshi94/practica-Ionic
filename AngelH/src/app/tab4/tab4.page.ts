import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  private name: string;
  private boton: string;
  constructor() {
    this.name = 'Angel';
    this.boton = 'PlayStation';
  }

  ngOnInit() {
  }

}
