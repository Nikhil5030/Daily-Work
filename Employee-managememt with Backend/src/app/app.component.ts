import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management';
  count=105;

  /*getCount(counter): void{
    this.count=counter;
  }*/

  /*ngOnInit(): void {
    this.getFromChild(this.count);
  }*/

  getFromChild(event): void {
    this.count=event;
  }
}
