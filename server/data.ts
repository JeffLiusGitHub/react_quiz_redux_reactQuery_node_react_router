type quizDataType = {
	id: Number;
	question: string;
	A: string;
	B: string;
	C: string;
	D: string;
	answer: string;
	end: boolean;
};

const data: quizDataType[] = [
	{
		id: 1,
		question:
			'What is the equation of a line with slope 2 and y-intercept of -3?',
		A: 'y = 2x + 3',
		B: 'y = 2x - 3',
		C: 'y = -2x + 3',
		D: 'y = -2x - 3',
		answer: 'B',
		end: false,
	},

	{
		id: 2,
		question: 'Which of the following is not an identity property of addition?',
		A: 'Commutative Property',
		B: 'Associative Property',
		C: 'Identity Property',
		D: 'Inverse Property',
		answer: 'D',
		end: false,
	},

	{
		id: 3,
		question: 'What is the midpoint formula used for?',
		A: 'To find the slope of a line',
		B: 'To find the y-intercept of a line',
		C: 'To find the x-intercept of a line',
		D: 'To find the center point between two points',
		answer: 'D',
		end: false,
	},

	{
		id: 4,
		question:
			'What is the equation for the circle with center (3,4) and radius of 5?',
		A: '(x - 3)^2 + (y - 4)^2 = 25',
		B: '(x - 3)^2 + (y + 4)^2 = 25',
		C: '(x + 3)^2 + (y - 4)^2 = 25',
		D: '(x + 3)^2 + (y + 4)^2 = 25',
		answer: 'A',
		end: false,
	},

	{
		id: 5,
		question:
			'What is the equation of the line perpendicular to y = 3x + 2 and passing through the point (4,5)?',
		A: 'y = -3x + 13',
		B: 'y = -1/3x + 5',
		C: 'y = 1/3x + 7',
		D: 'y = 3x - 13',
		answer: 'B',
		end: true,
	},
];
export default data;
