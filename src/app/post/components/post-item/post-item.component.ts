import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent  implements OnInit {
  @Input() item!: PostModel;
  constructor() { }

  ngOnInit() {}

}
