import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostPage } from './post.page';

import { postPageRoutingModule as PostPageRoutingModule } from './post-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { PostItemComponent } from './components/post-item/post-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostPageRoutingModule,
    HttpClientModule,
  ],
  providers: [PostsService, HttpClient],
  declarations: [PostPage, PostItemComponent]
})
export class PostPageModule {}
