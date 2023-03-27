"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("South Park is running!");

  const tolkienBlack = await getCharacter("https://raw.githubusercontent.com/Abdiox/South-park1/main/Data/southPark.json");
  showCharacter(tolkienBlack);

  const randy = await getCharacter("https://raw.githubusercontent.com/MadsFolkmann/Data-app-kode/main/data/randy.json");
  showCharacter(randy);

  const leopold = await getCharacter("https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json");
  showCharacter(leopold);

  const eric = await getCharacter("https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json");
  showCharacter(eric);

  const fosse = await getCharacter("https://raw.githubusercontent.com/frva0001/data/main/data/fosseMcDonald.json");
  showCharacter(fosse);

  const jimmy = await getCharacter("https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json");
  showCharacter(jimmy);

  const barack = await getCharacter("https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obamaChar.json");
  showCharacter(barack);

  const donald = await getCharacter("https://raw.githubusercontent.com/BurimJ/Southpark-Character/main/trump.json");
  showCharacter(donald);

  const tuong = await getCharacter("https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json");
  showCharacter(tuong);

  const kyle = await getCharacter("https://raw.githubusercontent.com/fili0727/Data-opgave/main/kyle.json");
  showCharacter(kyle);

  const towelie = await getCharacter("https://raw.githubusercontent.com/emsc0001/Towelie/main/Data/towelie.json");
  showCharacter(towelie);

  const paris = await getCharacter("https://raw.githubusercontent.com/Tunafan/southpark_db/main/South%20Park%20db/data/paris.json");
  showCharacter(paris);

  const jack = await getCharacter("https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json");
  showCharacter(jack);

  const jimbo = await getCharacter("https://raw.githubusercontent.com/Olivermadsenn/Data-afleverin-g/main/data/jimbo.json");
  showCharacter(jimbo);

  const scott = await getCharacter("https://raw.githubusercontent.com/luma0001/Data-V1-project/07f6ce395a9b87079df42f68b35483f405eb0c21/scott.json");
  showCharacter(scott);

  const abraham = await getCharacter("https://raw.githubusercontent.com/Loxiuz/Data_Aflevering/main/data/lincoln.json");
  showCharacter(abraham);

  const mrMackey = await getCharacter("https://raw.githubusercontent.com/MaxusTheOne/data_project/main/data/mrMackey.json");
  showCharacter(mrMackey);

  const kenny = await getCharacter("https://raw.githubusercontent.com/Mart0808DK/Data-fetch-projekt/main/kenny.json");
  showCharacter(kenny);

  const wendy = await getCharacter("https://raw.githubusercontent.com/osman-butt/data-app/main/wendy.json");
  showCharacter(wendy);

  const kennedy = await getCharacter("https://raw.githubusercontent.com/rarogbennu/SP/master/data/jfk.json");
  showCharacter(kennedy);

  const tomCruise = await getCharacter("https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json");
  showCharacter(tomCruise);

  const peter = await getCharacter("https://raw.githubusercontent.com/Kapalee/South-park-project/main/data/pcPrincipal.json");
  showCharacter(peter);

  const stan = await getCharacter("https://raw.githubusercontent.com/VARattleff/south-park-viktor/main/sp.json");
  showCharacter(stan);
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
