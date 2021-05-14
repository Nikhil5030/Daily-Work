let i: number;
 for(i=1; i<=10;i++){
     console.log(i + '  ');
 }

let marks: number[] = [30,40,50,60,45,80];
 //for(var m in marks){
   // console.log(marks[m]);
 ///}

for(var m of marks){
    console.log(m);
}