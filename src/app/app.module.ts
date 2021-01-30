import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { UserComponent } from './component/user/user.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { UserListComponent } from './component/chat-room/user-list/user-list.component';
import { UserItemComponent } from './component/chat-room/user-list/user-item/user-item.component';
//這邊的DefalutModule 就包括 所有的module!

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    ChatRoomComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
