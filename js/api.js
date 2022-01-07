import * as UI from './interfaz.js';

export default class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }
    search() {
        const URL = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        fetch(URL).then(response => response.json()).then(data => {
            UI.displayLyrics({
                artist: this.artist,
                song: this.song,
                lyrics: data.lyrics
            });
            
            if (data.error) {
                UI.displayLyrics({
                    artist: this.artist,
                    song: this.song,
                    lyrics: data.error
                });
            }
            
            console.log(data);
        });
    }
}