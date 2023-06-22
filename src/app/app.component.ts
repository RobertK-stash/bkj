import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpModal } from './sign-up-modal/sign-up-modal.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignUpModal, {
      width: '70vw',
      height: '75vh'
  });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Sign up was successfull!'
        });
      }
    });
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  scrollTop() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
 }
 
}
