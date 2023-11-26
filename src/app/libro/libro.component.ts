import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent {
  isbn$ = this.route.params.pipe(
    map((params) => params['id']),
  );
  constructor(public route: ActivatedRoute) { }
}
