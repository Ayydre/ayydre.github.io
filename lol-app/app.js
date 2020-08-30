$(() => {

  $.ajax({ url: 'https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json'
}).then(
  (data) => {
    console.log(data.data);
    for (let key in data.data) {
    const $champDiv = $('<div>').addClass('champion')
    const $champImg = $('<img>').addClass('champion-img')
    const $nameDiv = $('<div>').addClass('name')
    const champImg = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + data.data[key].id + '_0.jpg'

    $nameDiv.text(data.data[key].name)
    $champImg.attr('src', champImg)

    $champDiv.append($nameDiv, $champImg)
    $('.champion-cards').append($champDiv)
    }
  },
  (error) => {
    console.log('doesn\'t work');
  }
)

})
