/* block 'double tap zoomin' */
let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     let now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
/* block 'double tap zoomin' */

const cardList = ['kaho__seasons__ur',
                  'kaho__seasons__sr',
                  'kozue__seasons__ur',
                  'kozue__seasons__sr',
                  'sayaka__seasons__ur',
                  'sayaka__seasons__sr',
                  'tsuzuri__seasons__ur',
                  'tsuzuri__seasons__sr',
                  'rurino__seasons__ur',
                  'rurino__seasons__sr',
                  'megumi__seasons__ur',
                  'megumi__seasons__sr',
                  'kaho__normal__ur',
                  'kaho__normal__sr',
                  'kozue__normal__ur',
                  'kozue__normal__sr',
                  'sayaka__normal__ur',
                  'sayaka__normal__sr',
                  'tsuzuri__normal__ur',
                  'tsuzuri__normal__sr',
                  'rurino__normal__ur',
                  'rurino__normal__sr',
                  'megumi__normal__ur',
                  'megumi__normal__sr'];

const cardNodeList = [];
const cardData = [];
const limitbreakData = [];
const db = firebase.firestore();


/* create cardNodeList, cardData, limitbreakData, onclick changeCard */
for (let i = 0; i < cardList.length; i++) {
    cardNodeList.push($('.' + cardList[i]));
    cardData.push([]);
    limitbreakData.push([]);
    for (let j = 0; j < cardNodeList[i].length; j++) {  
        cardData[i].push(0);
        limitbreakData[i].push(0);
        cardNodeList[i].eq(j).on("click", () => changeCard(cardNodeList[i], cardData[i] , j));
    }
}
/* create cardNodeList, cardData, limitbreakData, onclick changeCard */


/* add check Button */
let buttonCount = 0;
$('.checkButton').on("click", function() {
    buttonCount++;
    if (buttonCount % 2 === 0) {
        for (let i = 0; i < cardList.length; i++) {
            for (let j = 0; j < cardNodeList[i].length; j++) {
                cardNodeList[i].eq(j).off();
                cardNodeList[i].eq(j).on("click", () => changeCard(cardNodeList[i], cardData[i] , j));
            }
        }
        $('.checkButton').children().toggleClass("invisible")
    } else {
        for (let i = 0; i < cardList.length; i++) {
            for (let j = 0; j < cardNodeList[i].length; j++) {
                cardNodeList[i].eq(j).off();
                cardNodeList[i].eq(j).on("click", () => changeLimitbreak(cardNodeList[i], limitbreakData[i] , j));
            }
        }
        $('.checkButton').children().toggleClass("invisible")
    }
   
})
/* add check Button */

$('.loadDataButton').click(loadData);
$('.saveDataButton').click(saveData);


function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // db.collection("users").doc(user.uid).get().then;
        // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

