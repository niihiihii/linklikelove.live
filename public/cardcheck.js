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
                'megumi__dr'];

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
                  'megumi__common__sr'];
const drNodeList = [];
const cardNodeList = [];
const drData = [];
const cardData = [];
const drlimitbreakData = [];
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
                kaho__dr__limitbreak: drlimitbreakData[0],
                kozue__dr__limitbreak: drlimitbreakData[1],
                sayaka__dr__limitbreak: drlimitbreakData[2],
                tsuzuri__dr__limitbreak: drlimitbreakData[3],
                rurino__dr__limitbreak: drlimitbreakData[4],
                megumi__dr__limitbreak: drlimitbreakData[5],
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
                megumi__common__sr__limitbreak: limitbreakData[65]
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
        cards[num].children[1].children[0].src = "/overlay/dr_plus0.png";
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 3 === 1) {
        cards[num].children[0].children[0].classList.add("visible");
        cards[num].children[1].children[0].src = "/overlay/dr_plus0.png";
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].classList.add("visible");
        cards[num].children[1].children[0].src = "/overlay/dr_plus1.png";
        cards[num].children[2].classList.remove("invisible");
    }
}
function changeDr(cards, count, num) {
    count[num]++;    
    displayDr(cards, count, num);
}

function displayCard(cards, count, num) {
    if (count[num] % 4 === 0) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].classList.remove("visible");
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus0');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus0');
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 4 === 1) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].classList.add("visible");
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus0');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus0');
        cards[num].children[2].classList.remove("invisible");
    } else if (count[num] % 4 === 2) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[0].children[0].classList.add("visible");
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus0', 'plus1');
        cards[num].children[1].children[0].src = cards[num].children[1].children[0].src.replace('plus2', 'plus1');
        cards[num].children[2].classList.remove("invisible");
    } else {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[0].children[0].classList.add("visible");
        cards[num].children[1].clashildren[0].src = cards[num].children[1].children[0].src.replace('plus1', 'plus2');
        cards[num].children[1].clashildren[0].src = cards[num].children[1].children[0].src.replace('plus0', 'plus2');
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
                         $('.member__section__megumi'),];

const titleButtonList = [$('.titleButton__kaho'),
                         $('.titleButton__kozue'),
                         $('.titleButton__sayaka'),
                         $('.titleButton__tsuzuri'),
                         $('.titleButton__rurino'),
                         $('.titleButton__megumi'),];

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