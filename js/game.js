let mapGame 					= document.createElement('div');
mapGame.className 				= 'mapGame';

let particleCanvas  			= document.getElementById('particle-canvas');

let myTymerParent 				= document.createElement('p');

let myTimer 					= document.createElement("span");
myTimer.id 						= "myTimer";
myTimer.className 				= "myTimer";
myTimer.innerHTML				= '00:01:00';

let minPointCharQuest			= document.createElement('p')
minPointCharQuest.innerHTML 	= 'Goal:'

let minPointChar 				= document.createElement('p')
minPointChar.innerHTML 			= 10000

let pointCharText 				= document.createElement('p')
pointCharText.innerHTML 		= 'Points:'


let pointChar 					= document.createElement('p')
pointChar.innerHTML 			= 0
pointChar.value 	 			= 0

let pointModalText 				= document.createElement('p')
pointModalText.id 				= 'pointModalText'

let winModal 					= document.createElement('div')
winModal.style.display 			= 'flex'
winModal.style.width 			= 100 + 'vw'
winModal.style.height			= 100 + 'vh'
winModal.style.justifyContent 	= 'center'
winModal.style.alignItems 		= 'center'
winModal.style.backgroundColor  = 'rgba(0,0,0,.9)'
winModal.style.position 		= 'absolute'
winModal.style.zIndex 			= 999999999999999
winModal.style.flexDirection 	= 'column'

let winModalChild 				= document.createElement('div')
winModalChild.id 				= 'winModalChild'

let winModalText 				= document.createElement('p')
winModalText.innerHTML 			= 'YOU WIN!!!'
winModalText.style.color 		= 'white'

let loseModalText 				= document.createElement('p')
loseModalText.innerHTML 		= 'YOU LOSE!!!'
loseModalText.style.color 		= 'white'

let okModalText 				= document.createElement('p')
okModalText.style.color 		= 'black'
okModalText.id 					= 'okModalText'

let btnOk 						= document.createElement('button')
btnOk.innerHTML					= 'Start again'
btnOk.style.fontSize 			= 30 + 'px'
btnOk.style.padding 			= 30 + 'px'




