import { LightningElement } from 'lwc';
import CommUsingMethodsChild14 from 'c/commUsingMethodsChild14';

export default class CommUsingMethodsParent15 extends LightningElement {

    printMessageHandler(event){

        this.template.querySelector('c-Comm-using-methods-child14').getMessage(event.target.value);
    }
}