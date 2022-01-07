export const form = document.querySelector('#formulario-buscar');
export const search_div = document.querySelector('#buscar');
export const messages_div = document.querySelector('#mensajes');

export const result = document.querySelector('.letra-resultado');
export const result_div = document.querySelector('#resultado');
export const result_head = document.querySelector('.letra-resultado h2');

export const artista_input = document.querySelector('#artista');
export const cancion_input = document.querySelector('#cancion');

import {updateSearchObj} from './app.js';
artista_input.addEventListener('input', updateSearchObj);
cancion_input.addEventListener('input', updateSearchObj);

export function displayError(msg) {
    const timing = 2.5;

    messages_div.textContent = msg.toUpperCase();
    messages_div.classList.add('error');
    
    messages_div.style.animation = `fade-in-out ${timing}s`;

    setTimeout( () => {
        messages_div.textContent = '';
        messages_div.classList.remove('error');
        messages_div.style.animation = null;

    }, timing*1000 );
}

export function displayLyrics({artist, song, lyrics}) {
    result_head.textContent = `${artist.toUpperCase()} - ${song.toUpperCase()}`;
    result_div.textContent = lyrics;
    
    result.style.animation = `fade-in 1.5s`;
}