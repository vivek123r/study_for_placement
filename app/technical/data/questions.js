// All technical interview questions organized by category

export const technicalQuestions = {
  oop: [
    { id: 1, question: 'What are the four pillars of OOP? Explain each.', difficulty: 'Easy', answer: 'The four pillars are:\n\n1. Encapsulation: Bundling data and methods into a single unit (class) and restricting access to internal details. Use private variables with public getters/setters.\n\n2. Inheritance: Mechanism where a child class inherits properties and methods from a parent class. Promotes code reusability.\n\n3. Polymorphism: Ability to take many forms. Types: Compile-time (method overloading) and Runtime (method overriding).\n\n4. Abstraction: Hiding implementation details and showing only essential features. Achieved through abstract classes and interfaces.' },
    { id: 2, question: 'Difference between Abstract Class and Interface?', difficulty: 'Medium', answer: 'Abstract Class:\n- Can have both abstract and concrete methods\n- Can have constructors\n- Can have instance variables (any access modifier)\n- Supports single inheritance\n- Use when classes share common behavior\n\nInterface:\n- Only abstract methods (Java 7) or default/static methods (Java 8+)\n- Cannot have constructors\n- Variables are public static final by default\n- Supports multiple inheritance\n- Use to define a contract that classes must follow' },
    { id: 3, question: 'What is method overloading vs method overriding?', difficulty: 'Easy', answer: 'Method Overloading (Compile-time Polymorphism):\n- Multiple methods with same name but different parameters\n- Happens in the same class\n- Parameters must differ in number, type, or order\n\nMethod Overriding (Runtime Polymorphism):\n- Subclass provides specific implementation of parent class method\n- Same method signature (name, parameters, return type)\n- Requires inheritance' },
    { id: 4, question: 'Composition vs Inheritance: When to use which?', difficulty: 'Medium', answer: 'This addresses the "is-a" versus "has-a" relationship.\n\nInheritance (is-a): A subclass inherits properties of its parent. Use when one object is a type of another (e.g., Dog is an Animal). Best for defining a general type hierarchy.\n\nComposition (has-a): A class contains instances of other classes to gain their functionality. Use when one object has another (e.g., Car has an Engine). This is generally preferred for flexibility and avoiding the rigid structure of inheritance.' },
    { id: 5, question: 'Explain Thread Safety, Immutability, and Synchronization in OOP.', difficulty: 'Hard', answer: 'Thread Safety: Code is thread-safe if it can be executed concurrently by multiple threads without causing race conditions or data corruption.\n\nImmutability: An object whose state cannot be modified after it is created. Immutable objects are inherently thread-safe as their state never changes, eliminating the need for explicit locking.\n\nSynchronization: A mechanism (like locks or mutexes) used to control access to shared resources by multiple threads. It ensures that only one thread can access a critical section of code at a time, preventing race conditions.' },
    { id: 6, question: 'Explain the Garbage Collection process and its goals.', difficulty: 'Medium', answer: 'Garbage Collection (GC) is a form of automatic memory management that attempts to reclaim memory occupied by objects that are no longer referenced by the program (unreachable memory).\n\nGoals: Free the programmer from manual memory deallocation, prevent memory leaks, and minimize "stop-the-world" pauses (where the application freezes during collection). GC relies on the "Reachability" concept to identify live objects.' },
    { id: 7, question: 'Explain the SOLID principles in detail.', difficulty: 'Hard', answer: 'SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.\n\nS - Single Responsibility Principle: A class should have only one reason to change.\nO - Open/Closed Principle: Software entities should be open for extension but closed for modification.\nL - Liskov Substitution Principle: Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.\nI - Interface Segregation Principle: Clients should not be forced to depend on interfaces they do not use.\nD - Dependency Inversion Principle: High-level modules should not depend on low-level modules; both should depend on abstractions.' },
    { id: 8, question: 'What are Design Patterns and name three common ones.', difficulty: 'Medium', answer: 'Design Patterns are reusable solutions to common problems in software design.\n\n- Singleton (Creational): Ensures a class has only one instance and provides a global point of access.\n- Factory Method (Creational): Defines an interface for creating an object, but lets subclasses decide which class to instantiate.\n- Observer (Behavioral): Defines a one-to-many dependency so that when one object changes state, all its dependents are notified and updated automatically.' },
    { id: 9, question: 'Differentiate between Association, Aggregation, and Composition.', difficulty: 'Medium', answer: 'These describe relationships between objects (Classes).\n\n- Association: A weak link where one class uses another.\n- Aggregation (Has-A, Weak): "A contains B, but B can exist without A." (e.g., Department → Teacher).\n- Composition (Has-A, Strong): "A contains B, and B cannot exist without A." (e.g., Car → Engine).' },
    { id: 10, question: 'Explain the difference between Stack and Heap memory in OOP.', difficulty: 'Medium', answer: 'Stack: Used for static memory allocation. Stores local variables, function calls, and reference variables (pointers). Fast access. Memory is managed automatically by OS (LIFO).\n\nHeap: Used for dynamic memory allocation. Stores actual objects (instances). Slower access. Managed by the Garbage Collector.' },
    { id: 11, question: 'What is Operator Overloading?', difficulty: 'Medium', answer: 'Operator Overloading is a form of polymorphism where operators (like +, -, ×) are redefined to perform specific operations based on the types of the operands. This allows for defining custom behaviors for standard operators when applied to user-defined objects.' },
    { id: 12, question: 'Explain the purpose of the `super` keyword.', difficulty: 'Easy', answer: 'The `super` keyword is used inside a subclass method or constructor to refer to the immediate parent class\'s members (variables, methods, or constructors). It is primarily used to invoke the parent class constructor or to access an overridden method from the parent class.' },
    { id: 13, question: 'What is a wrapper class? Give an example.', difficulty: 'Easy', answer: 'A Wrapper Class is a class that encapsulates a primitive data type within an object. This is necessary in many frameworks/collections that can only handle object types.\n\nExample: `int` (primitive) is wrapped by the `Integer` (class).' },
    { id: 14, question: 'Describe the principle of "Program to an Interface, not an Implementation."', difficulty: 'Medium', answer: 'This principle promotes flexibility and loose coupling. When you program to an interface (abstraction), you rely on the contract defined by the interface, not the specific details of a concrete class. This allows you to easily swap out implementations without changing the calling code.' },
    { id: 15, question: 'Explain Covariance and Contravariance.', difficulty: 'Hard', answer: 'These relate to type safety during polymorphism (subtyping).\n\n- Covariance: Allows a method to return a more specific type than its parent\'s method (subclass return type).\n- Contravariance: Allows a method to accept arguments of a more general type than its parent\'s method (superclass argument type).' },
    { id: 16, question: 'What is multiple inheritance and why do languages like Java avoid it for classes?', difficulty: 'Medium', answer: 'Multiple Inheritance allows a class to inherit from more than one direct parent class. Java avoids it for classes because it leads to the Diamond Problem, creating ambiguity about which parent\'s method implementation to use, making code unreliable. (It supports multiple inheritance of type via interfaces).' },
    { id: 17, question: 'Explain Dependency Injection (DI) and Inversion of Control (IoC).', difficulty: 'Medium', answer: 'Inversion of Control (IoC): A principle where the flow of a program is inverted; the framework or runtime controls the flow, not the application code.\n\nDependency Injection (DI): A concrete technique to achieve IoC, where objects receive the objects they depend on (their dependencies) from an external source (usually a container) rather than creating them internally.' },
    { id: 18, question: 'What are inner classes and static nested classes?', difficulty: 'Medium', answer: 'Inner classes are associated with an instance of the outer class and can access all its members (even private ones).\n\nStatic nested classes are also defined inside another class but behave like top-level classes and cannot access non-static members of the outer class.' },
    { id: 19, question: 'Explain the difference between early binding (static) and late binding (dynamic).', difficulty: 'Medium', answer: 'Early Binding (Static): The linking of a function call to a definition is done at compile time. Primarily applies to method overloading. Faster execution.\n\nLate Binding (Dynamic): The linking is deferred until runtime. The decision is based on the actual object type, allowing runtime polymorphism. Primarily applies to method overriding.' },
    { id: 20, question: 'What is the Diamond Problem in multiple inheritance?', difficulty: 'Medium', answer: 'The Diamond Problem occurs when a class inherits from two classes that both inherit from a common parent class, creating ambiguity about which parent\'s method to use.\n\nExample: Class D inherits from B and C, which both inherit from A. If A has a method, which version does D use?' }
  ],
  dsa: [
    { id: 1, question: 'Explain time complexity and Big O notation with examples.', difficulty: 'Easy', answer: 'Time Complexity measures how execution time grows with input size (n).\n\nCommon complexities:\n• O(1) - Constant: Array access, hash table lookup\n• O(log n) - Logarithmic: Binary search\n• O(n) - Linear: Linear search, array traversal\n• O(n log n) - Log-linear: Merge sort, quicksort (average)\n• O(n²) - Quadratic: Bubble sort, nested loops\n• O(2ⁿ) - Exponential: Recursive Fibonacci\n\nRule: Drop constants and lower-order terms. O(3n² + 5n + 2) → O(n²)' },
    { id: 2, question: 'Array vs Linked List - When to use which?', difficulty: 'Medium', answer: 'Array:\n✓ Random access: O(1)\n✓ Cache-friendly (contiguous memory)\n✗ Fixed size (or expensive resize)\n✗ Insertion/deletion: O(n)\nUse when: Need frequent random access, size known\n\nLinked List:\n✓ Dynamic size\n✓ Insertion/deletion at known position: O(1)\n✗ Random access: O(n)\n✗ Extra memory for pointers\nUse when: Frequent insertions/deletions, size unknown' },
    { id: 3, question: 'Explain different types of trees and their use cases.', difficulty: 'Medium', answer: '1. Binary Tree: Each node has at most 2 children\n2. Binary Search Tree (BST): Left < Root < Right. Search/Insert/Delete: O(log n) average, O(n) worst\n3. AVL Tree: Self-balancing BST. Height difference ≤ 1. Guaranteed O(log n)\n4. Red-Black Tree: Self-balancing with color property. Used in TreeMap, TreeSet\n5. B-Tree: Multi-way tree for disk storage. Used in databases, file systems\n6. Heap: Complete binary tree. Min-heap or Max-heap. Used in priority queues\n7. Trie: Tree for strings. Each node represents a character. Used in autocomplete, spell checkers' },
    { id: 4, question: 'What is hashing? Explain collision resolution techniques.', difficulty: 'Medium', answer: 'Hashing converts a key into an index using a hash function for O(1) average-case operations.\n\nCollision Resolution:\n\n1. Separate Chaining: Each bucket has a linked list.\n2. Open Addressing: All elements stored in array itself (Linear/Quadratic Probing or Double Hashing).' },
    { id: 5, question: 'Explain BFS vs DFS. When to use each?', difficulty: 'Medium', answer: 'BFS (Breadth-First Search): Explores level by level using Queue. Finds shortest path in unweighted graphs. Space: O(w).\n\nDFS (Depth-First Search): Explores as deep as possible using Stack/Recursion. Used for topological sort, cycle detection, and backtracking. Space: O(h).' },
    { id: 6, question: 'What is Dynamic Programming? Explain with example.', difficulty: 'Hard', answer: 'Dynamic Programming (DP) solves complex problems by breaking them into simpler overlapping subproblems and storing results (memoization/tabulation) to avoid recomputation. Requires Optimal Substructure. Used for problems like Fibonacci, Knapsack, and Longest Common Subsequence.' },
    { id: 7, question: 'Explain different sorting algorithms and their complexities.', difficulty: 'Medium', answer: '- Bubble/Selection/Insertion Sort: O(n²) time, O(1) space. Simple, slow.\n- Merge Sort: O(n log n) time, O(n) space. Stable. Divide and conquer.\n- Quick Sort: O(n log n) average, O(n²) worst. O(log n) space. Unstable. Partition around pivot.' },
    { id: 8, question: 'Describe the three main Tree Traversal methods.', difficulty: 'Easy', answer: '1. In-order Traversal (Left, Root, Right): Used for BSTs to retrieve data in sorted order.\n2. Pre-order Traversal (Root, Left, Right): Used to create a copy of a tree.\n3. Post-order Traversal (Left, Right, Root): Used to delete a tree (children before parent).' },
    { id: 9, question: 'Compare Adjacency Matrix and Adjacency List for Graph representation.', difficulty: 'Medium', answer: 'Adjacency Matrix: 2D array. Space: O(V²). Good for dense graphs. Edge check: O(1).\n\nAdjacency List: Array of lists. Space: O(V + E). Good for sparse graphs. Edge check: O(degree).' },
    { id: 10, question: 'What is Amortized Analysis and when is it useful?', difficulty: 'Hard', answer: 'Amortized Analysis calculates the average cost of a sequence of operations, where infrequent expensive operations are "paid for" by many inexpensive operations. It is useful when analyzing dynamic data structures like dynamic arrays (where resizing is rare and costly) or Fibonacci heaps.' },
    { id: 11, question: 'Explain the Heap data structure and its time complexity for operations.', difficulty: 'Medium', answer: 'A Heap is a complete binary tree satisfying the heap property (Min or Max).\n\nOperations: Insertion: O(log n), Deletion (of root): O(log n), Peek (of root): O(1).\nUse Case: Efficient Priority Queue implementation.' },
    { id: 12, question: 'What is a Trie (Prefix Tree) and where is it used?', difficulty: 'Medium', answer: 'A Trie is a tree structure used for storing strings where common prefixes are shared among nodes. Search/Insertion is O(L), where L is the length of the key.\n\nUse Cases: Autocomplete features, spell checkers, and IP routing tables.' },
    { id: 13, question: 'Differentiate between Stack and Queue.', difficulty: 'Easy', answer: 'Stack (LIFO - Last In, First Out): Push/Pop from the top. Use for function calls, expression evaluation.\n\nQueue (FIFO - First In, First Out): Enqueue at one end, Dequeue from the other. Use for job scheduling, BFS.' },
    { id: 14, question: 'What is a Skip List and how does it improve Linked List performance?', difficulty: 'Hard', answer: 'A Skip List is a probabilistic data structure built on top of multiple parallel sorted linked lists. It uses multiple "levels" of links to enable search operations in O(log n) average complexity, similar to a balanced BST.' },
    { id: 15, question: 'Explain the concept of Topological Sort.', difficulty: 'Medium', answer: 'Topological Sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u → v, vertex u comes before vertex v. Used for scheduling tasks with dependencies.' },
    { id: 16, question: 'Explain the workings of Dijkstra\'s algorithm.', difficulty: 'Medium', answer: 'Dijkstra\'s algorithm finds the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights. It uses a Min-Heap (Priority Queue) to greedily select the unvisited node with the smallest known distance from the source.' },
    { id: 17, question: 'What are the components of a Hash Table (Hash Map)?', difficulty: 'Medium', answer: '1. Key (Input data)\n2. Hash Function (Converts key to index)\n3. Bucket/Slot (Index in array)\n4. Value (Data stored)\n5. Collision Resolution (Chaining/Open Addressing)' },
    { id: 18, question: 'What is the difference between Θ (Theta) and O (Big O) notation?', difficulty: 'Hard', answer: 'O (Big O): Represents the Upper Bound (Worst Case) complexity. Guarantees the running time will not be worse than this function.\n\nΘ (Theta): Represents the Tight Bound (Average/Exact Case) complexity. The running time is bounded both above and below by this function.' },
    { id: 19, question: 'Explain the use of a Minimum Spanning Tree (MST). Name two algorithms.', difficulty: 'Medium', answer: 'An MST is a subgraph of an undirected, connected, weighted graph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight.\n\nAlgorithms: Kruskal\'s Algorithm (uses DSU) and Prim\'s Algorithm (uses Priority Queue).' },
    { id: 20, question: 'What is an NP-complete problem?', difficulty: 'Hard', answer: 'NP-complete problems are the hardest problems in the NP complexity class (Non-deterministic Polynomial time). They are verifiable in polynomial time, and if an efficient (polynomial time) algorithm exists for any NP-complete problem, it exists for all of them. (e.g., Traveling Salesman, 3-SAT).' }
  ],
  dbms: [
    { id: 1, question: 'Explain ACID properties with real-world examples.', difficulty: 'Easy', answer: 'A - Atomicity: All or nothing (Bank transfer fails midway, no money deducted).\n\nC - Consistency: Database moves from one valid state to another.\n\nI - Isolation: Concurrent transactions don\'t interfere (Two people booking last seat).\n\nD - Durability: Once committed, changes persist even after system failure.' },
    { id: 2, question: 'What is Normalization? Explain up to 3NF with examples.', difficulty: 'Medium', answer: 'Normalization organizes data to reduce redundancy and improve integrity.\n\n1NF: Atomic values (no multi-valued attributes).\n\n2NF: In 1NF + No partial dependency (non-key attribute depends on part of composite key).\n\n3NF: In 2NF + No transitive dependency (non-key → non-key).' },
    { id: 3, question: 'Primary Key vs Foreign Key vs Unique Key vs Candidate Key?', difficulty: 'Easy', answer: 'Primary Key: Uniquely identifies each record, cannot be NULL, only one per table.\n\nForeign Key: References Primary Key of another table, can be NULL, enforces referential integrity.\n\nUnique Key: Ensures all values are unique, can have one NULL, multiple allowed.\n\nCandidate Key: Minimal set of attributes that can uniquely identify records. One becomes Primary Key.' },
    { id: 4, question: 'Explain different types of JOINs with examples.', difficulty: 'Medium', answer: '1. INNER JOIN: Only matching records.\n\n2. LEFT JOIN: All from left table + matching from right.\n\n3. RIGHT JOIN: All from right table + matching from left.\n\n4. FULL JOIN: All records from both tables, with NULLs where there is no match.' },
    { id: 5, question: 'What is an Index in a database and why is it used?', difficulty: 'Easy', answer: 'An Index is a data structure (like a B-Tree) that speeds up data retrieval.\n\nUses: Faster SELECT queries, especially with WHERE clauses.\n\nTrade-off: Indexes consume space and slow down INSERT, UPDATE, and DELETE operations.' },
    { id: 6, question: 'Explain Transaction Isolation Levels.', difficulty: 'Hard', answer: 'Isolation levels define how and when the changes made by one transaction become visible to others:\n\n1. Read Uncommitted (Allows Dirty Reads).\n2. Read Committed (Prevents Dirty Reads).\n3. Repeatable Read (Prevents Non-repeatable Reads).\n4. Serializable (Prevents all anomalies).' },
    { id: 7, question: 'What is the difference between SQL and NoSQL databases?', difficulty: 'Medium', answer: 'SQL (Relational): Fixed schemas, vertical scaling, follows ACID (strong consistency). Used for complex joins/financial data.\n\nNoSQL (Non-Relational): Dynamic schemas, horizontal scaling, follows BASE (eventual consistency). Used for real-time data, flexible models.' },
    { id: 8, question: 'Explain BCNF (Boyce-Codd Normal Form) and when it\'s necessary.', difficulty: 'Hard', answer: 'BCNF is stricter than 3NF. A table is in BCNF if and only if for every non-trivial functional dependency X → Y, X is a superkey of the relation. It\'s necessary when 3NF fails due to overlapping candidate keys that cause redundancy.' },
    { id: 9, question: 'What is Denormalization and when is it justified?', difficulty: 'Medium', answer: 'Denormalization is intentionally introducing redundancy to improve read performance (faster querying) at the expense of write performance and increased data redundancy. Common in OLAP/Reporting systems where analysis speed is paramount.' },
    { id: 10, question: 'What are Stored Procedures and Triggers?', difficulty: 'Medium', answer: 'Stored Procedure: A prepared SQL code segment saved in the database for execution on demand. Offers security and pre-compiled performance benefits.\n\nTrigger: A stored procedure that automatically executes (fires) in response to a specific database event (INSERT, UPDATE, DELETE).' },
    { id: 11, question: 'Difference between Clustered and Non-Clustered Indexes.', difficulty: 'Medium', answer: 'Clustered Index: Determines the physical order of data storage on disk. A table can have only one (usually the Primary Key).\n\nNon-Clustered Index: Does not change the physical order. It contains the index keys and pointers to the data location. A table can have many.' },
    { id: 12, question: 'Explain the three data anomalies in database design.', difficulty: 'Medium', answer: '1. Insertion Anomaly: Cannot insert data without also inserting unrelated data.\n2. Deletion Anomaly: Deleting one piece of data unintentionally removes other, necessary data.\n3. Update Anomaly: Modifying a data item requires updating multiple records, risking inconsistency.' },
    { id: 13, question: 'What is SQL Injection and how can it be prevented?', difficulty: 'Easy', answer: 'SQL Injection is a vulnerability allowing an attacker to interfere with database queries.\n\nPrevention: Always use Prepared Statements (parameterized queries), which ensure user input is treated as data, not executable SQL code.' },
    { id: 14, question: 'Differentiate between OLAP and OLTP systems.', difficulty: 'Medium', answer: 'OLTP (Online Transaction Processing): Manages day-to-day transactions (e.g., e-commerce orders). High volume of small read/write/update operations. Focus on ACID.\n\nOLAP (Online Analytical Processing): Analyzes large historical data sets. Low volume of complex read-only queries. Focus on reporting and data warehousing.' },
    { id: 15, question: 'What is a Database Schema vs Database Instance?', difficulty: 'Easy', answer: 'Schema: The design or structure of the database (tables, constraints, relationships). It is static.\n\nInstance: The actual content or snapshot of the data in the database at a specific moment in time. It is dynamic.' },
    { id: 16, question: 'Explain the concept of Two-Phase Commit (2PC).', difficulty: 'Hard', answer: '2PC is a protocol for distributed transactions ensuring all participating databases either commit or abort together.\n\nPhase 1 (Vote): Coordinator asks participants to prepare and vote (YES/NO).\nPhase 2 (Decision): If all vote YES, coordinator sends COMMIT. If any vote NO, coordinator sends ABORT.' },
    { id: 17, question: 'What are Views in SQL and how are they used?', difficulty: 'Medium', answer: 'A View is a virtual table based on the result-set of an SQL query. It acts as a security layer (showing only necessary columns/rows) and simplifies complex queries by pre-defining joins.' },
    { id: 18, question: 'What is the difference between TRUNCATE, DELETE, and DROP?', difficulty: 'Medium', answer: 'TRUNCATE (DDL): Removes all rows, keeps structure, fast, cannot be rolled back.\n\nDELETE (DML): Removes specific rows (or all), keeps structure, slow, can be rolled back.\n\nDROP (DDL): Removes the entire table (structure, data, and indexes). Cannot be rolled back.' },
    { id: 19, question: 'What is a functional dependency in the context of normalization?', difficulty: 'Medium', answer: 'A Functional Dependency is a constraint where the values of one set of attributes (A) determine the values of another set (B). Notated as A → B. It is the core concept used to define the normal forms.' },
    { id: 20, question: 'What are the isolation levels in SQL (Recap)?', difficulty: 'Easy', answer: 'The four standard isolation levels: Read Uncommitted, Read Committed, Repeatable Read, and Serializable. They trade off concurrency (speed) against data integrity (preventing read anomalies).' }
  ],
  os: [
    { id: 1, question: 'Process vs Thread: What\'s the difference?', difficulty: 'Easy', answer: 'Process: An instance of a program being executed. Has its own separate memory space. IPC is expensive.\n\nThread: A segment of a process. Threads within the same process share the memory space. Context switching is faster.' },
    { id: 2, question: 'What is a Deadlock? List the four necessary conditions.', difficulty: 'Medium', answer: 'A Deadlock occurs when two or more processes are blocked forever, waiting for resources held by each other.\n\nConditions: 1. Mutual Exclusion. 2. Hold and Wait. 3. No Preemption. 4. Circular Wait.' },
    { id: 3, question: 'Explain Paging and Segmentation in Memory Management.', difficulty: 'Medium', answer: 'Paging: Divides logical space into fixed-size Pages and physical memory into fixed-size Frames. Solves external fragmentation.\n\nSegmentation: Divides logical space into variable-sized Segments (logical units like code/data).' },
    { id: 4, question: 'Describe common CPU Scheduling Algorithms.', difficulty: 'Medium', answer: '1. FCFS (First-Come, First-Served): Simplest, non-preemptive.\n2. SJF (Shortest Job First): Optimal for minimizing average wait time.\n3. Priority Scheduling: Process with highest priority runs first (risks starvation).\n4. Round Robin: Preemptive, uses time slices (fair for time-sharing systems).' },
    { id: 5, question: 'Mutex vs Semaphore vs Monitor: Explain Synchronization Primitives.', difficulty: 'Hard', answer: 'Mutex: A simple lock used for Mutual Exclusion. Only one thread can acquire it.\n\nSemaphore: A signaling mechanism (counter). Can be used for mutual exclusion (Binary Semaphore, count=1) or resource pooling (Counting Semaphore, count>1).\n\nMonitor: A higher-level construct combining critical section code and data, using a mutex and condition variables.' },
    { id: 6, question: 'Explain Virtual Memory and its main purpose.', difficulty: 'Easy', answer: 'Virtual Memory uses disk storage (Swap Space) as an extension of RAM, creating the illusion of a very large, contiguous memory space. Its main purpose is to allow programs larger than physical RAM to run and to provide memory protection between processes.' },
    { id: 7, question: 'What is a System Call? Give examples.', difficulty: 'Medium', answer: 'A System Call is the mechanism used by application programs to request a service from the operating system\'s kernel. They provide an interface between a process and the OS.\n\nExamples: read(), write(), fork(), exit().' },
    { id: 8, question: 'Explain the difference between User-Level Threads and Kernel-Level Threads.', difficulty: 'Medium', answer: 'User-Level Threads: Managed by the application library. Kernel is unaware. Fast switching, but entire process blocks if one thread blocks.\n\nKernel-Level Threads: Managed directly by the OS. Slower switching, but better concurrency (one thread blocking doesn\'t stop the process).' },
    { id: 9, question: 'Describe the concept of Context Switching and its overhead.', difficulty: 'Easy', answer: 'Context Switching is the process where the OS saves the state (context) of the current running process and loads the saved state of the next process. This process is pure overhead because no useful work is done, hence minimizing switches is key.' },
    { id: 10, question: 'What are the differences between Monolithic and Microkernel architectures?', difficulty: 'Hard', answer: 'Monolithic: Entire OS kernel runs in a single address space. Fast but less reliable (a bug can crash the whole kernel).\n\nMicrokernel: Only essential services (IPC, scheduling) run in kernel mode. Other services run as user-level processes. More reliable but slower due to message passing (IPC).' },
    { id: 11, question: 'Explain the various Inter-Process Communication (IPC) mechanisms.', difficulty: 'Medium', answer: 'IPC methods: Pipes (simple, one-way), Message Passing, and Shared Memory (fastest, requires synchronization). Sockets are used for network communication.' },
    { id: 12, question: 'What is Internal Fragmentation vs External Fragmentation?', difficulty: 'Medium', answer: 'Internal Fragmentation: Unused space within an allocated memory block (e.g., wasted space inside a page frame).\n\nExternal Fragmentation: Total available memory is enough, but it is scattered in small, non-contiguous chunks, making it unusable. (Solved by Paging).' },
    { id: 13, question: 'What is the concept of Thrashing in Virtual Memory?', difficulty: 'Hard', answer: 'Thrashing is a condition where a process spends more time paging (swapping pages in and out of main memory) than executing instructions. It causes a drastic drop in system performance.' },
    { id: 14, question: 'Explain the Banker\'s Algorithm for Deadlock Avoidance.', difficulty: 'Hard', answer: 'The Banker\'s Algorithm determines if allocating resources to a requesting process will leave the system in a safe state (a sequence exists that can satisfy all processes without causing deadlock). It requires knowing the maximum resource needs in advance.' },
    { id: 15, question: 'What is a Race Condition? How is it resolved?', difficulty: 'Medium', answer: 'A Race Condition occurs when the outcome of a program depends on the unpredictable sequence of multiple threads accessing/modifying shared data.\n\nResolution: Use synchronization primitives like Mutexes or Semaphores to protect the Critical Section of code.' },
    { id: 16, question: 'Describe the common Page Replacement Algorithms.', difficulty: 'Medium', answer: '1. FIFO (First-In, First-Out): Removes the oldest page.\n2. LRU (Least Recently Used): Removes the page that has not been used for the longest time (generally effective).\n3. Optimal (OPT): Removes the page that will not be used for the longest period (impossible in practice).' },
    { id: 17, question: 'What are Interrupts and Traps?', difficulty: 'Medium', answer: 'Interrupt: A signal generated by hardware (e.g., I/O completion) to switch control to the kernel.\n\nTrap (Software Interrupt): A software-generated interrupt caused by an error (e.g., division by zero) or a deliberate request (e.g., a System Call).' },
    { id: 18, question: 'Explain the concept of I/O Bound vs CPU Bound processes.', difficulty: 'Easy', answer: 'I/O Bound: A process that spends most of its time waiting for I/O operations (network, disk) to complete.\n\nCPU Bound: A process that spends most of its time executing instructions on the CPU (complex calculations).' },
    { id: 19, question: 'What is Caching and Cache Coherency?', difficulty: 'Medium', answer: 'Caching: Storing frequently accessed data in a smaller, faster memory closer to the processor.\n\nCache Coherency: Ensuring that all copies of shared data across multiple caches (in a multi-core system) are consistent and up-to-date.' },
    { id: 20, question: 'What is a Kernel and what does it manage?', difficulty: 'Easy', answer: 'The Kernel is the core component of the operating system. It manages and controls the system\'s hardware and software resources.\n\nKey tasks: Process scheduling, memory management, I/O management, and security enforcement.' }
  ],
  networks: [
    { id: 1, question: 'Compare OSI and TCP/IP Models.', difficulty: 'Easy', answer: 'OSI Model (7 Layers): Theoretical, standard model.\n\nTCP/IP Model (4/5 Layers): Practical, used in the Internet. Combines Session, Presentation, and Application layers of OSI into one Application layer.' },
    { id: 2, question: 'TCP vs UDP: Explain the key differences and use cases.', difficulty: 'Medium', answer: 'TCP:\n- Connection-Oriented (3-way handshake)\n- Reliable (guarantees delivery/order)\n- Slower\n- Use for: HTTP/S, FTP\n\nUDP:\n- Connectionless\n- Unreliable (best-effort)\n- Faster (low overhead)\n- Use for: DNS, VoIP, Gaming' },
    { id: 3, question: 'How does DNS (Domain Name System) work?', difficulty: 'Easy', answer: 'DNS translates domain names (example.com) into IP addresses. It uses a hierarchy (Local, Root, TLD, Authoritative servers) to recursively find the IP. The result is cached for speed.' },
    { id: 4, question: 'What is the difference between HTTP and HTTPS?', difficulty: 'Easy', answer: 'HTTP: Data is sent in plain text.\n\nHTTPS: Data is encrypted using TLS/SSL. Ensures Confidentiality, Integrity, and Authentication.' },
    { id: 5, question: 'Explain the high-level steps when typing a URL in a browser.', difficulty: 'Hard', answer: '1. DNS Lookup (URL to IP).\n2. TCP Handshake (Connection setup).\n3. TLS/SSL Handshake (Security setup, if HTTPS).\n4. HTTP Request (GET request sent).\n5. Server Processing (Response generated).\n6. Rendering (Browser builds page).' },
    { id: 6, question: 'What is a JWT (JSON Web Token) and how is it used for authentication?', difficulty: 'Medium', answer: 'A JWT is a digitally signed, stateless token containing user claims. The client sends the JWT in the Authorization header. The server validates the signature without a database lookup, ensuring stateless and secure API communication.' },
    { id: 7, question: 'Explain the 3-Way Handshake in TCP connection establishment.', difficulty: 'Medium', answer: '1. SYN: Client sends synchronization request to server.\n2. SYN-ACK: Server acknowledges (ACK) the client\'s request and sends its own SYN.\n3. ACK: Client acknowledges the server\'s SYN. Connection is established.' },
    { id: 8, question: 'What is Routing? Explain the difference between static and dynamic routing.', difficulty: 'Medium', answer: 'Routing is selecting the path for network traffic.\n\nStatic: Paths are manually configured. Simple, but inflexible.\n\nDynamic: Paths are calculated automatically using Routing Protocols (OSPF, BGP) based on real-time network conditions. Flexible, but complex.' },
    { id: 9, question: 'What are the key differences between IPv4 and IPv6?', difficulty: 'Medium', answer: 'Address Size: IPv4 is 32-bit, IPv6 is 128-bit (solves exhaustion).\n\nSecurity: IPv6 has native support for IPSec (encryption/authentication).\n\nNotation: IPv4 uses dotted decimal; IPv6 uses hexadecimal.' },
    { id: 10, question: 'What is Network Latency and Bandwidth?', difficulty: 'Easy', answer: 'Bandwidth: The maximum data rate (bits per second). The "width" of the pipe.\n\nLatency: The time delay for a bit of data to travel end-to-end. The "time" it takes to cross the pipe.' },
    { id: 11, question: 'Explain the purpose of NAT (Network Address Translation).', difficulty: 'Medium', answer: 'NAT maps many private IP addresses (internal network) to a few public IP addresses (internet). This conserves public IPv4 addresses and adds a basic layer of security by hiding internal host structures.' },
    { id: 12, question: 'What are Socket APIs and Socket Programming?', difficulty: 'Medium', answer: 'Socket APIs are the programming interfaces for networking. A Socket is an endpoint for network communication (IP address + Port Number). Socket Programming is writing applications that use these interfaces for network exchange.' },
    { id: 13, question: 'How does TCP handle Congestion Control?', difficulty: 'Hard', answer: 'TCP regulates the data rate to prevent network overload using the Congestion Window (cwnd). It employs algorithms like Slow Start (exponential increase) and Congestion Avoidance (linear increase/halving window size upon packet loss).' },
    { id: 14, question: 'Differentiate between Hub, Switch, and Router.', difficulty: 'Medium', answer: 'Hub (Layer 1): Broadcasts to all, based on signals.\n\nSwitch (Layer 2): Intelligently forwards based on MAC addresses (within a LAN).\n\nRouter (Layer 3): Connects different networks, forwards based on IP addresses.' },
    { id: 15, question: 'What is ARP (Address Resolution Protocol)?', difficulty: 'Easy', answer: 'ARP maps an IP address (Layer 3) to a corresponding MAC address (Layer 2) within the same local network segment. Necessary for physical delivery of packets.' },
    { id: 16, question: 'Explain Port Numbers and their usage.', difficulty: 'Easy', answer: 'Port Numbers (16-bit) identify specific applications or services running on a host. They allow multiple processes to share a single IP address (e.g., HTTP: 80, HTTPS: 443).' },
    { id: 17, question: 'What is a Firewall and its types?', difficulty: 'Medium', answer: 'A Firewall monitors and controls incoming/outgoing network traffic based on security rules.\n\nTypes: Packet-Filtering (basic check), Stateful Inspection (tracks connection state), and Application-Layer (checks content/most secure).' },
    { id: 18, question: 'Explain the concept of Subnetting (recap and expansion).', difficulty: 'Medium', answer: 'Subnetting divides a large network into smaller subnetworks using a Subnet Mask. This reduces traffic (local traffic stays local), improves security, and efficiently manages IP address space.' },
    { id: 19, question: 'What is DHCP (Dynamic Host Configuration Protocol)?', difficulty: 'Easy', answer: 'DHCP is a protocol that automatically assigns IP addresses, subnet masks, default gateways, and other network configuration parameters to devices on a network.' },
    { id: 20, question: 'What are the HTTP Response Status Codes and their classes?', difficulty: 'Easy', answer: '1xx: Informational\n2xx: Success (e.g., 200 OK)\n3xx: Redirection (e.g., 301)\n4xx: Client Error (e.g., 404 Not Found)\n5xx: Server Error (e.g., 500 Internal Server Error)' }
  ],
  web: [
    { id: 1, question: 'Explain the Browser Rendering Process (Critical Rendering Path).', difficulty: 'Medium', answer: 'The process: 1. DOM Tree (from HTML). 2. CSSOM Tree (from CSS). 3. Render Tree (DOM+CSSOM). 4. Layout (Calculate positions). 5. Paint (Fill pixels).' },
    { id: 2, question: 'What is the Event Loop in JavaScript?', difficulty: 'Medium', answer: 'The Event Loop allows single-threaded JavaScript to perform non-blocking asynchronous operations. It moves callbacks from the Callback Queue (or Task Queue) to the Call Stack only when the Stack is empty.' },
    { id: 3, question: 'Difference between REST and GraphQL.', difficulty: 'Medium', answer: 'REST: Uses multiple endpoints, often leads to over-fetching.\n\nGraphQL: Uses a single endpoint. Client specifies exactly the data needed, optimizing transfer size.' },
    { id: 4, question: 'Explain `call()`, `apply()`, and `bind()` in JavaScript.', difficulty: 'Medium', answer: 'These methods set the this context for a function.\n\ncall(): Executes immediately, args individually.\n\napply(): Executes immediately, args as an array.\n\nbind(): Returns a new function with the this context permanently set (used for deferred execution).' },
    { id: 5, question: 'Describe the difference between Local Storage, Session Storage, and Cookies.', difficulty: 'Medium', answer: 'Local Storage: Persists after browser close. Max 5MB. Never sent to server.\n\nSession Storage: Cleared when tab closes. Max 5MB. Never sent to server.\n\nCookies: Sent with every HTTP request. Max 4KB. Suitable for session management.' },
    { id: 6, question: 'Explain JavaScript Closures and their usefulness.', difficulty: 'Medium', answer: 'A Closure is a function bundled with its surrounding state (lexical environment). It allows a function to access variables from an outer scope even after the outer function has finished execution. Used for data privacy and maintaining state in callbacks.' },
    { id: 7, question: 'Describe the JavaScript Prototype chain.', difficulty: 'Medium', answer: 'Every JS object links to a Prototype object. If a property is not found on the object itself, the engine searches up the chain of prototypes. This mechanism is how inheritance is implemented in JavaScript.' },
    { id: 8, question: 'What is CORS (Cross-Origin Resource Sharing) and how does it work?', difficulty: 'Medium', answer: 'CORS is a browser security mechanism that restricts cross-domain requests. For "complex" requests, the browser sends an automatic Pre-flight Request (OPTIONS verb) to the server to check the server\'s cross-origin policies (Access-Control-Allow-Origin header).' },
    { id: 9, question: 'Explain the difference between == and === in JavaScript.', difficulty: 'Easy', answer: '== (Equality): Performs type coercion. It tries to convert operands to a common type before comparison (5 == \'5\' is true).\n\n=== (Strict Equality): Does not perform type coercion. Both value and type must match. (Always preferred for reliable comparison).' },
    { id: 10, question: 'What is the V8 Engine and its role?', difficulty: 'Easy', answer: 'V8 is Google\'s open-source JavaScript engine (used in Chrome and Node.js). Its role is to compile JavaScript directly into native machine code (JIT Compilation) rather than interpreting it, significantly improving performance.' },
    { id: 11, question: 'Describe the concept of Event Bubbling and Event Capturing.', difficulty: 'Medium', answer: 'Capturing (Top-down): Event travels down the DOM tree from the window to the target element.\n\nBubbling (Bottom-up): Event travels back up the DOM tree from the target element back to the window. Most events default to bubbling.' },
    { id: 12, question: 'What are Web Workers and when should you use them?', difficulty: 'Medium', answer: 'Web Workers allow JavaScript code to run in a background thread separate from the main execution thread of the browser. Use them for computationally intensive tasks (like large data processing) to prevent the main UI thread from blocking.' },
    { id: 13, question: 'Explain the use of `async`/`await` for promises.', difficulty: 'Easy', answer: 'async/await is syntactic sugar over Promises. async declares a function that returns a promise, and await pauses the execution of the async function until the promise settles, making asynchronous code look synchronous.' },
    { id: 14, question: 'Difference between functional components and class components in React.', difficulty: 'Medium', answer: 'Class Components: Use ES6 classes, manage state via lifecycle methods.\n\nFunctional Components: Simple JS functions. Use Hooks (useState, useEffect) to manage state and side effects. Now the preferred standard.' },
    { id: 15, question: 'How do you secure a web application against XSS (Cross-Site Scripting)?', difficulty: 'Easy', answer: 'XSS involves injecting malicious client-side scripts.\n\nPrevention: Always sanitize and escape user input when rendering content on the page, especially when inserting user-provided text into HTML elements.' },
    { id: 16, question: 'Explain the role of webpack or similar bundlers.', difficulty: 'Medium', answer: 'Bundlers (Webpack, Parcel) analyze module dependencies and combine them into optimized static assets (bundles) for the browser. They handle transpilation (Babel), minification, and code splitting.' },
    { id: 17, question: 'What is SSR (Server-Side Rendering) vs CSR (Client-Side Rendering)?', difficulty: 'Medium', answer: 'CSR: Browser handles rendering via JS. Fast initial load, but poor SEO.\n\nSSR: Server renders full HTML page before sending. Great SEO and fast initial content display.' },
    { id: 18, question: 'What is immutability in the context of React/Redux state?', difficulty: 'Medium', answer: 'State must be treated as immutable. When updating state (objects or arrays), you must create a brand-new copy with the changes, rather than modifying the original in place. This is crucial for performance (shallow comparison) and predictable data flow.' },
    { id: 19, question: 'Explain the difference between `let`, `const`, and `var` in JavaScript.', difficulty: 'Easy', answer: 'var: Function-scoped, can be re-declared/re-assigned (Avoid).\n\nlet: Block-scoped, can be re-assigned, but not re-declared.\n\nconst: Block-scoped, cannot be re-assigned or re-declared (Preferred for constants).' },
    { id: 20, question: 'What is the Box Model in CSS?', difficulty: 'Easy', answer: 'The CSS Box Model defines how elements are laid out, composed of four layers from inner to outer: Content, Padding (inside border), Border, and Margin (outside border).' }
  ],
  system: [
    { id: 1, question: 'What is Scalability? Differentiate Vertical vs Horizontal Scaling.', difficulty: 'Easy', answer: 'Scalability is the ability of a system to handle increased load.\n\n1. Vertical Scaling (Up): Adding more resources (CPU, RAM) to a single server. Limited.\n\n2. Horizontal Scaling (Out): Adding more servers (machines). Virtually unlimited, but requires load balancing.' },
    { id: 2, question: 'What is a Load Balancer and why is it essential?', difficulty: 'Medium', answer: 'A Load Balancer distributes incoming network traffic across a group of backend servers. Essential for: High Availability (failover) and Scalability (distributing load).' },
    { id: 3, question: 'Explain the concept of Microservices Architecture.', difficulty: 'Medium', answer: 'Microservices breaks a large Monolith into smaller, independent services. Each runs in its own process and communicates via REST/message queues. Advantages: Independent deployment, resilience.' },
    { id: 4, question: 'Describe the CAP Theorem and its implications.', difficulty: 'Medium', answer: 'The CAP Theorem states a distributed system can only guarantee two of three: Consistency, Availability, Partition Tolerance. Implication: Since P is mandatory in large-scale systems, you must choose between CP (Consistency over Availability) or AP (Availability over Consistency).' },
    { id: 5, question: 'Explain Data Sharding (Partitioning) and common keys.', difficulty: 'Hard', answer: 'Sharding is horizontal scaling for databases, dividing data into smaller pieces (shards) across multiple database instances.\n\nKeys: Range-based (e.g., User IDs 1-1000) or Hash-based (distributes load evenly).' },
    { id: 6, question: 'What is eventual consistency and how does it relate to the BASE principles?', difficulty: 'Hard', answer: 'Eventual Consistency: If no new updates are made, all data replicas will eventually converge to the same value. It is the trade-off chosen when prioritizing Availability (AP systems).\n\nBASE (Basically Available, Soft state, Eventually consistent) is the set of principles guiding NoSQL systems.' },
    { id: 7, question: 'What are Message Queues and when should you use them?', difficulty: 'Medium', answer: 'Message Queues (MQs) decouple and asynchronously connect services.\n\nUse Cases: Decoupling services, Buffering/Throttling (handling traffic spikes), and running Asynchronous Tasks (e.g., sending emails).' },
    { id: 8, question: 'Describe the concept of Replication and its two main types.', difficulty: 'Medium', answer: 'Replication is creating multiple copies of data across servers for High Availability and Read Scalability.\n\nTypes: Leader-Follower (Master-Slave) (reads from multiple, writes to one) and Multi-Leader (Master-Master) (writes to multiple, complex conflict resolution).' },
    { id: 9, question: 'Differentiate between Latency and Throughput in system performance.', difficulty: 'Easy', answer: 'Latency: The time delay for a single operation to complete (measured in ms).\n\nThroughput: The number of operations completed per unit of time (measured in RPS).' },
    { id: 10, question: 'What is a Bloom Filter and where is it used?', difficulty: 'Hard', answer: 'A Bloom Filter is a probabilistic data structure used to test set membership. It may produce false positives (says an element is present when it\'s not) but never false negatives. Used to reduce expensive disk lookups for non-existent keys (e.g., database caches).' },
    { id: 11, question: 'What is Rate Limiting and why implement it?', difficulty: 'Medium', answer: 'Rate Limiting controls the number of requests a user (or IP) can make to a server over a given period.\n\nPurpose: Protect the service from DoS/DDoS attacks, prevent abusive scraping, and ensure fair resource usage.' },
    { id: 12, question: 'Describe the concept of Idempotency in API design.', difficulty: 'Medium', answer: 'An operation is idempotent if applying it multiple times yields the same result as applying it once. Essential for handling network retries, as clients often retry timed-out requests. (GET, PUT, and DELETE should generally be idempotent).' },
    { id: 13, question: 'How is Leader Election performed in a distributed system?', difficulty: 'Hard', answer: 'Leader Election is the process by which nodes agree on a single coordinator (leader). This is typically achieved using Consensus Algorithms like Raft or Paxos, which ensure that even if nodes fail, the cluster can reliably elect a new leader and maintain consistent state.' },
    { id: 14, question: 'Explain the difference between Push and Pull mechanisms for data transfer.', difficulty: 'Medium', answer: 'Push: Producer actively sends data to the consumer (e.g., WebSockets, server notifications). Good for low latency.\n\nPull: Consumer actively requests (polls) data from the producer (e.g., polling an API, message queue consumption). Good for flow control (consumer limits load).' },
    { id: 15, question: 'What is a Caching strategy, specifically Cache-Aside vs Write-Through?', difficulty: 'Medium', answer: 'Cache-Aside: Application manages cache and database independently. (Most common).\n\nWrite-Through: Data is simultaneously written to both the cache and the database in one operation. Ensures consistency but adds write latency.' },
    { id: 16, question: 'Why do we use Proxies (Forward and Reverse)?', difficulty: 'Medium', answer: 'Forward Proxy: Hides the client\'s identity, filters outbound traffic, caches external resources.\n\nReverse Proxy: Hides the server\'s identity, handles load balancing, SSL termination, and security before traffic reaches the backend servers.' },
    { id: 17, question: 'Explain Horizontal vs Vertical Federation in databases.', difficulty: 'Hard', answer: 'Horizontal Federation (Sharding): Different rows go to different databases (e.g., users A-M → DB1).\n\nVertical Federation: Different columns/tables go to different databases (e.g., User Login info → DB1, User Profile details → DB2).' },
    { id: 18, question: 'What is the difference between Consistency and Reliability in distributed systems?', difficulty: 'Medium', answer: 'Consistency: Refers to the data state—ensuring all nodes see the same data (e.g., ACID).\n\nReliability: Refers to the system\'s ability to operate without failure (e.g., High Availability, Fault Tolerance).' },
    { id: 19, question: 'What is a CDN (Content Delivery Network)?', difficulty: 'Easy', answer: 'A CDN is a geographically distributed network of servers that caches static content (images, JS) at edge locations near the user. It reduces latency, improves speed, and offloads traffic from the origin server.' },
    { id: 20, question: 'What is the difference between SQL Sharding and NoSQL Partitioning?', difficulty: 'Medium', answer: 'Conceptually the same (horizontal partitioning). Sharding is typically applied to SQL tables and requires explicit logic for cross-shard joins. Partitioning is often native to NoSQL systems and is optimized for key-based lookups, avoiding complex joins.' }
  ],
  coding: [
    { id: 1, question: 'Explain the Sliding Window pattern and its typical use.', difficulty: 'Medium', answer: 'The Sliding Window pattern maintains a window over a contiguous subarray or substring and moves it across the data. It is highly efficient for problems involving sequences.\n\nUse Case: Finding maximum sum subarray of fixed size K, longest substring with K distinct characters.' },
    { id: 2, question: 'What is the Two Pointers technique and when should you use it?', difficulty: 'Easy', answer: 'Two Pointers uses two indices (pointers) to traverse data simultaneously, often from both ends moving towards each other or from the same end at different speeds.\n\nUse Case: Finding pairs with a given sum in a sorted array, removing duplicates from a sorted array.' },
    { id: 3, question: 'Explain the Backtracking pattern and its core template.', difficulty: 'Hard', answer: 'Backtracking explores all possible paths by making a choice, proceeding, and then undoing that choice if the path fails.\n\nTemplate:\n1. Base Case: If solution found, store and return.\n2. Loop through all choices.\n3. Make a choice (add to state).\n4. Recurse with the new state.\n5. Undo the choice (backtrack).\n\nUse Case: Permutations, N-Queens, Sudoku Solver.' },
    { id: 4, question: 'What is a Monotonic Stack and when should you use it?', difficulty: 'Hard', answer: 'A Monotonic Stack maintains a stack where elements are in increasing or decreasing order. It solves problems efficiently in O(n) time.\n\nUse Case: Next greater element, next smaller element, finding histogram area (monotonically increasing/decreasing stack).' },
    { id: 5, question: 'Explain the "Binary Search on Answer" pattern.', difficulty: 'Hard', answer: 'Binary Search on Answer applies binary search not on data but on the range of possible answer values. When the answer space is sorted and monotonic (if X is valid, all values < or > X are also valid), binary search can find the optimal value.\n\nUse Case: Kth smallest element in sorted matrix, minimum capacity to ship packages.' },
    { id: 6, question: 'Describe the Min and Max Heap (Priority Queue) pattern.', difficulty: 'Medium', answer: 'A Priority Queue (Min/Max Heap) is used to efficiently retrieve the minimum or maximum element in O(log n) time. Heaps are ideal for problems that require dynamic minimum or maximum tracking.\n\nUse Case: Kth largest element, merge K sorted lists, sliding window maximum.' },
    { id: 7, question: 'What is the BFS (Breadth-First Search) pattern for tree/graph traversal?', difficulty: 'Easy', answer: 'BFS explores nodes level by level using a Queue. Each node\'s neighbors are added to the queue before moving to the next level. Guarantees the shortest path in unweighted graphs.\n\nTemplate: Use a Queue, dequeue a node, process it, then enqueue all its neighbors.' },
    { id: 8, question: 'Explain the DFS (Depth-First Search) pattern.', difficulty: 'Easy', answer: 'DFS explores as deep as possible before backtracking. It can be implemented iteratively (using a Stack) or recursively.\n\nTemplate: Visit node → Mark visited → Recursively visit unvisited neighbors.' },
    { id: 9, question: 'What is the Two Heaps pattern and its classic use case?', difficulty: 'Hard', answer: 'The Two Heaps pattern uses a Max Heap and a Min Heap simultaneously to efficiently maintain and retrieve the median of a data stream.\n\nUse Case: Median of a stream of numbers (Max Heap for lower half, Min Heap for upper half).' },
    { id: 10, question: 'Explain the Disjoint Set Union (DSU / Union-Find) pattern.', difficulty: 'Hard', answer: 'DSU is a data structure that maintains a collection of disjoint (non-overlapping) sets. It supports two efficient operations: Union (merging two sets) and Find (identifying which set an element belongs to).\n\nUse Case: Cycle detection in graphs, Kruskal\'s MST algorithm, determining connected components.' },
    { id: 11, question: 'What is the Bit Manipulation pattern and when is it useful?', difficulty: 'Medium', answer: 'Bit Manipulation uses bitwise operators to perform efficient operations directly on binary representations of numbers.\n\nCommon Operations: Set/Clear/Toggle bit, Check if number is power of 2, XOR trick (e.g., find the single non-repeated number).' },
    { id: 12, question: 'What is the Backtracking for Subsets/Combinations pattern?', difficulty: 'Medium', answer: 'This pattern generates all possible subsets or combinations by including/excluding each element recursively.\n\nTemplate:\n1. Base Case: When index reaches the end, store the current subset.\n2. Recursively explore: Include the current element, then exclude it.\n\nUse Case: Power set (all subsets), combination sum, subset sum.' },
    { id: 13, question: 'Describe the Memoization (Top-Down DP) pattern.', difficulty: 'Medium', answer: 'Memoization is a technique in Dynamic Programming where the solution to overlapping subproblems is cached (stored) to avoid redundant computations.\n\nTemplate: Recursion + HashMap (or array) to store results of subproblems.\n\nUse Case: Fibonacci, Longest Common Subsequence, Coin Change.' },
    { id: 14, question: 'What is the relationship between Dynamic Programming and Recursion?', difficulty: 'Medium', answer: 'DP is an optimization over plain recursion for problems with Optimal Substructure and Overlapping Subproblems.\n\nRecursion: Solves problem by breaking into smaller subproblems (often with repeated work).\n\nDP: Same recursive breakdown but avoids repeated work using Memoization (Top-Down) or Tabulation (Bottom-Up).' },
    { id: 15, question: 'Explain the K-way Merge pattern.', difficulty: 'Hard', answer: 'K-way Merge efficiently merges K sorted lists or arrays using a Min Heap.\n\nTemplate: Add the first element from each list to a Min Heap. Pop the smallest, add it to the result, and push the next element from the same list into the heap.\n\nUse Case: Merge K sorted lists, smallest range covering elements from K lists.' },
    { id: 16, question: 'What is the Sentinel Node technique in linked list problems?', difficulty: 'Medium', answer: 'A Sentinel Node (or Dummy Node) is a placeholder node added at the beginning of a linked list to simplify edge cases (e.g., removing the head, inserting at the beginning).\n\nBenefit: Eliminates special handling for the head and makes the code cleaner.' },
    { id: 17, question: 'When should you use Greedy algorithms vs Dynamic Programming?', difficulty: 'Hard', answer: 'Greedy: Make locally optimal choices at each step, hoping for a global optimum. Works when local choices lead to global optimum. (e.g., Activity Selection, Huffman Encoding).\n\nDP: Considers all possible choices and finds the globally optimal solution. Used when greedy fails (e.g., Knapsack, LCS).' },
    { id: 18, question: 'What is the Interval Merge/Overlap pattern?', difficulty: 'Medium', answer: 'This pattern is for problems involving merging or checking overlaps of intervals.\n\nTemplate:\n1. Sort intervals by start time.\n2. Traverse and check if the current interval overlaps with the previous.\n3. Merge if overlap, otherwise add to the result.\n\nUse Case: Merge intervals, meeting rooms (detect conflicts).' },
    { id: 19, question: 'Explain the Two Pointers pattern for opposite ends.', difficulty: 'Easy', answer: 'Two Pointers from opposite ends: One pointer starts at the beginning, and the other starts at the end, moving towards each other based on a condition.\n\nUse Case: Two Sum in a sorted array, Container With Most Water, Palindrome checking.' },
    { id: 20, question: 'Describe the Fast and Slow Pointers (Floyd\'s Cycle Detection) pattern.', difficulty: 'Medium', answer: 'Fast and Slow Pointers is used primarily for cycle detection in linked lists. The slow pointer moves one step at a time, and the fast pointer moves two steps. If there is a cycle, they will eventually meet.\n\nUse Case: Detect a cycle, find the start of a cycle, find the middle of a linked list.' }
  ],
  cloud: [
    { id: 1, question: 'Explain the difference between Docker Containers and Virtual Machines.', difficulty: 'Easy', answer: 'Virtual Machine: Runs a full guest OS on a hypervisor. Heavyweight, slow to start.\n\nDocker Container: Shares the host OS kernel. Lightweight, starts in seconds, and uses fewer resources. Isolates applications using namespaces and control groups (cgroups).' },
    { id: 2, question: 'What is Kubernetes and why is it used?', difficulty: 'Medium', answer: 'Kubernetes (K8s) is a container orchestration platform. It automates the deployment, scaling, and management of containerized applications across a cluster of machines. Provides self-healing, load balancing, and rolling updates.' },
    { id: 3, question: 'Differentiate between CI (Continuous Integration) and CD (Continuous Deployment).', difficulty: 'Easy', answer: 'CI: Developers regularly merge code into a shared repository. Automated tests run to catch issues early (e.g., merge → build → test).\n\nCD: Extends CI by automatically deploying all code changes to production after passing tests (merge → build → test → deploy to production).' },
    { id: 4, question: 'What is a CDN (Content Delivery Network) and how does it improve performance?', difficulty: 'Easy', answer: 'A CDN is a distributed network of servers that caches static content (images, CSS, JS) at edge locations geographically closer to users. This reduces latency, improves load times, and offloads traffic from the origin server.' },
    { id: 5, question: 'What is Infrastructure as Code (IaC) and why is it important?', difficulty: 'Medium', answer: 'IaC is managing and provisioning infrastructure through code (declarative scripts) rather than manual processes. Tools: Terraform, CloudFormation.\n\nBenefits: Version control, repeatability, consistency, and reduced human error.' },
    { id: 6, question: 'Explain the concept of Serverless Computing.', difficulty: 'Medium', answer: 'Serverless allows developers to run code without managing servers. The cloud provider handles infrastructure, auto-scaling, and billing based on execution time (e.g., AWS Lambda, Azure Functions). Ideal for event-driven applications.' },
    { id: 7, question: 'Differentiate between IaaS, PaaS, and SaaS.', difficulty: 'Easy', answer: 'IaaS (Infrastructure as a Service): Raw infrastructure (e.g., AWS EC2, VM). You manage OS, runtime, apps.\n\nPaaS (Platform as a Service): Managed runtime (e.g., AWS Elastic Beanstalk, Google App Engine). You manage only apps.\n\nSaaS (Software as a Service): Fully managed apps (e.g., Gmail, Salesforce). No infrastructure management.' },
    { id: 8, question: 'What is Immutable Infrastructure and its benefits?', difficulty: 'Medium', answer: 'Immutable Infrastructure means once a server is deployed, it is never modified. Changes require deploying a new instance and discarding the old one (e.g., Docker containers, AMI images).\n\nBenefits: Eliminates configuration drift, simplifies rollbacks, and improves reproducibility.' },
    { id: 9, question: 'What are the advantages of a Monorepo vs Multirepo?', difficulty: 'Medium', answer: 'Monorepo: All code in one repository. Easier refactoring, unified versioning, simplified dependency management. (Used by Google, Facebook).\n\nMultirepo: Each service/project in its own repo. Better access control, independent CI/CD pipelines.' },
    { id: 10, question: 'What does Git Rebase do and when should you use it?', difficulty: 'Medium', answer: 'Git Rebase moves or combines a sequence of commits to a new base commit (rewrites history). Used to create a linear project history.\n\nUse Case: Cleaning up feature branch history before merging to main. (Never rebase shared branches).' },
    { id: 11, question: 'What is Observability and how is it different from Monitoring?', difficulty: 'Medium', answer: 'Monitoring: Tracks known metrics (e.g., CPU, error rates) using dashboards.\n\nObservability: The ability to understand internal system state through external outputs (Logs, Metrics, Traces). Observability helps debug unknown issues ("Why is this slow?").' },
    { id: 12, question: 'Explain the purpose of a Service Mesh (e.g., Istio).', difficulty: 'Hard', answer: 'A Service Mesh manages service-to-service communication in a microservices architecture. It provides traffic management, security (mTLS), observability, and fault tolerance (retries, circuit breaking) without modifying application code.' },
    { id: 13, question: 'What are the different deployment strategies (Blue-Green, Canary, Rolling)?', difficulty: 'Medium', answer: 'Blue-Green: Two identical environments. Switch traffic from Blue (old) to Green (new) instantly. Easy rollback.\n\nCanary: Gradually roll out to a small percentage of users, monitor, then full rollout.\n\nRolling: Replace instances one by one. No downtime, but slower.' },
    { id: 14, question: 'What is a Dockerfile and what are its key instructions?', difficulty: 'Easy', answer: 'A Dockerfile is a script containing instructions to build a Docker image.\n\nKey Instructions:\n- FROM: Base image\n- RUN: Execute commands\n- COPY/ADD: Add files\n- CMD/ENTRYPOINT: Set default command\n- EXPOSE: Define ports' },
    { id: 15, question: 'What is an API Gateway and why use it?', difficulty: 'Medium', answer: 'An API Gateway acts as a single entry point for all client requests to microservices. It handles routing, authentication, rate limiting, load balancing, and protocol translation (e.g., AWS API Gateway, Kong).' },
    { id: 16, question: 'What are the three types of cloud: Public, Private, and Hybrid?', difficulty: 'Easy', answer: 'Public Cloud: Resources owned by a third-party provider (AWS, Azure). Shared infrastructure, cost-effective.\n\nPrivate Cloud: Dedicated infrastructure for one organization. Greater control, more secure.\n\nHybrid Cloud: Combines public and private. Sensitive data on-premises, scalable workloads in public cloud.' },
    { id: 17, question: 'What is Container Orchestration and what problem does it solve?', difficulty: 'Medium', answer: 'Container Orchestration automates the deployment, scaling, networking, and lifecycle management of containers across a cluster (e.g., Kubernetes, Docker Swarm). Solves the challenge of managing hundreds or thousands of containers in production.' },
    { id: 18, question: 'Explain Horizontal Pod Autoscaling (HPA) in Kubernetes.', difficulty: 'Medium', answer: 'HPA automatically scales the number of pod replicas based on observed CPU utilization (or custom metrics). When load increases, more pods are created; when it decreases, pods are terminated.' },
    { id: 19, question: 'What is structured logging and why is it important in cloud-native applications?', difficulty: 'Medium', answer: 'Structured Logging outputs logs in a structured format (JSON) with key-value pairs. This makes logs machine-readable and easy to query/analyze in centralized logging systems (e.g., ELK stack, Splunk).' },
    { id: 20, question: 'What is CI/CD as Code?', difficulty: 'Medium', answer: 'CI/CD as Code means defining CI/CD pipelines as code (declarative files like Jenkinsfile, .gitlab-ci.yml, GitHub Actions YAML). Benefits: version control, peer review, repeatability, and automation.' }
  ],
  aiml: [
    { id: 1, question: 'What is the difference between Supervised, Unsupervised, and Reinforcement Learning?', difficulty: 'Easy', answer: 'Supervised: Model learns from labeled data (input-output pairs). (e.g., Classification, Regression).\n\nUnsupervised: Model finds patterns in unlabeled data. (e.g., Clustering, Dimensionality Reduction).\n\nReinforcement: Model learns by interacting with an environment to maximize cumulative reward. (e.g., Game AI, Robotics).' },
    { id: 2, question: 'Explain the Bias-Variance tradeoff.', difficulty: 'Medium', answer: 'Bias: Error from incorrect assumptions (underfitting). High Bias = Model too simple.\n\nVariance: Error from sensitivity to small fluctuations in training data (overfitting). High Variance = Model too complex.\n\nGoal: Balance both to minimize total error.' },
    { id: 3, question: 'What is overfitting and how do you prevent it?', difficulty: 'Easy', answer: 'Overfitting: Model performs well on training data but poorly on unseen data (learned noise).\n\nPrevention: More training data, Regularization (L1/L2), Cross-validation, Early stopping, Dropout (for neural networks).' },
    { id: 4, question: 'Explain Gradient Descent and its variants.', difficulty: 'Medium', answer: 'Gradient Descent is an optimization algorithm to minimize the loss function by iteratively updating weights in the direction of the negative gradient.\n\nVariants:\n- Batch GD: Uses entire dataset (slow).\n- Stochastic GD (SGD): Uses one sample (fast but noisy).\n- Mini-Batch GD: Uses a small batch (best balance).' },
    { id: 5, question: 'How does Logistic Regression work for classification?', difficulty: 'Easy', answer: 'Logistic Regression models the probability of a binary outcome using the Sigmoid function (outputs values between 0 and 1). It uses a decision boundary (threshold, typically 0.5) to classify inputs.' },
    { id: 6, question: 'What are Accuracy, Precision, Recall, and when to use each?', difficulty: 'Medium', answer: 'Accuracy: Overall correct predictions / Total predictions. (Use when classes are balanced).\n\nPrecision: True Positives / (True Positives + False Positives). (Use when False Positives are costly, e.g., spam detection).\n\nRecall: True Positives / (True Positives + False Negatives). (Use when False Negatives are costly, e.g., disease detection).' },
    { id: 7, question: 'Explain common Activation Functions (Sigmoid, ReLU, Tanh).', difficulty: 'Medium', answer: 'Sigmoid: Outputs (0, 1). Suitable for binary classification output layer. Suffers from vanishing gradients.\n\nReLU: Outputs max(0, x). Fast, solves vanishing gradient for hidden layers. Can suffer from "dying ReLU".\n\nTanh: Outputs (-1, 1). Zero-centered. Still suffers from vanishing gradients.' },
    { id: 8, question: 'What is the difference between CNN and RNN?', difficulty: 'Medium', answer: 'CNN (Convolutional Neural Network): Designed for spatial data (images). Uses convolution layers to learn spatial hierarchies.\n\nRNN (Recurrent Neural Network): Designed for sequential data (text, time-series). Uses loops to maintain temporal information across time steps.' },
    { id: 9, question: 'What is Feature Engineering and why is it important?', difficulty: 'Easy', answer: 'Feature Engineering is the process of creating, transforming, or selecting relevant features (input variables) from raw data to improve model performance. Good features directly impact model accuracy.' },
    { id: 10, question: 'Explain Dimensionality Reduction and name common techniques.', difficulty: 'Medium', answer: 'Dimensionality Reduction reduces the number of input features while preserving important information. It helps combat the "Curse of Dimensionality", speeds up training, and aids visualization.\n\nTechniques: PCA (Principal Component Analysis), t-SNE, Autoencoders.' },
    { id: 11, question: 'What is the difference between Batch and Stochastic Gradient Descent?', difficulty: 'Easy', answer: 'Batch GD: Computes gradient using the entire training dataset. Slow but stable convergence.\n\nStochastic GD: Computes gradient using one training example. Fast but noisy convergence (can escape local minima).' },
    { id: 12, question: 'What is NLP (Natural Language Processing)?', difficulty: 'Easy', answer: 'NLP is a field of AI focused on enabling computers to understand, interpret, and generate human language. Applications: Sentiment analysis, machine translation, chatbots, text summarization.' },
    { id: 13, question: 'Explain the difference between Backpropagation and Gradient Descent.', difficulty: 'Medium', answer: 'Gradient Descent: An optimization algorithm that updates weights to minimize the loss function.\n\nBackpropagation: An algorithm to efficiently compute gradients of the loss function with respect to each weight in a neural network using the chain rule. Backpropagation feeds gradients to Gradient Descent.' },
    { id: 14, question: 'What is Clustering and name some common algorithms.', difficulty: 'Easy', answer: 'Clustering is an Unsupervised Learning technique that groups similar data points together.\n\nAlgorithms: K-Means (centroid-based), Hierarchical Clustering (tree-based), DBSCAN (density-based).' },
    { id: 15, question: 'What is the F1 Score and when is it more useful than Accuracy?', difficulty: 'Medium', answer: 'F1 Score is the harmonic mean of Precision and Recall. It is especially useful for imbalanced datasets where Accuracy can be misleading (e.g., 95% accuracy if 95% of data is one class).' },
    { id: 16, question: 'What are Hyperparameters vs Model Parameters?', difficulty: 'Easy', answer: 'Model Parameters: Learned by the algorithm from training data (e.g., weights in a neural network).\n\nHyperparameters: Set before training and control the learning process (e.g., learning rate, number of layers, batch size). Tuned manually or via automated search.' },
    { id: 17, question: 'What is Transfer Learning and when should you use it?', difficulty: 'Medium', answer: 'Transfer Learning reuses a pre-trained model (trained on a large dataset) as a starting point for a new, related task. It saves time and computational resources.\n\nUse Case: Image classification using models pre-trained on ImageNet (e.g., ResNet, VGG).' },
    { id: 18, question: 'Explain common Loss Functions: MSE, Cross-Entropy.', difficulty: 'Medium', answer: 'MSE (Mean Squared Error): Used for regression tasks. Measures the average squared difference between predicted and actual values.\n\nCross-Entropy: Used for classification tasks. Measures the difference between two probability distributions (predicted vs actual).' },
    { id: 19, question: 'What is an Epoch, Batch, and Iteration in training?', difficulty: 'Easy', answer: 'Epoch: One complete pass through the entire training dataset.\n\nBatch: A subset of the training data used in one iteration.\n\nIteration: One update of the model\'s weights (processing one batch).' },
    { id: 20, question: 'What is Regularization and what are L1 and L2?', difficulty: 'Medium', answer: 'Regularization adds a penalty term to the loss function to prevent overfitting by discouraging overly complex models.\n\nL1 (Lasso): Adds sum of absolute values of weights. Can lead to sparse models (some weights become zero).\n\nL2 (Ridge): Adds sum of squared weights. Keeps all weights small but non-zero.' }
  ]
};

