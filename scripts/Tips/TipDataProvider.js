const tipCollection = [
    {
        text: "Don't tap on the glass! It scares the fish."
    },
    {
        text: "Don't overfeed the fish."
    },
    {
        text: "Make sure you have plenty of space for each fish. Fish can become aggressive or depressed if there are too many in the tank."
    },
    {
        text: "Just keep swimming."
    }
]

export const useTips = () => {
    return tipCollection.slice();
}