function validateAndShowAlert() {
    // Check if all form fields are filled
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || date === "" || message === "") {
        // If any field is empty, show an error message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all fields!',
        });
    } else {
      
        Swal.fire({
            icon: 'success',
            title: name + ', Your Form Submitted Successfully',
            text: '',
        });
    }
}
