  let input = document.getElementById("showName");
  let message = document.getElementById("message");

  function addShow(event) {
    event.preventDefault(); // stop refresh

    let name = input.value;

    // get first letter
    let first = name[0];

    // check if it starts with a letter
    if (first >= "A" && first <= "Z" || first >= "a" && first <= "z") {
      message.innerHTML =name + " has been added" ;
    } else {
      message.innerHTML = "Invalid TV Show name";
    }
  }

  // connect button click
  document.getElementById("showName").form.onsubmit = addShow;