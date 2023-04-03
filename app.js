"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("South Park is running!");

  const allCharacters = await getCharacters("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  showAllCharacters(allCharacters);
}

// Fetch JSON filen
async function getCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

function showAllCharacters(characterList) {
  for (const character of characterList) {
    showCharacter(character);
  }
}

//Registrering af klik og indsætning i HTML

function showCharacter(character) {
  const html = /*html*/ `<article class = "grid-item">
  <img src=${character.image}>
  <h3>${character.name}</h3>
    <p>${character.occupation}</p>
  </article>
`;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document.querySelector("#characters article:last-child").addEventListener("click", characterCliked);
  function characterCliked() {
    showDialog(character);
  }
}

// Visning af characters
function showDialog(character) {
  //Main
  console.log(character);
  document.querySelector("#dialog_image").src = character.image;
  document.querySelector("#dialog_title").textContent = character.name;
  document.querySelector("#dialog_age").textContent = character.age;
  document.querySelector("#dialog_occupation").textContent = character.occupation;

  //Rest
  document.querySelector("#dialog_nickname").textContent = character.nickname;
  document.querySelector("#dialog_gender").textContent = character.gender;
  document.querySelector("#dialog_religion").textContent = character.religion;
  document.querySelector("#dialog_catchPhrase").textContent = character.catchPhrase;
  document.querySelector("#dialog_hairColor").textContent = character.hairColor;
  document.querySelector("#dialog_schoolGrade").textContent = character.schoolGrade;
  document.querySelector("#dialog_episodes").textContent = character.episodes;
  document.querySelector("#dialog_appearances").textContent = character.appearances;
  document.querySelector("#dialog_firstAppearance").textContent = character.firstAppearance;

  //Bottom
  document.querySelector("#dialog_name").textContent = character.name;
  document.querySelector("#dialog_voicedBy").textContent = character.voicedBy;

  // DIALOG ID:
  document.querySelector("#dialog_start").showModal();
}

// ADD CHARACTER FUNKTIONEN //

// const list = document.querySelector("#characters");

// function addCharacter(characters) {
//   const html = /*html*/ `
//      <li>
//            <p><strong>Name:</strong> ${characters.name}</p>
//       <p><strong>Nickname:</strong> ${characters.nickname}</p>
//       <img src="${characters.image}" alt="" style="width: 6%"   image">
//             <p><strong>Occupation:</strong> ${characters.occupation}</p>
//     <p><strong>Age:</strong> ${characters.age}</p>
//       <p><strong>Voiced By:</strong> ${characters.voicedBy}</p>
//       <p><strong>Gender:</strong> ${characters.gender}</p>
// <p><strong>Religion:</strong> ${characters.religion}</p>
//       <p><strong>Catch Phrase:</strong> ${characters.catchPhrase}</p>
//       <p><strong>Hair Color:</strong> ${characters.hairColor}</p>
//       <p><strong>School Grade:</strong> ${characters.schoolGrade}</p>
//       <p><strong>Episodes:</strong> ${characters.episodes}</p>
//             <p><strong>Appereances:</strong> ${characters.appereances}</p>
//       <p><strong>First Appereance:</strong> ${characters.firstAppereance}</p>

//     </li>`;
//   list.insertAdjacentHTML("beforeend", html);
// }
// addCharacter(tolkienBlack);
