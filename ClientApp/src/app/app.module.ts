import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataService} from  './data.service'

import  {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'fetch-data', component: FetchDataComponent, pathMatch: 'full'},
      { path: 'Portal', component: BlogComponent, pathMatch: 'full' },
      { path: 'Portal/post/:id', component: BlogComponent, pathMatch: 'full' },
      { path: 'Portal/post', component: PostComponent, pathMatch: 'full' },

      { path: 'counter', component: CounterComponent,
        children: [{
          path: 'fetch-data', component: FetchDataComponent, outlet:'here'
        }]
      },
      { path: 'blog', component: BlogComponent,

        children:[{
            path: '', component: PostComponent,  pathMatch: 'full'

        }]
      },
    ]),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
