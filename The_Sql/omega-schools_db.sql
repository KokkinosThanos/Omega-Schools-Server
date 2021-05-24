-- ---------------------------------------------
-- DATABASE OF OMEGA-SCHOOLS
-- ---------------------------------------------
--
-- Creation/ Use of database
--
-- CREATE SCHEMA IF NOT EXISTS omegaschools;
-- USE omegaschools;
--
-- Create the Table for COURSES.
--
CREATE TABLE courses (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    stream VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    startDate DATE,
    endDate DATE,
    PRIMARY KEY(id)
);
-- 
-- Create the Table of TRAINERS.
-- 
CREATE TABLE trainers (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
--
-- Create the Table of PAYROLL.
-- 
CREATE TABLE payroll (
    trainerId INT NOT NULL AUTO_INCREMENT,
    hoursWeek INT(10),
    hourlyWage INT(10),
    contractLength INT(10),
    FOREIGN KEY (trainerId) REFERENCES trainers(id),
    PRIMARY KEY(trainerId)
);
--
-- Create the Table of ADDRESSES.
-- 
CREATE TABLE addresses (
    trainerId INT NOT NULL AUTO_INCREMENT,
    phone VARCHAR(15),
    email VARCHAR(50),
    address VARCHAR(50),
    FOREIGN KEY (trainerId) REFERENCES trainers(id),
    PRIMARY KEY(trainerId)
);
--
-- Create the Table for ASSIGNMETS.
--
CREATE TABLE assignments (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    description VARCHAR(80) NOT NULL,
    subDateTime DATETIME NOT NULL,
    oralMark TINYINT NOT NULL,
    totalMark TINYINT NOT NULL,
    courseId INT NOT NULL,
    FOREIGN KEY (courseId) REFERENCES courses(id),
    PRIMARY KEY(id)
);
-- Create Bridge Table for each Student's Assignment.  All fields can be NULL so the Trigger 'student_trigger' will be able to insert every new 'student_id' in this table without having 'assignment_id' , 'oralMark' and 'totalMark'. Later manualy we can fill the information in the table for each new student.
--
CREATE TABLE student_assignment (
     id INT NOT NULL AUTO_INCREMENT,
     assignmentId INTEGER,
     oralMark TINYINT,
     totalMark TINYINT,
     FOREIGN KEY (assignmentId) REFERENCES courses(id),
     PRIMARY KEY(id)
);
--
-- Create the Table for STUDENTS.
--
CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    dateOfBirth DATE NOT NULL,
    tuitionFees SMALLINT NOT NULL,
    assignmentId INTEGER NOT NULL,
    courseId INTEGER NOT NULL,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON UPDATE CASCADE,
    FOREIGN KEY (assignmentId) REFERENCES student_assignment(id) ON UPDATE CASCADE,
    PRIMARY KEY(id)
);
-- --
-- -- Create Bridge Table for each Student's Course.
-- --
-- CREATE TABLE student_course (
--     id INT NOT NULL AUTO_INCREMENT,
--     studentId INTEGER,
--     courseId INTEGER,
--     FOREIGN KEY (studentId) REFERENCES students(id) ON UPDATE CASCADE,
--     FOREIGN KEY (courseId) REFERENCES courses(id) ON UPDATE CASCADE,
--     PRIMARY KEY(id)
-- );
--
-- Create Bridge Table for each Trainer's Course.
--
CREATE TABLE trainer_course (
    id INT NOT NULL AUTO_INCREMENT,
    trainerID INTEGER,
    courseId INTEGER,
    FOREIGN KEY (trainerId) REFERENCES trainers(id),
    FOREIGN KEY (courseId) REFERENCES courses(id),
    PRIMARY KEY(id)
);
--
-- Insert 6 Courses to Table 'courses'.
--
INSERT INTO courses (title, stream, type, startDate, endDate)
VALUES ('Js-FT','Javascript','Full Time','20201005','20210105' ),
       ('Js-PT','Javascript','Part Time','20201005','20210305' ),
       ('Java-FT','Java','Full Time','20201005','20210105'),
       ('Java-PT','Java','Part Time','20201005','20210305'),
       ('C-FT', 'C#','Full Time','20201005','20210105'),
       ('C-PT', 'C#','Part Time','20201005','20210305');