export const quizData = {
    oop: [
        {
            question: "What are the four pillars of OOP?",
            options: ["Encapsulation, Inheritance, Polymorphism, Abstraction", "Classes, Objects, Methods, Variables", "Data, Functions, Arrays, Strings", "None of the above"],
            correct: 0,
            explanation: "The four pillars of OOP are Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (many forms), and Abstraction (hiding complexity)."
        },
        {
            question: "What is the main difference between Abstract Class and Interface?",
            options: ["Abstract class can have constructors, Interface cannot", "Interface supports multiple inheritance, Abstract class doesn't", "Both A and B", "No difference"],
            correct: 2,
            explanation: "Abstract classes can have constructors and concrete methods, while interfaces support multiple inheritance and only define contracts."
        },
        {
            question: "What is method overloading?",
            options: ["Same method name, different parameters (compile-time)", "Same method name, same parameters", "Different method names", "Runtime polymorphism"],
            correct: 0,
            explanation: "Method overloading is compile-time polymorphism where multiple methods have the same name but different parameters."
        },
        {
            question: "Which SOLID principle states 'A class should have only one reason to change'?",
            options: ["Open/Closed Principle", "Single Responsibility Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
            correct: 1,
            explanation: "The Single Responsibility Principle (SRP) states that a class should have only one reason to change, meaning it should have only one job."
        },
        {
            question: "What is the purpose of the 'super' keyword?",
            options: ["Create a new object", "Refer to parent class members", "Delete an object", "Define a static method"],
            correct: 1,
            explanation: "The 'super' keyword is used to refer to the immediate parent class's members (variables, methods, or constructors)."
        },
        {
            question: "What is composition in OOP?",
            options: ["A 'has-a' relationship where one class contains another", "Same as inheritance", "A method calling itself", "Multiple inheritance"],
            correct: 0,
            explanation: "Composition represents a 'has-a' relationship where one class contains instances of other classes to gain their functionality."
        },
        {
            question: "What is the Diamond Problem?",
            options: ["A memory leak issue", "Ambiguity in multiple inheritance", "A sorting algorithm", "A design pattern"],
            correct: 1,
            explanation: "The Diamond Problem occurs in multiple inheritance when a class inherits from two classes that both inherit from a common parent, creating ambiguity."
        },
        {
            question: "What is a Singleton pattern?",
            options: ["Ensures a class has only one instance", "Creates multiple objects", "A sorting algorithm", "A database pattern"],
            correct: 0,
            explanation: "Singleton is a creational design pattern that ensures a class has only one instance and provides a global point of access to it."
        },
        {
            question: "What is the difference between Stack and Heap memory?",
            options: ["Stack stores local variables, Heap stores objects", "Both are the same", "Stack is slower than Heap", "Heap is used for function calls"],
            correct: 0,
            explanation: "Stack is used for static memory allocation (local variables, function calls) while Heap is used for dynamic memory allocation (objects)."
        },
        {
            question: "What is immutability?",
            options: ["An object whose state cannot be modified after creation", "An object that changes frequently", "A mutable string", "A database property"],
            correct: 0,
            explanation: "Immutability means an object's state cannot be modified after it is created, making it inherently thread-safe."
        }
    ],
    dsa: [
        {
            question: "What is the time complexity of Binary Search?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correct: 1,
            explanation: "Binary Search has O(log n) time complexity because it divides the search space in half with each iteration."
        },
        {
            question: "What is the difference between BFS and DFS?",
            options: ["BFS uses Queue, DFS uses Stack", "Both use Queue", "Both use Stack", "BFS is always faster"],
            correct: 0,
            explanation: "BFS (Breadth-First Search) uses a Queue and explores level by level, while DFS (Depth-First Search) uses a Stack/Recursion and explores as deep as possible."
        },
        {
            question: "What is the worst-case time complexity of QuickSort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            correct: 1,
            explanation: "QuickSort has O(n²) worst-case time complexity (when pivot is always smallest/largest), but O(n log n) average case."
        },
        {
            question: "What data structure is used to implement a Priority Queue?",
            options: ["Array", "Linked List", "Heap", "Stack"],
            correct: 2,
            explanation: "A Heap (Min-Heap or Max-Heap) is the most efficient data structure for implementing a Priority Queue with O(log n) insertions."
        },
        {
            question: "What is a Trie used for?",
            options: ["Sorting numbers", "Storing strings with common prefixes", "Graph traversal", "Memory management"],
            correct: 1,
            explanation: "A Trie (Prefix Tree) is used for efficiently storing and searching strings with common prefixes, useful in autocomplete and spell checkers."
        },
        {
            question: "What does Dynamic Programming require?",
            options: ["Overlapping subproblems and optimal substructure", "Only recursion", "Only iteration", "Random access"],
            correct: 0,
            explanation: "Dynamic Programming requires overlapping subproblems (same subproblems solved multiple times) and optimal substructure (optimal solution contains optimal solutions to subproblems)."
        },
        {
            question: "What is the space complexity of Merge Sort?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2,
            explanation: "Merge Sort requires O(n) auxiliary space to store the merged subarrays during the sorting process."
        },
        {
            question: "In a Binary Search Tree, what is true?",
            options: ["Left child < Parent < Right child", "Left child > Parent > Right child", "No specific order", "All nodes are equal"],
            correct: 0,
            explanation: "In a BST, for any node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater."
        },
        {
            question: "What is the primary purpose of hashing?",
            options: ["Sorting data", "Achieving O(1) average lookup time", "Compressing files", "Encrypting data"],
            correct: 1,
            explanation: "Hashing provides O(1) average-case time complexity for search, insert, and delete operations by converting keys into array indices."
        },
        {
            question: "What is Dijkstra's algorithm used for?",
            options: ["Sorting arrays", "Finding shortest path in weighted graphs", "Tree traversal", "String matching"],
            correct: 1,
            explanation: "Dijkstra's algorithm finds the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights."
        }
    ],
    dbms: [
        {
            question: "What does ACID stand for in database systems?",
            options: ["Atomicity, Consistency, Isolation, Durability", "Array, Class, Interface, Data", "Addition, Condition, Integration, Deletion", "None of the above"],
            correct: 0,
            explanation: "ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent independence), Durability (permanent changes)."
        },
        {
            question: "What is the purpose of normalization?",
            options: ["Speed up queries", "Reduce data redundancy and improve integrity", "Increase storage space", "Encrypt data"],
            correct: 1,
            explanation: "Normalization organizes data to reduce redundancy and improve data integrity by dividing tables and defining relationships."
        },
        {
            question: "What is a Primary Key?",
            options: ["Can be NULL", "Uniquely identifies each record, cannot be NULL", "Can have duplicates", "Optional field"],
            correct: 1,
            explanation: "A Primary Key uniquely identifies each record in a table, cannot contain NULL values, and there can only be one per table."
        },
        {
            question: "Which JOIN returns all records from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
            correct: 3,
            explanation: "FULL JOIN (or FULL OUTER JOIN) returns all records from both tables, with NULLs where there are no matches."
        },
        {
            question: "What is an Index in a database?",
            options: ["A data structure that speeds up data retrieval", "A backup copy", "A constraint", "A table relationship"],
            correct: 0,
            explanation: "An Index is a data structure (like B-Tree) that speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations."
        },
        {
            question: "What is the difference between DELETE and TRUNCATE?",
            options: ["DELETE can be rolled back, TRUNCATE cannot", "Both are exactly the same", "TRUNCATE is slower", "DELETE removes the table structure"],
            correct: 0,
            explanation: "DELETE is a DML command that can be rolled back and removes specific rows, while TRUNCATE is a DDL command that cannot be rolled back and removes all rows quickly."
        },
        {
            question: "What is 3NF (Third Normal Form)?",
            options: ["No transitive dependency", "Atomic values only", "No partial dependency", "All of the above"],
            correct: 0,
            explanation: "3NF requires that a table is in 2NF and has no transitive dependencies (non-key attribute depending on another non-key attribute)."
        },
        {
            question: "What does SQL Injection exploit?",
            options: ["Hardware vulnerabilities", "Unsanitized user input in SQL queries", "Network protocols", "Operating system bugs"],
            correct: 1,
            explanation: "SQL Injection exploits unsanitized user input to execute malicious SQL commands. Prevention: use prepared statements/parameterized queries."
        },
        {
            question: "What is the difference between OLTP and OLAP?",
            options: ["OLTP handles transactions, OLAP handles analysis", "Both are the same", "OLAP is faster for transactions", "OLTP is used for data warehousing"],
            correct: 0,
            explanation: "OLTP (Online Transaction Processing) handles day-to-day transactions with high volume of small operations, while OLAP (Online Analytical Processing) analyzes large historical datasets."
        },
        {
            question: "What is a Foreign Key?",
            options: ["References Primary Key of another table", "Uniquely identifies records", "Can be NULL always", "Same as Primary Key"],
            correct: 0,
            explanation: "A Foreign Key is a field that references the Primary Key of another table, enforcing referential integrity between tables."
        }
    ],
    os: [
        {
            question: "What is the main difference between Process and Thread?",
            options: ["Process has separate memory, Thread shares memory", "Both are exactly the same", "Thread has separate memory", "Process is faster"],
            correct: 0,
            explanation: "A Process has its own separate memory space, while Threads within the same process share the memory space, making context switching faster."
        },
        {
            question: "What are the four conditions necessary for Deadlock?",
            options: ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait", "Only one condition needed", "Random conditions", "None of the above"],
            correct: 0,
            explanation: "All four conditions must be present simultaneously for deadlock: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
        },
        {
            question: "What is the purpose of Virtual Memory?",
            options: ["Extend RAM using disk space", "Speed up CPU", "Encrypt data", "Backup files"],
            correct: 0,
            explanation: "Virtual Memory uses disk storage as an extension of RAM, creating the illusion of large memory and allowing programs larger than physical RAM to run."
        },
        {
            question: "What is a System Call?",
            options: ["User function", "Interface between application and OS kernel", "Database query", "Network request"],
            correct: 1,
            explanation: "A System Call is the mechanism used by application programs to request services from the operating system's kernel (e.g., read(), write(), fork())."
        },
        {
            question: "What is the difference between Paging and Segmentation?",
            options: ["Paging uses fixed-size blocks, Segmentation uses variable-size blocks", "Both use fixed sizes", "Both use variable sizes", "No difference"],
            correct: 0,
            explanation: "Paging divides memory into fixed-size pages/frames, while Segmentation divides memory into variable-sized segments based on logical divisions."
        },
        {
            question: "What is Context Switching?",
            options: ["Saving state of current process and loading next process", "Switching users", "Changing programs", "Updating files"],
            correct: 0,
            explanation: "Context Switching is the process where the OS saves the state (context) of the current process and loads the saved state of the next process."
        },
        {
            question: "What is Thrashing?",
            options: ["Process spends more time paging than executing", "Fast execution", "Efficient memory usage", "CPU overheating"],
            correct: 0,
            explanation: "Thrashing occurs when a process spends more time swapping pages in and out of memory than executing instructions, causing severe performance degradation."
        },
        {
            question: "What is the difference between Mutex and Semaphore?",
            options: ["Mutex is binary lock, Semaphore can be counting", "Both are exactly the same", "Mutex is slower", "Semaphore is obsolete"],
            correct: 0,
            explanation: "Mutex is a simple binary lock for mutual exclusion (only one thread), while Semaphore is a signaling mechanism that can be binary or counting (multiple threads)."
        },
        {
            question: "What is the purpose of the Banker's Algorithm?",
            options: ["Banking transactions", "Deadlock avoidance", "Scheduling processes", "Memory allocation"],
            correct: 1,
            explanation: "The Banker's Algorithm is used for deadlock avoidance by determining if allocating resources will leave the system in a safe state."
        },
        {
            question: "What is the difference between Internal and External Fragmentation?",
            options: ["Internal: wasted space within block, External: scattered free space", "Both are the same", "Internal is worse", "External doesn't exist"],
            correct: 0,
            explanation: "Internal Fragmentation is wasted space within allocated memory blocks, while External Fragmentation is free memory scattered in small non-contiguous chunks."
        }
    ],
    networks: [
        {
            question: "What is the main difference between TCP and UDP?",
            options: ["TCP is connection-oriented and reliable, UDP is connectionless and unreliable", "UDP is always better", "Both are the same", "TCP is faster"],
            correct: 0,
            explanation: "TCP provides reliable, ordered delivery with connection establishment (3-way handshake), while UDP is faster but doesn't guarantee delivery or order."
        },
        {
            question: "What does DNS do?",
            options: ["Encrypts data", "Translates domain names to IP addresses", "Compresses files", "Scans for viruses"],
            correct: 1,
            explanation: "DNS (Domain Name System) translates human-readable domain names (e.g., example.com) into IP addresses that computers use to communicate."
        },
        {
            question: "What are the steps in the TCP 3-Way Handshake?",
            options: ["SYN, SYN-ACK, ACK", "ACK, SYN, ACK", "SYN, SYN, SYN", "ACK, ACK, ACK"],
            correct: 0,
            explanation: "TCP connection establishment: 1) Client sends SYN, 2) Server sends SYN-ACK, 3) Client sends ACK. Connection is established."
        },
        {
            question: "What is the difference between HTTP and HTTPS?",
            options: ["HTTPS is encrypted using TLS/SSL", "HTTP is faster", "No difference", "HTTPS uses UDP"],
            correct: 0,
            explanation: "HTTPS encrypts data using TLS/SSL protocol, ensuring confidentiality, integrity, and authentication, while HTTP sends data in plain text."
        },
        {
            question: "What layer does a Router operate at in the OSI model?",
            options: ["Physical Layer", "Data Link Layer", "Network Layer", "Application Layer"],
            correct: 2,
            explanation: "Routers operate at the Network Layer (Layer 3) and make routing decisions based on IP addresses to connect different networks."
        },
        {
            question: "What is the purpose of NAT?",
            options: ["Maps private IPs to public IPs", "Encrypts data", "Speeds up internet", "Blocks viruses"],
            correct: 0,
            explanation: "NAT (Network Address Translation) maps many private IP addresses to fewer public IP addresses, conserving IPv4 addresses and adding basic security."
        },
        {
            question: "What is ARP used for?",
            options: ["Maps IP address to MAC address", "Maps domain to IP", "Encrypts packets", "Routes packets"],
            correct: 0,
            explanation: "ARP (Address Resolution Protocol) maps an IP address (Layer 3) to a corresponding MAC address (Layer 2) within the same local network."
        },
        {
            question: "What is a Firewall?",
            options: ["Hardware component", "Monitors and controls network traffic based on rules", "Antivirus software", "Backup system"],
            correct: 1,
            explanation: "A Firewall monitors and controls incoming/outgoing network traffic based on security rules, acting as a barrier between trusted and untrusted networks."
        },
        {
            question: "What is the difference between IPv4 and IPv6?",
            options: ["IPv4 is 32-bit, IPv6 is 128-bit", "Both are 32-bit", "IPv4 is newer", "No significant difference"],
            correct: 0,
            explanation: "IPv4 uses 32-bit addresses (limited to ~4.3 billion), while IPv6 uses 128-bit addresses, solving address exhaustion and adding native security features."
        },
        {
            question: "What HTTP status code indicates 'Not Found'?",
            options: ["200", "301", "404", "500"],
            correct: 2,
            explanation: "HTTP status code 404 means 'Not Found' - the server cannot find the requested resource. Other common codes: 200 (OK), 500 (Server Error)."
        }
    ],
    web: [
        {
            question: "What is the Event Loop in JavaScript?",
            options: ["Handles asynchronous operations", "A loop statement", "An error handler", "A database query"],
            correct: 0,
            explanation: "The Event Loop allows JavaScript to perform non-blocking asynchronous operations by moving callbacks from the Callback Queue to the Call Stack when the stack is empty."
        },
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: ["== performs type coercion, === does not", "Both are exactly the same", "=== is slower", "== is stricter"],
            correct: 0,
            explanation: "== (equality) performs type coercion before comparison, while === (strict equality) compares both value and type without coercion. Always prefer ===."
        },
        {
            question: "What is a Closure in JavaScript?",
            options: ["A function with access to its outer scope", "A loop", "An object", "A class"],
            correct: 0,
            explanation: "A Closure is a function bundled with its lexical environment, allowing it to access variables from an outer scope even after the outer function has finished executing."
        },
        {
            question: "What is CORS?",
            options: ["Cross-Origin Resource Sharing - browser security mechanism", "A CSS framework", "A database", "An HTML tag"],
            correct: 0,
            explanation: "CORS is a browser security mechanism that restricts cross-domain requests. Servers must explicitly allow cross-origin requests via Access-Control headers."
        },
        {
            question: "What is the difference between Local Storage and Session Storage?",
            options: ["Local Storage persists after browser close, Session Storage doesn't", "Both are exactly the same", "Session Storage is larger", "Local Storage is slower"],
            correct: 0,
            explanation: "Local Storage persists data even after the browser is closed, while Session Storage is cleared when the browser tab is closed. Both store up to ~5MB."
        },
        {
            question: "What does REST stand for?",
            options: ["Representational State Transfer", "Remote Execution Service Tool", "Real-time State Tracking", "None of the above"],
            correct: 0,
            explanation: "REST (Representational State Transfer) is an architectural style for APIs using HTTP methods (GET, POST, PUT, DELETE) and stateless communication."
        },
        {
            question: "What is the purpose of 'use strict' in JavaScript?",
            options: ["Enables strict mode to catch common errors", "Makes code faster", "Disables JavaScript", "Compresses code"],
            correct: 0,
            explanation: "'use strict' enables strict mode, which catches common coding errors, prevents use of undeclared variables, and disables some confusing features."
        },
        {
            question: "What is the Virtual DOM in React?",
            options: ["Lightweight copy of actual DOM for efficient updates", "A database", "A server", "An HTML element"],
            correct: 0,
            explanation: "Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to efficiently determine minimal changes needed before updating the real DOM."
        },
        {
            question: "What is the difference between call(), apply(), and bind()?",
            options: ["call/apply execute immediately, bind returns new function", "All are exactly the same", "bind is faster", "call is obsolete"],
            correct: 0,
            explanation: "call() and apply() execute immediately (apply takes array of args), while bind() returns a new function with the 'this' context permanently set."
        },
        {
            question: "What is SSR (Server-Side Rendering)?",
            options: ["Server generates HTML before sending to browser", "Client-side only", "A database technique", "A CSS method"],
            correct: 0,
            explanation: "SSR means the server renders the full HTML page before sending it to the browser, improving SEO and initial page load performance."
        }
    ]
};