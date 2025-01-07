

// alert = function (msg) {
//   let div = document.createElement("div")
//   div.className = "popup"
//   div.setAttribute("display: none; position: fixed; z-index: 1;left: 0; top: 0; width: 100 %; height: 100 %;overflow: auto; background - color: rgba(0, 0, 0, 0.4); ")

//   let content = document.createElement("div")
//   content.className = "content"
//   content.setAttribute("style", "display: flex; flex - direction: column; align - items: center;   background - color: #fefefe; margin: 15 % auto;    padding: 10px; border: 1px solid #888; width: 30 %; ")

//   let msgelement = document.createElement("p")
//   msgelement.id = "alertText"
//   msgelement.textContent = msg;

//   let closeBtn = document.createElement("button");
//   closeBtn.textContent = "Ok";
//   closeBtn.setAttribute("style", "background-color: #2196F3;    color: white; padding: 10px 20px; border: none; cursor: pointer;    border - radius: 5px; align - self: flex - end; margin - top: 10px; ")

//   closeBtn.onclick = function () {
//     div.style.display = "none";
//   };
//   content.appendChild(msgelement)
//   content.appendChild(closeBtn)

//   div.appendChild(content)

//   document.body.appendChild(div)
//   div.style.display = "block"

// }

function closeAll() {
  document.getElementById("myModal").style.display="none";
  // document.getElementById("seebtn").style.display="block"
}

function openAll() {
  document.getElementById("myModal").style.display="block";
  // document.getElementById("seebtn").style.display="none"
}
