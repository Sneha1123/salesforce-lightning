import { LightningElement,track } from 'lwc';

export default class DataBinding2 extends LightningElement {
    @track name = "World";
    @track ename;
    @track age;
    @track salary;
    
    changeHandler(event){
        this.name = event.target.value;
    }

    enamehandler(event){
        this.ename=event.target.value;
    }
    agehandler(event){
        this.age=event.target.value;
    }
    salhandler(event){
        this.salary=event.target.value;
    }
}