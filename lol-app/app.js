$(() => {

  $.ajax({ url: 'https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json'
}).then(
  (data) => {
    console.log(data.data);
    for (let key in data.data) {
    const $champDiv = $('<div>').addClass('champion')
    const $champImg = $('<img>').addClass('champion-img')
    const $splashImg = $('<img>').addClass('champion-splash')
    const $nameDiv = $('<div>').addClass('name')
    const $modal = $('<modal>').attr('id', 'modal')
    const $modalText = $('<div>').attr('id', 'modal-textbox')
    const $modalName = $('<h2>').text(data.data[key].name)
    const $modalTitle = $('<h4>').text(data.data[key].title)
    const $modalp1 = $('<p>').attr('id', 'attack')
    const $modalp2 = $('<p>').attr('id', 'defence')
    const $modalp3 = $('<p>').attr('id', 'difficulty')
    const champImg = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + data.data[key].id + '_0.jpg'
    const champSplash = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + data.data[key].id + '_0.jpg'

    $modalp1.text('Attack: ' + data.data[key].info.attack)
    $modalp2.text('Defense: ' + data.data[key].info.defense)
    $modalp3.text('Difficulty: ' + data.data[key].info.difficulty)

    $modalText.append($splashImg, $modalName, $modalTitle, $modalp1, $modalp2, $modalp3)
    $splashImg.attr('src', champSplash)

    $modal.append($modalText)
    $nameDiv.text(data.data[key].name)
    $champImg.attr('src', champImg)

    $champDiv.append($nameDiv, $champImg)
    $('.champion-cards').append($champDiv)

    // const closeModal = () => {
    //   $modal.detach();
    // }

    $champDiv.on('click', event => {
      $champDiv.append($modal)

      // window.on('click', event => {
      //   if (event.target == modal) {
      //     closeModal();
      // })
    })

    }
  },
  (error) => {
    console.log('doesn\'t work');
  }
)

})