startBtn.onclick = function createGame() {



	// document.body.append(mapGame);

    	let time1 	= document.createElement('p')
    	time1.id 	= 'time1'
    	let time2 	= document.createElement('p')
    	time2.id 	= 'time2'
    	let time3 	= document.createElement('p')
    	time3.id 	= 'time3'
    	let time4 	= document.createElement('p')
    	time4.id 	= 'time4'





    setTimeout(()=>{
    	textOptns.remove()
    	time1.style.fontSize = 40;
    	time1.innerHTML = 1
    	document.body.appendChild(time1)
    	soundClickStartMenu()
    },0)
    setTimeout(()=>{
    	time1.remove()
    	time2.style.fontSize = 40;
    	time2.innerHTML = 2
    	document.body.appendChild(time2)
    	soundClickStartMenu()
    },1000)
    setTimeout(()=>{
    	time2.remove()
    	time3.style.fontSize = 40;
    	time3.innerHTML = 3
    	document.body.appendChild(time3)
    	soundClickStartMenu()
    },2000)
    setTimeout(()=>{
    	time3.remove()
    	time4.style.fontSize = 40;
    	time4.innerHTML = 'GO'
    	document.body.appendChild(time4)
    	soundClickStartMenu()
    },3000)





let game;
let gameOptions = {
    gemSize: 100,
    swapSpeed: 200,
    fallSpeed: 100,
    destroySpeed: 200,
    boardOffset: {
        x: 100,
        y: 50
    }
}
// window.onload = function() {
    setTimeout(()=>{
    	time4.remove()
		particleCanvas.remove()

       let gameConfig = {
        width: 900,
        height: 850,
        scene: playGame,
        backgroundColor: 0xFFFF00
    }
    game = new Phaser.Game(gameConfig);
    window.focus()
    resize();
    window.addEventListener("resize", resize, false); 

    },4000)
    
// }
class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    preload(){
        this.load.spritesheet("gems", "assets/sprites/gems.png", {
            frameWidth: gameOptions.gemSize,
            frameHeight: gameOptions.gemSize
        });
    }
    create(){
        this.match3 = new Match3({
            rows: 8,
            columns: 7,
            items: 6
        });
        this.match3.generateField();
        this.canPick = true;
        this.dragging = false;
        this.drawField();
        this.input.on("pointerdown", this.gemSelect, this);
    }
    drawField(){
        this.poolArray = [];
        for(let i = 0; i < this.match3.getRows(); i ++){
            for(let j = 0; j < this.match3.getColumns(); j ++){
                let gemX = gameOptions.boardOffset.x + gameOptions.gemSize * j + gameOptions.gemSize / 2;
                let gemY = gameOptions.boardOffset.y + gameOptions.gemSize * i + gameOptions.gemSize / 2
                let gem = this.add.sprite(gemX, gemY, "gems", this.match3.valueAt(i, j));
                this.match3.setCustomData(i, j, gem);
            }
        }
    }
    gemSelect(pointer){
        if(this.canPick){
            this.dragging = true;
            let row = Math.floor((pointer.y - gameOptions.boardOffset.y) / gameOptions.gemSize);
            let col = Math.floor((pointer.x - gameOptions.boardOffset.x) / gameOptions.gemSize);
            if(this.match3.validPick(row, col)){
                let selectedGem = this.match3.getSelectedItem();
                if(!selectedGem){
                    this.match3.customDataOf(row, col).setScale(1.2);
                    this.match3.customDataOf(row, col).setDepth(1);
                    this.match3.setSelectedItem(row, col);
                }
                else{
                    if(this.match3.areTheSame(row, col, selectedGem.row, selectedGem.column)){
                        this.match3.customDataOf(row, col).setScale(1);
                        this.match3.deleselectItem();
                    }
                    else{
                        if(this.match3.areNext(row, col, selectedGem.row, selectedGem.column)){
                            this.match3.customDataOf(selectedGem.row, selectedGem.column).setScale(1);
                            this.match3.deleselectItem();
                            this.swapGems(row, col, selectedGem.row, selectedGem.column, true);
                        }
                        else{
                            this.match3.customDataOf(selectedGem.row, selectedGem.column).setScale(1);
                            this.match3.customDataOf(row, col).setScale(1.2);
                            this.match3.setSelectedItem(row, col);
                        }
                    }
                }
            }
        }
    }
    swapGems(row, col, row2, col2, swapBack){
        let movements = this.match3.swapItems(row, col, row2, col2);
        this.swappingGems = 2;
        this.canPick = false;
        movements.forEach(function(movement){
            this.tweens.add({
                targets: this.match3.customDataOf(movement.row, movement.column),
                x: this.match3.customDataOf(movement.row, movement.column).x + gameOptions.gemSize * movement.deltaColumn,
                y: this.match3.customDataOf(movement.row, movement.column).y + gameOptions.gemSize * movement.deltaRow,
                duration: gameOptions.swapSpeed,
                callbackScope: this,
                onComplete: function(){
                    this.swappingGems --;
                    if(this.swappingGems == 0){
                        if(!this.match3.matchInBoard()){
                            if(swapBack){
                                this.swapGems(row, col, row2, col2, false);
                            }
                            else{
                                this.canPick = true;
                            }
                        }
                        else{
                            this.handleMatches();
                        }
                    }
                }
            })
        }.bind(this))
    }
    handleMatches(){
        let gemsToRemove = this.match3.getMatchList();
        let destroyed = 0;
        gemsToRemove.forEach(function(gem){
            this.poolArray.push(this.match3.customDataOf(gem.row, gem.column))
            destroyed ++;
            this.tweens.add({
                targets: this.match3.customDataOf(gem.row, gem.column),
                alpha: 0,
                duration: gameOptions.destroySpeed,
                callbackScope: this,
                onComplete: function(event, sprite){
                	function soundClickMenu() {
					  var btnClick 		= new Audio();
					  btnClick.src 		= 'sound/btnClick.mp3';
					  btnClick.autoplay = true;
					}
					soundClickMenu()
					pointChar.value += 100
					pointChar.innerHTML = pointChar.value

					if (pointChar.value == 5000) {
						document.body.appendChild(winModal)
						winModal.style.backgroundColor = 'rgba(0,0,0,0)'
						winModal.appendChild(okModalText)
						okModalText.innerHTML = '5000!!!'
					  	winModal.style.display = 'flex'
					  	winModal.style.zIndex = 99999
					  	setTimeout(()=>{winModal.remove()},1000)
					} else if (pointChar.value == 9000) {
						document.body.appendChild(winModal)
						winModal.style.backgroundColor = 'rgba(0,0,0,0)'
						winModal.appendChild(okModalText)
						okModalText.innerHTML = '9000!!!'
					  	winModal.style.zIndex = 99999
					  	winModal.style.display = 'flex'
					  	setTimeout(()=>{winModal.remove()},1000)
					}

                    destroyed --;
                    if(destroyed == 0){
                        this.makeGemsFall();

                    }
                }
            });
        }.bind(this));
    }
    makeGemsFall(){
        let moved = 0;
        this.match3.removeMatches();
        let fallingMovements = this.match3.arrangeBoardAfterMatch();
        fallingMovements.forEach(function(movement){
            moved ++;
            this.tweens.add({
                targets: this.match3.customDataOf(movement.row, movement.column),
                y: this.match3.customDataOf(movement.row, movement.column).y + movement.deltaRow * gameOptions.gemSize,
                duration: gameOptions.fallSpeed * Math.abs(movement.deltaRow),
                callbackScope: this,
                onComplete: function(){
                	function soundClickMenu() {
					  var btnClick 		= new Audio();
					  btnClick.src 		= 'sound/bum.mp3';
					  btnClick.autoplay = true;
					}
					soundClickMenu()

                    moved --;
                    if(moved == 0){
                        this.endOfMove()
                    }
                }
            })
        }.bind(this));
        let replenishMovements = this.match3.replenishBoard();
        replenishMovements.forEach(function(movement){
            moved ++;
            let sprite = this.poolArray.pop();
            sprite.alpha = 1;
            sprite.y = gameOptions.boardOffset.y + gameOptions.gemSize * (movement.row - movement.deltaRow + 1) - gameOptions.gemSize / 2;
            sprite.x = gameOptions.boardOffset.x + gameOptions.gemSize * movement.column + gameOptions.gemSize / 2,
            sprite.setFrame(this.match3.valueAt(movement.row, movement.column));
            this.match3.setCustomData(movement.row, movement.column, sprite);
            this.tweens.add({
                targets: sprite,
                y: gameOptions.boardOffset.y + gameOptions.gemSize * movement.row + gameOptions.gemSize / 2,
                duration: gameOptions.fallSpeed * movement.deltaRow,
                callbackScope: this,
                onComplete: function(){
                    moved --;
                    if(moved == 0){
                        this.endOfMove()
                    }
                }
            });
        }.bind(this))
    }
    endOfMove(){
        if(this.match3.matchInBoard()){
            this.time.addEvent({
                delay: 250,
                callback: this.handleMatches()
            });
        }
        else{
            this.canPick = true;
            this.selectedGem = null;
        }
    }
}

