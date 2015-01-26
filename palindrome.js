//Eric Heinzman
//CMP344
//1/26/15
//Program that will take a string and determine if it is a palindrome


   function isP(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}

	var rword = "";
	while (s.length() > 0){
		rword += s.pop();
	}

	if (word == rword) {
		return true;
	}
	else {
	return false;
	}
}
	var word = "hello";
	if (isP(word)) {
		print(word + " is a palindrome.");
	}
	else {
		print(word + " is not a palindrome.");
	}
	var word = "racecar"
	if (isP(word)){
		print(word + " is a palindrome.");
	}
	else {
		print(word + " is not a palindrome.");
}
