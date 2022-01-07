import API from './api.js';
import * as UI from './interfaz.js';

const search = {
    artist: UI.artista_input.value,
    song: UI.cancion_input.value
}

export function updateSearchObj(ev) {
    search[ev.target.name] = ev.target.value.trim();
}

UI.form.addEventListener('submit', searchSong);

function searchSong(ev) {
    ev.preventDefault();

    if (validateInputs()) {
        new API(search.artist, search.song).search();
    }
}

function validateInputs() {
    const {artist, song} = search;

    if (!artist || !song) {
        UI.displayError('Ambos campos son obligatorios');
        return false;
    }
    return true;
}