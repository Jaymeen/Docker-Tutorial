import { Component } from "@angular/core"
import { UserService } from "../services/user.service";

@Component({
	selector: 'list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
	users: any;

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe({
			next: (res) => {
				this.users = res;
			},
			error: (err) => {
				console.log("Some Error Occurred : ");
				console.error(err);
			},
			complete: () => {
				console.log("Response received - User added Successfully.");
			}
		});
	}
}