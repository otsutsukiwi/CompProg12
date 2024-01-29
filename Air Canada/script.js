let container = document.getElementById("cont_id");
let counter_container = document.getElementById("counter_cont_id");
let employee_container = document.getElementById("employees");
let header = document.getElementById("header_id");
let body = document.body;

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

function color_change() {
  container.style.backgroundColor = getRandomColor();
  counter_container.style.backgroundColor = getRandomColor();
  body.style.backgroundColor = getRandomColor();
  header.style.backgroundColor = getRandomColor();
  employee_container.style.backgroundColor = getRandomColor();
}



let likeButton = document.getElementById("like");
let dislikeButton = document.getElementById("dislike");
let resetButton = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;
counter.innerHTML = count;

function updateCounterColor() {
    if (count == 0) {
        counter.style.color = "black";
    } else if (count > 0) {
        counter.style.color = "white";
    } else {
        counter.style.color = "red";
    }
}

function reset() {
    count = 0;
    counter.innerHTML = count;
    updateCounterColor();
}

function likeUp() {
    count = count + 1;
    counter.innerHTML = count;
    updateCounterColor();
}

function likeDown() {
    count = count - 1;
    counter.innerHTML = count;
    updateCounterColor();
}




let emp_img = document.getElementById("p1");
let emp_name = document.getElementById("name");
let emp_job = document.getElementById("job");
let emp_desc = document.getElementById("desc");

let img_list = ["images//romano.jpg","images//Alex.png","images//Emily.png"];
let name_list = ["Romano James","Alex Davis","Emily Wong"];
let job_list = ["Customer Service Representative","Aircraft Maintenance Technician","Marketing Specialist"];
let desc_list = ["Romano excels in ensuring a seamless travel experience for Air Canada passengers. With a keen attention to detail and excellent communication skills, he resolves customer inquiries, manages flight bookings, and handles special requests with professionalism and efficiency.","As an Aircraft Maintenance Technician at Air Canada, Alex plays a crucial role in maintaining the safety and reliability of the airline's fleet. With a deep understanding of aircraft systems and a commitment to high-quality work, he conducts routine inspections, troubleshoots technical issues, and performs necessary repairs to keep the aircraft in optimal condition.","Emily brings creativity and strategic thinking to her role as a Marketing Specialist at Air Canada. Responsible for developing and implementing marketing campaigns, she collaborates with cross-functional teams to promote the airline's services, engage customers through various channels, and contribute to Air Canada's brand visibility in the competitive aviation industry."];

let left_b = document.getElementById("left_b");
let right_b = document.getElementById("right_b");

let emp_counter = 0;
function updateEmp() {
    emp_img.src = img_list[emp_counter];
    emp_name.innerHTML = name_list[emp_counter];
    emp_job.innerHTML = job_list[emp_counter];
    emp_desc.innerHTML = desc_list[emp_counter];
}

function lSelect() {
    emp_counter = Math.max(0, emp_counter - 1);
    updateEmp();
}

function rSelect() {
    emp_counter = Math.min(img_list.length - 1, emp_counter + 1);
    updateEmp();
}
