import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignUp } from './sign-up';

@Component({
  selector: 'sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModal {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SignUpModal>) {
      
  }
  
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  model = new SignUp('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

}