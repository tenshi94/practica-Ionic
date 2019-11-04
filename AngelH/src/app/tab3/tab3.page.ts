import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  private name: string;
  private boton: string;
  constructor() {
    this.name = 'Angel';
    this.boton = 'Facebook';
  }

  ngOnInit() {
  }

}
