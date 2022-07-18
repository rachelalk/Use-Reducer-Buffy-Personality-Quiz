//ONLY once you get your functionality sorted, change the sample text below to make your own questions and answers.

//a - Giles
//b - Buffy
//c - Willow
//d - Xander
export const questionData = [
	{
		questionText: "What is your weapon of choice?",
		choices: [
			"Ancient relics",
			"Weapons? I am the weapon!",
			"Magic",
			"Whatever is within grabbing distance!",
		],
	},
	{
		questionText: "What do you do to relax?",
		choices: [
			"Read a book",
			"Working out",
			"Quiet night in with friends",
			"Party!",
		],
	},
	{
		questionText: "A friend needs help, what do you do?",
		choices: [
			"Come up with a solution before acting.",
			"Jump stright in!",
			"I'm here to listen.",
			"I'll try my best but if there is somebody else around they might be better.",
		],
	},
	{
		questionText: "You have an important test coming up, what do you do?",
		choices: [
			"Library!",
			"Exam! What exam? I'll study the night before if I have time.",
			"Share notes and study with friends.",
			"Don't worry about it. *shrug*",
		],
	},
	{
		questionText: "Ideal job?",
		choices: [
			"Something in retail",
			"Fast food",
			"Something quiet",
			"Anything that I can get my hands dirty with",
		],
	},
].map(({ questionText, choices }, questionId) => {
	// Safe to use array index as ID here (and for React key later) as it's stable and unique.
	// Even if the array gets shuffled, each question object will still contain the ID it started off with.
	return {
		questionId,
		questionText,
		choices: choices.map((choiceText, i) => {
			const choiceId = "abcd"[i];
			return {
				choiceText,
				choiceId,
			};
		}),
	};
});