class Match3{

    // constructor, simply turns obj information into class properties
    constructor(obj){
        this.rows = obj.rows;
        this.columns = obj.columns;
        this.items = obj.items;
    }

    // generates the game field
    generateField(){
        this.gameArray = [];
        this.selectedItem = false;
        for(let i = 0; i < this.rows; i ++){
            this.gameArray[i] = [];
            for(let j = 0; j < this.columns; j ++){
                do{
                    let randomValue = Math.floor(Math.random() * this.items);
                    this.gameArray[i][j] = {
                        value: randomValue,
                        isEmpty: false,
                        row: i,
                        column: j
                    }
                } while(this.isPartOfMatch(i, j));
            }
        }
    }

    // returns true if there is a match in the board
    matchInBoard(){
        for(let i = 0; i < this.rows; i ++){
            for(let j = 0; j < this.columns; j ++){
                if(this.isPartOfMatch(i, j)){
                    return true;
                }
            }
        }
        return false;
    }

    // returns true if the item at (row, column) is part of a match
    isPartOfMatch(row, column){
        return this.isPartOfHorizontalMatch(row, column) || this.isPartOfVerticalMatch(row, column);
    }

    // returns true if the item at (row, column) is part of an horizontal match
    isPartOfHorizontalMatch(row, column){
        return this.valueAt(row, column) === this.valueAt(row, column - 1) && this.valueAt(row, column) === this.valueAt(row, column - 2) ||
                this.valueAt(row, column) === this.valueAt(row, column + 1) && this.valueAt(row, column) === this.valueAt(row, column + 2) ||
                this.valueAt(row, column) === this.valueAt(row, column - 1) && this.valueAt(row, column) === this.valueAt(row, column + 1);
    }

