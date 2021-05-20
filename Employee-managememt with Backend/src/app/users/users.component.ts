import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(data => {
      this.users=data;
});
  }

  updateEmployee(user: User): void {
    localStorage.removeItem('id');
    localStorage.setItem('id',user.id.toString());
    this.router.navigate(['update-user']);
}

  deleteUser(user: User): void {
    this.userService.deleteUserById(user.id).subscribe();
    this.users=this.users.filter(u => u !==user);
  }

}
