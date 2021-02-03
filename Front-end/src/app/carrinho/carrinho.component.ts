import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../Model/Produto';
import { AlertService } from '../service/alert.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto()
  qtd: number = 0

  constructor(
    private alert: AlertService, 
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService

    ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alert.showAlertInfo(
        'Você precisa estar logado para realizar essa compra!'
      );
      this.router.navigate(['/entrar']);
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

  menos() {
    this.qtd = this.qtd - 1
  }

  mais(){
    this.qtd = this.qtd + 1
  }

  comprar(){
    this.alert.showAlertSuccess('Você comprou ' + this.qtd + ' unidades de ' + this.produto.nome)
    this.router.navigate(['/cardapio'])
  }

}
