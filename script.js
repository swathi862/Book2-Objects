//Lightning Exercise: All About Me
var firstName = "Swathi";
var lastName = "Mukkamala";
var age = 22;
var likesTravel = true;

console.log(firstName, lastName, age, likesTravel);

//Arrays

var choreList = ["take out the trash", "clean dishes", "wash the clothes"];

console.log(choreList);

var crazyArray = [1, 2, 3,true, false, "hi"];

//Lightning Exercise: Favorite Movies

var movieArray = ["Love Rosie", "Captain America", "Secret Garden"];

    for (var i = 0; i < movieArray.length; i++){
        console.log(movieArray[i]);
    }

//Objects

var Mia = {
    species: "dog",
    likesNoise: true,
    age: .7,
    toyArray: ["alligator", "bone", "sheep"],
    peopleObject: {
        mom: "Cas",
        dad: "Tommy"
    }
}

// console.log(Mia.peopleObject.mom)

console.log(Mia["peopleObject"]["dad"]);

//Lightning Exercise: Objects

var meObject = {
    firstName: "Swathi",
    lastName: "Mukkamala",
    age: 22,
    likesTravel: true,
    favoriteMovies: ["Love Rosie", "Captain America", "Secret Garden"]
}

console.log(meObject);

//dot notation

// console.log(meObject.firstName);
// console.log(meObject.firstName);

// console.log(meObject.favoriteMovies[2]);

//bracket notation

// console.log(meObject["age"]);
// console.log(meObject["favoriteMovies"][0]);

// Lightning Exercise: dot notation

var wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents[0]);
console.log(wardrobe.contents[1]);
console.log(wardrobe.contents[2]);
console.log(wardrobe.contents[3]);
console.log(wardrobe.contents[4]);
console.log(wardrobe.depth);
console.log(wardrobe.width);

//Lightning Exercise: dot and square bracket notation

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
// console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding.squareFeet);
// console.log(empireStateBuilding["constructionDate"]);
// console.log(empireStateBuilding["cost"]);
// console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);
// console.log(empireStateBuilding["architect"]);

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

var address = "address";
var date = "constructionDate";
var money = "cost";
var owner = "owner";
var person = "architect";

console.log(empireStateBuilding[address]);
console.log(empireStateBuilding[date]);
console.log(empireStateBuilding[money]);
console.log(empireStateBuilding[owner]);
console.log(empireStateBuilding[person]);

//Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

var car = {
    color: "red",
    year: 2015,
    make: "Ford",
    model: "Mustang"
}

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

var shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

var familyOfFour = {
    familyMembers: [{
        name:"Bill",
        age:45,
    },
    {
        name:"Sue",
        age:43,
    },
    {
        name:"Jill",
        age:7,
    },    
    {
        name:"Jack",
        age:7,
    }
    ]
}

console.log(familyOfFour.familyMembers[0].name);
console.log(familyOfFour["familyMembers"][0]["age"]);

var nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
for(var i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++){
    console.log(nashvilleSoftwareSchool.instructors.partTime[i])
}

for(var i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++){
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

//Practice: Accessing Proprty Values
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);

//Lightning Exercise
var likesToTravel = true;
if (likesToTravel === true){
    console.log("Bon voyage!");
}
else{
    console.log("Enjoy your couch!")
}

//Lightning Exercise
var favoriteFood = "ice-cream";

if (favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls"){
    console.log("Congratulations! You have excellent taste!");
}
else{
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
}

//Lightning Exercise: Psychotic Bird

for (var i = 0; i < 100; i++){
    console.log("TWEET, TWEET");
}

//Lightning Exercise: Days of the Week

var weekArray = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (var i = 0; i < weekArray.length; i++){
    console.log(weekArray[i]);
}

//----------------------------------------------------

