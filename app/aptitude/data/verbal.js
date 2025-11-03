// Verbal Ability Questions and Quizzes

export const verbalData = {
  'Synonyms': {
    title: 'Synonyms',
    description: 'Identify words with similar meanings.',
    questions: [
      {
        id: 1,
        question: 'Choose the synonym for ABUNDANT',
        solution: `ABUNDANT means existing in large quantities; plentiful

Synonyms: Plentiful, Copious, Ample, Profuse
Antonyms: Scarce, Meager, Insufficient

Answer: Plentiful`,
        answer: 'Plentiful',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Synonym for METICULOUS',
        solution: `METICULOUS means showing great attention to detail; very careful

Synonyms: Careful, Precise, Thorough, Scrupulous
Antonyms: Careless, Sloppy, Negligent

Answer: Careful/Precise`,
        answer: 'Careful or Precise',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'What is a synonym for EPHEMERAL?',
        solution: `EPHEMERAL means lasting for a very short time

Synonyms: Transient, Fleeting, Temporary, Short-lived
Antonyms: Permanent, Lasting, Enduring

Answer: Transient`,
        answer: 'Transient or Fleeting',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'Synonym for CANDID',
        solution: `CANDID means truthful and straightforward; frank

Synonyms: Frank, Honest, Sincere, Forthright
Antonyms: Dishonest, Insincere, Deceptive

Answer: Frank/Honest`,
        answer: 'Frank or Honest',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'Choose synonym for PRAGMATIC',
        solution: `PRAGMATIC means dealing with things sensibly and realistically; practical

Synonyms: Practical, Realistic, Sensible, Down-to-earth
Antonyms: Impractical, Idealistic, Unrealistic

Answer: Practical`,
        answer: 'Practical',
        difficulty: 'Medium'
      }
    ],
    quiz: [
      {
        question: 'Synonym of HAPPY:',
        options: ['Joyful', 'Sad', 'Angry', 'Tired'],
        correct: 0,
        explanation: 'Joyful means full of joy, similar to happy'
      },
      {
        question: 'BENEVOLENT means:',
        options: ['Kind', 'Cruel', 'Lazy', 'Quick'],
        correct: 0,
        explanation: 'Benevolent means well-meaning and kindly'
      },
      {
        question: 'Synonym for OBSOLETE:',
        options: ['Outdated', 'Modern', 'New', 'Current'],
        correct: 0,
        explanation: 'Obsolete means no longer in use; outdated'
      },
      {
        question: 'VERBOSE is similar to:',
        options: ['Wordy', 'Brief', 'Silent', 'Clear'],
        correct: 0,
        explanation: 'Verbose means using more words than needed; wordy'
      },
      {
        question: 'DILIGENT means:',
        options: ['Hardworking', 'Lazy', 'Careless', 'Slow'],
        correct: 0,
        explanation: 'Diligent means showing care and effort; hardworking'
      }
    ]
  },

  'Antonyms': {
    title: 'Antonyms',
    description: 'Find words with opposite meanings.',
    questions: [
      {
        id: 1,
        question: 'Antonym for BRAVE',
        solution: `BRAVE means ready to face danger; courageous

Antonyms: Cowardly, Fearful, Timid, Afraid
Synonyms: Courageous, Bold, Valiant

Answer: Cowardly`,
        answer: 'Cowardly',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Opposite of EXPAND',
        solution: `EXPAND means to become or make larger

Antonyms: Contract, Shrink, Reduce, Compress
Synonyms: Grow, Enlarge, Increase

Answer: Contract/Shrink`,
        answer: 'Contract or Shrink',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'Antonym for ACQUIT',
        solution: `ACQUIT means to free someone from a criminal charge; declare not guilty

Antonyms: Convict, Condemn, Sentence
Synonyms: Exonerate, Absolve, Clear

Answer: Convict`,
        answer: 'Convict',
        difficulty: 'Hard'
      },
      {
        id: 4,
        question: 'Opposite of DETERIORATE',
        solution: `DETERIORATE means to become worse in quality or condition

Antonyms: Improve, Enhance, Upgrade, Better
Synonyms: Decline, Worsen, Degrade

Answer: Improve`,
        answer: 'Improve',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'Antonym for LOQUACIOUS',
        solution: `LOQUACIOUS means very talkative

Antonyms: Taciturn, Silent, Reticent, Quiet
Synonyms: Talkative, Garrulous, Chatty

Answer: Taciturn`,
        answer: 'Taciturn or Silent',
        difficulty: 'Hard'
      }
    ],
    quiz: [
      {
        question: 'Antonym of HOT:',
        options: ['Cold', 'Warm', 'Heat', 'Fire'],
        correct: 0,
        explanation: 'Cold is the opposite of hot'
      },
      {
        question: 'Opposite of GENEROUS:',
        options: ['Stingy', 'Kind', 'Giving', 'Helpful'],
        correct: 0,
        explanation: 'Stingy means unwilling to give; opposite of generous'
      },
      {
        question: 'Antonym for ARTIFICIAL:',
        options: ['Natural', 'Fake', 'False', 'Synthetic'],
        correct: 0,
        explanation: 'Natural is the opposite of artificial'
      },
      {
        question: 'Opposite of ASCEND:',
        options: ['Descend', 'Rise', 'Climb', 'Elevate'],
        correct: 0,
        explanation: 'Descend (go down) is opposite of ascend (go up)'
      },
      {
        question: 'Antonym of OPAQUE:',
        options: ['Transparent', 'Dark', 'Cloudy', 'Dense'],
        correct: 0,
        explanation: 'Transparent (see-through) is opposite of opaque (not see-through)'
      }
    ]
  },

  'Spotting-Errors': {
    title: 'Spotting Errors',
    description: 'Identify grammatical errors in sentences.',
    questions: [
      {
        id: 1,
        question: 'Find the error: "She don\'t like coffee."',
        solution: `Error: "don't" with singular subject "She"

Correct form: "She doesn't like coffee"

Rule: Use doesn't with singular subjects (he, she, it)
Use don't with plural subjects (we, you, they)`,
        answer: 'Error: don\'t should be doesn\'t',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Find error: "Each of the students have submitted their assignment."',
        solution: `Error: "have" with singular subject "Each"

Correct: "Each of the students has submitted their assignment"

Rule: "Each" is singular and takes singular verb "has"
Words like each, every, either, neither are singular`,
        answer: 'Error: have should be has',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'Spot error: "The news are spreading fast."',
        solution: `Error: "are" with singular noun "news"

Correct: "The news is spreading fast"

Rule: News is always singular despite ending in 's'
Similar words: physics, mathematics, economics`,
        answer: 'Error: are should be is',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Find error: "He is senior than me in office."',
        solution: `Error: "than" with "senior"

Correct: "He is senior to me in office"

Rule: Senior/Junior/Superior/Inferior take "to" not "than"
Example: She is junior to him`,
        answer: 'Error: than should be to',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'Spot error: "One of my friend is a doctor."',
        solution: `Error: "friend" should be plural after "One of my"

Correct: "One of my friends is a doctor"

Rule: "One of the/my/your" is always followed by plural noun
But verb remains singular (is, not are)`,
        answer: 'Error: friend should be friends',
        difficulty: 'Medium'
      }
    ],
    quiz: [
      {
        question: 'Find error: "I has finished my work."',
        options: ['has should be have', 'No error', 'work is wrong', 'finished is wrong'],
        correct: 0,
        explanation: 'Subject "I" takes "have" not "has". Correct: I have finished'
      },
      {
        question: 'Error in: "He go to school daily."',
        options: ['go should be goes', 'No error', 'daily is wrong', 'to is wrong'],
        correct: 0,
        explanation: 'Singular subject "He" needs "goes". Correct: He goes to school'
      },
      {
        question: 'Find error: "She is more smarter than him."',
        options: ['more smarter → smarter', 'No error', 'than is wrong', 'him is wrong'],
        correct: 0,
        explanation: 'Don\'t use "more" with "-er" comparatives. Either "smarter" or "more smart"'
      },
      {
        question: 'Error: "The sceneries are beautiful."',
        options: ['sceneries → scenery', 'are → is', 'Both A and B', 'No error'],
        correct: 2,
        explanation: 'Scenery is uncountable (no plural). Correct: "The scenery is beautiful"'
      },
      {
        question: 'Find error: "Neither of them are coming."',
        options: ['are → is', 'them → they', 'No error', 'Neither → Either'],
        correct: 0,
        explanation: 'Neither is singular. Correct: "Neither of them is coming"'
      }
    ]
  },

  'Sentence-Improvement': {
    title: 'Sentence Improvement',
    description: 'Improve sentences by choosing better alternatives.',
    questions: [
      {
        id: 1,
        question: 'Improve: "He is working here since five years."',
        solution: `Error: "since" with duration

Correct: "He has been working here for five years"

Rule:
- FOR: duration (for 5 years, for 2 months)
- SINCE: point in time (since 2020, since Monday)
- Use present perfect with since/for`,
        answer: 'He has been working here for five years',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'Improve: "She is very much interested in music."',
        solution: `"very much" is acceptable but "very" is better

Better: "She is very interested in music"

Rule: With adjectives, use "very" not "very much"
"Very much" is used with verbs: I like it very much`,
        answer: 'She is very interested in music',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'Improve: "If I will see him, I will tell him."',
        solution: `Error: "will" in if-clause (type 1 conditional)

Correct: "If I see him, I will tell him"

Rule: In type 1 conditional (real future)
If + present simple, will + infinitive
Not: If + will`,
        answer: 'If I see him, I will tell him',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Improve: "Hardly he had reached when the train left."',
        solution: `Error: Word order with "hardly"

Correct: "Hardly had he reached when the train left"

Rule: Hardly/Scarcely/No sooner → inverted word order
Hardly had + subject + past participle`,
        answer: 'Hardly had he reached when the train left',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'Improve: "He asked me that where was I going."',
        solution: `Error: Incorrect reported speech structure

Correct: "He asked me where I was going"

Rule: In reported questions:
- No "that" before question word
- No inversion (where I was, not where was I)
- No question mark`,
        answer: 'He asked me where I was going',
        difficulty: 'Hard'
      }
    ],
    quiz: [
      {
        question: 'Improve: "She is elder than me."',
        options: ['older than me', 'elder to me', 'more elder than me', 'No improvement'],
        correct: 0,
        explanation: '"Elder" is used for family. For comparison, use "older than"'
      },
      {
        question: 'Improve: "He said me to go."',
        options: ['He told me to go', 'He said to me go', 'He says me to go', 'No improvement'],
        correct: 0,
        explanation: 'Use "told" not "said" when there\'s an indirect object before infinitive'
      },
      {
        question: 'Improve: "I am living here since 2015."',
        options: ['have been living', 'was living', 'lived', 'No improvement'],
        correct: 0,
        explanation: 'Use present perfect continuous with "since". "I have been living"'
      },
      {
        question: 'Improve: "She married with a doctor."',
        options: ['married a doctor', 'married to a doctor', 'got married with', 'No improvement'],
        correct: 0,
        explanation: '"Marry" is transitive, doesn\'t need preposition. "She married a doctor"'
      },
      {
        question: 'Improve: "I enjoyed during my holiday."',
        options: ['enjoyed my holiday', 'enjoyed in my holiday', 'enjoyed at holiday', 'No improvement'],
        correct: 0,
        explanation: '"Enjoy" is transitive. No preposition needed. "I enjoyed my holiday"'
      }
    ]
  },

  'Comprehension': {
    title: 'Reading Comprehension',
    description: 'Read passages and answer questions based on them.',
    questions: [
      {
        id: 1,
        question: 'Passage: "Regular exercise improves cardiovascular health, strengthens muscles, and enhances mental well-being. Studies show that just 30 minutes of moderate exercise daily can reduce the risk of chronic diseases." Question: According to the passage, how much exercise is recommended?',
        solution: `The passage clearly states:
"just 30 minutes of moderate exercise daily"

This is the recommended duration mentioned in the passage`,
        answer: '30 minutes daily',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Passage: "Climate change is one of the most pressing issues of our time. Rising global temperatures are causing glaciers to melt, sea levels to rise, and weather patterns to become increasingly unpredictable." Question: What is the main topic?',
        solution: `The passage discusses:
- Climate change as a pressing issue
- Effects like melting glaciers
- Rising sea levels
- Unpredictable weather

Main topic: Climate change and its effects`,
        answer: 'Climate change and its effects',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'Passage: "Artificial Intelligence is revolutionizing industries from healthcare to finance. While AI offers tremendous benefits like improved efficiency and accuracy, it also raises concerns about job displacement and privacy." Question: What is the author\'s tone?',
        solution: `The author presents:
- Positive aspects: benefits, improved efficiency
- Negative aspects: concerns about jobs and privacy

This shows a balanced view - neither completely positive nor negative

Tone: Balanced/Objective`,
        answer: 'Balanced or Objective',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Passage: "The ancient Indus Valley Civilization, dating back to 2500 BCE, was one of the world\'s earliest urban civilizations. It had well-planned cities with advanced drainage systems, standardized weights, and evidence of trade." Question: What can be inferred about this civilization?',
        solution: `Evidence given:
- Well-planned cities
- Advanced drainage
- Standardized weights
- Trade evidence

Inference: They were technologically advanced and organized for their time`,
        answer: 'They were advanced and well-organized',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'Passage: "Despite the proliferation of digital media, print newspapers retain a loyal readership. Many readers prefer the tactile experience and focused reading that physical newspapers provide, free from digital distractions." Question: Why do some prefer print?',
        solution: `Reasons mentioned:
1. Tactile experience (physical feel)
2. Focused reading
3. Free from digital distractions

These are the three main reasons given in the passage`,
        answer: 'Tactile experience, focused reading, no distractions',
        difficulty: 'Easy'
      }
    ],
    quiz: [
      {
        question: 'Passage: "Bees play a crucial role in pollination. Without them, many plants would not reproduce." What is the main idea?',
        options: ['Bees are important for plant reproduction', 'Bees make honey', 'Plants need water', 'Bees are insects'],
        correct: 0,
        explanation: 'The passage emphasizes bees\' crucial role in pollination and plant reproduction'
      },
      {
        question: 'Passage: "The library was quiet. Students studied diligently for their exams." Where does this take place?',
        options: ['Library', 'Classroom', 'Home', 'Park'],
        correct: 0,
        explanation: 'The passage explicitly states "The library was quiet"'
      },
      {
        question: 'Passage: "Renewable energy sources like solar and wind power are becoming increasingly cost-effective." What is discussed?',
        options: ['Renewable energy', 'Fossil fuels', 'Nuclear power', 'Electricity bills'],
        correct: 0,
        explanation: 'The passage discusses renewable energy sources (solar and wind)'
      },
      {
        question: 'Passage: "Many experts believe electric vehicles will dominate the market by 2040." What is the prediction?',
        options: ['EVs will dominate by 2040', 'Gas cars will end', 'EVs are expensive', 'Market will crash'],
        correct: 0,
        explanation: 'Experts predict electric vehicles will dominate the market by 2040'
      },
      {
        question: 'Passage: "The novel explores themes of love, loss, and redemption through the protagonist\'s journey." What does the novel explore?',
        options: ['Themes of love, loss, redemption', 'Science fiction', 'Mystery', 'Biography'],
        correct: 0,
        explanation: 'The passage explicitly mentions these three themes'
      }
    ]
  },

  'Idioms-Phrases': {
    title: 'Idioms and Phrases',
    description: 'Understand common idioms and their meanings.',
    questions: [
      {
        id: 1,
        question: 'What does "Break the ice" mean?',
        solution: `"Break the ice" means to initiate conversation or reduce tension in a social situation

Example: "He told a joke to break the ice at the meeting"

This idiom comes from the idea of breaking frozen water to make passage easier`,
        answer: 'Initiate conversation / reduce tension',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'Meaning of "Piece of cake"',
        solution: `"Piece of cake" means something very easy to do

Example: "The exam was a piece of cake"

Not literally about cake, but about something being effortlessly accomplished`,
        answer: 'Very easy',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'What does "Burning the midnight oil" mean?',
        solution: `"Burning the midnight oil" means working late into the night

Example: "She was burning the midnight oil to finish her project"

Comes from the practice of using oil lamps to work at night before electricity`,
        answer: 'Working late at night',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Meaning of "Once in a blue moon"',
        solution: `"Once in a blue moon" means very rarely; almost never

Example: "He visits us once in a blue moon"

A blue moon is a rare astronomical event, hence the meaning`,
        answer: 'Very rarely',
        difficulty: 'Medium'
      },
      {
        id: 5,
        question: 'What does "Add fuel to the fire" mean?',
        solution: `"Add fuel to the fire" means to make a bad situation worse

Example: "His comments added fuel to the fire"

Making an already problematic situation even more difficult or intense`,
        answer: 'Make a bad situation worse',
        difficulty: 'Medium'
      }
    ],
    quiz: [
      {
        question: '"Hit the nail on the head" means:',
        options: ['Exactly right', 'Hit something', 'Make a mistake', 'Work with tools'],
        correct: 0,
        explanation: 'To hit the nail on the head means to be exactly right or accurate'
      },
      {
        question: '"Costs an arm and a leg" means:',
        options: ['Very expensive', 'Cheap', 'Free', 'Painful'],
        correct: 0,
        explanation: 'This idiom means something is very expensive'
      },
      {
        question: '"Under the weather" means:',
        options: ['Feeling sick', 'Outside', 'Happy', 'Angry'],
        correct: 0,
        explanation: 'Under the weather means feeling ill or unwell'
      },
      {
        question: '"Spill the beans" means:',
        options: ['Reveal a secret', 'Cook food', 'Make mess', 'Be clumsy'],
        correct: 0,
        explanation: 'Spill the beans means to reveal a secret or disclose information'
      },
      {
        question: '"Bark up the wrong tree" means:',
        options: ['Pursue wrong course', 'Climb trees', 'Make noise', 'Train dogs'],
        correct: 0,
        explanation: 'Means to pursue a mistaken or misguided course of action'
      }
    ]
  }
};
