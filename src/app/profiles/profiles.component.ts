import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  login:string='';

constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.login);
  this.profileService.profileInfo().subscribe(profile => {
    this.profile = profile;
  });

  this.profileService.profileRepos().subscribe(repos => {
    this.repos = repos;
  });
}
getProfile(){
  this.profileService.updateProfile(this.login);
  this.profileService.profileInfo().subscribe(profile => {
    this.profile = profile;
  });

  this.profileService.profileRepos().subscribe(repos => {
    this.repos = repos;
  })
}
  ngOnInit() {
    
    this.profileService.updateProfile('njoroge_jane');
    this.profileService.profileInfo().subscribe(profile => this.profile = profile);
    this.profileService.profileRepos().subscribe(repos =>  this.repos = repos);
  }
}