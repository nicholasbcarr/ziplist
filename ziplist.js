function zipList(list1, list2) {
  const totalList = [];
  for (let i = 0; i < list1.length; i++) {
    totalList.push(list1[i]);
    totalList.push(list2[i]);
  }
  return totalList;
}

const x = ['a', 'b', 'c'];
const y = [1, 2, 3];

console.log(zipList(x, y));

function zipListEz(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListEz(x, y));
