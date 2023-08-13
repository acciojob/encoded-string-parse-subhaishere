const parseCode = (str) => {
  // your code here
	const [firstName, lastName, id] = str.split('000');

  return {
  firstName: firstName,
    lastName: lastName,
    id: id
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringfy.(parseCode(str)));