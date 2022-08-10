class Dom {
    constructor(selector) {
      this.$el = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector
    }
  
    html(html) {
      if (typeof html === 'string') {
        this.$el.innerHTML = html
        return this
      }
      return this.$el.outerHTML.trim()
    }
  
    clear() {
      this.html('')
      return this
    }
  
    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }
    off(eventType, callback){
      this.$el.addEventListener(eventType, callback);
    }
    append(node) {
      if (node instanceof Dom) {
        node = node.$el
      }
  
      if (Element.prototype.append) {
        this.$el.append(node)
      } else {
        this.$el.appendChild(node)
      }
  
      return this
    }

    get data(){
      return this.$el.dataset;
    }

    closest(selector){
      return $(this.$el.closest(selector));
    }

    getCoords(){
      return this.$el.getBoundingClientRect();
    }
    findAll(selector){
      return this.$el.querySelectorAll(selector);
    }
    css(styles = {}){
      Object.keys(styles).forEach(key => this.$el.style[key] = styles[key]);
    }
    getName(){
      let inner;
      let link = location.search.substring(1);
      let parame = link.split("&");
      parame.forEach((par) => {
         let name = par.split('=');
         if(name[0] == 'name'){
              inner = decodeURI(name[1])
         }
      }); 
      return inner;
    }
    innerText(value){
      this.$el.innerText = value; 
    }
    
  }
  
  export function $(selector) {
    return new Dom(selector)
  }
  
  $.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
      el.classList.add(classes);
    }
    return $(el)
  }