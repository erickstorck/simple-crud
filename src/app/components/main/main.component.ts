import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from '../new-client/new-client.component';
import { AppService } from 'src/app/app.service';

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

  openNewClient() {
    let newClient = document.querySelector('#newClient');
    let clientList = document.querySelector('#clientList');
    newClient.classList.toggle('hideRight');
    clientList.classList.toggle('hideLeft');

    const alertModal = this.dialog.open(NewClientComponent, {
      disableClose: false,
      data: {},
      panelClass: 'new-client-container'
    });

    alertModal.afterClosed().subscribe(res => {
      newClient.classList.toggle('hideRight');
      clientList.classList.toggle('hideLeft');
    })
  }

  openClientList(id) {
    let newClient = document.querySelector('#newClient');
    let clientList = document.querySelector('#clientList');
    newClient.classList.toggle('hideTop');
    clientList.classList.toggle('hideBottom');
  }

}
