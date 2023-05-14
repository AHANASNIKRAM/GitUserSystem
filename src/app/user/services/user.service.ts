import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Get all users
  getAllUsers() {
    return this.http.get(`${this.apiURL}/users?/per_page=10`);
  }

  // Get single user
  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}`);
  }

  //Get Search result
  searchUser(searchText: string) {
    return this.http.get(
      `${this.apiURL}/search/users?q=${searchText}&per_page=10`
    );
  }

  //Get Search test result
  searchTestUser(searchText: string) {
    return this.http.get(`./../../../assets/mock/data/search.json`);
  }

  // Get all users
  getUserRepo(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}/repos`);
  }

  // Get all followers
  getUserFollowers(username: string) {
    return this.http.get(
      `${this.apiURL}/users/${username}/followers?per_page=10`
    );
  }
  // Get all followers
  getUserFollowersBySearch(username: string, searchText: string) {
    return this.http.get(
      `${this.apiURL}/users/${username}/followers?q=${searchText}&per_page=10`
    );
  }
}
