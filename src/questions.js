const raw = [
  {
    "id": 1,
    "category": "Software Architecture",
    "question": "Which parameter is used to assess and evaluate software architectures?",
    "options": [
      "Responsiveness of Architectures",
      "Durability of Architectures",
      "Architectural quality attributes",
      "Number of components in the Architecture"
    ],
    "answer": 2,
    "answer_text": "Architectural quality attributes",
    "explanation": "Software architecture is evaluated using quality attributes (non-functional requirements) such as performance, scalability, security, and maintainability."
  },
  {
    "id": 2,
    "category": "Software Architecture",
    "question": "Why is software architecture so important?",
    "options": [
      "Communication among stakeholders",
      "Early design decisions",
      "Transferable abstraction of a system",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "Architecture enables stakeholder communication, captures early design decisions, and provides a transferable abstraction of the system."
  },
  {
    "id": 3,
    "category": "Software Architecture",
    "question": "Which quality can most likely be improved by using a layered architecture?",
    "options": [
      "Runtime efficiency (performance)",
      "Flexibility at runtime (configurability)",
      "Flexibility in modifying or changing the system",
      "Non-repudiability"
    ],
    "answer": 2,
    "answer_text": "Flexibility in modifying or changing the system",
    "explanation": "Layered architecture improves modifiability \u2014 layers can be changed independently, making the system easier to maintain."
  },
  {
    "id": 4,
    "category": "Software Architecture",
    "question": "What components hide the distinctions between various microservices from end client applications?",
    "options": [
      "A layered system",
      "API gateway",
      "API proxy",
      "API logging"
    ],
    "answer": 1,
    "answer_text": "API gateway",
    "explanation": "An API Gateway acts as the single entry point, routing requests and hiding internal microservice boundaries from clients."
  },
  {
    "id": 5,
    "category": "Software Architecture",
    "question": "Which view is most often used in view-based architecture development methods?",
    "options": [
      "Context view",
      "Configuration view",
      "Building Block/Component view",
      "Physical database view"
    ],
    "answer": 2,
    "answer_text": "Building Block/Component view",
    "explanation": "The Component/Building Block view is the most commonly used architectural view, showing system structure and component relationships."
  },
  {
    "id": 6,
    "category": "Software Architecture",
    "question": "What is the most appropriate indicator for architectural problem areas?",
    "options": [
      "Missing comments",
      "Names of public methods do not reflect their purpose",
      "Number of test cases per component",
      "High coupling of components"
    ],
    "answer": 3,
    "answer_text": "High coupling of components",
    "explanation": "High coupling is a key indicator of architectural problems \u2014 it makes the system fragile and difficult to maintain."
  },
  {
    "id": 7,
    "category": "Software Architecture",
    "question": "What are the most important goals of software architecture?",
    "options": [
      "Enable cost-effective integration and acceptance tests",
      "Improve accuracy of patterns in structure",
      "Enable basic understanding of structures and concepts for all stakeholders",
      "Help understand the completeness of requirements"
    ],
    "answer": 2,
    "answer_text": "Enable basic understanding of structures and concepts for all stakeholders",
    "explanation": "A core goal of software architecture is to provide a shared understanding of the system structure for all stakeholders."
  },
  {
    "id": 8,
    "category": "Software Architecture",
    "question": "Select the one NOT related to the purpose of properly documenting software architecture.",
    "options": [
      "For stakeholder communication",
      "To easily figure out the source code flow",
      "For critical system design decisions",
      "To know how the system is organized and interoperates"
    ],
    "answer": 1,
    "answer_text": "To easily figure out the source code flow",
    "explanation": "Architecture documentation addresses structure, decisions, and communication \u2014 not source code navigation."
  },
  {
    "id": 9,
    "category": "Software Architecture",
    "question": "Select a fundamental issue NOT considered by software architects during architectural design.",
    "options": [
      "Which architectural organization best delivers functional requirements",
      "How to decompose structural components into sub-components",
      "How the system will be distributed across cores or processes",
      "Which architectural patterns or styles to use"
    ],
    "answer": 0,
    "answer_text": "Which architectural organization best delivers functional requirements",
    "explanation": "Architecture primarily addresses non-functional concerns. Delivering specific functional requirements is a detailed design concern."
  },
  {
    "id": 10,
    "category": "Software Architecture",
    "question": "Which is NOT a correct statement regarding project life cycle?",
    "options": [
      "In agile, scope is determined early but time/cost are routinely modified",
      "In waterfall, scope, time and cost are determined in early phase",
      "In agile, the project scope cannot be outlined before the start of iteration",
      "In incremental, deliverable is produced through a series of iterations"
    ],
    "answer": 2,
    "answer_text": "In agile, the project scope cannot be outlined before the start of iteration",
    "explanation": "In agile, a high-level scope can be outlined before iterations start; detailed requirements evolve during iterations."
  },
  {
    "id": 11,
    "category": "Software Architecture",
    "question": "Which of the following is the most important feature of the Spiral model?",
    "options": [
      "Performance management",
      "Efficiency management",
      "Risk management",
      "Quality management"
    ],
    "answer": 2,
    "answer_text": "Risk management",
    "explanation": "The Spiral model's defining characteristic is iterative risk management \u2014 each loop involves identifying and mitigating risks."
  },
  {
    "id": 12,
    "category": "OOP & Programming",
    "question": "Which of the following statements is NOT correct about OOP languages?",
    "options": [
      "C++ is an object-oriented programming language",
      "Java is an object-oriented programming language",
      "The OOP approach does not separate behavior from data",
      "Java is the only object-oriented programming language"
    ],
    "answer": 3,
    "answer_text": "Java is the only object-oriented programming language",
    "explanation": "Many languages support OOP (Python, C++, C#, Ruby, etc.). Java is not the only one."
  },
  {
    "id": 13,
    "category": "OOP & Programming",
    "question": "Polymorphism means:",
    "options": [
      "Declaring all the methods of a class as public",
      "Declaring all the attributes of a class as private",
      "Hiding of information so it is not accessible to other classes",
      "Having methods or operators with the same name performing different functions"
    ],
    "answer": 3,
    "answer_text": "Having methods or operators with the same name performing different functions",
    "explanation": "Polymorphism means 'many forms' \u2014 the same method name can behave differently depending on the object or arguments."
  },
  {
    "id": 14,
    "category": "OOP & Programming",
    "question": "Which OOP principle is suitable when pets share speak() behavior but only dogs can fetch()?",
    "options": [
      "Information hiding",
      "Encapsulation",
      "Polymorphism",
      "Inheritance"
    ],
    "answer": 3,
    "answer_text": "Inheritance",
    "explanation": "Inheritance allows Dog and Cat to inherit common behavior from Pet, while Dog adds its specific fetch() behavior."
  },
  {
    "id": 15,
    "category": "OOP & Programming",
    "question": "Which one of the following is a correct identifier in C++?",
    "options": [
      "7variable",
      "7VARIABLE",
      "$variable",
      "variable_1234"
    ],
    "answer": 3,
    "answer_text": "variable_1234",
    "explanation": "Identifiers must begin with a letter or underscore, not a digit or special character. variable_1234 is valid."
  },
  {
    "id": 16,
    "category": "OOP & Programming",
    "question": "Which of the following is the most fundamental characteristic of an abstract class?",
    "options": [
      "Cannot be inherited",
      "Is a mechanism of encapsulation",
      "Cannot be instantiated",
      "Can only contain abstract methods"
    ],
    "answer": 2,
    "answer_text": "Cannot be instantiated",
    "explanation": "An abstract class cannot be instantiated directly. It serves as a blueprint for subclasses."
  },
  {
    "id": 17,
    "category": "OOP & Programming",
    "question": "Which method has the same name as that of its class?",
    "options": [
      "delete",
      "class",
      "constructor",
      "finalize"
    ],
    "answer": 2,
    "answer_text": "constructor",
    "explanation": "A constructor is a special method that has the same name as its class and is called when an object is created."
  },
  {
    "id": 18,
    "category": "OOP & Programming",
    "question": "Which one of the following is it NOT possible to do in Java?",
    "options": [
      "Implement more than one interface",
      "Execute more than one thread at a time",
      "Create arrays with more than two dimensions",
      "Create and manipulate pointers"
    ],
    "answer": 3,
    "answer_text": "Create and manipulate pointers",
    "explanation": "Java does not support explicit pointer manipulation. Memory management is handled by the JVM and garbage collector."
  },
  {
    "id": 19,
    "category": "OOP & Programming",
    "question": "Java's garbage collector carries out which function?",
    "options": [
      "Frees up memory locations no longer in use",
      "Disposes of an applet once a web page is no longer visible",
      "Disposes of a frame",
      "Terminates a thread"
    ],
    "answer": 0,
    "answer_text": "Frees up memory locations no longer in use",
    "explanation": "Java's garbage collector automatically reclaims heap memory occupied by objects that are no longer reachable."
  },
  {
    "id": 20,
    "category": "OOP & Programming",
    "question": "Which of the following is an example of a checked exception in Java?",
    "options": [
      "IOException",
      "RuntimeException",
      "NumberFormatException",
      "NegativeArraySizeException"
    ],
    "answer": 0,
    "answer_text": "IOException",
    "explanation": "IOException is a checked exception \u2014 the compiler requires you to handle or declare it. RuntimeException subclasses are unchecked."
  },
  {
    "id": 21,
    "category": "OOP & Programming",
    "question": "Which one of the following statements is wrong regarding try\u2026catch?",
    "options": [
      "When exception occurs, execution of try block is interrupted",
      "Execution control moves to catch block after exception occurs",
      "The catch block is used to handle exceptions from try block",
      "The catch block is executed once regardless of exceptions in try block"
    ],
    "answer": 3,
    "answer_text": "The catch block is executed once regardless of exceptions in try block",
    "explanation": "The catch block only executes if an exception is thrown. If no exception occurs, the catch block is skipped entirely."
  },
  {
    "id": 22,
    "category": "OOP & Programming",
    "question": "Which access modifier in Java restricts access to members only within the same class?",
    "options": [
      "public",
      "protected",
      "private",
      "package-private (no modifier)"
    ],
    "answer": 2,
    "answer_text": "private",
    "explanation": "The `private` modifier restricts access to the declaring class only. Package-private (no modifier) allows access within the same package."
  },
  {
    "id": 23,
    "category": "OOP & Programming",
    "question": "What will be the output? int arr[]={3,4,5,6,7}; for(int i=0; i<=arr.length-2; ++i) print(arr[i])",
    "options": [
      "3,4",
      "3,4,5",
      "3,4,5,6,7",
      "3,4,5,6"
    ],
    "answer": 3,
    "answer_text": "3,4,5,6",
    "explanation": "arr.length-2 = 3. Loop runs while i<=3, so prints arr[0] through arr[3]: 3, 4, 5, 6."
  },
  {
    "id": 24,
    "category": "OOP & Programming",
    "question": "What is the correct structure of the for loop statement?",
    "options": [
      "for(initialization; condition)",
      "for(increment/decrement; initialization; condition)",
      "for(condition, initialization, increment/decrement)",
      "for(initialization; condition; increment/decrement)"
    ],
    "answer": 3,
    "answer_text": "for(initialization; condition; increment/decrement)",
    "explanation": "The standard for loop syntax is: for(initialization; condition; increment/decrement) { body }"
  },
  {
    "id": 25,
    "category": "OOP & Programming",
    "question": "Which keyword is used to declare an asynchronous function in JavaScript?",
    "options": [
      "future",
      "sync",
      "await",
      "async"
    ],
    "answer": 3,
    "answer_text": "async",
    "explanation": "The 'async' keyword declares an asynchronous function. 'await' is used inside it to pause until a Promise resolves."
  },
  {
    "id": 26,
    "category": "OOP & Programming",
    "question": "What does the spread operator (...) do in JavaScript?",
    "options": [
      "Makes a for loop execute three times",
      "Spreads iterables into individual elements",
      "Makes iterators continue with an increment interval",
      "No such operator exists in JavaScript"
    ],
    "answer": 1,
    "answer_text": "Spreads iterables into individual elements",
    "explanation": "The spread operator (...) expands an iterable (array, string, etc.) into individual elements."
  },
  {
    "id": 27,
    "category": "OOP & Programming",
    "question": "Which method is used to access HTML elements by class name using JavaScript?",
    "options": [
      "getTagById()",
      "getElementsByHTMLName()",
      "getHTMLClassByName()",
      "getElementsByClassName()"
    ],
    "answer": 3,
    "answer_text": "getElementsByClassName()",
    "explanation": "getElementsByClassName() returns a live HTMLCollection of elements with the specified class name."
  },
  {
    "id": 28,
    "category": "OOP & Programming",
    "question": "Which one is wrong regarding interface in Java?",
    "options": [
      "An interface is a reference data type",
      "Interface abstract methods are accessed using interface instances",
      "Interface includes abstract methods",
      "One class can implement multiple interfaces"
    ],
    "answer": 1,
    "answer_text": "Interface abstract methods are accessed using interface instances",
    "explanation": "Interfaces cannot be instantiated. Methods are accessed through class instances that implement the interface."
  },
  {
    "id": 29,
    "category": "OOP & Programming",
    "question": "Which is NOT true regarding algorithm development during problem solving?",
    "options": [
      "Should consider platforms on which it runs",
      "Is a step-wise logical description of how to solve the problem",
      "Is developed considering details of the programming language",
      "Is equivalent to the programming language code"
    ],
    "answer": 3,
    "answer_text": "Is equivalent to the programming language code",
    "explanation": "An algorithm is language-independent. It describes the logic, not the implementation syntax."
  },
  {
    "id": 30,
    "category": "OOP & Programming",
    "question": "Which control structure best fits iterating 50 times and skipping non-positive numbers?",
    "options": [
      "break",
      "continue",
      "for",
      "jump"
    ],
    "answer": 1,
    "answer_text": "continue",
    "explanation": "A for loop iterates 50 times, and 'continue' skips the current iteration (negative numbers) moving to the next."
  },
  {
    "id": 31,
    "category": "OOP & Programming",
    "question": "What will the C++ code output? int a[]={1,2,3,4,5}; even-index elements summed, odd-index subtracted.",
    "options": [
      "2",
      "34",
      "15",
      "3"
    ],
    "answer": 3,
    "answer_text": "3",
    "explanation": "Even indices (0,2,4): 1+3+5=9. Odd indices (1,3): 2+4=6. Result: 9-6 = 3."
  },
  {
    "id": 32,
    "category": "OOP & Programming",
    "question": "What will C++ output? void solve(): string 'scaler', n=6, s=s+s[i] in loop. Time complexity?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n\u00b2)"
    ],
    "answer": 2,
    "answer_text": "O(n)",
    "explanation": "The loop runs n times, each iteration doing constant work (character append). Total: O(n)."
  },
  {
    "id": 33,
    "category": "Data Structures & Algorithms",
    "question": "What is the time complexity of searching in a balanced Binary Search Tree?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "answer_text": "O(log n)",
    "explanation": "In a balanced BST, each comparison eliminates half the nodes, giving O(log n) search time."
  },
  {
    "id": 34,
    "category": "Data Structures & Algorithms",
    "question": "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Heap"
    ],
    "answer": 1,
    "answer_text": "Stack",
    "explanation": "A Stack operates LIFO \u2014 the last element pushed is the first one popped."
  },
  {
    "id": 35,
    "category": "Data Structures & Algorithms",
    "question": "What is the worst-case time complexity of QuickSort?",
    "options": [
      "O(n log n)",
      "O(n\u00b2)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "answer_text": "O(n\u00b2)",
    "explanation": "QuickSort degrades to O(n\u00b2) when the pivot is always the smallest or largest element (e.g., already sorted input)."
  },
  {
    "id": 36,
    "category": "Data Structures & Algorithms",
    "question": "Which traversal of a Binary Search Tree produces nodes in sorted order?",
    "options": [
      "Pre-order",
      "Post-order",
      "In-order",
      "Level-order"
    ],
    "answer": 2,
    "answer_text": "In-order",
    "explanation": "In-order traversal (left \u2192 root \u2192 right) visits nodes in ascending sorted order in a BST."
  },
  {
    "id": 37,
    "category": "Data Structures & Algorithms",
    "question": "In a min-heap, the root always contains:",
    "options": [
      "The maximum element",
      "The median element",
      "The minimum element",
      "A random element"
    ],
    "answer": 2,
    "answer_text": "The minimum element",
    "explanation": "By the min-heap property, every node is \u2264 its children, so the minimum is always at the root."
  },
  {
    "id": 38,
    "category": "Data Structures & Algorithms",
    "question": "A queue where the most recently added item is always first out is:",
    "options": [
      "LIFO queue",
      "FIFO queue",
      "Real-time queue",
      "Priority queue"
    ],
    "answer": 0,
    "answer_text": "LIFO queue",
    "explanation": "A LIFO queue is essentially a stack \u2014 the most recently added item is removed first."
  },
  {
    "id": 39,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following is a non-linear data structure?",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Linked list"
    ],
    "answer": 2,
    "answer_text": "Tree",
    "explanation": "Trees are non-linear \u2014 each node can have multiple children, unlike sequential structures."
  },
  {
    "id": 40,
    "category": "Data Structures & Algorithms",
    "question": "Which data structure allows deleting from front and inserting at rear?",
    "options": [
      "Dequeue",
      "Binary search tree",
      "Queue",
      "Stack"
    ],
    "answer": 2,
    "answer_text": "Queue",
    "explanation": "A Queue follows FIFO \u2014 insertion at rear and deletion from front."
  },
  {
    "id": 41,
    "category": "Data Structures & Algorithms",
    "question": "Which sorting algorithm provides best worst-case time complexity?",
    "options": [
      "Merge sort",
      "Selection sort",
      "Quick sort",
      "Bubble sort"
    ],
    "answer": 0,
    "answer_text": "Merge sort",
    "explanation": "Merge sort guarantees O(n log n) in all cases. Quick sort can degrade to O(n\u00b2) in the worst case."
  },
  {
    "id": 42,
    "category": "Data Structures & Algorithms",
    "question": "An algorithm that calls itself directly or indirectly is known as:",
    "options": [
      "Recursion",
      "Sub algorithm",
      "Traversal algorithm",
      "Polish notation"
    ],
    "answer": 0,
    "answer_text": "Recursion",
    "explanation": "Recursion is the technique where a function calls itself with a smaller sub-problem until a base case is reached."
  },
  {
    "id": 43,
    "category": "Data Structures & Algorithms",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n\u00b2)",
      "O(log n)"
    ],
    "answer": 3,
    "answer_text": "O(log n)",
    "explanation": "Binary search halves the search space at each step, giving O(log n) time complexity."
  },
  {
    "id": 44,
    "category": "Data Structures & Algorithms",
    "question": "Which analysis mechanism defines the input for which an algorithm takes the LEAST time?",
    "options": [
      "Worst case",
      "Best case",
      "Standard case",
      "Average case"
    ],
    "answer": 1,
    "answer_text": "Best case",
    "explanation": "Best-case analysis identifies the input that leads to the minimum execution time for an algorithm."
  },
  {
    "id": 45,
    "category": "Data Structures & Algorithms",
    "question": "What is the time complexity of nested loops: for i in n, for j in i*i, if j%i==0 for k in j?",
    "options": [
      "O(n\u00b2)",
      "O(n log n)",
      "O(n\u2077)",
      "O(n\u2075)"
    ],
    "answer": 3,
    "answer_text": "O(n\u2075)",
    "explanation": "The outer O(n), middle O(n\u00b2), inner runs O(n) times for n/i qualifying j values. Combined: O(n\u2075)."
  },
  {
    "id": 46,
    "category": "Data Structures & Algorithms",
    "question": "Which pair of algorithms has equal time and space complexity under equal cost?",
    "options": [
      "A* and BFS",
      "DFS and UCS",
      "UCS and BFS",
      "DFS and BFS"
    ],
    "answer": 2,
    "answer_text": "UCS and BFS",
    "explanation": "UCS and BFS have the same O(b^d) complexity when all step costs are equal (UCS becomes BFS)."
  },
  {
    "id": 47,
    "category": "Databases",
    "question": "Which normal form eliminates transitive dependencies?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answer": 2,
    "answer_text": "3NF",
    "explanation": "Third Normal Form (3NF) requires non-key attributes depend only on the primary key, eliminating transitive dependencies."
  },
  {
    "id": 48,
    "category": "Databases",
    "question": "Which SQL keyword retrieves unique records?",
    "options": [
      "UNIQUE",
      "DISTINCT",
      "GROUP BY",
      "HAVING"
    ],
    "answer": 1,
    "answer_text": "DISTINCT",
    "explanation": "The DISTINCT keyword filters duplicate rows from a SELECT result set."
  },
  {
    "id": 49,
    "category": "Databases",
    "question": "ACID properties stand for:",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Integrity, Data",
      "Atomicity, Concurrency, Integrity, Durability",
      "Access, Consistency, Isolation, Data"
    ],
    "answer": 0,
    "answer_text": "Atomicity, Consistency, Isolation, Durability",
    "explanation": "ACID ensures reliable transactions: Atomicity (all-or-nothing), Consistency, Isolation (concurrent safety), Durability (persisted)."
  },
  {
    "id": 50,
    "category": "Databases",
    "question": "A transaction property that states committed changes must persist:",
    "options": [
      "Isolation",
      "Durability",
      "Atomicity",
      "Consistency preservation"
    ],
    "answer": 1,
    "answer_text": "Durability",
    "explanation": "Durability guarantees that once a transaction is committed, changes are permanent even after system failure."
  },
  {
    "id": 51,
    "category": "Databases",
    "question": "Which JOIN returns all rows from both tables, with NULLs where there is no match?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "answer": 3,
    "answer_text": "FULL OUTER JOIN",
    "explanation": "FULL OUTER JOIN returns all rows from both tables; unmatched rows get NULL values for the other table's columns."
  },
  {
    "id": 52,
    "category": "Databases",
    "question": "Which indexing structure is most efficient for range queries?",
    "options": [
      "Hash Index",
      "B-Tree Index",
      "Bitmap Index",
      "Full-Text Index"
    ],
    "answer": 1,
    "answer_text": "B-Tree Index",
    "explanation": "B-Tree indexes store data in sorted order, making them highly efficient for range queries and ordered scans."
  },
  {
    "id": 53,
    "category": "Databases",
    "question": "Which schema of the three-schema architecture describes the structure of the whole database?",
    "options": [
      "Internal schema",
      "Conceptual schema",
      "External schema",
      "Schema"
    ],
    "answer": 1,
    "answer_text": "Conceptual schema",
    "explanation": "The conceptual schema describes the logical structure of the entire database, independent of physical storage or user views."
  },
  {
    "id": 54,
    "category": "Databases",
    "question": "What is the purpose of a foreign key?",
    "options": [
      "Must be unique in its table",
      "References a primary key in another table",
      "Cannot contain NULL values",
      "Is automatically indexed"
    ],
    "answer": 1,
    "answer_text": "References a primary key in another table",
    "explanation": "A foreign key establishes referential integrity by referencing the primary key of another (or the same) table."
  },
  {
    "id": 55,
    "category": "Databases",
    "question": "Which SQL statement gives every employee a 10% raise?",
    "options": [
      "CHANGE Emp SET salary=salary*1.1",
      "UPDATE Emp SET salary=salary*1.1",
      "ALTER Emp SET salary=salary*1.1",
      "MODIFY Emp SET salary=salary*1.1"
    ],
    "answer": 1,
    "answer_text": "UPDATE Emp SET salary=salary*1.1",
    "explanation": "UPDATE modifies existing rows. Correct syntax: UPDATE table SET column = expression."
  },
  {
    "id": 56,
    "category": "Databases",
    "question": "Which statement best describes the relational data model?",
    "options": [
      "Allows multiple records linked to same owner file",
      "Structures data in a tree-like parent-child structure",
      "Manages data as tuples grouped into relations",
      "Uses concepts such as entities, attributes and relationships"
    ],
    "answer": 2,
    "answer_text": "Manages data as tuples grouped into relations",
    "explanation": "The relational model organizes data as tuples (rows) grouped into relations (tables), based on set theory."
  },
  {
    "id": 57,
    "category": "Databases",
    "question": "Which constraint is violated when you INSERT a NULL primary key value?",
    "options": [
      "Domain Constraints",
      "Key Constraints",
      "Entity Integrity Constraints",
      "Referential Integrity Constraint"
    ],
    "answer": 2,
    "answer_text": "Entity Integrity Constraints",
    "explanation": "Entity Integrity states that primary key values must never be NULL \u2014 every row must be uniquely identifiable."
  },
  {
    "id": 58,
    "category": "Databases",
    "question": "Aggregate data accessible while hiding individual details from users is called:",
    "options": [
      "Inference control",
      "Access control",
      "Integrity control",
      "Encryption"
    ],
    "answer": 0,
    "answer_text": "Inference control",
    "explanation": "Inference control prevents users from deducing sensitive individual data from aggregate statistics."
  },
  {
    "id": 59,
    "category": "Databases",
    "question": "Which one of the following is FALSE about database types?",
    "options": [
      "In OO databases, data are stored as collections of rows and tables",
      "In relational databases, data are perceived as tables",
      "OO databases allow object identification and communication",
      "OO databases allow reusability of objects"
    ],
    "answer": 0,
    "answer_text": "In OO databases, data are stored as collections of rows and tables",
    "explanation": "Object-oriented databases store data as objects, not as rows and tables \u2014 that is the relational model."
  },
  {
    "id": 60,
    "category": "Databases",
    "question": "For a binary relationship set R between A and B, what expresses the number of entities associated?",
    "options": [
      "Cardinality Ratio",
      "Limited Ratio",
      "Degree Ratio",
      "Participation Constraints"
    ],
    "answer": 0,
    "answer_text": "Cardinality Ratio",
    "explanation": "Cardinality ratio (1:1, 1:N, M:N) defines how many entity instances can be associated with each other."
  },
  {
    "id": 61,
    "category": "Databases",
    "question": "A functional dependency between two or more non-key attributes is called:",
    "options": [
      "Transitive dependency",
      "Partial transitive dependency",
      "Functional dependency",
      "Partial functional dependency"
    ],
    "answer": 0,
    "answer_text": "Transitive dependency",
    "explanation": "A transitive dependency occurs when a non-key attribute depends on another non-key attribute, violating 3NF."
  },
  {
    "id": 62,
    "category": "Databases",
    "question": "The capacity to change the internal schema without changing the conceptual schema is:",
    "options": [
      "Data independence",
      "Physical data independence",
      "Logical data independence",
      "None"
    ],
    "answer": 1,
    "answer_text": "Physical data independence",
    "explanation": "Physical data independence allows changing storage structures without affecting the logical schema or applications."
  },
  {
    "id": 63,
    "category": "Databases",
    "question": "In relational model terminology, a table is considered as a:",
    "options": [
      "Range",
      "Domain",
      "Relation",
      "Tuple"
    ],
    "answer": 2,
    "answer_text": "Relation",
    "explanation": "In the relational model, a table is formally called a relation \u2014 a set of tuples with the same attributes."
  },
  {
    "id": 64,
    "category": "Databases",
    "question": "Data Manipulation Language (DML) is NOT used to:",
    "options": [
      "Create information tables in the database",
      "Insert new information into the database",
      "Delete information in the database",
      "Modify information in the database"
    ],
    "answer": 0,
    "answer_text": "Create information tables in the database",
    "explanation": "Creating tables is DDL (CREATE, ALTER, DROP). DML handles INSERT, UPDATE, DELETE, SELECT."
  },
  {
    "id": 65,
    "category": "Databases",
    "question": "An entity that does not have a key attribute and is identification-dependent on another entity is called:",
    "options": [
      "Entity type",
      "Weak entity type",
      "Relationship type",
      "Relation"
    ],
    "answer": 1,
    "answer_text": "Weak entity type",
    "explanation": "A weak entity cannot be uniquely identified by its own attributes \u2014 it depends on a strong (owner) entity."
  },
  {
    "id": 66,
    "category": "Databases",
    "question": "The SELECT relational algebra operation creates:",
    "options": [
      "Horizontal partitioning",
      "Vertical partitioning",
      "Combination of attributes",
      "All except C"
    ],
    "answer": 0,
    "answer_text": "Horizontal partitioning",
    "explanation": "The SELECT (sigma \u03c3) operation in relational algebra filters rows (horizontal partitioning). PROJECT does column selection."
  },
  {
    "id": 67,
    "category": "Databases",
    "question": "Which is NOT among the characterizing features of the database approach?",
    "options": [
      "Application-data dependency",
      "Sharing of data",
      "Self-describing nature",
      "Data abstraction"
    ],
    "answer": 0,
    "answer_text": "Application-data dependency",
    "explanation": "Application-data independence (not dependency) is a feature of databases. Data dependency is the problem databases solve."
  },
  {
    "id": 68,
    "category": "Databases",
    "question": "If every non-key attribute is fully dependent on the primary key, the relation is in:",
    "options": [
      "First Normal Form",
      "Second Normal Form",
      "Third Normal Form",
      "Fourth Normal Form"
    ],
    "answer": 1,
    "answer_text": "Second Normal Form",
    "explanation": "2NF requires every non-key attribute to be fully functionally dependent on the entire primary key (no partial dependencies)."
  },
  {
    "id": 69,
    "category": "Databases",
    "question": "If no multivalued attributes and no partial dependencies exist in a relation, it is in:",
    "options": [
      "1NF",
      "3NF",
      "4NF",
      "2NF"
    ],
    "answer": 3,
    "answer_text": "2NF",
    "explanation": "Eliminating multivalued attributes achieves 1NF. Eliminating partial dependencies achieves 2NF."
  },
  {
    "id": 70,
    "category": "Databases",
    "question": "Which of the following can be a multivalued attribute?",
    "options": [
      "Phone number",
      "Name",
      "Date of birth",
      "Age"
    ],
    "answer": 0,
    "answer_text": "Phone number",
    "explanation": "Phone number is multivalued \u2014 a person can have multiple numbers (home, work, mobile)."
  },
  {
    "id": 71,
    "category": "Databases",
    "question": "Undesirable consequences when changing data in a relation are called:",
    "options": [
      "Referential integrity constraints",
      "Modification anomalies",
      "Normal form",
      "Transitive dependencies"
    ],
    "answer": 1,
    "answer_text": "Modification anomalies",
    "explanation": "Modification anomalies (insertion, deletion, update) occur due to data redundancy in poorly normalized relations."
  },
  {
    "id": 72,
    "category": "Databases",
    "question": "What does the relational algebra expression \u03c3 amount > 1200(Loan) do?",
    "options": [
      "Find all tuples in Loan",
      "Retrieve amount attribute where amount > 1200",
      "Find all tuples in Loan where amount is greater than 1200",
      "All are answers"
    ],
    "answer": 2,
    "answer_text": "Find all tuples in Loan where amount is greater than 1200",
    "explanation": "The sigma (\u03c3) operator filters tuples satisfying the given condition \u2014 here, loans with amount > 1200."
  },
  {
    "id": 73,
    "category": "Databases",
    "question": "The set of all possible values an attribute can have is called its:",
    "options": [
      "Table",
      "Domain",
      "Data",
      "None of the above"
    ],
    "answer": 1,
    "answer_text": "Domain",
    "explanation": "The domain defines the set of permissible values for an attribute (e.g., domain of Age: positive integers)."
  },
  {
    "id": 74,
    "category": "Databases",
    "question": "An ER diagram can express the overall ______ of a database graphically.",
    "options": [
      "View structure",
      "Model structure",
      "Architectural structure",
      "Logical structure"
    ],
    "answer": 3,
    "answer_text": "Logical structure",
    "explanation": "An ER diagram expresses the logical structure (entities, attributes, and relationships) of the database graphically."
  },
  {
    "id": 75,
    "category": "Databases",
    "question": "Which schema pertains to the actual storage of data and its form of storage?",
    "options": [
      "Physical Database schema",
      "Logical Database schema",
      "Physical data independence",
      "All"
    ],
    "answer": 0,
    "answer_text": "Physical Database schema",
    "explanation": "The internal/physical schema describes how data is physically stored on storage devices."
  },
  {
    "id": 76,
    "category": "Databases",
    "question": "The descriptive property of each entity set is called a(n):",
    "options": [
      "Entity",
      "Attribute",
      "Relation",
      "Model"
    ],
    "answer": 1,
    "answer_text": "Attribute",
    "explanation": "An attribute is a property or characteristic that describes an entity (e.g., Student has attributes: Name, Age, ID)."
  },
  {
    "id": 77,
    "category": "Databases",
    "question": "In database state update, DELETE operation may violate which constraint?",
    "options": [
      "Domain constraint",
      "Key constraint",
      "Referential integrity constraint",
      "None of the above"
    ],
    "answer": 2,
    "answer_text": "Referential integrity constraint",
    "explanation": "Deleting a row that is referenced by a foreign key in another table violates referential integrity."
  },
  {
    "id": 78,
    "category": "Databases",
    "question": "In database state update, INSERT operation may violate which constraints?",
    "options": [
      "Domain Constraint",
      "Key constraint",
      "Entity integrity constraints",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "INSERT can violate domain (wrong data type), key (duplicate primary key), and entity integrity (NULL primary key) constraints."
  },
  {
    "id": 79,
    "category": "Networking & Security",
    "question": "Which OSI layer is responsible for routing packets between networks?",
    "options": [
      "Data Link",
      "Transport",
      "Network",
      "Session"
    ],
    "answer": 2,
    "answer_text": "Network",
    "explanation": "The Network layer (Layer 3) handles logical addressing (IP) and routing of packets across different networks."
  },
  {
    "id": 80,
    "category": "Networking & Security",
    "question": "Which protocol provides reliable, connection-oriented data transmission?",
    "options": [
      "UDP",
      "ICMP",
      "TCP",
      "ARP"
    ],
    "answer": 2,
    "answer_text": "TCP",
    "explanation": "TCP guarantees delivery through connection establishment, acknowledgments, and retransmission."
  },
  {
    "id": 81,
    "category": "Networking & Security",
    "question": "What is the primary function of DNS?",
    "options": [
      "Encrypts data in transit",
      "Translates domain names to IP addresses",
      "Routes packets between networks",
      "Manages network bandwidth"
    ],
    "answer": 1,
    "answer_text": "Translates domain names to IP addresses",
    "explanation": "DNS (Domain Name System) translates human-readable domain names into machine-readable IP addresses."
  },
  {
    "id": 82,
    "category": "Networking & Security",
    "question": "Which HTTP status code indicates 'Not Found'?",
    "options": [
      "200",
      "301",
      "403",
      "404"
    ],
    "answer": 3,
    "answer_text": "404",
    "explanation": "HTTP 404 means the server couldn't find the requested resource. 200=OK, 301=Redirect, 403=Forbidden."
  },
  {
    "id": 83,
    "category": "Networking & Security",
    "question": "A firewall in a WAN-connected system is used to:",
    "options": [
      "Prevent fire from spreading via cables",
      "Avoid spreading of fire in network",
      "Stop unauthorized access by hackers",
      "Scan for viruses in files"
    ],
    "answer": 2,
    "answer_text": "Stop unauthorized access by hackers",
    "explanation": "A firewall monitors and controls network traffic to prevent unauthorized access."
  },
  {
    "id": 84,
    "category": "Networking & Security",
    "question": "Which is the correct order of OSI PDUs from bottom to top?",
    "options": [
      "Segment, Packet, Frame, Bit",
      "Segment, Frame, Packet, Bit",
      "Bit, Frame, Packet, Segment",
      "Bit, Packet, Frame, Segment"
    ],
    "answer": 2,
    "answer_text": "Bit, Frame, Packet, Segment",
    "explanation": "Bottom to top: Physical=Bit, Data Link=Frame, Network=Packet, Transport=Segment."
  },
  {
    "id": 85,
    "category": "Networking & Security",
    "question": "Which is true about Triple DES?",
    "options": [
      "192-bit keys on 64-bit blocks",
      "Uses 128-bit blocks and 92-bit keys",
      "Works with 192-bit blocks, applies DES once",
      "Works on 64-bit blocks with 56-bit keys applying DES three rounds"
    ],
    "answer": 3,
    "answer_text": "Works on 64-bit blocks with 56-bit keys applying DES three rounds",
    "explanation": "Triple DES (3DES) applies the DES algorithm three times to each 64-bit data block."
  },
  {
    "id": 86,
    "category": "Networking & Security",
    "question": "An HTTP request message always contains:",
    "options": [
      "A status line, a header, and a body",
      "A header only",
      "A header and a body",
      "A request line and a header"
    ],
    "answer": 3,
    "answer_text": "A request line and a header",
    "explanation": "HTTP requests always have a request line (method, URL, version) and headers. The body is optional."
  },
  {
    "id": 87,
    "category": "Networking & Security",
    "question": "Unauthorized disclosure of information is a violation of:",
    "options": [
      "Authorization",
      "Authentication",
      "Integrity",
      "Confidentiality"
    ],
    "answer": 3,
    "answer_text": "Confidentiality",
    "explanation": "Confidentiality ensures information is not disclosed to unauthorized parties."
  },
  {
    "id": 88,
    "category": "Networking & Security",
    "question": "A /24 subnet mask means:",
    "options": [
      "24 hosts per subnet",
      "24 bits for network, 8 for hosts",
      "8 bits for network, 24 for hosts",
      "24 subnets available"
    ],
    "answer": 1,
    "answer_text": "24 bits for network, 8 for hosts",
    "explanation": "CIDR /24 means 24 bits for the network portion, leaving 8 bits for hosts (2\u2078 - 2 = 254 usable hosts)."
  },
  {
    "id": 89,
    "category": "Networking & Security",
    "question": "Which protocol establishes a secure encrypted channel between local and remote computers?",
    "options": [
      "SSL",
      "SSH",
      "AAA",
      "SNMP"
    ],
    "answer": 1,
    "answer_text": "SSH",
    "explanation": "SSH (Secure Shell) creates a secure encrypted channel for remote login and data communication."
  },
  {
    "id": 90,
    "category": "Networking & Security",
    "question": "ICMP is mostly employed for:",
    "options": [
      "IP addressing",
      "Error and diagnostic functions",
      "Data forwarding",
      "Network routing"
    ],
    "answer": 1,
    "answer_text": "Error and diagnostic functions",
    "explanation": "ICMP is used for error reporting and network diagnostics (e.g., ping uses ICMP echo requests)."
  },
  {
    "id": 91,
    "category": "Networking & Security",
    "question": "Which address is looked up to deliver a message to the appropriate application on a host?",
    "options": [
      "Port",
      "CRC",
      "MAC",
      "IP"
    ],
    "answer": 0,
    "answer_text": "Port",
    "explanation": "A port number identifies the specific application/service. The OS routes incoming data to the right process using ports."
  },
  {
    "id": 92,
    "category": "Networking & Security",
    "question": "Which attack type involves injecting malicious SQL code into input fields?",
    "options": [
      "XSS Attack",
      "CSRF Attack",
      "SQL Injection",
      "Buffer Overflow"
    ],
    "answer": 2,
    "answer_text": "SQL Injection",
    "explanation": "SQL Injection exploits insufficient input validation to insert/alter SQL commands."
  },
  {
    "id": 93,
    "category": "Networking & Security",
    "question": "What does asymmetric encryption use?",
    "options": [
      "Same key for both operations",
      "Two different keys (public and private)",
      "No key \u2014 uses hashing",
      "A shared secret key only"
    ],
    "answer": 1,
    "answer_text": "Two different keys (public and private)",
    "explanation": "Asymmetric encryption uses a public key to encrypt and a private key to decrypt."
  },
  {
    "id": 94,
    "category": "Networking & Security",
    "question": "What is the purpose of a digital signature?",
    "options": [
      "Encrypt data for confidentiality",
      "Verify authenticity and integrity of a message",
      "Speed up data transmission",
      "Compress data before sending"
    ],
    "answer": 1,
    "answer_text": "Verify authenticity and integrity of a message",
    "explanation": "Digital signatures verify that a message is authentic and unaltered using the sender's private key."
  },
  {
    "id": 95,
    "category": "Networking & Security",
    "question": "Public key cryptography is most useful because:",
    "options": [
      "It uses two keys",
      "It is an asymmetric system",
      "Public key can be freely distributed, solving the key distribution problem",
      "Private key can be kept secret"
    ],
    "answer": 2,
    "answer_text": "Public key can be freely distributed, solving the key distribution problem",
    "explanation": "The key advantage of public key systems is that the public key can be freely distributed, solving the key distribution problem of symmetric encryption."
  },
  {
    "id": 96,
    "category": "Networking & Security",
    "question": "Which layer is responsible for wireless signal encoding and frequency band definition?",
    "options": [
      "Application Layer",
      "Logical Link Control Layer",
      "Medium Access Layer",
      "None of the mentioned"
    ],
    "answer": 2,
    "answer_text": "Medium Access Layer",
    "explanation": "The Medium Access Control (MAC) sublayer handles physical signal encoding and channel access in wireless networks."
  },
  {
    "id": 97,
    "category": "Networking & Security",
    "question": "Convert binary 10000000 00001011 00000011 00011111 to dotted-decimal.",
    "options": [
      "127.12.5.31",
      "126.11.3.32",
      "126.11.5.32",
      "128.11.3.31"
    ],
    "answer": 3,
    "answer_text": "128.11.3.31",
    "explanation": "10000000=128, 00001011=11, 00000011=3, 00011111=31. Result: 128.11.3.31."
  },
  {
    "id": 98,
    "category": "Networking & Security",
    "question": "Which is NOT an approach used by IT security specialists to enhance network security?",
    "options": [
      "Use of Intrusion Detection System",
      "Use of WannaCry protocol",
      "Use of physical security",
      "Use of Intrusion Prevention System"
    ],
    "answer": 1,
    "answer_text": "Use of WannaCry protocol",
    "explanation": "WannaCry is ransomware malware, not a security protocol \u2014 it is a cyberattack, not a defensive tool."
  },
  {
    "id": 99,
    "category": "Networking & Security",
    "question": "Which principle is the opposite of 'Security through obscurity'?",
    "options": [
      "Least common mechanism",
      "Work factor",
      "Least privileges",
      "Open design"
    ],
    "answer": 3,
    "answer_text": "Open design",
    "explanation": "Open design means security should not rely on secrecy of the design \u2014 the opposite of security through obscurity."
  },
  {
    "id": 100,
    "category": "Networking & Security",
    "question": "Which is NOT a function of a crossover UTP cable?",
    "options": [
      "To connect switch to switch",
      "To connect PC to PC",
      "To connect router to PC",
      "To connect switch to PC"
    ],
    "answer": 3,
    "answer_text": "To connect switch to PC",
    "explanation": "Crossover cables connect like devices. Connecting a switch to a PC requires a straight-through cable."
  },
  {
    "id": 101,
    "category": "Networking & Security",
    "question": "Which type of malicious program never requires a host program?",
    "options": [
      "Trap door",
      "Trojan horse",
      "Virus",
      "Worm"
    ],
    "answer": 3,
    "answer_text": "Worm",
    "explanation": "A worm is self-replicating and spreads independently through networks. A virus needs a host file."
  },
  {
    "id": 102,
    "category": "Networking & Security",
    "question": "What type of CSS is recommended for designing large web pages?",
    "options": [
      "Embedded",
      "External",
      "Inline",
      "Internal"
    ],
    "answer": 1,
    "answer_text": "External",
    "explanation": "External CSS (separate .css files) is recommended for large projects \u2014 it separates concerns and allows browser caching."
  },
  {
    "id": 103,
    "category": "Networking & Security",
    "question": "What must be enabled for a RESTful web service to receive invocations from different domains?",
    "options": [
      "Cache control",
      "Headers",
      "CORS",
      "SSL"
    ],
    "answer": 2,
    "answer_text": "CORS",
    "explanation": "CORS (Cross-Origin Resource Sharing) must be configured to allow requests from different domains or ports."
  },
  {
    "id": 104,
    "category": "Networking & Security",
    "question": "What does HTTP status code 201 indicate?",
    "options": [
      "No content",
      "Accepted",
      "OK",
      "Created"
    ],
    "answer": 3,
    "answer_text": "Created",
    "explanation": "HTTP 201 Created indicates the request succeeded and a new resource was created (common after POST)."
  },
  {
    "id": 105,
    "category": "Networking & Security",
    "question": "Within OAuth, what component validates the user's identity?",
    "options": [
      "Authorization server",
      "Resource server",
      "Browser",
      "Client"
    ],
    "answer": 0,
    "answer_text": "Authorization server",
    "explanation": "In OAuth, the Authorization Server authenticates the user and issues access tokens."
  },
  {
    "id": 106,
    "category": "Operating Systems",
    "question": "Which page replacement algorithm replaces the page unused for the longest time?",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "Clock"
    ],
    "answer": 1,
    "answer_text": "LRU",
    "explanation": "LRU (Least Recently Used) replaces the page not accessed for the longest period."
  },
  {
    "id": 107,
    "category": "Operating Systems",
    "question": "What is a deadlock in operating systems?",
    "options": [
      "A process running indefinitely",
      "A set of processes blocked waiting for resources held by each other",
      "Memory leak causing slowdown",
      "CPU being overloaded"
    ],
    "answer": 1,
    "answer_text": "A set of processes blocked waiting for resources held by each other",
    "explanation": "Deadlock occurs when processes are each waiting for a resource held by another, causing a permanent standstill."
  },
  {
    "id": 108,
    "category": "Operating Systems",
    "question": "Which scheduling algorithm gives the CPU to the process with the shortest next burst?",
    "options": [
      "FCFS",
      "Round Robin",
      "SJF",
      "Priority"
    ],
    "answer": 2,
    "answer_text": "SJF",
    "explanation": "Shortest Job First (SJF) minimizes average waiting time by running the shortest burst process next."
  },
  {
    "id": 109,
    "category": "Operating Systems",
    "question": "What is thrashing in virtual memory?",
    "options": [
      "Rapid context switching",
      "Excessive paging causing little useful work",
      "High CPU utilization",
      "Memory fragmentation"
    ],
    "answer": 1,
    "answer_text": "Excessive paging causing little useful work",
    "explanation": "Thrashing occurs when processes spend more time swapping pages than executing, drastically reducing throughput."
  },
  {
    "id": 110,
    "category": "Operating Systems",
    "question": "When a blocked process completes I/O, it moves to which state?",
    "options": [
      "Suspended",
      "Terminated",
      "Running",
      "Ready"
    ],
    "answer": 3,
    "answer_text": "Ready",
    "explanation": "After I/O completion, a blocked process moves to the Ready queue, waiting for CPU allocation."
  },
  {
    "id": 111,
    "category": "Operating Systems",
    "question": "Which is NOT a correct statement about the Banker's Algorithm?",
    "options": [
      "It considers each request before it occurs",
      "It is an extension of the deadlock detection algorithm",
      "It is modeled on a banker dealing with customers with credit lines",
      "It is a scheduling algorithm"
    ],
    "answer": 3,
    "answer_text": "It is a scheduling algorithm",
    "explanation": "The Banker's Algorithm is a deadlock avoidance algorithm, not a scheduling algorithm."
  },
  {
    "id": 112,
    "category": "Operating Systems",
    "question": "A memory management policy that decides which pages to replace when memory is full is called:",
    "options": [
      "Cleaning policy",
      "Load policy",
      "Replacement policy",
      "Fetch policy"
    ],
    "answer": 2,
    "answer_text": "Replacement policy",
    "explanation": "Page replacement policy determines which page to evict on a page fault (e.g., LRU, FIFO, Optimal)."
  },
  {
    "id": 113,
    "category": "Operating Systems",
    "question": "In Linux, a process creates a child process using which system call?",
    "options": [
      "yield()",
      "exec()",
      "init()",
      "fork()"
    ],
    "answer": 3,
    "answer_text": "fork()",
    "explanation": "fork() creates a new child process by duplicating the calling process. exec() replaces the process image with a new program."
  },
  {
    "id": 114,
    "category": "Operating Systems",
    "question": "Which is NOT a function of an operating system?",
    "options": [
      "Runs software utilities and programs",
      "Translates high-level language into machine code",
      "Manages computer system resources",
      "Makes the computer system convenient to use"
    ],
    "answer": 1,
    "answer_text": "Translates high-level language into machine code",
    "explanation": "Translation of high-level code is done by compilers/interpreters, not the OS."
  },
  {
    "id": 115,
    "category": "Operating Systems",
    "question": "What is inter-process communication (IPC)?",
    "options": [
      "Allows processes to communicate using the same address space",
      "Allows processes to communicate without using the same address space",
      "Allows processes to only synchronize without communication",
      "None of the above"
    ],
    "answer": 1,
    "answer_text": "Allows processes to communicate without using the same address space",
    "explanation": "IPC mechanisms (pipes, sockets, message queues) allow processes to communicate without necessarily sharing address space."
  },
  {
    "id": 116,
    "category": "Operating Systems",
    "question": "A running thread returns to Ready state by which means?",
    "options": [
      "By encountering a yield command",
      "By encountering a sleep command",
      "By encountering a wait command",
      "By becoming blocked due to unavailable device"
    ],
    "answer": 0,
    "answer_text": "By encountering a yield command",
    "explanation": "yield() voluntarily gives up the CPU, returning the thread to the Ready state so others can run."
  },
  {
    "id": 117,
    "category": "Operating Systems",
    "question": "Which memory management scheme is NOT used for mapping logical to physical address?",
    "options": [
      "Segmentation",
      "Paging with segmentation",
      "Swapping",
      "Paging"
    ],
    "answer": 2,
    "answer_text": "Swapping",
    "explanation": "Swapping moves entire processes between memory and disk \u2014 it is not an address mapping scheme."
  },
  {
    "id": 118,
    "category": "Operating Systems",
    "question": "The Linux permission \u2013rwxr--r-- in octal is:",
    "options": [
      "766",
      "700",
      "744",
      "755"
    ],
    "answer": 2,
    "answer_text": "744",
    "explanation": "rwx=7 (owner), r--=4 (group), r--=4 (others). Octal: 744."
  },
  {
    "id": 119,
    "category": "Operating Systems",
    "question": "Which mechanism is typically used to create a process?",
    "options": [
      "Calling a deadlock detection technique",
      "Execution of a process creation system call by a running process",
      "A user request to create a new process",
      "System initialization"
    ],
    "answer": 1,
    "answer_text": "Execution of a process creation system call by a running process",
    "explanation": "Processes are typically created via fork() system call executed by a running parent process."
  },
  {
    "id": 120,
    "category": "Operating Systems",
    "question": "Which is a FALSE assumption in avoiding race conditions in the critical region?",
    "options": [
      "No process outside critical region may block other processes",
      "Assumptions should be made about speeds or number of CPUs",
      "No process should wait forever to enter its critical region",
      "No two processes may be simultaneously inside their critical regions"
    ],
    "answer": 1,
    "answer_text": "Assumptions should be made about speeds or number of CPUs",
    "explanation": "A correct requirement is that NO assumptions should be made about processor speeds or number of CPUs."
  },
  {
    "id": 121,
    "category": "Operating Systems",
    "question": "CPU fetches the instruction from memory according to the value of:",
    "options": [
      "Program counter",
      "Program status word",
      "Instruction register",
      "Status register"
    ],
    "answer": 0,
    "answer_text": "Program counter",
    "explanation": "The Program Counter (PC) holds the address of the next instruction to be fetched and executed."
  },
  {
    "id": 122,
    "category": "SE Process",
    "question": "Which Agile ceremony is used to reflect on team process and improve it?",
    "options": [
      "Sprint Planning",
      "Daily Standup",
      "Sprint Review",
      "Sprint Retrospective"
    ],
    "answer": 3,
    "answer_text": "Sprint Retrospective",
    "explanation": "Sprint Retrospective is held after each sprint to discuss what went well, what didn't, and how to improve."
  },
  {
    "id": 123,
    "category": "SE Process",
    "question": "What does the 'V' in V-Model represent?",
    "options": [
      "Validation only",
      "Verification and Validation",
      "Version control",
      "Virtual prototyping"
    ],
    "answer": 1,
    "answer_text": "Verification and Validation",
    "explanation": "The V-Model mirrors each development phase with a corresponding testing phase \u2014 Verification & Validation."
  },
  {
    "id": 124,
    "category": "SE Process",
    "question": "Which testing technique tests internal logic and code paths?",
    "options": [
      "Black-box testing",
      "White-box testing",
      "Beta testing",
      "Acceptance testing"
    ],
    "answer": 1,
    "answer_text": "White-box testing",
    "explanation": "White-box testing requires knowledge of internal code and tests specific paths, branches, and conditions."
  },
  {
    "id": 125,
    "category": "SE Process",
    "question": "In software development, 'refactoring' means:",
    "options": [
      "Adding new features",
      "Restructuring existing code without changing its behavior",
      "Fixing bugs in production",
      "Migrating to a new technology"
    ],
    "answer": 1,
    "answer_text": "Restructuring existing code without changing its behavior",
    "explanation": "Refactoring improves code structure, readability, and maintainability while preserving existing functionality."
  },
  {
    "id": 126,
    "category": "SE Process",
    "question": "Which UML diagram best shows how objects interact over time?",
    "options": [
      "Class diagram",
      "Use case diagram",
      "Sequence diagram",
      "Activity diagram"
    ],
    "answer": 2,
    "answer_text": "Sequence diagram",
    "explanation": "Sequence diagrams show object interactions arranged in time order."
  },
  {
    "id": 127,
    "category": "SE Process",
    "question": "Which slogan is AGAINST agile method philosophy?",
    "options": [
      "Following a plan over responding to changes",
      "Individuals and interactions over processes and tools",
      "Customer collaboration over contract negotiation",
      "Working software over comprehensive documentation"
    ],
    "answer": 0,
    "answer_text": "Following a plan over responding to changes",
    "explanation": "The Agile Manifesto values 'Responding to change over following a plan' \u2014 the opposite of option A."
  },
  {
    "id": 128,
    "category": "SE Process",
    "question": "What is the main goal of software testing as part of quality assurance?",
    "options": [
      "To achieve project timelines",
      "To generate documentation",
      "To ensure the software meets specified requirements",
      "To monitor the entire SDLC"
    ],
    "answer": 2,
    "answer_text": "To ensure the software meets specified requirements",
    "explanation": "The primary goal of testing is to verify the software satisfies its requirements and find defects."
  },
  {
    "id": 129,
    "category": "SE Process",
    "question": "What is correct about functional vs non-functional requirements?",
    "options": [
      "Non-functional requirements are more stable",
      "Both are the same most of the time",
      "Functional requirements are decided by the customer while non-functional by developers",
      "Functional requirements are services the system provides; non-functional are constraints"
    ],
    "answer": 3,
    "answer_text": "Functional requirements are services the system provides; non-functional are constraints",
    "explanation": "Functional requirements define WHAT the system does; non-functional define HOW WELL (constraints like performance, security)."
  },
  {
    "id": 130,
    "category": "SE Process",
    "question": "Total discounted benefits = 120,000 Birr, cost = 100,000 Birr. What is the ROI?",
    "options": [
      "20%",
      "12%",
      "30%",
      "10%"
    ],
    "answer": 0,
    "answer_text": "20%",
    "explanation": "ROI = (Benefits - Cost) / Cost \u00d7 100 = (120,000 - 100,000) / 100,000 \u00d7 100 = 20%."
  },
  {
    "id": 131,
    "category": "SE Process",
    "question": "If stakeholders rush their requirements without discussing with others, the most likely consequence is:",
    "options": [
      "Attains the project schedule",
      "Results in excess requirements",
      "Leads to conflicting requirements",
      "Requirements become unambiguous"
    ],
    "answer": 2,
    "answer_text": "Leads to conflicting requirements",
    "explanation": "Without coordination, stakeholders may have overlapping or contradictory requirements, leading to conflicts."
  },
  {
    "id": 132,
    "category": "SE Process",
    "question": "Accepting risk occurrence but doing nothing about it is known as:",
    "options": [
      "Risk transfer",
      "Risk retention",
      "Risk avoidance",
      "Risk reduction"
    ],
    "answer": 1,
    "answer_text": "Risk retention",
    "explanation": "Risk retention (acceptance) means acknowledging a risk and accepting its potential consequences without mitigation."
  },
  {
    "id": 133,
    "category": "SE Process",
    "question": "Which software model applies best when requirements inevitably change?",
    "options": [
      "Agile development method",
      "Spiral model",
      "Waterfall model",
      "Code and run"
    ],
    "answer": 0,
    "answer_text": "Agile development method",
    "explanation": "Agile methods embrace changing requirements and deliver working software iteratively."
  },
  {
    "id": 134,
    "category": "SE Process",
    "question": "Which UML element is wrongly applied?",
    "options": [
      "Class diagram shows object classes and their relations",
      "Activity diagram shows how system reacts to internal and external events",
      "Use case diagram represents an interaction with a system",
      "Sequence diagram shows the sequence of interactions for some operation"
    ],
    "answer": 1,
    "answer_text": "Activity diagram shows how system reacts to internal and external events",
    "explanation": "State diagrams (not activity diagrams) show how a system reacts to internal/external events."
  },
  {
    "id": 135,
    "category": "SE Process",
    "question": "Which principle states that 80% of the problem can be fixed with 20% of the effort?",
    "options": [
      "Pareto principle",
      "Parametric principle",
      "Pairwise principle",
      "Partition principle"
    ],
    "answer": 0,
    "answer_text": "Pareto principle",
    "explanation": "The Pareto principle (80/20 rule) states that roughly 80% of effects come from 20% of causes."
  },
  {
    "id": 136,
    "category": "SE Process",
    "question": "When does a tester implement configuration management procedures?",
    "options": [
      "During test planning",
      "During test closing",
      "During test execution",
      "During test initiation"
    ],
    "answer": 0,
    "answer_text": "During test planning",
    "explanation": "Configuration management is established during test planning to ensure test items and environments are properly controlled."
  },
  {
    "id": 137,
    "category": "SE Process",
    "question": "Why is a good relationship between testers and developers important?",
    "options": [
      "To ensure the project is completed on time",
      "To foster collaboration and communication",
      "To make sure the software is defect-free",
      "To reduce the cost of the project"
    ],
    "answer": 1,
    "answer_text": "To foster collaboration and communication",
    "explanation": "Good tester-developer relationships foster open communication and collaborative quality improvement."
  },
  {
    "id": 138,
    "category": "SE Process",
    "question": "An SRS is said to be ______ if no subset of requirements conflicts with each other.",
    "options": [
      "Consistent",
      "Verifiable",
      "Unambiguous",
      "Correct"
    ],
    "answer": 0,
    "answer_text": "Consistent",
    "explanation": "A consistent SRS means no requirement contradicts another."
  },
  {
    "id": 139,
    "category": "SE Process",
    "question": "If every requirement can be checked by a cost-effective process, the SRS is called:",
    "options": [
      "Complete",
      "Traceable",
      "Verifiable",
      "Modifiable"
    ],
    "answer": 2,
    "answer_text": "Verifiable",
    "explanation": "A verifiable SRS means every requirement can be tested or verified using some practical method."
  },
  {
    "id": 140,
    "category": "SE Process",
    "question": "Which is NOT desired in a good SRS document?",
    "options": [
      "Functional requirements",
      "Goals of implementation",
      "Algorithm for software implementation",
      "Non-functional requirements"
    ],
    "answer": 2,
    "answer_text": "Algorithm for software implementation",
    "explanation": "SRS specifies WHAT the system does, not HOW (algorithms). Algorithms are implementation details."
  },
  {
    "id": 141,
    "category": "SE Process",
    "question": "Estimating project cost by comparing to a similar project in the same domain is called:",
    "options": [
      "Estimation by Analogy",
      "Empirical Model",
      "Expert Judgement",
      "Adhoc Approach"
    ],
    "answer": 0,
    "answer_text": "Estimation by Analogy",
    "explanation": "Estimation by Analogy uses similar past projects as a reference to estimate cost and effort."
  },
  {
    "id": 142,
    "category": "SE Process",
    "question": "The longest full path on which project completion depends is called:",
    "options": [
      "Full path",
      "Complete path",
      "Critical path",
      "Project path"
    ],
    "answer": 2,
    "answer_text": "Critical path",
    "explanation": "The Critical Path is the longest sequence of dependent tasks \u2014 any delay on it delays the entire project."
  },
  {
    "id": 143,
    "category": "SE Process",
    "question": "During which test activity are tests designed AND executed?",
    "options": [
      "Test Analysis and Design",
      "Test Implementation and Execution",
      "Test Planning and Control",
      "Test Closure"
    ],
    "answer": 1,
    "answer_text": "Test Implementation and Execution",
    "explanation": "Test Implementation and Execution involves setting up the test environment, running tests, and logging results."
  },
  {
    "id": 144,
    "category": "SE Process",
    "question": "What type of testing verifies that existing functionality is unaffected by a new feature?",
    "options": [
      "Integration testing",
      "User acceptance testing",
      "Functional testing",
      "Regression testing"
    ],
    "answer": 3,
    "answer_text": "Regression testing",
    "explanation": "Regression testing verifies that new changes haven't broken existing functionality."
  },
  {
    "id": 145,
    "category": "SE Process",
    "question": "Modifying software to match changes in the environment is known as:",
    "options": [
      "Perfective maintenance",
      "Adaptive maintenance",
      "Preventive maintenance",
      "Corrective maintenance"
    ],
    "answer": 1,
    "answer_text": "Adaptive maintenance",
    "explanation": "Adaptive maintenance modifies software to keep it working in a changed environment (new OS, hardware, regulations)."
  },
  {
    "id": 146,
    "category": "SE Process",
    "question": "Which ethical principle should a tester follow when a client insists on releasing a harmful feature?",
    "options": [
      "Honesty",
      "Fairness",
      "Responsibility",
      "Respect"
    ],
    "answer": 0,
    "answer_text": "Honesty",
    "explanation": "Honesty requires the tester to truthfully report findings and concerns, even under pressure."
  },
  {
    "id": 147,
    "category": "SE Process",
    "question": "Which of the following is NOT an objective of software testing?",
    "options": [
      "Enhancing usability",
      "Identifying defects",
      "Increasing development time",
      "Improving performance"
    ],
    "answer": 2,
    "answer_text": "Increasing development time",
    "explanation": "Testing aims to find defects and improve quality. Increasing development time is never a goal."
  },
  {
    "id": 148,
    "category": "SE Process",
    "question": "Who is responsible for documenting faults found during software development?",
    "options": [
      "Tester",
      "Developer",
      "Scrum master",
      "Requirement engineer"
    ],
    "answer": 0,
    "answer_text": "Tester",
    "explanation": "Testers are responsible for logging and documenting defects in the defect tracking system."
  },
  {
    "id": 149,
    "category": "SE Process",
    "question": "Which shows the five stages of Tuckman's model in correct sequential order?",
    "options": [
      "Forming, storming, performing, norming and adjourning",
      "Norming, forming, storming, performing and adjourning",
      "Storming, forming, norming, performing and adjourning",
      "Forming, storming, norming, performing and adjourning"
    ],
    "answer": 3,
    "answer_text": "Forming, storming, norming, performing and adjourning",
    "explanation": "Tuckman's model: Forming \u2192 Storming \u2192 Norming \u2192 Performing \u2192 Adjourning."
  },
  {
    "id": 150,
    "category": "SE Process",
    "question": "In which process model do dependent phases repeat sequentially with no feedback loops?",
    "options": [
      "Incremental",
      "Evolutionary",
      "Agile",
      "Iterative"
    ],
    "answer": 0,
    "answer_text": "Incremental",
    "explanation": "The Incremental model delivers the product in increments, with phases repeated sequentially for each increment."
  },
  {
    "id": 151,
    "category": "SE Process",
    "question": "Which SQL statement correctly inserts a tuple into Hotel(Hotel_id INT PK, Hotel_name, Sub_city)?",
    "options": [
      "INSERT INTO HOTEL VALUES ('Hilton','Yeka')",
      "INSERT INTO HOTEL (Hotel_id, Hotel_name, Sub_city) VALUES (1,'Hilton','Yeka')",
      "INSERT INTO HOTEL (1,'Hilton','Yeka')",
      "INSERT Values INTO HOTEL VALUES (1,'Hilton','Yeka')"
    ],
    "answer": 1,
    "answer_text": "INSERT INTO HOTEL (Hotel_id, Hotel_name, Sub_city) VALUES (1,'Hilton','Yeka')",
    "explanation": "Correct INSERT syntax includes column names and matching values. Hotel_id is an integer (no quotes), others are strings."
  },
  {
    "id": 152,
    "category": "SE Process",
    "question": "FOREIGN KEY (DorID) _______ DORM(DormID) is the correct syntax to establish a foreign key relationship.",
    "options": [
      "REFERENCES",
      "REFERENCED BY",
      "REFERENCED FROM",
      "REFERS TO"
    ],
    "answer": 0,
    "answer_text": "REFERENCES",
    "explanation": "The correct SQL syntax for foreign key is: FOREIGN KEY (column) REFERENCES parent_table(column)."
  },
  {
    "id": 153,
    "category": "AI & Data Science",
    "question": "Anything that perceives its environment through sensors and acts through effectors is called:",
    "options": [
      "Agent",
      "Expert System",
      "Intelligence",
      "API"
    ],
    "answer": 0,
    "answer_text": "Agent",
    "explanation": "An agent is any entity that perceives its environment through sensors and acts upon it through effectors/actuators."
  },
  {
    "id": 154,
    "category": "AI & Data Science",
    "question": "An informed search algorithm guaranteeing optimality but with exponential worst-case time:",
    "options": [
      "A* search",
      "Greedy best-first search",
      "Uniform cost search",
      "Iterative Deepening A* search"
    ],
    "answer": 3,
    "answer_text": "Iterative Deepening A* search",
    "explanation": "IDA* (Iterative Deepening A*) guarantees optimality like A* but uses less memory, at the cost of exponential worst-case time."
  },
  {
    "id": 155,
    "category": "AI & Data Science",
    "question": "The correct order of model development in data mining is:",
    "options": [
      "Training, Testing, Evaluation, Deployment",
      "Evaluation, Training, Testing, Deployment",
      "Training, Testing, Deployment, Evaluation",
      "Training, Evaluation, Testing, Deployment"
    ],
    "answer": 0,
    "answer_text": "Training, Testing, Evaluation, Deployment",
    "explanation": "Standard pipeline: Train the model \u2192 Test it \u2192 Evaluate performance \u2192 Deploy to production."
  },
  {
    "id": 156,
    "category": "AI & Data Science",
    "question": "Which learning algorithm is applied to data without label information?",
    "options": [
      "Transfer learning",
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning"
    ],
    "answer": 2,
    "answer_text": "Unsupervised learning",
    "explanation": "Unsupervised learning finds patterns in unlabeled data (clustering, dimensionality reduction) without known correct outputs."
  },
  {
    "id": 157,
    "category": "AI & Data Science",
    "question": "Which statement is correct about Artificial Intelligence (AI)?",
    "options": [
      "Machines that can only perform physical tasks",
      "Machines that can only perform simple, repetitive tasks",
      "Machines that perform tasks only in a controlled lab",
      "Machines that can perform tasks requiring human intelligence"
    ],
    "answer": 3,
    "answer_text": "Machines that can perform tasks requiring human intelligence",
    "explanation": "AI develops machines that can perform tasks typically requiring human intelligence: reasoning, learning, problem solving."
  },
  {
    "id": 158,
    "category": "AI & Data Science",
    "question": "What is supervised learning in AI?",
    "options": [
      "Reinforcing learning with a reward-based system",
      "Learning by observing human behavior",
      "Training a model with labeled data",
      "Training a model with unlabeled data"
    ],
    "answer": 2,
    "answer_text": "Training a model with labeled data",
    "explanation": "Supervised learning trains models on labeled input-output pairs so the model learns to map inputs to correct outputs."
  },
  {
    "id": 159,
    "category": "AI & Data Science",
    "question": "Which is a possible source of unstructured data?",
    "options": [
      "Apple employee database",
      "RDBMS systems",
      "Registrar student database",
      "Google search engine / Twitter"
    ],
    "answer": 3,
    "answer_text": "Google search engine / Twitter",
    "explanation": "Search engines and social media index unstructured content (HTML, text, images). RDBMS contains structured data."
  },
  {
    "id": 160,
    "category": "AI & Data Science",
    "question": "The big data explosion is best described as:",
    "options": [
      "Too much knowledge and too much data",
      "Too much data and too much opportunity",
      "Distributed knowledge and distributed data",
      "Too much data, too little knowledge"
    ],
    "answer": 3,
    "answer_text": "Too much data, too little knowledge",
    "explanation": "The big data challenge: we collect vast amounts of data but lack sufficient tools to extract meaningful knowledge."
  },
  {
    "id": 161,
    "category": "AI & Data Science",
    "question": "The term for large complex datasets that cannot be processed using traditional tools:",
    "options": [
      "Wisdom",
      "Tiny data",
      "Big data",
      "Information"
    ],
    "answer": 2,
    "answer_text": "Big data",
    "explanation": "Big data refers to datasets so large and complex that traditional data processing tools are inadequate."
  },
  {
    "id": 162,
    "category": "AI & Data Science",
    "question": "A technique generating plans with conditionals and loops from logical specifications is called:",
    "options": [
      "Automatic programming",
      "Automatic monitoring",
      "Automatic recursive",
      "Automatic learning"
    ],
    "answer": 0,
    "answer_text": "Automatic programming",
    "explanation": "Automatic programming (program synthesis) generates programs from high-level logical specifications."
  },
  {
    "id": 163,
    "category": "AI & Data Science",
    "question": "What is the main disadvantage of uninformed search algorithms?",
    "options": [
      "They are not optimal",
      "They are not consistent",
      "They are not complete",
      "They are not admissible"
    ],
    "answer": 0,
    "answer_text": "They are not optimal",
    "explanation": "Uninformed (blind) search algorithms often find a solution but not necessarily the best (optimal) one."
  },
  {
    "id": 164,
    "category": "AI & Data Science",
    "question": "What is the main advantage of informed search algorithms?",
    "options": [
      "They are admissible",
      "They are optimal",
      "They are complete",
      "They are consistent"
    ],
    "answer": 1,
    "answer_text": "They are optimal",
    "explanation": "Informed search uses heuristics to guide the search efficiently, often finding optimal solutions faster."
  },
  {
    "id": 165,
    "category": "AI & Data Science",
    "question": "Data generated for one use case may not apply to another. Which Big Data characteristic is this?",
    "options": [
      "Velocity",
      "Value",
      "Veracity",
      "Validity"
    ],
    "answer": 3,
    "answer_text": "Validity",
    "explanation": "Validity refers to the applicability of data for a specific use case \u2014 data valid for one purpose may not be for another."
  },
  {
    "id": 166,
    "category": "AI & Data Science",
    "question": "What is the first step in data-driven decision making?",
    "options": [
      "Making a decision",
      "Analyzing data",
      "Interpreting results",
      "Collecting data"
    ],
    "answer": 3,
    "answer_text": "Collecting data",
    "explanation": "Data-driven decision making starts with collecting relevant data, then analysis, interpretation, and finally decision."
  },
  {
    "id": 167,
    "category": "AI & Data Science",
    "question": "What are the benefits of big data applications?",
    "options": [
      "Improved decision-making",
      "Better customer understanding",
      "Enhanced operational efficiency",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "Big data enables improved decisions, better customer insights, and operational efficiency gains."
  },
  {
    "id": 168,
    "category": "AI & Data Science",
    "question": "What is the first step in the data mining process (CRISP-DM)?",
    "options": [
      "Data cleaning",
      "Data integration",
      "Business understanding",
      "Data selection"
    ],
    "answer": 2,
    "answer_text": "Business understanding",
    "explanation": "CRISP-DM starts with Business Understanding \u2014 defining the problem and project goals before touching data."
  },
  {
    "id": 169,
    "category": "AI & Data Science",
    "question": "Which of the following statements about local search algorithms is true?",
    "options": [
      "Time complexity is independent of problem size",
      "Used for solving convex optimization problems",
      "Always find the globally optimal solution",
      "Solution quality depends on the starting point and neighborhood function"
    ],
    "answer": 3,
    "answer_text": "Solution quality depends on the starting point and neighborhood function",
    "explanation": "Local search can get stuck in local optima. Performance depends critically on the starting point and neighborhood definition."
  },
  {
    "id": 170,
    "category": "AI & Data Science",
    "question": "Which one of the following best describes the difference between Dijkstra's and UCS?",
    "options": [
      "UCS finds optimal solution while Dijkstra's does not",
      "Dijkstra's is optimal, but not UCS",
      "Dijkstra's first collects nodes in a queue but UCS discovers them as they come",
      "Dijkstra's discovers nodes as they come while UCS collects them first in a queue"
    ],
    "answer": 1,
    "answer_text": "Dijkstra's is optimal, but not UCS",
    "explanation": "Dijkstra's algorithm guarantees optimality for graphs with known nodes. UCS is its search equivalent used in AI."
  },
  {
    "id": 171,
    "category": "Android Development",
    "question": "What is used to pass data between Activities in Android?",
    "options": [
      "Broadcast receiver",
      "PostgreSQL Database",
      "Intent",
      "Content provider"
    ],
    "answer": 2,
    "answer_text": "Intent",
    "explanation": "Intents are messaging objects used to pass data between activities and request actions from other components."
  },
  {
    "id": 172,
    "category": "Android Development",
    "question": "APK stands for:",
    "options": [
      "Android Package Kit",
      "Android Platform Kit",
      "Android Phone Kit",
      "Android Page Kit"
    ],
    "answer": 0,
    "answer_text": "Android Package Kit",
    "explanation": "APK (Android Package Kit) is the package file format used by Android to distribute and install apps."
  },
  {
    "id": 173,
    "category": "Android Development",
    "question": "What is an Activity in Android?",
    "options": [
      "Android class to configure the application",
      "It is an Intent",
      "Android package file",
      "A single screen in an application with supporting Java code"
    ],
    "answer": 3,
    "answer_text": "A single screen in an application with supporting Java code",
    "explanation": "An Activity represents a single screen with a user interface \u2014 the fundamental building block of Android app UI."
  },
  {
    "id": 174,
    "category": "Android Development",
    "question": "All layout classes are subclasses of which of the following?",
    "options": [
      "android.view.RelativeLayout",
      "android.view.Layout",
      "android.view.ViewGroup",
      "android.view.Widget"
    ],
    "answer": 2,
    "answer_text": "android.view.ViewGroup",
    "explanation": "ViewGroup is the base class for all layout classes in Android \u2014 it can contain multiple child views."
  },
  {
    "id": 175,
    "category": "Android Development",
    "question": "How can we stop a Service in Android?",
    "options": [
      "By using stopSelf() and stopService()",
      "By using finish()",
      "By using System.exit()",
      "None of the above"
    ],
    "answer": 0,
    "answer_text": "By using stopSelf() and stopService()",
    "explanation": "stopSelf() stops a service from within itself; stopService() stops it from another component."
  },
  {
    "id": 176,
    "category": "Android Development",
    "question": "What is the use of a Content Provider in Android?",
    "options": [
      "For storing data in the database",
      "For sharing data between applications",
      "For sending data from one app to another",
      "None of the above"
    ],
    "answer": 1,
    "answer_text": "For sharing data between applications",
    "explanation": "Content Providers manage structured data access and allow sharing data between different applications."
  },
  {
    "id": 177,
    "category": "Android Development",
    "question": "Android is:",
    "options": [
      "An operating system",
      "A web server",
      "A database",
      "None of the above"
    ],
    "answer": 0,
    "answer_text": "An operating system",
    "explanation": "Android is a Linux-based mobile operating system developed by Google for touchscreen devices."
  },
  {
    "id": 178,
    "category": "Android Development",
    "question": "Under which license is Android licensed?",
    "options": [
      "OSS",
      "SourceForge",
      "Apache/MIT",
      "None of the above"
    ],
    "answer": 2,
    "answer_text": "Apache/MIT",
    "explanation": "Android is released under the Apache License 2.0 (with some components under the MIT license)."
  },
  {
    "id": 179,
    "category": "Android Development",
    "question": "Which of the following is NOT an activity lifecycle callback method?",
    "options": [
      "onStart()",
      "onClick()",
      "onCreate()",
      "onBackPressed()"
    ],
    "answer": 1,
    "answer_text": "onClick()",
    "explanation": "onClick() is a View event listener, not an Activity lifecycle callback. Lifecycle methods include onCreate, onStart, onResume, etc."
  },
  {
    "id": 180,
    "category": "Android Development",
    "question": "Which of the following is NOT a state in the Service lifecycle?",
    "options": [
      "Destroyed",
      "Running",
      "Start",
      "Paused"
    ],
    "answer": 3,
    "answer_text": "Paused",
    "explanation": "Android Service states include Created, Started/Running, and Destroyed. 'Paused' is an Activity state, not a Service state."
  },
  {
    "id": 181,
    "category": "Android Development",
    "question": "Which of the following is contained in the src folder of an Android project?",
    "options": [
      "XML files",
      "Java Source code",
      "Manifest",
      "None of the above"
    ],
    "answer": 1,
    "answer_text": "Java Source code",
    "explanation": "The src folder contains Java/Kotlin source code. XML layouts are in the res folder; Manifest is in the root."
  },
  {
    "id": 182,
    "category": "OOP & Programming",
    "question": "SomeClass default constructor sets one=2, two=4. After equalize() sets one=two, what does calcSum() return?",
    "options": [
      "4",
      "2",
      "8",
      "6"
    ],
    "answer": 2,
    "answer_text": "8",
    "explanation": "equalize() sets one=two=4. calcSum() returns one+two = 4+4 = 8."
  },
  {
    "id": 183,
    "category": "OOP & Programming",
    "question": "SomeClass has SomeClass() and SomeClass(int x, int y) constructors. What happens with new SomeClass(3)?",
    "options": [
      "Program will not compile",
      "Compiles, output: 2",
      "Compiles, output: -2",
      "Compiles, output: 1"
    ],
    "answer": 0,
    "answer_text": "Program will not compile",
    "explanation": "There is no single-argument constructor SomeClass(int). Only SomeClass() and SomeClass(int,int) exist \u2014 this will not compile."
  },
  {
    "id": 184,
    "category": "OOP & Programming",
    "question": "Employee constructor is Employee(String,String,String,int). Which statement would NOT cause a compiler error?",
    "options": [
      "Employee emp1 = new Employee(\\",
      ",\\",
      ",\\",
      ",0);",
      "Employee emp1 = new Employee(\\",
      ",\\",
      ",\\",
      ",\\",
      ");",
      "Employee emp1 = new Employee(\\",
      ",\\",
      ",\\",
      ");",
      "emp1 Employee = new Employee(\\",
      ",\\",
      ",\\",
      ",1970);"
    ],
    "answer": 0,
    "answer_text": "Employee emp1 = new Employee(\\",
    "explanation": "Option A matches the constructor: 3 Strings and 1 int. B passes 4 Strings (last should be int). C only has 3 args. D has reversed type declaration."
  },
  {
    "id": 185,
    "category": "OOP & Programming",
    "question": "Given Employee object emp1 with private attributes, which statement correctly displays emp1's address?",
    "options": [
      "System.out.print(address);",
      "System.out.print(emp1.Address);",
      "System.out.print(emp1.getAddress());",
      "System.out.print(emp1.getAddress);"
    ],
    "answer": 2,
    "answer_text": "System.out.print(emp1.getAddress());",
    "explanation": "Attributes are private, so you must use the getter method with proper parentheses: emp1.getAddress()."
  },
  {
    "id": 186,
    "category": "OOP & Programming",
    "question": "What might cause setValue method (list[position-1]=valueIn) to throw ArrayIndexOutOfBoundsException?",
    "options": [
      "The return type being void",
      "The method having more than one parameter",
      "The value of the first parameter",
      "The type of parameter position being int"
    ],
    "answer": 2,
    "answer_text": "The value of the first parameter",
    "explanation": "If position=0, then position-1=-1, which is an invalid array index causing ArrayIndexOutOfBoundsException."
  },
  {
    "id": 187,
    "category": "Web Programming",
    "question": "How do you remove the underline from all hyperlinks using CSS?",
    "options": [
      "a {text: no-underline;}",
      "a {text-decoration: none;}",
      "a {text-style: no-underline;}",
      "a {text-decoration: no-underline;}"
    ],
    "answer": 1,
    "answer_text": "a {text-decoration: none;}",
    "explanation": "The correct CSS property is text-decoration: none; to remove the default underline from anchor tags."
  },
  {
    "id": 188,
    "category": "Web Programming",
    "question": "In HTML forms, what does <input type='text'> produce?",
    "options": [
      "A single-line text input",
      "A block of text",
      "A paragraph",
      "None of the above"
    ],
    "answer": 0,
    "answer_text": "A single-line text input",
    "explanation": "<input type='text'> creates a single-line text input field. For multi-line text, use <textarea>."
  },
  {
    "id": 189,
    "category": "Web Programming",
    "question": "Which HTML tag is used to define an abbreviation or acronym?",
    "options": [
      "<abbreviation>",
      "<abbr>",
      "<acronym>",
      "<acr>"
    ],
    "answer": 1,
    "answer_text": "<abbr>",
    "explanation": "<abbr> is the standard HTML tag for abbreviations. The title attribute provides the full expanded form."
  },
  {
    "id": 190,
    "category": "Web Programming",
    "question": "Which request URI component is optional?",
    "options": [
      "URI host",
      "URI scheme",
      "Query string",
      "Resource path"
    ],
    "answer": 2,
    "answer_text": "Query string",
    "explanation": "The query string (e.g., ?key=value) is optional. The scheme, host, and resource path are required."
  },
  {
    "id": 191,
    "category": "Web Programming",
    "question": "Which URI component specifies the protocol used for transmitting the request?",
    "options": [
      "URI host",
      "URI Scheme",
      "Resource path",
      "GET"
    ],
    "answer": 1,
    "answer_text": "URI Scheme",
    "explanation": "The URI scheme (e.g., http, https, ftp) specifies the protocol used for the request."
  },
  {
    "id": 192,
    "category": "Web Programming",
    "question": "Which of the following best explains a Cookie's nature?",
    "options": [
      "Non-volatile",
      "Volatile",
      "Intransient",
      "Transient"
    ],
    "answer": 3,
    "answer_text": "Transient",
    "explanation": "Cookies are transient \u2014 they have an expiration and can be cleared by the browser or user at any time."
  },
  {
    "id": 193,
    "category": "Web Programming",
    "question": "What is one benefit of GraphQL over the REST approach?",
    "options": [
      "More stable APIs",
      "Flexible querying/responses",
      "Compatible with more gateways",
      "More secure by default"
    ],
    "answer": 1,
    "answer_text": "Flexible querying/responses",
    "explanation": "GraphQL lets clients request exactly the data they need, avoiding over-fetching and under-fetching common in REST."
  },
  {
    "id": 194,
    "category": "Android Development",
    "question": "On which platforms can developers test Android applications during development?",
    "options": [
      "Third-party emulators only",
      "Android SDK emulator only",
      "Physical Android phone only",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "Developers can test on third-party emulators, the Android SDK emulator, or real physical devices \u2014 all are valid options."
  },
  {
    "id": 195,
    "category": "Android Development",
    "question": "Which can be used to persist data locally on an Android device?",
    "options": [
      "Microsoft SQL Client",
      "Shared Preferences",
      "MongoDB Database",
      "Firebase/FireStore"
    ],
    "answer": 1,
    "answer_text": "Shared Preferences",
    "explanation": "SharedPreferences is Android's built-in key-value storage for persisting small amounts of primitive data locally on the device."
  },
  {
    "id": 196,
    "category": "Android Development",
    "question": "What is AndroidManifest.xml in Android?",
    "options": [
      "It has information about layouts only",
      "It has information about activities only",
      "It has all the information about an application",
      "None of the above"
    ],
    "answer": 2,
    "answer_text": "It has all the information about an application",
    "explanation": "AndroidManifest.xml contains all essential app information: components, permissions, hardware requirements, and more."
  },
  {
    "id": 197,
    "category": "Android Development",
    "question": "In which directory are XML layout files stored in an Android project?",
    "options": [
      "/assets",
      "/src",
      "/res/values",
      "/res/layout"
    ],
    "answer": 3,
    "answer_text": "/res/layout",
    "explanation": "XML layout files are in /res/layout. /res/values holds strings/colors/dimensions. /src holds Java source code."
  },
  {
    "id": 198,
    "category": "Android Development",
    "question": "Which is the first callback method invoked during an Activity lifecycle?",
    "options": [
      "onClick()",
      "onCreate()",
      "onStart()",
      "onRestart()"
    ],
    "answer": 1,
    "answer_text": "onCreate()",
    "explanation": "onCreate() is the very first lifecycle callback \u2014 called when the activity is first created, where you set up the UI."
  },
  {
    "id": 199,
    "category": "Android Development",
    "question": "Which Android component displays a portion of an activity on screen?",
    "options": [
      "View",
      "Manifest",
      "Intent",
      "Fragment"
    ],
    "answer": 3,
    "answer_text": "Fragment",
    "explanation": "A Fragment represents a reusable portion of the UI within an activity, with its own lifecycle and back stack."
  },
  {
    "id": 200,
    "category": "Networking & Security",
    "question": "Which security objective is NOT controlled by cryptographic techniques?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Nonrepudiation",
      "Availability"
    ],
    "answer": 3,
    "answer_text": "Availability",
    "explanation": "Availability requires redundancy and DDoS protection \u2014 cryptography does not directly protect it."
  },
  {
    "id": 201,
    "category": "Networking & Security",
    "question": "The overlap of a threat and an asset's weakness is called:",
    "options": [
      "Vulnerability",
      "Loss",
      "Risk",
      "Exploit"
    ],
    "answer": 2,
    "answer_text": "Risk",
    "explanation": "Risk is the potential for loss when a threat exploits a vulnerability. Vulnerability is the weakness itself."
  },
  {
    "id": 202,
    "category": "Networking & Security",
    "question": "Which of the following is considered unsolicited commercial email?",
    "options": [
      "Virus",
      "Spam",
      "Malware",
      "All of the above"
    ],
    "answer": 1,
    "answer_text": "Spam",
    "explanation": "Spam refers specifically to unsolicited bulk commercial email. Viruses and malware are different types of threats."
  },
  {
    "id": 203,
    "category": "Networking & Security",
    "question": "Which security measure verifies whether you have permission to access specific resources?",
    "options": [
      "Authentication",
      "Authorization",
      "Non-repudiation",
      "Accountability"
    ],
    "answer": 1,
    "answer_text": "Authorization",
    "explanation": "Authorization determines WHAT an authenticated user is allowed to do. Authentication verifies WHO the user is."
  },
  {
    "id": 204,
    "category": "Networking & Security",
    "question": "A process designed to detect, prevent, or recover from a security attack is called:",
    "options": [
      "Security Attack",
      "Security Service",
      "Threat",
      "Security Mechanism"
    ],
    "answer": 3,
    "answer_text": "Security Mechanism",
    "explanation": "Security Mechanisms (firewalls, encryption, IDS) are tools used to implement security services and counter attacks."
  },
  {
    "id": 205,
    "category": "Networking & Security",
    "question": "DES has an initial and final permutation block and _____ rounds.",
    "options": [
      "15",
      "14",
      "16",
      "All"
    ],
    "answer": 2,
    "answer_text": "16",
    "explanation": "DES uses exactly 16 rounds of Feistel cipher operations between the initial and final permutations."
  },
  {
    "id": 206,
    "category": "Networking & Security",
    "question": "Which of the following algorithms belong to symmetric encryption?",
    "options": [
      "RSA only",
      "DES only",
      "3DES only",
      "DES and 3DES (all except RSA)"
    ],
    "answer": 3,
    "answer_text": "DES and 3DES (all except RSA)",
    "explanation": "DES and 3DES are symmetric (same key for encrypt/decrypt). RSA is asymmetric (public/private key pair)."
  },
  {
    "id": 207,
    "category": "Networking & Security",
    "question": "How does Hybrid (Combined) Encryption work?",
    "options": [
      "Secret key is asymmetrically transmitted; message is symmetrically encrypted",
      "Message is symmetrically encrypted then everything is encrypted asymmetrically",
      "Secret key is symmetrically transmitted; message is asymmetrically encrypted",
      "Message is asymmetrically encrypted first, then symmetrically with the key"
    ],
    "answer": 0,
    "answer_text": "Secret key is asymmetrically transmitted; message is symmetrically encrypted",
    "explanation": "Hybrid encryption asymmetrically encrypts the session key (secure key exchange), then uses that session key to symmetrically encrypt the message."
  },
  {
    "id": 208,
    "category": "Networking & Security",
    "question": "Using PKI, which key does the sender use to ensure only the recipient can read the message?",
    "options": [
      "Sender's private key",
      "Recipient's private key",
      "Sender's public key",
      "Recipient's public key"
    ],
    "answer": 3,
    "answer_text": "Recipient's public key",
    "explanation": "Encrypting with the recipient's public key ensures only the recipient's private key can decrypt it."
  },
  {
    "id": 209,
    "category": "Networking & Security",
    "question": "Using PKI, which key is NOT used by the recipient to decrypt a received message?",
    "options": [
      "Sender's private key",
      "Recipient's private key",
      "Sender's public key",
      "Recipient's public key"
    ],
    "answer": 0,
    "answer_text": "Sender's private key",
    "explanation": "The recipient decrypts using their own private key. The sender's private key is used for digital signatures, not by the recipient."
  },
  {
    "id": 210,
    "category": "SE Process",
    "question": "Why do we need software requirements?",
    "options": [
      "To understand precisely what is required",
      "To communicate understanding to all development parties",
      "To control production to ensure system meets specs",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "Requirements serve all three purposes: understanding what to build, communicating it, and verifying the final product."
  },
  {
    "id": 211,
    "category": "SE Process",
    "question": "Creating a scaled-down or incomplete version of a system to test its aspects is called:",
    "options": [
      "Prototyping",
      "Mocking",
      "Configuration",
      "Staging"
    ],
    "answer": 0,
    "answer_text": "Prototyping",
    "explanation": "Prototyping involves building an early model to test concepts and gather feedback before full development."
  },
  {
    "id": 212,
    "category": "SE Process",
    "question": "A discipline method for producing programs with readability, maintainability and debuggability is:",
    "options": [
      "Coding",
      "Structured programming",
      "Logical programming",
      "None"
    ],
    "answer": 1,
    "answer_text": "Structured programming",
    "explanation": "Structured programming uses control structures (sequence, selection, iteration) and avoids goto, producing clean maintainable code."
  },
  {
    "id": 213,
    "category": "SE Process",
    "question": "Which of the following is true about alpha and beta testing?",
    "options": [
      "Alpha testing continues until customer agrees the system meets expectations",
      "Beta testing is done by the customer at the customer's own sites",
      "Alpha testing results in minor design changes",
      "All of the above"
    ],
    "answer": 3,
    "answer_text": "All of the above",
    "explanation": "All three statements accurately describe alpha and beta testing practices."
  },
  {
    "id": 214,
    "category": "SE Process",
    "question": "Which one is included in the software implementation process?",
    "options": [
      "Training",
      "Designing",
      "Planning",
      "Requirement gathering"
    ],
    "answer": 0,
    "answer_text": "Training",
    "explanation": "Training users is part of implementation. Designing, planning, and gathering requirements happen in earlier phases."
  },
  {
    "id": 215,
    "category": "SE Process",
    "question": "Which task does NOT belong in requirement elicitation activities?",
    "options": [
      "Ethnographic study",
      "Survey",
      "Interview",
      "None \u2014 all are valid elicitation activities"
    ],
    "answer": 3,
    "answer_text": "None \u2014 all are valid elicitation activities",
    "explanation": "Ethnographic study, surveys, and interviews are all valid requirement elicitation techniques."
  },
  {
    "id": 216,
    "category": "SE Process",
    "question": "Which one is NOT shown in a class diagram?",
    "options": [
      "Multiplicity",
      "Class instances (objects)",
      "Relationships",
      "Operations and attributes"
    ],
    "answer": 1,
    "answer_text": "Class instances (objects)",
    "explanation": "Class diagrams show class definitions, not specific instances/objects. Object diagrams show instances."
  },
  {
    "id": 217,
    "category": "SE Process",
    "question": "Which one is NOT true about non-functional requirements?",
    "options": [
      "Failing to meet them may render the system unusable",
      "A single non-functional requirement may affect the whole system",
      "Non-functional requirements list the features of the system",
      "None of the above"
    ],
    "answer": 2,
    "answer_text": "Non-functional requirements list the features of the system",
    "explanation": "Non-functional requirements define quality constraints (performance, security), NOT features. Features are functional requirements."
  },
  {
    "id": 218,
    "category": "SE Process",
    "question": "Which is NOT a fundamental activity in Software Engineering?",
    "options": [
      "Software Specification",
      "Software Evolution",
      "Software Design and Implementation",
      "None \u2014 all are fundamental activities"
    ],
    "answer": 3,
    "answer_text": "None \u2014 all are fundamental activities",
    "explanation": "Software Specification, Design and Implementation, and Evolution are all fundamental SE activities."
  },
  {
    "id": 219,
    "category": "Computer Programming",
    "question": "Which of the following variable names is valid in Python?",
    "options": [
      "*name",
      "_123",
      "_money$",
      "Full-name"
    ],
    "answer": 1,
    "answer_text": "_123",
    "explanation": "_123 is valid \u2014 Python identifiers can start with underscore and contain digits. *name, _money$, and Full-name all use invalid characters."
  },
  {
    "id": 220,
    "category": "Computer Programming",
    "question": "What is a variable in Python?",
    "options": [
      "A named location in memory that can store data",
      "A piece of data stored in memory",
      "A function used to store data",
      "A statement used to store data"
    ],
    "answer": 0,
    "answer_text": "A named location in memory that can store data",
    "explanation": "A variable is a named reference to a memory location that stores a value, allowing you to access and modify it by name."
  },
  {
    "id": 221,
    "category": "Computer Programming",
    "question": "Which keyword is used to define a function in Python?",
    "options": [
      "function",
      "define",
      "procedure",
      "def"
    ],
    "answer": 3,
    "answer_text": "def",
    "explanation": "In Python, functions are defined using the 'def' keyword: def function_name(parameters):"
  },
  {
    "id": 222,
    "category": "Computer Programming",
    "question": "What does max(['Software', 'Electrical', 'Civil']) return in Python?",
    "options": [
      "Software",
      "Electrical",
      "Civil",
      "None of the above"
    ],
    "answer": 0,
    "answer_text": "Software",
    "explanation": "Python's max() on strings uses lexicographic order. 'S' > 'E' > 'C' alphabetically, so 'Software' is returned."
  },
  {
    "id": 223,
    "category": "Computer Programming",
    "question": "yourString='Ethioipa'; stringList[1]='South Africa'. What does print(stringList[1]==yourString) and print(stringList[1] is yourString) output?",
    "options": [
      "True False",
      "False False",
      "True True",
      "None of the above"
    ],
    "answer": 1,
    "answer_text": "False False",
    "explanation": "'South Africa'=='Ethioipa' is False. 'is' checks object identity, also False. Output: False False."
  },
  {
    "id": 224,
    "category": "Computer Programming",
    "question": "a='Welcome'; print(a*2) \u2014 what is the output?",
    "options": [
      "Welcome",
      "TypeError",
      "a*2",
      "WelcomeWelcome"
    ],
    "answer": 3,
    "answer_text": "WelcomeWelcome",
    "explanation": "The * operator on strings in Python repeats them. 'Welcome'*2 = 'WelcomeWelcome'."
  },
  {
    "id": 225,
    "category": "Computer Programming",
    "question": "What does the 'pass' statement do in Python?",
    "options": [
      "Skips the current loop iteration",
      "Exits a function",
      "Raises an exception",
      "Acts as a placeholder for future code"
    ],
    "answer": 3,
    "answer_text": "Acts as a placeholder for future code",
    "explanation": "'pass' is a null operation used as a placeholder where syntax requires a statement but no action is needed."
  },
  {
    "id": 226,
    "category": "Computer Programming",
    "question": "What is the scope of a variable defined inside a function?",
    "options": [
      "Global",
      "Public",
      "Local",
      "Private"
    ],
    "answer": 2,
    "answer_text": "Local",
    "explanation": "Variables defined inside a function have local scope \u2014 they only exist within that function and are not accessible outside it."
  },
  {
    "id": 227,
    "category": "Computer Programming",
    "question": "if user_input is 'yes': proceed() \u2014 what is the root problem?",
    "options": [
      "The 'is' operator checks value equality",
      "'yes' cannot be compared this way",
      "'is' checks identity not value, so it may fail even when values are equal",
      "== should not be used with strings"
    ],
    "answer": 2,
    "answer_text": "'is' checks identity not value, so it may fail even when values are equal",
    "explanation": "'is' checks object identity (same memory address), not value equality. String interning is not guaranteed, so always use == for string comparison."
  },
  {
    "id": 228,
    "category": "Computer Programming",
    "question": "Why is Python easier for rapid development but slower in raw performance than C++?",
    "options": [
      "Python is compiled to machine code at runtime",
      "Python is interpreted line-by-line, causing slower execution but faster development",
      "Python uses static type checking which improves speed",
      "Python compiles directly to the OS kernel"
    ],
    "answer": 1,
    "answer_text": "Python is interpreted line-by-line, causing slower execution but faster development",
    "explanation": "Python is an interpreted language \u2014 code is executed line-by-line at runtime rather than pre-compiled, making development fast but execution slower than compiled languages."
  },
  {
    "id": 229,
    "category": "Computer Programming",
    "question": "total=4; for n in range(0,5,2): total+=n; print(total) \u2014 what is the output?",
    "options": [
      "10",
      "7",
      "11",
      "15"
    ],
    "answer": 0,
    "answer_text": "10",
    "explanation": "range(0,5,2) produces 0,2,4. total: 4+0=4, 4+2=6, 6+4=10. Output: 10."
  },
  {
    "id": 230,
    "category": "Computer Programming",
    "question": "Which is NOT a Python built-in exception?",
    "options": [
      "MemoryError",
      "KeyError",
      "StackOverflowError",
      "StopIteration"
    ],
    "answer": 2,
    "answer_text": "StackOverflowError",
    "explanation": "Python does not have StackOverflowError. It raises RecursionError when the recursion limit is exceeded. StackOverflowError is a Java exception."
  },
  {
    "id": 231,
    "category": "Computer Programming",
    "question": "data={'a':1,'b':2,'c':3}; result={k:v*2 for k,v in data.items() if v%2==0} \u2014 what is result?",
    "options": [
      "{'a':2,'b':4,'c':6}",
      "{'a':1,'b':4,'c':6}",
      "{'a':2,'c':6}",
      "{'b':4}"
    ],
    "answer": 3,
    "answer_text": "{'b':4}",
    "explanation": "Filter: only 'b':2 has even value. 2*2=4. Result: {'b':4}."
  },
  {
    "id": 232,
    "category": "Computer Programming",
    "question": "Which is true about Python data types?",
    "options": [
      "Lists are immutable",
      "Strings are mutable",
      "All data structures are immutable",
      "None of the above \u2014 lists are mutable, strings are immutable"
    ],
    "answer": 3,
    "answer_text": "None of the above \u2014 lists are mutable, strings are immutable",
    "explanation": "Lists are mutable, strings are immutable. So A and B are false; 'None of the above' is correct."
  },
  {
    "id": 233,
    "category": "Computer Programming",
    "question": "Which is NOT true about functions in Python?",
    "options": [
      "Functions are reusable pieces of program",
      "Functions provide better modularity",
      "Function definitions can alter flow of execution",
      "Python allows user-defined functions"
    ],
    "answer": 2,
    "answer_text": "Function definitions can alter flow of execution",
    "explanation": "Function definitions do NOT alter flow of execution \u2014 calling a function does. A definition just creates the function object."
  },
  {
    "id": 234,
    "category": "Computer Programming",
    "question": "Which data structure is ordered, unchangeable, and allows duplicate members?",
    "options": [
      "Dictionary",
      "List",
      "Tuple",
      "Set"
    ],
    "answer": 2,
    "answer_text": "Tuple",
    "explanation": "A Tuple is ordered, immutable (unchangeable), and allows duplicates. Lists are mutable. Sets are unordered with no duplicates."
  },
  {
    "id": 235,
    "category": "Data Structures & Algorithms",
    "question": "How does a stack handle nested function calls (main() -> A() -> B()) in a call stack?",
    "options": [
      "Uses FIFO to execute outermost function first",
      "Pushes each call onto stack and pops on return (LIFO)",
      "Randomly selects next function to execute",
      "Uses a hash table to track function order"
    ],
    "answer": 1,
    "answer_text": "Pushes each call onto stack and pops on return (LIFO)",
    "explanation": "The call stack is LIFO \u2014 each function call is pushed on, and when it returns it is popped. B() returns first, then A(), then main()."
  },
  {
    "id": 236,
    "category": "Data Structures & Algorithms",
    "question": "Which operation in a singly linked list has O(1) time complexity?",
    "options": [
      "Inserting at the end",
      "Deleting the last node",
      "Inserting at the head",
      "Finding the middle node"
    ],
    "answer": 2,
    "answer_text": "Inserting at the head",
    "explanation": "Inserting at the head is O(1) \u2014 just update the head pointer. All others require traversal: O(n)."
  },
  {
    "id": 237,
    "category": "Data Structures & Algorithms",
    "question": "What is the time complexity of inorder traversal of a binary tree with n nodes?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(n log n)"
    ],
    "answer": 0,
    "answer_text": "O(n)",
    "explanation": "Inorder traversal visits every node exactly once, so it runs in O(n) time."
  },
  {
    "id": 238,
    "category": "Data Structures & Algorithms",
    "question": "Which stack property is crucial for implementing undo/redo in a text editor?",
    "options": [
      "Random access",
      "LIFO (Last-In-First-Out)",
      "FIFO (First-In-First-Out)",
      "Sorting"
    ],
    "answer": 1,
    "answer_text": "LIFO (Last-In-First-Out)",
    "explanation": "Undo/redo needs LIFO \u2014 the most recently performed action should be undone first, exactly matching stack behavior."
  },
  {
    "id": 239,
    "category": "Data Structures & Algorithms",
    "question": "What does Big-O notation describe?",
    "options": [
      "Exact runtime",
      "Lower bound (best-case)",
      "Upper bound (worst-case)",
      "Average-case space usage"
    ],
    "answer": 2,
    "answer_text": "Upper bound (worst-case)",
    "explanation": "Big-O notation describes the upper bound (worst-case) of an algorithm's growth rate as input size increases."
  },
  {
    "id": 240,
    "category": "Data Structures & Algorithms",
    "question": "In a printer queue, why is FIFO preferred over a stack?",
    "options": [
      "Stacks are faster",
      "Fairness \u2014 oldest requests print first",
      "Queues use less memory",
      "Stacks allow priority scheduling"
    ],
    "answer": 1,
    "answer_text": "Fairness \u2014 oldest requests print first",
    "explanation": "FIFO ensures fairness \u2014 print jobs are handled in the order they were submitted, preventing newer jobs from always jumping ahead."
  },
  {
    "id": 241,
    "category": "Data Structures & Algorithms",
    "question": "Which data structure best models the 'recently closed tabs' feature in browsers?",
    "options": [
      "Queue",
      "Stack",
      "Hash Map",
      "Binary Tree"
    ],
    "answer": 1,
    "answer_text": "Stack",
    "explanation": "Recently closed tabs use LIFO \u2014 the last closed tab is the first restored (Ctrl+Shift+T), matching stack behavior."
  },
  {
    "id": 242,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following is an NP-Complete problem?",
    "options": [
      "Merge Sort",
      "Linear Search",
      "Traveling Salesman Problem",
      "Binary Search"
    ],
    "answer": 2,
    "answer_text": "Traveling Salesman Problem",
    "explanation": "The Traveling Salesman Problem (TSP) is a classic NP-Complete problem. The others are polynomial-time algorithms."
  },
  {
    "id": 243,
    "category": "OOP & Programming",
    "question": "Which is a complete and accurate definition of inheritance in OOP?",
    "options": [
      "Sharing of attributes and methods among classes based on a hierarchical relationship",
      "The hiding of data within a class",
      "Sharing of methods only among classes based on hierarchy",
      "Having methods with the same name performing different functions"
    ],
    "answer": 0,
    "answer_text": "Sharing of attributes and methods among classes based on a hierarchical relationship",
    "explanation": "Inheritance is the mechanism where a subclass acquires both attributes and methods from a parent class based on a hierarchical relationship."
  },
  {
    "id": 244,
    "category": "OOP & Programming",
    "question": "Declaring a class as abstract means that:",
    "options": [
      "The class consists entirely of abstract methods",
      "The class cannot be subclassed",
      "It is not possible to declare objects of that class",
      "The class has no attributes of its own"
    ],
    "answer": 2,
    "answer_text": "It is not possible to declare objects of that class",
    "explanation": "An abstract class cannot be instantiated. It may have both abstract and concrete methods, and it CAN be subclassed."
  },
  {
    "id": 245,
    "category": "OOP & Programming",
    "question": "Declaring a class as final means that:",
    "options": [
      "The class consists entirely of abstract methods",
      "The class cannot be subclassed",
      "It is not possible to declare objects of that class",
      "The class has no attributes of its own"
    ],
    "answer": 1,
    "answer_text": "The class cannot be subclassed",
    "explanation": "A final class cannot be subclassed (extended). It can still be instantiated \u2014 you just cannot inherit from it."
  },
  {
    "id": 246,
    "category": "OOP & Programming",
    "question": "Which statement is correct regarding interfaces in Java?",
    "options": [
      "An interface consists of abstract methods only",
      "An interface has some abstract and some regular methods",
      "An interface is implemented with the keyword 'extends'",
      "A class cannot implement more than one interface"
    ],
    "answer": 0,
    "answer_text": "An interface consists of abstract methods only",
    "explanation": "Traditionally, interfaces consist of abstract methods only (before Java 8 default methods). A class 'implements' (not extends) an interface and can implement multiple interfaces."
  },
  {
    "id": 247,
    "category": "Web Programming",
    "question": "What is the primary role of an Information Architect?",
    "options": [
      "Designing the user interface",
      "Ensuring website security",
      "Organizing content for ease of findability",
      "Writing marketing content"
    ],
    "answer": 2,
    "answer_text": "Organizing content for ease of findability",
    "explanation": "An Information Architect organizes and structures content so users can easily find and navigate information on a website."
  },
  {
    "id": 248,
    "category": "Web Programming",
    "question": "What is the main purpose of the Document Object Model (DOM)?",
    "options": [
      "Storing user data",
      "Defining the database schema",
      "Encrypting web requests",
      "Representing HTML elements as a programmable tree structure"
    ],
    "answer": 3,
    "answer_text": "Representing HTML elements as a programmable tree structure",
    "explanation": "The DOM is a programming interface that represents an HTML document as a tree of objects, allowing scripts to dynamically access and update content."
  },
  {
    "id": 249,
    "category": "Web Programming",
    "question": "What is the purpose of the <meta> tag in an HTML document?",
    "options": [
      "Provides metadata about the header",
      "Provides metadata about hyperlinks",
      "Provides metadata about the document",
      "Provides metadata about JavaScript"
    ],
    "answer": 2,
    "answer_text": "Provides metadata about the document",
    "explanation": "The <meta> tag provides metadata about the HTML document \u2014 charset, description, keywords, viewport settings, etc."
  },
  {
    "id": 250,
    "category": "Web Programming",
    "question": "What does the HTML5 <article> element represent?",
    "options": [
      "A footer or header section",
      "A complete, self-contained composition",
      "A navigation or menu section",
      "A form input field"
    ],
    "answer": 1,
    "answer_text": "A complete, self-contained composition",
    "explanation": "<article> represents a self-contained piece of content that could be distributed independently \u2014 blog post, news article, forum post, etc."
  },
  {
    "id": 251,
    "category": "Web Programming",
    "question": "Which HTML element is used for marking up a short inline quote?",
    "options": [
      "<quote>",
      "<cite>",
      "<q>",
      "<blockquote>"
    ],
    "answer": 2,
    "answer_text": "<q>",
    "explanation": "<q> is used for short inline quotations. <blockquote> is for block-level quotes. <cite> references a creative work title."
  },
  {
    "id": 252,
    "category": "Web Programming",
    "question": "Which tag is used to display a horizontal rule in HTML?",
    "options": [
      "<line>",
      "<hr>",
      "<border>",
      "<br>"
    ],
    "answer": 1,
    "answer_text": "<hr>",
    "explanation": "<hr> creates a horizontal rule (thematic break). <br> is a line break. <line> and <border> are not valid HTML tags."
  },
  {
    "id": 253,
    "category": "Web Programming",
    "question": "What is the correct way to define an HTML5 document?",
    "options": [
      "<html5>",
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<doctype html>"
    ],
    "answer": 1,
    "answer_text": "<!DOCTYPE html>",
    "explanation": "The correct HTML5 doctype is <!DOCTYPE html> \u2014 simple, case-insensitive, and tells the browser to render in standards mode."
  },
  {
    "id": 254,
    "category": "Web Programming",
    "question": "Which attribute is mandatory for the <img> element?",
    "options": [
      "alt",
      "width",
      "src",
      "height"
    ],
    "answer": 2,
    "answer_text": "src",
    "explanation": "The 'src' attribute is mandatory for <img> \u2014 it specifies the image URL. Without it the image cannot be displayed."
  },
  {
    "id": 255,
    "category": "Web Programming",
    "question": "Why is accessibility important in web development?",
    "options": [
      "It ensures websites are only for tech-savvy users",
      "It helps reduce maintenance costs",
      "It makes websites usable by people with diverse abilities",
      "It eliminates the need for mobile-friendly design"
    ],
    "answer": 2,
    "answer_text": "It makes websites usable by people with diverse abilities",
    "explanation": "Web accessibility ensures people with disabilities (visual, motor, cognitive) can perceive, navigate, and interact with websites."
  },
  {
    "id": 256,
    "category": "Android Development",
    "question": "In Android UI, what is the primary function of a ViewGroup?",
    "options": [
      "Drawing UI elements on screen",
      "Providing static content used by code",
      "Acting as a container that determines how child Views are displayed",
      "Being the main entry point for user interaction"
    ],
    "answer": 2,
    "answer_text": "Acting as a container that determines how child Views are displayed",
    "explanation": "A ViewGroup is an invisible container that holds and arranges child View objects, defining their layout (LinearLayout, ConstraintLayout, etc.)."
  },
  {
    "id": 257,
    "category": "Android Development",
    "question": "How is activity_main.xml typically referenced in Android code?",
    "options": [
      "main.activity_layout",
      "@layout/activity_main",
      "res.layout.activity_main",
      "R.layout.activity_main"
    ],
    "answer": 3,
    "answer_text": "R.layout.activity_main",
    "explanation": "Android resources are accessed via the auto-generated R class: R.layout.activity_main maps the resource name to an integer ID."
  },
  {
    "id": 258,
    "category": "Android Development",
    "question": "To make a View respond to user input (e.g., a button tap), what mechanism is commonly used?",
    "options": [
      "Directly modifying View properties in XML",
      "Using LayoutInflater to redraw the layout",
      "Registering a listener on the View",
      "Declaring the View with lateinit"
    ],
    "answer": 2,
    "answer_text": "Registering a listener on the View",
    "explanation": "Event listeners (e.g., setOnClickListener) are registered on Views to handle user interactions like taps and clicks."
  },
  {
    "id": 259,
    "category": "Android Development",
    "question": "What role does Gradle play in Android app development?",
    "options": [
      "Primary language for writing Android logic",
      "Tool for designing the UI visually",
      "Provides resources like images and layouts",
      "Manages the build cycle and dependencies"
    ],
    "answer": 3,
    "answer_text": "Manages the build cycle and dependencies",
    "explanation": "Gradle is the build automation system for Android \u2014 it compiles code, manages library dependencies, and packages the APK."
  },
  {
    "id": 260,
    "category": "Android Development",
    "question": "What unit of measurement is recommended for Android layout dimensions across different screen densities?",
    "options": [
      "pixels (px)",
      "millimeters (mm)",
      "inches (in)",
      "density-independent pixels (dp)"
    ],
    "answer": 3,
    "answer_text": "density-independent pixels (dp)",
    "explanation": "dp (density-independent pixels) scales automatically based on screen density, ensuring consistent UI sizes across different devices."
  },
  {
    "id": 261,
    "category": "Android Development",
    "question": "What is a key benefit of Data Binding over findViewById() in Android?",
    "options": [
      "Eliminates the need for XML layout files",
      "Makes the app smaller",
      "Allows modifying UI from background threads",
      "Simplifies accessing Views without repeatedly traversing the View hierarchy"
    ],
    "answer": 3,
    "answer_text": "Simplifies accessing Views without repeatedly traversing the View hierarchy",
    "explanation": "Data Binding generates binding classes that directly reference Views, eliminating repetitive findViewById() calls and reducing boilerplate."
  },
  {
    "id": 262,
    "category": "Databases",
    "question": "In ER model where Y is dominant and X is subordinate: if Y is deleted, what happens to X?",
    "options": [
      "X is also deleted",
      "X is not deleted",
      "If X is deleted, Y is also deleted",
      "None of the above"
    ],
    "answer": 0,
    "answer_text": "X is also deleted",
    "explanation": "A weak (subordinate) entity X depends on the strong (dominant) entity Y for its existence. Deleting Y cascades to delete X."
  },
  {
    "id": 263,
    "category": "Databases",
    "question": "R1(a,b,c) and R2(x,y,z): 'a' is FK in R1 referencing PK of R2. Which operations may violate referential integrity?",
    "options": [
      "Insert into R1 and Insert into R2",
      "Insert into R2 and Delete from R1",
      "Delete from R1 and Delete from R2",
      "Delete from R2 and Insert into R1"
    ],
    "answer": 3,
    "answer_text": "Delete from R2 and Insert into R1",
    "explanation": "Inserting into R1 with a non-existent FK value violates integrity. Deleting from R2 when R1 still references it also violates it."
  },
  {
    "id": 264,
    "category": "Databases",
    "question": "Which relational algebra operation extracts specified columns from a table?",
    "options": [
      "Join",
      "Extract",
      "Project",
      "Substitute"
    ],
    "answer": 2,
    "answer_text": "Project",
    "explanation": "PROJECT (pi) selects specific columns (vertical partitioning) from a relation, eliminating the others."
  },
  {
    "id": 265,
    "category": "Databases",
    "question": "Relations produced from an E-R Model will always be in which minimum normal form?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answer": 0,
    "answer_text": "1NF",
    "explanation": "Converting ER to relations guarantees 1NF (atomic values, no repeating groups) but not necessarily higher normal forms."
  },
  {
    "id": 266,
    "category": "Databases",
    "question": "SELECT empName WHERE NOT EXISTS (SELECT custId WHERE rating <> 'GOOD') \u2014 what does this return?",
    "options": [
      "Employees with at least one customer having GOOD rating",
      "Employees with at most one customer having GOOD rating",
      "Employees with no customers having GOOD rating",
      "Employees where ALL customers have GOOD rating"
    ],
    "answer": 3,
    "answer_text": "Employees where ALL customers have GOOD rating",
    "explanation": "NOT EXISTS means: there is NO customer of this employee whose rating is not GOOD \u2014 i.e., ALL customers have GOOD rating."
  },
  {
    "id": 267,
    "category": "Databases",
    "question": "Databases overcome which drawbacks of file systems?",
    "options": [
      "Data redundancy only",
      "Data redundancy and integrity problems",
      "Data redundancy, access difficulty, and data isolation",
      "All of: data redundancy, access difficulty, data isolation, and integrity problems"
    ],
    "answer": 3,
    "answer_text": "All of: data redundancy, access difficulty, data isolation, and integrity problems",
    "explanation": "All four \u2014 redundancy/inconsistency, access difficulty, isolation, and integrity problems \u2014 are classic file system issues that databases solve."
  },
  {
    "id": 268,
    "category": "Databases",
    "question": "Which SQL query is equivalent to: SELECT name, course_id FROM instructor, teaches WHERE instructor_ID=teaches_ID?",
    "options": [
      "SELECT name, course_id FROM instructor NATURAL JOIN teaches",
      "SELECT name, course_id FROM teaches, instructor WHERE instructor_id=teaches_id",
      "SELECT name, course_id FROM instructor",
      "SELECT course_id FROM instructor JOIN teaches"
    ],
    "answer": 0,
    "answer_text": "SELECT name, course_id FROM instructor NATURAL JOIN teaches",
    "explanation": "NATURAL JOIN automatically joins on columns with the same name, equivalent to the explicit WHERE join on instructor_ID=teaches_ID."
  },
  {
    "id": 269,
    "category": "Databases",
    "question": "NATURAL JOIN can be termed as a combination of:",
    "options": [
      "Union and Cartesian product",
      "Selection and Cartesian product",
      "Projection and Cartesian product",
      "None"
    ],
    "answer": 1,
    "answer_text": "Selection and Cartesian product",
    "explanation": "NATURAL JOIN = Selection (on matching column names) applied to the Cartesian product, then Projection to remove duplicate columns."
  },
  {
    "id": 270,
    "category": "Operating Systems",
    "question": "In the Fetch-Decode-Execute cycle, at which stage is an interrupt processed?",
    "options": [
      "Before decoding the fetched instruction",
      "Before fetching the next instruction",
      "Before executing an instruction",
      "It can be handled at any stage"
    ],
    "answer": 1,
    "answer_text": "Before fetching the next instruction",
    "explanation": "Interrupts are checked after completing the current Execute stage \u2014 before fetching the next instruction, allowing the CPU to respond to external events."
  },
  {
    "id": 271,
    "category": "Operating Systems",
    "question": "In multiprogramming (no timesharing), the CPU switches to another process when the current process is in which state?",
    "options": [
      "Blocked state",
      "Ready state",
      "Running state",
      "New state"
    ],
    "answer": 0,
    "answer_text": "Blocked state",
    "explanation": "Without timesharing, CPU only switches when a process voluntarily blocks (e.g., waiting for I/O). There is no timer-based preemption."
  },
  {
    "id": 272,
    "category": "Operating Systems",
    "question": "User-level threading causes which of the following issues?",
    "options": [
      "Platform dependence",
      "Exposes processes to user attacks",
      "Limitation in effective concurrency (one block blocks all)",
      "High cost of context switch among threads"
    ],
    "answer": 2,
    "answer_text": "Limitation in effective concurrency (one block blocks all)",
    "explanation": "The OS sees only one process for all user-level threads. If one thread blocks on I/O, the OS blocks the entire process, limiting effective concurrency."
  },
  {
    "id": 273,
    "category": "Operating Systems",
    "question": "Which violates the conditions for mutual exclusion?",
    "options": [
      "Allowing only one process in its critical region",
      "No mutual exclusion mechanism is needed on faster processors",
      "Allowing a process to enter if no other is in critical region",
      "Processes should get a chance to enter without starvation"
    ],
    "answer": 1,
    "answer_text": "No mutual exclusion mechanism is needed on faster processors",
    "explanation": "Speed does not eliminate race conditions \u2014 mutual exclusion mechanisms are always necessary regardless of processor speed."
  },
  {
    "id": 274,
    "category": "Operating Systems",
    "question": "Which process scheduling algorithm favors I/O-bound processes?",
    "options": [
      "First-Come First-Served",
      "Shortest Remaining Time",
      "Longest Remaining Time",
      "Round-Robin"
    ],
    "answer": 1,
    "answer_text": "Shortest Remaining Time",
    "explanation": "Shortest Remaining Time favors I/O-bound processes because they have short CPU bursts, allowing them to run quickly and return to I/O waiting."
  },
  {
    "id": 275,
    "category": "SE Process",
    "question": "What is the primary goal of requirement engineering?",
    "options": [
      "Writing code for the software",
      "Identifying and documenting stakeholders' needs and constraints",
      "Designing the user interface",
      "Testing the final product"
    ],
    "answer": 1,
    "answer_text": "Identifying and documenting stakeholders' needs and constraints",
    "explanation": "Requirement engineering systematically identifies, documents, and manages stakeholder needs to ensure the system built is the right one."
  },
  {
    "id": 276,
    "category": "SE Process",
    "question": "Which of the following is NOT a standard type of software requirement?",
    "options": [
      "Functional requirement",
      "Non-functional requirement",
      "Design requirement",
      "User requirement"
    ],
    "answer": 2,
    "answer_text": "Design requirement",
    "explanation": "Design requirements are not a standard category. The main types are: functional, non-functional, and user/system requirements."
  },
  {
    "id": 277,
    "category": "SE Process",
    "question": "What is a 'use case' in requirement engineering?",
    "options": [
      "A programming language construct",
      "A description of interactions between actors and the system to achieve a goal",
      "A type of software bug",
      "A testing technique"
    ],
    "answer": 1,
    "answer_text": "A description of interactions between actors and the system to achieve a goal",
    "explanation": "A use case describes how an actor (user or external system) interacts with the system to accomplish a specific goal."
  },
  {
    "id": 278,
    "category": "SE Process",
    "question": "Which technique is used for prioritizing software requirements?",
    "options": [
      "MoSCoW (Must have, Should have, Could have, Won't have)",
      "Waterfall model",
      "Agile sprint planning",
      "White-box testing"
    ],
    "answer": 0,
    "answer_text": "MoSCoW (Must have, Should have, Could have, Won't have)",
    "explanation": "MoSCoW categorizes requirements by importance: Must have, Should have, Could have, and Won't have (this time)."
  },
  {
    "id": 279,
    "category": "SE Process",
    "question": "What is the purpose of a Software Requirements Specification (SRS) document?",
    "options": [
      "To describe the system's architecture",
      "To provide a complete description of the software's functions and constraints",
      "To outline the project budget",
      "To list the names of developers"
    ],
    "answer": 1,
    "answer_text": "To provide a complete description of the software's functions and constraints",
    "explanation": "An SRS document comprehensively describes what the system should do (functional) and its constraints (non-functional requirements)."
  },
  {
    "id": 280,
    "category": "SE Process",
    "question": "What is the main purpose of software architecture?",
    "options": [
      "To write detailed code for modules",
      "To define the high-level structure and organization of a software system",
      "To perform unit testing",
      "To create user manuals"
    ],
    "answer": 1,
    "answer_text": "To define the high-level structure and organization of a software system",
    "explanation": "Software architecture defines the high-level structure of a system \u2014 how components are organized, interact, and fulfill quality requirements."
  },
  {
    "id": 281,
    "category": "SE Process",
    "question": "Which of the following is a well-known software architectural pattern?",
    "options": [
      "Bubble Sort",
      "Model-View-Controller (MVC)",
      "Binary Search",
      "Regression Testing"
    ],
    "answer": 1,
    "answer_text": "Model-View-Controller (MVC)",
    "explanation": "MVC (Model-View-Controller) is a widely used architectural pattern that separates an application into three interconnected components."
  },
  {
    "id": 282,
    "category": "SE Process",
    "question": "What does 'scalability' refer to in software architecture?",
    "options": [
      "The ability to handle increasing workloads effectively",
      "The number of bugs in the system",
      "The programming language used",
      "The color scheme of the UI"
    ],
    "answer": 0,
    "answer_text": "The ability to handle increasing workloads effectively",
    "explanation": "Scalability is the system's ability to handle growing amounts of work or users without degrading performance."
  },
  {
    "id": 283,
    "category": "SE Process",
    "question": "Which architecture style is best suited for distributed systems?",
    "options": [
      "Monolithic",
      "Client-Server",
      "Single-tier",
      "Standalone application"
    ],
    "answer": 1,
    "answer_text": "Client-Server",
    "explanation": "Client-Server architecture is designed for distributed systems where clients request services from servers over a network."
  },
  {
    "id": 284,
    "category": "SE Process",
    "question": "What is the role of a 'component' in software architecture?",
    "options": [
      "A single line of code",
      "A modular, reusable part of the system with well-defined interfaces",
      "A type of software bug",
      "A testing framework"
    ],
    "answer": 1,
    "answer_text": "A modular, reusable part of the system with well-defined interfaces",
    "explanation": "A component is a modular, deployable, replaceable part of a system that encapsulates its implementation and exposes interfaces."
  },
  {
    "id": 285,
    "category": "SE Process",
    "question": "Managing projects as a portfolio of investments contributing to enterprise success is called:",
    "options": [
      "Program portfolio",
      "Program Management",
      "Project Management",
      "Project portfolio management"
    ],
    "answer": 3,
    "answer_text": "Project portfolio management",
    "explanation": "Project Portfolio Management (PPM) selects and manages projects as a portfolio to maximize business value and strategic alignment."
  },
  {
    "id": 286,
    "category": "SE Process",
    "question": "DSDM stands for:",
    "options": [
      "Development Systems Dynamic Method",
      "Database Systems Development Method",
      "Dynamic Systems Development Method",
      "Development Systems Database Method"
    ],
    "answer": 2,
    "answer_text": "Dynamic Systems Development Method",
    "explanation": "DSDM stands for Dynamic Systems Development Method \u2014 an Agile framework emphasizing iterative and incremental delivery."
  },
  {
    "id": 287,
    "category": "SE Process",
    "question": "Which process model is suitable for development of Client/Server applications?",
    "options": [
      "RUP",
      "Concurrent",
      "Spiral Model",
      "RAD"
    ],
    "answer": 3,
    "answer_text": "RAD",
    "explanation": "RAD (Rapid Application Development) is well-suited for client/server applications due to its iterative prototyping and fast delivery approach."
  },
  {
    "id": 288,
    "category": "SE Process",
    "question": "Which process model element includes Tasks, Milestones, and Work products?",
    "options": [
      "Task sets",
      "Framework Activity",
      "Umbrella Activity",
      "Support Activity"
    ],
    "answer": 0,
    "answer_text": "Task sets",
    "explanation": "A Task Set defines the specific tasks, milestones, and deliverables required to complete a framework activity in a software process model."
  },
  {
    "id": 289,
    "category": "Networking & Security",
    "question": "Which protocol helps prevent ARP spoofing by verifying IP-to-MAC bindings?",
    "options": [
      "DHCP Snooping",
      "Dynamic ARP Inspection",
      "Port Security",
      "IP Source Guard"
    ],
    "answer": 1,
    "answer_text": "Dynamic ARP Inspection",
    "explanation": "Dynamic ARP Inspection (DAI) validates ARP packets against a trusted DHCP snooping binding table to prevent ARP spoofing attacks."
  },
  {
    "id": 290,
    "category": "Networking & Security",
    "question": "A subnet with mask /29 provides how many usable host IP addresses?",
    "options": [
      "6",
      "8",
      "14",
      "30"
    ],
    "answer": 0,
    "answer_text": "6",
    "explanation": "/29 means 3 host bits. Total addresses = 2^3=8. Usable hosts = 8-2 (network + broadcast) = 6."
  },
  {
    "id": 291,
    "category": "Networking & Security",
    "question": "Which statement about VLANs is correct?",
    "options": [
      "VLANs operate at Layer 1",
      "VLANs require routers for inter-VLAN communication",
      "VLANs increase collision domains",
      "VLANs use IP addresses for identification"
    ],
    "answer": 1,
    "answer_text": "VLANs require routers for inter-VLAN communication",
    "explanation": "VLANs segment networks at Layer 2. To route traffic between VLANs, a Layer 3 device (router or Layer 3 switch) is required."
  },
  {
    "id": 292,
    "category": "Networking & Security",
    "question": "Which field in the IP header limits the packet's lifespan and prevents routing loops?",
    "options": [
      "Protocol",
      "Identification",
      "TTL",
      "Fragment Offset"
    ],
    "answer": 2,
    "answer_text": "TTL",
    "explanation": "TTL (Time to Live) is decremented by each router. When it reaches 0, the packet is discarded, preventing infinite loops."
  },
  {
    "id": 293,
    "category": "Networking & Security",
    "question": "When a switch receives a frame with an unknown destination MAC address, it:",
    "options": [
      "Drops it",
      "Floods it out all ports except the source port",
      "Sends it to the default gateway",
      "Queries ARP for resolution"
    ],
    "answer": 1,
    "answer_text": "Floods it out all ports except the source port",
    "explanation": "Unknown unicast flooding: the switch sends the frame out all ports except the source, hoping the destination will respond so its MAC can be learned."
  },
  {
    "id": 294,
    "category": "Networking & Security",
    "question": "Which tool/flag combination is used to test MTU issues across a network path?",
    "options": [
      "ping with -f and -l flags",
      "traceroute",
      "netstat",
      "pathping"
    ],
    "answer": 0,
    "answer_text": "ping with -f and -l flags",
    "explanation": "ping -f (don't fragment) and -l (packet size) tests the MTU along a network path by sending packets of specific sizes."
  },
  {
    "id": 295,
    "category": "Networking & Security",
    "question": "In IPv6, which address type delivers a packet to the nearest of multiple nodes sharing the same address?",
    "options": [
      "Multicast",
      "Broadcast",
      "Anycast",
      "Link-local"
    ],
    "answer": 2,
    "answer_text": "Anycast",
    "explanation": "Anycast delivers to the topologically nearest node among a group sharing the same address. IPv6 does not support broadcast addresses."
  },
  {
    "id": 296,
    "category": "Networking & Security",
    "question": "A malicious program that does NOT replicate automatically is called a:",
    "options": [
      "Trojan horse",
      "Virus",
      "Worm",
      "Zombie"
    ],
    "answer": 0,
    "answer_text": "Trojan horse",
    "explanation": "A Trojan horse disguises itself as legitimate software but does not self-replicate. Viruses and worms replicate automatically."
  },
  {
    "id": 297,
    "category": "Networking & Security",
    "question": "Which of the following is just opposite to the 'Open Design' principle?",
    "options": [
      "Security through obscurity",
      "Least common mechanism",
      "Least privileges",
      "Work factor"
    ],
    "answer": 0,
    "answer_text": "Security through obscurity",
    "explanation": "Open Design means security should not rely on secrecy. Its opposite is 'Security through obscurity' \u2014 relying on hiding the design to achieve security."
  },
  {
    "id": 298,
    "category": "Networking & Security",
    "question": "Which is defined as an attempt to harm, damage, or cause threat to a system or network?",
    "options": [
      "Digital crime",
      "Threats",
      "Cyber Attack",
      "System hijacking"
    ],
    "answer": 2,
    "answer_text": "Cyber Attack",
    "explanation": "A Cyber Attack is a deliberate attempt to harm, damage, or gain unauthorized access to a computer system or network."
  },
  {
    "id": 299,
    "category": "Networking & Security",
    "question": "Cryptographic algorithms use ___________ for secure transformation of data.",
    "options": [
      "Secret key",
      "External programs",
      "Add-ons",
      "Secondary key"
    ],
    "answer": 0,
    "answer_text": "Secret key",
    "explanation": "Cryptographic algorithms rely on keys (secret keys for symmetric, public/private key pairs for asymmetric) to perform secure data transformation."
  },
  {
    "id": 300,
    "category": "Networking & Security",
    "question": "The art and science of cracking cipher-text without knowing the key is called:",
    "options": [
      "Cracking",
      "Cryptanalysis",
      "Cryptography",
      "Crypto-hacking"
    ],
    "answer": 1,
    "answer_text": "Cryptanalysis",
    "explanation": "Cryptanalysis is the study of breaking cryptographic systems \u2014 analyzing ciphertext to find the key or plaintext without prior knowledge of the key."
  },
  {
    "id": 301,
    "category": "Networking & Security",
    "question": "Which of the following is NOT a primary objective of cryptography?",
    "options": [
      "Confidentiality",
      "Data Integrity",
      "Data Redundancy",
      "Authentication"
    ],
    "answer": 2,
    "answer_text": "Data Redundancy",
    "explanation": "Data Redundancy (storing copies of data) is a fault-tolerance concept, not a cryptographic objective. The primary goals are confidentiality, integrity, authentication, and non-repudiation."
  },
  {
    "id": 302,
    "category": "AI & Data Science",
    "question": "What is the Turing Test in AI?",
    "options": [
      "A test to determine if a machine exhibits intelligent behavior indistinguishable from a human",
      "A test to determine if a machine can generate creative content",
      "A test to determine if a machine can predict human behavior",
      "A test to determine if a machine performs tasks faster than a human"
    ],
    "answer": 0,
    "answer_text": "A test to determine if a machine exhibits intelligent behavior indistinguishable from a human",
    "explanation": "The Turing Test (Alan Turing, 1950) evaluates whether a machine's conversation responses are indistinguishable from a human's."
  },
  {
    "id": 303,
    "category": "AI & Data Science",
    "question": "Which activation function is prone to the vanishing gradient problem in deep neural networks?",
    "options": [
      "Sigmoid",
      "ReLU",
      "Tanh",
      "Leaky ReLU"
    ],
    "answer": 0,
    "answer_text": "Sigmoid",
    "explanation": "Sigmoid squashes values to (0,1). For extreme inputs, gradients become very small. In deep networks, these multiply and vanish, making training very slow."
  },
  {
    "id": 304,
    "category": "AI & Data Science",
    "question": "A two-layer NN with ReLU hidden layer and sigmoid output layer \u2014 which is true about the output values?",
    "options": [
      "Output values can be negative or positive",
      "Output values are always between 0 and 1",
      "Output values are always positive",
      "Output values can be any real number"
    ],
    "answer": 1,
    "answer_text": "Output values are always between 0 and 1",
    "explanation": "The sigmoid activation in the output layer squashes values to the range (0, 1), regardless of what the hidden layer produces."
  },
  {
    "id": 305,
    "category": "AI & Data Science",
    "question": "Which of the following is NOT a core goal of machine learning?",
    "options": [
      "Enabling computers to learn without explicit programming",
      "Performing complex calculations efficiently",
      "Extracting insights and patterns from data",
      "Reasoning and making logical deductions"
    ],
    "answer": 1,
    "answer_text": "Performing complex calculations efficiently",
    "explanation": "Performing complex calculations efficiently is a general computing goal, not specific to ML. ML focuses on learning from data, prediction, and pattern recognition."
  },
  {
    "id": 306,
    "category": "AI & Data Science",
    "question": "In Bayesian decision theory, minimizing the expected _____ is the key objective under uncertainty.",
    "options": [
      "Cost",
      "Variance",
      "Bias",
      "Runtime"
    ],
    "answer": 0,
    "answer_text": "Cost",
    "explanation": "Bayesian decision theory frames decisions as minimizing expected loss (cost). The optimal decision minimizes expected cost given posterior probabilities."
  },
  {
    "id": 307,
    "category": "AI & Data Science",
    "question": "Which assumption is NOT typically made by parametric methods?",
    "options": [
      "Data follows a known distribution (e.g., Gaussian)",
      "Model parameters can be estimated from data",
      "Model complexity can be adjusted based on data",
      "Non-linear relationships can be modeled using transformations"
    ],
    "answer": 2,
    "answer_text": "Model complexity can be adjusted based on data",
    "explanation": "Parametric methods have a fixed number of parameters determined by the assumed model form. Adjusting complexity based on data is a non-parametric characteristic."
  },
  {
    "id": 308,
    "category": "AI & Data Science",
    "question": "PCA achieves dimensionality reduction by finding:",
    "options": [
      "Data points with the highest variance",
      "The optimal hyperplane for classification",
      "Directions of maximum data spread (principal components)",
      "Features with the strongest correlations"
    ],
    "answer": 2,
    "answer_text": "Directions of maximum data spread (principal components)",
    "explanation": "PCA finds orthogonal directions (principal components) along which the data has maximum variance, projecting data onto these directions for dimensionality reduction."
  },
  {
    "id": 309,
    "category": "AI & Data Science",
    "question": "K-means clustering assigns data points to clusters based on their _____ to cluster centroids.",
    "options": [
      "Distance",
      "Similarity",
      "Correlation",
      "Dependence"
    ],
    "answer": 0,
    "answer_text": "Distance",
    "explanation": "K-means assigns each point to the cluster whose centroid is nearest, using Euclidean distance as the metric."
  },
  {
    "id": 310,
    "category": "AI & Data Science",
    "question": "KNN (K-Nearest Neighbors) is nonparametric because it:",
    "options": [
      "Makes strong assumptions about data distribution",
      "Relies on a fixed set of model parameters",
      "Learns directly from training data without predefined assumptions",
      "Requires significant computational resources for training"
    ],
    "answer": 2,
    "answer_text": "Learns directly from training data without predefined assumptions",
    "explanation": "KNN makes no assumptions about the underlying data distribution and stores all training data to make predictions \u2014 the definition of nonparametric."
  }
]

export const examQuestions = raw.map(item => ({
  id: item.id,
  category: item.category,
  q: item.question || item.q,
  o: item.options || item.o,
  a: (item.answer !== undefined && item.answer !== null) ? item.answer : item.a,
  e: item.explanation || item.e,
  raw: item
}));