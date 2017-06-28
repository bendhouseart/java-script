var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function ceasarEncrypt(plainStr, key) {
	var shiftedArray = [];
	
	 shiftIndex = key%26;
	 firstSlice = alphabet.slice(key, 25);
	 secondSlice = alphabet.slice(0, key);
	 shiftedArray = firstSlice.concat(secondSlice);
	 var myLittleDict = {};
	 for (var i = 0; i < 25; i++){
	 	myLittleDict[shiftedArray[i]] = alphabet[i];
	 	}
	 console.log(alphabet);
	 console.log(shiftedArray);
	 console.log(myLittleDict);
};

ceasarEncrypt("Hail Ceasar", 3);
