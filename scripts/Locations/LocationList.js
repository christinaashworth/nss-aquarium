import { useLocations } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const allTheLocations = useLocations()

    for (const LocationObject of allTheLocations) {
        const LocationHTML = Location(LocationObject)
         // Add to the existing HTML in the content element
        contentElement.innerHTML += LocationHTML
    }
}