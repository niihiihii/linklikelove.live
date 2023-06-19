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
const db = firebase.firestore();
for (let i = 0; i < cardList.length; i++) {
    db.collection(cardList[i]).get().then((card)=>{
        card.forEach((doc)=>{
            let card_section = 
            `<div class="card ${doc.data().cardType}">
                <div class="card__icon">
                    <img class="cardimg" src=${doc.data().cardImg}>
                </div>
                <div class="overlay invisible">
                    <img class="cardimg animation" src=${doc.data().overlay}>
                </div>
                <div class=${doc.data().overlay__style}></div>
            </div>`;
            $(`.${doc.data().append} > .insert__before`).before(card_section);
        });
        cardNodeList.push($('.' + cardList[i]));
        cardData.push([]);
        for (let j = 0; j < cardNodeList[i].length; j++) {  
            cardData[i].push(0);
            cardNodeList[i][j].addEventListener("click", () => changeCard(cardNodeList[i], cardData[i] , j));
        }
    })
}


function displayCard(cards, count, num) {
    if (count[num] % 4 === 0) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.remove("invisible");
    } else if (count[num] % 4 === 1) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.add("invisible");
    } else if (count[num] % 4 === 2) {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[1].classList.add("invisible");
        cards[num].children[2].classList.add("invisible");
    } else {
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('_idolized.png', '.png');
        cards[num].children[0].children[0].src = cards[num].children[0].children[0].src.replace('.png', '_idolized.png');
        cards[num].children[1].classList.remove("invisible");
        cards[num].children[2].classList.add("invisible");
    }
}
function changeCard(cards, count, num) {
    count[num]++;
    displayCard(cards, count, num);
}





/* Save Image Button */
function downImg(){
    const checkerboard = document.querySelector(".checkerboard");
	html2canvas(checkerboard,{ backgroundColor: "#180134", scale: 1920/checkerboard.offsetWidth, logging: true, letterRendering: 1, allowTaint: false,  useCORS: true }).then(function(canvas){
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