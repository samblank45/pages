import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'at the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Mt. Everest',
      url: 'https://images.unsplash.com/photo-1603787663416-88d33de66699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXQlMjBldmVyZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'New England Patriots',
      url: 'https://images.unsplash.com/photo-1602187930819-3fb5e8a1f57b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9tJTIwYnJhZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Volleyball',
      url: 'https://images.unsplash.com/photo-1593787406536-3676a152d9cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'BBQ',
      url: 'https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmJxfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  updateCurrentNumber(value: number) {
    this.currentPage = value
  }
}
