import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]);
  name = new FormControl('', [Validators.required, Validators.nullValidator]);
  role = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(
    public dialogRef: MatDialogRef<NewClientComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('data: ', this.data)
  }

  close() {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

}
