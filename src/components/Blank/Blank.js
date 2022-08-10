import {WordComponent} from "../../core/WordComponent"
import {text, selected} from "../../core/date"
export class Blank extends WordComponent {
    static className = "word-blank";
    constructor($root){
        super($root, {
            listeners: ['input', 'mouseup']
        })
    }

    onInput(e){
        let currentText = e.target.innerHTML;
        window.localStorage.setItem("Blank", currentText);

    }
    onMouseup(){
        let cut = document.createRange();
        cut.selectNode(document.querySelector('.blank'));
        
        let select = window.getSelection().toString();
        selected.select = select;
        console.log(selected.select);

    }

    toHTML(){
        return `
            <section>
                <div class="blank" contenteditable="">
                    ${text}
                </div>
            </section>
        `
    }
}
