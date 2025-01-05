const form = document.querySelector("Form1");
const input = document.querySelector("Username");

form.addEventListener("Sumbit1", function(event) {
  event.preventDefault();

  if (input.value.trim() === '') {
    alert('Your username is required.');
  } else {
    form.submit();
   }
})
