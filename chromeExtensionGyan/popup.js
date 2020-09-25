window.addEventListener("load", function load(event) {
  const URL = "https://type.fit/api/quotes";
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let node = document.createElement("h3");
      let num = Math.floor(Math.random() * 1000 + 1);
      let textnode = document.createTextNode(
        data[num].text + " - " + data[num].author
      );
      node.appendChild(textnode);
      document.getElementById("content").appendChild(node);
    });
  document.getElementById("close").addEventListener("click", function () {
    window.close();
  });
});
