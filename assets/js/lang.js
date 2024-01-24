
const translations = {
  en: {
    timezone: "Your Timezone: ",
	
	day1: "Mondays",
	day2: "Tuesdays",
	day3: "Wednesdays",
	day4: "Thursdays",
	day5: "Fridays",
	day6: "Saturdays",
	day7: "Sundays",
	
	about: "Info",
	contact: "Contact",
	contacth2: '<span class="color">Contact</span>',
	contactinfo: '	<p class="mb-4"> Integer erat turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat at. </p> <div> Email: <a href="mailto:info@company.com" class="tm-link-white">info@company.com</a> </div> <div class="tm-mb-45"> Tel: <a href="tel:0100200340" class="tm-link-white">010-020-0340</a> </div><div class="map-outer"> <div class="gmap-canvas">  </div> </div>',
	contactme: "Contact me",
	contactmeper: 'You can reach me via email at: <p class="m" style="margin-top:1em;"></p>',
	djschedule: '<span class="color">Broadcast Schedule</span>',
	home: "Home",
	profile: "Profile",
	schedule: "Schedule",
	tunein: "Tune In",
	end: "End",
	picturetext: 'Luminous Fox, Founder of <i>GothRadio</i>',
  },
  de: {
    timezone: "Deine Zeitzone: ",
	
	day1: "Montags",
	day2: "Dientags",
	day3: "Mittwochs",
	day4: "Donnerstags",
	day5: "Freitags",
	day6: "Samstags",
	day7: "Sonntags",
	
	about: "Info",
	contact: "Kontakt",
	contacth2: '<span class="color">Kontakt</span>',
	contactinfo: '	<p class="mb-4"> Integer erat turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat at. </p> <div> Email: <a href="mailto:info@company.com" class="tm-link-white">info@company.com</a> </div> <div class="tm-mb-45"> Tel: <a href="tel:0100200340" class="tm-link-white">010-020-0340</a> </div><div class="map-outer"> <div class="gmap-canvas">  </div> </div>',
	contactme: "Kontakt",
	contactmeper: '<p>Verantwortlich für den Betrieb des Radios:</p><p>Luminous Fox</p><p class="m" style="margin-top:1em;"></p><hr>Jede*r DJ bei uns handelt für die eigenen Radiosendungen eigenverantwortlich.',
	djschedule: '<span class="color">Sendeplan</span>',
	home: "Start",
	profile: "Profil",
	schedule: "Sendeplan",
	tunein: "Stream starten",
	end: "Ende",
	welcometext: '<h2 class="mb-4 highlight">Willkommen bei Luminous Fox</h2><p class="mb-4">This HTML template has a motion video background loop which is provided by <a rel="sponsored" href="https://getfreepictures.com" target="_blank">Get Free Pictures</a>. This is one-page responsive layout for your websites. Feel free to use this for a commercial purpose. </p><p class="mb-0">You are not permitted to redistribute this template on your Free CSS collection websites. Please <a rel="nofollow" href="https://templatemo.com/contact" target="_blank">contact us</a> for more information. </p>',
	picturetext: 'Luminous Fox, Gründer von <i>GothRadio</i>',
	
	
  },
  // Add more languages as needed
};


const translation = translations[userLanguage.split('-')[0]] || translations['en'];



function fetchtranslation(f,g){
	console.log(langu);
	let check = document.getElementById(f);
	if(check){
 fetch(atob('YXNzZXRzL2xhbmcv')+g+'_'	+langu)
        .then(response => response.text())
        .then(content => {
			 content = content.replace(/\n/g, '<br>');
            check.innerHTML = content;
        })
        .catch(error => console.error('Error fetching file:', error));
}
}

timezone = getUserTimezone();
if(langu=="de"){timezone = timezone.replace("Europe","Europa");}

document.getElementById("timezone").innerHTML = `${translation.timezone}<b>${timezone}</b>`;


let monday = document.getElementById("Monday");
let tuesday = document.getElementById("Tuesday");
let wednesday = document.getElementById("Wednesday");
let thursday = document.getElementById("Thursday");
let friday = document.getElementById("Friday");
let saturday = document.getElementById("Saturday");
let sunday = document.getElementById("Sunday");

let djschedule = document.getElementById("data-djschedule");


if(monday){monday.innerHTML = `${translation.day1}`;}
if(tuesday){tuesday.innerHTML = `${translation.day2}`;}
if(wednesday){wednesday.innerHTML = `${translation.day3}`;}
if(thursday){thursday.innerHTML = `${translation.day4}`;}
if(friday){friday.innerHTML = `${translation.day5}`;}
if(saturday){saturday.innerHTML = `${translation.day6}`;}
if(sunday){sunday.innerHTML = `${translation.day7}`;}

if(djschedule){djschedule.innerHTML = `${translation.djschedule}`;}

let home = document.getElementById("home");
if(home){home.innerHTML = `${translation.home}`;}

let schedule = document.getElementById("schedule");
if(schedule){schedule.innerHTML = `${translation.schedule}`;}

let about = document.getElementById("about");
if(about){about.innerHTML = `${translation.about}`;}

let contact = document.getElementById("contact");
if(contact){contact.innerHTML = `${translation.contact}`;}

let welcometext = document.getElementById("welcometext");
if(welcometext){fetchtranslation("welcometext","welcome");}

let picturetext = document.getElementById("picturetext");
if(picturetext){picturetext.innerHTML = `${translation.picturetext}`;}

let contactme = document.getElementById("contactme");
if(contactme){contactme.innerHTML = `${translation.contactme}`;}

let contactinfo = document.getElementById("contactinfo");
if(contactinfo){contactinfo.innerHTML = `${translation.contactinfo}`;}

let infotext = document.getElementById("infotext");
if(infotext){fetchtranslation("infotext","infotext");}

let autobio = document.getElementById("autobio");
//if(autobio){fetchtranslation("autobio","luminousfox");}

let goodies = document.getElementById("goodies");
if(goodies){fetchtranslation("goodies","goodies");}

let contacth2 = document.getElementById("contacth2");
if(contacth2){contacth2.innerHTML = `${translation.contacth2}`}

let contactmeper = document.getElementById("contactmeper");
if(contactmeper){contactmeper.innerHTML = `${translation.contactmeper}`}




elements = document.querySelectorAll('.data-profile');
elements.forEach(element => {
  element.innerHTML = `${translation.profile}`;
  
});

elements = document.querySelectorAll('.data-tunein');
elements.forEach(element => {
  element.innerHTML = `${translation.tunein}`;
  
});

elements = document.querySelectorAll('.data-end');
elements.forEach(element => {
  element.innerHTML = `${translation.end}`;
  
});


/*
mid = document.getElementById("m")
if(mid){
	m = "bHVtaW5vdXNmb3hAcHJvdG9uLm1l";
	document.getElementById("m").innerHTML = atob(m);
	document.getElementById("m").href = 
	return m;
}
*/

m = "bHVtaW5vdXNmb3hAcHJvdG9uLm1l";
mu = '<a href="'+atob("bWFpbHRvOg")+atob(m)+'" target="_blank" rel="noreferrer">'+atob(m)+'</a>'
elements = document.querySelectorAll('.m');
elements.forEach(element => {
  element.innerHTML = `${mu}`;
  
});