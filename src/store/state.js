export default {
      progressCounter: 1,
      progressSteps: ["Type","Step 2","Step 3"],
      showProfessorModal: false,
      showCourseModal: false,
      isAutomated: false,
      isManual: false,
      cycle: null,
      user: JSON.parse(localStorage.getItem("loggedUser")),
      isLoggedIn: false,
      postSubscription: null,
      isLoggingIn: true,
      currentUser: localStorage.getItem("currentUser"),
      courses: [
        {
          name: "Engineering Mathematics-IV",
          code: "CS41",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "three",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "six",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "eight",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four",
        },
      ],
      professors: [
        {
          name: "Dr. Anita Kanavalli",
          designation: "Head of Department",
          gender: "female",
        },
        { name: "Dr. S Ramani", designation: "Professor", gender: "male" },
        {
          name: "Bhushan A. Matad",
          designation: "Associate Professor",
          gender: "male",
        },
        {
          name: "Dr. Annapurna P. Patil",
          designation: "Professor",
          gender: "other",
        },
        { name: "Dr. S. Seema", designation: "Professor", gender: "female" },
        {
          name: "Dr. Monica R. Mundada",
          designation: "Professor",
          gender: "female",
        },
        {
          name: "Dr. Anita Kanavalli",
          designation: "Head of Department",
          gender: "female",
        },
        { name: "Dr. S Ramani", designation: "Professor", gender: "male" },
        {
          name: "Bhushan A. Matad",
          designation: "Associate Professor",
          gender: "male",
        },
        {
          name: "Dr. Annapurna P. Patil",
          designation: "Professor",
          gender: "female",
        },
        { name: "Dr. S. Seema", designation: "Professor", gender: "female" },
        {
          name: "Dr. Monica R. Mundada",
          designation: "Professor",
          gender: "female",
        },
        {
          name: "Dr. Anita Kanavalli",
          designation: "Head of Department",
          gender: "female",
        },
        { name: "Dr. S Ramani", designation: "Professor", gender: "male" },
        {
          name: "Bhushan A. Matad",
          designation: "Associate Professor",
          gender: "male",
        },
        {
          name: "Dr. Annapurna P. Patil",
          designation: "Professor",
          gender: "female",
        },
        { name: "Dr. S. Seema", designation: "Professor", gender: "female" },
        {
          name: "Dr. Monica R. Mundada",
          designation: "Professor",
          gender: "female",
        },
      ],
      tempProfessors: [
        "Srinidhi H",
        "Aparna",
        "Sowmya BJ",
        "Mallegowda",
        "Mohana Kumar",
        "Anitha Kannavali",
        "Hanumanth Raju",
        "Pramod Sunagar",
      ],
      tempCourses: [
        {
          name: "Engineering Mathematics-IV",
          code: "CS41",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "three",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "six",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "eight",
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Lab",
          semester: "four",
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Lab",
          semester: "four",
        },
      ]
};