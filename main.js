const allInOnelol = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    if (response.status == 200) {
        console.log('all good da, The data has been successively fetched')
    } else {
        alert("Uh oh, looks like we couldn't get the joke :(")
    }
    const data = await response.json();
    console.log(data.setup)
    console.log(data.punchline)
    console.log(data)
    const themeChange = document.getElementById('themeChange');

    console.log(themeChange.innerText, typeof(themeChange.innerText))

    themeChange.addEventListener('click', () => {
        if (themeChange.innerText === 'click here for dark mode!'){
        const styles = document.getElementById('styles')
        themeChange.innerText = 'click here for light mode!'
        styles.setAttribute('href', 'dark.css')   
        } else {
        styles.setAttribute('href', 'light.css')
        themeChange.innerText = 'click here for dark mode!'
        }
    })
    
    const jokesStart = document.getElementById('jokesStart')
    jokesStart.addEventListener("click", () => {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                document.getElementById("notification").play();
                new Notification("Hey, your joke is here!", {
                    body: `${data.setup}` + ` ${data.punchline}`,
                    icon: 'https://img-15.stickers.cloud/packs/e9a07fd0-82b8-4fcb-9323-40098b3a396e/webp/f5f75e52-1373-4ea7-98fd-52aaae2c147a.webp',
                })

            } else {
                alert('Whoops, looks like you need to grant permission for notifications!')
            }
        })
    })

}

allInOnelol()


