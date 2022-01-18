import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private login:string;
  private client_id = "dacb8e18dcfe7a47deca";
  private client_secret ="9fcb9ab18dd59a8263ae8bbb50feae7dc99ec5af";
  constructor(private http:HttpClient) { 
    this.login = "njoroge_jane";
  }
  profileInfo(){
    return this.http.get("https://api.github.com/users/" + this.login + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  profileRepos(){
    return this.http.get("https://api.github.com/users/" + this.login + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(login:string){
    this.login = login;
  }
}