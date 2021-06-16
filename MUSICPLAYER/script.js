let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: "song1",
        path: "music/song1.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song2",
        path: "music/song2.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song3",
        path: "music/song3.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song4",
        path: "music/song4.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song5",
        path: "music/song5.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song6",
        path: "music/song6.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song7",
        path: "music/song7.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song8",
        path: "music/song8.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song9",
        path: "music/song9.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song10",
        path: "music/song10.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song11",
        path: "music/song11.mp3",
        img: "image/img1.jpg",
        singer: "singer"
    },
    {
        name: "song12",
        path: "music/song12.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song13",
        path: "music/song13.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song14",
        path: "music/song14.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song15",
        path: "music/song15.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song16",
        path: "music/song16.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song17",
        path: "music/song17.mp3",
        img: "image/img1.jpg",
        singer: "singer"
    },
    {
        name: "song18",
        path: "music/song18.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song19",
        path: "music/song19.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song20",
        path: "music/song20.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song21",
        path: "music/song21.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song22",
        path: "music/song22.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song23",
        path: "music/song23.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song24",
        path: "music/song24.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song25",
        path: "music/song25.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song26",
        path: "music/song26.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song27",
        path: "music/song27.mp3",
        img: "image/img1.jpg",
        singer: "singer"
    },
    {
        name: "song28",
        path: "music/song28.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song29",
        path: "music/song29.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song30",
        path: "music/song30.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song31",
        path: "music/song31.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song32",
        path: "music/song32.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song33",
        path: "music/song33.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song34",
        path: "music/song34.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song35",
        path: "music/song35.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song36",
        path: "music/song36.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song37",
        path: "music/song37.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song38",
        path: "music/song38.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song39",
        path: "music/song39.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song40",
        path: "music/song40.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song41",
        path: "music/song41.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song42",
        path: "music/song42.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song43",
        path: "music/song43.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song44",
        path: "music/song44.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song45",
        path: "music/song45.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song46",
        path: "music/song46.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song47",
        path: "music/song47.mp3",
        img: "image/img11.jpg",
        singer: "singer"
    },
    {
        name: "song48",
        path: "music/song48.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song49",
        path: "music/song49.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song50",
        path: "music/song50.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song51",
        path: "music/song51.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song52",
        path: "music/song52.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song53",
        path: "music/song53.mp3",
        img: "image/img11.jpg",
        singer: "singer"
    },
    {
        name: "song54",
        path: "music/song54.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song55",
        path: "music/song55.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song56",
        path: "music/song56.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song57",
        path: "music/song57.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song58",
        path: "music/song58.mp3",
        img: "image/img11.jpg",
        singer: "singer"
    },
    {
        name: "song59",
        path: "music/song59.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song60",
        path: "music/song60.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song61",
        path: "music/song61.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song62",
        path: "music/song62.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song63",
        path: "music/song63.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song64",
        path: "music/song64.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song65",
        path: "music/song65.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song66",
        path: "music/song66.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song67",
        path: "music/song67.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song68",
        path: "music/song68.mp3",
        img: "image/img11.jpg",
        singer: "singer"
    },
    {
        name: "song69",
        path: "music/song69.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song70",
        path: "music/song70.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song71",
        path: "music/song71.mp3",
        img: "image/img14.jpg",
        singer: "singer"
    },
    {
        name: "song72",
        path: "music/song72.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song73",
        path: "music/song73.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song74",
        path: "music/song74.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song75",
        path: "music/song75.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song76",
        path: "music/song76.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },
    {
        name: "song77",
        path: "music/song77.mp3",
        img: "image/img10.jpg",
        singer: "singer"
    },
    {
        name: "song78",
        path: "music/song78.mp3",
        img: "image/img1.jpg",
        singer: "singer"
    },
    {
        name: "song79",
        path: "music/song79.mp3",
        img: "image/img2.jpg",
        singer: "singer"
    },
    {
        name: "song80",
        path: "music/song80.mp3",
        img: "image/img3.jpg",
        singer: "singer"
    },
    {
        name: "song81",
        path: "music/song81.mp3",
        img: "image/img4.jpg",
        singer: "singer"
    },
    {
        name: "song82",
        path: "music/song82.mp3",
        img: "image/img5.jpg",
        singer: "singer"
    },
    {
        name: "song83",
        path: "music/song83.mp3",
        img: "image/img6.jpg",
        singer: "singer"
    },
    {
        name: "song84",
        path: "music/song84.mp3",
        img: "image/img7.jpg",
        singer: "singer"
    },
    {
        name: "song85",
        path: "music/song85.mp3",
        img: "image/img8.jpg",
        singer: "singer"
    },
    {
        name: "song86",
        path: "music/song86.mp3",
        img: "image/img9.jpg",
        singer: "singer"
    },

];

function load_track(index_no){
    clearInterval(timer);
    rest_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);

function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}


function rest_slider(){
    slider.value = 0;
}


function justplay(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song =  true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}


function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';

}

function next_song(){
    if (index_no < All_song.length - 1){
        index_no +=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
        }
        else{
            index_no = All_song.length;
            load_track(index_no);
            playsong();
        }
}


function volume_change(){
    volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function autoplay_switch(){
    if (autoplay==1){
        autoplay = 0;
        auto_play.style.background = "linear-gradient( rgb(76, 152, 240), rgb(214, 214, 214))";
    }
    else{
        autoplay = 1;
        auto_play.style.background = "linear-gradient( rgb(76, 152, 240), rgb(214, 214, 214))";
    }
}


function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    if(track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(autoplay==1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}
