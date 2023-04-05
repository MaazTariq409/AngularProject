import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  userId : number = 1;
  userName : string = "Name";
  enableButton :boolean = false;
  description :string = "";
  serverName: string = "";
  serverCreated : boolean = false;
  servers : string[] = ['test server', 'test server 2'];
  

  constructor() { 
    setTimeout(() => {
      this.enableButton = true;
    }, 2000),
    this.userName = Math.random() > 0.5 ? "Maaz Tariq" : ""
  }

  ngOnInit(): void {
  }

  onClickButton()
  {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.description = "Server was created with Name:" + this.serverName
    // document.querySelector(".paragraph").innerHTML = "button was clicked"
  }

  // onUpdateInput(event : Event)
  // {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  getColor()
  {
      return this.userName === "" ? "red" : "green"
  }
}
