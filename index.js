let ul = document.getElementById("list_wrapper");
let page = 1;
let limit = 25;

function getData(page, limit) {
  fetch(
    `http://localhost:3000/students?_page=${page}&_limit=${limit}`
  )
    .then((res) => res.json())
    .then((res) => {
      res.map((item, i) => {
        let li = document.createElement("li");
        li.innerHTML = item.name;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log("Error in fetching data", err);
    });
}

getData(page, limit);

const myDiv = document.getElementById("wrapper");

myDiv.addEventListener("scroll", () => {
  if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
    getData(++page, limit)
  }

});
