const hrefs = {
  buyToken: '/buy',
  instagram: '/insta',
  facebook: '/face',
  twitter: '/tt',
}

const buyTokenElements = document.getElementsByClassName('buy-token')
for ( let i = 0; i < buyTokenElements.length; i++ ) { buyTokenElements[i].setAttribute('href', hrefs.buyToken) }

const instagramElements = document.getElementsByClassName('social-instagram')
for ( let i = 0; i < instagramElements.length; i++ ) { instagramElements[i].setAttribute('href', hrefs.instagram) }

const facebookElements = document.getElementsByClassName('social-facebook')
for ( let i = 0; i < facebookElements.length; i++ ) { facebookElements[i].setAttribute('href', hrefs.facebook) }

const twitterElements = document.getElementsByClassName('social-twitter')
for ( let i = 0; i < twitterElements.length; i++ ) { twitterElements[i].setAttribute('href', hrefs.twitter) }

