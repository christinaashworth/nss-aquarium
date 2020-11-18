import { useTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tankTips")
    const allTheTips = useTips()

    for (const tipObject of allTheTips) {
        const tipHTML = Tip(tipObject)
         // Add to the existing HTML in the content element
        contentElement.innerHTML += tipHTML
    }
}