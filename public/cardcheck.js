/* block 'double tap zoomin' */
let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     let now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);
/* block 'double tap zoomin' */

const drList = ['kaho__dr',
                'kozue__dr',
                'sayaka__dr',
                'tsuzuri__dr',
                'rurino__dr',
                'megumi__dr',
                'ginko__dr',
                'kosuzu__dr',
                'hime__dr'];

const specialList = ['kaho__special__ur',
                     'kozue__special__ur',
                     'sayaka__special__ur',
                     'tsuzuri__special__ur',
                     'rurino__special__ur',
                     'megumi__special__ur',
                     'ginko__special__ur',
                     'kosuzu__special__ur',
                     'hime__special__ur'];
                     
const brList = ['kaho__br',
                'kozue__br',
                'sayaka__br',
                'tsuzuri__br',
                'rurino__br',
                'megumi__br',
                'ginko__br',
                'kosuzu__br',
                'hime__br'];

const cardList = ['kaho__party__ur',
                  'kozue__party__ur',
                  'sayaka__party__ur',
                  'tsuzuri__party__ur',
                  'rurino__party__ur',
                  'megumi__party__ur',
                  'kaho__spring__ur',
                  'kaho__spring__sr',
                  'kozue__spring__ur',
                  'kozue__spring__sr',
                  'sayaka__spring__ur',
                  'sayaka__spring__sr',
                  'tsuzuri__spring__ur',
                  'tsuzuri__spring__sr',
                  'rurino__spring__ur',
                  'rurino__spring__sr',
                  'megumi__spring__ur',
                  'megumi__spring__sr',
                  'kaho__summer__ur',
                  'kaho__summer__sr',
                  'kozue__summer__ur',
                  'kozue__summer__sr',
                  'sayaka__summer__ur',
                  'sayaka__summer__sr',
                  'tsuzuri__summer__ur',
                  'tsuzuri__summer__sr',
                  'rurino__summer__ur',
                  'rurino__summer__sr',
                  'megumi__summer__ur',
                  'megumi__summer__sr',
                  'kaho__autumn__ur',
                  'kaho__autumn__sr',
                  'kozue__autumn__ur',
                  'kozue__autumn__sr',
                  'sayaka__autumn__ur',
                  'sayaka__autumn__sr',
                  'tsuzuri__autumn__ur',
                  'tsuzuri__autumn__sr',
                  'rurino__autumn__ur',
                  'rurino__autumn__sr',
                  'megumi__autumn__ur',
                  'megumi__autumn__sr',
                  'kaho__winter__ur',
                  'kaho__winter__sr',
                  'kozue__winter__ur',
                  'kozue__winter__sr',
                  'sayaka__winter__ur',
                  'sayaka__winter__sr',
                  'tsuzuri__winter__ur',
                  'tsuzuri__winter__sr',
                  'rurino__winter__ur',
                  'rurino__winter__sr',
                  'megumi__winter__ur',
                  'megumi__winter__sr',
                  'kaho__common__ur',
                  'kaho__common__sr',
                  'kozue__common__ur',
                  'kozue__common__sr',
                  'sayaka__common__ur',
                  'sayaka__common__sr',
                  'tsuzuri__common__ur',
                  'tsuzuri__common__sr',
                  'rurino__common__ur',
                  'rurino__common__sr',
                  'megumi__common__ur',
                  'megumi__common__sr',
                  'kaho__graduation__ur',
                  'kaho__graduation__sr',
                  'kozue__graduation__ur',
                  'kozue__graduation__sr',
                  'sayaka__graduation__ur',
                  'sayaka__graduation__sr',
                  'tsuzuri__graduation__ur',
                  'tsuzuri__graduation__sr',
                  'rurino__graduation__ur',
                  'rurino__graduation__sr',
                  'megumi__graduation__ur',
                  'megumi__graduation__sr',
                  'sachi__graduation__ur',
                  'ginko__party__ur',
                  'ginko__spring__ur',
                  'ginko__spring__sr',
                  'ginko__summer__ur',
                  'ginko__summer__sr',
                  'ginko__autumn__ur',
                  'ginko__autumn__sr',
                  'ginko__winter__ur',
                  'ginko__winter__sr',
                  'ginko__common__ur',
                  'ginko__common__sr',
                  'ginko__graduation__ur',
                  'ginko__graduation__sr',
                  'kosuzu__party__ur',
                  'kosuzu__spring__ur',
                  'kosuzu__spring__sr',
                  'kosuzu__summer__ur',
                  'kosuzu__summer__sr',
                  'kosuzu__autumn__ur',
                  'kosuzu__autumn__sr',
                  'kosuzu__winter__ur',
                  'kosuzu__winter__sr',
                  'kosuzu__common__ur',
                  'kosuzu__common__sr',
                  'kosuzu__graduation__ur',
                  'kosuzu__graduation__sr',
                  'hime__party__ur',
                  'hime__spring__ur',
                  'hime__spring__sr',
                  'hime__summer__ur',
                  'hime__summer__sr',
                  'hime__autumn__ur',
                  'hime__autumn__sr',
                  'hime__winter__ur',
                  'hime__winter__sr',
                  'hime__common__ur',
                  'hime__common__sr',
                  'hime__graduation__ur',
                  'hime__graduation__sr'];
const drNodeList = [];
const brNodeList = [];
const specialNodeList = [];
const cardNodeList = [];
const drData = [];
const brData = [];
const specialData = [];
const cardData = [];
const drlimitbreakData = [];
const brlimitbreakData = [];
const speciallimitbreakData = [];
const limitbreakData = [];
const db = firebase.firestore();


