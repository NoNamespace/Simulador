import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  username = 'RCG123';
  password = 'RCG123';
  user = '';
  pass = '';

  constructor(private router: Router, private dataService: DataService) {
    if (this.dataService.isLogged === true) {
      this.router.navigateByUrl('/inicio');
    }
  }

  ngOnInit() {
  }

  tryLogin() {
    if (this.user === this.username && this.pass === this.password) {
      this.dataService.isLogged = true;
      this.router.navigateByUrl('/inicio');
    } else {
      alert('Username or Password incorrect');
    }
  }

}
