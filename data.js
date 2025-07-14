   // data.js

const studentsDB = [
    { id: '110725', name: 'លី ស្រីនាង', enrolledCourses: [{ courseId: 3  }] },
    { id: '120725', name: 'វឿន សៃហ៊ាក់', enrolledCourses: [{ courseId: 3}] },
    // បន្ថែមសិស្សថ្មីនៅទីនេះ
	{ id: '113725', name: 'សូ ចន្ថា', enrolledCourses: [{ courseId: 3}] },
    { id: '112233', name: 'កែវ សុវណ្ណបូមី', enrolledCourses: [{ courseId: 2 }] } // សន្មតថាគាត់បានចុះឈ្មោះរៀនវគ្គដែលគាត់មានវិញ្ញាបនបត្រ
];

const verifiedCertsDB = [
    { studentName: 'កែវ សុវណ្ណបូរមី', courseName: 'វេយ្យាករណ៍ និងតែងសេចក្ដី', completionDate: '2025-06-15', verificationCode: 'MBP-06-2025' },
	{ studentName: 'កែវ សុវណ្ណ<strong>បូមី</strong>', courseName: 'វេយ្យាករណ៍ និងតែងសេចក្ដី', completionDate: '2025-06-15', verificationCode: 'MBP-07-2025' }
];
