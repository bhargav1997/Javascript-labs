//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = onPageLoad;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function onPageLoad() {
	// alert('hey')
	//GET DOM ELEMENTS WE'LL NEED
	const mysteryBox = document.getElementById('mysteryBox');
	const buttonBox = document.getElementById('buttonBox');
	//====CREATE THE FUNCTIONS WE'LL NEED====

	//FUNCTION TO ASK USER
	function misteryBoxPopup(){
		let userPermision = confirm("Do you want to see something?");

		if(userPermision === true) {
			mysteryBox.style.display = 'none';
			buttonBox.style.display = 'block';
		}
	}


	//FUNCTION TO CHANGE buttonBox
	function mistryBoxClicker() {
		buttonBox.style.width = '600px';
		buttonBox.style.background = 'orange';
		buttonBox.innerHTML = '<h2>SURPRISE!!</h2>';
	}

	//SETUP LISTENERS
	mysteryBox.onmouseover = misteryBoxPopup;
	buttonBox.onclick = mistryBoxClicker;
}
//END onload FUNCTION
