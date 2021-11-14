import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './error-matcher';
import { CPFValidator } from './cpf-validator'
import { AppService } from '../../app.service';
import { MatMenuTrigger } from '@angular/material/menu';

export interface Client {
  name: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  address: string;
  vehicle: string;
}
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  name = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required, CPFValidator.isValidCpf()]);
  cellphone = new FormControl('', [Validators.required]);
  birthdate = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  vehicle = new FormControl('', [Validators.required]);

  selectedVehicle = 'Vehicle Selector'
  brand = ''

  matcher = new CustomErrorStateMatcher();

  brands = []
  models = {}

  clientList: Client[] = []

  @ViewChild('#modelsMenu') trigger: MatMenuTrigger;

  constructor(
    public dialogRef: MatDialogRef<NewClientComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: AppService
  ) { }

  ngOnInit(): void {
    this.clientList = localStorage.getItem('clientList') ? JSON.parse(localStorage.getItem('clientList')) : []
    console.log('clientList: ', this.clientList)
    this.mainService.get_brands().subscribe({
      next: v => this.brands = v,
      error: e => console.log('error: ', e),
      complete: () => console.log('brands: ', this.brands)
    })
  }

  brandSelected($event, cod, brand) {
    $event.stopPropagation();
    this.brand = brand
    // this.trigger.openMenu()

    this.models = { modelos: [{ nome: 'Loading' }] }
    this.mainService.get_models(cod).subscribe({
      next: v => this.models = v,
      error: e => console.log('error: ', e),
      complete: () => console.log('models: ', this.models)
    })
  }

  close() {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  vehicleSelected(model) {
    this.vehicle.setValue(`${this.brand} ${model}`)
    this.selectedVehicle = `${this.brand} ${model}`
  }

  send() {
    let client = {
      name: this.name.value,
      cpf: this.cpf.value,
      cellphone: this.cellphone.value,
      birthdate: this.birthdate.value,
      address: this.address.value,
      vehicle: this.vehicle.value
    }
    this.clientList.push(client)
    localStorage.setItem('clientList', JSON.stringify(this.clientList))
    this.close()
  }

}
