import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatDialogModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatSortModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//注意這邊有import shared module !!!!!!!!! 
//service 也可以這邊

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
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
    MatDialogModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,    
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
