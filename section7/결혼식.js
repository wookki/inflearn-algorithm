function solution(times) {
  let answer = 0;
  let timeLine = [];
  for (let x of times) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let count = 0;
  for (let x of timeLine) {
    if (x[1] === "s") count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
