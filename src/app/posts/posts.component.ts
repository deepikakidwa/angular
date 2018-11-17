import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { stringify } from 'querystring';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
results:string;
  constructor(private http : Http) { 
  

        http.get('http://192.168.1.5/api/users/read.php')
      .subscribe(response =>{
        
          this.results = response.json();
          });
  
  }

  ngOnInit() {
  }

}
