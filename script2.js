	const inputs1111 = document.querySelectorAll('.input');
const submit = document.querySelector('.submit');

inputs1111.forEach(input => {
  input.addEventListener('keyup', () => {
    input.setAttribute('value', input.value);
    validate();
  });
});

const validate = () => {
  let valid = false;
  for (let i = 0; i < inputs1111.length; i++) {
    if (inputs1111[i].validity.valid) {
      valid = true;
    } else {
      valid = false;
      break;
    }
  }
  if (valid) {
    submit.classList.add("pass");
    submit.classList.remove("fail");
  } else {
    submit.classList.add("fail");
    submit.classList.remove("pass");
  }
};

submit.addEventListener('click', () => {
  return false;
});

