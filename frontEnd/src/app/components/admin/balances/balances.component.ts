import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalancesComponent implements OnInit {

  constructor(public servicio:ServiceService) { }

  ngOnInit(): void {
    this.mostrarBalance()
  }
  mostrarBalance(){
    this.servicio.mostrarbalance().subscribe({
      next:(res)=>{this.servicio.balan = res,console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }
}
