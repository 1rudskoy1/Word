import {WordComponent} from "../../core/WordComponent"

export class HeaderBlue extends WordComponent {
    static className = "Word-header";


    toHTML(){
        return `<header>
        <div class="">
                <div class="blue-menu">
                    <ul class="nav">
                        <li class="nav__link">Название файла</li>
                        <li class="nav__link"><i class="fa-solid fa-floppy-disk"></i></li>
                        <div class="left-right">
                            <li class="nav__link"><i class="fa-solid fa-arrow-rotate-left"></i></li>
                            <li class="nav__link"><i class="fa-solid fa-arrow-rotate-right"></i></li>
                        </div>
                        <li class="nav__link">
                            <div class="link-input" contenteditable="">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <p class="link-input__placholder">Search</p>
                            </div>
                    </ul>
                </div>
        `
    }
}