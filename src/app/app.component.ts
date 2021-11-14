import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Crud';
  timeout
  constructor() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (e) => {
    if (e.target.classList.contains("on-scrollbar") === false) {
      e.target.classList.add("on-scrollbar");
    }

    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => e.target.classList.remove("on-scrollbar"), 2000)
  }
}
