const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', function (event) {

  event.preventDefault();


  const formData = new FormData(loginForm);


  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert('All fields must be filled');
    return;
  }

  console.log(formDataObject);

  loginForm.reset();
});