//Foundations: Conditionals
//Practice 1: Check Your Math
if (1 + 1 > 5){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

if (4*5 <= 20){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

if(6-2 >= 0){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

//Practice 2: Dog People vs Cat People
var likesDogs = true;

if (likesDogs === true){
    console.log("You're a dog person!");
}
else{
    console.log("You're a cat person!");
}

//Practice 3: Generation Gaps
var birthYear = 1998;

if (1912 <= birthYear && birthYear <= 1921){
    console.log("You're part of the Depression Era. You tend to tend to be conservative, compulsive savers,maintain low debt and use more secure financial products like CDs versus stocks. You tend to feel a responsibility toward leaving a legacy to your children. Other characteristics include being patriotic, orienting toward work before pleasure, respect for authority, and having a sense of moral obligation.");
}
else if (1922 <= birthYear && birthYear <= 1927){
    console.log("You're part of the World War II generation. You shared a common goal of defeating the Axis powers with your comrades.");
}
else if(1928 <= birthYear && birthYear <= 1945){
    console.log("You're part of the Post-War Cohort. You had significant opportunities in jobs and education as the War ended and a post-war economic boom struck America. However, the growth in Cold War tensions, the potential for nuclear war and other never before seen threats led to levels of discomfort and uncertainty throughout the generation. Members of this group value security, comfort, and familiar, known activities and environments.");
}
else if (1946 <= birthYear && birthYear <= 1954){
    console.log("You're part of the Boomers I or the Baby Boomers generation. The first Boomer segment is bounded by the Kennedy and Martin Luther King assassinations, the Civil Rights movements and the Vietnam War. You were likley in or protested the War. You also likely had good economic opportunities and were largely optimistic about the potential for America and their own lives, the Vietnam War notwithstanding.");
}
else if (1955 <= birthYear && birthYear <= 1965){
    console.log("You're part of the Boomers II generation or Generation Jones. Unfortunately, your generation is the first of many to have suffered from the long shadow cast by Boomers I. This first post-Watergate generation lost much of its trust in government and optimistic views the Boomers I maintained. Economic struggles including the oil embargo of 1979 reinforced a sense of “I’m out for me” and narcissism and a focus on self-help and skepticism over media and institutions is representative of attitudes of this cohort. While Boomers I had Vietnam, Boomers II had AIDS as part of their rites of passage. The youngest members of the Boomer II generation in fact did not have the benefits of the Boomer I class as many of the best jobs, opportunities, housing etc. were taken by the larger and earlier group.");
}
else if (1966 <= birthYear && birthYear <= 1976){
    console.log("You're part of Generation X! Sometimes referred to as the “lost” generation, this was the first generation of “latchkey” kids, exposed to lots of daycare and divorce.")
}
else if (1977 <= birthYear && birthYear <= 1994){
    console.log("You're a part of Generation Y, known as Echo Boomers or Millenniums.");
}
else if (1995 <= birthYear && birthYear <= 2012){
    console.log("You're part of Generation Z! You likely have a highly sophisticated media and computer environment and will be way more Internet savy than your Gen Y forerunners. K bye!")
}
else{
    console.log("IDK what you are man...You were born in a time before we started categorzing society like this. Or we just don't have a name for ya yet.")
}

//Practice 4: Greetings
 var person = {
     name: "Swathi",
     pLanguage: "English"
 }

 if (person.pLanguage === "English"){
     console.log(`Hello, ${person.name}!`);
 }
 else if (person.pLanguage === "Spanish"){
     console.log(`¡Hola, ${person.name}!`);
 }
 else if(person.pLanguage === "French"){
    console.log(`Bonjour, ${person.name}!`);
 }
 else{
    console.log(`Hello, ${person.name}!`);
 }

 //Practice 5: Grandma's Kitchen
 var time = "1:00 PM";
 var isHungry = true;

 if (time === "7:30 AM" && isHungry === true){
    console.log("Time for breakfast!");
 }
 else if (time === "712:00 PM" && isHungry === true){
    console.log("Time for lunch!");
 }
 else if (time === "7:00 PM" || time === "8:00 PM" && isHungry === true){
    console.log("Time for dinner!");
 }
 else if (isHungry === true){
    console.log("Time for a snack!");
 }
 else{
    console.log("Have a cookie anyway!");
 }

 //Practice 6: Student Grades
 var grade = 93;

 if (grade >= 0 && grade <= 69){
     console.log("You got an F")
 }
 else if (grade >= 70 && grade <= 76){
    console.log("You got a D")
}
 else if (grade >=77 && grade <= 83){
    console.log("You got a C")
}
 else if (grade >= 84 && grade <= 92){
    console.log("You got a B")
}
 else if (grade >= 93 && grade <= 100){
    console.log("You got an A")
}

//Conditionals: Challenge- Weather data
var weatherData = {
    "query": {
     "count": 1,
     "created": "2018-12-06T20:52:22Z",
     "lang": "en-US",
     "results": {
      "channel": {
       "units": {
        "distance": "mi",
        "pressure": "in",
        "speed": "mph",
        "temperature": "F"
       },
       "title": "Yahoo! Weather - Nome, AK, US",
       "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
       "description": "Yahoo! Weather for Nome, AK, US",
       "language": "en-us",
       "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
       "ttl": "60",
       "location": {
        "city": "Nome",
        "country": "United States",
        "region": " AK"
       },
       "wind": {
        "chill": "14",
        "direction": "68",
        "speed": "36"
       },
       "atmosphere": {
        "humidity": "90",
        "pressure": "989.0",
        "rising": "0",
        "visibility": "11.0"
       },
       "astronomy": {
        "sunrise": "11:38 am",
        "sunset": "4:7 pm"
       },
       "image": {
        "title": "Yahoo! Weather",
        "width": "142",
        "height": "18",
        "link": "http://weather.yahoo.com",
        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
       },
       "item": {
        "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
        "lat": "64.499474",
        "long": "-165.405792",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
        "condition": {
         "code": "15",
         "date": "Thu, 06 Dec 2018 11:00 AM AKST",
         "temp": "28",
         "text": "Blowing Snow"
        },
        "forecast": [
         {
          "code": "16",
          "date": "06 Dec 2018",
          "day": "Thu",
          "high": "29",
          "low": "25",
          "text": "Snow"
         },
         {
          "code": "26",
          "date": "07 Dec 2018",
          "day": "Fri",
          "high": "27",
          "low": "22",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "08 Dec 2018",
          "day": "Sat",
          "high": "22",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "34",
          "date": "09 Dec 2018",
          "day": "Sun",
          "high": "7",
          "low": "-11",
          "text": "Mostly Sunny"
         },
         {
          "code": "28",
          "date": "10 Dec 2018",
          "day": "Mon",
          "high": "3",
          "low": "-11",
          "text": "Mostly Cloudy"
         },
         {
          "code": "28",
          "date": "11 Dec 2018",
          "day": "Tue",
          "high": "10",
          "low": "2",
          "text": "Mostly Cloudy"
         },
         {
          "code": "26",
          "date": "12 Dec 2018",
          "day": "Wed",
          "high": "9",
          "low": "5",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "13 Dec 2018",
          "day": "Thu",
          "high": "14",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "30",
          "date": "14 Dec 2018",
          "day": "Fri",
          "high": "13",
          "low": "-3",
          "text": "Partly Cloudy"
         },
         {
          "code": "30",
          "date": "15 Dec 2018",
          "day": "Sat",
          "high": "7",
          "low": "-3",
          "text": "Partly Cloudy"
         }
        ],
        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
        "guid": {
         "isPermaLink": "false"
        }
       }
      }
     }
    }
   }


for (var i = 0; i < 3; i++){

    // Challenge 1: If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.

    if ((weatherData.query.results.channel.item.forecast.every(item => item.high > 85)) === true){
        console.log("It's going to be hot as heck all week!");
    }

    // Challenge 2: If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.

    else if ((weatherData.query.results.channel.item.forecast.every(item => item.high < 40)) === true){
        console.log("It's going to be cold as heck all week!");
    }
}

// Challenge 3: If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")

for (var i = 0; i < weatherData.query.results.channel.item.forecast.length; i++){
    if (weatherData.query.results.channel.item.forecast[i].low < 20){
        console.log(`${weatherData.query.results.channel.item.forecast[i].day} will be cold as heck!`)
    }
}

// Challenge 4: If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")

for (var i = 0; i < weatherData.query.results.channel.item.forecast.length; i++){
     if (weatherData.query.results.channel.item.forecast[i].high > 95){
        console.log(`${weatherData.query.results.channel.item.forecast[i].day} will be hot as heck!`)
    }
}

//How to do Challenge 1 + 2 for all 10 days? Look at Biggest Grades exercise

// for (var i = 0; i < weatherData.query.results.channel.item.forecast.length; i++){

//     var result = weatherData["query"]["results"]["channel"]["item"]["forecast"][i]["high"]

//        if (result < 40){
//            console.log("It's going to be cold as heck all week!")
//        }
//    }

//    console.log(weatherData["query"]["results"]["channel"]["item"]["forecast"][0]["high"]);

// Foundations: Loops

//Practice 1: Student Names
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];

for (var i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}

//Practice 2: Interests
var interests = ["reading", "sleeping", "crafting", "binge-watching TV shows", "spontaneous adventures"];

for (var i = 0; i < interests.length; i++){
    console.log(`One of my interests is: ${interests[i]}.`);
}

//Practice 3: Favorite Interest
for (var i = 0; i < interests.length; i++){
    if (interests[i] === "sleeping"){
    console.log(`My absolute favorite interest is: ${interests[i]}.`);
    }
    else{
    console.log(`One of my interests is: ${interests[i]}.`);
    }
}

//Practice 5: Harry Potter Titles
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (var i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
}

//Practice 6: Student Grades
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (var i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69){
        console.log("You got an F")
    }
    else if (grades[i] >= 70 && grades[i] <= 76){
       console.log("You got a D")
   }
    else if (grades[i] >=77 && grades[i] <= 83){
       console.log("You got a C")
   }
    else if (grades[i] >= 84 && grades[i] <= 92){
       console.log("You got a B")
   }
    else if (grades[i] >= 93 && grades[i] <= 100){
       console.log("You got an A")
   }
}

//Practice 7: 2, 4, 6, 8, - Who do we appreciate?! cheer

var i = 2;

var sentence = "";
while (i < 10){
   sentence = `${sentence} ${i}!`;
   i = i + 2;
}

console.log(`${sentence} Who do we appreciate?!`);

//Practice 8: Student Grades Take Two
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

var high = grades[0];
var low = grades[0];

for (var i = 0; i <=grades.length; i++){
    // if (low !== 0 && grades[i] < low){
    //     low = grades [i];
    // }
    // else if (high !== 0 && grades[i] > high){
    //     high = grades[i];
    // }
    // else if(low === 0 || high === 0){
    //     low = grades[i];
    //     high = grades[i];
    // }
    if (grades[i] < low){
        low = grades [i];
    }
    else if (grades[i] > high){
        high = grades[i];
    }
}
console.log(`${high} is the highest grade`);
console.log(`${low} is the highest grade`);

//Practice 9: Interrupting Cow
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

var sentence2 = "";

for (var i = 0; i < sentenceArray.length; i ++){

    if (i % 3 === 0 && i !== 0){
        sentence2 = sentence2 + ` MOOOOOOO ${sentenceArray[i]}`;
    }
    else{
        sentence2 = sentence2 + ` ${sentenceArray[i]}`;
    }
}
    console.log(sentence2);

//Practice 10: Student Grades

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;

for (var i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69){
        countF ++;
    }
    else if (grades[i] >= 70 && grades[i] <= 76){
       countD ++;
   }
    else if (grades[i] >=77 && grades[i] <= 83){
       countC ++;
   }
    else if (grades[i] >= 84 && grades[i] <= 92){
       countB ++;
   }
    else if (grades[i] >= 93 && grades[i] <= 100){
       countA ++;
   }
}

