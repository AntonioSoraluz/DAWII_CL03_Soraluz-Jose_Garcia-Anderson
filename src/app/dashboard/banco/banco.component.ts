import {Component, OnInit} from '@angular/core';
import {Banco} from "./banco";
import {BancoService} from "./banco.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.scss']
})
export class BancoComponent implements OnInit {

  bancos: Banco[] = [];
  displayedColumns: string[] = ['id_banco', 'nombre_banco'];

  constructor(
    private bancoService: BancoService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.bancoService.listarBancos()
      .subscribe((data) => {
        this.bancos = data
      });
  }

  onNavigateToDetail(id: number): void {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