function loadData() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            db.collection('users').doc(uid).get().then((result) => {
                if (result.data() === undefined) {
                    alert("Data doesn't exist");
                } else if (result.data() !== undefined && result.data().kaho__seasons__ur__limitbreak === undefined) {
                    
                    for (let i = 0; i < limitbreakData.length; i++) {
                        for (let j = 0; j < limitbreakData[i].length; j++) {
                            limitbreakData[i][j] = 0; 
                        }
                    }
                    db.collection('users').doc(uid).set({
                        kaho__seasons__ur__limitbreak: limitbreakData[0],
                        kaho__seasons__sr__limitbreak: limitbreakData[1],
                        kozue__seasons__ur__limitbreak: limitbreakData[2],
                        kozue__seasons__sr__limitbreak: limitbreakData[3],
                        sayaka__seasons__ur__limitbreak: limitbreakData[4],
                        sayaka__seasons__sr__limitbreak: limitbreakData[5],
                        tsuzuri__seasons__ur__limitbreak: limitbreakData[6],
                        tsuzuri__seasons__sr__limitbreak: limitbreakData[7],
                        rurino__seasons__ur__limitbreak: limitbreakData[8],
                        rurino__seasons__sr__limitbreak: limitbreakData[9],
                        megumi__seasons__ur__limitbreak: limitbreakData[10],
                        megumi__seasons__sr__limitbreak: limitbreakData[11],
                        kaho__normal__ur__limitbreak: limitbreakData[12],
                        kaho__normal__sr__limitbreak: limitbreakData[13],
                        kozue__normal__ur__limitbreak: limitbreakData[14],
                        kozue__normal__sr__limitbreak: limitbreakData[15],
                        sayaka__normal__ur__limitbreak: limitbreakData[16],
                        sayaka__normal__sr__limitbreak: limitbreakData[17],
                        tsuzuri__normal__ur__limitbreak: limitbreakData[18],
                        tsuzuri__normal__sr__limitbreak: limitbreakData[19],
                        rurino__normal__ur__limitbreak: limitbreakData[20],
                        rurino__normal__sr__limitbreak: limitbreakData[21],
                        megumi__normal__ur__limitbreak: limitbreakData[22],
                        megumi__normal__sr__limitbreak: limitbreakData[23]
                    }, { merge: true }).then(loadData());
                } else {
                    for (let i = 0; i < result.data().kaho__seasons__ur.length; i++){
                        cardData[0][i] = result.data().kaho__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().kaho__seasons__sr.length; i++){
                        cardData[1][i] = result.data().kaho__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().kozue__seasons__ur.length; i++){
                        cardData[2][i] = result.data().kozue__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().kozue__seasons__sr.length; i++){
                        cardData[3][i] = result.data().kozue__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().sayaka__seasons__ur.length; i++){
                        cardData[4][i] = result.data().sayaka__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().sayaka__seasons__sr.length; i++){
                        cardData[5][i] = result.data().sayaka__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__seasons__ur.length; i++){
                        cardData[6][i] = result.data().tsuzuri__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__seasons__sr.length; i++){
                        cardData[7][i] = result.data().tsuzuri__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().rurino__seasons__ur.length; i++){
                        cardData[8][i] = result.data().rurino__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().rurino__seasons__sr.length; i++){
                        cardData[9][i] = result.data().rurino__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().megumi__seasons__ur.length; i++){
                        cardData[10][i] = result.data().megumi__seasons__ur[i]
                    }
                    for (let i = 0; i < result.data().megumi__seasons__sr.length; i++){
                        cardData[11][i] = result.data().megumi__seasons__sr[i]
                    }
                    for (let i = 0; i < result.data().kaho__normal__ur.length; i++){
                        cardData[12][i] = result.data().kaho__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().kaho__normal__sr.length; i++){
                        cardData[13][i] = result.data().kaho__normal__sr[i]
                    }
                    for (let i = 0; i < result.data().kozue__normal__ur.length; i++){
                        cardData[14][i] = result.data().kozue__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().kozue__normal__sr.length; i++){
                        cardData[15][i] = result.data().kozue__normal__sr[i]
                    }
                    for (let i = 0; i < result.data().sayaka__normal__ur.length; i++){
                        cardData[16][i] = result.data().sayaka__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().sayaka__normal__sr.length; i++){
                        cardData[17][i] = result.data().sayaka__normal__sr[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__normal__ur.length; i++){
                        cardData[18][i] = result.data().tsuzuri__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__normal__sr.length; i++){
                        cardData[19][i] = result.data().tsuzuri__normal__sr[i]
                    }
                    for (let i = 0; i < result.data().rurino__normal__ur.length; i++){
                        cardData[20][i] = result.data().rurino__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().rurino__normal__sr.length; i++){
                        cardData[21][i] = result.data().rurino__normal__sr[i]
                    }
                    for (let i = 0; i < result.data().megumi__normal__ur.length; i++){
                        cardData[22][i] = result.data().megumi__normal__ur[i]
                    }
                    for (let i = 0; i < result.data().megumi__normal__sr.length; i++){
                        cardData[23][i] = result.data().megumi__normal__sr[i]
                    }

                    for (let i = 0; i < cardNodeList.length; i++) {
                        for (let j = 0; j < cardData[i].length; j++) {
                            displayCard(cardNodeList[i], cardData[i] , j);
                        }
                    }

                    for (let i = 0; i < result.data().kaho__seasons__ur__limitbreak.length; i++){
                        limitbreakData[0][i] = result.data().kaho__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kaho__seasons__sr__limitbreak.length; i++){
                        limitbreakData[1][i] = result.data().kaho__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kozue__seasons__ur__limitbreak.length; i++){
                        limitbreakData[2][i] = result.data().kozue__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kozue__seasons__sr__limitbreak.length; i++){
                        limitbreakData[3][i] = result.data().kozue__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().sayaka__seasons__ur__limitbreak.length; i++){
                        limitbreakData[4][i] = result.data().sayaka__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().sayaka__seasons__sr__limitbreak.length; i++){
                        limitbreakData[5][i] = result.data().sayaka__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__seasons__ur__limitbreak.length; i++){
                        limitbreakData[6][i] = result.data().tsuzuri__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__seasons__sr__limitbreak.length; i++){
                        limitbreakData[7][i] = result.data().tsuzuri__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().rurino__seasons__ur__limitbreak.length; i++){
                        limitbreakData[8][i] = result.data().rurino__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().rurino__seasons__sr__limitbreak.length; i++){
                        limitbreakData[9][i] = result.data().rurino__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().megumi__seasons__ur__limitbreak.length; i++){
                        limitbreakData[10][i] = result.data().megumi__seasons__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().megumi__seasons__sr__limitbreak.length; i++){
                        limitbreakData[11][i] = result.data().megumi__seasons__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kaho__normal__ur__limitbreak.length; i++){
                        limitbreakData[12][i] = result.data().kaho__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kaho__normal__sr__limitbreak.length; i++){
                        limitbreakData[13][i] = result.data().kaho__normal__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kozue__normal__ur__limitbreak.length; i++){
                        limitbreakData[14][i] = result.data().kozue__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().kozue__normal__sr__limitbreak.length; i++){
                        limitbreakData[15][i] = result.data().kozue__normal__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().sayaka__normal__ur__limitbreak.length; i++){
                        limitbreakData[16][i] = result.data().sayaka__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().sayaka__normal__sr__limitbreak.length; i++){
                        limitbreakData[17][i] = result.data().sayaka__normal__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__normal__ur__limitbreak.length; i++){
                        limitbreakData[18][i] = result.data().tsuzuri__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().tsuzuri__normal__sr__limitbreak.length; i++){
                        limitbreakData[19][i] = result.data().tsuzuri__normal__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().rurino__normal__ur__limitbreak.length; i++){
                        limitbreakData[20][i] = result.data().rurino__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().rurino__normal__sr__limitbreak.length; i++){
                        limitbreakData[21][i] = result.data().rurino__normal__sr__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().megumi__normal__ur__limitbreak.length; i++){
                        limitbreakData[22][i] = result.data().megumi__normal__ur__limitbreak[i]
                    }
                    for (let i = 0; i < result.data().megumi__normal__sr__limitbreak.length; i++){
                        limitbreakData[23][i] = result.data().megumi__normal__sr__limitbreak[i]
                    }

                    for (let i = 0; i < cardNodeList.length; i++) {
                        for (let j = 0; j < limitbreakData[i].length; j++) {
                            displayLimitbreak(cardNodeList[i], limitbreakData[i] , j);
                        }
                    }
                    alert("Data Loaded"); 
                }
            });
        } else {
            // User is signed out
            googleLogin();
        }
    });
}

