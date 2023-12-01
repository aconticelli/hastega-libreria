import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scaffali',
  templateUrl: './scaffali.component.html',
  styleUrls: ['./scaffali.component.scss'],
})
export class ScaffaliComponent implements OnInit {
  f: FormGroup | null = null;
  creation = false;

  constructor(
    private router: Router,
    public booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      'title': new FormControl(
        undefined,
        [Validators.required],
      ),
      'author': new FormControl(
        undefined,
        [Validators.required],
      ),
      'isbn': new FormControl(
        undefined,
        [Validators.required],
      ),
      'addedAt': new FormControl(
        undefined,
        [Validators.required],
      ),
      'description': new FormControl(
        undefined,
        [Validators.required],
      ),
      'readings': new FormControl(
        undefined,
        [Validators.required],
      ),
    });

  }
  create(): void {
    if (!this.f) {
      return;
    }
    if (!this.f.valid) {
      return;
    }
    this.creation = false;
    const book = {
      title: this.f.get('title')?.value,
      author: this.f.get('author')?.value,
      isbn: this.f.get('isbn')?.value,
      addedAt: this.f.get('addedAt')?.value,
      description: this.f.get('description')?.value,
      completedReadings: this.f.get('readings')?.value,
    };
    this.booksService.addBook(book);
  }

  showBook(isbn?: string): void {
    if (!isbn) {
      return;
    }
    this.router.navigate(['book', isbn]);
  }

  showForm(): void {
    this.creation = !this.creation;
    this.f?.reset();
  }
}