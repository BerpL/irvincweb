import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flaginicio: boolean = true;
  flagconocenos: boolean = false;
  flagcampania: boolean = false;
  flagreclamos: boolean = false;
  flagcontacto: boolean = false;
  flagmisionyvision:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id:any) {
    if(id == "inicio"){
      this.flaginicio = true;
      this.flagconocenos = false;
      this.flagcampania = false;
      this.flagreclamos = false;
      this.flagcontacto = false;
      this.flagmisionyvision = false;
    } else if(id == "conocenos"){
      this.flagconocenos = true;
      this.flaginicio = false;
      this.flagcampania = false;
      this.flagreclamos = false;
      this.flagcontacto = false;
      this.flagmisionyvision = false;
    } else if(id == "campania"){
      this.flagcampania = true;
      this.flaginicio = false;
      this.flagconocenos = false;
      this.flagreclamos = false;
      this.flagcontacto = false;
      this.flagmisionyvision = false;
    } else if(id == "reclamos"){
      this.flagreclamos = true;
      this.flaginicio = false;
      this.flagconocenos = false;
      this.flagcampania = false;
      this.flagcontacto = false;
      this.flagmisionyvision = false;
    } else if(id == "contacto"){
      this.flagcontacto = true;
      this.flaginicio = false;
      this.flagconocenos = false;
      this.flagcampania = false;
      this.flagreclamos = false;
      this.flagmisionyvision = false;
    } else if(id == "misionyvision"){
      this.flagmisionyvision = true;
      this.flagcontacto = false;
      this.flaginicio = false;
      this.flagconocenos = false;
      this.flagcampania = false;
      this.flagreclamos = false;
    }
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
}

}
