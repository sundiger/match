let startBtn 				= document.createElement('button');
startBtn.className 			= 'startBtn';
startBtn.innerHTML			= 'START';

let optnsBtn 				= document.createElement('button');
optnsBtn.className 			= 'optnsBtn';
optnsBtn.innerHTML			= 'OPTIONS';

let backBtn 				= document.createElement('button');
backBtn.className 			= 'backBtn';
backBtn.innerHTML			= 'BACK';

let textOptns				= document.createElement('h1'); 
textOptns.innerHTML 		= 'Level: medium';

let optnsBtnEaseLvl		  	= document.createElement('button');
optnsBtnEaseLvl.className 	= 'optnsBtnEaseLvl';
optnsBtnEaseLvl.innerHTML 	= 'EASE';
optnsBtnEaseLvl.created		= true;

let optnsBtnMedLvl		  	= document.createElement('button');
optnsBtnMedLvl.className 	= 'optnsBtnMedLvl';
optnsBtnMedLvl.innerHTML 	= 'MEDIUM';
optnsBtnMedLvl.created		= true;

let optnsBtnHardLvl		  	= document.createElement('button');
optnsBtnHardLvl.className 	= 'optnsBtnHardLvl';
optnsBtnHardLvl.innerHTML 	= 'HARD';
optnsBtnHardLvl.created		= true;

let optnsBtnMusic			= document.createElement('button')
optnsBtnMusic.innerHTML		= '♪'

let optnsBtnMusicOn			= document.createElement('button')
optnsBtnMusicOn.innerHTML	= '♫'

let langBtnRu				= document.createElement('button');
langBtnRu.className			= 'langBtnRu';
langBtnRu.innerHTML			= 'РУССКИЙ';

let langBtnEn				= document.createElement('button');
langBtnEn.className			= 'langBtnEn';
langBtnEn.innerHTML			= 'ENGLISH';

let canvasBack				= document.getElementById('back');


document.body.append(startBtn);
document.body.append(optnsBtn);
document.body.append(textOptns);
document.body.append(langBtnRu);
document.body.append(langBtnEn);

optnsBtn.onclick = function optnsBtnClick() {
	document.body.append(backBtn);
	document.body.append(textOptns);
	document.body.append(optnsBtnEaseLvl);
	document.body.append(optnsBtnMedLvl);
	document.body.append(optnsBtnHardLvl);
	document.body.append(optnsBtnMusic);
	optnsBtn.remove();
	startBtn.remove();
	langBtnRu.remove();
	langBtnEn.remove();
	soundClickMenu();
}

backBtn.onclick = function backBtnClick() {
	backBtn.remove();
	optnsBtnMedLvl.remove();
	optnsBtnEaseLvl.remove();
	optnsBtnHardLvl.remove();
	optnsBtnMusic.remove();
	optnsBtnMusicOn.remove();

	document.body.append(startBtn);
	document.body.append(optnsBtn);
	document.body.append(textOptns);
	document.body.append(langBtnRu);
	document.body.append(langBtnEn);
	soundClickMenu();
}

  let backgroundMenu 				= new Audio();
  backgroundMenu.src 				= 'sound/backgroundMenu.mp3';
  backgroundMenu.autoplay 			= false;

optnsBtnMusic.onclick = () => {
	backgroundMenu.play()
	optnsBtnMusic.remove()
	document.body.append(optnsBtnMusicOn);
	optnsBtnMusicOn.innerHTML = '♫'
}

optnsBtnMusicOn.onclick = () => {
	backgroundMenu.pause()
	document.body.append(optnsBtnMusic);
	optnsBtnMusicOn.remove()
	optnsBtnMusic.innerHTML = '♪'

}

