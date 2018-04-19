import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
conteudos : string[] = [
  "conteudo1",
  "conteudo2"
] ;

conteudos1 : string[] = [
  "cont1",
  "cont2",
  "cont3"  
];
  constructor() { }

  mostrarConteudo : boolean = true;

  public esconderConteudo(){
    this.mostrarConteudo=false;
  }

  public mostrarConteudo1(){
    this.mostrarConteudo=true;
  }
  ngOnInit() {
  }

}
