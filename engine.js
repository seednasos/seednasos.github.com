var array = getArray();




var button  = document.getElementById('button'),
	repeat  = document.getElementById('repeat'),
	show  = document.getElementById('show');
var path;

button.onclick = function() {
	path = "\"pronunciation\\" + array[Math.floor(Math.random() * array.length)] + "\"";
	button.innerHTML="random <audio id=\"playSound\" src=" + path +" autoplay ></audio>";
	show.innerHTML="show";
};
repeat.onclick = function() {
	button.innerHTML="random <audio id=\"playSound\" src=" + path +" autoplay ></audio>";
};
show.onclick = function() {
	show.innerHTML = path;
};

















function getArray() {
	return [ '1. How old are you.mp3',
		'1. What’s your name.mp3',
		'10. Where are you going to work in the USA.mp3',
		'11. Where are you going to stay in the US.mp3',
		'11. Where will you housing.mp3',
		'11. Where will you live.mp3',
		'12. How long are you going to stay in the USA.mp3',
		'12. When will you come back to Russia.mp3',
		'13. When will you come back to Russia.mp3',
		'13. When will you leave the US.mp3',
		'14. How did you find this job.mp3',
		'14. What will you do if you have problems with your boss at work in the US.mp3',
		'15. Do you have any experience working in the same position.mp3',
		'16. How much money will you make.mp3',
		'16. What will you do after you come back to Russia.mp3',
		'2. Do you speak English.mp3',
		'2. How well do you speak English.mp3',
		'20. Do you live with your parents.mp3',
		'24. What do your parents think about your participation in the program.mp3',
		'3. You are an exchange student, aren\'t you.mp3',
		'33. What do you think the life in the U.S. will be like.mp3',
		'4. What is the purpose of your visit the US.mp3',
		'4. Why do you want to go to the USA.mp3',
		'46. What are names of your sponsor companies in Russia and in the USA.mp3',
		'48. Would you describe the process of your registration in the program.mp3',
		'5. How have you learnt about this program.mp3',
		'5. Where from did you know about the program.mp3',
		'52. Why do you want to go to this state.mp3',
		'53. Have you ever been charged with anything in Russia or abroad.mp3',
		'6. Why did you decide to participate.mp3',
		'6. Why do you want to take part in a program.mp3',
		'7. When do you plan to fly to the USA.mp3',
		'8. What job are you going to have in the USA.mp3',
		'8. What will be your work.mp3',
		'8. What will you do in America.mp3',
		'8. Where are you going to work in the US.mp3',
		'9. How this experience will help you in your future.mp3' ];
}