fetch("../Webfiles/projekteim.json").then( response => {
    return response.json();
    }).then(jsondata => {
        //console.log(jsondata.FileNames)
        var numberOfAssigments = 1;
        const ACC = document.getElementById("assignment-container-container");
        var assignmentContainer = document.createElement("div");
        assignmentContainer.setAttribute("class", "assignment-container");
        ACC.appendChild(assignmentContainer);
        for (let x = 0; x < jsondata.FileNames.length; x++) {
          if (numberOfAssigments <= 3) {
            const aHref = document.createElement("a");
            aHref.href = "../Projects/" + jsondata.FileNames[x].charAt(0).toUpperCase() + jsondata.FileNames[x].slice(1) + "/" + jsondata.FileNames[x] + ".html"
            assignmentContainer.appendChild(aHref);

            const button = document.createElement("div");
            button.setAttribute("class", "buttons");
            aHref.appendChild(button);

            const name = document.createElement("span");
            name.innerText = jsondata.FileNames[x].charAt(0).toUpperCase() + jsondata.FileNames[x].slice(1).replace('_', ' ');
            button.appendChild(name)
          } else {
            assignmentContainer = document.createElement("div");
            assignmentContainer.setAttribute("class", "assignment-container");
            ACC.appendChild(assignmentContainer);
            numberOfAssigments=0;
          };
          numberOfAssigments++;
        }
        
      
    });




var clickCounter = 0;
const ocean = document.getElementById("ocean");
const boat = document.getElementById("boat");
ocean.addEventListener('click', function(event) {
    clickCounter+=1
    if (clickCounter % 5 == 0) {
        boat.style.display = "block";
        setTimeout(() => {
            boat.style.display = "none";
        }, 15000);
    };
});