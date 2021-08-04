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
school.addMarks('Jonas Jonaitis', 'Fizika', 10, '2021-05.05');
school.addMarks('Jonas Jonaitis', 'Lietuviu kalba', 7, '2021-05.05');
school.addMarks('Jonas Jonaitis', 'Matematika', 6, '2021-05.05');
school.addMarks('Petras Petaitis', 'Matematika', 9, '2021-05.06');
school.addMarks('Petras Petaitis', 'Lietuviu kalba', 8, '2021-05.06');
school.addMarks('Juozas Juozaitis', 'Matematika', 4, '2021-05.08');
school.addMarks('Juozas Juozaitis', 'Istorija', 8, '2021-05.08');
school.addMarks('Juozas Juozaitis', 8, 'Lietuviu kalba', 9, '2021-05.08');

school.marks('Jonas Jonaitis');
// KOMENTARAS: lentelėje, dvitaškiai turi būti viename stulpelyje
// lentelėje, lygybės simboliai turi būti iki lentelės galo, kuris nusakomas
//pagal ilgiausia turinio eilutę

// Jono Jonaicio pazymiai:
//==========================
// Matematika: 10, 9
// Geografija: 7
//==========================

school.marks('Petras Petaitis');
// Petro Petraicio pazymiai:
//==========================
// Fizika: 5, 10
//==========================

school.marks('Juozas Juozaitis');
// Juozo Juozaicio pazymiai:
//==========================
// Istorija: 8
// Lietuviu kalba: 9, 8
//==========================

school.marksAverage('Juozas Juozaitis');
// KOMENTARAS: lentelėje, dvitaškiai turi būti viename stulpelyje
// lentelėje, lygybės simboliai turi būti iki lentelės galo, kuris nusakomas
//pagal ilgiausia turinio eilutę

// Juozo Juozaicio pazymiu vidurkis:
//==========================
// Istorija: 8
// Lietuviu kalba: 8.5
//==========================
*/


