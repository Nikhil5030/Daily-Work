import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phoneNo: new FormControl(null, Validators.required)
     
  });
  }

  onSubmit(): void{
    // this.countFromChild.emit(this.countFromParent+5);
    this.userService.insertUser(this.signupForm.value).subscribe(data => {
      console.log("User data added successfully!")
      this.router.navigate(['add-user']);
    })
     console.log(this.signupForm);
   }

}
