function $(id){
  return document.getElementById(id)
}

(function (){
  $('type').value = localStorage.bc_type ? localStorage.bc_type : 'list'
  $('save').onclick = save
})()

function save(){
  localStorage.bc_type = $('type').value
}