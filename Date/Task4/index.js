// let's filter the students according to their birthdates

const studentsBirthDays = (students) => {
	const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

	const monthBirthSorted = [...students]
		.sort(
			(studentPrev, studentNext) =>
				new Date(studentPrev.birthDate).getMonth() -
					new Date(studentNext.birthDate).getMonth() ||
				new Date(studentPrev.birthDate).getDate() -
					new Date(studentNext.birthDate).getDate()
		)

		.reduce((obj, item) => {
			item.birthDate = formatter.format(new Date(item.birthDate));

			obj[item.birthDate] = obj[item.birthDate] || [];
			obj[item.birthDate].push(item.name);
			return obj;
		}, {});

	return monthBirthSorted;
};

const studentsGiven = [
	{
		name: 'Tom',
		birthDate: '01/15/2010',
	},
	{
		name: 'Ben',
		birthDate: '01/17/2008',
	},
	{
		name: 'Sam',
		birthDate: '03/15/2010',
	},
];

console.log(studentsBirthDays(studentsGiven));
