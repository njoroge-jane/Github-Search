import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private login:string;
  private client_id = "91135600";
  private client_secret ="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";
  constructor(private http:HttpClient) { 
    this.login = "njoroge_jane";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.login + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.login + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(login:string){
    this.login = login;
  }
}