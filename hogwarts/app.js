// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
$(() => {
    // Year 1
    const $container = $('#container')
    const $h1 = $('<h1>')
    $h1.text('Hogwarts')
    $('#container').append($h1)

    // Year 2
    const $name = $('<h2>').text('Paul Bunda')
    const $house = $('<h3>').text('Ravenclaw')
    const $pet = $('<h4>').text('Leopold').addClass('axolotl')
    const $wand = $('<h4>').text('Holly Wand with Unicorn Hair Core')
    $('#container').append($name, $house, $pet, $wand)

    // Year 3
    const $ul = $('<ul>').attr('storage', 'trunk')
    const $butterBeer = $("<li>").text("Butter Beer");
    const $invCloak = $("<li>").text("Invisibility Cloak");
    const $magicMap = $("<li>").text("Magic Map");
    const $timeTurner = $("<li>").text("Invisibility Cloak");
    const $leash = $("<li>").text("Leash").addClass('axolotl');
    const $beans = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
    
    //was getting errors if I tried to do addClass on the text line
    $invCloak.addClass('secret')
    $magicMap.addClass('secret')
    $timeTurner.addClass('secret')

    $ul.append($butterBeer, $invCloak, $magicMap, $timeTurner, $leash, $beans)
    console.dir($ul)
    $('#container').append($ul)
});
