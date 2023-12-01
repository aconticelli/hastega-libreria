import { Injectable } from "@angular/core";
import { Book } from "../models/book.models";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Map<string, Book> = new Map();
  books$ = new BehaviorSubject<Book[]>([]);

  addBook(book: Book): void {
    if (book.isbn) {
      this.books.set(book.isbn, book);
    }
    this.emitBooks();
  }

  remBook(isbn: string): boolean {
    const result = this.books.delete(isbn);
    if (!!result) {
      this.emitBooks();
      return true;
    }
    return false;
  }

  setBook(book: Book): void {
    if (book.isbn) {
      this.books.set(book.isbn, book);
    }
    this.emitBooks();
  }

  private emitBooks(): void {
    const newBooks = Array.from(this.books.values());
    this.books$.next(newBooks);
  }
}