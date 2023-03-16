
const username = "Michael"

console.log(`Hello ${username}, welcome to Song Of The Day!`)

console.log('Please input your desired genre in lower-case text: (Folk, Indie Rock, Soul, or Random)')

let genre = "soul"

const genreCheck = genreString => {

    
    
    switch (genreString) {
        case 'folk':
            return true
            break;
        case 'indie rock':
            return true
            break;
        case 'soul':
            return true
            break;
        case 'random':
            return true
            break;
        default:
            return false;
            break;
    }

    }


if (genreCheck(genre)) {
    console.log('Your selected genre is: ' + genre)
}else {
    console.log('Please use an identified genre: Folk, Indie Rock, Soul, or Random. ' + genre + ' is not an available genre' )

}

const folkSongs = ['Rocky Mountain High - John Denver', 'Beach Baby - Bon Iver', 'Montezuma - Fleet Foxes', 'Big Black Car - Gregory Allan Isakoff', 'Carrie and Lowell - Sufjan Stevens']
const indieRockSongs = ['Lava - Still Woozy', 'A Punk - Vampire Weekend', 'Someday - Strokes', 'Peach Pit - Peach Pit', 'New York - J.W Francis']
const soulSongs = ['Tired of Being Alone - Al Green', 'Chocolate Hills - Leon Bridges', 'I Don\'t Know - Nick Hakim', 'Lovely Day - Bill Withers', 'Betray My Heart - D\' Angelo']
const randomSongs = ['Rocky Mountain High - John Denver', 'Beach Baby - Bon Iver', 'Montezuma - Fleet Foxes', 'Big Black Car - Gregory Allan Isakoff', 'Lava - Still Woozy', 'A Punk - Vampire Weekend', 'Someday - Strokes', 'Peach Pit - Peach Pit', 'New York - J.W Francis', 'Tired of Being Alone - Al Green', 'Chocolate Hills - Leon Bridges', 'I Don\'t Know - Nick Hakim', 'Lovely Day - Bill Withers', 'Betray My Heart - D\' Angelo']

const folkQuotes = ["'This machine kills fascists.' - Woodie Guthrie", "'If Music is a Place -- then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.' - Vera Nazarin", "'One good song with a message can bring a point more deeply to more people than a thousand rallies.' - Phil Ochs"]
const indieRockQuotes =["'I didn\'t grow up with indie rock - I mean, I listened to bands that are considered indie rock, but I think that term is dead and uninteresting.' - Justin Vernon", "'Goliath was the best thing that ever happened to David.' -Carly Lynn Hall", "'What were we, but kids with apartments and jobs anyway?.' -Brian Joyce"]
const soulQuotes = ["'Dreams, if they're any good, are always a little bit crazy.' -Ray Charles", "'The music is the message, the message is the music.' -Al Green", "'No one can fill those of your needs that you won't let show.' -Bill Withers"]
const randomQuotes = ["'Dreams, if they're any good, are always a little bit crazy.' -Ray Charles", "'The music is the message, the message is the music.' -Al Green", "'No one can fill those of your needs that you won't let show.' -Bill Withers", "'I didn\'t grow up with indie rock - I mean, I listened to bands that are considered indie rock, but I think that term is dead and uninteresting.' - Justin Vernon", "'Goliath was the best thing that ever happened to David.' -Carly Lynn Hall", "'What were we, but kids with apartments and jobs anyway?.' -Brian Joyce", "'This machine kills fascists.' - Woodie Guthrie", "'If Music is a Place -- then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.' - Vera Nazarin", "'One good song with a message can bring a point more deeply to more people than a thousand rallies.' - Phil Ochs"]


const outputSong = genre => {
    const randomizer = songGenre =>
    {return Math.floor(Math.random() * (songGenre.length -1))}

    //console.log(folkSongs[randomizer(folkSongs)])


    if (genre === 'folk'){
        return folkSongs[randomizer(folkSongs)]
    } else if (genre === 'indie rock'){
        return indieRockSongs[randomizer(indieRockSongs)]
    }else if (genre === 'soulSongs'){
            return soulSongs[randomizer(soulSongs)]
    }else if (genre === randomSongs){
            return randomSongs[randomizer(randomSongs)]
    }else {
            return 'unidentified genre'
        }
    }
const outputQuotes = genre => {

    const randomizer = genreQuote =>{
        return Math.floor(Math.random() * (genreQuote.length -1) )
    }
    if (genre === 'folk'){
        return folkQuotes[randomizer(folkQuotes)]
    } else if (genre === 'indie rock'){
        return indieRockQuotes[randomizer(indieRockQuotes)]
    } else if (genre === 'soul'){
        return soulQuotes[randomizer(soulQuotes)]
    } else {
        return 'unidentified genre'
    }


}


console.log(`Your song of the day is: ${outputSong(genre)}. Your quote of the day is: ${outputQuotes(genre)} `)

