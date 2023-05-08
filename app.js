const form = document.querySelector("#studentform");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = getFormData(event.target); // event.target->form as you can see i have aplied eventlistener over the form so its target is form

  const { name, email, password } = data; // destructuring the data here.....

  console.log(data.name, data.email, data.password);
  console.log(name, email, password); // showing destructured data in console....
});

function getFormData(formElement) {
  const formdata = new FormData(formElement);
  const name = formdata.get("name");
  const email = formdata.get("email");
  const password = formdata.get("password");

  console.log(`name:${name}`);
  console.log(`email:${email}`);
  console.log(`password:${password}`);

  //   const data = {
  //     'name': name,
  //     'email': email,
  //     'password':password
  //   }

  const data = {
    name,
    email,
    password,
  };

  return data;
  //   return {name, email, password};
}
