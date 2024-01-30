import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen:boolean=false

  toggleSideBar(){
    this.isSidebarOpen=!this.isSidebarOpen
  }
}