console.log(`${countA} students got A's.`);
console.log(`${countB} students got B's.`);

var counter = [countA, countB, countC, countD, countF];

var common = 0;

for (var i = 0; i <=counter.length; i++){
    if (counter[i] > common){
        common = counter[i];
    }
}
    if (common === countA){
        common = "A";
    }
    else if (common === countB){
        common = "B";
    }
    else if (common === countC){
        common = "C";
    }
    else if (common === countD){
        common = "D";
    }
    else if (common === countF){
        common = "F";
    }

console.log(`${common} is the most common letter grade.`)

var total = 0;

for (var i = 0; i < grades.length; i++){
    total = total + grades[i];
}

var average = total / grades.length;

console.log(`${average} is the average percentage grade in the class.`);

//Challenge #1: Weather Data
var weatherData = {
    "query": {
     "count": 1,
     "created": "2018-12-06T20:52:22Z",
     "lang": "en-US",
     "results": {
      "channel": {
       "units": {
        "distance": "mi",
        "pressure": "in",
        "speed": "mph",
        "temperature": "F"
       },
       "title": "Yahoo! Weather - Nome, AK, US",
       "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
       "description": "Yahoo! Weather for Nome, AK, US",
       "language": "en-us",
       "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
       "ttl": "60",
       "location": {
        "city": "Nome",
        "country": "United States",
        "region": " AK"
       },
       "wind": {
        "chill": "14",
        "direction": "68",
        "speed": "36"
       },
       "atmosphere": {
        "humidity": "90",
        "pressure": "989.0",
        "rising": "0",
        "visibility": "11.0"
       },
       "astronomy": {
        "sunrise": "11:38 am",
        "sunset": "4:7 pm"
       },
       "image": {
        "title": "Yahoo! Weather",
        "width": "142",
        "height": "18",
        "link": "http://weather.yahoo.com",
        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
       },
       "item": {
        "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
        "lat": "64.499474",
        "long": "-165.405792",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
        "condition": {
         "code": "15",
         "date": "Thu, 06 Dec 2018 11:00 AM AKST",
         "temp": "28",
         "text": "Blowing Snow"
        },
        "forecast": [
         {
          "code": "16",
          "date": "06 Dec 2018",
          "day": "Thu",
          "high": "29",
          "low": "25",
          "text": "Snow"
         },
         {
          "code": "26",
          "date": "07 Dec 2018",
          "day": "Fri",
          "high": "27",
          "low": "22",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "08 Dec 2018",
          "day": "Sat",
          "high": "22",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "34",
          "date": "09 Dec 2018",
          "day": "Sun",
          "high": "7",
          "low": "-11",
          "text": "Mostly Sunny"
         },
         {
          "code": "28",
          "date": "10 Dec 2018",
          "day": "Mon",
          "high": "3",
          "low": "-11",
          "text": "Mostly Cloudy"
         },
         {
          "code": "28",
          "date": "11 Dec 2018",
          "day": "Tue",
          "high": "10",
          "low": "2",
          "text": "Mostly Cloudy"
         },
         {
          "code": "26",
          "date": "12 Dec 2018",
          "day": "Wed",
          "high": "9",
          "low": "5",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "13 Dec 2018",
          "day": "Thu",
          "high": "14",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "30",
          "date": "14 Dec 2018",
          "day": "Fri",
          "high": "13",
          "low": "-3",
          "text": "Partly Cloudy"
         },
         {
          "code": "30",
          "date": "15 Dec 2018",
          "day": "Sat",
          "high": "7",
          "low": "-3",
          "text": "Partly Cloudy"
         }
        ],
        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
        "guid": {
         "isPermaLink": "false"
        }
       }
      }
     }
    }
   }

