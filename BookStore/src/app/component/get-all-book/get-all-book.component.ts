import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  BookQuanity:number = 0;
  booksArray:any
  constructor(private service : BookService, private router:Router,) { }

  ngOnInit(): void {
    this.getBooks();
  }
 
 
  getBooks(){
    this.service.getallBook('Books').subscribe((response : any) => {
      console.log(response);
      this.booksArray = response.result;
     // this.booksArray.reverse();
      console.log("returning data",this.booksArray);

    });
  }
  showDescription(bookId:number){
    this.router.navigate([`dashboard/details/${bookId}`]);
  }
}
