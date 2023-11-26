import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { apiRest } from '../apiRest';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-api-rest-lista',
  templateUrl: './api-rest-lista.component.html',
  styleUrl: './api-rest-lista.component.css'
})
export class ApiRestListaComponent {
  apiRests: apiRest[] = []
  displayedColumns: string[] = ["id", "name", "status", "species", "type", "gender"]

constructor(private apiRestService : ApiRestService, private snackBar: MatSnackBar){

}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiRestService.listarCharacter().subscribe(
      (data) => {this.apiRests = data},
      (error) => {this.snackBar.open('Error al consumir API Rest', 'Ok', {duration: 50000})}
      )
  }
}
