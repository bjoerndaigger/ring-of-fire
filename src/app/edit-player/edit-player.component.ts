import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent {
  allProfilePictures = [
    'profile-devil.png',
    'profile-catgirl.png',
    'profile-ninja.png',
    'profile-pengiun.png',
    'profile-female.png',
    'profile-male.png'
  ];
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
