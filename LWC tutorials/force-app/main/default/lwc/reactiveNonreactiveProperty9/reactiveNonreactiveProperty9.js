import { LightningElement,track } from 'lwc';

export default class ReactiveNonreactiveProperty9 extends LightningElement {
    @track reactive;
    nreactive = 20;

    reactiveHandler(event){
        this.reactive=event.target.value;
    }
    nreactiveHandler(event){
        this.nreactive=event.target.value;
    }
}