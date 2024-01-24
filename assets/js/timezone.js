function getUserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
  //return "Europe/London"
}

document.getElementById("timezone").innerHTML = "Your Timezone: <b>" + getUserTimezone() + "</b>";

function calculateDates(jsonData, userTimezone) {
  const userDates = {};

  jsonData.forEach(entry => {
    const { dayOfWeek, startTime, duration, name, profile, stream } = entry;

    // Parse start time
    const startTimeParts = startTime.split(':');
    const startDate = new Date();
    startDate.setUTCHours(Number(startTimeParts[0]), Number(startTimeParts[1]), 0, 0);

    // Adjust for user's timezone
    startDate.toLocaleString('de-DE', { timeZone: userTimezone });

    // Calculate the target date based on day of the week
    const currentDayOfWeek = startDate.getUTCDay();
    const daysUntilTargetDay = dayOfWeek - currentDayOfWeek + (dayOfWeek <= currentDayOfWeek ? 7 : 0);
    startDate.setUTCDate(startDate.getUTCDate() + daysUntilTargetDay);

    // Calculate end date based on duration
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);

    const dayKey = startDate.toLocaleDateString('en-US', { weekday: 'long' });

    if (!userDates[dayKey]) {
      userDates[dayKey] = [];
    }

    userDates[dayKey].push({
      start: startDate,
      end: endDate,
      name: name,
	  profile: profile,
	  stream: stream
    });
  });

  return userDates;
}

// Alle Termine werden in UTC + 0 eingegeben.

const fuchsdata = [
 
  { "dayOfWeek": 6, "startTime": "21:00", "duration": 2, "name": '<span style="color:#ff33ff;">Luminous Fox</span>', "profile": "https://www.mixcloud.com/LuminousFox","stream":"https://www.mixcloud.com/live/GothRadio" },
  // Add more entries as needed
];

const jsonData = [
 
  { "dayOfWeek": 6, "startTime": "21:00", "duration": 2, "name": '<span style="color:#ff33ff;">Luminous Fox</span>', "profile": "https://www.mixcloud.com/LuminousFox","stream":"https://www.mixcloud.com/live/GothRadio" },
  // Add more entries as needed
];

const userTimezone = getUserTimezone();
const calculatedDates = calculateDates(jsonData, userTimezone);

// Update the HTML with the calculated dates
const outputContainer = document.getElementById("outputContainer");

counter = 0;
for (const dayKey in calculatedDates) {
counter++;
  const dayDates = calculatedDates[dayKey];

 const h2wrapper = document.createElement("div");
 h2wrapper.id = "wrapper"+dayKey;
 h2wrapper.style="text-align:left;";
 
  const dayHeading = document.createElement("h2");
  dayHeading.id = dayKey;
  dayHeading.classList.add("mb-4");
  dayHeading.textContent = dayKey;
  //outputContainer.appendChild(dayHeading);
  outputContainer.appendChild(h2wrapper);
  //h2wrapper.appendChild(dayHeading);
  h2wrapper.innerHTML = '<span class="hazwei">//&nbsp;</span><span class="mb-4" id="'+dayKey+'" style="font-size:2em;">'+dayKey+'</span><span class="hazwei">&nbsp;//</span>';


let userLanguage = navigator.language || navigator.browserLanguage || 'en-US';


  dayDates.forEach(date => {
    const showInfo = document.createElement("p");
    showInfo.innerHTML = `<strong>${date.name}</strong><br>Start: ${date.start.toLocaleTimeString(userLanguage, { timeZone: userTimezone, hour: '2-digit', minute: '2-digit'  })}, <span class="data-end">End</span>: ${date.end.toLocaleTimeString(userLanguage, { timeZone: userTimezone, hour: '2-digit', minute: '2-digit' })}<br><a href="${date.profile}" target="_blank" rel="noreferrer"><span class="data-profile">Profile</span></a> || <a href="${date.stream}" target="_blank" rel="noreferrer" class="data-tunein">Tune in</a> `;
    outputContainer.appendChild(showInfo);
  });
}
