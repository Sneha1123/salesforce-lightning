import { LightningElement,track } from 'lwc';

export default class CommUsingCustomEventsParent17 extends LightningElement {
    
    @track message;

    constructor(){
        super();
        this.template.addEventListener('childevent',this.parentHandler.bind(this));
    }

    
    parentHandler(event){
        this.message=event.detail;
    }
}