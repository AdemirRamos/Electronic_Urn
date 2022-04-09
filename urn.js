function operations() {
    let number1 = document.getElementsByClassName('number1')[0]
    let number2 = document.getElementsByClassName('number2')[0]
    let buttons = document.getElementsByClassName('button')

    let span_name = document.getElementById('span_name')
    let span_party = document.getElementById('span_party')
    let candidate_image = document.getElementById('candidate_image')
    let post_name = document.getElementById('post_name')

    let correct = document.getElementById('correct')
    let confirm = document.getElementById('confirm')
    let blank = document.getElementById('blank')

    let post_text = document.getElementsByClassName('post')[0]
    let numbers_text = document.getElementsByClassName('numbers')[0]
    let name_text = document.getElementsByClassName('name')[0]
    let party_text = document.getElementsByClassName('party')[0]
    let finalDisplay = document.getElementById('final_display')
    let second_text = document.getElementById('FDSecondText')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].innerHTML == '1') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '2') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '3') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '4') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '5') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '6') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '7') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '8') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (buttons[i].innerHTML == '9') {
                if(number1.innerHTML == '') {
                    number1.innerHTML = buttons[i].innerHTML
                }

                else if (!number1.innerHTML == '') {
                    if (number2.innerHTML == '') {
                        number2.innerHTML = buttons[i].innerHTML
                    }
                }

                else if (!number1.innerHTML == '' && !number2.innerHTML == '') {}
            }

            if (number1.innerHTML == '1' && number2.innerHTML == '7') {
                span_name.innerHTML = 'Candidate 01'
                span_party.innerHTML = 'Party 01'
                candidate_image.src = 'Pictures/p1.jpg'
            }

            if (number1.innerHTML == '1' && number2.innerHTML == '8') {
                span_name.innerHTML = 'Candidate 02'
                span_party.innerHTML = 'Party 02'
                candidate_image.src = 'Pictures/p2.jpg'
            }

            if (number1.innerHTML == '1' && number2.innerHTML == '9') {
                span_name.innerHTML = 'Candidate 03'
                span_party.innerHTML = 'Party 03'
                candidate_image.src = 'Pictures/p3.jpg'
            }

            correct.addEventListener('click', function() {
                if (!number2.innerHTML == '') {
                    number2.innerHTML = ''
                    span_name.innerHTML = ''
                    span_party.innerHTML = ''
                    candidate_image.src = 'Pictures/avatar.png'
                }

                else if (!number1.innerHTML == '') {
                    number1.innerHTML = ''
                    span_name.innerHTML = ''
                    span_party.innerHTML = ''
                    candidate_image.src = 'Pictures/avatar.png'
                }
            })

            confirm.addEventListener('click', governor)

            function governor() {
                number1.innerHTML = ''
                number2.innerHTML = ''
                span_name.innerHTML = ''
                span_party.innerHTML = ''
                candidate_image.src = 'Pictures/avatar.png'
                post_name.innerHTML = 'Governor'

                confirm.addEventListener('mouseenter', function() {
                    confirm.removeEventListener('click', governor)
                    confirm.addEventListener('click', president)
                })
            }

            function president() {
                number1.innerHTML = ''
                number2.innerHTML = ''
                span_name.innerHTML = ''
                span_party.innerHTML = ''
                candidate_image.src = 'Pictures/avatar.png'
                post_name.innerHTML = 'President'

                confirm.addEventListener('mouseenter', function() {
                    confirm.removeEventListener('click', president)
                    confirm.addEventListener('click', final_display)
                })
            }

            function final_display() {
                number1.style.display = 'none'
                number2.style.display = 'none'
                span_name.style.display = 'none'
                span_party.style.display = 'none'
                candidate_image.style.display = 'none'
                post_name.style.display = 'none'
                post_text.style.display = 'none'
                numbers_text.style.display = 'none'
                name_text.style.display = 'none'
                party_text.style.display = 'none'
                finalDisplay.style.display = 'flex'
            }
        })

        blank.addEventListener('click', function() {
            second_text.style.display = 'flex'
            number1.style.display = 'none'
            number2.style.display = 'none'
            span_name.style.display = 'none'
            span_party.style.display = 'none'
            candidate_image.style.display = 'none'
            post_name.style.display = 'none'
            post_text.style.display = 'none'
            numbers_text.style.display = 'none'
            name_text.style.display = 'none'
            party_text.style.display = 'none'

            if (!finalDisplay.style.display == '') {
                second_text.style.display = ''
            }
        })
    }
}

function information() {
    let information_button = document.getElementsByClassName('information_button')[0]
    let information_text = document.getElementById('information_text')

    information_button.addEventListener('click', function() {
        if (information_text.style.maxHeight) {
            information_text.style.maxHeight = null
        }
    
        else {
            information_text.style.maxHeight = information_text.scrollHeight + 'px'
        }
    })
}

window.addEventListener('load', operations)
window.addEventListener('load', information)
