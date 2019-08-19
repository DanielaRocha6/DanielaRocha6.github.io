// eslint-disable-next-line no-unused-vars
function updatePhotos () {
  'use strict'
  const max = 11
  let i = 1
  setInterval(function () {
    if (i === max) {
      i = 1
    }
    document.getElementById('photos-family-friends').setAttribute('src', './img/' + i + '.jpg')
    i++
  }, 2000)
}

// eslint-disable-next-line no-unused-vars
function updateInterests () {
  'use strict'
  const interests = ['Visual Computing', 'Cyber Security', 'Business Intelligence']
  const photos = ['visual-computing', 'cyber-security', 'business-intelligence']
  let i = 2
  let j = 1
  let k = 0
  setInterval(function () {
    if (i === -1) {
      i = 2
    } else if (j === -1) {
      j = 2
    } else if (k === -1) {
      k = 2
    }

    document.getElementById('academic-title-1').innerText = interests[i]
    document.getElementById('academic-photo-1').setAttribute('src', './img/' + photos[i] + '.jpg')
    document.getElementById('academic-title-2').innerText = interests[j]
    document.getElementById('academic-photo-2').setAttribute('src', './img/' + photos[j] + '.jpg')
    document.getElementById('academic-title-3').innerText = interests[k]
    document.getElementById('academic-photo-3').setAttribute('src', './img/' + photos[k] + '.jpg')
    i--
    j--
    k--
  }, 2000)
}
