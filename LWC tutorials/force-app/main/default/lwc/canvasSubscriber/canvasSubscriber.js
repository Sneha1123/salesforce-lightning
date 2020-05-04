import { LightningElement,track,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
export default class CanvasSubscriber extends LightningElement {
    @track ccolor;
    @wire (CurrentPageReference) pageRef;
    connectedCallback(){
        registerListener('fireHandler', this.canvasHandler, this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
        }
    canvasHandler(colorCode){
        console.log(colorCode);
        this.ccolor = colorCode;
        
    }
    get canvasColor(){
        return `background-color:${this.ccolor}`;
    }

}