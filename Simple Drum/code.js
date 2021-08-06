window.addEventListener('load', () => {
    // Sound One
    const soundOne = document.getElementById('sound-1');
    const padOne = document.getElementById('pad-1');
    padOne.addEventListener('click', () => {
        soundOne.currentTime = 0;
        soundOne.play();
    });
    // Sound Two
    const soundTwo = document.getElementById('sound-2');
    const padTwo = document.getElementById('pad-2');
    padTwo.addEventListener('click', () => {
        soundTwo.currentTime = 0;
        soundTwo.play();
    });
    // Sound Three
    const soundThree = document.getElementById('sound-3');
    const padThree = document.getElementById('pad-3');
    padThree.addEventListener('click', () => {
        soundThree.currentTime = 0;
        soundThree.play();
    });
    // Sound Four
    const soundFour = document.getElementById('sound-4');
    const padFour = document.getElementById('pad-4');
    padFour.addEventListener('click', () => {
        soundFour.currentTime = 0;
        soundFour.play();
    });
    // Sound Five
    const soundFive = document.getElementById('sound-5');
    const padFive = document.getElementById('pad-5');
    padFive.addEventListener('click', () => {
        soundFive.currentTime = 0;
        soundFive.play();
    });
    // Sound Six
    const soundSix = document.getElementById('sound-6');
    const padSix = document.getElementById('pad-6');
    padSix.addEventListener('click', () => {
        soundSix.currentTime = 0;
        soundSix.play();
    });
    // Sound Seven
    const soundSeven = document.getElementById('sound-7');
    const padSeven = document.getElementById('pad-7');
    padSeven.addEventListener('click', () => {
        soundSeven.currentTime = 0;
        soundSeven.play();
    });
    // Sound Eight
    const soundEight = document.getElementById('sound-8');
    const padEight = document.getElementById('pad-8');
    padEight.addEventListener('click', () => {
        soundEight.currentTime = 0;
        soundEight.play();
    });
    // Sound End
    const soundEnd = document.getElementById('sound-9');
    const padEnd = document.getElementById('pad-9');
    padEnd.addEventListener('click', () => {
        soundEnd.currentTime = 0;
        soundEnd.play();
        document.getElementById('click-pause').addEventListener('click', () => {
            soundEnd.pause();
        })
    });
});
// Change Color drum pad
document.getElementById("apply").addEventListener("click", colorChange);
document.getElementById("color").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        colorChange()
    }
})
function colorChange() {
    setTimeout(() => {
        const colors = document.getElementById('color').value;
        colors.value = '';
        const pad1 = document.getElementById('pad-1');
        const pad2 = document.getElementById('pad-2');
        const pad3 = document.getElementById('pad-3');
        const pad4 = document.getElementById('pad-4');
        const pad5 = document.getElementById('pad-5');
        const pad6 = document.getElementById('pad-6');
        const pad7 = document.getElementById('pad-7');
        const pad8 = document.getElementById('pad-8');
        const pad9 = document.getElementById('pad-9');
        pad1.style.backgroundColor = colors;
        pad2.style.backgroundColor = colors;
        pad3.style.backgroundColor = colors;
        pad4.style.backgroundColor = colors;
        pad5.style.backgroundColor = colors;
        pad6.style.backgroundColor = colors;
        pad7.style.backgroundColor = colors;
        pad8.style.backgroundColor = colors;
        pad9.style.backgroundColor = colors;
        if (colors === '#fff' || colors === 'white' || colors === '#ffffff') {
            document.getElementById('gta').style.color = '#555';
        }
    }, 300)
}