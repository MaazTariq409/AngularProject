import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';

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
  serverName: string;
  serverCreated : boolean = false;
  servers : string[] = ['test server', 'test server 2'];
  @Output() ServerCreatedOnClick = new EventEmitter<{ServerNameInApp:string}>();

  @Input() Element : {type : string, content : string};
  @Input() element: {type: string, name: string, content: string};

  @ViewChild("serverInput", {static:true}) ServerNameInput

  constructor() { 
    setTimeout(() => {
      this.enableButton = true;
    }, 2000),
    this.userName = Math.random() > 0.5 ? "Maaz Tariq" : ""
  }

  ngOnInit(): void {
  }

  onClickButton(serverName : HTMLInputElement)
  {
    console.log()
    this.ServerCreatedOnClick.emit({ServerNameInApp : serverName.value})
    this.serverCreated = true
    this.servers.push(serverName.value)
    this.description = "Server was created with Name:" + this.ServerNameInput.nativeElement.value
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
