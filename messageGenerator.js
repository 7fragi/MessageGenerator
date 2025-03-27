//Array of different pieces of data
const subjects = ['Kendrick Lamar', 'Sade', 'Beyoncé', 'Herbert Grönemeyer'];
const actions = ['is a lyrical genius', 'will do a Europe tour in 2026', 'drops a new album next friday'];
const consequences = ['but shockingly the media is silent about it.', 'that causes fans to be hysterical!', 'whilst losing every single race in Mario Kart Double Dash.'];

//Function to generate a random message
const generateMessage = () => {
const subject = subjects[Math.floor(Math.random() * subjects.length)]; //subjects.length outputs 3 (since there are 3 Elements in the array subjects)
const action = actions[Math.floor(Math.random() * actions.length)];
const consequence = consequences[Math.floor(Math.random() * consequences.length)];
return `${subject} ${action} ${consequence}`;
};

//Run the program
console.log(generateMessage());