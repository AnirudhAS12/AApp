import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreatedStatus = 'No Server has been created yet!';
  serverName='';
  serverCreated = false;
  servers =['TestServer1', 'TestServer2'];
  constructor() {
    setTimeout(()=>{this.allowNewServer =true },2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus= 'Server has been created successfully and the Server name is '+this.serverName;
  }
  onInputServerName(event : Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
