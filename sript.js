
let student = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap(students) {
    //Write your code here , just console.log
    students.map(student =>{
       if(student.marks >50){
        console.log(student);
       }
    });
  }
  
  function PrintStudentsbyForEach(students) {
    //Write your code here , just console.log
    students.forEach(student =>{
          if(student.marks > 50){
            console.log(student);
          }
    });
    
  }
  
  function addData(students) {
    //Write your code here, just console.log
    const newData = {id:4,name:"susan",age:"20",marks:45}
     students.push(newData);
     console.log(students);

  }
  
  function removeFailedStudent(students) {
    //Write your code here, just console.log
          const passed =  students.filter(student =>student.marks>=50);
          console.log(passed);
  }

  
  function concatenateArray(students) {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "ravi", age: "21", marks: 70 },
        { id: 6, name: "shiva", age: "24", marks: 90 },
        { id: 7, name: "ruthvik", age: "23", marks: 55 },
      ];
      const concatArray = students.concat(newArray);
      console.log(concatArray);
  }