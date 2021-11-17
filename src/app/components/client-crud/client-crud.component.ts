import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../classes/error-matcher';
import { CPFValidator } from '../classes/cpf-validator'
import { AppService } from '../../app.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { UUIDGenerator } from '../classes/uuid-generator';

export interface Client {
  name: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  address: string;
  vehicle: string;
  id: string;
}
@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  crudForm: FormGroup;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  cpf = new FormControl('', [Validators.required, CPFValidator.isValidCpf(), Validators.minLength(11), Validators.maxLength(11)]);
  cellphone = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
  birthdate = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
  address = new FormControl('', [Validators.required, Validators.minLength(3)]);
  vehicle = new FormControl('', [Validators.required, Validators.minLength(3)]);
  id = new FormControl('', [Validators.required, Validators.minLength(36), Validators.maxLength(36)])

  selectedVehicle = 'Vehicle Selector'
  brand = ''

  matcher = new CustomErrorStateMatcher();

  brands = []
  models = {}

  clientList: Client[] = []

  crudType = 'new'

  crudTitle = {
    new: 'NEW CLIENT',
    edit: 'EDIT CLIENT'
  }

  crudSend = {
    new: 'CREATE',
    edit: 'UPDATE'
  }

  @ViewChild('#modelsMenu') trigger: MatMenuTrigger;

  constructor(
    public dialogRef: MatDialogRef<ClientCrudComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: AppService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.crudForm = this.fb.group({
      name: this.name,
      cpf: this.cpf,
      cellphone: this.cellphone,
      birthdate: this.birthdate,
      address: this.address,
      vehicle: this.vehicle,
      id: this.id
    });

    if (this.data.hasOwnProperty('client')) {
      this.name.setValue(this.data['client']['name'])
      this.cpf.setValue(this.data['client']['cpf'])
      this.cellphone.setValue(this.data['client']['cellphone'])
      this.birthdate.setValue(this.data['client']['birthdate'])
      this.address.setValue(this.data['client']['address'])
      this.vehicle.setValue(this.data['client']['vehicle'])
      this.selectedVehicle = this.data['client']['vehicle']
      this.crudType = 'edit'
    } else this.crudType = 'new'

    this.clientList = localStorage.getItem('clientList') ? JSON.parse(localStorage.getItem('clientList')) : []

    this.id.setValue(this.crudType == 'new' ? UUIDGenerator.generateUUID() : this.data['client']['id'])

    this.mainService.get_brands().subscribe({
      next: v => this.brands = v,
      error: e => console.log('error: ', e)
    })
  }

  brandSelected($event, cod, brand) {
    $event.stopPropagation();
    this.brand = brand
    // this.trigger.openMenu()

    this.models = { modelos: [{ nome: 'Loading' }] }
    this.mainService.get_models(cod).subscribe({
      next: v => this.models = v,
      error: e => console.log('error: ', e)
    })
  }

  close() {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  vehicleSelected(model) {
    if (model != 'Loading') {
      this.vehicle.setValue(`${this.brand} ${model}`)
      this.selectedVehicle = `${this.brand} ${model}`
    }
  }

  send() {
    if (this.crudType == 'edit') {
      this.clientList = this.clientList.filter(f => f['id'] != this.data['client']['id'])
    }

    if (this.crudForm.valid) {
      let client = {
        name: this.name.value,
        cpf: this.cpf.value,
        cellphone: this.cellphone.value,
        birthdate: this.birthdate.value,
        address: this.address.value,
        vehicle: this.vehicle.value,
        id: this.id.value
      }

      this.clientList.push(client)
      localStorage.setItem('clientList', JSON.stringify(this.clientList))
      this.close()
    } else {
      throw new Error("Invalid Input");
    }
  }

  deleteClient() {
    if (confirm('Are you sure?')) {
      this.clientList = this.clientList.filter(f => f['id'] != this.data['client']['id'])
      localStorage.setItem('clientList', JSON.stringify(this.clientList))
      this.close()
    }
  }

}
