import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stalicla explorer';

  private tokenSubscription$: Subscription;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    // clear the localStorage
    // TODO: always logout first? or check localStorage
    // this.authService.logout();
    // always needs to login
  }

  ngOnDestroy(): void {
    this.tokenSubscription$.unsubscribe();
    
  }
}
