import { LightningElement } from 'lwc';

export default class BooleanPropertiesParent13 extends LightningElement {
    constructor(){
        super();
        console.log("parent constructor");
    }


    renderedCallback(){

        console.log("parent rendered Callback")
    }
    connectedCallback() {
        console.log("parent connected callback")
    }

    disconnectedCallback() {
        console.log("parent disconnected Callback")
    }
}