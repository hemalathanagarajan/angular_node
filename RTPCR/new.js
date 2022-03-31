let form = document.getElementById('form-content');

let table = document.getElementById('data');
form.addEventListener('submit', (e) => {
 e.preventDefault();
 add();
});
const add = () => {
 let name = document.getElementById('name').value;
 let aadhar = document.getElementById('aadhar-card').value;
 let dob = document.getElementById('dob').value;
 let city = document.getElementById('city').value;
 let date = document.getElementById('date-of-test').value;
 let time = document.getElementById('time-of-test').value;
 let result = document.getElementById('result').value;
 let labName = document.getElementById('lab-name').value;
 let reportNumber = document.getElementById('report-number').value;
 let gender = document.querySelector('input[name="gender"]:checked').value;


 let newArray = [
  name,
  aadhar,
  dob,
  city,
  date,
  time,
  result,
  labName,
  reportNumber,
  gender,

 ];
 newArray.forEach((item) => {
  var li = document.createElement('li');
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
 });
 form.reset();
};
console.log(add());

