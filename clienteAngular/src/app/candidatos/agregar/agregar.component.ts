import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public candidato: Candidato;
  constructor() {
    this.candidato = new Candidato(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
   }

  ngOnInit() {
  }

  crearCandidato() {
    // todo
  }

  limpiarCandidato() {
    // todo
  }

}
