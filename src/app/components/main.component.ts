import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from './new-client/new-client.component';

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
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  toggleClass(id) {
    console.log('clicked: ', id)
    let element = document.querySelector(`#${id}`);
    element.classList.toggle('clicked');
  }

  openNewClient(id) {
    console.log('clicked: ', id)
    let element = document.querySelector(`#${id}`);
    element.classList.toggle('standby');

    const alertModal = this.dialog.open(NewClientComponent, {
      disableClose: false,
      data: {},
      panelClass: 'new-client-container'
    });

    alertModal.afterClosed().subscribe(res => {
      element.classList.toggle('standby');
    })
  }

  openClientList(id) {

  }

}
