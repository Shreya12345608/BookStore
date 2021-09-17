import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
booksArray:any;
card:any
bookId:any;
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service: BookService,
 private snackBar :MatSnackBar,private route:ActivatedRoute, private cart:CartService) {
  console.log("this is my card", data)
}

  ngOnInit(): void {
    this.addToCart();
  }
  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }
  addToCart(){
    let data = {
      BookId: this.data.bookId
    }
    console.log (data )
    this.cart.addToCart(data).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open('Book Added To Cart', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.snackBar.open('Error while adding book to cart', 'close')._dismissAfter(2000);
        console.log(error);
      })  } 
}
