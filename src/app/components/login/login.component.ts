import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor (
    private usersService: UsersService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.login(this.userForm.value)
      .then(response => {
        if (response.error) {
          console.log(response.error);
        } else {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/users']);
        }
      }).catch(err => console.log(err));
  }

}