langBtnRu.onclick = function langBtnRuClick() {
	if (startBtn.innerHTML			=== 'START'  	   			  )  {startBtn.innerHTML 		 = 'СТАРТ'  				   };
	if (optnsBtn.innerHTML 			=== 'OPTIONS'	   			  )  {optnsBtn.innerHTML 		 = 'ОПЦИИ'  				   };
	if (backBtn.innerHTML 			=== 'BACK'   	   			  )  {backBtn.innerHTML 		 = 'НАЗАД'  				   };
	if (textOptns.innerHTML 		=== 'Level: ease'  			  )  {textOptns.innerHTML 	  	 = 'Уровень сложности: легкий' };
	if (textOptns.innerHTML 		=== 'Level: medium'			  )  {textOptns.innerHTML 	  	 = 'Уровень сложности: средний'};
	if (textOptns.innerHTML 		=== 'Level: hard'  			  )  {textOptns.innerHTML 	  	 = 'Уровень сложности: тяжелый'};
	if (optnsBtnEaseLvl.innerHTML 	=== 'EASE'   	   			  )  {optnsBtnEaseLvl.innerHTML  = 'ЛЕГКИЙ' 				   };
	if (optnsBtnMedLvl.innerHTML 	=== 'MEDIUM'       			  )  {optnsBtnMedLvl.innerHTML   = 'СРЕДНИЙ'				   };
	if (optnsBtnHardLvl.innerHTML 	=== 'HARD'   	   			  )  {optnsBtnHardLvl.innerHTML  = 'ТЯЖЕЛЫЙ'				   };
	if (winModalText.innerHTML 		=== 'YOU WIN!!!'   	   	   	  )  {winModalText.innerHTML 	 = 'ПОБЕДИТЕЛЬ!!!'		   	   };
	if (loseModalText.innerHTML 	=== 'YOU LOSE!!!'   	   	  )  {loseModalText.innerHTML 	 = 'ПРОИГРАЛ!!!'		   	   };
	if (minPointCharQuest.innerHTML === 'Goal:'   	   	  		  )  {minPointCharQuest.innerHTML= 'Цель:'		   	   	   	   };
	if (btnOk.innerHTML				=== 'Start again'   	   	  )  {btnOk.innerHTML			 = 'Начать заново'   	   	   };
	if (pointCharText.innerHTML		=== 'Points:'   	   	  	  )  {pointCharText.innerHTML	 = 'Очки:'   	   	   		   };

	soundClickMenu();
}

langBtnEn.onclick = function langBtnEnClick() {
	if (startBtn.innerHTML 		   === 'СТАРТ'					   ) {startBtn.innerHTML		 = 'START'		 			   };
	if (optnsBtn.innerHTML 		   === 'ОПЦИИ'					   ) {optnsBtn.innerHTML 		 = 'OPTIONS'		 		   };
	if (backBtn.innerHTML 		   === 'НАЗАД'					   ) {backBtn.innerHTML 		 = 'BACK'		 			   };
	if (textOptns.innerHTML 	   === 'Уровень сложности: легкий' ) {textOptns.innerHTML 		 = 'Level: ease'  			   };
	if (textOptns.innerHTML 	   === 'Уровень сложности: средний') {textOptns.innerHTML 		 = 'Level: medium'			   };
	if (textOptns.innerHTML 	   === 'Уровень сложности: тяжелый') {textOptns.innerHTML 		 = 'Level: hard'	 		   };
	if (optnsBtnEaseLvl.innerHTML  === 'ЛЕГКИЙ' 				   ) {optnsBtnEaseLvl.innerHTML  = 'EASE'		 			   };
	if (optnsBtnMedLvl.innerHTML   === 'СРЕДНИЙ'				   ) {optnsBtnMedLvl.innerHTML 	 = 'MEDIUM'		 			   };
	if (optnsBtnHardLvl.innerHTML  === 'ТЯЖЕЛЫЙ'				   ) {optnsBtnHardLvl.innerHTML  = 'HARD'		 			   };
	if (winModalText.innerHTML 	   === 'ПОБЕДИТЕЛЬ!!!'   	   	   ) {winModalText.innerHTML 	 = 'YOU WIN!!!'		   	   	   };
	if (loseModalText.innerHTML    === 'ПРОИГРАЛ!!!'   	   	  	   ) {loseModalText.innerHTML 	 = 'YOU LOSE!!!'			   };
	if (minPointCharQuest.innerHTML=== 'Цель:'   	   	  		   ) {minPointCharQuest.innerHTML= 'Goal:'		   	   	   	   };
	if (btnOk.innerHTML			   === 'Начать заново'   	   	   ) {btnOk.innerHTML			 = 'Start again'   	   	   	   };
	if (pointCharText.innerHTML	   === 'Очки:'   	   	  	  	   ) {pointCharText.innerHTML	 = 'Points:'   	   	   		   };

	soundClickMenu();
}