    // returns true if the item at (row, column) is part of an horizontal match
    isPartOfVerticalMatch(row, column){
        return this.valueAt(row, column) === this.valueAt(row - 1, column) && this.valueAt(row, column) === this.valueAt(row - 2, column) ||
                this.valueAt(row, column) === this.valueAt(row + 1, column) && this.valueAt(row, column) === this.valueAt(row + 2, column) ||
                this.valueAt(row, column) === this.valueAt(row - 1, column) && this.valueAt(row, column) === this.valueAt(row + 1, column)
    }

    // returns the value of the item at (row, column), or false if it's not a valid pick
    valueAt(row, column){
        if(!this.validPick(row, column)){
            return false;
        }
        return this.gameArray[row][column].value;
    }

    // returns true if the item at (row, column) is a valid pick
    validPick(row, column){
        return row >= 0 && row < this.rows && column >= 0 && column < this.columns && this.gameArray[row] != undefined && this.gameArray[row][column] != undefined;
    }

    // returns the number of board rows
    getRows(){
        return this.rows;
    }

    // returns the number of board columns
    getColumns(){
        return this.columns;
    }

    // sets a custom data on the item at (row, column)
    setCustomData(row, column, customData){
        this.gameArray[row][column].customData = customData;
    }

    // returns the custom data of the item at (row, column)
    customDataOf(row, column){
        return this.gameArray[row][column].customData;
    }

    // returns the selected item
    getSelectedItem(){
        return this.selectedItem;
    }

    // set the selected item as a {row, column} object
    setSelectedItem(row, column){
        this.selectedItem = {
            row: row,
            column: column
        }
    }

    // deleselects any item
    deleselectItem(){
        this.selectedItem = false;
    }

    // checks if the item at (row, column) is the same as the item at (row2, column2)
    areTheSame(row, column, row2, column2){
        return row == row2 && column == column2;
    }

    // returns true if two items at (row, column) and (row2, column2) are next to each other horizontally or vertically
    areNext(row, column, row2, column2){
        return Math.abs(row - row2) + Math.abs(column - column2) == 1;
    }

    // swap the items at (row, column) and (row2, column2) and returns an object with movement information
    swapItems(row, column, row2, column2){
        let tempObject = Object.assign(this.gameArray[row][column]);
        this.gameArray[row][column] = Object.assign(this.gameArray[row2][column2]);
        this.gameArray[row2][column2] = Object.assign(tempObject);
        return [{
            row: row,
            column: column,
            deltaRow: row - row2,
            deltaColumn: column - column2
        },
        {
            row: row2,
            column: column2,
            deltaRow: row2 - row,
            deltaColumn: column2 - column
        }]
    }

    // return the items part of a match in the board as an array of {row, column} object
    getMatchList(){
        let matches = [];
        for(let i = 0; i < this.rows; i ++){
            for(let j = 0; j < this.columns; j ++){
                if(this.isPartOfMatch(i, j)){
                    matches.push({
                        row: i,
                        column: j
                    });
                }
            }
        }
        return matches;
    }

    // removes all items forming a match
    removeMatches(){
        let matches = this.getMatchList();
        matches.forEach(function(item){
            this.setEmpty(item.row, item.column)
        }.bind(this))
    }

    // set the item at (row, column) as empty
    setEmpty(row, column){
        this.gameArray[row][column].isEmpty = true;
    }

    // returns true if the item at (row, column) is empty
    isEmpty(row, column){
        return this.gameArray[row][column].isEmpty;
    }

