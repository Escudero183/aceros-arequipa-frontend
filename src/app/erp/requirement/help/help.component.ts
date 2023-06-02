import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  mensaje: string;
  optionSel: number;

  onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.optionSel = Number(selectElement.value);
  }

}

@Component({
  selector: 'detail-component',
  templateUrl: './detailoption.component.html',
})
export class DetailOptionComponent {
  @Input() mensajeHijo: string;
  @Input() optionShow: number;
  msjOption = [
    'Proyecto: Este tipo de requerimiento dura más de 100 horas.',
    'Mejora: Este tipo de requerimiento dura de 5 a 99 horas.',
    'Configuración: Este tipo de Requerimiento duras a los más 4 horas.'
  ];
}
