var numRescueBoats = function(people, limit) {
  let boatCount = 0;
  let peopleCount = 0;
  for (let i = 0; i < people.length; i++) {
    // If current person count is less than limit
    if (people[i] < limit) {
      // If current person count + peopleCount is less than limit
      if (people[i] + peopleCount < limit) {
        peopleCount += people[i];
      }
      // If current person count + peopleCount = limit
      else if (people[i] + peopleCount == limit) {
        boatCount++;
        peopleCount = 0;
      }
      // If current person count + peopleCount > limit
      else if (people[i] + peopleCount > limit) {
        boatCount++;
        peopleCount = people[i];
      }
    }
    // if current person count is equal to limit
    if (people[i] == limit) {
        boatCount++;
    }
    console.log(`Index: ${i}, Current Count: ${people[i]}, People Count: ${peopleCount}, Boat Count: ${boatCount}`)
  }
  if (peopleCount > 0) boatCount++
  return boatCount
};

x = numRescueBoats([1,2], 3)
console.log(x)
