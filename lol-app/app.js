$(() => {

  // gave champs a variable
  let champs;

  // used ajax to call api
  $.ajax({ url: 'https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json'})
  .then(
  (data) => {
  // set champs equal to data.data so I can pull data from my api object
    champs = data.data;
    renderChamps(champs);
  })
  
  // created a renderChamps function to push in champion data
  let renderChamps = (champs) => {
    for (let key in champs) {
    // created all div's and modals for champion cards by taking info from api
    const $champDiv = $('<div>').addClass('champion')
    const $champImg = $('<img>').addClass('champion-img')
    const $splashImg = $('<img>').addClass('champion-splash')
    const $nameDiv = $('<div>').addClass('name')
    const $modal = $('<modal>').attr('id', 'modal')
    const $modalText = $('<div>').attr('id', 'modal-textbox')
    const $modalName = $('<h2>').text(champs[key].name)
    const $modalTitle = $('<h4>').text(champs[key].title)
    const $modalp1 = $('<p>').attr('id', 'attack')
    const $modalp5 = $('<p>').attr('id', 'magic')
    const $modalp2 = $('<p>').attr('id', 'defence')
    const $modalp3 = $('<p>').attr('id', 'difficulty')
    const $modalp4 = $('<p>').attr('id', 'type')
    const champImg = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champs[key].id + '_0.jpg'
    const champSplash = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champs[key].id + '_0.jpg'

    $modalp1.text('Attack: ' + champs[key].info.attack)
    $modalp5.text('Magic: ' + champs[key].info.magic)
    $modalp2.text('Defense: ' + champs[key].info.defense)
    $modalp3.text('Difficulty: ' + champs[key].info.difficulty)
    $modalp4.text('Type: ' + champs[key].tags)

    $modalText.append($splashImg, $modalName, $modalTitle, $modalp1, $modalp5, $modalp2, $modalp3, $modalp4)
    $splashImg.attr('src', champSplash)

    $modal.append($modalText)
    $nameDiv.text(champs[key].name)
    $champImg.attr('src', champImg)

    $champDiv.append($nameDiv, $champImg)
    $('.champion-cards').append($champDiv)
    $modal.toggle()

      $champDiv.on('click', event => {
        $champDiv.append($modal)
        $modal.toggle();
      })
    }
  }

  // search event
  $('form').on('submit', event => {
    event.preventDefault();

    // made a variable with an object to store searched champions
    const filteredChamps = {}

    const userInput = $('input[type="text"]').val();
      for (let key in champs) {
        // user input equals champion *full* name or first letter -->
        if (userInput.toLowerCase() == champs[key].name.toLowerCase() || userInput.toLowerCase() == champs[key].name.charAt(0).toLowerCase()) {
          filteredChamps[key] = champs[key]
        }
      }

      // takes out all the champion cards
      $('.champion-cards').empty();
      // renders the champion(s) name that is equal to user input
      renderChamps(filteredChamps);

      // console.log(userInput);
      // console.log(champs);

      $('form').trigger('reset');
    })

  $('.logo').on('click', event => {
    location.reload();
  })
})
