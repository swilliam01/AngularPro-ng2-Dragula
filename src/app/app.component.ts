import { Component, OnInit, OnChanges } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
// import { element } from 'protractor';
// import { BehaviorSubject, timer, interval, Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  // vampires$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  subs = new Subscription();
  source = -1;
  target = -1;
  cellList=[];
  cell1;
  cell2;


  itemsOnList: any = [
    {
      
      "label": "Basic Information",
      "columns": [{
        "sections": [{
          "rows": [
              {
            "cells": ["title" , "receivedate"]
          }, {
            "cells": ["assignee", "secondaryassignee"]
          }, {
            "cells": ["description"]
          }, {
            "cells": ["requestor", "status"]
          }, {
            "cells": ["iegcaseunit"]
          }]
        }]
      }]
    }];

    rows = [...this.itemsOnList[0]['columns'][0]['sections'][0]['rows']];
    // cellList = [...this.itemsOnList[0]['columns'][0]['sections'][0]['rows'][0]['cells']];
    vamps=[];
    vamps2 =[];
    vamps3 =[];


    constructor(private dragulaService: DragulaService){
      this.dragulaService.dropModel("VAMPIRES").subscribe(({source, target, sourceModel, targetModel}) => {
        console.log('payload is: ',source, target, sourceModel, targetModel);
      });
  
     }
   
    ngOnInit(){

    }

    ngOnChanges(changes) {
      console.log('the changes are: ', changes);
      
      if(changes['itemsOnList']) {
        console.log('the items are: ', this.itemsOnList);
        
      }
    }

      //tracks the target row on a click released
    handleMouseUp(row) {
      console.log('the target row is: ', row)
      this.target = row;
      
    }

    //tracks the source row on a click
  handleMouseDown(row) {
    console.log('the source row is: ', row)
    this.source = row;
  }

    //location of the cell
  clickIt(cell){
    console.log('this is cell:', cell);
    this.cellList = cell;
    // console.log(this.cellList);
    
  }
  

    //displays the current JSON
  saveChanges(){
        console.log('the updated json is: ', JSON.stringify(this.itemsOnList)); 
}

}
