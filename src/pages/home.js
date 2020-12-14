import getData from '../utils/getData';
const Home = async () => {
    const characters = await getData();
    const view = `
    <div class="Characters">
        ${characters.results.map(person => `
            <article class="Characters-item">
                <a href="#/${person.id}/">
                    <picture>
                        <img src="${person.image}" alt"${person.name}"/>
                        <h2>${person.name}</h2>
                    </picture>
                </a>
            </article>
        `).join('')}
    </div>
    `;
    return view;
};

export default Home;