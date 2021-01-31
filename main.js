var array_of_students = [];

function submit() {
  for (j = 1; j <= 4; j++) {
    var studentId = document.getElementById(`name_of_student_${j}`).value;
    array_of_students.push(studentId);
  }

  console.log(array_of_students);

  var display_arr = [];

  for (i = 0; i < array_of_students.length; i++) {
    display_arr.push(`<h4>Name: ${array_of_students[i]}</h4>`)
  }

  document.getElementById("answer_div_comma").innerHTML = display_arr;
  var without_comma = display_arr.join(" ");
  
  document.getElementById("without_comma").innerHTML = without_comma;
  document.getElementById("submit_btn").style.display = "none";
  document.getElementById("sort_btn").style.display = "inline-block";
}

function sort() {
  array_of_students.sort();

  var new_arr = [];

  for (i = 0; i < array_of_students.length; i++) {
    new_arr.push(`<h4>Name: ${array_of_students[i]}</h4>`);
  }

  var joined_arr = new_arr.join(" ");
  
  document.getElementById("without_comma").innerHTML = joined_arr;
}

function update() {
  document.getElementById("without_comma").innerHTML = `<h1>${array_of_students}<h1>`
}