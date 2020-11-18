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