-- 
-- Insert 12 Assignments in Total, to Table 'assignments'. For each Course there is the "progress" and the "final" Assignment.
--
INSERT INTO assignments (title,description,subDateTime,oralMark,totalMark,courseId)
VALUES ('Design a School Structure','Js-FT','20201105235959',20,80,1),
       ('Design a School Structure','Js-PT','20201220235959',20,80,2),
       ('Design a Registration System','Java-FT','20201105235959',20,80,3),
       ('Design a Registration System','Java-PT','20201220235959',20,80,4),
       ('Design an Evaluation System','C-FT','20201105235959',20,80,5),
       ('Design an Evaluation System','C-PT','20201220235959',20,80,6);

--
 -- Insert the Assignment of each Student , with marks. To Table 'student_assignment'.
 --
 INSERT INTO student_assignment (assignmentId,oralMark,totalMark)
 VALUES (1,15,70),
        (1,15,70),
        (1,20,60), 
        (1,20,70), 
        (1,20,80),
        (1,15,60),      
        (1,15,80),
        (1,15,70),
        (1,10,65),
        (1,20,70),

        (2,15,65),
        (2,15,75),
        (2,10,70),
        (2,15,60),
        (2,20,65),
        (2,20,70),
        (2,15,80),
        (2,15,70),
        (2,20,70),
        (2,10,70),

        (3,20,65),
        (3,10,65),
        (3,15,70),
        (3,15,70),
        (3,15,70),
        (3,20,80),
        (3,5,65),
        (3,10,60),
        (3,5,70),
        (3,10,60),

        (4,15,70),
        (4,20,80),
        (4,10,65),
        (4,15,75),
        (4,20,70),
        (4,15,60),
        (4,10,75),
        (4,15,65),
        (4,20,60),
        (4,10,65),

        (5,20,60),
        (5,15,75),
        (5,15,65),
        (5,20,60),
        (5,15,80),

        (6,15,70),
        (6,20,60),
        (6,10,65),
        (6,15,65),
        (6,20,65);	
--
-- Insert 50 Students to Table 'students'.
--
INSERT INTO students (firstName, lastName, dateOfBirth, tuitionFees, courseId, assignmentId)
VALUES ('Emmy','Stone','20001005',2500,1,1),
       ('Craig','Francis','20010516',2500,1,1),
       ('Amaris','Crane','20021103',2500,1,1),
       ('Haiden','Gomez','19951029',2500,1,1),
       ('Karsyn','Hutchinson','19970311',2500,1,1),
       ('Camille','Crane','19871202',2500,1,1),
       ('Tyson','Little','19930605',2500,1,1),
       ('Lillie','Murillo','20000719',2500,1,1),
       ('Stephanie','Patel','20030911',2500,1,1),
       ('Roland','Leon','20021225',2500,1,1),

       ('Ramiro','Tapia','20010112',2500,2,2),
       ('Robert','Madden','19990201',2500,2,2),
       ('Dulce','Moore','19980426',2500,2,2),
       ('Rhianna','Richardson','20031209',2500,2,2),
       ('Lola','Webster','20000601',2500,2,2),
       ('Caroline','Mays','19971009',2500,2,2),
       ('Rachael','Bowen','19920219',2500,2,2),
       ('Hillary','Suarez','19981002',2500,2,2),
       ('Ace','Mcdowell','20030417',2500,2,2),
       ('Keenan','Curtis','20000110',2500,2,2),

       ('Maleah','Terrell','20001007',2500,3,3),
       ('Jovanni','Franklin','20021125',2500,3,3),
       ('Irvin','Lowery','19970221',2500,3,3),
       ('Angeline','Ponce','19970915',2500,3,3),
       ('Reese','Murray','20021001',2500,3,3),
       ('Evangelos','Hamilton','19981007',2500,3,3),
       ('Andreas','Santos','19890223',2500,3,3),
       ('Alden','Jackson','20020810',2500,3,3),
       ('Roger','Macdonald','20020322',2500,3,3),
       ('Marlie','Lane','20000602',2500,3,3),

       ('Annalise','Clements','20010913',2500,4,4),
       ('Reuben','Perkins','20000120',2500,4,4),
       ('Kristen','Walters','20020822',2500,4,4),
       ('Ryan','Medina','20001021',2500,4,4),
       ('Derek','Mcclure','19991204',2500,4,4),
       ('Jaden','Townsend','19970615',2500,4,4),
       ('Ariel','Tucker','20020127',2500,4,4),
       ('Zaire','Dean','20010906',2500,4,4),
       ('Azaria','Kaiser','20001012',2500,4,4),
       ('Darnell','Shields','20020712',2500,4,4),

       ('Kevin','Patterson','20001220',2500,5,5),
       ('Casey','Spencer','20020622',2500,5,5),
       ('Natalya','Chapman','20020302',2500,5,5),
       ('Kara','Wu','20020714',2500,5,5),
       ('Edgar','Copeland','20010813',2500,5,5),
       
       ('Kinley','Harmon','20020903',2500,6,6),
       ('Brooks','Esparza','19971115',2500,6,6),
       ('Annabella','Wilkerson','20011209',2500,6,6),
       ('Dylan','Hahn','20021205',2500,6,6),
       ('Bryson','Blankenship','20020302',2500,6,6);
