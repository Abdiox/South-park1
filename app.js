"use strict";

window.addEventListener("load", start);

// const tolkienBlack = {
//   name: "Tolkien Black",
//   nickname: "Tupperware " + "," + " Tupper Mech MK III " + "," + " Blackie " + "," + " Congo ",
//   image: "svg/Token_Black2.png",
//   occupation: "Student",
//   age: "10 years old",
//   voicedBy: "Trey Parker" + "," + " Adrien Beard",
//   gender: "Male",
//   religion: "Roman Catholic",
//   catchPhrase: "null",
//   hairColor: "Black",
//   schoolGrade: "4th Grade",
//   episodes: "null",
//   appereances: "null",
//   firstAppereance: "Cartman Gets an Anal Probe ",
// };

async function start() {
  console.log("South Park is running!");

  const tolkienBlack = await getCharacter("https://raw.githubusercontent.com/Abdiox/South-park1/main/Data/southPark.json");
  showCharacter(tolkienBlack);

  const randy = await getCharacter("https://raw.githubusercontent.com/MadsFolkmann/Data-app-kode/main/data/randy.json");
  showCharacter(randy);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(characters) {
  const html = /*html*/ `<article class = "grid-item">
  <img src=${characters.image}>
  <p>${characters.name}</p>
    <p>${characters.occupation}</p>
  </article>
`;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document.querySelector("#characters article:last-child").addEventListener("click", characterCliked);
  function characterCliked() {
    showDialog(characters);
  }
}

function showDialog(characters) {
  //Main
  console.log(characters);
  document.querySelector("#dialog_image").src = characters.image;
  document.querySelector("#dialog_title").textContent = characters.name;
  document.querySelector("#dialog_age").textContent = characters.age;
  document.querySelector("#dialog_occupation").textContent = characters.occupation;

  //Rest
  document.querySelector("#dialog_nickname").textContent = characters.nickname;
  document.querySelector("#dialog_gender").textContent = characters.gender;
  document.querySelector("#dialog_religion").textContent = characters.religion;
  document.querySelector("#dialog_catchPhrase").textContent = characters.catchPhrase;
  document.querySelector("#dialog_hairColor").textContent = characters.hairColor;
  document.querySelector("#dialog_schoolGrade").textContent = characters.schoolGrade;
  document.querySelector("#dialog_episodes").textContent = characters.episodes;
  document.querySelector("#dialog_appearances").textContent = characters.appearances;
  document.querySelector("#dialog_firstAppearance").textContent = characters.firstAppearance;

  document.querySelector("#dialog_name").textContent = characters.name;
  document.querySelector("#dialog_voicedBy").textContent = characters.voicedBy;

  // DIALOG ID:
  document.querySelector("#dialog_start").showModal();

  //   document.querySelector("#dialog").classList.remove("hidden");
  //   document.querySelector("#btn_close").addEventListener("click", closeDialog);
}

// function closeDialog() {
//   document.querySelector("#btn_close").addEventListener("click", closeDialog);
//   document.querySelector("#dialog").classList.add("hidden");
// }

// SHOW CHARACTER FUNKTIONEN //

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

// EN MÅDE AT SÆTTE FUNKTIONERNE PÅ //

// function showAllCharacters(list) {
//     showCharacter(character);
// }
