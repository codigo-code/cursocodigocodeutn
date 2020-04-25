import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../consumoapi.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public nombre: String = 'dante';
  public listaPersona: any;



  // cuando se necesite se va a estar inyectando una instancia de la clase ConsumoApiService
  constructor(private service: ConsumoapiService) { }

  ngOnInit(): void {
    this.service.getAllPersonas().subscribe(data => {
      console.log(data);
      this.listaPersona = data;
    }, err => {
      console.error(err);
    });
  }

}
