function solution(n) {
  function DFS(n) {
    if (n < 1) return null;
    else {
      DFS(n - 1);
      console.log(n);
    }
  }

  DFS(n);
}

solution(3);
