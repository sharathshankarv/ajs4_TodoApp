import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //task;
  lists = [{    
    task: "Create App",
    status: false
  },{    
    task: "implement Logic ",
    status: true
  },];

  addTask(_task){
    console.log(_task);
    this.lists.push({task: _task, status: false});
  }

  taskCompleted(list){
      list.status = !list.status;
  }


}

