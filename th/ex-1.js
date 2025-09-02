/* 
- ให้เขียน Function ที่ชื่อว่า heaviestBagPair โดยมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัว คือ bagWeights มี Value Type เป็น Array ที่เก็บน้ำหนักกระเป๋านักเรียนแต่ละคน
        - Function นี้จะ Return กระเป๋านักเรียนคู่ที่มีน้ำหนักรวมกันมากที่สุด โดยกระเป๋า 2 ใบนี้ต้องวางอยู่ติดกัน
        - ถ้ามีกระเป๋าน้อยกว่า 2 ใบ ให้ Return null
*/

// หาคู่กระเป๋านักเรียนที่หนักที่สุด 🧳🧳
function heaviestBagPair(bagWeights) {
  // ถ้ามีกระเป๋าน้อยกว่า 2 ใบ ให้ return null
  if (bagWeights.length < 2) return null;

  // ประกาศตัวแปรเก็บค่าน้ำหนักรวมสูงสุด และคู่กระเป๋าที่หนักที่สุด
  let maxWeight = 0;
  let maxBagPair = [];

  // วน loop เพื่อหาคู่กระเป๋าที่ติดกัน
  for (let i = 0; i < bagWeights.length - 1; i++) {
    let currentWeight = bagWeights[i] + bagWeights[i + 1];
    if (currentWeight > maxWeight) {
      maxWeight = currentWeight;
      maxBagPair = [bagWeights[i], bagWeights[i + 1]];
    }
  }

  return maxBagPair;
}

console.log(heaviestBagPair([5, 8, 12, 15, 7]));
// Output: [12, 15] เพราะเป็นคู่กระเป๋าที่หนักที่สุด (27 กก.)

console.log(heaviestBagPair([10, 20, 5, 7, 15]));
// Output: [10, 20] เพราะเป็นคู่กระเป๋าที่หนักที่สุด (30 กก.)

console.log(heaviestBagPair([4]));
// Output: null เพราะมีกระเป๋าแค่ใบเดียว
