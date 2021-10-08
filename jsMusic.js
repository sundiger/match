$(function() {
// console.clear()

class PlayerWidget {
    constructor(player, tracks) {
        // State
        this.current = 0
        this.next = 0
        this.currentImage = 0
        this.tracks = tracks
        this.player = player
        this.isPaused = false
        this.interval = null
        // DOM
        this.progressBar = this.player.querySelector('.c-player__ui__seek__seeker div')
        this.progress = this.player.querySelector('.c-player__ui__seek__seeker')
        this.playBtn = this.player.querySelector('.c-player__ui__play')
        this.pauseBtn = this.player.querySelector('.c-player__ui__pause')
        this.pauseSvgs = this.pauseBtn.querySelectorAll('svg')
        this.prevBtn = this.player.querySelector('.c-player__ui__prev')
        this.nextBtn = this.player.querySelector('.c-player__ui__next')
        this.dots = this.player.querySelectorAll('.c-player__ui__dots__dot')
        this.bindEvents()
    }

    bindEvents() {
        this.nextBtn.addEventListener('click', e => {
            let c_player_back = document.getElementById('c_player')
                c_player_back.classList.remove("c_player_background")
                c_player_back.classList.remove("c_player_background2")
            let audio = new Audio()
            audio.pause()
            this.nextTrack(e)})
        this.prevBtn.addEventListener('click', e => {
            let c_player_back = document.getElementById('c_player')
                c_player_back.classList.remove("c_player_background")
                c_player_back.classList.remove("c_player_background2")
                this.prevTrack(e)
            })
        this.playBtn.addEventListener('click', () => {
            let nameMusic = document.getElementById('nameMusic')

            // let c_player_back = document.getElementById('c_player')
            let c_player_back = document.getElementById('c_player')
                c_player_back.classList.add("c_player_background")
                c_player_back.classList.add("c_player_background2")


            if (nameMusic.innerText === '1') {
                let audio = new Audio()
                audio.src = tracks[0].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '2') {
                let audio = new Audio()
                audio.src = tracks[1].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '3') {
                let audio = new Audio()
                audio.src = tracks[2].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '4') {
                let audio = new Audio()
                audio.src = tracks[3].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '5') {
                let audio = new Audio()
                audio.src = tracks[4].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '6') {
                let audio = new Audio()
                audio.src = tracks[5].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '7') {
                let audio = new Audio()
                audio.src = tracks[6].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '8') {
                let audio = new Audio()
                audio.src = tracks[7].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '9') {
                let audio = new Audio()
                audio.src = tracks[8].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            } else if (nameMusic.innerText === '10') {
                let audio = new Audio()
                audio.src = tracks[9].audio
                audio.play()
                this.playTrack()
                this.pauseBtn.addEventListener('click', () => {audio.pause()})
                this.prevBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
                this.nextBtn.addEventListener('click', e => {audio.pause(), this.pauseTrack()})
            }
        })
        this.pauseBtn.addEventListener('click', () => {
            let c_player_back = document.getElementById('c_player')
                c_player_back.classList.remove("c_player_background")
                c_player_back.classList.remove("c_player_background2")
            this.pauseTrack()
        })
    }

    playTrack() {
        this.tiltX()

        this.tl
            .set(this.pauseBtn, {
                transformPerspective: 1000,
                rotationY: 45,
                rotationX: -45,
                scale: .8
            })
            .to(this.playBtn, .2, {
                y: 8,
                yoyo: true,
                ease: Sine.easeInOut,
                repeat: 1
            }, 0)

            // Dots
            .set(this.dots, {autoAlpha: 1})
            .to(this.dots[1], .5, {
                y: 35,
                scale: .4,
                onComplete: () => {
                    this.tl.set(this.dots, {autoAlpha: 0})
                    this.play()
                },
                ease: Sine.easeIn
            }, .65)
            .to(this.dots[2], .9, {
                y: 35,
                scale: .7,
                ease: Power4.easeIn
            }, 0)
            .to(this.dots[3], .9, {
                y: 15,
                scaleX: 0,
                scaleY: 2,
                ease: Power4.easeIn
            }, 0)
    }

    pauseTrack() {
        this.isPaused = true
        this.tiltX()
        this.tl
            .set(this.playBtn, {rotation: -45})
            .to(this.pauseSvgs[0], .25, {
                y: 4,
                yoyo: true,
                repeat: 1,
                ease: Sine.easeInOut
            })
            .to(this.playBtn, .3, {
                rotation: 0,
                scale: 1,
                ease: Power4.easeIn,
                autoAlpha: .9
            }, .9)
            .to(this.pauseBtn, .1, {autoAlpha: 0}, 1)
            .to(this.progress, .7, {
                width: '0%',
                ease: Power4.easeOut
            }, .8)
            .to(this.pauseSvgs[1], .2, {autoAlpha: 0}, .9)
            .to(this.progress, .6, {
                alpha: 0,
                ease: Power4.easeInOut
            }, .8)
            .set(this.dots, {autoAlpha: 1}, 1.1)
            .to(this.dots[2], .6, {
                y: '-=35',
                scale: 1,
                ease: Power4.ease
            }, 1.1)
            .to(this.dots[1], .6, {
                y: '-=35',
                scale: 1,
                ease: Power4.ease,
                onComplete: () => this.tl.set(this.dots, {autoAlpha: 0})
            }, 1.1)
            .set(this.dots[3], {
                y: "-=15",
                scaleX: 1,
                scaleY: 1,
                ease: Power4.ease
            })
            .to(this.player, .6, {
                paddingBottom: '.4rem'
            }, 1)
    }

    nextTrack(e) {
        this.incrementNextTrack()
            .animatePrevNext(e)
            .tiltY('right')
            .rewind()
            .changeImage('+')
    }

    prevTrack(e) {
        this.decrementNextTrack()
            .animatePrevNext(e)
            .tiltY('left')
            .rewind()
            .changeImage('-')
    }

    play() {
        this.tl
            .set(this.pauseSvgs[1], {scale: 0})
            .set(this.progress, {alpha: 1})
            .to(this.progress, .8, {
                width: '100%',
                ease: Power4.easeOut,
                onComplete: () => {
                    this.isPaused = false
                    this.setInterval()
                }
            }, 0)
            .to(this.playBtn, .3, {
                rotation: -30,
                scale: .8,
                ease: Power4.easeIn,
                autoAlpha: 0
            }, .25)
            .to(this.pauseBtn, .1, {
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                autoAlpha: 1,
                onComplete: () => {
                    this.tl
                        .set(this.pauseBtn, {
                            rotationY: 0,
                            rotationX: 0,
                            scale: 1
                        })
                }
            }, 0.35)
            .to(this.pauseSvgs[1], .3, {
                scale: 1,
                autoAlpha: 1,
                ease: Back.easeOut
            }, .5)
            .to(this.player, .6, {
                paddingBottom: '2rem'
            }, 0.2)
    }

    rewind() {
        this.tl.to(this.progressBar, .5, {width: '-2%'})
        return this
    }

    incrementNextTrack() {
        if (this.current >= (this.tracks.length - 1)) {
            this.next = -1
        }
        this.next++
        return this
    }

    decrementNextTrack() {
        if (this.current <= 0) {
            this.next = this.tracks.length
        }
        this.next--
        return this
    }

    animatePrevNext(e) {
        const icons = e.currentTarget.querySelectorAll('svg')

        this.tl
            .set(icons, {scale: 1, alpha: .6})
            .to(icons[1], .18, {
                scale: .8,
                repeat: 1,
                alpha: 1,
                yoyo: true
            })
            .to(icons[0], .18, {
                scale: .8,
                alpha: 1,
                repeat: 1,
                yoyo: true
            }, '-=.22')

        return this
    }

    tiltY(side) {
        this.tl
            .set(".c-player", {
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
                rotationY: 0
            })
            .to('.c-player', .25, {
                rotationY: side === 'right' ? 8 : -8,
                ease: Sine.easeInOut,
                yoyo: true,
                repeat: 1
            }, 0)

        return this
    }

    tiltX() {
        this.tl
            .set(this.player, {
                transformPerspective: 1000,
                rotationX: 0,
                rotationY: 0
            })
            .to(this.player, .25, {
                rotationX: -4,
                ease: Sine.easeInOut,
                yoyo: true,
                repeat: 1
            })
    }

    changeImage(direction) {
        let images = this.player.querySelectorAll('img'),
            current = this.currentImage % 2

        images[1 - current].src = this.tracks[this.next].image

        this.tl
            .set('.c-player__picture__images', {rotation: 0})
            .to('.c-player__picture__images', 1.8, {
                rotation: direction + '=360',
                ease: Back.easeOut
            })
            .to(images[current], 1.8, {alpha: 0, ease: Expo.easeOut}, 0)
            .to(images[1 - current], 1.8, {
                alpha: 1,
                ease: Expo.easeOut
            }, 0)

        this.updateTrackName()
        this.updateBackground()

        // Set props for next transition
        this.current = this.next
        this.currentImage = ++this.currentImage % 2
    }

    updateTrackName() {
        this.tl
            .to('.c-player__details strong', .3, {
                delay: .2,
                alpha: 0,
                scale: 0,
                ease: Back.easeIn,
                onComplete: timeline => {
                    timeline.target[0].innerText = this.tracks[this.next].artist

                    this.tl.to(timeline.target[0], .25, {
                        scale: 1,
                        delay: .1,
                        alpha: 1,
                        ease: Back.easeInOut
                    })
                },
                onCompleteParams: ['{self}']
            })
            .to('.c-player__details span', .25, {
                alpha: 0,
                onComplete: timeline => {
                    timeline.target[0].innerText = this.tracks[this.next].name

                    this.tl.to(timeline.target[0], .2, {alpha: 1})
                },
                onCompleteParams: ['{self}']
            }, .5)
    }

    updateBackground() {
        const gradient = this.tracks[this.next].gradient

        this.tl
            .to('.o-background', 1.5, {
                'background-image': 'linear-gradient(to right top, ' + gradient + ')',
                ease: Sine.easeOut
            })
    }

    setInterval() {
        if (this.interval !== null) {
            return
        }
        this.interval = setInterval(() => {
            if (this.isPaused === false) {
                this.tl.to(this.progressBar, 0.2, {width: '+=1%'})
            }
        }, 1000)
    }

    get tl() {
        return new TimelineLite()
    }
}

const tracks = [
    {
        artist: 'Alex Anisenko',
        name: '1',
        image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&h=300&w=300',
        gradient: '#ffc4ee, #ead1fc, #dadcff, #d5e5fb, #dceaf3',
        audio: 'mp3/alex.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '2',
        image: 'https://images.unsplash.com/photo-1564463836192-7ca5d09c8e92?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&h=300&w=300',
        gradient: '#8bd0ff, #a4daff, #bbe3ff, #d2edff, #e8f6ff',
        audio: 'mp3/alex2.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '3',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/d2s.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '4',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/masterMenu.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '5',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/trailerGame.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '6',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/horror.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '7',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/horrorTrailer.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '8',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/forGame.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '9',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/remixDandyGame.mp3'
    }, {
        artist: 'Alex Anisenko',
        name: '10',
        image: 'https://images.unsplash.com/photo-1563386732972-99222d5cacb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300',
        gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8',
        audio: 'mp3/10.mp3'
    }
]

const widget = new PlayerWidget(document.querySelector('.c-player'), tracks)
})