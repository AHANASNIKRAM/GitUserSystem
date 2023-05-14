import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/users.model';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user: User = {} as User;
repos: any[] = [];
followers: any[] = [];
followings: any[] = [];
userName: string = '';
  constructor(private userService: UserService ,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //get username out of the url & set var
    this.route.params.subscribe(params => {
    this.userName = params['username'];
  });

// this.loadDataInSequence();

    const requestArray = [];
    requestArray.push(this.loadUserDetails());
    requestArray.push(this.loadUserRepo());
    requestArray.push(this.loadUserFollowers());

    forkJoin([this.userService.getSingleUser(this.userName), this.userService.getUserRepo(this.userName),this.userService.getUserFollowers(this.userName)])
    .subscribe(res => {
      console.log ('RESULT:', res);
    })
  }

  loadDataInSequence() {
    this.loadUserDetails();
    this.loadUserRepo();
    this.loadUserFollowers();
  }
  loadUserDetails(){
    this.userService.getSingleUser(this.userName).subscribe((res: any) => {
      console.log(res);
      this.user = res;
          });
  }

  loadUserRepo() {
    this.userService.getUserRepo(this.userName).subscribe((res: any) => {
      console.log(res);
      this.repos = res;
    });
  }

  loadUserFollowers() {
    this.userService.getUserFollowers(this.userName).subscribe((res: any) => {
      console.log(res);
      this.followers = res;
    });
  }



}
