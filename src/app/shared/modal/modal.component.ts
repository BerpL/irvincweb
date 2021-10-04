import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('formulario') != "enviado") {
      const element = document.getElementById('modal') as HTMLElement;
      element.click();
    }
  }
  sendform() {
    localStorage.setItem('formulario', 'enviado');
  }

}
