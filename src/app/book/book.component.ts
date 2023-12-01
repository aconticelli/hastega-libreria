import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { BooksService } from '../services/books.service';
import { combineLatest } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  book$ = combineLatest([
    this.route.params.pipe(map((params) => params['id'])),
    this.booksService.books$,
  ]).pipe(
    map(([isbn, books]) => {
      return books.find((book) => book.isbn === isbn);
    }),
    tap((result) => {
      if (!result) { 
        this.router.navigate(['scaffali']);
      }
    }),
  );
  form$ = this.book$.pipe(
    map((book) => !book ? undefined : new FormGroup({
      'title': new FormControl(book?.title),
      'author': new FormControl(book?.author),
      'isbn': new FormControl(book?.isbn),
      'addedAt': new FormControl(book?.addedAt),
      'description': new FormControl(book?.description),
      'readings': new FormControl(book?.completedReadings),
    })),
  );
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public booksService: BooksService,
  ) { }

  update(form: FormGroup): void {
    const book = {
      title: form.get('title')?.value,
      author: form.get('author')?.value,
      isbn: form.get('isbn')?.value,
      addedAt: form.get('addedAt')?.value,
      description: form.get('description')?.value,
      completedReadings: form.get('readings')?.value,
    };
    this.booksService.setBook(book);
  }

  delete(isbn?: string): void {
    if (!isbn) {
      return;
    }
    this.booksService.remBook(isbn);
  }
}