--
-- Insert 8 Trainers to Table 'trainers'.
--
INSERT INTO trainers (firstName, lastName, subject)
VALUES ('John','Kard','Javascript OOP'),
       ('Maria','Politikou','Html/Css Frameworks'),
       ('George','Mancher','Javascript Programming'), 
       ('Matias','Loter','Java Programming'),
       ('Angelo','Peristeris','Java Frameworks'),
       ('Penelope','Kraz','C# Programming'),
       ('Cathrine','Keit','SQL Programming'),
       ('Anastasis','Karavanis','Html/ Css');
-- 
-- Insert data to Table 'payroll'  
--
INSERT INTO payroll (hoursWeek, hourlyWage, contractLength)
VALUES (30,40,2),
       (25,40,1),
       (35,45,3),
       (30,40,2),
       (25,40,4),
       (35,45,3),
       (25,40,4),
       (30,40,2);
--
-- Insert data to Table 'addresses'
-- 
INSERT INTO addresses (phone, email, address)
VALUES (6945559880,'john@mail.com','Gramountos 23 Monastiraki'),
       (6935557865,'maria@mail.com','Kapta 2 Holargos'),
       (6955553108,'george@mail.com','Poleomidou 88 Kifisia'),
       (6985552902,'matias@mail.com','Amvrasiou 12 Pireas'),
       (6935554048,'angelo@mail.com','Poleoditos 38 Thiseio'),
       (6945559503,'penelope@mail.com','Komitsi 1 Holargos'),
       (6995552694,'cathrine@mail.com','Arnountos 4 Petralona'),
       (6975559865,'anastasis@mail.com','Poleos 77 Nea Ionia');




-- --------------------------------
-- STATISTICS ---------------------
--
-- Number of Students
--
DELIMITER $$
CREATE PROCEDURE totalStudents()
BEGIN

SELECT COUNT(id) AS "totalStudents"
FROM students;

END $$
DELIMITER ;
--
-- Number of Trainers
--
DELIMITER $$
CREATE PROCEDURE totalTrainers() 
BEGIN

SELECT COUNT(id) AS "totalTrainers"
FROM trainers;

END $$
DELIMITER ;
--
-- Number of Students per Course
--
DELIMITER $$
CREATE PROCEDURE studentsPerCourse()
BEGIN

SELECT COUNT(students.id) AS "studentsPerCourse" , students.courseId, courses.title
FROM students
INNER JOIN courses ON students.courseId = courses.id
GROUP BY courseId;

END $$
DELIMITER ;
--
-- Awarded students
--
DELIMITER $$
CREATE PROCEDURE awardedStudents()
BEGIN

SELECT students.firstName, students.lastName, student_assignment.oralMark + student_assignment.totalMark AS "award"
FROM students
INNER JOIN student_assignment ON students.id = student_assignment.id
WHERE oralMark + totalMark = 100
ORDER BY oralMark + totalMark DESC;

END $$
DELIMITER ;

-- -----------------------------------
-- -------------------------------
-- CALL ALL STORED PROCEDURES

DELIMITER $$
CREATE PROCEDURE allStoredProcedures()
BEGIN

CALL totalStudents();
CALL totalTrainers(); 
CALL studentsPerCourse();
CALL awardedStudents();

END $$
DELIMITER ;


            
           

