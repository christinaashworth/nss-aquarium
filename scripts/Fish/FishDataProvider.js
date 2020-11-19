const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "Angelfish",
        length: 8,
        location: "Percy Priest Lake",
        image: "/./images/Angelfish.jpeg"
    },
    {
        name: "Sally",
        food: "metal",
        species: "Flowerhorn",
        length: 3,
        location: "Tennessee River",
        image: "/./images/flowerhorn.jpg"
    },
    {   name: "Sandra",
        food: "pancakes",
        species: "carp",
        length: 5,
        location: "Rio Grande",
        image: "/./images/carp.jpg"
    },
    {
        name: "Carla",
        food: "scones",
        species: "magikarp",
        length: 9,
        location: "Nile River",
        image: "/./images/magikarp.jpg"
    }

]

export const useFish = () => {
    return fishCollection.slice();
}



/* Separate the fish by type
List the fish by those types 
1) holy fish 
2) soldiers
3) unworthy

Only need to work in FishDataProvider and FishList*/



 export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
     const holyFish = []

     for (const fish of fishCollection) {
         if (fish.length % 3 === 0) {
             holyFish.push(fish);
        }
     }
    return holyFish
}

 export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
     const soldiers = []

     for (const fish of fishCollection) {
         if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
             soldiers.push(fish);
         }
     }
    return soldiers
}

 export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
     const regularFish = []

     for (const fish of fishCollection) {
         if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
             regularFish.push(fish);
         }
     }
    return regularFish
} 


