import { Component } from '@angular/core';
import {Empleado} from './modules/empleado'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[] = [
    {id: 1, name: "Camilo", city: "Bogotá"},
    {id: 2, name: "Deyci", city: "Floridablanca"}
  ];
  selectedEmpleado: Empleado = new Empleado();
  addOrEdit(){
    if(this.selectedEmpleado.id === 0 ){
      this.selectedEmpleado.id = this.empleadoArray.length + 1
      this.empleadoArray.push(this.selectedEmpleado);
    }
    this.selectedEmpleado = new Empleado();
  }
  openEdit(empleado: Empleado){
    this.selectedEmpleado = empleado;
  }

  delete(){
    if(confirm("Esta seguro?")){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectedEmpleado);
      this.selectedEmpleado = new Empleado();
    }
  }

}
