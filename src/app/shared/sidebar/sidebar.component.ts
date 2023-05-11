import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems?: any[];

  constructor(private sideBarService: SidebarService,
    private router: Router) {
      this.menuItems = this.sideBarService.menu;
     }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
