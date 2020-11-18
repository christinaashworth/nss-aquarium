const locationCollection = [
    {
        name: "Tennessee River",
        image: "/./images/Tennessee River.jpeg",
        url: "http://tennesseeriverkeeper.org/the-river/"
    },
    {
        name: "Percy Priest Lake",
        image: "/./images/Percy Priest.jpeg",
        url: "http://www.percypriestlake.org/"
    },
    {
        name: "Rio Grande",
        image: "/./images/rio grande.jpg",
        url:"https://www.americanrivers.org/river/rio-grande-river/"
    },
    {
        name: "Nile River",
        image: "/./images/nile river.jpg",
        url: "https://www.nationalgeographic.org/encyclopedia/nile-river/"
    }
]

export const useLocations = () => {
    return locationCollection.slice();
}