import {WordComponent} from "../../core/WordComponent"
import {text, selected} from "../../core/date"
export class Blank extends WordComponent {
    static className = "word-blank";
    constructor($root){
        super($root, {
            listeners: ['input', 'mouseup', 'mousedown']
        })
    }

    onInput(e){
        let currentText = e.target.innerHTML;
        window.localStorage.setItem("Blank", currentText);

    }
    onMouseup(e){
        let cut = document.createRange();
        cut.selectNode(document.querySelector('.blank'));
        let width = document.querySelector(".formatt-text__bold");
        let select = window.getSelection().toString();
        width.addEventListener("click", function (){
            let text = e.target.innerHTML;
            if(select != ""){
            e.target.innerHTML = e.target.innerHTML.replace(select, `<b>${select}</b>`);
         }
        });

    }
    onMousedown(){

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
