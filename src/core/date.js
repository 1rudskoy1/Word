export let text = window.localStorage.Blank ? window.localStorage.Blank : '';


function select() {
    let select = "ds";
    Object.defineProperty(this, 'select', {
      get: function() {
        return select ;
      },
      set: function(value) {
        select = value;
      }
    });
  }
  let selected = new select();
  export {selected} 

 