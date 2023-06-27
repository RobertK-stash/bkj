import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignUp } from './sign-up';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModal {
  private url = 'http://localhost:4545';
  faX = faX;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SignUpModal>,
    private httpClient: HttpClient) {
  }
  
  onConfirmClick(): void {
    this.sendEmail(this.model).subscribe();
    this.dialogRef.close(true);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  sendEmail(model: any): Observable<string> {
    return this.httpClient.post(`${this.url}/sendEmail`, model, { responseType: 'text' });
  }


  model = new SignUp('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

}