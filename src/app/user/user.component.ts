import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	@Input({required: true}) id!: string;
	@Input({required: true}) avatar!: string;
	@Input({required: true}) name!: string;
	@Output() select = new EventEmitter();

	get imagePath() {
		return `images/${this.avatar}`;
	}

	onSelectedUser() {
		this.select.emit(this.id);
	}
}
