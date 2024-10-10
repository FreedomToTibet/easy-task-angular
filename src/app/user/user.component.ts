import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../ui/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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