/* create cardNodeList, cardData, limitbreakData, onclick changeCard */
for (let i = 0; i < drList.length; i++) {
    drNodeList.push($('.' + drList[i]));
    drData.push([]);
    drlimitbreakData.push([]);
    for (let j = 0; j < drNodeList[i].length; j++) {  
        drData[i].push(0);
        drlimitbreakData[i].push(0);
        drNodeList[i].eq(j).on("click", () => changeDr(drNodeList[i], drData[i] , j));
    }
}
for (let i = 0; i < brList.length; i++) {
    brNodeList.push($('.' + brList[i]));
    brData.push([]);
    brlimitbreakData.push([]);
    for (let j = 0; j < brNodeList[i].length; j++) {  
        brData[i].push(0);
        brlimitbreakData[i].push(0);
        brNodeList[i].eq(j).on("click", () => changeBr(brNodeList[i], brData[i] , j));
    }
}
for (let i = 0; i < specialList.length; i++) {
    specialNodeList.push($('.' + specialList[i]));
    specialData.push([]);
    speciallimitbreakData.push([]);
    for (let j = 0; j < specialNodeList[i].length; j++) {  
        specialData[i].push(0);
        speciallimitbreakData[i].push(0);
        specialNodeList[i].eq(j).on("click", () => changeSpecial(specialNodeList[i], specialData[i] , j));
    }
}
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
        for (let i = 0; i < drList.length; i++) {
            for (let j = 0; j < drNodeList[i].length; j++) {
                drNodeList[i].eq(j).off();
                drNodeList[i].eq(j).on("click", () => changeDr(drNodeList[i], drData[i] , j));
            }
        }
        for (let i = 0; i < brList.length; i++) {
            for (let j = 0; j < brNodeList[i].length; j++) {
                brNodeList[i].eq(j).off();
                brNodeList[i].eq(j).on("click", () => changeBr(brNodeList[i], brData[i] , j));
            }
        }
        for (let i = 0; i < specialList.length; i++) {
            for (let j = 0; j < specialNodeList[i].length; j++) {
                specialNodeList[i].eq(j).off();
                specialNodeList[i].eq(j).on("click", () => changeSpecial(specialNodeList[i], specialData[i] , j));
            }
        }
        for (let i = 0; i < cardList.length; i++) {
            for (let j = 0; j < cardNodeList[i].length; j++) {
                cardNodeList[i].eq(j).off();
                cardNodeList[i].eq(j).on("click", () => changeCard(cardNodeList[i], cardData[i] , j));
            }
        }
        $('.checkButton').children().toggleClass("invisible")
    } else {
        for (let i = 0; i < drList.length; i++) {
            for (let j = 0; j < drNodeList[i].length; j++) {
                drNodeList[i].eq(j).off();
                drNodeList[i].eq(j).on("click", () => changeLimitbreak(drNodeList[i], drlimitbreakData[i] , j));
            }
        }
        for (let i = 0; i < brList.length; i++) {
            for (let j = 0; j < brNodeList[i].length; j++) {
                brNodeList[i].eq(j).off();
                brNodeList[i].eq(j).on("click", () => changeLimitbreak(brNodeList[i], brlimitbreakData[i] , j));
            }
        }
        for (let i = 0; i < specialList.length; i++) {
            for (let j = 0; j < specialNodeList[i].length; j++) {
                specialNodeList[i].eq(j).off();
                specialNodeList[i].eq(j).on("click", () => changeLimitbreak(specialNodeList[i], speciallimitbreakData[i] , j));
            }
        }
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
                } else if (result.data().kaho__special__ur === undefined) {
                    db.collection('users').doc(uid).set({
                        kaho__special__ur: [],
                        kozue__special__ur: [],
                        sayaka__special__ur: [],
                        tsuzuri__special__ur: [],
                        rurino__special__ur: [],
                        megumi__special__ur: [],
                        kaho__special__ur__limitbreak: [],
                        kozue__special__ur__limitbreak: [],
                        sayaka__special__ur__limitbreak: [],
                        tsuzuri__special__ur__limitbreak: [],
                        rurino__special__ur__limitbreak: [],
                        megumi__special__ur__limitbreak: []
                    },
                    {merge: true});
                    loadData();
                } else if (result.data().kaho__graduation__ur === undefined) {
                    db.collection('users').doc(uid).set({
                        kaho__graduation__ur: [],
                        kozue__graduation__ur: [],
                        sayaka__graduation__ur: [],
                        tsuzuri__graduation__ur: [],
                        rurino__graduation__ur: [],
                        megumi__graduation__ur: [],
                        kaho__graduation__sr: [],
                        kozue__graduation__sr: [],
                        sayaka__graduation__sr: [],
                        tsuzuri__graduation__sr: [],
                        rurino__graduation__sr: [],
                        megumi__graduation__sr: [],
                        kaho__graduation__ur__limitbreak: [],
                        kozue__graduation__ur__limitbreak: [],
                        sayaka__graduation__ur__limitbreak: [],
                        tsuzuri__graduation__ur__limitbreak: [],
                        rurino__graduation__ur__limitbreak: [],
                        megumi__graduation__ur__limitbreak: [],
                        kaho__graduation__sr__limitbreak: [],
                        kozue__graduation__sr__limitbreak: [],
                        sayaka__graduation__sr__limitbreak: [],
                        tsuzuri__graduation__sr__limitbreak: [],
                        rurino__graduation__sr__limitbreak: [],
                        megumi__graduation__sr__limitbreak: []
                    },
                    {merge: true});
                    loadData();
                } else if (result.data().sachi__graduation__ur === undefined) {
                    db.collection('users').doc(uid).set({
                        sachi__graduation__ur: [],
                        sachi__graduation__ur__limitbreak: []
                    },
                    {merge: true});
                    loadData();
                } else if (result.data().ginko__dr === undefined) {
                    db.collection('users').doc(uid).set({
                        ginko__dr: [],
                        kosuzu__dr: [],
                        hime__dr: [],
                        ginko__special__ur: [],
                        kosuzu__special__ur: [],
                        hime__special__ur: [],
                        ginko__party__ur: [],
                        ginko__spring__ur: [],
                        ginko__spring__sr: [],
                        ginko__summer__ur: [],
                        ginko__summer__sr: [],
                        ginko__autumn__ur: [],
                        ginko__autumn__sr: [],
                        ginko__winter__ur: [],
                        ginko__winter__sr: [],
                        ginko__common__ur: [],
                        ginko__common__sr: [],
                        ginko__graduation__ur: [],
                        ginko__graduation__sr: [],
                        kosuzu__party__ur: [],
                        kosuzu__spring__ur: [],
                        kosuzu__spring__sr: [],
                        kosuzu__summer__ur: [],
                        kosuzu__summer__sr: [],
                        kosuzu__autumn__ur: [],
                        kosuzu__autumn__sr: [],
                        kosuzu__winter__ur: [],
                        kosuzu__winter__sr: [],
                        kosuzu__common__ur: [],
                        kosuzu__common__sr: [],
                        kosuzu__graduation__ur: [],
                        kosuzu__graduation__sr: [],
                        hime__party__ur: [],
                        hime__spring__ur: [],
                        hime__spring__sr: [],
                        hime__summer__ur: [],
                        hime__summer__sr: [],
                        hime__autumn__ur: [],
                        hime__autumn__sr: [],
                        hime__winter__ur: [],
                        hime__winter__sr: [],
                        hime__common__ur: [],
                        hime__common__sr: [],
                        hime__graduation__ur: [],
                        hime__graduation__sr: [],
                        ginko__dr__limitbreak: [],
                        kosuzu__dr__limitbreak: [],
                        hime__dr__limitbreak: [],
                        ginko__special__ur__limitbreak: [],
                        kosuzu__special__ur__limitbreak: [],
                        hime__special__ur__limitbreak: [],
                        ginko__party__ur__limitbreak: [],
                        ginko__spring__ur__limitbreak: [],
                        ginko__spring__sr__limitbreak: [],
                        ginko__summer__ur__limitbreak: [],
                        ginko__summer__sr__limitbreak: [],
                        ginko__autumn__ur__limitbreak: [],
                        ginko__autumn__sr__limitbreak: [],
                        ginko__winter__ur__limitbreak: [],
                        ginko__winter__sr__limitbreak: [],
                        ginko__common__ur__limitbreak: [],
                        ginko__common__sr__limitbreak: [],
                        ginko__graduation__ur__limitbreak: [],
                        ginko__graduation__sr__limitbreak: [],
                        kosuzu__party__ur__limitbreak: [],
                        kosuzu__spring__ur__limitbreak: [],
                        kosuzu__spring__sr__limitbreak: [],
                        kosuzu__summer__ur__limitbreak: [],
                        kosuzu__summer__sr__limitbreak: [],
                        kosuzu__autumn__ur__limitbreak: [],
                        kosuzu__autumn__sr__limitbreak: [],
                        kosuzu__winter__ur__limitbreak: [],
                        kosuzu__winter__sr__limitbreak: [],
                        kosuzu__common__ur__limitbreak: [],
                        kosuzu__common__sr__limitbreak: [],
                        kosuzu__graduation__ur__limitbreak: [],
                        kosuzu__graduation__sr__limitbreak: [],
                        hime__party__ur__limitbreak: [],
                        hime__spring__ur__limitbreak: [],
                        hime__spring__sr__limitbreak: [],
                        hime__summer__ur__limitbreak: [],
                        hime__summer__sr__limitbreak: [],
                        hime__autumn__ur__limitbreak: [],
                        hime__autumn__sr__limitbreak: [],
                        hime__winter__ur__limitbreak: [],
                        hime__winter__sr__limitbreak: [],
                        hime__common__ur__limitbreak: [],
                        hime__common__sr__limitbreak: [],
                        hime__graduation__ur__limitbreak: [],
                        hime__graduation__sr__limitbreak: [],
                    },
                    {merge: true});
                    loadData();
                } else if (result.data().kaho__br === undefined) {
                    db.collection('users').doc(uid).set({
                        kaho__br: [],
                        kozue__br: [],
                        sayaka__br: [],
                        tsuzuri__br: [],
                        rurino__br: [],
                        megumi__br: [],
                        ginko__br: [],
                        kosuzu__br: [],
                        hime__br: [],
                        kaho__br__limitbreak: [],
                        kozue__br__limitbreak: [],
                        sayaka__br__limitbreak: [],
                        tsuzuri__br__limitbreak: [],
                        rurino__br__limitbreak: [],
                        megumi__br__limitbreak: [],
                        ginko__br__limitbreak: [],
                        kosuzu__br__limitbreak: [],
                        hime__br__limitbreak: []
                    },
                    {merge: true});
                    loadData();
                } else {
                    for (let i = 0; i < result.data().kaho__dr.length; i++){
                        drData[0][i] = result.data().kaho__dr[i];
                        displayDr(drNodeList[0], drData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__dr.length; i++){
                        drData[1][i] = result.data().kozue__dr[i];
                        displayDr(drNodeList[1], drData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__dr.length; i++){
                        drData[2][i] = result.data().sayaka__dr[i];
                        displayDr(drNodeList[2], drData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__dr.length; i++){
                        drData[3][i] = result.data().tsuzuri__dr[i];
                        displayDr(drNodeList[3], drData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__dr.length; i++){
                        drData[4][i] = result.data().rurino__dr[i];
                        displayDr(drNodeList[4], drData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__dr.length; i++){
                        drData[5][i] = result.data().megumi__dr[i];
                        displayDr(drNodeList[5], drData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__dr.length; i++){
                        drData[6][i] = result.data().ginko__dr[i];
                        displayDr(drNodeList[6], drData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__dr.length; i++){
                        drData[7][i] = result.data().kosuzu__dr[i];
                        displayDr(drNodeList[7], drData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__dr.length; i++){
                        drData[8][i] = result.data().hime__dr[i];
                        displayDr(drNodeList[8], drData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__br.length; i++){
                        brData[0][i] = result.data().kaho__br[i];
                        displayBr(brNodeList[0], brData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__br.length; i++){
                        brData[1][i] = result.data().kozue__br[i];
                        displayBr(brNodeList[1], brData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__br.length; i++){
                        brData[2][i] = result.data().sayaka__br[i];
                        displayBr(brNodeList[2], brData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__br.length; i++){
                        brData[3][i] = result.data().tsuzuri__br[i];
                        displayBr(brNodeList[3], brData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__br.length; i++){
                        brData[4][i] = result.data().rurino__br[i];
                        displayBr(brNodeList[4], brData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__br.length; i++){
                        brData[5][i] = result.data().megumi__br[i];
                        displayBr(brNodeList[5], brData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__br.length; i++){
                        brData[6][i] = result.data().ginko__br[i];
                        displayBr(brNodeList[6], brData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__br.length; i++){
                        brData[7][i] = result.data().kosuzu__br[i];
                        displayBr(brNodeList[7], brData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__br.length; i++){
                        brData[8][i] = result.data().hime__br[i];
                        displayBr(brNodeList[8], brData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__special__ur.length; i++){
                        specialData[0][i] = result.data().kaho__special__ur[i];
                        displaySpecial(specialNodeList[0], specialData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__special__ur.length; i++){
                        specialData[1][i] = result.data().kozue__special__ur[i];
                        displaySpecial(specialNodeList[1], specialData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__special__ur.length; i++){
                        specialData[2][i] = result.data().sayaka__special__ur[i];
                        displaySpecial(specialNodeList[2], specialData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__special__ur.length; i++){
                        specialData[3][i] = result.data().tsuzuri__special__ur[i];
                        displaySpecial(specialNodeList[3], specialData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__special__ur.length; i++){
                        specialData[4][i] = result.data().rurino__special__ur[i];
                        displaySpecial(specialNodeList[4], specialData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__special__ur.length; i++){
                        specialData[5][i] = result.data().megumi__special__ur[i];
                        displaySpecial(specialNodeList[5], specialData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__special__ur.length; i++){
                        specialData[6][i] = result.data().ginko__special__ur[i];
                        displaySpecial(specialNodeList[6], specialData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__special__ur.length; i++){
                        specialData[7][i] = result.data().kosuzu__special__ur[i];
                        displaySpecial(specialNodeList[7], specialData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__special__ur.length; i++){
                        specialData[8][i] = result.data().hime__special__ur[i];
                        displaySpecial(specialNodeList[8], specialData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__party__ur.length; i++){
                        cardData[0][i] = result.data().kaho__party__ur[i];
                        displayCard(cardNodeList[0], cardData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__party__ur.length; i++){
                        cardData[1][i] = result.data().kozue__party__ur[i];
                        displayCard(cardNodeList[1], cardData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__party__ur.length; i++){
                        cardData[2][i] = result.data().sayaka__party__ur[i];
                        displayCard(cardNodeList[2], cardData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__party__ur.length; i++){
                        cardData[3][i] = result.data().tsuzuri__party__ur[i];
                        displayCard(cardNodeList[3], cardData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__party__ur.length; i++){
                        cardData[4][i] = result.data().rurino__party__ur[i];
                        displayCard(cardNodeList[4], cardData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__party__ur.length; i++){
                        cardData[5][i] = result.data().megumi__party__ur[i];
                        displayCard(cardNodeList[5], cardData[5], i);
                    }
                    for (let i = 0; i < result.data().kaho__spring__ur.length; i++){
                        cardData[6][i] = result.data().kaho__spring__ur[i];
                        displayCard(cardNodeList[6], cardData[6], i);
                    }
                    for (let i = 0; i < result.data().kaho__spring__sr.length; i++){
                        cardData[7][i] = result.data().kaho__spring__sr[i];
                        displayCard(cardNodeList[7], cardData[7], i);
                    }
                    for (let i = 0; i < result.data().kozue__spring__ur.length; i++){
                        cardData[8][i] = result.data().kozue__spring__ur[i];
                        displayCard(cardNodeList[8], cardData[8], i);
                    }
                    for (let i = 0; i < result.data().kozue__spring__sr.length; i++){
                        cardData[9][i] = result.data().kozue__spring__sr[i];
                        displayCard(cardNodeList[9], cardData[9], i);
                    }
                    for (let i = 0; i < result.data().sayaka__spring__ur.length; i++){
                        cardData[10][i] = result.data().sayaka__spring__ur[i];
                        displayCard(cardNodeList[10], cardData[10], i);
                    }
                    for (let i = 0; i < result.data().sayaka__spring__sr.length; i++){
                        cardData[11][i] = result.data().sayaka__spring__sr[i];
                        displayCard(cardNodeList[11], cardData[11], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__spring__ur.length; i++){
                        cardData[12][i] = result.data().tsuzuri__spring__ur[i];
                        displayCard(cardNodeList[12], cardData[12], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__spring__sr.length; i++){
                        cardData[13][i] = result.data().tsuzuri__spring__sr[i];
                        displayCard(cardNodeList[13], cardData[13], i);
                    }
                    for (let i = 0; i < result.data().rurino__spring__ur.length; i++){
                        cardData[14][i] = result.data().rurino__spring__ur[i];
                        displayCard(cardNodeList[14], cardData[14], i);
                    }
                    for (let i = 0; i < result.data().rurino__spring__sr.length; i++){
                        cardData[15][i] = result.data().rurino__spring__sr[i];
                        displayCard(cardNodeList[15], cardData[15], i);
                    }
                    for (let i = 0; i < result.data().megumi__spring__ur.length; i++){
                        cardData[16][i] = result.data().megumi__spring__ur[i];
                        displayCard(cardNodeList[16], cardData[16], i);
                    }
                    for (let i = 0; i < result.data().megumi__spring__sr.length; i++){
                        cardData[17][i] = result.data().megumi__spring__sr[i];
                        displayCard(cardNodeList[17], cardData[17], i);
                    }
                    for (let i = 0; i < result.data().kaho__summer__ur.length; i++){
                        cardData[18][i] = result.data().kaho__summer__ur[i];
                        displayCard(cardNodeList[18], cardData[18], i);
                    }
                    for (let i = 0; i < result.data().kaho__summer__sr.length; i++){
                        cardData[19][i] = result.data().kaho__summer__sr[i];
                        displayCard(cardNodeList[19], cardData[19], i);
                    }
                    for (let i = 0; i < result.data().kozue__summer__ur.length; i++){
                        cardData[20][i] = result.data().kozue__summer__ur[i];
                        displayCard(cardNodeList[20], cardData[20], i);
                    }
                    for (let i = 0; i < result.data().kozue__summer__sr.length; i++){
                        cardData[21][i] = result.data().kozue__summer__sr[i];
                        displayCard(cardNodeList[21], cardData[21], i);
                    }
                    for (let i = 0; i < result.data().sayaka__summer__ur.length; i++){
                        cardData[22][i] = result.data().sayaka__summer__ur[i];
                        displayCard(cardNodeList[22], cardData[22], i);
                    }
                    for (let i = 0; i < result.data().sayaka__summer__sr.length; i++){
                        cardData[23][i] = result.data().sayaka__summer__sr[i];
                        displayCard(cardNodeList[23], cardData[23], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__summer__ur.length; i++){
                        cardData[24][i] = result.data().tsuzuri__summer__ur[i];
                        displayCard(cardNodeList[24], cardData[24], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__summer__sr.length; i++){
                        cardData[25][i] = result.data().tsuzuri__summer__sr[i];
                        displayCard(cardNodeList[25], cardData[25], i);
                    }
                    for (let i = 0; i < result.data().rurino__summer__ur.length; i++){
                        cardData[26][i] = result.data().rurino__summer__ur[i];
                        displayCard(cardNodeList[26], cardData[26], i);
                    }
                    for (let i = 0; i < result.data().rurino__summer__sr.length; i++){
                        cardData[27][i] = result.data().rurino__summer__sr[i];
                        displayCard(cardNodeList[27], cardData[27], i);
                    }
                    for (let i = 0; i < result.data().megumi__summer__ur.length; i++){
                        cardData[28][i] = result.data().megumi__summer__ur[i];
                        displayCard(cardNodeList[28], cardData[28], i);
                    }
                    for (let i = 0; i < result.data().megumi__summer__sr.length; i++){
                        cardData[29][i] = result.data().megumi__summer__sr[i];
                        displayCard(cardNodeList[29], cardData[29], i);
                    }
                    for (let i = 0; i < result.data().kaho__autumn__ur.length; i++){
                        cardData[30][i] = result.data().kaho__autumn__ur[i];
                        displayCard(cardNodeList[30], cardData[30], i);
                    }
                    for (let i = 0; i < result.data().kaho__autumn__sr.length; i++){
                        cardData[31][i] = result.data().kaho__autumn__sr[i];
                        displayCard(cardNodeList[31], cardData[31], i);
                    }
                    for (let i = 0; i < result.data().kozue__autumn__ur.length; i++){
                        cardData[32][i] = result.data().kozue__autumn__ur[i];
                        displayCard(cardNodeList[32], cardData[32], i);
                    }
                    for (let i = 0; i < result.data().kozue__autumn__sr.length; i++){
                        cardData[33][i] = result.data().kozue__autumn__sr[i];
                        displayCard(cardNodeList[33], cardData[33], i);
                    }
                    for (let i = 0; i < result.data().sayaka__autumn__ur.length; i++){
                        cardData[34][i] = result.data().sayaka__autumn__ur[i];
                        displayCard(cardNodeList[34], cardData[34], i);
                    }
                    for (let i = 0; i < result.data().sayaka__autumn__sr.length; i++){
                        cardData[35][i] = result.data().sayaka__autumn__sr[i];
                        displayCard(cardNodeList[35], cardData[35], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__autumn__ur.length; i++){
                        cardData[36][i] = result.data().tsuzuri__autumn__ur[i];
                        displayCard(cardNodeList[36], cardData[36], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__autumn__sr.length; i++){
                        cardData[37][i] = result.data().tsuzuri__autumn__sr[i];
                        displayCard(cardNodeList[37], cardData[37], i);
                    }
                    for (let i = 0; i < result.data().rurino__autumn__ur.length; i++){
                        cardData[38][i] = result.data().rurino__autumn__ur[i];
                        displayCard(cardNodeList[38], cardData[38], i);
                    }
                    for (let i = 0; i < result.data().rurino__autumn__sr.length; i++){
                        cardData[39][i] = result.data().rurino__autumn__sr[i];
                        displayCard(cardNodeList[39], cardData[39], i);
                    }
                    for (let i = 0; i < result.data().megumi__autumn__ur.length; i++){
                        cardData[40][i] = result.data().megumi__autumn__ur[i];
                        displayCard(cardNodeList[40], cardData[40], i);
                    }
                    for (let i = 0; i < result.data().megumi__autumn__sr.length; i++){
                        cardData[41][i] = result.data().megumi__autumn__sr[i];
                        displayCard(cardNodeList[41], cardData[41], i);
                    }
                    for (let i = 0; i < result.data().kaho__winter__ur.length; i++){
                        cardData[42][i] = result.data().kaho__winter__ur[i];
                        displayCard(cardNodeList[42], cardData[42], i);
                    }
                    for (let i = 0; i < result.data().kaho__winter__sr.length; i++){
                        cardData[43][i] = result.data().kaho__winter__sr[i];
                        displayCard(cardNodeList[43], cardData[43], i);
                    }
                    for (let i = 0; i < result.data().kozue__winter__ur.length; i++){
                        cardData[44][i] = result.data().kozue__winter__ur[i];
                        displayCard(cardNodeList[44], cardData[44], i);
                    }
                    for (let i = 0; i < result.data().kozue__winter__sr.length; i++){
                        cardData[45][i] = result.data().kozue__winter__sr[i];
                        displayCard(cardNodeList[45], cardData[45], i);
                    }
                    for (let i = 0; i < result.data().sayaka__winter__ur.length; i++){
                        cardData[46][i] = result.data().sayaka__winter__ur[i];
                        displayCard(cardNodeList[46], cardData[46], i);
                    }
                    for (let i = 0; i < result.data().sayaka__winter__sr.length; i++){
                        cardData[47][i] = result.data().sayaka__winter__sr[i];
                        displayCard(cardNodeList[47], cardData[47], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__winter__ur.length; i++){
                        cardData[48][i] = result.data().tsuzuri__winter__ur[i];
                        displayCard(cardNodeList[48], cardData[48], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__winter__sr.length; i++){
                        cardData[49][i] = result.data().tsuzuri__winter__sr[i];
                        displayCard(cardNodeList[49], cardData[49], i);
                    }
                    for (let i = 0; i < result.data().rurino__winter__ur.length; i++){
                        cardData[50][i] = result.data().rurino__winter__ur[i];
                        displayCard(cardNodeList[50], cardData[50], i);
                    }
                    for (let i = 0; i < result.data().rurino__winter__sr.length; i++){
                        cardData[51][i] = result.data().rurino__winter__sr[i];
                        displayCard(cardNodeList[51], cardData[51], i);
                    }
                    for (let i = 0; i < result.data().megumi__winter__ur.length; i++){
                        cardData[52][i] = result.data().megumi__winter__ur[i];
                        displayCard(cardNodeList[52], cardData[52], i);
                    }
                    for (let i = 0; i < result.data().megumi__winter__sr.length; i++){
                        cardData[53][i] = result.data().megumi__winter__sr[i];
                        displayCard(cardNodeList[53], cardData[53], i);
                    }
                    for (let i = 0; i < result.data().kaho__common__ur.length; i++){
                        cardData[54][i] = result.data().kaho__common__ur[i];
                        displayCard(cardNodeList[54], cardData[54], i);
                    }
                    for (let i = 0; i < result.data().kaho__common__sr.length; i++){
                        cardData[55][i] = result.data().kaho__common__sr[i];
                        displayCard(cardNodeList[55], cardData[55], i);
                    }
                    for (let i = 0; i < result.data().kozue__common__ur.length; i++){
                        cardData[56][i] = result.data().kozue__common__ur[i];
                        displayCard(cardNodeList[56], cardData[56], i);
                    }
                    for (let i = 0; i < result.data().kozue__common__sr.length; i++){
                        cardData[57][i] = result.data().kozue__common__sr[i];
                        displayCard(cardNodeList[57], cardData[57], i);
                    }
                    for (let i = 0; i < result.data().sayaka__common__ur.length; i++){
                        cardData[58][i] = result.data().sayaka__common__ur[i];
                        displayCard(cardNodeList[58], cardData[58], i);
                    }
                    for (let i = 0; i < result.data().sayaka__common__sr.length; i++){
                        cardData[59][i] = result.data().sayaka__common__sr[i];
                        displayCard(cardNodeList[59], cardData[59], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__common__ur.length; i++){
                        cardData[60][i] = result.data().tsuzuri__common__ur[i];
                        displayCard(cardNodeList[60], cardData[60], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__common__sr.length; i++){
                        cardData[61][i] = result.data().tsuzuri__common__sr[i];
                        displayCard(cardNodeList[61], cardData[61], i);
                    }
                    for (let i = 0; i < result.data().rurino__common__ur.length; i++){
                        cardData[62][i] = result.data().rurino__common__ur[i];
                        displayCard(cardNodeList[62], cardData[62], i);
                    }
                    for (let i = 0; i < result.data().rurino__common__sr.length; i++){
                        cardData[63][i] = result.data().rurino__common__sr[i];
                        displayCard(cardNodeList[63], cardData[63], i);
                    }
                    for (let i = 0; i < result.data().megumi__common__ur.length; i++){
                        cardData[64][i] = result.data().megumi__common__ur[i];
                        displayCard(cardNodeList[64], cardData[64], i);
                    }
                    for (let i = 0; i < result.data().megumi__common__sr.length; i++){
                        cardData[65][i] = result.data().megumi__common__sr[i];
                        displayCard(cardNodeList[65], cardData[65], i);
                    }
                    for (let i = 0; i < result.data().kaho__graduation__ur.length; i++){
                        cardData[66][i] = result.data().kaho__graduation__ur[i];
                        displayCard(cardNodeList[66], cardData[66], i);
                    }
                    for (let i = 0; i < result.data().kaho__graduation__sr.length; i++){
                        cardData[67][i] = result.data().kaho__graduation__sr[i];
                        displayCard(cardNodeList[67], cardData[67], i);
                    }
                    for (let i = 0; i < result.data().kozue__graduation__ur.length; i++){
                        cardData[68][i] = result.data().kozue__graduation__ur[i];
                        displayCard(cardNodeList[68], cardData[68], i);
                    }
                    for (let i = 0; i < result.data().kozue__graduation__sr.length; i++){
                        cardData[69][i] = result.data().kozue__graduation__sr[i];
                        displayCard(cardNodeList[69], cardData[69], i);
                    }
                    for (let i = 0; i < result.data().sayaka__graduation__ur.length; i++){
                        cardData[70][i] = result.data().sayaka__graduation__ur[i];
                        displayCard(cardNodeList[70], cardData[70], i);
                    }
                    for (let i = 0; i < result.data().sayaka__graduation__sr.length; i++){
                        cardData[71][i] = result.data().sayaka__graduation__sr[i];
                        displayCard(cardNodeList[71], cardData[71], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__graduation__ur.length; i++){
                        cardData[72][i] = result.data().tsuzuri__graduation__ur[i];
                        displayCard(cardNodeList[72], cardData[72], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__graduation__sr.length; i++){
                        cardData[73][i] = result.data().tsuzuri__graduation__sr[i];
                        displayCard(cardNodeList[73], cardData[73], i);
                    }
                    for (let i = 0; i < result.data().rurino__graduation__ur.length; i++){
                        cardData[74][i] = result.data().rurino__graduation__ur[i];
                        displayCard(cardNodeList[74], cardData[74], i);
                    }
                    for (let i = 0; i < result.data().rurino__graduation__sr.length; i++){
                        cardData[75][i] = result.data().rurino__graduation__sr[i];
                        displayCard(cardNodeList[75], cardData[75], i);
                    }
                    for (let i = 0; i < result.data().megumi__graduation__ur.length; i++){
                        cardData[76][i] = result.data().megumi__graduation__ur[i];
                        displayCard(cardNodeList[76], cardData[76], i);
                    }
                    for (let i = 0; i < result.data().megumi__graduation__sr.length; i++){
                        cardData[77][i] = result.data().megumi__graduation__sr[i];
                        displayCard(cardNodeList[77], cardData[77], i);
                    }
                    for (let i = 0; i < result.data().sachi__graduation__ur.length; i++){
                        cardData[78][i] = result.data().sachi__graduation__ur[i];
                        displayCard(cardNodeList[78], cardData[78], i);
                    }
                    for (let i = 0; i < result.data().ginko__party__ur.length; i++){
                        cardData[79][i] = result.data().ginko__party__ur[i];
                        displayCard(cardNodeList[79], cardData[79], i);
                    }
                    for (let i = 0; i < result.data().ginko__spring__ur.length; i++){
                        cardData[80][i] = result.data().ginko__spring__ur[i];
                        displayCard(cardNodeList[80], cardData[80], i);
                    }
                    for (let i = 0; i < result.data().ginko__spring__sr.length; i++){
                        cardData[81][i] = result.data().ginko__spring__sr[i];
                        displayCard(cardNodeList[81], cardData[81], i);
                    }
                    for (let i = 0; i < result.data().ginko__summer__ur.length; i++){
                        cardData[82][i] = result.data().ginko__summer__ur[i];
                        displayCard(cardNodeList[82], cardData[82], i);
                    }
                    for (let i = 0; i < result.data().ginko__summer__sr.length; i++){
                        cardData[83][i] = result.data().ginko__summer__sr[i];
                        displayCard(cardNodeList[83], cardData[83], i);
                    }
                    for (let i = 0; i < result.data().ginko__autumn__ur.length; i++){
                        cardData[84][i] = result.data().ginko__autumn__ur[i];
                        displayCard(cardNodeList[84], cardData[84], i);
                    }
                    for (let i = 0; i < result.data().ginko__autumn__sr.length; i++){
                        cardData[85][i] = result.data().ginko__autumn__sr[i];
                        displayCard(cardNodeList[85], cardData[85], i);
                    }
                    for (let i = 0; i < result.data().ginko__winter__ur.length; i++){
                        cardData[86][i] = result.data().ginko__winter__ur[i];
                        displayCard(cardNodeList[86], cardData[86], i);
                    }
                    for (let i = 0; i < result.data().ginko__winter__sr.length; i++){
                        cardData[87][i] = result.data().ginko__winter__sr[i];
                        displayCard(cardNodeList[87], cardData[87], i);
                    }
                    for (let i = 0; i < result.data().ginko__common__ur.length; i++){
                        cardData[88][i] = result.data().ginko__common__ur[i];
                        displayCard(cardNodeList[88], cardData[88], i);
                    }
                    for (let i = 0; i < result.data().ginko__common__sr.length; i++){
                        cardData[89][i] = result.data().ginko__common__sr[i];
                        displayCard(cardNodeList[89], cardData[89], i);
                    }
                    for (let i = 0; i < result.data().ginko__graduation__ur.length; i++){
                        cardData[90][i] = result.data().ginko__graduation__ur[i];
                        displayCard(cardNodeList[90], cardData[90], i);
                    }
                    for (let i = 0; i < result.data().ginko__graduation__sr.length; i++){
                        cardData[91][i] = result.data().ginko__graduation__sr[i];
                        displayCard(cardNodeList[91], cardData[91], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__party__ur.length; i++){
                        cardData[92][i] = result.data().kosuzu__party__ur[i];
                        displayCard(cardNodeList[92], cardData[92], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__spring__ur.length; i++){
                        cardData[93][i] = result.data().kosuzu__spring__ur[i];
                        displayCard(cardNodeList[93], cardData[93], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__spring__sr.length; i++){
                        cardData[94][i] = result.data().kosuzu__spring__sr[i];
                        displayCard(cardNodeList[94], cardData[94], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__summer__ur.length; i++){
                        cardData[95][i] = result.data().kosuzu__summer__ur[i];
                        displayCard(cardNodeList[95], cardData[95], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__summer__sr.length; i++){
                        cardData[96][i] = result.data().kosuzu__summer__sr[i];
                        displayCard(cardNodeList[96], cardData[96], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__autumn__ur.length; i++){
                        cardData[97][i] = result.data().kosuzu__autumn__ur[i];
                        displayCard(cardNodeList[97], cardData[97], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__autumn__sr.length; i++){
                        cardData[98][i] = result.data().kosuzu__autumn__sr[i];
                        displayCard(cardNodeList[98], cardData[98], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__winter__ur.length; i++){
                        cardData[99][i] = result.data().kosuzu__winter__ur[i];
                        displayCard(cardNodeList[99], cardData[99], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__winter__sr.length; i++){
                        cardData[100][i] = result.data().kosuzu__winter__sr[i];
                        displayCard(cardNodeList[100], cardData[100], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__common__ur.length; i++){
                        cardData[101][i] = result.data().kosuzu__common__ur[i];
                        displayCard(cardNodeList[101], cardData[101], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__common__sr.length; i++){
                        cardData[102][i] = result.data().kosuzu__common__sr[i];
                        displayCard(cardNodeList[102], cardData[102], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__graduation__ur.length; i++){
                        cardData[103][i] = result.data().kosuzu__graduation__ur[i];
                        displayCard(cardNodeList[103], cardData[103], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__graduation__sr.length; i++){
                        cardData[104][i] = result.data().kosuzu__graduation__sr[i];
                        displayCard(cardNodeList[104], cardData[104], i);
                    }
                    for (let i = 0; i < result.data().hime__party__ur.length; i++){
                        cardData[105][i] = result.data().hime__party__ur[i];
                        displayCard(cardNodeList[105], cardData[105], i);
                    }
                    for (let i = 0; i < result.data().hime__spring__ur.length; i++){
                        cardData[106][i] = result.data().hime__spring__ur[i];
                        displayCard(cardNodeList[106], cardData[106], i);
                    }
                    for (let i = 0; i < result.data().hime__spring__sr.length; i++){
                        cardData[107][i] = result.data().hime__spring__sr[i];
                        displayCard(cardNodeList[107], cardData[107], i);
                    }
                    for (let i = 0; i < result.data().hime__summer__ur.length; i++){
                        cardData[108][i] = result.data().hime__summer__ur[i];
                        displayCard(cardNodeList[108], cardData[108], i);
                    }
                    for (let i = 0; i < result.data().hime__summer__sr.length; i++){
                        cardData[109][i] = result.data().hime__summer__sr[i];
                        displayCard(cardNodeList[109], cardData[109], i);
                    }
                    for (let i = 0; i < result.data().hime__autumn__ur.length; i++){
                        cardData[110][i] = result.data().hime__autumn__ur[i];
                        displayCard(cardNodeList[110], cardData[110], i);
                    }
                    for (let i = 0; i < result.data().hime__autumn__sr.length; i++){
                        cardData[111][i] = result.data().hime__autumn__sr[i];
                        displayCard(cardNodeList[111], cardData[111], i);
                    }
                    for (let i = 0; i < result.data().hime__winter__ur.length; i++){
                        cardData[112][i] = result.data().hime__winter__ur[i];
                        displayCard(cardNodeList[112], cardData[112], i);
                    }
                    for (let i = 0; i < result.data().hime__winter__sr.length; i++){
                        cardData[113][i] = result.data().hime__winter__sr[i];
                        displayCard(cardNodeList[113], cardData[113], i);
                    }
                    for (let i = 0; i < result.data().hime__common__ur.length; i++){
                        cardData[114][i] = result.data().hime__common__ur[i];
                        displayCard(cardNodeList[114], cardData[114], i);
                    }
                    for (let i = 0; i < result.data().hime__common__sr.length; i++){
                        cardData[115][i] = result.data().hime__common__sr[i];
                        displayCard(cardNodeList[115], cardData[115], i);
                    }
                    for (let i = 0; i < result.data().hime__graduation__ur.length; i++){
                        cardData[116][i] = result.data().hime__graduation__ur[i];
                        displayCard(cardNodeList[116], cardData[116], i);
                    }
                    for (let i = 0; i < result.data().hime__graduation__sr.length; i++){
                        cardData[117][i] = result.data().hime__graduation__sr[i];
                        displayCard(cardNodeList[117], cardData[117], i);
                    }

                    for (let i = 0; i < result.data().kaho__dr__limitbreak.length; i++){
                        drlimitbreakData[0][i] = result.data().kaho__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[0], drlimitbreakData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__dr__limitbreak.length; i++){
                        drlimitbreakData[1][i] = result.data().kozue__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[1], drlimitbreakData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__dr__limitbreak.length; i++){
                        drlimitbreakData[2][i] = result.data().sayaka__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[2], drlimitbreakData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__dr__limitbreak.length; i++){
                        drlimitbreakData[3][i] = result.data().tsuzuri__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[3], drlimitbreakData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__dr__limitbreak.length; i++){
                        drlimitbreakData[4][i] = result.data().rurino__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[4], drlimitbreakData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__dr__limitbreak.length; i++){
                        drlimitbreakData[5][i] = result.data().megumi__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[5], drlimitbreakData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__dr__limitbreak.length; i++){
                        drlimitbreakData[6][i] = result.data().ginko__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[6], drlimitbreakData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__dr__limitbreak.length; i++){
                        drlimitbreakData[7][i] = result.data().kosuzu__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[7], drlimitbreakData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__dr__limitbreak.length; i++){
                        drlimitbreakData[8][i] = result.data().hime__dr__limitbreak[i];
                        displayLimitbreak(drNodeList[8], drlimitbreakData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__br__limitbreak.length; i++){
                        brlimitbreakData[0][i] = result.data().kaho__br__limitbreak[i];
                        displayLimitbreak(brNodeList[0], brlimitbreakData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__br__limitbreak.length; i++){
                        brlimitbreakData[1][i] = result.data().kozue__br__limitbreak[i];
                        displayLimitbreak(brNodeList[1], brlimitbreakData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__br__limitbreak.length; i++){
                        brlimitbreakData[2][i] = result.data().sayaka__br__limitbreak[i];
                        displayLimitbreak(brNodeList[2], brlimitbreakData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__br__limitbreak.length; i++){
                        brlimitbreakData[3][i] = result.data().tsuzuri__br__limitbreak[i];
                        displayLimitbreak(brNodeList[3], brlimitbreakData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__br__limitbreak.length; i++){
                        brlimitbreakData[4][i] = result.data().rurino__br__limitbreak[i];
                        displayLimitbreak(brNodeList[4], brlimitbreakData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__br__limitbreak.length; i++){
                        brlimitbreakData[5][i] = result.data().megumi__br__limitbreak[i];
                        displayLimitbreak(brNodeList[5], brlimitbreakData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__br__limitbreak.length; i++){
                        brlimitbreakData[6][i] = result.data().ginko__br__limitbreak[i];
                        displayLimitbreak(brNodeList[6], brlimitbreakData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__br__limitbreak.length; i++){
                        brlimitbreakData[7][i] = result.data().kosuzu__br__limitbreak[i];
                        displayLimitbreak(brNodeList[7], brlimitbreakData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__br__limitbreak.length; i++){
                        brlimitbreakData[8][i] = result.data().hime__br__limitbreak[i];
                        displayLimitbreak(brNodeList[8], brlimitbreakData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[0][i] = result.data().kaho__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[0], speciallimitbreakData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[1][i] = result.data().kozue__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[1], speciallimitbreakData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[2][i] = result.data().sayaka__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[2], speciallimitbreakData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[3][i] = result.data().tsuzuri__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[3], speciallimitbreakData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[4][i] = result.data().rurino__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[4], speciallimitbreakData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[5][i] = result.data().megumi__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[5], speciallimitbreakData[5], i);
                    }
                    for (let i = 0; i < result.data().ginko__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[6][i] = result.data().ginko__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[6], speciallimitbreakData[6], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[7][i] = result.data().kosuzu__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[7], speciallimitbreakData[7], i);
                    }
                    for (let i = 0; i < result.data().hime__special__ur__limitbreak.length; i++){
                        speciallimitbreakData[8][i] = result.data().hime__special__ur__limitbreak[i];
                        displayLimitbreak(specialNodeList[8], speciallimitbreakData[8], i);
                    }
                    for (let i = 0; i < result.data().kaho__party__ur__limitbreak.length; i++){
                        limitbreakData[0][i] = result.data().kaho__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[0], limitbreakData[0], i);
                    }
                    for (let i = 0; i < result.data().kozue__party__ur__limitbreak.length; i++){
                        limitbreakData[1][i] = result.data().kozue__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[1], limitbreakData[1], i);
                    }
                    for (let i = 0; i < result.data().sayaka__party__ur__limitbreak.length; i++){
                        limitbreakData[2][i] = result.data().sayaka__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[2], limitbreakData[2], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__party__ur__limitbreak.length; i++){
                        limitbreakData[3][i] = result.data().tsuzuri__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[3], limitbreakData[3], i);
                    }
                    for (let i = 0; i < result.data().rurino__party__ur__limitbreak.length; i++){
                        limitbreakData[4][i] = result.data().rurino__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[4], limitbreakData[4], i);
                    }
                    for (let i = 0; i < result.data().megumi__party__ur__limitbreak.length; i++){
                        limitbreakData[5][i] = result.data().megumi__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[5], limitbreakData[5], i);
                    }
                    for (let i = 0; i < result.data().kaho__spring__ur__limitbreak.length; i++){
                        limitbreakData[6][i] = result.data().kaho__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[6], limitbreakData[6], i);
                    }
                    for (let i = 0; i < result.data().kaho__spring__sr__limitbreak.length; i++){
                        limitbreakData[7][i] = result.data().kaho__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[7], limitbreakData[7], i);
                    }
                    for (let i = 0; i < result.data().kozue__spring__ur__limitbreak.length; i++){
                        limitbreakData[8][i] = result.data().kozue__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[8], limitbreakData[8], i);
                    }
                    for (let i = 0; i < result.data().kozue__spring__sr__limitbreak.length; i++){
                        limitbreakData[9][i] = result.data().kozue__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[9], limitbreakData[9], i);
                    }
                    for (let i = 0; i < result.data().sayaka__spring__ur__limitbreak.length; i++){
                        limitbreakData[10][i] = result.data().sayaka__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[10], limitbreakData[10], i);
                    }
                    for (let i = 0; i < result.data().sayaka__spring__sr__limitbreak.length; i++){
                        limitbreakData[11][i] = result.data().sayaka__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[11], limitbreakData[11], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__spring__ur__limitbreak.length; i++){
                        limitbreakData[12][i] = result.data().tsuzuri__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[12], limitbreakData[12], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__spring__sr__limitbreak.length; i++){
                        limitbreakData[13][i] = result.data().tsuzuri__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[13], limitbreakData[13], i);
                    }
                    for (let i = 0; i < result.data().rurino__spring__ur__limitbreak.length; i++){
                        limitbreakData[14][i] = result.data().rurino__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[14], limitbreakData[14], i);
                    }
                    for (let i = 0; i < result.data().rurino__spring__sr__limitbreak.length; i++){
                        limitbreakData[15][i] = result.data().rurino__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[15], limitbreakData[15], i);
                    }
                    for (let i = 0; i < result.data().megumi__spring__ur__limitbreak.length; i++){
                        limitbreakData[16][i] = result.data().megumi__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[16], limitbreakData[16], i);
                    }
                    for (let i = 0; i < result.data().megumi__spring__sr__limitbreak.length; i++){
                        limitbreakData[17][i] = result.data().megumi__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[17], limitbreakData[17], i);
                    }
                    for (let i = 0; i < result.data().kaho__summer__ur__limitbreak.length; i++){
                        limitbreakData[18][i] = result.data().kaho__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[18], limitbreakData[18], i);
                    }
                    for (let i = 0; i < result.data().kaho__summer__sr__limitbreak.length; i++){
                        limitbreakData[19][i] = result.data().kaho__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[19], limitbreakData[19], i);
                    }
                    for (let i = 0; i < result.data().kozue__summer__ur__limitbreak.length; i++){
                        limitbreakData[20][i] = result.data().kozue__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[20], limitbreakData[20], i);
                    }
                    for (let i = 0; i < result.data().kozue__summer__sr__limitbreak.length; i++){
                        limitbreakData[21][i] = result.data().kozue__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[21], limitbreakData[21], i);
                    }
                    for (let i = 0; i < result.data().sayaka__summer__ur__limitbreak.length; i++){
                        limitbreakData[22][i] = result.data().sayaka__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[22], limitbreakData[22], i);
                    }
                    for (let i = 0; i < result.data().sayaka__summer__sr__limitbreak.length; i++){
                        limitbreakData[23][i] = result.data().sayaka__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[23], limitbreakData[23], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__summer__ur__limitbreak.length; i++){
                        limitbreakData[24][i] = result.data().tsuzuri__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[24], limitbreakData[24], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__summer__sr__limitbreak.length; i++){
                        limitbreakData[25][i] = result.data().tsuzuri__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[25], limitbreakData[25], i);
                    }
                    for (let i = 0; i < result.data().rurino__summer__ur__limitbreak.length; i++){
                        limitbreakData[26][i] = result.data().rurino__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[26], limitbreakData[26], i);
                    }
                    for (let i = 0; i < result.data().rurino__summer__sr__limitbreak.length; i++){
                        limitbreakData[27][i] = result.data().rurino__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[27], limitbreakData[27], i);
                    }
                    for (let i = 0; i < result.data().megumi__summer__ur__limitbreak.length; i++){
                        limitbreakData[28][i] = result.data().megumi__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[28], limitbreakData[28], i);
                    }
                    for (let i = 0; i < result.data().megumi__summer__sr__limitbreak.length; i++){
                        limitbreakData[29][i] = result.data().megumi__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[29], limitbreakData[29], i);
                    }
                    for (let i = 0; i < result.data().kaho__autumn__ur__limitbreak.length; i++){
                        limitbreakData[30][i] = result.data().kaho__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[30], limitbreakData[30], i);
                    }
                    for (let i = 0; i < result.data().kaho__autumn__sr__limitbreak.length; i++){
                        limitbreakData[31][i] = result.data().kaho__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[31], limitbreakData[31], i);
                    }
                    for (let i = 0; i < result.data().kozue__autumn__ur__limitbreak.length; i++){
                        limitbreakData[32][i] = result.data().kozue__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[32], limitbreakData[32], i);
                    }
                    for (let i = 0; i < result.data().kozue__autumn__sr__limitbreak.length; i++){
                        limitbreakData[33][i] = result.data().kozue__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[33], limitbreakData[33], i);
                    }
                    for (let i = 0; i < result.data().sayaka__autumn__ur__limitbreak.length; i++){
                        limitbreakData[34][i] = result.data().sayaka__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[34], limitbreakData[34], i);
                    }
                    for (let i = 0; i < result.data().sayaka__autumn__sr__limitbreak.length; i++){
                        limitbreakData[35][i] = result.data().sayaka__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[35], limitbreakData[35], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__autumn__ur__limitbreak.length; i++){
                        limitbreakData[36][i] = result.data().tsuzuri__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[36], limitbreakData[36], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__autumn__sr__limitbreak.length; i++){
                        limitbreakData[37][i] = result.data().tsuzuri__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[37], limitbreakData[37], i);
                    }
                    for (let i = 0; i < result.data().rurino__autumn__ur__limitbreak.length; i++){
                        limitbreakData[38][i] = result.data().rurino__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[38], limitbreakData[38], i);
                    }
                    for (let i = 0; i < result.data().rurino__autumn__sr__limitbreak.length; i++){
                        limitbreakData[39][i] = result.data().rurino__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[39], limitbreakData[39], i);
                    }
                    for (let i = 0; i < result.data().megumi__autumn__ur__limitbreak.length; i++){
                        limitbreakData[40][i] = result.data().megumi__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[40], limitbreakData[40], i);
                    }
                    for (let i = 0; i < result.data().megumi__autumn__sr__limitbreak.length; i++){
                        limitbreakData[41][i] = result.data().megumi__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[41], limitbreakData[41], i);
                    }
                    for (let i = 0; i < result.data().kaho__winter__ur__limitbreak.length; i++){
                        limitbreakData[42][i] = result.data().kaho__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[42], limitbreakData[42], i);
                    }
                    for (let i = 0; i < result.data().kaho__winter__sr__limitbreak.length; i++){
                        limitbreakData[43][i] = result.data().kaho__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[43], limitbreakData[43], i);
                    }
                    for (let i = 0; i < result.data().kozue__winter__ur__limitbreak.length; i++){
                        limitbreakData[44][i] = result.data().kozue__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[44], limitbreakData[44], i);
                    }
                    for (let i = 0; i < result.data().kozue__winter__sr__limitbreak.length; i++){
                        limitbreakData[45][i] = result.data().kozue__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[45], limitbreakData[45], i);
                    }
                    for (let i = 0; i < result.data().sayaka__winter__ur__limitbreak.length; i++){
                        limitbreakData[46][i] = result.data().sayaka__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[46], limitbreakData[46], i);
                    }
                    for (let i = 0; i < result.data().sayaka__winter__sr__limitbreak.length; i++){
                        limitbreakData[47][i] = result.data().sayaka__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[47], limitbreakData[47], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__winter__ur__limitbreak.length; i++){
                        limitbreakData[48][i] = result.data().tsuzuri__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[48], limitbreakData[48], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__winter__sr__limitbreak.length; i++){
                        limitbreakData[49][i] = result.data().tsuzuri__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[49], limitbreakData[49], i);
                    }
                    for (let i = 0; i < result.data().rurino__winter__ur__limitbreak.length; i++){
                        limitbreakData[50][i] = result.data().rurino__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[50], limitbreakData[50], i);
                    }
                    for (let i = 0; i < result.data().rurino__winter__sr__limitbreak.length; i++){
                        limitbreakData[51][i] = result.data().rurino__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[51], limitbreakData[51], i);
                    }
                    for (let i = 0; i < result.data().megumi__winter__ur__limitbreak.length; i++){
                        limitbreakData[52][i] = result.data().megumi__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[52], limitbreakData[52], i);
                    }
                    for (let i = 0; i < result.data().megumi__winter__sr__limitbreak.length; i++){
                        limitbreakData[53][i] = result.data().megumi__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[53], limitbreakData[53], i);
                    }
                    for (let i = 0; i < result.data().kaho__common__ur__limitbreak.length; i++){
                        limitbreakData[54][i] = result.data().kaho__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[54], limitbreakData[54], i);
                    }
                    for (let i = 0; i < result.data().kaho__common__sr__limitbreak.length; i++){
                        limitbreakData[55][i] = result.data().kaho__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[55], limitbreakData[55], i);
                    }
                    for (let i = 0; i < result.data().kozue__common__ur__limitbreak.length; i++){
                        limitbreakData[56][i] = result.data().kozue__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[56], limitbreakData[56], i);
                    }
                    for (let i = 0; i < result.data().kozue__common__sr__limitbreak.length; i++){
                        limitbreakData[57][i] = result.data().kozue__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[57], limitbreakData[57], i);
                    }
                    for (let i = 0; i < result.data().sayaka__common__ur__limitbreak.length; i++){
                        limitbreakData[58][i] = result.data().sayaka__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[58], limitbreakData[58], i);
                    }
                    for (let i = 0; i < result.data().sayaka__common__sr__limitbreak.length; i++){
                        limitbreakData[59][i] = result.data().sayaka__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[59], limitbreakData[59], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__common__ur__limitbreak.length; i++){
                        limitbreakData[60][i] = result.data().tsuzuri__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[60], limitbreakData[60], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__common__sr__limitbreak.length; i++){
                        limitbreakData[61][i] = result.data().tsuzuri__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[61], limitbreakData[61], i);
                    }
                    for (let i = 0; i < result.data().rurino__common__ur__limitbreak.length; i++){
                        limitbreakData[62][i] = result.data().rurino__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[62], limitbreakData[62], i);
                    }
                    for (let i = 0; i < result.data().rurino__common__sr__limitbreak.length; i++){
                        limitbreakData[63][i] = result.data().rurino__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[63], limitbreakData[63], i);
                    }
                    for (let i = 0; i < result.data().megumi__common__ur__limitbreak.length; i++){
                        limitbreakData[64][i] = result.data().megumi__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[64], limitbreakData[64], i);
                    }
                    for (let i = 0; i < result.data().megumi__common__sr__limitbreak.length; i++){
                        limitbreakData[65][i] = result.data().megumi__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[65], limitbreakData[65], i);
                    }
                    for (let i = 0; i < result.data().kaho__graduation__ur__limitbreak.length; i++){
                        limitbreakData[66][i] = result.data().kaho__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[66], limitbreakData[66], i);
                    }
                    for (let i = 0; i < result.data().kaho__graduation__sr__limitbreak.length; i++){
                        limitbreakData[67][i] = result.data().kaho__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[67], limitbreakData[67], i);
                    }
                    for (let i = 0; i < result.data().kozue__graduation__ur__limitbreak.length; i++){
                        limitbreakData[68][i] = result.data().kozue__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[68], limitbreakData[68], i);
                    }
                    for (let i = 0; i < result.data().kozue__graduation__sr__limitbreak.length; i++){
                        limitbreakData[69][i] = result.data().kozue__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[69], limitbreakData[69], i);
                    }
                    for (let i = 0; i < result.data().sayaka__graduation__ur__limitbreak.length; i++){
                        limitbreakData[70][i] = result.data().sayaka__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[70], limitbreakData[70], i);
                    }
                    for (let i = 0; i < result.data().sayaka__graduation__sr__limitbreak.length; i++){
                        limitbreakData[71][i] = result.data().sayaka__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[71], limitbreakData[71], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__graduation__ur__limitbreak.length; i++){
                        limitbreakData[72][i] = result.data().tsuzuri__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[72], limitbreakData[72], i);
                    }
                    for (let i = 0; i < result.data().tsuzuri__graduation__sr__limitbreak.length; i++){
                        limitbreakData[73][i] = result.data().tsuzuri__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[73], limitbreakData[73], i);
                    }
                    for (let i = 0; i < result.data().rurino__graduation__ur__limitbreak.length; i++){
                        limitbreakData[74][i] = result.data().rurino__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[74], limitbreakData[74], i);
                    }
                    for (let i = 0; i < result.data().rurino__graduation__sr__limitbreak.length; i++){
                        limitbreakData[75][i] = result.data().rurino__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[75], limitbreakData[75], i);
                    }
                    for (let i = 0; i < result.data().megumi__graduation__ur__limitbreak.length; i++){
                        limitbreakData[76][i] = result.data().megumi__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[76], limitbreakData[76], i);
                    }
                    for (let i = 0; i < result.data().megumi__graduation__sr__limitbreak.length; i++){
                        limitbreakData[77][i] = result.data().megumi__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[77], limitbreakData[77], i);
                    }
                    for (let i = 0; i < result.data().sachi__graduation__ur__limitbreak.length; i++){
                        limitbreakData[78][i] = result.data().sachi__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[78], limitbreakData[78], i);
                    }
                    for (let i = 0; i < result.data().ginko__party__ur__limitbreak.length; i++){
                        limitbreakData[79][i] = result.data().ginko__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[79], limitbreakData[79], i);
                    }
                    for (let i = 0; i < result.data().ginko__spring__ur__limitbreak.length; i++){
                        limitbreakData[80][i] = result.data().ginko__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[80], limitbreakData[80], i);
                    }
                    for (let i = 0; i < result.data().ginko__spring__sr__limitbreak.length; i++){
                        limitbreakData[81][i] = result.data().ginko__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[81], limitbreakData[81], i);
                    }
                    for (let i = 0; i < result.data().ginko__summer__ur__limitbreak.length; i++){
                        limitbreakData[82][i] = result.data().ginko__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[82], limitbreakData[82], i);
                    }
                    for (let i = 0; i < result.data().ginko__summer__sr__limitbreak.length; i++){
                        limitbreakData[83][i] = result.data().ginko__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[83], limitbreakData[83], i);
                    }
                    for (let i = 0; i < result.data().ginko__autumn__ur__limitbreak.length; i++){
                        limitbreakData[84][i] = result.data().ginko__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[84], limitbreakData[84], i);
                    }
                    for (let i = 0; i < result.data().ginko__autumn__sr__limitbreak.length; i++){
                        limitbreakData[85][i] = result.data().ginko__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[85], limitbreakData[85], i);
                    }
                    for (let i = 0; i < result.data().ginko__winter__ur__limitbreak.length; i++){
                        limitbreakData[86][i] = result.data().ginko__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[86], limitbreakData[86], i);
                    }
                    for (let i = 0; i < result.data().ginko__winter__sr__limitbreak.length; i++){
                        limitbreakData[87][i] = result.data().ginko__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[87], limitbreakData[87], i);
                    }
                    for (let i = 0; i < result.data().ginko__common__ur__limitbreak.length; i++){
                        limitbreakData[88][i] = result.data().ginko__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[88], limitbreakData[88], i);
                    }
                    for (let i = 0; i < result.data().ginko__common__sr__limitbreak.length; i++){
                        limitbreakData[89][i] = result.data().ginko__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[89], limitbreakData[89], i);
                    }
                    for (let i = 0; i < result.data().ginko__graduation__ur__limitbreak.length; i++){
                        limitbreakData[90][i] = result.data().ginko__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[90], limitbreakData[90], i);
                    }
                    for (let i = 0; i < result.data().ginko__graduation__sr__limitbreak.length; i++){
                        limitbreakData[91][i] = result.data().ginko__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[91], limitbreakData[91], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__party__ur__limitbreak.length; i++){
                        limitbreakData[92][i] = result.data().kosuzu__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[92], limitbreakData[92], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__spring__ur__limitbreak.length; i++){
                        limitbreakData[93][i] = result.data().kosuzu__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[93], limitbreakData[93], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__spring__sr__limitbreak.length; i++){
                        limitbreakData[94][i] = result.data().kosuzu__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[94], limitbreakData[94], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__summer__ur__limitbreak.length; i++){
                        limitbreakData[95][i] = result.data().kosuzu__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[95], limitbreakData[95], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__summer__sr__limitbreak.length; i++){
                        limitbreakData[96][i] = result.data().kosuzu__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[96], limitbreakData[96], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__autumn__ur__limitbreak.length; i++){
                        limitbreakData[97][i] = result.data().kosuzu__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[97], limitbreakData[97], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__autumn__sr__limitbreak.length; i++){
                        limitbreakData[98][i] = result.data().kosuzu__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[98], limitbreakData[98], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__winter__ur__limitbreak.length; i++){
                        limitbreakData[99][i] = result.data().kosuzu__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[99], limitbreakData[99], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__winter__sr__limitbreak.length; i++){
                        limitbreakData[100][i] = result.data().kosuzu__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[100], limitbreakData[100], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__common__ur__limitbreak.length; i++){
                        limitbreakData[101][i] = result.data().kosuzu__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[101], limitbreakData[101], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__common__sr__limitbreak.length; i++){
                        limitbreakData[102][i] = result.data().kosuzu__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[102], limitbreakData[102], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__graduation__ur__limitbreak.length; i++){
                        limitbreakData[103][i] = result.data().kosuzu__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[103], limitbreakData[103], i);
                    }
                    for (let i = 0; i < result.data().kosuzu__graduation__sr__limitbreak.length; i++){
                        limitbreakData[104][i] = result.data().kosuzu__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[104], limitbreakData[104], i);
                    }
                    for (let i = 0; i < result.data().hime__party__ur__limitbreak.length; i++){
                        limitbreakData[105][i] = result.data().hime__party__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[105], limitbreakData[105], i);
                    }
                    for (let i = 0; i < result.data().hime__spring__ur__limitbreak.length; i++){
                        limitbreakData[106][i] = result.data().hime__spring__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[106], limitbreakData[106], i);
                    }
                    for (let i = 0; i < result.data().hime__spring__sr__limitbreak.length; i++){
                        limitbreakData[107][i] = result.data().hime__spring__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[107], limitbreakData[107], i);
                    }
                    for (let i = 0; i < result.data().hime__summer__ur__limitbreak.length; i++){
                        limitbreakData[108][i] = result.data().hime__summer__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[108], limitbreakData[108], i);
                    }
                    for (let i = 0; i < result.data().hime__summer__sr__limitbreak.length; i++){
                        limitbreakData[109][i] = result.data().hime__summer__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[109], limitbreakData[109], i);
                    }
                    for (let i = 0; i < result.data().hime__autumn__ur__limitbreak.length; i++){
                        limitbreakData[110][i] = result.data().hime__autumn__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[110], limitbreakData[110], i);
                    }
                    for (let i = 0; i < result.data().hime__autumn__sr__limitbreak.length; i++){
                        limitbreakData[111][i] = result.data().hime__autumn__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[111], limitbreakData[111], i);
                    }
                    for (let i = 0; i < result.data().hime__winter__ur__limitbreak.length; i++){
                        limitbreakData[112][i] = result.data().hime__winter__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[112], limitbreakData[112], i);
                    }
                    for (let i = 0; i < result.data().hime__winter__sr__limitbreak.length; i++){
                        limitbreakData[113][i] = result.data().hime__winter__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[113], limitbreakData[113], i);
                    }
                    for (let i = 0; i < result.data().hime__common__ur__limitbreak.length; i++){
                        limitbreakData[114][i] = result.data().hime__common__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[114], limitbreakData[114], i);
                    }
                    for (let i = 0; i < result.data().hime__common__sr__limitbreak.length; i++){
                        limitbreakData[115][i] = result.data().hime__common__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[115], limitbreakData[115], i);
                    }
                    for (let i = 0; i < result.data().hime__graduation__ur__limitbreak.length; i++){
                        limitbreakData[116][i] = result.data().hime__graduation__ur__limitbreak[i];
                        displayLimitbreak(cardNodeList[116], limitbreakData[116], i);
                    }
                    for (let i = 0; i < result.data().hime__graduation__sr__limitbreak.length; i++){
                        limitbreakData[117][i] = result.data().hime__graduation__sr__limitbreak[i];
                        displayLimitbreak(cardNodeList[117], limitbreakData[117], i);
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
            for (let i = 0; i < drData.length; i++) {
                for (let j = 0; j < drData[i].length; j++) {
                    drData[i][j] = drData[i][j] % 3; 
                }
            }
            for (let i = 0; i < brData.length; i++) {
                for (let j = 0; j < brData[i].length; j++) {
                    brData[i][j] = brData[i][j] % 3; 
                }
            }
            for (let i = 0; i < specialData.length; i++) {
                for (let j = 0; j < specialData[i].length; j++) {
                    specialData[i][j] = specialData[i][j] % 3; 
                }
            }
            for (let i = 0; i < cardData.length; i++) {
                for (let j = 0; j < cardData[i].length; j++) {
                    cardData[i][j] = cardData[i][j] % 4; 
                }
            }
            for (let i = 0; i < drlimitbreakData.length; i++) {
                for (let j = 0; j < drlimitbreakData[i].length; j++) {
                    drlimitbreakData[i][j] = drlimitbreakData[i][j] % 5; 
                }
            }
            for (let i = 0; i < brlimitbreakData.length; i++) {
                for (let j = 0; j < brlimitbreakData[i].length; j++) {
                    brlimitbreakData[i][j] = brlimitbreakData[i][j] % 5; 
                }
            }
            for (let i = 0; i < speciallimitbreakData.length; i++) {
                for (let j = 0; j < speciallimitbreakData[i].length; j++) {
                    speciallimitbreakData[i][j] = speciallimitbreakData[i][j] % 5; 
                }
            }
            for (let i = 0; i < limitbreakData.length; i++) {
                for (let j = 0; j < limitbreakData[i].length; j++) {
                    limitbreakData[i][j] = limitbreakData[i][j] % 5; 
                }
            }
            db.collection('users').doc(uid).set({
                kaho__dr: drData[0],
                kozue__dr: drData[1],
                sayaka__dr: drData[2],
                tsuzuri__dr: drData[3],
                rurino__dr: drData[4],
                megumi__dr: drData[5],
                ginko__dr: drData[6],
                kosuzu__dr: drData[7],
                hime__dr: drData[8],
                kaho__br: brData[0],
                kozue__br: brData[1],
                sayaka__br: brData[2],
                tsuzuri__br: brData[3],
                rurino__br: brData[4],
                megumi__br: brData[5],
                ginko__br: brData[6],
                kosuzu__br: brData[7],
                hime__br: brData[8],
                kaho__special__ur: specialData[0],
                kozue__special__ur: specialData[1],
                sayaka__special__ur: specialData[2],
                tsuzuri__special__ur: specialData[3],
                rurino__special__ur: specialData[4],
                megumi__special__ur: specialData[5],
                ginko__special__ur: specialData[6],
                kosuzu__special__ur: specialData[7],
                hime__special__ur: specialData[8],
                kaho__party__ur: cardData[0],
                kozue__party__ur: cardData[1],
                sayaka__party__ur: cardData[2],
                tsuzuri__party__ur: cardData[3],
                rurino__party__ur: cardData[4],
                megumi__party__ur: cardData[5],
                kaho__spring__ur: cardData[6],
                kaho__spring__sr: cardData[7],
                kozue__spring__ur: cardData[8],
                kozue__spring__sr: cardData[9],
                sayaka__spring__ur: cardData[10],
                sayaka__spring__sr: cardData[11],
                tsuzuri__spring__ur: cardData[12],
                tsuzuri__spring__sr: cardData[13],
                rurino__spring__ur: cardData[14],
                rurino__spring__sr: cardData[15],
                megumi__spring__ur: cardData[16],
                megumi__spring__sr: cardData[17],
                kaho__summer__ur: cardData[18],
                kaho__summer__sr: cardData[19],
                kozue__summer__ur: cardData[20],
                kozue__summer__sr: cardData[21],
                sayaka__summer__ur: cardData[22],
                sayaka__summer__sr: cardData[23],
                tsuzuri__summer__ur: cardData[24],
                tsuzuri__summer__sr: cardData[25],
                rurino__summer__ur: cardData[26],
                rurino__summer__sr: cardData[27],
                megumi__summer__ur: cardData[28],
                megumi__summer__sr: cardData[29],
                kaho__autumn__ur: cardData[30],
                kaho__autumn__sr: cardData[31],
                kozue__autumn__ur: cardData[32],
                kozue__autumn__sr: cardData[33],
                sayaka__autumn__ur: cardData[34],
                sayaka__autumn__sr: cardData[35],
                tsuzuri__autumn__ur: cardData[36],
                tsuzuri__autumn__sr: cardData[37],
                rurino__autumn__ur: cardData[38],
                rurino__autumn__sr: cardData[39],
                megumi__autumn__ur: cardData[40],
                megumi__autumn__sr: cardData[41],
                kaho__winter__ur: cardData[42],
                kaho__winter__sr: cardData[43],
                kozue__winter__ur: cardData[44],
                kozue__winter__sr: cardData[45],
                sayaka__winter__ur: cardData[46],
                sayaka__winter__sr: cardData[47],
                tsuzuri__winter__ur: cardData[48],
                tsuzuri__winter__sr: cardData[49],
                rurino__winter__ur: cardData[50],
                rurino__winter__sr: cardData[51],
                megumi__winter__ur: cardData[52],
                megumi__winter__sr: cardData[53],
                kaho__common__ur: cardData[54],
                kaho__common__sr: cardData[55],
                kozue__common__ur: cardData[56],
                kozue__common__sr: cardData[57],
                sayaka__common__ur: cardData[58],
                sayaka__common__sr: cardData[59],
                tsuzuri__common__ur: cardData[60],
                tsuzuri__common__sr: cardData[61],
                rurino__common__ur: cardData[62],
                rurino__common__sr: cardData[63],
                megumi__common__ur: cardData[64],
                megumi__common__sr: cardData[65],
                kaho__graduation__ur: cardData[66],
                kaho__graduation__sr: cardData[67],
                kozue__graduation__ur: cardData[68],
                kozue__graduation__sr: cardData[69],
                sayaka__graduation__ur: cardData[70],
                sayaka__graduation__sr: cardData[71],
                tsuzuri__graduation__ur: cardData[72],
                tsuzuri__graduation__sr: cardData[73],
                rurino__graduation__ur: cardData[74],
                rurino__graduation__sr: cardData[75],
                megumi__graduation__ur: cardData[76],
                megumi__graduation__sr: cardData[77],
                sachi__graduation__ur: cardData[78],
                ginko__party__ur: cardData[79],
                ginko__spring__ur: cardData[80],
                ginko__spring__sr: cardData[81],
                ginko__summer__ur: cardData[82],
                ginko__summer__sr: cardData[83],
                ginko__autumn__ur: cardData[84],
                ginko__autumn__sr: cardData[85],
                ginko__winter__ur: cardData[86],
                ginko__winter__sr: cardData[87],
                ginko__common__ur: cardData[88],
                ginko__common__sr: cardData[89],
                ginko__graduation__ur: cardData[90],
                ginko__graduation__sr: cardData[91],
                kosuzu__party__ur: cardData[92],
                kosuzu__spring__ur: cardData[93],
                kosuzu__spring__sr: cardData[94],
                kosuzu__summer__ur: cardData[95],
                kosuzu__summer__sr: cardData[96],
                kosuzu__autumn__ur: cardData[97],
                kosuzu__autumn__sr: cardData[98],
                kosuzu__winter__ur: cardData[99],
                kosuzu__winter__sr: cardData[100],
                kosuzu__common__ur: cardData[101],
                kosuzu__common__sr: cardData[102],
                kosuzu__graduation__ur: cardData[103],
                kosuzu__graduation__sr: cardData[104],
                hime__party__ur: cardData[105],
                hime__spring__ur: cardData[106],
                hime__spring__sr: cardData[107],
                hime__summer__ur: cardData[108],
                hime__summer__sr: cardData[109],
                hime__autumn__ur: cardData[110],
                hime__autumn__sr: cardData[111],
                hime__winter__ur: cardData[112],
                hime__winter__sr: cardData[113],
                hime__common__ur: cardData[114],
                hime__common__sr: cardData[115],
                hime__graduation__ur: cardData[116],
                hime__graduation__sr: cardData[117],
                kaho__dr__limitbreak: drlimitbreakData[0],
                kozue__dr__limitbreak: drlimitbreakData[1],
                sayaka__dr__limitbreak: drlimitbreakData[2],
                tsuzuri__dr__limitbreak: drlimitbreakData[3],
                rurino__dr__limitbreak: drlimitbreakData[4],
                megumi__dr__limitbreak: drlimitbreakData[5],
                ginko__dr__limitbreak: drlimitbreakData[6],
                kosuzu__dr__limitbreak: drlimitbreakData[7],
                hime__dr__limitbreak: drlimitbreakData[8],
                kaho__br__limitbreak: brlimitbreakData[0],
                kozue__br__limitbreak: brlimitbreakData[1],
                sayaka__br__limitbreak: brlimitbreakData[2],
                tsuzuri__br__limitbreak: brlimitbreakData[3],
                rurino__br__limitbreak: brlimitbreakData[4],
                megumi__br__limitbreak: brlimitbreakData[5],
                ginko__br__limitbreak: brlimitbreakData[6],
                kosuzu__br__limitbreak: brlimitbreakData[7],
                hime__br__limitbreak: brlimitbreakData[8],
                kaho__special__ur__limitbreak: speciallimitbreakData[0],
                kozue__special__ur__limitbreak: speciallimitbreakData[1],
                sayaka__special__ur__limitbreak: speciallimitbreakData[2],
                tsuzuri__special__ur__limitbreak: speciallimitbreakData[3],
                rurino__special__ur__limitbreak: speciallimitbreakData[4],
                megumi__special__ur__limitbreak: speciallimitbreakData[5],
                ginko__special__ur__limitbreak: speciallimitbreakData[6],
                kosuzu__special__ur__limitbreak: speciallimitbreakData[7],
                hime__special__ur__limitbreak: speciallimitbreakData[8],
                kaho__party__ur__limitbreak: limitbreakData[0],
                kozue__party__ur__limitbreak: limitbreakData[1],
                sayaka__party__ur__limitbreak: limitbreakData[2],
                tsuzuri__party__ur__limitbreak: limitbreakData[3],
                rurino__party__ur__limitbreak: limitbreakData[4],
                megumi__party__ur__limitbreak: limitbreakData[5],
                kaho__spring__ur__limitbreak: limitbreakData[6],
                kaho__spring__sr__limitbreak: limitbreakData[7],
                kozue__spring__ur__limitbreak: limitbreakData[8],
                kozue__spring__sr__limitbreak: limitbreakData[9],
                sayaka__spring__ur__limitbreak: limitbreakData[10],
                sayaka__spring__sr__limitbreak: limitbreakData[11],
                tsuzuri__spring__ur__limitbreak: limitbreakData[12],
                tsuzuri__spring__sr__limitbreak: limitbreakData[13],
                rurino__spring__ur__limitbreak: limitbreakData[14],
                rurino__spring__sr__limitbreak: limitbreakData[15],
                megumi__spring__ur__limitbreak: limitbreakData[16],
                megumi__spring__sr__limitbreak: limitbreakData[17],
                kaho__summer__ur__limitbreak: limitbreakData[18],
                kaho__summer__sr__limitbreak: limitbreakData[19],
                kozue__summer__ur__limitbreak: limitbreakData[20],
                kozue__summer__sr__limitbreak: limitbreakData[21],
                sayaka__summer__ur__limitbreak: limitbreakData[22],
                sayaka__summer__sr__limitbreak: limitbreakData[23],
                tsuzuri__summer__ur__limitbreak: limitbreakData[24],
                tsuzuri__summer__sr__limitbreak: limitbreakData[25],
                rurino__summer__ur__limitbreak: limitbreakData[26],
                rurino__summer__sr__limitbreak: limitbreakData[27],
                megumi__summer__ur__limitbreak: limitbreakData[28],
                megumi__summer__sr__limitbreak: limitbreakData[29],
                kaho__autumn__ur__limitbreak: limitbreakData[30],
                kaho__autumn__sr__limitbreak: limitbreakData[31],
                kozue__autumn__ur__limitbreak: limitbreakData[32],
                kozue__autumn__sr__limitbreak: limitbreakData[33],
                sayaka__autumn__ur__limitbreak: limitbreakData[34],
                sayaka__autumn__sr__limitbreak: limitbreakData[35],
                tsuzuri__autumn__ur__limitbreak: limitbreakData[36],
                tsuzuri__autumn__sr__limitbreak: limitbreakData[37],
                rurino__autumn__ur__limitbreak: limitbreakData[38],
                rurino__autumn__sr__limitbreak: limitbreakData[39],
                megumi__autumn__ur__limitbreak: limitbreakData[40],
                megumi__autumn__sr__limitbreak: limitbreakData[41],
                kaho__winter__ur__limitbreak: limitbreakData[42],
                kaho__winter__sr__limitbreak: limitbreakData[43],
                kozue__winter__ur__limitbreak: limitbreakData[44],
                kozue__winter__sr__limitbreak: limitbreakData[45],
                sayaka__winter__ur__limitbreak: limitbreakData[46],
                sayaka__winter__sr__limitbreak: limitbreakData[47],
                tsuzuri__winter__ur__limitbreak: limitbreakData[48],
                tsuzuri__winter__sr__limitbreak: limitbreakData[49],
                rurino__winter__ur__limitbreak: limitbreakData[50],
                rurino__winter__sr__limitbreak: limitbreakData[51],
                megumi__winter__ur__limitbreak: limitbreakData[52],
                megumi__winter__sr__limitbreak: limitbreakData[53],
                kaho__common__ur__limitbreak: limitbreakData[54],
                kaho__common__sr__limitbreak: limitbreakData[55],
                kozue__common__ur__limitbreak: limitbreakData[56],
                kozue__common__sr__limitbreak: limitbreakData[57],
                sayaka__common__ur__limitbreak: limitbreakData[58],
                sayaka__common__sr__limitbreak: limitbreakData[59],
                tsuzuri__common__ur__limitbreak: limitbreakData[60],
                tsuzuri__common__sr__limitbreak: limitbreakData[61],
                rurino__common__ur__limitbreak: limitbreakData[62],
                rurino__common__sr__limitbreak: limitbreakData[63],
                megumi__common__ur__limitbreak: limitbreakData[64],
                megumi__common__sr__limitbreak: limitbreakData[65],
                kaho__graduation__ur__limitbreak: limitbreakData[66],
                kaho__graduation__sr__limitbreak: limitbreakData[67],
                kozue__graduation__ur__limitbreak: limitbreakData[68],
                kozue__graduation__sr__limitbreak: limitbreakData[69],
                sayaka__graduation__ur__limitbreak: limitbreakData[70],
                sayaka__graduation__sr__limitbreak: limitbreakData[71],
                tsuzuri__graduation__ur__limitbreak: limitbreakData[72],
                tsuzuri__graduation__sr__limitbreak: limitbreakData[73],
                rurino__graduation__ur__limitbreak: limitbreakData[74],
                rurino__graduation__sr__limitbreak: limitbreakData[75],
                megumi__graduation__ur__limitbreak: limitbreakData[76],
                megumi__graduation__sr__limitbreak: limitbreakData[77],
                sachi__graduation__ur__limitbreak: limitbreakData[78],
                ginko__party__ur__limitbreak: limitbreakData[79],
                ginko__spring__ur__limitbreak: limitbreakData[80],
                ginko__spring__sr__limitbreak: limitbreakData[81],
                ginko__summer__ur__limitbreak: limitbreakData[82],
                ginko__summer__sr__limitbreak: limitbreakData[83],
                ginko__autumn__ur__limitbreak: limitbreakData[84],
                ginko__autumn__sr__limitbreak: limitbreakData[85],
                ginko__winter__ur__limitbreak: limitbreakData[86],
                ginko__winter__sr__limitbreak: limitbreakData[87],
                ginko__common__ur__limitbreak: limitbreakData[88],
                ginko__common__sr__limitbreak: limitbreakData[89],
                ginko__graduation__ur__limitbreak: limitbreakData[90],
                ginko__graduation__sr__limitbreak: limitbreakData[91],
                kosuzu__party__ur__limitbreak: limitbreakData[92],
                kosuzu__spring__ur__limitbreak: limitbreakData[93],
                kosuzu__spring__sr__limitbreak: limitbreakData[94],
                kosuzu__summer__ur__limitbreak: limitbreakData[95],
                kosuzu__summer__sr__limitbreak: limitbreakData[96],
                kosuzu__autumn__ur__limitbreak: limitbreakData[97],
                kosuzu__autumn__sr__limitbreak: limitbreakData[98],
                kosuzu__winter__ur__limitbreak: limitbreakData[99],
                kosuzu__winter__sr__limitbreak: limitbreakData[100],
                kosuzu__common__ur__limitbreak: limitbreakData[101],
                kosuzu__common__sr__limitbreak: limitbreakData[102],
                kosuzu__graduation__ur__limitbreak: limitbreakData[103],
                kosuzu__graduation__sr__limitbreak: limitbreakData[104],
                hime__party__ur__limitbreak: limitbreakData[105],
                hime__spring__ur__limitbreak: limitbreakData[106],
                hime__spring__sr__limitbreak: limitbreakData[107],
                hime__summer__ur__limitbreak: limitbreakData[108],
                hime__summer__sr__limitbreak: limitbreakData[109],
                hime__autumn__ur__limitbreak: limitbreakData[110],
                hime__autumn__sr__limitbreak: limitbreakData[111],
                hime__winter__ur__limitbreak: limitbreakData[112],
                hime__winter__sr__limitbreak: limitbreakData[113],
                hime__common__ur__limitbreak: limitbreakData[114],
                hime__common__sr__limitbreak: limitbreakData[115],
                hime__graduation__ur__limitbreak: limitbreakData[116],
                hime__graduation__sr__limitbreak: limitbreakData[117]
            });
            alert("Data Saved"); 
        } else {
            // User is signed out
            googleLogin();
        }
    });
}
function displayDr(cards, count, num) {
    if (count[num] % 3 === 0) {
        cards[num].children[0].children[0].classList.remove("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.remove("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/dr_plus0.png";
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 3 === 1) {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/dr_plus0.png";
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/dr_plus1.png";
        cards[num].children[2].classList.remove("invisible");
    }
}
function changeDr(cards, count, num) {
    count[num]++;    
    displayDr(cards, count, num);
}

function displayBr(cards, count, num) {
    if (count[num] % 3 === 0) {
        cards[num].children[0].children[0].classList.remove("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.remove("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/br_plus0.png";
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 3 === 1) {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/br_plus0.png";
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/br_plus1.png";
        cards[num].children[2].classList.remove("invisible");
    }
}
function changeBr(cards, count, num) {
    count[num]++;    
    displayBr(cards, count, num);
}

function displaySpecial(cards, count, num) {
    if (count[num] % 3 === 0) {
        cards[num].children[0].children[0].classList.remove("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.remove("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/ur_plus1.png";
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 3 === 1) {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/ur_plus1.png";
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = "/overlay/ur_plus2.png";
        cards[num].children[2].classList.remove("invisible");
    }
}
function changeSpecial(cards, count, num) {
    count[num]++;    
    displaySpecial(cards, count, num);
}

function displayCard(cards, count, num) {
    if (count[num] % 4 === 0) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].classList.remove("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.remove("visible");
        }
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus0');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus0');
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 4 === 1) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus0');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus0');
        cards[num].children[2].classList.remove("invisible");
    } else if (count[num] % 4 === 2) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus0', 'plus1');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus1');
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[0].children[0].classList.add("visible");
        for (let i = 0; i < cards[num].querySelectorAll('.opacity60').length; i++) {
            cards[num].querySelectorAll('.opacity60')[i].classList.add("visible");
        }
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus2');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus0', 'plus2');
        cards[num].children[2].classList.remove("invisible");
    }
}
function changeCard(cards, count, num) {
    count[num]++;    
    displayCard(cards, count, num);
}

