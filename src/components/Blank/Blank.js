import {WordComponent} from "../../core/WordComponent"

export class Blank extends WordComponent {
    static className = "word-blank";


    toHTML(){
        return `
            <section>
                <div class="blank" contenteditable="" oninput="console.log(this.innerText)">
                    
                </div>
            </section>
        `
    }
}
