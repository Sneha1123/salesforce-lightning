import { LightningElement, api,track,wire } from 'lwc';
import {currentPageReference} from 'lightning/navigation';
import {fireEvent,registerListener, unregisterAllListeners} from 'c/pubsub';
import getAllProducts from '@salesforce/apex/ProductController.getproducts';

export default class ProductTileList30 extends LightningElement {
    @track pageNumber=1;
    @track pageSize;
    @track totalItemCount=0;
    @track filters=[];
    @wire(currentPageReference) pageRef;
    @wire(getAllProducts,{filters:'$filters', pageNumber:'$pageNumber'}) products;

    connectedCallback(){
			
        registerListener('filterChange', this.filterChangeHandler, this);			
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
        }

        productSelectHandler(event){
            fireEvent(this.pageRef, 'productSelected', event.detail)
        }
        filterChangeHandler(filters){
            this.filters={...filters};
            this.pageNumber=1;
        }
        paginatorPreviousHandler(){
            this.pageNumber=this.pageNumber-1;
        }
        paginatorNextHandler(){
            this.pageNumber=this.pageNumber+1;
        }

}