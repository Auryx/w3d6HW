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
    
    //// was getting errors if I tried to do addClass on the text line
    $invCloak.addClass('secret')
    $magicMap.addClass('secret')
    $timeTurner.addClass('secret')

    $ul.append($butterBeer, $invCloak, $magicMap, $timeTurner, $leash, $beans)
    console.dir($ul)
    $('#container').append($ul)

    // Year 4
    const $table = $('<table>')
    const $thead = $('<thead>')
    const $thDay = $('<th>').text('Day')
    const $thClasses = $('<th>').text('Classes')
    $thead.append($thDay, $thClasses)

    // Wanted to practice DRY code, but couldn't get the function working
    
    // const tableFill = (x,y,z) => {
    //     const ($tr + x) = $('<tr>')
    //     const ($td + x) = $('<td>').text('y')
    //     const ($td + x + Classes) = $('<td>').text('z')
    //     ($tr+x).append(($td + x), ($td + x + Classes))
    // }
    const $trMon = $('<tr>')
    const $tdMon = $('<td>').text('Monday')
    const $tdMonClasses = $('<td>').text('Herbology, Divination')
    $trMon.append($tdMon, $tdMonClasses)

    const $trTue = $('<tr>')
    const $tdTue = $('<td>').text('Tuesday')
    const $tdTueClasses = $('<td>').text('History of Magic, Charms')
    $trTue.append($tdTue, $tdTueClasses)

    const $trWed = $('<tr>')
    const $tdWed = $('<td>').text('Wednesday')
    const $tdWedClasses = $('<td>').text('Potions, Arithmancy')
    $trWed.append($tdWed, $tdWedClasses)

    const $trThu = $('<tr>')
    const $tdThu = $('<td>').text('Thursday')
    const $tdThuClasses = $('<td>').text('Transfiguration, Study of Ancient Runes')
    $trThu.append($tdThu, $tdThuClasses)

    const $trFri = $('<tr>')
    const $tdFri = $('<td>').text('Friday')
    const $tdFriClasses = $('<td>').text('Defense Against the Dark Arts, Quidditch practice')
    $trFri.append($tdFri, $tdFriClasses)

    $table.append($thead, $trMon, $trTue, $trWed, $trThu, $trFri)
    const $time = $('<h5>').text('Spring 2017')
    $('#container').append($time, $table)
});
