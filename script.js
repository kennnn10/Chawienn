// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "MINE",
        artist: "Taylor Swift",
        album: "Speak now",
        albumArtJPG: "mine.jpg",
        audioSrc: "MINE.mp3",
        videoBgSrc: "new mine.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 1, text: "I remember how we felt sitting by the water " },
            { time: 5, text: "And every time i look at you, it's like the first time" },
            { time: 9, text: "I fell in love with a careless man's careful daughter" },
            { time: 13, text: "She is the best thing that's ever been mine" },
            { time: 17, text: "Hold on" },
            { time: 19, text: "Make it last" },
            { time: 21, text: "Hold on" },
            { time: 23, text: "Never turn back" },
            { time: 25, text: "You made me a rebel of a careless man's careful daughter (hold on)" },
            { time: 29, text: "You are the best thing that's ever been mine (hold on)(oh yeah) " },
            { time: 34, text: "Yes, yes, do you believe it?(hold on) " },
            { time: 39, text: "Yes, yes we're gonna make it now (hold on) " },
            { time: 41, text: "Yes, yes I can see it (come on< come on)" },
            { time: 45, text: "I can see it now " },
        ]
    },
    {
        id: 2,
        title: "YOU BELONG WITH ME",
        artist: "Taylor Swift",
        album: "÷ (Divide)",
        albumArtJPG: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "BELONG WITH ME.mp3",
        videoBgSrc: "new nelong.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2 , text: "Can't you see that I'm the one who can understand you?" },
            { time: 6, text: "Been here all along, so why can't you see?" },
            { time: 12, text: "You belong with me" },
            { time: 17, text: "Standing be and waiting at your back door " },
            { time: 21, text: "ALl this time,how could you not know,baby? " },
            { time: 27, text: "You belong tih me,you belong with me" },
            { time: 35, text: "You belong with me " },
            { time: 37, text: "HAve you ever thought just maybe,you belong with me?" },
            { time: 46, text: "YOu belong with me" },
        ]
    },    
    {
        id: 3,
        title: "MISTERYOSO",
        artist: "Cup of Joe",
        album: "Prism",
        albumArtJPG: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "MIISTERYOSOO.mp3",
        videoBgSrc: "new mister.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2, text: "Di maipaliwanag kung bakit nabighani sa Iyo" },
            { time: 9, text: "Walang rason, walang pero, basta ito ay totoo" },
            { time: 17, text: "Di akalaing makakapiling ko ang isang tulad mo " },
            { time: 25, text: "Tila isang engkanto laging hinahanap-hanap ko " },
            { time: 31, text: "Oh giliw, tanging ikaw ang patutunguhan" },
            { time: 35, text: "Kahit pa salungat ang aking oras sa'yo" },
            { time: 39, text: "Di makapaniwalang ako na ang dahilan" },
            { time: 43, text: "Ng 'yong ngiting misteryoso " },
            { time: 47, text: "Da-ram, da-ra-ra-ram" },
            { time: 51, text: "Misteryoso" },
            { time: 64, text: "Oh-oh" },
        ]
    },
    {
        id: 4,
        title: "MUNDO NG PAG-IBIG",
        artist: "Sponge cola",
        album: "The Greatest Showman: Reimagined",
        albumArtJPG: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "PAG IBIG.mp3",
        videoBgSrc: "new pag ibig.mp4",
        lyrics: [
            { time: 1, text: "Pag-ibig nga ang susi" },
            { time: 6, text: "Nararapat lang ibahagi" },
            { time: 10, text: "IBAAAHAAAGIIIII!!!!!" },
            { time: 12, text: "Gumaganda" },
            { time: 15, text: "Ang paligid" },
            { time: 18, text: "Kung bawat tayo ay puno ng pag-ibg" },
            { time: 24, text: "Napapawi" },
            { time: 26, text: "Ang pighati" },
            { time: 29, text: "Masilayan lang ang iyong ngiti" },
            { time: 36, text: "Oh, Kaa gandang isipin" },
            { time: 40, text: "Ang isang mundong puno ng pag-ibig" },
        ]
    },
    {
        id: 5,
        title: "PASILYO",
        artist: "Sunkissed Lola",
        album: "OK Computer",
        albumArtJPG: "https://www.songmeaningsandfacts.com/wp-content/uploads/2022/11/Message-in-a-Bottle-by-Taylor-Swift.jpg",
        audioSrc: "PASILYO.mp3",
        videoBgSrc: "new pasil.mp4",
        lyrics: [
            { time: 6  ,  text: "Ikaw at ikaw" },
            { time: 13,  text: "Ikaw at ikaw " },
            { time: 17, text: "Ikaw at ikaw" },
            { time: 23, text: "Ikaw at ikaw" },
            { time: 28, text: "Ikaw at ikaw" },
            { time: 32, text: "Palad ay basang basa" },
            { time: 34, text: "And dagitab ay damang dama" },
            { time: 37, text: "Sa'aking kalamnang punong puno" },
            { time: 43, text: "Di maikukumpara araw-araw kong dala-dala" },
            { time: 49, text: "Paboritong panalangin ko'y ikaw" },
        ]
    },
    {
        id: 6,
        title: "GUSTO",
        artist: "Zack Tabudlo", 
        album: "Unreleased",
        albumArtJPG: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "GUSTOOOO.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 2, text: "AI James, let's go" },
            { time: 4, text: "Kabado pa nung una, plano makausap" },
            { time: 7, text: "Lakad pa kalmado pero parang nalulula" },
            { time: 10, text: "Daming nakausap, kaw ang napusuan" },
            { time: 12, text: "Bini-bini, gagawan ng paraan makauha ka" },
            { time: 16, text: "Ikaw na nga 'yon at wala ng iba" },
            { time: 18, text: "Okay lang 'yan, mundo man natin ay magkaiba" },
            { time: 21, text: "Mapagod man ako, ikaw ang aking pahinga" },
            { time: 24, text: "Sabay sasalubungin ang umaga ng nakahiga" },
            { time: 27, text: "Sa t'wing kasama ka para akong lumulutang" },
            { time: 30, text: "Kung ga'no kasaya, 'yun and 'di ko masukat" },
            { time: 33, text: "Lakas ng anat, 'di kaya ko ginayuma" },
            { time: 35, text: "Hanggang ngayon kapit pa rin sa aking halimuyak nya" },
            { time: 39, text: "Gumagaan lahat ng mabigat" },
            { time: 42, text: "Patuloy lang tayo sa pagliyab" },
            { time: 45, text: "Kung lahat 'to panaginip lang" },
            { time: 47, text: "Pag gising ko pangako 'yan agad ko sasabihin na"  },
            { time: 50, text: "Gusto lang kita makasama hanggang sa" },
            { time: 52, text: "Pagbaba ng araw 'pag tayo nalang dalawa" },
            { time: 57, text: "Hindi lang masabi 'pag may iba" },
            { time: 61, text: "Gusto lang naman aminin sa'yo" },
            { time: 64, text: "AAng nararamdaman ng aking puso, wala ng iba" },
            { time: 69, text: "Wag ng pahirapan pa, andito na" },
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();