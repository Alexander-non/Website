function CreateAssignmentContainerItems(filename, linkParent) {
  const aHref = document.createElement("a");  
  aHref.href = "../Projects/" + filename.charAt(0).toUpperCase() + filename.slice(1) + "/" + filename.toLowerCase() + ".html"
  linkParent.appendChild(aHref);

  const button = document.createElement("div");
  button.setAttribute("class", "buttons");
  aHref.appendChild(button);

  const name = document.createElement("span");
  name.innerText = filename.charAt(0).toUpperCase() + filename.slice(1).replace('_', ' ');
  button.appendChild(name)
};

fetch("../Webfiles/projekteim.json").then( response => {
    return response.json();
    }).then(jsondata => {
        var numberOfAssigments = 1;
        const ACC = document.getElementById("assignment-container-container");
        //Create Assignment Container
        var assignmentContainer = document.createElement("div");
        assignmentContainer.setAttribute("class", "assignment-container");
        ACC.appendChild(assignmentContainer);
        for (let x = 0; x < jsondata.FileNames.length; x++) {
          if (numberOfAssigments <= 3) {
            CreateAssignmentContainerItems(jsondata.FileNames[x], assignmentContainer);
          } else {
            //Create Assignment Container
            assignmentContainer = document.createElement("div");
            assignmentContainer.setAttribute("class", "assignment-container");
            ACC.appendChild(assignmentContainer);
            //Create Assignment Container Items
            CreateAssignmentContainerItems(jsondata.FileNames[x], assignmentContainer);
            numberOfAssigments = 1;
          };
          numberOfAssigments += 1;
        }
    });


var clickCounter = 0;
const ocean = document.getElementById("ocean");
const boat = document.getElementById("boat");
ocean.addEventListener('click', function(event) {
    clickCounter++
    if (clickCounter % 5 == 0) {
        boat.style.display = "block";
        setTimeout(() => {
            boat.style.display = "none";
        }, 15000);
    };
});