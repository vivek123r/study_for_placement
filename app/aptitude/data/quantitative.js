// Quantitative Aptitude Questions and Quizzes

export const quantitativeData = {
  numbers: {
    title: "Numbers",
    description: "Learn about natural numbers, whole numbers, integers, rational and irrational numbers",
    questions: [
      {
        id: 1,
        question: "What is the sum of first 50 natural numbers?",
        solution: "Formula: Sum = n(n+1)/2\nHere n = 50\nSum = 50 × 51 / 2 = 1275",
        answer: "1275",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Find the average of first 20 multiples of 7.",
        solution: "First 20 multiples of 7 are: 7, 14, 21, ..., 140\nThis is an AP with a=7, d=7, n=20\nAverage = (First term + Last term)/2 = (7 + 140)/2 = 73.5",
        answer: "73.5",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "How many prime numbers are there between 1 and 50?",
        solution: "Prime numbers between 1 and 50:\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47\nTotal = 15 prime numbers",
        answer: "15",
        difficulty: "Easy"
      },
      {
        id: 4,
        question: "What is the HCF of 24, 36, and 48?",
        solution: "Factors:\n24 = 2³ × 3\n36 = 2² × 3²\n48 = 2⁴ × 3\nHCF = Product of lowest powers = 2² × 3 = 12",
        answer: "12",
        difficulty: "Medium"
      },
      {
        id: 5,
        question: "Find the LCM of 12, 15, and 20.",
        solution: "Prime factorization:\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\nLCM = Product of highest powers = 2² × 3 × 5 = 60",
        answer: "60",
        difficulty: "Medium"
      }
    ],
    quiz: [
      {
        question: "What is the sum of first 100 natural numbers?",
        options: ["5000", "5050", "5100", "4950"],
        correct: 1,
        explanation: "Using formula n(n+1)/2 = 100×101/2 = 5050"
      },
      {
        question: "Which of the following is a prime number?",
        options: ["91", "87", "83", "93"],
        correct: 2,
        explanation: "83 is a prime number. Others are: 91=7×13, 87=3×29, 93=3×31"
      },
      {
        question: "The HCF of two numbers is 12 and their LCM is 180. If one number is 36, find the other.",
        options: ["48", "60", "72", "84"],
        correct: 1,
        explanation: "Product of numbers = HCF × LCM\n36 × Other = 12 × 180\nOther = 2160/36 = 60"
      },
      {
        question: "How many even numbers are there between 1 and 100?",
        options: ["49", "50", "51", "48"],
        correct: 0,
        explanation: "Even numbers: 2, 4, 6, ..., 98. Count = 98/2 = 49"
      },
      {
        question: "What is the smallest 4-digit number divisible by 12, 15, and 20?",
        options: ["1020", "1080", "1000", "1060"],
        correct: 1,
        explanation: "LCM of 12, 15, 20 = 60. Smallest 4-digit multiple of 60 = 1080"
      }
    ]
  },

  percentages: {
    title: "Percentages",
    description: "Master percentage calculations, increase/decrease, and percentage change",
    questions: [
      {
        id: 1,
        question: "What is 25% of 400?",
        solution: "25% of 400 = (25/100) × 400 = 100",
        answer: "100",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "If a number is increased by 20% and then decreased by 20%, what is the net change?",
        solution: "Let original number = 100\nAfter 20% increase = 120\nAfter 20% decrease on 120 = 120 - (20% of 120) = 120 - 24 = 96\nNet change = 100 - 96 = 4% decrease",
        answer: "4% decrease",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "A student scored 540 marks out of 600. What is his percentage?",
        solution: "Percentage = (Marks obtained / Total marks) × 100\n= (540/600) × 100 = 90%",
        answer: "90%",
        difficulty: "Easy"
      },
      {
        id: 4,
        question: "The population of a town increased from 50,000 to 60,000. What is the percentage increase?",
        solution: "Increase = 60,000 - 50,000 = 10,000\nPercentage increase = (Increase/Original) × 100\n= (10,000/50,000) × 100 = 20%",
        answer: "20%",
        difficulty: "Easy"
      },
      {
        id: 5,
        question: "If 30% of a number is 90, what is 50% of that number?",
        solution: "30% of number = 90\nNumber = 90 × 100/30 = 300\n50% of 300 = 150",
        answer: "150",
        difficulty: "Medium"
      }
    ],
    quiz: [
      {
        question: "What is 15% of 800?",
        options: ["100", "120", "140", "160"],
        correct: 1,
        explanation: "15% of 800 = (15/100) × 800 = 120"
      },
      {
        question: "A shirt priced at Rs. 500 is sold at 20% discount. What is the selling price?",
        options: ["Rs. 400", "Rs. 450", "Rs. 480", "Rs. 420"],
        correct: 0,
        explanation: "Discount = 20% of 500 = 100. Selling price = 500 - 100 = Rs. 400"
      },
      {
        question: "If A is 25% more than B, then B is how much percent less than A?",
        options: ["20%", "25%", "30%", "15%"],
        correct: 0,
        explanation: "Let B = 100, then A = 125. Difference = 25. (25/125)×100 = 20%"
      },
      {
        question: "A number decreased by 40% gives 360. What is the original number?",
        options: ["500", "600", "550", "650"],
        correct: 1,
        explanation: "60% of number = 360. Number = 360 × 100/60 = 600"
      },
      {
        question: "In an exam, 75% students passed. If 150 students failed, how many appeared?",
        options: ["600", "550", "500", "650"],
        correct: 0,
        explanation: "25% failed = 150. Total = 150 × 100/25 = 600"
      }
    ]
  },

  "profit-loss": {
    title: "Profit and Loss",
    description: "Learn CP, SP, profit, loss, discount, and marked price calculations",
    questions: [
      {
        id: 1,
        question: "An article is bought for Rs. 500 and sold for Rs. 600. Find the profit percentage.",
        solution: "Cost Price (CP) = Rs. 500\nSelling Price (SP) = Rs. 600\nProfit = SP - CP = 600 - 500 = Rs. 100\nProfit% = (Profit/CP) × 100 = (100/500) × 100 = 20%",
        answer: "20%",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "A trader marks his goods 40% above CP and gives 20% discount. Find his profit%.",
        solution: "Let CP = 100\nMarked Price = 100 + 40 = 140\nDiscount = 20% of 140 = 28\nSP = 140 - 28 = 112\nProfit = 112 - 100 = 12\nProfit% = 12%",
        answer: "12%",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "By selling an article for Rs. 800, a man loses 20%. At what price should he sell to gain 20%?",
        solution: "SP at 20% loss = Rs. 800\nCP = 800 × 100/80 = Rs. 1000\nFor 20% profit:\nSP = 1000 × 120/100 = Rs. 1200",
        answer: "Rs. 1200",
        difficulty: "Hard"
      },
      {
        id: 4,
        question: "A shopkeeper bought 200 apples at Rs. 10 each. 40 apples got rotten. At what price should he sell remaining to get 20% profit overall?",
        solution: "Total CP = 200 × 10 = Rs. 2000\nFor 20% profit, Total SP = 2000 × 1.2 = Rs. 2400\nRemaining apples = 200 - 40 = 160\nSP per apple = 2400/160 = Rs. 15",
        answer: "Rs. 15",
        difficulty: "Hard"
      },
      {
        id: 5,
        question: "If CP of 10 articles equals SP of 8 articles, find the profit percentage.",
        solution: "Let CP of 1 article = Rs. 1\nCP of 10 articles = Rs. 10\nThis equals SP of 8 articles\nSo SP of 8 articles = Rs. 10\nSP of 1 article = 10/8 = Rs. 1.25\nProfit = 1.25 - 1 = 0.25\nProfit% = (0.25/1) × 100 = 25%",
        answer: "25%",
        difficulty: "Medium"
      }
    ],
    quiz: [
      {
        question: "A man buys an item for Rs. 600 and sells it for Rs. 750. What is his profit%?",
        options: ["20%", "25%", "30%", "15%"],
        correct: 1,
        explanation: "Profit = 750-600 = 150. Profit% = (150/600)×100 = 25%"
      },
      {
        question: "An article is sold at 10% loss. If it was sold for Rs. 100 more, there would be a gain of 10%. Find the CP.",
        options: ["Rs. 500", "Rs. 400", "Rs. 600", "Rs. 450"],
        correct: 0,
        explanation: "Difference of 20% = 100. So 100% = 500. CP = Rs. 500"
      },
      {
        question: "A trader allows 10% discount on marked price and still gains 20%. What is the MP if CP is Rs. 600?",
        options: ["Rs. 800", "Rs. 750", "Rs. 850", "Rs. 900"],
        correct: 0,
        explanation: "SP = 600 × 1.2 = 720. MP × 0.9 = 720. MP = Rs. 800"
      },
      {
        question: "If selling price is doubled, the profit triples. Find the profit percentage.",
        options: ["100%", "200%", "150%", "50%"],
        correct: 0,
        explanation: "Let CP=100, SP=x, Profit=x-100. When SP=2x, Profit=3(x-100). Solving: x=200. Profit%=100%"
      },
      {
        question: "A dishonest dealer professes to sell at CP but uses 900g weight instead of 1kg. His profit% is:",
        options: ["10%", "11.11%", "9%", "12.5%"],
        correct: 1,
        explanation: "Profit% = [(1000-900)/900] × 100 = 11.11%"
      }
    ]
  },

  "time-speed-distance": {
    title: "Time, Speed, and Distance",
    description: "Master speed, distance, time problems and relative speed concepts",
    questions: [
      {
        id: 1,
        question: "A car travels 120 km in 2 hours. What is its speed?",
        solution: "Speed = Distance / Time\nSpeed = 120 km / 2 hours = 60 km/h",
        answer: "60 km/h",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Convert 72 km/h to m/s.",
        solution: "To convert km/h to m/s, multiply by 5/18\n72 km/h = 72 × (5/18) = 20 m/s",
        answer: "20 m/s",
        difficulty: "Easy"
      },
      {
        id: 3,
        question: "A train 150m long passes a pole in 15 seconds. What is its speed in km/h?",
        solution: "Distance = Length of train = 150m\nTime = 15 seconds\nSpeed = 150/15 = 10 m/s\nConvert to km/h: 10 × (18/5) = 36 km/h",
        answer: "36 km/h",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "Two trains 100m and 150m long are running in opposite directions at 40 km/h and 50 km/h. In how much time will they cross each other?",
        solution: "Total distance = 100 + 150 = 250m\nRelative speed = 40 + 50 = 90 km/h = 25 m/s\nTime = 250/25 = 10 seconds",
        answer: "10 seconds",
        difficulty: "Hard"
      },
      {
        id: 5,
        question: "A man walks 20 km in 5 hours. If he wants to cover the same distance in 4 hours, by how much should he increase his speed?",
        solution: "Original speed = 20/5 = 4 km/h\nRequired speed = 20/4 = 5 km/h\nIncrease = 5 - 4 = 1 km/h",
        answer: "1 km/h",
        difficulty: "Medium"
      }
    ],
    quiz: [
      {
        question: "A car covers 300 km at 60 km/h. How much time does it take?",
        options: ["4 hours", "5 hours", "6 hours", "4.5 hours"],
        correct: 1,
        explanation: "Time = Distance/Speed = 300/60 = 5 hours"
      },
      {
        question: "Convert 90 km/h to m/s:",
        options: ["20 m/s", "25 m/s", "30 m/s", "22.5 m/s"],
        correct: 1,
        explanation: "90 × (5/18) = 25 m/s"
      },
      {
        question: "A train 200m long crosses a platform 400m long in 30 seconds. What is its speed?",
        options: ["72 km/h", "60 km/h", "80 km/h", "54 km/h"],
        correct: 0,
        explanation: "Total distance = 200+400 = 600m. Speed = 600/30 = 20 m/s = 72 km/h"
      },
      {
        question: "Two cars start from the same point in opposite directions at 40 km/h and 60 km/h. After how many hours will they be 300 km apart?",
        options: ["2 hours", "3 hours", "4 hours", "2.5 hours"],
        correct: 1,
        explanation: "Relative speed = 40+60 = 100 km/h. Time = 300/100 = 3 hours"
      },
      {
        question: "A person covers half distance at 40 km/h and remaining at 60 km/h. Find average speed.",
        options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"],
        correct: 0,
        explanation: "Average speed = 2×40×60/(40+60) = 48 km/h"
      }
    ]
  },

  average: {
    title: "Average",
    description: "Learn to calculate average, weighted average, and average-based problems",
    questions: [
      {
        id: 1,
        question: "Find the average of 10, 20, 30, 40, 50.",
        solution: "Average = Sum of all numbers / Count of numbers\nAverage = (10+20+30+40+50) / 5 = 150/5 = 30",
        answer: "30",
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. Find the excluded number.",
        solution: "Sum of 5 numbers = 27 × 5 = 135\nSum of 4 numbers = 25 × 4 = 100\nExcluded number = 135 - 100 = 35",
        answer: "35",
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "The average age of 30 students is 15 years. If teacher's age is included, average increases by 1. Find teacher's age.",
        solution: "Sum of 30 students' ages = 15 × 30 = 450\nNew average = 16, Total people = 31\nSum including teacher = 16 × 31 = 496\nTeacher's age = 496 - 450 = 46 years",
        answer: "46 years",
        difficulty: "Medium"
      },
      {
        id: 4,
        question: "Average of 10 numbers is 15. If each number is multiplied by 3, what is the new average?",
        solution: "When each number is multiplied by k, average is also multiplied by k\nNew average = 15 × 3 = 45",
        answer: "45",
        difficulty: "Easy"
      },
      {
        id: 5,
        question: "Average of 7 consecutive numbers is 20. Find the largest number.",
        solution: "For consecutive numbers, average = Middle number\nSo middle (4th) number = 20\nNumbers are: 17, 18, 19, 20, 21, 22, 23\nLargest = 23",
        answer: "23",
        difficulty: "Medium"
      }
    ],
    quiz: [
      {
        question: "Find the average of first 10 natural numbers:",
        options: ["5", "5.5", "6", "4.5"],
        correct: 1,
        explanation: "Average = (n+1)/2 = (10+1)/2 = 5.5"
      },
      {
        question: "Average of 8 numbers is 20. If 2 is added to each number, what is the new average?",
        options: ["20", "22", "24", "18"],
        correct: 1,
        explanation: "When same number is added to all, average increases by that number. New average = 20+2 = 22"
      },
      {
        question: "Average of 5 numbers is 40. If the first number is 50, what is the average of remaining 4?",
        options: ["37.5", "38", "36", "35"],
        correct: 0,
        explanation: "Total = 40×5 = 200. Sum of 4 numbers = 200-50 = 150. Average = 150/4 = 37.5"
      },
      {
        question: "The average weight of A, B, C is 45 kg. If average of A and B is 40 kg, what is C's weight?",
        options: ["50 kg", "55 kg", "60 kg", "45 kg"],
        correct: 1,
        explanation: "A+B+C = 135, A+B = 80. So C = 135-80 = 55 kg"
      },
      {
        question: "Average of 20 numbers is 15. If 5 is added to every number, the sum increases by:",
        options: ["5", "100", "75", "50"],
        correct: 1,
        explanation: "Sum increases = 5 × 20 = 100"
      }
    ]
  },

  // 6. Algebra
  Algebra: {
    title: 'Algebra',
    description: 'Master algebraic expressions, equations, and problem-solving.',
    questions: [
      {
        id: 1,
        question: 'If x + 1/x = 5, find x² + 1/x²',
        solution: `Given: x + 1/x = 5

Square both sides:
(x + 1/x)² = 25
x² + 2(x)(1/x) + 1/x² = 25
x² + 2 + 1/x² = 25
x² + 1/x² = 23`,
        answer: '23',
        difficulty: 'Medium'
      },
      {
        id: 2,
        question: 'Solve: 2x + 3y = 12 and x - y = 1',
        solution: `x - y = 1
x = y + 1 ... (1)

Substitute in first equation:
2(y + 1) + 3y = 12
2y + 2 + 3y = 12
5y = 10
y = 2

From (1): x = 2 + 1 = 3`,
        answer: 'x = 3, y = 2',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'If a² + b² = 25 and ab = 12, find a + b',
        solution: `We know (a + b)² = a² + 2ab + b²

Given: a² + b² = 25 and ab = 12

(a + b)² = 25 + 2(12)
(a + b)² = 25 + 24 = 49
a + b = ±7`,
        answer: '±7',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'Simplify: (x³ - 8)/(x - 2)',
        solution: `x³ - 8 is a³ - b³ where a = x, b = 2

Using formula: a³ - b³ = (a - b)(a² + ab + b²)

x³ - 8 = (x - 2)(x² + 2x + 4)

(x³ - 8)/(x - 2) = x² + 2x + 4`,
        answer: 'x² + 2x + 4',
        difficulty: 'Hard'
      },
      {
        id: 5,
        question: 'If x = 3 + 2√2, find 1/x',
        solution: `x = 3 + 2√2

Rationalize:
1/x = 1/(3 + 2√2)

Multiply by conjugate:
= (3 - 2√2)/[(3 + 2√2)(3 - 2√2)]
= (3 - 2√2)/(9 - 8)
= 3 - 2√2`,
        answer: '3 - 2√2',
        difficulty: 'Hard'
      }
    ],
    quiz: [
      {
        question: 'If a + b = 10 and ab = 21, find a² + b²',
        options: ['58', '60', '62', '64'],
        correct: 0,
        explanation: '(a+b)² = 100, so a² + 2ab + b² = 100. a² + b² = 100 - 2(21) = 58'
      },
      {
        question: 'Factor: x² - 5x + 6',
        options: ['(x-2)(x-3)', '(x-1)(x-6)', '(x+2)(x+3)', '(x-2)(x+3)'],
        correct: 0,
        explanation: 'x² - 5x + 6 = (x-2)(x-3) as -2×-3 = 6 and -2-3 = -5'
      },
      {
        question: 'If x - 1/x = 4, find x² + 1/x²',
        options: ['18', '16', '20', '22'],
        correct: 0,
        explanation: '(x - 1/x)² = 16. x² - 2 + 1/x² = 16. x² + 1/x² = 18'
      },
      {
        question: 'Solve: 3x - 7 = 14',
        options: ['7', '6', '8', '5'],
        correct: 0,
        explanation: '3x = 21, so x = 7'
      },
      {
        question: 'If a³ + b³ = 9 and a + b = 3, find ab',
        options: ['0', '1', '2', '3'],
        correct: 2,
        explanation: 'a³ + b³ = (a+b)³ - 3ab(a+b). 9 = 27 - 3ab(3). 9ab = 18. ab = 2'
      }
    ]
  },

  // 7. Geometry
  Geometry: {
    title: 'Geometry',
    description: 'Learn about shapes, angles, triangles, and geometric properties.',
    questions: [
      {
        id: 1,
        question: 'Find the area of a triangle with base 10 cm and height 8 cm',
        solution: `Formula: Area = (1/2) × base × height

Base = 10 cm
Height = 8 cm

Area = (1/2) × 10 × 8
Area = 40 cm²`,
        answer: '40 cm²',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'The angles of a triangle are in ratio 2:3:4. Find the largest angle.',
        solution: `Let angles be 2x, 3x, 4x

Sum of angles in triangle = 180°
2x + 3x + 4x = 180°
9x = 180°
x = 20°

Largest angle = 4x = 4 × 20° = 80°`,
        answer: '80°',
        difficulty: 'Medium'
      },
      {
        id: 3,
        question: 'In a right triangle, if hypotenuse is 13 cm and one side is 5 cm, find the other side.',
        solution: `Using Pythagoras theorem:
a² + b² = c²

5² + b² = 13²
25 + b² = 169
b² = 144
b = 12 cm`,
        answer: '12 cm',
        difficulty: 'Easy'
      },
      {
        id: 4,
        question: 'Find the area of a circle with radius 7 cm (use π = 22/7)',
        solution: `Formula: Area = πr²

r = 7 cm
π = 22/7

Area = (22/7) × 7 × 7
Area = 22 × 7
Area = 154 cm²`,
        answer: '154 cm²',
        difficulty: 'Easy'
      },
      {
        id: 5,
        question: 'The diagonals of a rhombus are 16 cm and 12 cm. Find its area.',
        solution: `Formula: Area of rhombus = (1/2) × d₁ × d₂

d₁ = 16 cm
d₂ = 12 cm

Area = (1/2) × 16 × 12
Area = 96 cm²`,
        answer: '96 cm²',
        difficulty: 'Medium'
      }
    ],
    quiz: [
      {
        question: 'What is the sum of interior angles of a hexagon?',
        options: ['720°', '540°', '900°', '1080°'],
        correct: 0,
        explanation: 'Formula: (n-2)×180°. For hexagon: (6-2)×180° = 720°'
      },
      {
        question: 'If each interior angle of a regular polygon is 120°, how many sides does it have?',
        options: ['6', '5', '7', '8'],
        correct: 0,
        explanation: 'Each exterior angle = 180°-120° = 60°. Number of sides = 360°/60° = 6'
      },
      {
        question: 'Area of an equilateral triangle with side 6 cm is:',
        options: ['9√3 cm²', '12√3 cm²', '6√3 cm²', '18√3 cm²'],
        correct: 0,
        explanation: 'Area = (√3/4) × a². Area = (√3/4) × 36 = 9√3 cm²'
      },
      {
        question: 'The circumference of a circle is 44 cm. Find its radius (π = 22/7)',
        options: ['7 cm', '14 cm', '21 cm', '3.5 cm'],
        correct: 0,
        explanation: '2πr = 44. 2×(22/7)×r = 44. r = 7 cm'
      },
      {
        question: 'If one angle of a parallelogram is 70°, what is the opposite angle?',
        options: ['70°', '110°', '140°', '90°'],
        correct: 0,
        explanation: 'Opposite angles of a parallelogram are equal. So it is 70°'
      }
    ]
  },

  // 8. Probability
  Probability: {
    title: 'Probability',
    description: 'Learn about probability, events, and statistical calculations.',
    questions: [
      {
        id: 1,
        question: 'A coin is tossed. What is the probability of getting heads?',
        solution: `Total outcomes = 2 (heads, tails)
Favorable outcome = 1 (heads)

Probability = Favorable/Total
P(Heads) = 1/2 = 0.5`,
        answer: '1/2 or 0.5',
        difficulty: 'Easy'
      },
      {
        id: 2,
        question: 'A die is thrown. What is the probability of getting an even number?',
        solution: `Total outcomes = 6 (1,2,3,4,5,6)
Even numbers = 3 (2,4,6)

Probability = 3/6 = 1/2`,
        answer: '1/2',
        difficulty: 'Easy'
      },
      {
        id: 3,
        question: 'Two coins are tossed. Find the probability of getting at least one head.',
        solution: `Sample space: {HH, HT, TH, TT}
Total outcomes = 4

At least one head: HH, HT, TH = 3 outcomes

Probability = 3/4`,
        answer: '3/4',
        difficulty: 'Medium'
      },
      {
        id: 4,
        question: 'A card is drawn from a pack of 52 cards. What is the probability of getting a king?',
        solution: `Total cards = 52
Number of kings = 4

Probability = 4/52 = 1/13`,
        answer: '1/13',
        difficulty: 'Easy'
      },
      {
        id: 5,
        question: 'A bag contains 3 red, 4 blue, and 5 green balls. Find the probability of drawing a red ball.',
        solution: `Total balls = 3 + 4 + 5 = 12
Red balls = 3

Probability = 3/12 = 1/4`,
        answer: '1/4',
        difficulty: 'Easy'
      }
    ],
    quiz: [
      {
        question: 'What is the probability of rolling a 6 on a fair die?',
        options: ['1/6', '1/3', '1/2', '1/12'],
        correct: 0,
        explanation: 'Only one 6 out of 6 possible outcomes. P = 1/6'
      },
      {
        question: 'A bag has 5 white and 3 black balls. Probability of drawing a white ball is:',
        options: ['5/8', '3/8', '1/2', '5/3'],
        correct: 0,
        explanation: 'P(white) = 5/(5+3) = 5/8'
      },
      {
        question: 'Two dice are rolled. Probability of getting sum 7 is:',
        options: ['1/6', '1/12', '1/9', '1/3'],
        correct: 0,
        explanation: 'Sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 ways out of 36. P = 6/36 = 1/6'
      },
      {
        question: 'Probability of getting a face card from a deck is:',
        options: ['3/13', '1/4', '4/13', '1/13'],
        correct: 0,
        explanation: '12 face cards (J,Q,K in 4 suits) out of 52. P = 12/52 = 3/13'
      },
      {
        question: 'If P(A) = 0.3, what is P(not A)?',
        options: ['0.7', '0.3', '1', '0'],
        correct: 0,
        explanation: 'P(not A) = 1 - P(A) = 1 - 0.3 = 0.7'
      }
    ]
  }
};
