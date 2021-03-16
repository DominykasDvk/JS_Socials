// nuskaitytas parindinis elementas:
let main = document.querySelector('.flexblock');

// sukuriamas objektas informacijai laikyti:

let boxes = [
    // 1 veikejas
    {
        image: '<img src="profile-images/51.jpg" alt="rob" class="image"/>',
        vardas: 'Robert Langdon',
        streetTag: '<i class="fas fa-map-marker-alt"></i> 15 Eagle Way. AL10 8RD',
        decription:'Typical gamer. Friendly coffee practitioner. Alcohol buff.Extreme pop cultureaholic.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    // 2 veikejas
    {
        image: '<img src="profile-images/16.jpg" alt="Deanna" class="image"/>',
        vardas: 'Deanna I Martin',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Worthington, Ohio(OH), 43085',
        decription:'Zombie ninja. Wannabe internet buff.Proud introvert. Bacon expert. Social media trailblazer.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    // 3 veikejas
    {
        image: '<img src="profile-images/17.jpg" alt="Sammy" class="image"/>',
        vardas: 'Sammy M Stoll',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Wellsville, New York(NY), 14895',
        decription:'Social media junkie. Avid food nerd. Professional travel fan.Tv fanatic. Bacon geek. Web fanatic.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    //4 veikejas
    {
        image: '<img src="profile-images/46.jpg" alt="James" class="image"/>',
        vardas: 'James C Young',
        streetTag: '<i class="fas fa-map-marker-alt"></i> 2597 Meadowbrook Mall Road',
        decription:'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    //5 veikejas
    {
        image: '<img src="profile-images/34.jpg" alt="Claudette" class="image"/>',
        vardas: 'Claudette G Hann',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Philadelphia, Pennsylvania(PA), 19108',
        decription:'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    //6 veikejas
    {
        image: '<img src="profile-images/55.jpg" alt="Bruce" class="image"/>',
        vardas: 'Bruce K Collins',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Westhampton Beach, New York(NY), 11978',
        decription:'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    //7 veikejas
    {
        image: '<img src="profile-images/21.jpg" alt="Amber" class="image"/>',
        vardas: 'Amber C Pantoja',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Nashville, Tennessee(TN), 37209',
        decription:'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    },
    //8 veikejas
    {
        image: '<img src="profile-images/23.jpg" alt="Adriana" class="image"/>',
        vardas: 'Adriana E Hubert',
        streetTag: '<i class="fas fa-map-marker-alt"></i> Burlington, North Carolina(NC), 27215',
        decription:'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader.Incurable troublemaker. Unapologetic social media buff. Beer fanatic.',
        text: 'Get Connected',
        facebook: '<i class="fab fa-facebook-f"></i>',
        twitter: '<i class="fab fa-twitter"></i>',
        google: '<i class="fab fa-google"></i>',
        instagram: '<i class="fab fa-instagram"></i>'
    }
];

// aprasomi korteliu daliu pavadinimai:

let flexbox, image, vardas, streetTag, decription, text, socials;

//sukuriamas blokas kortelems:

function createElement(element) {
	let newElement = document.createElement(element);
	return newElement;
}

// iterpiami blokai su informacija pasinaudojant objekto duomenemis:

    boxes.forEach((vekejas) => {
        flexbox = createElement('div');
        image = createElement('div');
        vardas = createElement('p');
        streetTag = createElement('div');
        decription = createElement('p');
        text = createElement('p');
        socials = createElement('div');

        flexbox.classList.add('flexbox');
        main.appendChild(flexbox);

        image.innerHTML = `${vekejas.image}`;
        flexbox.appendChild(image);

        vardas.classList.add('heading');
        vardas.textContent = vekejas.vardas;
        flexbox.appendChild(vardas);

        streetTag.classList.add('addres');
        streetTag.textContent = vekejas.streetTag;
        streetTag.innerHTML = `${vekejas.streetTag}`;
        flexbox.appendChild(streetTag);

        decription.classList.add('text');
        decription.textContent = vekejas.decription;
        flexbox.appendChild(decription);

        text.classList.add('text');
        text.textContent = vekejas.text;
        flexbox.appendChild(text);

        socials.innerHTML = `${vekejas.facebook} ${vekejas.twitter} ${vekejas.google} ${vekejas.instagram}`;
        flexbox.appendChild(socials);
    });