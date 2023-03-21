"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("South Park is running!");
}

const tolkienBlack = {
  name: "Tolkien Black",
  nickname: "Tupperware " + "," + " Tupper Mech MK III " + "," + " Blackie " + "," + " Congo ",
  image: "svg/Token_Black2.png",
  occupation: "Student",
  age: "10 years old",
  voicedBy: "Trey Parker " + "," + " Adrien Beard",
  gender: "Male",
  religion: "Roman Catholic",
  catchPhrase: "null",
  hairColor: "Black",
  schoolGrade: "4th Grade",
  episodes: "null",
  appereances: "null",
  firstAppereance: "Cartman Gets an Anal Probe ",
};

// function showCharacter(character) {
//   document.querySelector("#name").textContent = character.name;
//   document.querySelector("#nickname").textContent = character.nickname;
//   document.querySelector("#image").textContent = character.image;
//   document.querySelector("#occupation").textContent = character.occupation;
//   document.querySelector("#voicedBy").textContent = character.voicedBy;
//   document.querySelector("#gender").textContent = character.gender;
//   document.querySelector("#religion").textContent = character.religion;
//   document.querySelector("#catchPhrase").textContent = character.catchPhrase;
//   document.querySelector("#hairColor").textContent = character.hairColor;
//   document.querySelector("#schoolGrade").textContent = character.schoolGrade;
//   document.querySelector("#episodes").textContent = character.episodes;
//   document.querySelector("#appereances").textContent = character.appereances;
//   document.querySelector("#firstAppereance").textContent = character.firstAppereance;
// }
const list = document.querySelector("#characters");

function addCharacter(characters) {
  const html = /*html*/ `
     <li>
     <h2> ${characters.name}  </h2> 
      <p><strong>Nickname:</strong> ${characters.nickname}</p>
      <img src="${characters.image}" alt="" style="width: 10%"   image">
            <p><strong>Occupation:</strong> ${characters.occupation}</p>
    <p><strong>Age:</strong> ${characters.age}</p>
      <p><strong>Voiced By:</strong> ${characters.voicedBy}</p>
      <p><strong>Gender:</strong> ${characters.gender}</p>
<p><strong>Religion:</strong> ${characters.religion}</p>
      <p><strong>Catch Phrase:</strong> ${characters.catchPhrase}</p>
      <p><strong>Hair Color:</strong> ${characters.hairColor}</p>
      <p><strong>School Grade:</strong> ${characters.schoolGrade}</p>
      <p><strong>Episodes:</strong> ${characters.episodes}</p>
            <p><strong>Appereances:</strong> ${characters.appereances}</p>
      <p><strong>First Appereance:</strong> ${characters.firstAppereance}</p>


    </li>`;
  list.insertAdjacentHTML("beforeend", html);
}
addCharacter(tolkienBlack);
