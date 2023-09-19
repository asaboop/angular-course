import { Component, OnInit, ViewChild,AfterViewInit, inject } from '@angular/core';
import { ServicesService } from './service/services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface tableapi{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TableBasicExample implements OnInit, AfterViewInit {

  goToPage(goto: string):void {

  }
  
  private _getapi=inject(ServicesService)
  displayedColumns: string[] = ['UserId', 'Id', 'Title','Completed'];
  dataSource!: MatTableDataSource<tableapi>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<tableapi>([]);
    this.getdatatable()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getdatatable(){
    this._getapi.getApi().subscribe(data => {
      this.dataSource.data = data;
    })
  }


}
