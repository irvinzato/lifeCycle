import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.css']
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombrePorInput: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Soy ngOnChanges, ocupo el decorador Input para funcionar");
    console.log("parametro que tengo ", changes);
  }

  ngOnInit() {
  }

}
