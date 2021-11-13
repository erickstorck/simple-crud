import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

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
  }

  openSideMenu(toggle = true) {
    console.log('ok')
    if (toggle) this.sidenav.toggle()
    let selected = sessionStorage.getItem('selected')
    let elements = document.getElementsByClassName('selected')
    for (let index = 0; index < elements.length; index++) {
      elements[index].classList.remove('selected')
    }
    if (selected) document.getElementById(selected).classList.add('selected')
  }

  goToHeaders(route) {
    let elements = document.getElementsByClassName('selected')
    for (let index = 0; index < elements.length; index++) {
      elements[index].classList.remove('selected')
    }
    sessionStorage.removeItem('selected')
    this.router.navigate([route]);
  }

  goTo(route) {
    sessionStorage.setItem('selected', route == 'ks' ? 'ks/home' : route)
    this.openSideMenu(route == 'ks' ? false : true)
    this.router.navigate([route]);
  }

  logout() {
    // this.authService.doLogout();
  }

}
