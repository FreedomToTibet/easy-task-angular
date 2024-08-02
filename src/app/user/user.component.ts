import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	@Input() user!: User;
	@Output() select = new EventEmitter<string>();
	@Input() isActive = false;

	toggleActive() {
		this.isActive = !this.isActive;
	}

	get imagePath() {
		return `images/${this.user.avatar}`;
	}

	onSelectedUser() {
		this.select.emit(this.user.id);
	}
}
