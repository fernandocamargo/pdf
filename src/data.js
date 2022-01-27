export default () => ({
  interview: {
    categories: [
      {
        dimensions: [
          {
            dimensions: [
              {
                description: `As we consider technical communication key for working in an IT team, we assess how well the candidate understands the challenge, how he explains his thinking and approach to solving the problem, but also how he communicates issues and mitigation strategies.`,
                score: 6,
                title: 'Communication',
              },
              {
                description: `We check whether the candidate sets up the code having later testing in mind, if side effects/ edge cases are being addressed and if the workflow is covered with tests.`,
                score: 1,
                title: 'Testing',
              },
              {
                description: `We observe if the candidate implements a solution having the design in mind, whether the code is clean and concise and — if needed — how he approaches debugging.`,
                score: 5,
                title: 'Technology',
              },
              {
                description: `We assess if the found solution works as it should, the speed of the development and the logic applied. Also, we discuss if the candidate can think of alternative solutions to the approach he chose.`,
                score: 5,
                title: 'Solution',
              },
            ],
            description: `A decisive part of our technical assessment is the pair coding session. By being encouraged to think out loud and ask detailed questions to one of our senior developers throughout the exercise, the candidate is provided with a challenging but fair and enjoyable experience. This also allows us to get a practical impression of the candidate’s knowledge discussed during the Q&A session.`,
            score: 4,
            title: 'Live Coding Challenge',
          },
        ],
        title: 'Live Coding Session',
      },
      {
        dimensions: [
          {
            dimensions: [
              {
                description: `We challenge the theoretical background by discussing a variety of topics such as functions and their differences, modules, standards, typical use cases of the language but also limitations and common pitfalls that are widely associated with it.`,
                score: 4,
                title: 'C/C++',
              },
            ],
            description: `During this part of the discussion, we assess the depth of the candidate’s understanding of the respective programming language and framework as well as his practical experience with it. Hereby we cover best practices and the usage of package managers as well as drawbacks and limitations when working with the respective language and framework.`,
            score: 4,
            title: 'Languages & Frameworks',
          },
          {
            dimensions: [
              {
                description: `We evaluate the theoretical knowledge of the candidate; the basic concepts of time and space complexity and design strategies and analysis of elementary data structures. Test might cover analyzing an algorithm based on graphs, divide and conquer, greedy approach to algorithm design, and dynamic programming. In addition, tests also cover the understanding of NP and computational intractability.`,
                score: 7,
                title: 'Algorithms',
              },
              {
                description: `We want to understand if the candidate is familiar with the theory behind computational complexity. On top, we assess if the candidate can apply these theories to a given problem.`,
                score: 8,
                title: 'Computational Complexity Theory',
              },
            ],
            description: `As we deem the theoretical fundamentals of computer science crucial for a software engineer to have in order to deliver scalable and maintainable solutions, we cover the candidate’s understanding of programming paradigms and how they are supported by the respective language.`,
            score: 7,
            title: 'Computer Science',
          },
          {
            dimensions: [
              {
                description: `Among others, we challenge the candidate’s deep understanding of and experience with architecture, structure, (anti-)patterns, different technologies, testing methods, architectural patterns, and common pitfalls and mitigation strategies when scaling an application.`,
                score: 5,
                title: 'Architecture',
              },
              {
                description: `Here we try to understand how familiar the candidate is with software engineering, best practices and the issues these can prevent from arising if applied correctly.`,
                score: 6,
                title: 'Best Practices',
              },
              {
                description: `We assess how familiar the candidate is with design patterns, for example the MVC pattern.`,
                score: 5,
                title: 'Design Patterns',
              },
              {
                description: `We try to understand how familiar the candidate is with multi-threading and concurrent programming conceptually and practically in order to assess the candidate’s experience in this aspect.`,
                score: 4,
                title: 'Multi-Threading & Concurrency',
              },
              {
                description: `We challenge the candidate’s understanding and experience with OOP, elaborating on different forms of OOP and the advantages and disadvantages if the paradigm is followed.`,
                score: 6,
                title: 'OOP',
              },
              {
                description: `We assess the candidate's knowledge on programming language concepts such as garbage collection, profilers and programming paradigms.`,
                score: 4,
                title: 'Programming Language Concepts',
              },
              {
                description: `During this part of the interview, the candidate's theoretical understanding of known testing methodologies, and their approach is assessed. Also their familiarity with known and accepted best practices in the field of testing will be addressed in this part of the interview.`,
                score: 6,
                title: 'Testing',
              },
            ],
            description: `We assess the candidate’s understanding of key software engineering principles and design patterns as well as appraise their practical experience in those topics. In addition to hands-on experience we deem theoterical fundamentals of computer science crucial for a software engineer to master in order to make their solutions scalable and maintainable.`,
            score: 5,
            title: 'Software Engineering',
          },
          {
            dimensions: [
              {
                description: `In this part of the discussion we cover use cases of CI/CD. Moreover, we discuss branching strategies, A/B testing for both front- and backend, deployment techniques as well as monitoring.`,
                score: 5,
                title: 'CI/CD',
              },
            ],
            description: `We assess the candidate’s knowledge of methodologies commonly applied in software development just as we talk about continuous integration and delivery as a tool to ensure reliable code change delivery.`,
            score: 5,
            title: 'Tools',
          },
          {
            dimensions: [
              {
                description: `We assess the candidate's knowledge in different OS's, and their ability to manage, admin, configure and secure OS's.`,
                score: 3,
                title: 'Linux',
              },
            ],
            description: `We assess the candidate's knowledge and understanding of various operating system types and concepts, focusing on CPU, memory, I/O.`,
            score: 3,
            title: 'Operating Systems',
          },
        ],
        title: 'Q&A Session',
      },
    ],
    guidelines: {
      levels: [
        {
          description: '9-10',
          range: 'Expert',
          score:
            'The candidate can lead and mentor others. Deep and hands-on experience with profound theoretical knowledge;',
        },
        {
          description: '7-8',
          range: 'Experienced',
          score:
            'The candidate has a solid understanding of the theory, combined with practical experience;',
        },
        {
          description: '5-6',
          range: 'Limited',
          score:
            'The candidate knows the theory and has demonstrated some experience;',
        },
        {
          description: '3-4',
          range: 'Has an idea',
          score:
            'The candidate has heard of the concept and theory, no deep theoretical knowledge and hardly any practical experience;',
        },
        {
          description: '1-2',
          range: 'Failed',
          score:
            'The candidate has not heard of the concept and is not aware of the theory.',
        },
      ],
      observations:
        'Values of .5 or below are rounded down to the nearest integer; values above .5 are rounded up to the nearest integer.',
    },
    recommendations: [
      {
        description: '(9-10) Pursue with personality check',
        title: 'Strong Yes',
      },
      {
        description: '(7-8) Pursue with selected testing & personality check',
        title: 'Rather Yes',
      },
      {
        description: '(5-6) Do not pursue unless deep further testing',
        title: 'Rather No',
      },
      {
        active: true,
        description: '(1-4) Do not pursue',
        title: 'Strong No',
      },
    ],
    feedback: `Overall, Alaa showed a rather meager performance during the technical assessment. He does not possess much experience with C/C++. He solved the live coding task mostly using only C primitives. He has quite a good understanding regarding algorithms and datastructures. However, our suggestion "Strong No" encourages not pursuing the candidate any further at this point for the suggested position.
    The candidate's Live Coding performance was rather meager. Although Alaa communicated the majority of his steps clearly, he had trouble fully understanding the problem. There was insufficient test coverage in place and he did not manage to address the edge cases.The candidate did not implement the code with a basic structure in mind and it was neither clean nor concise. The exercise was not finished on time and the final solution did not work properly.
    The candidate showed a mediocre performance in the Q&A part of the interview. He displayed a rather meager knowledge of Languages & Frameworks (C/C++). He exhibited a solid grasp of Computer Science (Algorithms,Computational Complexity Theory). Furthermore, he demonstrated a mediocre know-how in the areas of Software Engineering (Architecture,Best Practices,Design Patterns,Multi-Threading & Concurrency,OOP,Programming Language Concepts,Testing) and Tools (CI/CD). Finally, he showcased a meager understanding of Operating Systems (Linux) to round off his interview.`,
    date: 'January 21, 2022',
    language: 'English',
  },
  brand: {
    footer:
      '© 2021 Expertview, Expertlead GmbH. All rights reserved. Technical assessment conducted by Expertview — a product of Expertlead.',
    logo: 'src/assets/image/logo.png',
    name: 'Futurepath',
  },
  candidate: {
    headline: 'Software Engineer Sensor Fusion AI and C++ - Autonomous Driving',
    name: 'Alaa Eddine Radhouane',
    stack: 'C/C++',
  },
  labels: {
    interview: {
      date: 'Date of interview',
      language: 'Date of interview',
      stack: 'Tech stack',
    },
    score: {
      overall: 'Overall Score',
    },
  },
});
