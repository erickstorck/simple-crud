import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientCrudComponent } from '../client-crud/client-crud.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients = []
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clients = localStorage.getItem('clientList') ? JSON.parse(localStorage.getItem('clientList')) : []
  }

  clientSelected(id) {

    const alertModal = this.dialog.open(ClientCrudComponent, {
      disableClose: false,
      data: {
        client: this.clients.find(f => f['id'] == id)
      },
      panelClass: 'client-crud-container'
    });

    alertModal.afterClosed().subscribe(res => {
      this.clients = localStorage.getItem('clientList') ? JSON.parse(localStorage.getItem('clientList')) : []
    })
  }

}
