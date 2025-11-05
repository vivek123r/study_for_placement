// Programming Topics Data Structure
// Add your content for each topic here

export const topicsData = {
  // ==================== BASICS ====================
  basics: {
    variables: {
      title: "Variables & Data Types",
      overview: "Learn about Python's fundamental data types and how to store values in variables.",
      whatYouLearn: [
        "Understanding int, float, string, and boolean types",
        "Variable naming conventions and rules",
        "Type conversion and casting",
        "Using type() function to check data types",
        "Dynamic typing in Python"
      ],
      codeExample: `# Variables and Data Types in Python

# Integer
age = 25
print(type(age))  # <class 'int'>

# Float
price = 19.99
print(type(price))  # <class 'float'>

# String
name = "Python"
print(type(name))  # <class 'str'>

# Boolean
is_active = True
print(type(is_active))  # <class 'bool'>

# Multiple assignment
x, y, z = 10, 20, 30
print(f"x={x}, y={y}, z={z}")

# Type conversion
num_str = "100"
num_int = int(num_str)
print(type(num_int))  # <class 'int'>`,
      practiceProblems: [
        "Create variables of different data types",
        "Convert between int, float, and string",
        "Use f-strings to format output",
        "Check if a variable is of a specific type"
      ]
    },
    
    operators: {
      title: "Operators",
      overview: "Master arithmetic, comparison, logical, and other operators in Python.",
      whatYouLearn: [
        "Arithmetic operators (+, -, *, /, //, %, **)",
        "Comparison operators (==, !=, <, >, <=, >=)",
        "Logical operators (and, or, not)",
        "Assignment operators (=, +=, -=, *=, etc.)",
        "Operator precedence and associativity"
      ],
      codeExample: `# Python Operators

# Arithmetic Operators
a, b = 10, 3
print(f"Addition: {a + b}")        # 13
print(f"Subtraction: {a - b}")     # 7
print(f"Multiplication: {a * b}")  # 30
print(f"Division: {a / b}")        # 3.333...
print(f"Floor Division: {a // b}") # 3
print(f"Modulus: {a % b}")         # 1
print(f"Power: {a ** b}")          # 1000

# Comparison Operators
x, y = 5, 10
print(x == y)  # False
print(x != y)  # True
print(x < y)   # True

# Logical Operators
age = 25
has_license = True
can_drive = age >= 18 and has_license
print(f"Can drive: {can_drive}")  # True`,
      practiceProblems: [
        "Calculate area and perimeter of a rectangle",
        "Check if a number is even or odd using modulus",
        "Compare two numbers and print the larger one",
        "Use logical operators to check multiple conditions"
      ]
    },

    conditionals: {
      title: "Conditionals (if-else)",
      overview: "Learn to control program flow with if, elif, and else statements.",
      whatYouLearn: [
        "Basic if statements",
        "if-else and if-elif-else chains",
        "Nested conditionals",
        "Ternary operators (conditional expressions)",
        "Truthy and falsy values in Python"
      ],
      codeExample: `# Conditional Statements

# Basic if-else
age = 18
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# if-elif-else
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'F'
print(f"Grade: {grade}")

# Nested conditionals
num = 15
if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Non-positive number")

# Ternary operator
status = "Pass" if score >= 50 else "Fail"
print(status)`,
      practiceProblems: [
        "Check if a number is positive, negative, or zero",
        "Find the largest of three numbers",
        "Determine if a year is a leap year",
        "Grade calculator based on percentage"
      ]
    },

    loops: {
      title: "Loops (for, while)",
      overview: "Master iteration using for loops and while loops in Python.",
      whatYouLearn: [
        "For loops with range()",
        "Iterating through lists, tuples, and strings",
        "While loops and loop conditions",
        "Break, continue, and pass statements",
        "Nested loops and loop patterns"
      ],
      codeExample: `# Loops in Python

# For loop with range
for i in range(5):
    print(i, end=' ')  # 0 1 2 3 4
print()

# For loop through list
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count, end=' ')
    count += 1
print()

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i, end=' ')  # 0 1 2 4 5 6
print()

# Nested loops - multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end='  ')
    print()`,
      practiceProblems: [
        "Print numbers from 1 to 100",
        "Calculate factorial of a number",
        "Print Fibonacci series up to n terms",
        "Create a pattern using nested loops"
      ]
    },

    strings: {
      title: "String Manipulation",
      overview: "Learn string operations, methods, and formatting techniques.",
      whatYouLearn: [
        "String creation and concatenation",
        "String indexing and slicing",
        "Common string methods (upper, lower, strip, split, etc.)",
        "String formatting (f-strings, format(), %)",
        "String immutability and operations"
      ],
      codeExample: `# String Manipulation

text = "Hello, Python!"

# Indexing and slicing
print(text[0])        # H
print(text[-1])       # !
print(text[0:5])      # Hello
print(text[7:])       # Python!
print(text[::-1])     # !nohtyP ,olleH (reverse)

# String methods
print(text.upper())          # HELLO, PYTHON!
print(text.lower())          # hello, python!
print(text.replace("Python", "World"))  # Hello, World!
print(text.split(", "))      # ['Hello', 'Python!']

# String formatting
name = "Alice"
age = 25
# f-strings (Python 3.6+)
print(f"My name is {name} and I'm {age} years old")
# format() method
print("My name is {} and I'm {} years old".format(name, age))

# String operations
s1 = "Hello"
s2 = "World"
print(s1 + " " + s2)  # Concatenation
print(s1 * 3)         # HelloHelloHello
print(len(s1))        # 5`,
      practiceProblems: [
        "Reverse a string without using [::-1]",
        "Count vowels in a string",
        "Check if a string is a palindrome",
        "Remove all spaces from a string"
      ]
    },

    lists: {
      title: "Lists & List Comprehension",
      overview: "Master Python lists, the most versatile data structure.",
      whatYouLearn: [
        "Creating and accessing lists",
        "List methods (append, insert, remove, pop, etc.)",
        "List slicing and indexing",
        "List comprehensions for concise code",
        "Nested lists and 2D arrays"
      ],
      codeExample: `# Lists in Python

# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [[1, 2], [3, 4], [5, 6]]

# Accessing elements
print(numbers[0])      # 1
print(numbers[-1])     # 5
print(numbers[1:4])    # [2, 3, 4]

# List methods
fruits = ['apple', 'banana']
fruits.append('cherry')        # Add at end
fruits.insert(1, 'orange')     # Insert at index
fruits.remove('banana')        # Remove by value
last = fruits.pop()            # Remove and return last
print(fruits)

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Filtering with comprehension
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])  # 6`,
      practiceProblems: [
        "Find the sum and average of a list",
        "Remove duplicates from a list",
        "Merge two sorted lists",
        "Rotate a list by k positions"
      ]
    },

    tuples: {
      title: "Tuples & Sets",
      overview: "Learn about immutable tuples and unique collection sets.",
      whatYouLearn: [
        "Creating and accessing tuples",
        "Tuple immutability and benefits",
        "Tuple packing and unpacking",
        "Set operations (union, intersection, difference)",
        "When to use tuples vs lists vs sets"
      ],
      codeExample: `# Tuples and Sets

# Tuples (immutable)
point = (3, 4)
print(point[0])  # 3
# point[0] = 5   # Error! Tuples are immutable

# Tuple packing and unpacking
coordinates = 10, 20, 30
x, y, z = coordinates
print(f"x={x}, y={y}, z={z}")

# Tuple methods
numbers = (1, 2, 2, 3, 2, 4)
print(numbers.count(2))   # 3
print(numbers.index(3))   # 3

# Sets (unique, unordered)
fruits = {'apple', 'banana', 'cherry'}
fruits.add('orange')
fruits.add('apple')  # Won't add duplicate
print(fruits)

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(set1 | set2)  # Union: {1, 2, 3, 4, 5, 6}
print(set1 & set2)  # Intersection: {3, 4}
print(set1 - set2)  # Difference: {1, 2}

# Remove duplicates from list
nums = [1, 2, 2, 3, 4, 4, 5]
unique = list(set(nums))
print(unique)`,
      practiceProblems: [
        "Swap two variables using tuple unpacking",
        "Find common elements in two lists",
        "Remove duplicates while preserving order",
        "Check if two sets are disjoint"
      ]
    },

    dictionaries: {
      title: "Dictionaries",
      overview: "Master Python dictionaries for key-value pair storage.",
      whatYouLearn: [
        "Creating and accessing dictionaries",
        "Dictionary methods (keys, values, items, get, etc.)",
        "Adding, updating, and deleting items",
        "Dictionary comprehension",
        "Nested dictionaries"
      ],
      codeExample: `# Dictionaries in Python

# Creating dictionaries
person = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

# Accessing values
print(person['name'])        # Alice
print(person.get('age'))     # 25
print(person.get('phone', 'N/A'))  # N/A (default)

# Adding/updating
person['email'] = 'alice@example.com'
person['age'] = 26

# Deleting
del person['city']
removed = person.pop('email')

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age'])
print(person.values())  # dict_values(['Alice', 26])
print(person.items())   # dict_items([('name', 'Alice'), ('age', 26)])

# Iterating
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Nested dictionary
students = {
    'john': {'age': 20, 'grade': 'A'},
    'jane': {'age': 22, 'grade': 'B'}
}
print(students['john']['grade'])  # A`,
      practiceProblems: [
        "Count character frequency in a string",
        "Merge two dictionaries",
        "Find the key with maximum value",
        "Group items by a property"
      ]
    },

    functions: {
      title: "Functions & Lambda",
      overview: "Learn to write reusable code with functions and lambda expressions.",
      whatYouLearn: [
        "Defining and calling functions",
        "Parameters, arguments, and return values",
        "Default arguments and keyword arguments",
        "Lambda functions (anonymous functions)",
        "Scope and variable lifetime"
      ],
      codeExample: `# Functions in Python

# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# Multiple parameters and return values
def calculate(a, b):
    return a + b, a - b, a * b

sum_val, diff, prod = calculate(10, 5)
print(f"Sum: {sum_val}, Diff: {diff}, Prod: {prod}")

# Default arguments
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (uses default)
print(power(5, 3))   # 125

# Keyword arguments
def introduce(name, age, city):
    print(f"{name} is {age} years old from {city}")

introduce(age=25, city="NYC", name="Bob")

# Lambda functions
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with map, filter
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(doubled)  # [2, 4, 6, 8, 10]
print(evens)    # [2, 4]

# Variable scope
x = 10  # Global
def func():
    x = 5  # Local
    print(f"Inside: {x}")
func()
print(f"Outside: {x}")`,
      practiceProblems: [
        "Write a function to check if a number is prime",
        "Create a function to find factorial recursively",
        "Use lambda to sort a list of tuples",
        "Write a function with variable number of arguments"
      ]
    },

    modules: {
      title: "Modules & Packages",
      overview: "Learn to organize and reuse code with modules and packages.",
      whatYouLearn: [
        "Importing modules (import, from...import)",
        "Creating custom modules",
        "Using built-in modules (math, random, datetime, etc.)",
        "Understanding __name__ == '__main__'",
        "Package structure and __init__.py"
      ],
      codeExample: `# Modules and Packages

# Importing entire module
import math
print(math.pi)        # 3.14159...
print(math.sqrt(16))  # 4.0

# Importing specific items
from math import factorial, ceil
print(factorial(5))   # 120
print(ceil(4.2))      # 5

# Importing with alias
import random as rnd
print(rnd.randint(1, 10))

# Common modules
import datetime
now = datetime.datetime.now()
print(f"Current time: {now}")

# Creating custom module (save as mymodule.py)
# mymodule.py content:
"""
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159
"""

# Using custom module
# import mymodule
# print(mymodule.greet("Alice"))
# print(mymodule.add(5, 3))

# __name__ check
if __name__ == '__main__':
    print("This runs only when script is executed directly")
    # Test code here`,
      practiceProblems: [
        "Use random module to simulate dice rolls",
        "Work with datetime to calculate age",
        "Create a utility module with helper functions",
        "Use os module to list files in a directory"
      ]
    }
  },

  // ==================== INTERMEDIATE ====================
  intermediate: {
    oop: {
      title: "Object-Oriented Programming",
      overview: "Learn OOP concepts: classes, objects, inheritance, and polymorphism.",
      whatYouLearn: [
        "Classes and objects",
        "Constructors (__init__) and attributes",
        "Methods (instance, class, static)",
        "Inheritance and method overriding",
        "Encapsulation and polymorphism"
      ],
      codeExample: `# Object-Oriented Programming

# Basic class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"

# Creating objects
person1 = Person("Alice", 25)
print(person1.greet())

# Inheritance
class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade
    
    def study(self):
        return f"{self.name} is studying"

student = Student("Bob", 20, "A")
print(student.greet())   # Inherited method
print(student.study())   # Own method

# Class and static methods
class Math:
    pi = 3.14159
    
    @classmethod
    def circle_area(cls, radius):
        return cls.pi * radius ** 2
    
    @staticmethod
    def add(a, b):
        return a + b

print(Math.circle_area(5))
print(Math.add(10, 20))`,
      practiceProblems: [
        "Create a BankAccount class with deposit/withdraw",
        "Implement a Vehicle class hierarchy",
        "Build a Library system with Book and Member classes",
        "Create a Calculator class with multiple operations"
      ]
    },

    // Add more intermediate topics...
  },

  // ==================== ADVANCED ====================
  advanced: {
    complexity: {
      title: "Time & Space Complexity",
      overview: "Understand Big O notation and analyze algorithm efficiency.",
      whatYouLearn: [
        "Big O, Big Omega, and Big Theta notation",
        "Common time complexities (O(1), O(n), O(log n), O(n²))",
        "Space complexity analysis",
        "Best, average, and worst case scenarios",
        "Analyzing loops and recursive functions"
      ],
      codeExample: `# Time Complexity Examples

# O(1) - Constant Time
def get_first(arr):
    return arr[0] if arr else None

# O(n) - Linear Time
def find_max(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# O(n²) - Quadratic Time
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# O(log n) - Logarithmic Time
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# O(n log n) - Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)`,
      practiceProblems: [
        "Analyze time complexity of given code",
        "Optimize O(n²) solution to O(n)",
        "Calculate space complexity of recursive functions",
        "Compare different sorting algorithms"
      ]
    },

    // Add more advanced topics...
  }
};

// Helper function to get topic data
export function getTopicData(category, topic) {
  return topicsData[category]?.[topic] || null;
}

// Get all topics for a category
export function getCategoryTopics(category) {
  return topicsData[category] || {};
}
