// Schedule Array
const scheduleData = [
{ day: "Monday", location: "High Park", time: "6:30 PM", distance: "5 km" },
{ day: "Wednesday", location: "Waterfront Trail", time: "6:45 PM", distance: "6 km" },
{ day: "Friday", location: "Trinity Bellwoods Park", time: "6:30 PM", distance: "5 km" }
];

// Event Array
const eventData = [
{ title: "Charity Fun Run", date: "2025-11-05", location: "Toronto Island", description: "Support local charities while enjoying a scenic run." },
{ title: "Halloween Costume Run", date: "2025-10-31", location: "High Park", description: "Dress up in your favorite costume and join the fun!" },
{ title: "Sunset Social Run", date: "2025-11-12", location: "Waterfront Trail", description: "Relax and socialize after the run with refreshments." }
];

// Generate Schedule Cards
const scheduleList = document.getElementById('scheduleList');
if(scheduleList){
scheduleData.forEach(run => {
let card = document.createElement('div');
card.className = 'card';
card.innerHTML = `<h3>${run.day}</h3>
<p><strong>Location:</strong> ${run.location}</p>
<p><strong>Time:</strong> ${run.time}</p>
<p><strong>Distance:</strong> ${run.distance}</p>`;
scheduleList.appendChild(card);
});
}

// Generate Event Cards
const eventList = document.getElementById('eventList');
let eventCounter = 0;
if(eventList){
eventData.forEach(event => {
let card = document.createElement('div');
card.className = 'card';
card.innerHTML = `<h3>${event.title}</h3>
<p><strong>Date:</strong> ${event.date}</p>
<p><strong>Location:</strong> ${event.location}</p>
<p>${event.description}</p>`;
eventList.appendChild(card);
eventCounter++;
});
document.getElementById('eventCounter').textContent = eventCounter;
}
