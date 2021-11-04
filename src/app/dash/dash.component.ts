import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Doação de sangue', cols: 1, rows: 1 },
          { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
          { title: 'Sem evento', cols: 1, rows: 1 },
          { title: 'Sem evento', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Doação de sangue', cols: 2, rows: 1 },
        { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
        { title: 'Sem evento', cols: 1, rows: 2 },
        { title: 'Sem evento', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
