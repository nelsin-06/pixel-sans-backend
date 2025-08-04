import { YoutubeTranscript } from 'youtube-transcript';

(async () => {
    console.log(await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=KaLKyK7LDdA'));
})();