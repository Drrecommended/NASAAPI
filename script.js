const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector(".save-confirmed");
const loader = document.querySelector(".loader");

// NASA API
const count = 10;
const apiKey = "He6Tx5dxSGHnHohdNq76tBE9aI6wMZSrWebnMNMx";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

function updateDOM() {
  resultsArray.forEach((result) => {
    console.log(result)
    // card container
    const card = document.createElement("div");
    card.classList.add("card");
    // link
    const link = document.createElement("a");
    link.href = result.hdurl;
    link.title = "View Full Image";
    link.target = "_blank";
    //image
    const image = document.createElement("img");
    image.src = result.url;
    image.alt = "NASA Picture of the Day";
    image.loading = "lazy";
    image.classList.add("card-img-top");
    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //card title
    const cardTitle = document = createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = result.title;
    //save text
    const saveText = document.createElement("p");
    saveText.classList.add("clickable");
    saveText.textContent = "Add to Favorites";
    //card text
    const cardText = document.createElement("p");
    cardText.textContent = result.explantion;
    //footer container
    const footer = document.createElement("small");
    footer.classList.add("text-muted");
    // date
    const date = document.createElement("strong");
    date.textContent = result.date;
    //copyright
    const copyright = document.createElement("span");
    copyright.textContent = ` ${result.copyright}`;
    //append
    footer.append(date, copyright);
    cardBody.append(cardTitle, cardText, saveText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    console.log(card);
  });
}

// Get images from Nasa Api

async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    console.log(response);
    resultsArray = await response.json();
    updateDOM();
  } catch (error) {
    //catch error
  }
}

//On Load
getNasaPictures();
