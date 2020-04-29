import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculator5 extends LightningElement {
     principal;
     roi;
     time;
    @track showValue=false;
    @track si;

    principalhandler(event){

        this.principal=event.target.value;
    }
    roihandler(event){

        this.roi=event.target.value;
    }
    timehandler(event){

        this.time=event.target.value;
    }

    calculateHandler(event){
        this.si = ((this.principal)*(this.roi)*(this.time))/100;
        this.showValue = true;


        
    }
}