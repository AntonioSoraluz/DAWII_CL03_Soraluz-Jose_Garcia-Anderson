import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private route: ActivatedRoute, 
    private router: Router){
    
  }
  irPaginaPromedio(): void{
    this.router.navigate(['promedio'], {relativeTo: this.route})
  }
  irPaginaBanco(): void{
    this.router.navigate(['banco'], {relativeTo: this.route})
  }
}
