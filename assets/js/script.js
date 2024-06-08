class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  setInicio() {
    return `Este método es para realizar un cambio en la URL del video.`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  setInicio(time) {
    
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", `${this._url}?start=${time}`);
}
  playMultimedia() {
    this._url, this._id;
  }
}

const reproducirVideo = (() => {


  const modificarUrl = (url, id) => {

    const etiquetaElegida = document.getElementById(id);
    etiquetaElegida.setAttribute("src", url)

  };
  return {
    insertarVideo: (url, id) => {
      modificarUrl(url, id);
    },
  };
})();

const musicaPlayer = new Reproductor("https://www.youtube.com/embed/9Wz3J1P5HZY?si=kAg9abLcjZcS12kr", "musica");
const peliculaPlayer = new Reproductor("https://www.youtube.com/embed/0vCaRgK_I3I?si=ETeDOiHnAkGimmD0", "peliculas");
const seriePlayer = new Reproductor("https://www.youtube.com/embed/5dkXNhJ-F-c?si=kKNZNwYu535rOAA4", "series");

reproducirVideo.insertarVideo(musicaPlayer._url, musicaPlayer._id)
reproducirVideo.insertarVideo(peliculaPlayer._url, peliculaPlayer._id)
reproducirVideo.insertarVideo(seriePlayer._url, seriePlayer._id)

//musicaPlayer.setInicio(30)
peliculaPlayer.setInicio(10)

