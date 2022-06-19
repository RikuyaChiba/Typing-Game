window.addEventListener('load', () => {

    var wordList = [
        'hello', 'this', 'apple', 'California', 'banana',
    ]

    function getRandomWord() {
        let word = wordList[Math.floor(Math.random() * wordList.length)];
        return word;
    }

    function event() {
        let element = document.getElementById('start-button');
        element.addEventListener('click',  function() {
            let word = getRandomWord();
            element.innerHTML = word;
        })
    }

    event();
})
