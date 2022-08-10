import {WordComponent} from "../../core/WordComponent"
import {text} from "../../core/date"
export class Blank extends WordComponent {
    static className = "word-blank";
    constructor($root){
        super($root, {
            listeners: ['input']
        })
    }

    onInput(e){
        let currentText = e.target.innerHTML;
        window.localStorage.setItem("Blank", currentText);
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
