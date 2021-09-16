import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialagBox/dialog-box/dialog-box.component';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  BookQuanity: number = 0;
  booksArray: any;
  @Input() card: any
  constructor(private service: BookService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }

  openDialog(card: any) {
    let diaLogRef = this.dialog.open(DialogBoxComponent, {
      width: "700px",
      maxWidth: "auto",
      data: card

    });
    console.log(card)
  }
}
