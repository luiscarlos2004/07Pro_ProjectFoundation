import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargaprincipal',
  templateUrl: './cargaprincipal.component.html',
  styleUrls: ['./cargaprincipal.component.css','../../../../fontAwesome/css/all.min.css']
})
export class CargaprincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colocarFichas(){
    let img = document.createElement("img");
    img.setAttribute("img","./perrito1.jpg");
    let cards = document.querySelector('#cards');
    cards?.appendChild(img)
  }

}
