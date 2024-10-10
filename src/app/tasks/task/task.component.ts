import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TasksService } from '../tasks.service';
import { ITask } from './task.model';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
	@Input({required: true}) task!: ITask;
	
	private tasksService = inject(TasksService);

	onCompleteTask() {
		this.tasksService.removeUserTask(this.task.id);
	}
}