function saveData() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            for (let i = 0; i < cardData.length; i++) {
                for (let j = 0; j < cardData[i].length; j++) {
                    cardData[i][j] = cardData[i][j] % 4; 
                }
            }
            for (let i = 0; i < limitbreakData.length; i++) {
                for (let j = 0; j < limitbreakData[i].length; j++) {
                    limitbreakData[i][j] = limitbreakData[i][j] % 5; 
                }
            }
            db.collection('users').doc(uid).set({
                kaho__seasons__ur: cardData[0],
                kaho__seasons__sr: cardData[1],
                kozue__seasons__ur: cardData[2],
                kozue__seasons__sr: cardData[3],
                sayaka__seasons__ur: cardData[4],
                sayaka__seasons__sr: cardData[5],
                tsuzuri__seasons__ur: cardData[6],
                tsuzuri__seasons__sr: cardData[7],
                rurino__seasons__ur: cardData[8],
                rurino__seasons__sr: cardData[9],
                megumi__seasons__ur: cardData[10],
                megumi__seasons__sr: cardData[11],
                kaho__normal__ur: cardData[12],
                kaho__normal__sr: cardData[13],
                kozue__normal__ur: cardData[14],
                kozue__normal__sr: cardData[15],
                sayaka__normal__ur: cardData[16],
                sayaka__normal__sr: cardData[17],
                tsuzuri__normal__ur: cardData[18],
                tsuzuri__normal__sr: cardData[19],
                rurino__normal__ur: cardData[20],
                rurino__normal__sr: cardData[21],
                megumi__normal__ur: cardData[22],
                megumi__normal__sr: cardData[23],
                kaho__seasons__ur__limitbreak: limitbreakData[0],
                kaho__seasons__sr__limitbreak: limitbreakData[1],
                kozue__seasons__ur__limitbreak: limitbreakData[2],
                kozue__seasons__sr__limitbreak: limitbreakData[3],
                sayaka__seasons__ur__limitbreak: limitbreakData[4],
                sayaka__seasons__sr__limitbreak: limitbreakData[5],
                tsuzuri__seasons__ur__limitbreak: limitbreakData[6],
                tsuzuri__seasons__sr__limitbreak: limitbreakData[7],
                rurino__seasons__ur__limitbreak: limitbreakData[8],
                rurino__seasons__sr__limitbreak: limitbreakData[9],
                megumi__seasons__ur__limitbreak: limitbreakData[10],
                megumi__seasons__sr__limitbreak: limitbreakData[11],
                kaho__normal__ur__limitbreak: limitbreakData[12],
                kaho__normal__sr__limitbreak: limitbreakData[13],
                kozue__normal__ur__limitbreak: limitbreakData[14],
                kozue__normal__sr__limitbreak: limitbreakData[15],
                sayaka__normal__ur__limitbreak: limitbreakData[16],
                sayaka__normal__sr__limitbreak: limitbreakData[17],
                tsuzuri__normal__ur__limitbreak: limitbreakData[18],
                tsuzuri__normal__sr__limitbreak: limitbreakData[19],
                rurino__normal__ur__limitbreak: limitbreakData[20],
                rurino__normal__sr__limitbreak: limitbreakData[21],
                megumi__normal__ur__limitbreak: limitbreakData[22],
                megumi__normal__sr__limitbreak: limitbreakData[23]
            });
            alert("Data Saved"); 
        } else {
            // User is signed out
            googleLogin();
        }
    });
}

