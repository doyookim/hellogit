var grade = [75, 82, 91];
var sum = 0, avg = 0;

for (let i=0; i< grade.length; i++) {
    sum += grade[i];
}
console.log(sum);

avg =  sum / grade.length;
avg = avg.toFixed(2);

console.log(avg);

console.log("총점: " + sum + "점, 평균점수: " + avg + "점");