    // returns the amount of empty spaces below the item at (row, column)
    emptySpacesBelow(row, column){
        let result = 0;
        if(row != this.getRows()){
            for(let i = row + 1; i < this.getRows(); i ++){
                if(this.isEmpty(i, column)){
                    result ++;
                }
            }
        }
        return result;
    }

    // arranges the board after a match, making items fall down. Returns an object with movement information
    arrangeBoardAfterMatch(){
        let result = []
        for(let i = this.getRows() - 2; i >= 0; i --){
            for(let j = 0; j < this.getColumns(); j ++){
                let emptySpaces = this.emptySpacesBelow(i, j);
                if(!this.isEmpty(i, j) && emptySpaces > 0){
                    this.swapItems(i, j, i + emptySpaces, j)
                    result.push({
                        row: i + emptySpaces,
                        column: j,
                        deltaRow: emptySpaces,
                        deltaColumn: 0
                    });
                }
            }
        }
        return result;
    }

    // replenished the board and returns an object with movement information
    replenishBoard(){
        let result = [];
        for(let i = 0; i < this.getColumns(); i ++){
            if(this.isEmpty(0, i)){
                let emptySpaces = this.emptySpacesBelow(0, i) + 1;
                for(let j = 0; j < emptySpaces; j ++){
                    let randomValue = Math.floor(Math.random() * this.items);
                    result.push({
                        row: j,
                        column: i,
                        deltaRow: emptySpaces,
                        deltaColumn: 0
                    });
                    this.gameArray[j][i].value = randomValue;
                    this.gameArray[j][i].isEmpty = false;
                }
            }
        }
        return result;
    }
}

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
        canvas.style.zIndex = 90

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";

    }
}

	optnsBtn.remove();
	startBtn.remove();
	soundClickStartMenu();
	langBtnRu.remove();
	langBtnEn.remove();
	setTimeout(()=>{startTimer()},5000)
}


function startTimer() {
	let time = myTimer.innerHTML;
	let arr  = time.split(":");
	let h 	 = arr[0];
	let m 	 = arr[1];
	let s 	 = arr[2];

	if (s == 0) {
	  if (m == 0) {
	    if (h == 0) {
	      if (pointChar.value >= 10000) {
		      	function soundWin() {
				  var win 		 	 = new Audio();
				  win.src 		 	 = 'sound/win.mp3';
				  win.autoplay 	 	 = true;
				}
				soundWin()
				document.body.appendChild(winModal)
		  		winModal.style.backgroundColor = 'rgba(0,0,0,.95)'
	      		winModal.appendChild(winModalChild)
	      		winModalChild.appendChild(winModalText)
	      		winModalChild.appendChild(pointModalText)
	      		pointModalText.innerHTML = pointChar.value + '/10000'
	      		winModalChild.appendChild(btnOk)
			  	winModal.style.display = 'flex'
		  } else {
			  	function soundLose() {
					  var lose 		 = new Audio();
					  lose.src 		 = 'sound/lose.mp3';
					  lose.autoplay  = true;
				}
				soundLose()
		  		document.body.appendChild(winModal)
		  		winModal.appendChild(winModalChild)
		  		winModal.style.backgroundColor = 'rgba(0,0,0,.95)'
	      		winModalChild.appendChild(loseModalText)
	      		winModalChild.appendChild(pointModalText)
	      		pointModalText.innerHTML = pointChar.value + '/10000'
	      		winModalChild.appendChild(btnOk)
			  	winModal.style.display = 'flex'
		  }
		  btnOk.onclick = () => {
		  	window.location.reload();
	      	return;
		  }
	    }
	    h--;
	    m = 60;
	    if (h < 10) h = "0" + h;
	  }
	  m--;
	  if (m < 10) m = "0" + m;
	  s = 59;
	}
	else s--;
	if (s < 10) s = "0" + s;
	myTimer.innerHTML = h+":"+m+":"+s;
	setTimeout(startTimer, 1000);

	myTymerParent.style.zIndex = 5;
	myTymerParent.style.width = 100 + '%'
	document.body.append(myTymerParent);
	myTymerParent.appendChild(myTimer);
	myTymerParent.appendChild(minPointCharQuest);
	myTymerParent.appendChild(minPointChar);
	myTymerParent.appendChild(pointCharText);
	myTymerParent.appendChild(pointChar);
}