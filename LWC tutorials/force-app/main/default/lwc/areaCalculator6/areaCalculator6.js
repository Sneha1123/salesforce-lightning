import { LightningElement,track } from 'lwc';

export default class AreaCalculator6 extends LightningElement {
    side;
    length;
    breadth;
    radius;
    @track area;
    @track showValue = false;

    sideHandler(event){
        this.side = event.target.value;

    }
    lengthHandler(event){
        this.length = event.target.value;

    }
    breathHandler(event){
        this.breadth = event.target.value;

    }
    radiusHandler(event){
        this.radius = event.target.value;

    }
    SquareHandler(event){
        this.showValue = false;
        this.area = (this.side)*(this.side);
        this.showValue = true;

    }
    RectangleHandler(event){
        this.showValue = false;
        this.area = (this.length)*(this.breadth);
        this.showValue = true;

    }
    CircleHandler(event){
        this.showValue = false;
        this.area = (3.14*(this.radius));
        this.showValue = true;

    }
    ResetHandler(event){
        this.showValue = false;
        this.side = "";
        this.length="";
        this.breadth = "";
        this.radius="";

    }


}