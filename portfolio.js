//For getting the calendar data
new GitHubCalendar(".calendar", "rish2408", { responsive: true });

//For Changing the texts inside the changingRoles Div
let changingRolesTextIndex = 0;
const changingRolesText = [
  "I am a Problem Solver",
  "I am a Continuos Learner",
  "I am a Backend Developer",
];

setInterval(() => {
  if (changingRolesTextIndex >= changingRolesText.length) {
    changingRolesTextIndex = 0;
  }
  changingRoles(changingRolesTextIndex++);
}, 2000);

function changingRoles(changingRolesTextIndex) {
  if (changingRolesTextIndex < changingRolesText.length) {
    let changingRolesDiv = document.getElementById("changingRoles");
    changingRolesDiv.innerHTML = `<h2>${changingRolesText[changingRolesTextIndex]}</h2>`;
    changingRolesTextIndex += 1;
  }
}
