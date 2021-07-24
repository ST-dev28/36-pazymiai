// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, kaip naudotis jūsų sukurtu kodu

const ClassDiary = require('./ClassDiary');

const school = new ClassDiary('12A', 9);

school.intro();
// This is "12A" class. 

school.addStudent('Jonas Jonaitis');
school.addStudent('Petras Petaitis');
school.addStudent('Juozas Juozaitis');
school.addStudent('Ona Onaite');
school.addStudent('Juze Juzaite');
school.addStudent('Maryte Marytaite');
school.addStudent('Kestas Kestaitis');

school.printStudentsList();
// Class "12A" has those students on the list:
// 1. Jonas Jonaitis
// 2. Petras Petaitis
// 3. Juozas Juozaitis
// 4.  ....

school.addLesson('Lietuviu kalba');
school.addLesson('Matematika');
school.addLesson('Fizika');
school.addLesson('Chemija');
school.addLesson('Geografija');
school.addLesson('Istorija');

school.printLessonsList();
// Class "12A" has those lessons: 
// 1.  Lietuviu kalba
// 2. Matematika
// 3. ...
/*
school.addMarks(1, 10, 'liepos 23', 'matematika'); 
// Liepos 23d. Jonas Jonaitis gavo 10 is matematikos. 
school.addMarks(1, 7, 'liepos 23', 'geografija'); 
// Liepos 23d. Jonas Jonaitis gavo 7 is geografijos. 
school.addMarks(1, 9, 'liepos 26', 'matematika'); 
// Liepos 26d. Jonas Jonaitis gavo 9 is matematikos.
school.addMarks(2, 5, 'liepos 24', 'fizika');
// Liepos 24d. Petras Petaitis gavo 5 is fizikos.
school.addMarks(2, 10, 'liepos 28', 'fizika');
// Liepos 28d. Petras Petaitis gavo 10 is fizikos.       
school.addMarks(3, 8, 'liepos 25', 'istorija');
// Liepos 25d. Juozas Juozaitis gavo 8 is istorijos. 
school.addMarks(3, 9, 'liepos 25', 'lietuviu kalba');
// Liepos 25d. Juozas Juozaitis gavo 9 is lietuviu kalbos.
school.addMarks(3, 8, 'liepos 27', 'lietuviu kalba');
// Liepos 27d. Juozas Juozaitis gavo 8 is lietuviu kalbos.     

school.marks(1);
// KOMENTARAS: lentelėje, dvitaškiai turi būti viename stulpelyje
// lentelėje, lygybės simboliai turi būti iki lentelės galo, kuris nusakomas 
//pagal ilgiausia turinio eilutę

// Jono Jonaicio pazymiai:
//==========================
// Matematika: 10, 9
// Geografija: 7
//==========================

school.marks(2);
// Petro Petraicio pazymiai:
//==========================
// Fizika: 5, 10
//==========================

school.marks(3);
// Juozo Juozaicio pazymiai:
//==========================
// Istorija: 8
// Lietuviu kalba: 9, 8
//==========================

school.marksAverage(3);
// KOMENTARAS: lentelėje, dvitaškiai turi būti viename stulpelyje
// lentelėje, lygybės simboliai turi būti iki lentelės galo, kuris nusakomas 
//pagal ilgiausia turinio eilutę

// Juozo Juozaicio pazymiu vidurkis:
//==========================
// Istorija: 8
// Lietuviu kalba: 8.5
//==========================
*/


