class SubGenre {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    SubGenre.all.push(this)
  }

  static displaySubGenres(json){
    //sort categories? genre.all.sort(function(){})
    SubGenre.all.forEach(function(sub_genre){
      let subGenreDiv = document.createElement('div')
      subGenreDiv.class = "sub_genre"
      subGenreDiv.id = sub_genre.id
      subGenreDiv.innerHTML = `<a href="">${sub_genre.name}</a>`
      document.getElementById('sub_genres').appendChild(subGenreDiv)
      document.getElementById('genres').style.display = 'none'
      document.getElementById('sub_genres').style.display = ''
      //create div
      //append div

      $("#nav-genres").removeClass("active");
      $("#nav-sub_genres").addClass("active");

      let gText = document.getElementById('nav-genres').innerText

      document.getElementById('nav-genres').innerHTML = `<a href="">${gText}</a>`

      document.getElementById('nav-sub_genres').innerHTML = `${json.name}`
      $("#nav-sub_genres").show()
    })
  }
}

SubGenre.all = []