import {WordComponent} from "../../core/WordComponent"

export class Edit extends WordComponent {
    static className = "Word-edit";


    toHTML(){
        return `<div class="text-change _container">
                    <div class="fonts">
                        <select class="fonts-select" name="" id="">
                            <option value="Calibri">Calibri</option>
                            <option value="Aria">Aria</option>
                            <option value="Roboto">Roboto</option>
                        </select>
                        <select class="fonts-select fonts-select__size" name="" id="">
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                        </select>
                    </div>
                    <div class="formatt">
                        <ul class="formatt-text">
                            <li class="formatt-text__bold"><b>B</b></li>
                            <li class="formatt-text__cursive"><i>I</i></li>
                            <li class="formatt-text__underline">U</li>
                            <li class="formatt-text__line">abc</li>
                            <li class="formatt-text__color"><i class="fa-solid fa-pencil"></i></li>
                        </ul>
                    </div>
                    <div class="list">
                        <li class="list_dots"><i class="fa-solid fa-list"></i></li>
                        <li class="list_one"><i class="fa-solid fa-list-ol"></i></li>
                    </div>
                    <div class="text-align">
                        <li class="text-aligh__left"><i class="fa-solid fa-bars-staggered"></i></li>
                        <li class="text-aligh__center"><i class="fa-solid fa-bars"></i></li>
                        <li class="text-aligh__right"><i class="fa-solid fa-bars-staggered"></i></li>
                    </div>
                </div>
                </div>
            </header>
        `
    }
}









                