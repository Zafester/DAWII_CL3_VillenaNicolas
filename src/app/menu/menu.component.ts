import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToAlmacenPage(): void{
    this.router.navigate(['almacen'], {relativeTo: this.route});
  }
  onNavigateToObreroPage(): void{
    this.router.navigate(['obrero'], {relativeTo: this.route});
  }
  onNavigateToApiRestPage(): void{
    this.router.navigate(['apiRest'], {relativeTo: this.route});
  }
}
