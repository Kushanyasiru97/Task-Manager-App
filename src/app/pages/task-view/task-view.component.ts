import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { List } from 'src/app/model/list/list.module';
import { Task } from 'src/app/model/task/task.module';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists!: List[];
  tasks!: Task[];

  selectedListId: string | undefined;

  constructor(/*private taskService: TaskService, */private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*this.route.params.subscribe(
      (params: Params) => {
        if (params['listId']) {
          this.selectedListId = params['listId'];
         // this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
         //   this.tasks = this.tasks;
          /*})
        } else {
          this.tasks = undefined;
        }
      }
    )*/

   /* this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    })*/
    
  }

  onTaskClick(task: Task) {
    // we want to set the task to completed
   // this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
   /*   console.log("Completed successully!");
      task.completed = !task.completed;
    })*/
  }

  /*onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }*/

  /*onDeleteTaskClick(id: string) {
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !== id);
      console.log(res);
    })
  }*/

}