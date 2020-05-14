import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastCreation27 extends LightningElement {
    ErrorHandler(event){
        
            const showError = new ShowToastEvent(
                {
                    title:"Error",
                    message:"Error message",
                    variant:"Error"

                }
            );
            this.dispatchEvent(showError);
        
    }
    successHandler(event){
        
        const showSuccess = new ShowToastEvent(
            {
                title:"Success",
                message:"Success message",
                variant:"Success"

            }
        );
        this.dispatchEvent(showSuccess);
    
}
warningHandler(event){
        
    const showWarning = new ShowToastEvent(
        {
            title:"Warning",
            message:"Warning message",
            variant:"Warning"

        }
    );
    this.dispatchEvent(showWarning);

}
infoHandler(event){
        
    const showInfo = new ShowToastEvent(
        {
            title:"Info",
            message:"Info message"
            

        }
    );
    this.dispatchEvent(showInfo);

}

}