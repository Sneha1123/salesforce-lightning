import { LightningElement } from 'lwc';

export default class CommUsingCustomEventsChild16 extends LightningElement {
    
  
    childHandler(event){
        const name = event.target.value;
        const eventCreated=new CustomEvent('childevent', {detail:name,bubbles:true});
        this.dispatchEvent(eventCreated);


    }
}