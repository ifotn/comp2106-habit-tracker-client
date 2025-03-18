import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit() {
    // call logout on API to remove cookie w/jwt, redirect to home
    this.authService.logout().subscribe(response => {
      // clear global username var
      this.authService.clearUsername();

      // redirect home
      this.router.navigate(['/']);
    })
  }
}
