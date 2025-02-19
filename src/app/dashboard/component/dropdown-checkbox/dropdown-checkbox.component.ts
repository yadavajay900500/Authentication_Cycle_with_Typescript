import { Component,VERSION, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownCheckboxComponent  {
  @ViewChild('select')
  select!: MatSelect;
  allSelectData:Array<string>=[]


  allSelected=false;
   foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => {
        if(!this.allSelectData.includes(item.value)){
        this.allSelectData.push(item.value) 
        }
      // console.log(")ALLLLLLALLLLALL",item.value)

        item.select()
      })
    } else {
      // console.log("DDDDDDDDDDDDDDDDDD",this.select.value)
      for(let i=0;this.allSelectData.length >0;i++){
        this.allSelectData.pop()
      }
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  console.log("Alll Selected===========",this.allSelectData)

  }
   optionClick(body:any) {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
    if(!this.allSelectData.includes(this.select.value)){
      this.allSelectData=this.select.value
    }
    // this.allSelectData.push(body)
  console.log("Option Selcted=======AAAAAAAAAAAA====",this.allSelectData)

  }

}
