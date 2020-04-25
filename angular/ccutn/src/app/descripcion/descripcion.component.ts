import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../consumoapi.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {

  public idPersona: string;
  public objPersona: any;
  constructor(private service: ConsumoapiService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.service.getPersonaById(this.idPersona).subscribe(item => {
      this.objPersona = item;
    }, err => {
      console.error('hubo un error vea la descripcion!');
      console.error(err);
    })

  }
}
