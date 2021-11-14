import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from './new-client/new-client.component';
import { MainService } from './main.service';

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
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.get_vehicle().subscribe({
      next: v => console.log('vehicle data: ', v),
      error: e => console.log('error: ', e)
    })
  }

  toggleClass(id) {
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
