import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Role } from '../../models/role/role.model';
import { UpdateRoleRequest } from '../../models/role/role-edit-request.model';
import { AddRoleRequest } from '../../models/role/role-add-request.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  addRole(model: AddRoleRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/role`, model);
  }

  getAllCategories(): Observable<Role[]>{
    return this.http.get<Role[]>(`${environment.apiBaseUrl}/api/role`);
  }

  getRoleById(id: string): Observable<Role>{
    return this.http.get<Role>(`${environment.apiBaseUrl}/api/role/${id}`);
  }

  updateRole(id:string, UpdateRoleRequest:UpdateRoleRequest): Observable<Role>{
    return this.http.put<Role>(`${environment.apiBaseUrl}/api/role/${id}`, UpdateRoleRequest);
  }

  deleteRole(id:string){
    return this.http.delete<Role>(`${environment.apiBaseUrl}/api/role/${id}`);
  }
}
