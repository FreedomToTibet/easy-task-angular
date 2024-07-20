import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	selectedUser = signal(randomUser);

	get imagePath() {
		return `/images/${this.selectedUser().avatar}`;
	}

	onSelectedUser() {
		this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
	}
}