function displayLimitbreak(cards, count, num) {
    if (count[num] % 5 === 0) {
        cards[num].children[2].children[0].src = "/limitbreak/limitbreak1.png";
    } else if (count[num] % 5 === 1) {
        cards[num].children[2].children[0].src = "/limitbreak/limitbreak2.png";
    } else if (count[num] % 5 === 2) {
        cards[num].children[2].children[0].src = "/limitbreak/limitbreak3.png";
    } else if (count[num] % 5 === 3) {
        cards[num].children[2].children[0].src = "/limitbreak/limitbreak4.png";
    } else {
        cards[num].children[2].children[0].src = "/limitbreak/limitbreak5.png";
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
    for (let i = 0; i < titleButtonList.length; i++) {
        if (titleButtonList[i].hasClass('titleButton__hide')) {
            memberSectionList[i].removeClass('marginZero');
            titleButtonList[i].removeClass('displayNone');
        }
    }
}

function downloadURL(url, name){
	const link = document.createElement("a")
	link.download = name;
	link.href = url;
	document.body.appendChild(link);
	link.click();
}

const memberSectionList = [$('.member__section__kaho'),
                           $('.member__section__kozue'),
                           $('.member__section__sayaka'),
                           $('.member__section__tsuzuri'),
                           $('.member__section__rurino'),
                           $('.member__section__megumi'),
                           $('.member__section__sachi'),
                           $('.member__section__ginko'),
                           $('.member__section__kosuzu'),
                           $('.member__section__hime')];

const titleButtonList = [$('.titleButton__kaho'),
                         $('.titleButton__kozue'),
                         $('.titleButton__sayaka'),
                         $('.titleButton__tsuzuri'),
                         $('.titleButton__rurino'),
                         $('.titleButton__megumi'),
                         $('.titleButton__sachi'),
                         $('.titleButton__ginko'),
                         $('.titleButton__kosuzu'),
                         $('.titleButton__hime'),];

$('.downImgButton').click(function() {
    for (let i = 0; i < titleButtonList.length; i++) {
        if (titleButtonList[i].hasClass('titleButton__hide')) {
            memberSectionList[i].addClass('marginZero');
            titleButtonList[i].addClass('displayNone');
        }
    }
    downImg();
});
/* Save Image Button */

// $('.infoButton').click(function() {
//     document.querySelector('.infoModal').showModal();
// });
// $('.modalCloseButton').click(function() {
//     document.querySelector('.infoModal').close();
// });

for (let i = 0; i < titleButtonList.length; i++) {
    titleButtonList[i].click(function() {
        titleButtonList[i].nextAll().toggleClass('displayNone');
        titleButtonList[i].toggleClass('titleButton__hide');
    });
}