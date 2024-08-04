
export default function Card(){

  /* TEMPLATE PARA AGREGAR ODONTOLOGO A LA API
  
  const formData = {
    matricula: document.querySelector('#matricula').value,
    nombre: document.querySelector('#nombre').value,
    apellido: document.querySelector('#apellido').value
};

const url = '/odontologos/agregar';
const settings = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
}

fetch(url, settings)
    .then(response => response.json())
    .then(data => {
         let successAlert = '<div class="alert alert-success alert-dismissible">' +
             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
             '<strong></strong> Odontólogo agregado </div>'

         document.querySelector('#response').innerHTML = successAlert;
         document.querySelector('#response').style.display = "block";
         resetUploadForm();

    })
    .catch(error => {
            let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                             '<strong> Error intente nuevamente</strong> </div>';
              document.querySelector('#response').innerHTML = errorAlert;
              document.querySelector('#response').style.display = "block";
             resetUploadForm();
    })*/

  return (
    <div>Card</div>
  )
}
