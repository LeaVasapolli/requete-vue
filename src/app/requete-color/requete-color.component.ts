import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'requete-color',
  templateUrl: './requete-color.component.html',
  styleUrls: ['./requete-color.component.scss']
})

export class RequeteColorComponent {
  currentColor : string ="#FFFFFF";

  @ViewChild('colorInput')
  colorInput!: ElementRef;

  @ViewChild('colorViewer')
  colorViewer!: ElementRef;

  generateColor() {
    let c = Math.floor(Math.random()*16677215).toString(16);
    this.colorViewer.nativeElement.style.backgroundColor = "#" + c;
    this.colorInput.nativeElement.value = "#" + c;
  }
}
