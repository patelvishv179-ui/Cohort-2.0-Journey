const users = [
  {
    fullName: "MS Dhoni",
    image: "https://documents.iplt20.com/ipl/IPLHeadshot2026/57.png",
    profession: "Cricketer",
    description: "Former Indian captain known for calm leadership and match finishing abilities.",
    tags: ["Cricket", "Leadership", "Fitness"]
  },

  {
    fullName: "Elon Musk",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    profession: "Entrepreneur",
    description: "CEO of Tesla and SpaceX working on electric vehicles, AI, and space technology.",
    tags: ["Technology", "Business", "Innovation"]
  },

  {
    fullName: "Emma Watson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP9Wmu0UL0AHInngjJAVQPspjRZy64Yaz9Mj3XiCpniiyImsh-nQV87bbXSD4nlCc-6N4ZSXM2Pdb2Ms1BdlCgHCKHq05BCJu7nUfgg&s=10",
    profession: "Actress",
    description: "British actress and activist famous for movies and women empowerment campaigns.",
    tags: ["Movies", "Fashion", "Activism"]
  },

  {
    fullName: "Cristiano Ronaldo",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    profession: "Footballer",
    description: "Legendary football player known for speed, discipline, and goal-scoring skills.",
    tags: ["Football", "Fitness", "Sports"]
  },

  {
    fullName: "Mark Zuckerberg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsf8ZUauJ8rgmRL1JZthzqLw2qFhlw4HQZ--kWzD26i_-y6-EE1t5_brcM6taKE0QfQRgGRGxlKnF5_jI81VUMT-MG-eLsDdlQbFthDg&s=10",
    profession: "Software Engineer",
    description: "Co-founder of Facebook and an important figure in social media and AI.",
    tags: ["Coding", "Startup", "AI"]
  },

  {
    fullName: "Sundar Pichai",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png",
    profession: "CEO of Google",
    description: "Technology leader known for leading Google and advancing AI technologies.",
    tags: ["Technology", "Leadership", "AI"]
  },

  {
    fullName: "Bill Gates",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
    profession: "Entrepreneur",
    description: "Co-founder of Microsoft and philanthropist focused on global health and education.",
    tags: ["Microsoft", "Business", "Technology"]
  },

  {
    fullName: "Steve Jobs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aJkMTZUY7w1TjiBFpT7vOPexmcR9psCFpg&s",
    profession: "Businessman",
    description: "Co-founder of Apple known for revolutionizing smartphones and personal computing.",
    tags: ["Apple", "Innovation", "Design"]
  }
];

let sum = '';

users.forEach((val)=>{

  sum = sum + `<div class="card">
            <img src="${val.image}" class="image" alt="">
            <h1 class="fullname">${val.fullName}</h1>
            <h2 class="profession">${val.profession}</h2>
            <p class="description">${val.description}</p>
        </div>`;

});

let main = document.querySelector("main");
main.innerHTML = sum;

//  ====================== METHOD 2 ===================== //

// let main = document.querySelector("main");

// for(let i=0; i<users.length; i++){

//   let card = document.createElement("div");
//   let img = document.createElement("img");
//   let h1 = document.createElement("h1");
//   let h2 = document.createElement("h2");
//   let p = document.createElement("p");

//   card.classList.add("card");
//   img.classList.add("image");
//   h1.classList.add("fullname");
//   h2.classList.add("profession");
//   p.classList.add("discription");

//   img.src = users[i].image;
//   h1.textContent = users[i].fullName;
//   h2.textContent = users[i].profession;
//   p.textContent = users[i].description;

//   main.append(card);
//   card.appendChild(img);
//   card.appendChild(h1);
//   card.appendChild(h2);
//   card.appendChild(p);

// }
