import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Imagem } from '../models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  imagens: any;
  error: any;
  constructor(private apiService: ApiService) {
    this.pegarImagem();
   }

  ngOnInit(): void {
  }
  pegarImagem() {
    this.apiService.getImg().subscribe(
    (data: Imagem) => {
     this.imagens = data;
     console.log('Dado sendo recebido', data);
    },
    (error: any) => {
      this.error = error;
      console.log('Erro', error);
    }
    );
  }
}
