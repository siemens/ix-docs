import { Component, signal } from "@angular/core";
import ExampleComponent from "./example.component";

@Component({
  selector: "app-root",
  imports: [ExampleComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}
