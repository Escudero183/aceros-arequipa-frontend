import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent {
  data: any = {};
  displayedColumns: string[] = ['id', 'firstName', 'document', 'position'];
  pathMultimediaByUrl: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.apiService.getWorkers({
      position: '',
      query: ''
    }).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}
