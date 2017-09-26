import { Component, OnInit } from '@angular/core';
import { Candidatoevaluacion } from '../candidatoevaluacion';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public candidatoevaluacion: Candidatoevaluacion;

  constructor() {
    this.candidatoevaluacion = new Candidatoevaluacion(' ', ' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }

  crearCandidatoEvaluacion() {
    // todo
  }

  limpiarCandidatoEvaluacion() {
    // todo
  }

}
