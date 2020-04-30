import { LightningElement,track,api } from 'lwc';

export default class CommUsingMethodsChild14 extends LightningElement {

    @track message;
    @api getMessage(str){
        this.message=str.toUpperCase();
    }
}