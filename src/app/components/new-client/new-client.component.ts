import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './error-matcher';
import { CPFValidator } from './cpf-validator'
import { MainService } from '../main.service';

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

  matcher = new CustomErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<NewClientComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    console.log('data: ', this.data)
    this.ngZone.run(() => {
      console.log('trying')
      this.mainService.get_vehicle().subscribe({
        next: v => console.log('vehicle data: ', v),
        error: e => console.log('error: ', e)
      })
    })
  }

  close() {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  send() {

  }

}
