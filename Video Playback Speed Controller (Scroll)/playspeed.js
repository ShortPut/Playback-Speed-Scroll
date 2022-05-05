document.addEventListener('wheel', e => {
    if (e.shiftKey) {
        document.querySelector('video').playbackRate -= Math.sign(e.deltaY) * 0.25
    }
})