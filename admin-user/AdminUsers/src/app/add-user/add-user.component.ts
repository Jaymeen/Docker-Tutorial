import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
	selector: 'add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
	firstName: string = "";
	lastName: string = "";
	email: string = "";
	company: string = "";

	constructor(private userService : UserService) { }

	submitForm() {
		let userData = {
			"firstname": this.firstName,
			"lastname": this.lastName,
			"email": this.email,
			"company": this.company
		}

		this.userService.addUser(userData).subscribe({
			next: (res) => {
				console.log(res["message"]);
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