import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                        AfterViewInit, AfterViewChecked, OnDestroy {

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
  }

  ngOnInit() {
    console.log("Soy ngOnInit");
  }

}