for (var i = 0; i < weatherData.query.results.channel.item.forecast.length; i++){

    var weatherReport = `On ${weatherData.query.results.channel.item.forecast[i].day}, ${weatherData.query.results.channel.item.forecast[i].date}, the low will be ${weatherData.query.results.channel.item.forecast[i].low} and the high will be ${weatherData.query.results.channel.item.forecast[i].high}. The forecast calls for ${weatherData.query.results.channel.item.forecast[i].text}.`;

    if ((weatherData.query.results.channel.item.forecast[i].high) > 85){
        weatherReport = `${weatherReport} Stay cool out there, folks!`
    }
    else if ((weatherData.query.results.channel.item.forecast[i].high) < 40){
        weatherReport = `${weatherReport} Don't forget to bundle up!`
    }

    if ((weatherData.query.results.channel.item.forecast[i].low) < 20){
        weatherReport = `${weatherReport} Temperatures will be dangerously low!`
    }

    console.log(weatherReport);
}

// Challenge 2: What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder? *Find the LCM of 10!
//DID NOT COMPLETE!!!!!!!!!!!!!!!!!

// var x = 1;
// var smallestArray = [];

// for (var i = 10; i > 0; i --){
//     for (var z = 2; z < 10; z++){
//         if (i % z === 0){
//             console.log(` ${i} : ${z}.`);
//             smallestArray.push(z);
//         }
//     }
// }

// for (var n = 0; n < smallestArray.length; n++){
//     x = x * smallestArray[n];
// }
// console.log(x);

//Prime factorization 
// 10 = 2*5
// 9 = 3 *3
// 8 = 2 * 2 * 2
// 7 = 7
// 6 = 3 * 2
// 5 = 5
// 4 = 2 * 2
// 3 = 3
// 2 = 2
// var lcm = 3 * 3 * 2 * 2 * 2 * 7 * 5;
// console.log(lcm); 2520

//Challenge 3: Fibonacci Number Sequence
var sequence = [0,1];
var x = 0;
var outputSequence = "";

for (var i = 0; i < sequence.length; i++){
    if (x < 500){
        x = sequence[i] + sequence[i+1];
        // console.log(x);
        sequence.push(x);
    } 
}

for (var i = 0; i < sequence.length; i++){
    if (sequence[i] < 500){
        outputSequence= outputSequence + ` ${sequence[i]}`;
    } 
}
console.log(outputSequence);