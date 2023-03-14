import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest, delay, map, Observable, startWith, Subscription } from 'rxjs';
import { PostModel } from './models/post-model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.page.html',
  styleUrls: ['post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {
  public pageTitle: string = 'Posts';
  public searchFilterText: string = 'search posts by title';
  public header: any = {
    id: 'Id',
    title: 'Title',
    body: 'Body',
  };
  public isDataLoaded = false;
  public posts: PostModel[] = []; 
  public searchFilter = new UntypedFormControl('');

  private searchFilter$ = this.searchFilter.valueChanges.pipe<string>(startWith(''));
  private subscription = new Subscription();
  constructor(private readonly postService: PostsService) {}

  public ngOnInit(): void {
    // intentionallty added delay just to display loader initially
    const subs = combineLatest([this.postService.getPosts().pipe(delay(1000)), this.searchFilter$])
    .pipe(
      map(([posts, searchFilter]) => {
        if (!searchFilter) {
          return posts;
        } else {
          return posts.filter((post: PostModel) => post.title.match(searchFilter))
        }
      })
    ).subscribe(data => {
      this.isDataLoaded = true;
      this.posts = data});
    this.subscription.add(subs);
  }

  public ngOnDestroy(): void {
    this.posts = [];
    if (this.subscription) {
      this.subscription.unsubscribe();
    }    
  }
}
