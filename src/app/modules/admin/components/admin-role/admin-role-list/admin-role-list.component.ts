import { Component } from '@angular/core';
import { RoleService } from '../../../services/admin-role/role.service';
import { Role } from '../../../models/role/role.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-role-list',
  templateUrl: './admin-role-list.component.html',
  styleUrls: ['./admin-role-list.component.css']
})
export class AdminRoleListComponent {
  roles$?: Observable<Role[]>;

  constructor(private roleService: RoleService){  
  }

  ngOnInit(): void{
    this.roles$ = this.roleService.getAllCategories();
  }
}
