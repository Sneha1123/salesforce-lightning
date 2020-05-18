import { createElement } from 'lwc';
import HelloWorld29 from 'c/helloWorld29';

describe('c-hello-world29', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays', () => {
        const element = createElement('c-hello-world29', {
            is: HelloWorld29
        });
        document.body.appendChild(element);
        const h = element.shadowRoot.querySelector('h2');
        expect(h.textContent).toBe("Hello World!");
    });
    it('user input',()=>{
        const element = createElement('c-hello-world29',{
            is:HelloWorld29
        })
        element.greeting="Sneha";
        document.body.appendChild(element);
        const h= element.shadowRoot.querySelector('h2');
        expect(h.textContent).toBe("Hello Sneha");
    });
});