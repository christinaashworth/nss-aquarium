export const Location = (location) => {
    return `
        <section class="location card">
            <div><img  class="location__image image--card" src="${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__url"><a href="${location.url}">Let's go to ${location.name}!</a></div>
        </section>
    `
}