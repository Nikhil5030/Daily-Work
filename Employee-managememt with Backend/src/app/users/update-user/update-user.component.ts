import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {

    this.updateForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
  });

  const id=localStorage.getItem('id');
  if (+id > 0) {
       this.userService.getUserById(+id).subscribe(data => {
            this.updateForm.patchValue(data);
       });
  }

  }

  onSubmit(): void {

    this.userService.updateUser(this.updateForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['update-user']);
},
error => {
      alert(error);
});

  }

}
