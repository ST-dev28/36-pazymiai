// čia pateikti visus required/import metodus
// susikurti pavyzdinius objektus iš class
// parodyti, jog sukurti metodai tikrai veikia, t.y.
// prieš tai suvesta informacija turi įtaką likusiems
// kviečiamiems metodams

const Schedule = require('./Schedule');

const school = new Schedule('Sunrise', 9);

school.intro();
// This is "Sunrise" school and it's schooling schedule. 

school.addBreak(10); 
// Each second break is 10 minutes long.  
school.addBreak(30); 
// Break fourth is a lunch break and it lasts 30 minutes. 
school.addBreak(15); 
//Each other break is 15 minutes long. 

school.lessonsCount();
//There are ??? lessons per day.\n Each lesson is 45 minutes long. 

school.schedule();
// "Sunrise" school schedule is: 
//1. 9:00 - 9:45
//2. 9:55 - 10:40
//3: 10:55 - 11:40 ...