function displayCard(cards, count, num) {
    if (count[num] % 4 === 0) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.remove("invisible");
        cards[num].children[3].classList.add("invisible");
    } else if (count[num] % 4 === 1) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.remove("invisible");
    } else if (count[num] % 4 === 2) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[1].classList.remove("invisible");
        cards[num].children[2].classList.add("invisible");
        cards[num].children[3].classList.remove("invisible");
    }
}
function changeCard(cards, count, num) {
    count[num]++;
    displayCard(cards, count, num);
}

function displayLimitbreak(cards, count, num) {
    if (count[num] % 5 === 0) {
        cards[num].children[3].children[0].src = "/limitbreak/limitbreak1.png";
    } else if (count[num] % 5 === 1) {
        cards[num].children[3].children[0].src = "/limitbreak/limitbreak2.png";
    } else if (count[num] % 5 === 2) {
        cards[num].children[3].children[0].src = "/limitbreak/limitbreak3.png";
    } else if (count[num] % 5 === 3) {
        cards[num].children[3].children[0].src = "/limitbreak/limitbreak4.png";
    } else {
        cards[num].children[3].children[0].src = "/limitbreak/limitbreak5.png";
    }
}
function changeLimitbreak(cards, count, num) {
    count[num]++;
    displayLimitbreak(cards, count, num);
}




/* Save Image Button */
function downImg(){
    const checkerboard = document.querySelector(".checkerboard");
	html2canvas(checkerboard,{ backgroundColor: "#938aff", scale: 1920/checkerboard.offsetWidth, logging: true, letterRendering: 1, allowTaint: false,  useCORS: true }).then(function(canvas){
		const myImage = canvas.toDataURL();
		downloadURL(myImage, "image.png") 
	});
}

function downloadURL(url, name){
	const link = document.createElement("a")
	link.download = name;
	link.href = url;
	document.body.appendChild(link);
	link.click();
}

$('.downImgButton').click(downImg);
/* Save Image Button */

$('.infoButton').click(function() {
    document.querySelector('.infoModal').showModal();
});
$('.modalCloseButton').click(function() {
    document.querySelector('.infoModal').close();
});