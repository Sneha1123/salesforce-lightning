import { LightningElement,api} from 'lwc';

export default class BooleanPropertiesChild12 extends LightningElement {
    @api show = false;

    constructor(){
        super();
        console.log("child constructor");
    }


    renderedCallback(){

        console.log("child rendered Callback")
    }
    connectedCallback() {
        console.log("child connected callback")
    }

    disconnectedCallback() {
        console.log("child disconnected Callback")
    }
}
