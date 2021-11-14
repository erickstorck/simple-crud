import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { ClientCrudComponent } from '../client-crud/client-crud.component';
import { AppService } from 'src/app/app.service';
import { ClientListComponent } from '../client-list/client-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  features = [
    {
      route: 'clients',
      name: 'Clients',
      icon: 'home'
    }
  ]

  showFiller = false;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  toggleClass(id) {
    let element = document.querySelector(`#${id}`);
    element.classList.toggle('clicked');
  }

  openClientCrud() {
    let ClientCrud = document.querySelector('#ClientCrud');
    let clientList = document.querySelector('#clientList');
    ClientCrud.classList.toggle('hideRight');
    clientList.classList.toggle('hideLeft');

    const alertModal = this.dialog.open(ClientCrudComponent, {
      disableClose: false,
      data: {},
      panelClass: 'client-crud-container'
    });

    alertModal.afterClosed().subscribe(res => {
      ClientCrud.classList.toggle('hideRight');
      clientList.classList.toggle('hideLeft');
    })
  }

  openClientList() {
    let ClientCrud = document.querySelector('#ClientCrud');
    let clientList = document.querySelector('#clientList');
    ClientCrud.classList.toggle('hideTop');
    clientList.classList.toggle('hideBottom');

    const alertModal = this.dialog.open(ClientListComponent, {
      disableClose: false,
      data: {},
      panelClass: 'client-list-container'
    });

    alertModal.afterClosed().subscribe(res => {
      ClientCrud.classList.toggle('hideTop');
      clientList.classList.toggle('hideBottom');
    })

  }

}
