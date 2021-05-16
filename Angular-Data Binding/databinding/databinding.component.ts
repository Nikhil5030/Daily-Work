import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  //string-iinterpolation
  name = "suresh";
  company ="cts";

  //property-binding
  name1 = "Mahesh";
  company1 ="Wipro";

  serverID: number = 10;  
  serverStatus: string = 'Online';  
  serverName='';

  allowNewServer = false;  
  serverCreationStatus= 'No Server is created.';  

  constructor() {
    setTimeout(() =>{  
      this.allowNewServer = true;  
    }, 5000);  
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created.';
  }

  OnUpdateServerName(event: Event) {  
    this.serverName = (<HTMLInputElement>event.target).value;  
  }  

}
