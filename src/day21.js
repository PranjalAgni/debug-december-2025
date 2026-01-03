/*
Some guests are running late to the party! Yeti arranged a charter flight to 
bring them in, but there's a problem at the airport. The luggage weight checker 
keeps failing and nobody can board! The airline says all luggage must be under 
the weight limit, but the system isn't working. Can you help Yeti fix the 
luggage checker so the guests can make it to the party?
*/

class Luggage {
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
  }

  toString() {
    return `Luggage ${this.id}: ${this.weight}kg`;
  }

  valueOf() {
    return this.weight;
  }
}

function getSafeLuggage(luggageIDs, safeWeightLimit) {
  // gets luggage objects (from Luggage class) from in-memory cache
  const luggage = luggageIDs.map((id) => getLuggage(id));

  const safeLuggage = luggage.filter((l) => l <= safeWeightLimit);

  return safeLuggage;
}
