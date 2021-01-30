import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  displayedColumns = ['id', 'Name', 'email', 'address','phone'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchKey: string;

  constructor(private apiAservice: ApiService) { }

  ngOnInit() {
    // this.fetchData()
  }

  fetchData() {
    // this.apiAservice.getEmployeeList().subscribe(res => {
    //   let result: any = res
    //   this.dataSource = new MatTableDataSource(result);
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // })
  }

  onSearchClear(){
    this.searchKey ="";
    this.applyFliter();
  } 

  applyFliter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
