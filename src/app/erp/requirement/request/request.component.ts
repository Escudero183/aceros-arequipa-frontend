import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  listRequests: any = [];

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService
  ) {}
  async ngOnInit(): Promise<void> {
    await this.getRequests();
  }

  getRequests() {
    this.apiService.getRequests({
      status: '',
      query: ''
    }).subscribe(data => {
      this.listRequests = data;
    })
  }

  openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddTaskDialogBoxComponent, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
      });
  }

  displayedColumns: string[] = ['title', 'worker', 'status', 'anexx', 'action'];
  dataSource = new MatTableDataSource<any>(this.listRequests);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }

}

@Component({
  selector: 'add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
})
export class AddTaskDialogBoxComponent implements OnInit {
  workers: any = {};
  myForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    idWorker: new FormControl(''),
    anexx: new FormControl(''),
    // Add more form controls as needed
  });

  constructor(
      public dialogRef: MatDialogRef<AddTaskDialogBoxComponent>,
      private apiService: ApiService
  ) {}
  async ngOnInit(): Promise<void> {
    await this.getWorkers();
  }

  onFileChange($event:any) {

    this.myForm.patchValue({
      anexx: $event.target.files[0]
    })
  }

  getWorkers() {
    this.apiService.getWorkers({
      position: 'ADMINISTRATIVO',
      query: ''
    }).subscribe(data => {
      this.workers = data;
    })
  }

  saveRequest() {
    console.log('valores de myForm >>>', this.myForm);
    this.apiService.saveRequest(this.myForm.value).subscribe(data => {
      this.dialogRef.close(true);
    })
  }

  close(){
      this.dialogRef.close(true);
  }

}
