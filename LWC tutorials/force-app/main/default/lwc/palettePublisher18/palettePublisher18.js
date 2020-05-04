import { LightningElement,track,wire} from 'lwc';
import{ fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class PalettePublisher18 extends LightningElement {

    @track color;
    @wire (CurrentPageReference) pageRef;
    get colorOptions(){
        return[
            {label:"Green",value:"green"},
            {label:"Blue",value:"blue"},
            {label:"Red",value:"red"},
            {label:"Yellow",value:"yellow"}
        ]

    }

    paletteHandler(event){

        this.color = event.target.value;
    }

    colorChangeHandler(event){
        console.log("color is"+this.color);
        fireEvent(this.pageRef, "fireHandler", this.color);
    }

}