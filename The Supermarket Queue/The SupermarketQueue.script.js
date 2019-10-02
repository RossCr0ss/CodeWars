function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  console.log(w);
  for (let t of customers) {
    console.log("item: ", t);
    let index = w.indexOf(Math.min(...w));
    console.log("min item:", Math.min(...w));
    console.log("position of min item:", index);
    w[index] += t;
    console.log("fill this position by item", w[index]);
  }
  return Math.max(...w);
}

queueTime([2, 2, 3, 3, 4, 4], 2);
