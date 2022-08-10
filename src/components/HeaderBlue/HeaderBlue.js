import {WordComponent} from "../../core/WordComponent"
import {$, getName} from '@core/Dom'

export class HeaderBlue extends WordComponent {
    static className = "Word-header";

    constructor($root){
        super($root, {
            listeners: ['click']
        })

    }

    onClick(e){
        if(e.target.getAttribute("data-action") == 'file'){
            console.log("ds");
        }
    }

    toHTML(){
        return `<header>
        <div class="">
                <div class="blue-menu">
                    <ul class="nav">
                        <li class="nav__link" data-action='file'>${getName()}</li>
                        <li class="nav__link"><i class="fa-solid fa-floppy-disk" data-action='save'></i></li>
                        <div class="left-right">
                            <li class="nav__link"><i class="fa-solid fa-arrow-rotate-left" data-action='left'></i></li>
                            <li class="nav__link"><i class="fa-solid fa-arrow-rotate-right" data-action='right'></i></li>
                        </div>
                        <li class="nav__link">
                            <div class="link-input" contenteditable="" data-action='search'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <p class="link-input__placholder">Search</p>
                            </div>
                    </ul>
                </div>
        `

    }
      
}