document.querySelector("#add-time")
.addEventListener('click',cloneField)


function cloneField(){
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   field = newFieldContainer.querySelectorAll('input')

   field.forEach(function(field) {
        field.value=""
   })

    document.querySelector('#schedule-item').appendChild(newFieldContainer)

}
