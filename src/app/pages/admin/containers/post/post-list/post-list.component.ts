import {Component, OnInit} from '@angular/core';
import {Post} from "@models/post.model";



@Component({
  selector: 'admin-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []

  constructor(

  ) {
  }

  ngOnInit() {
    this.getPostList()
  }

  getPostList() {
    // this.rest.getAdminPostList().subscribe(res => {
    //   this.posts = res
    // })
  }

  add() {

  }

}
