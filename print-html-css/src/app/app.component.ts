import { Component } from '@angular/core';
import * as $ from 'jquery'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'print-html-css';

  print() { 
    this.paging();
  }
  paging() {
    let totalPages = 2;
    for (let i = 1; i < totalPages; i++) {
      var pageNumberDiv = document.createElement("div");
      pageNumberDiv.setAttribute("class", "page_number");
      var pageNumber = document.createTextNode(i + " / " + totalPages);
      pageNumberDiv.style.position = "absolute";
      pageNumberDiv.style.top = "calc((" + i + " * (170mm - 0.5px)) - 30px)";
      pageNumberDiv.style.height = "16px";
      pageNumberDiv.style.width = "30px";
      pageNumberDiv.style.fontSize = "11px";
      pageNumberDiv.appendChild(pageNumber);
      document.getElementById('content-pdf')?.appendChild(pageNumberDiv);
      pageNumberDiv.style.left = "calc(100% - (" + pageNumberDiv.offsetWidth + "px - 10px))";
    }
    window.print();
  }
}


