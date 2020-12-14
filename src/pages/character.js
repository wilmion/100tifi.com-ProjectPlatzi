import getData from '../utils/getData';
import getHash from '../utils/getHash';
const Character = async () => {
    const id = getHash();
    const person = await getData(id);

    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${person.image}" alt="${person.name}">
            <h2>${person.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: ${person.episode.length}</h3>
            <h3>Status: ${person.status}</h3>
            <h3>Species: ${person.species}</h3>
            <h3>Gender: ${person.gender}</h3>
            <h3>Origin: ${person.origin.name}</h3>
            <h3>Last Location: ${person.location.name}</h3>
        </article>
    </div>
    `;
    return view;
}
export default Character;