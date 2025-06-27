import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ciclo-de-vida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date();
  timer: any;

  @Input() texto = "";

  ngOnInit(): void {
    console.log("O evento onInit disparou");
    this.timer = setInterval(() => {
      this.horario = new Date();
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void { //Limpeza do timer
      clearInterval(this.timer);
  }
}
