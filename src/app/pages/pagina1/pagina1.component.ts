import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                        AfterViewInit, AfterViewChecked, OnDestroy {

  nombre:string = "Irving";
  segundos:number = 0;
  timerSubscription: Subscription;
                      
  constructor() { 
    console.log("Soy el contructor");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Soy ngOnChanges');
  }
  
  ngDoCheck(): void {
    console.log('Soy ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('Soy ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('Soy ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('Soy ngAfterViewInit');
  }
  
  ngAfterViewChecked(): void {
    console.log('Soy ngAfterViewChecked');
  }
  
  ngOnDestroy(): void {
    console.log('Soy ngOnDestroy');
    this.timerSubscription.unsubscribe();  //Aqui es cuando le digo que pare ese Observable al destruir el componente
    console.log("Limpieza de Observable");
  }

  ngOnInit() {
    console.log("Soy ngOnInit");
    this.timerSubscription = interval(2000).subscribe( i => { //Cuando es un Observable infinito, tenemos que decirle cuando para, si no siempre seguira ejetucando
      console.log("Valor de mi suscripcion en interval ", i);   //No se ve claro en el HTML pero si en la consola
      this.segundos = i;
    });
  }

  guardar(){

  }

}
