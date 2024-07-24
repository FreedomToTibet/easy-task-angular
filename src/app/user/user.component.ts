import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	@Input({required: true}) user!: {
		id: string;
		avatar: string;
		name: string;
	}
	// @Input({required: true}) id!: string;
	// @Input({required: true}) avatar!: string;
	// @Input({required: true}) name!: string;
	@Output() select = new EventEmitter<string>();

	get imagePath() {
		return `images/${this.user.avatar}`;
	}

	onSelectedUser() {
		this.select.emit(this.user.id);
	}
}
