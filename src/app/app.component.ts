import { Component } from '@angular/core';
import {Empleado} from './modules/empleado'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[] = [
    //{id: 1, name: "Camilo", city: "Bogotá"},
    //{id: 2, name: "Deyci", city: "Floridablanca"}
  ];

  selectedEmpleado: Empleado = new Empleado();

  addOrEdit(){
    if(this.selectedEmpleado.id === 0 ){
      this.selectedEmpleado.id = this.empleadoArray.length + 1
      this.empleadoArray.push(this.selectedEmpleado);
      let arrayEmpl: Empleado[]= [];
      if(localStorage.getItem('empleados') === null){
        arrayEmpl.push(this.selectedEmpleado);
        localStorage.setItem('empleados', JSON.stringify(arrayEmpl));
      }else{
        arrayEmpl =JSON.parse(localStorage.getItem('empleados'));
        arrayEmpl.push(this.selectedEmpleado);
        localStorage.setItem('empleados', JSON.stringify(arrayEmpl));
      }
    }
    this.selectedEmpleado = new Empleado();
    
  }
  openEdit(empleado: Empleado){
    this.selectedEmpleado = empleado;
  }

  delete(){
    if(confirm("Esta seguro?")){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectedEmpleado);
      localStorage.setItem('empleados', JSON.stringify(this.empleadoArray));
      this.selectedEmpleado = new Empleado();
    }
  }
  getEmpleado(){
    if(localStorage.getItem('empleados') === null){
      return this.empleadoArray;
    }else{
      this.empleadoArray = JSON.parse(localStorage.getItem('empleados'))
      return this.empleadoArray;
    }
  }
  ngOnInit(): void {
    this.empleadoArray = this.getEmpleado();
  }

}
