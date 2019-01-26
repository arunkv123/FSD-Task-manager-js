import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private taskBlock = new BehaviorSubject<any>(null);
  taskMessage = this.taskBlock.asObservable();

  constructor() { }


  sendTaskBlock(block: any) {
      this.taskBlock.next(block);
  }

  clearTaskBlock() {
      this.taskBlock = null;
  }

}
