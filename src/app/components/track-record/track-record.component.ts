import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-track-record',
  templateUrl: './track-record.component.html',
  styleUrls: ['./track-record.component.scss']
})
export class TrackRecordComponent implements OnInit {

  employeesData:any =[];

  constructor(private tableData:TableDataService) { }

  ngOnInit(): void {
    this.tableData.getTableData().subscribe((res)=>{
      for(let i=0;i<res.Employees.length;i++){
        this.employeesData.push(res.Employees[i]);
      }
    })
  }

}