function soundClickMenu() {
  var btnClick 						= new Audio();
  btnClick.src 						= 'sound/btnClick.mp3';
  btnClick.autoplay 				= true;
}

function soundClickStartMenu() {
  var btnClickStart 				= new Audio();
  btnClickStart.src 				= 'sound/btnClickStart.mp3';
  btnClickStart.autoplay 			= true;
}

function soundClickHardLvl() {
  var btnClickStart 				= new Audio();
  btnClickStart.src 				= 'sound/hard.mp3';
  btnClickStart.autoplay 			= true;
}

optnsBtnEaseLvl.onclick = function addLvlEase() {
	myTimer.innerHTML 				= '00:01:30';
	soundClickMenu();
	canvasBack.style.background 	= 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)';
	canvasBack.style.animation  	= 'medBackgroundStandart .2s ease';
	
	if (optnsBtnEaseLvl.innerHTML === 'ЛЕГКИЙ')	{textOptns.innerHTML = 'Уровень сложности: легкий'};
	if (optnsBtnEaseLvl.innerHTML === 'EASE'  ) {textOptns.innerHTML = 'Level: ease'		  	  };
}


optnsBtnMedLvl.onclick  = function addLvlMed() {
	myTimer.innerHTML   			= '00:01:00';
	canvasBack.style.background 	= 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)';
	canvasBack.style.animation  	= 'medBackgroundStandart .2s ease';

	if (optnsBtnMedLvl.innerHTML  === 'СРЕДНИЙ') {textOptns.innerHTML = 'Уровень сложности: средний'};
	if (optnsBtnMedLvl.innerHTML  === 'MEDIUM' ) {textOptns.innerHTML = 'Level: medium'			    };

	textOptns.style.textShadow 	   = 'none';
	myTimer.style.textShadow	   = 'none';

	soundClickMenu();
}


optnsBtnHardLvl.onclick = function addLvlHard() {
	myTimer.innerHTML				= '00:00:45';
	canvasBack.style.animation  	= 'hardBackground .2s ease';
	canvasBack.style.background 	= 'linear-gradient(rgba(255,65,65,1) 0%, rgba(0,0,0,.9) 100%)';

	if (optnsBtnHardLvl.innerHTML === 'ТЯЖЕЛЫЙ'){textOptns.innerHTML = 'Уровень сложности: тяжелый'};
	if (optnsBtnHardLvl.innerHTML === 'HARD'   ){textOptns.innerHTML = 'Level: hard'			   };

	textOptns.style.textShadow 		= '2px 2px 2px white';
	myTimer.style.textShadow 		= '2px 2px 2px white';
	soundClickHardLvl();
}

//BONUS
document.addEventListener('keyup', function(event) {
  if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
	let btnBonus = document.createElement('button');
	btnBonus.id = 'btnBonus';
	btnBonus.className = 'btnBonus';
	btnBonus.innerHTML = '<a href="http://sundiger.ru">Anisenko Alexey</a>';
	btnBonus.style.zIndex = 9999
	document.body.append(btnBonus);
	soundClickMenu();
  }

  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
	btnBonus.remove()
	soundClickMenu();
  }
});