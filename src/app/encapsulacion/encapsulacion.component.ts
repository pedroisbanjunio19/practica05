import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulacion',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './encapsulacion.component.html',
  styleUrls: ['./encapsulacion.component.css']
})
export class EncapsulacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
