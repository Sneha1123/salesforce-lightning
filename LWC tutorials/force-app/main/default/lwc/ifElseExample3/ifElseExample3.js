import { LightningElement,track } from 'lwc';

export default class IfElseExample3 extends LightningElement {
    something = true;
    @track show =true;
    @track ename;
    @track age;
    @track salary;

    enamehandler(event){
        this.ename = event.target.value;
    }
    agehandler(event){
        this.age = event.target.value;
    }
    salhandler(event){
        this.salary = event.target.value;
    }
    saveHandler(){
    this.show = false;
    }
    backHandler(){
        this.show = true;
        }
}