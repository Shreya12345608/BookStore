import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book/book.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
booksArray:any;
card:any
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service: BookService) {
  console.log("this is my card", data)
}

  ngOnInit(): void {
  }
  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }
 

}
