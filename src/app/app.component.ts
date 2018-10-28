import {Component} from "@angular/core";
import {Variant} from "./Variant";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'app';
  height: number;
  width: number;
  length: number;
  a: number;
  b: number;
  c: number;
  show: boolean;
  variants: Variant[];


  constructor(private service: AppService) {
    this.show = false;
  }

  loadAllVariants(width, height, length, a, b, c) {
    this.service.getBestVariant(width, height, length, a, b, c).subscribe(vars => {
      this.variants = vars;
    });
  }
}
