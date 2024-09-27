
interface AudioPlayer {
    audioVolume: number;
    song: string;
    details: SongDetails;
};

interface SongDetails {
    duration: number;
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 30,
    song: 'Routines in the night',
    details: {
        duration: 23.4,
        author: 'twenty one pilots',
        year: 2024
    }
}

const {
    song: newSong,
    details: {author}
} = audioPlayer;
 
console.log('Song: ', newSong);
console.log('Author: ', author)

const genshin: string[] = ['Klee', 'Shinobu', 'Nahida'];
console.log(genshin);
console.table(genshin);

export{};