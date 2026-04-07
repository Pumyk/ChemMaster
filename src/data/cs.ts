import { Topic } from './questions';

export const csTopics: Topic[] = [
  {
    id: 'cs-111-concepts',
    title: 'Computer Concepts',
    questions: [
      {
        id: 4001,
        text: "Which component of the Von Neumann architecture is responsible for holding the instruction currently being executed?",
        options: ["Program Counter", "Instruction Register", "Memory Address Register", "Accumulator"],
        correctAnswer: 1,
        explanation: "The Instruction Register (IR) holds the instruction that is currently being executed after it is fetched from memory."
      },
      {
        id: 4002,
        text: "In the context of computer classification, what primarily distinguishes a Supercomputer from a Mainframe?",
        options: ["Physical size", "Storage capacity", "Processing speed for a single complex task vs. throughput for many concurrent tasks", "The operating system used"],
        correctAnswer: 2,
        explanation: "Supercomputers focus on high processing speed for a single, complex problem (parallelism), while Mainframes focus on high throughput for massive amounts of I/O and concurrent transactions."
      },
      {
        id: 4003,
        text: "Which of the following best describes the 'stored-program concept'?",
        options: ["Data is stored in binary format", "Instructions and data are stored in the same memory unit", "Programs are stored on hard drives", "The CPU stores instructions in cache"],
        correctAnswer: 1,
        explanation: "The stored-program concept (Von Neumann architecture) implies that program instructions and data are stored in the same read-write memory."
      },
      {
        id: 4004,
        text: "What is the term for the number of bits that a CPU can process in a single cycle?",
        options: ["Clock speed", "Word size", "Bandwidth", "Latency"],
        correctAnswer: 1,
        explanation: "Word size refers to the number of bits a CPU can process effectively as a unit (e.g., 32-bit or 64-bit)."
      },
      {
        id: 4005,
        text: "Which law states that the number of transistors on a microchip doubles about every two years?",
        options: ["Amdahl's Law", "Moore's Law", "Metcalfe's Law", "Gustafson's Law"],
        correctAnswer: 1,
        explanation: "Moore's Law is the observation that the number of transistors in a dense integrated circuit doubles about every two years."
      }
    ]
  },
  {
    id: 'cs-111-history',
    title: 'Computer History',
    questions: [
      {
        id: 4101,
        text: "The ENIAC was programmed using which method?",
        options: ["Punch cards", "Assembly language", "Plugboards and switches", "Magnetic tape"],
        correctAnswer: 2,
        explanation: "The ENIAC was originally programmed by physically plugging cables into sockets and flipping switches."
      },
      {
        id: 4102,
        text: "Which technology characterized the Third Generation of computers?",
        options: ["Vacuum Tubes", "Transistors", "Integrated Circuits (IC)", "Microprocessors"],
        correctAnswer: 2,
        explanation: "The Third Generation (1964-1971) was characterized by the development and use of Integrated Circuits (ICs)."
      },
      {
        id: 4103,
        text: "Who developed the concept of the 'Universal Turing Machine', a theoretical model for a general-purpose computer?",
        options: ["John von Neumann", "Alan Turing", "Claude Shannon", "George Boole"],
        correctAnswer: 1,
        explanation: "Alan Turing described the Universal Turing Machine in 1936, providing the theoretical foundation for modern computing."
      },
      {
        id: 4104,
        text: "The first commercially successful minicomputer, the PDP-8, was introduced by which company?",
        options: ["IBM", "DEC (Digital Equipment Corporation)", "Apple", "Hewlett-Packard"],
        correctAnswer: 1,
        explanation: "DEC introduced the PDP-8 in 1965, which is considered the first commercially successful minicomputer."
      },
      {
        id: 4105,
        text: "What was the primary contribution of Herman Hollerith to data processing?",
        options: ["The first compiler", "The punch card tabulating machine", "The transistor", "The mouse"],
        correctAnswer: 1,
        explanation: "Herman Hollerith developed the punch card tabulating machine for the 1890 US Census, which later led to the founding of IBM."
      }
    ]
  },
  {
    id: 'cs-111-components',
    title: 'Components of the Computer',
    questions: [
      {
        id: 4201,
        text: "Which type of memory is used for the CPU Cache due to its high speed?",
        options: ["DRAM (Dynamic RAM)", "SRAM (Static RAM)", "Flash Memory", "ROM"],
        correctAnswer: 1,
        explanation: "SRAM is faster and more expensive than DRAM, making it ideal for CPU caches (L1, L2, L3)."
      },
      {
        id: 4202,
        text: "What is the function of the System Clock in a computer?",
        options: ["To keep the current time and date", "To synchronize the operations of all computer components", "To measure the execution time of programs", "To schedule tasks for the OS"],
        correctAnswer: 1,
        explanation: "The System Clock generates pulses that synchronize the timing of all operations within the computer."
      },
      {
        id: 4203,
        text: "Which bus is responsible for transferring the physical address of the memory location that the CPU wants to access?",
        options: ["Data Bus", "Control Bus", "Address Bus", "System Bus"],
        correctAnswer: 2,
        explanation: "The Address Bus carries the address of the memory location to be read from or written to."
      },
      {
        id: 4204,
        text: "The 'Northbridge' in a chipset architecture typically connects the CPU to which components?",
        options: ["High-speed components like RAM and the Graphics Card", "Low-speed peripherals like USB and Audio", "The BIOS and CMOS", "The Hard Drive and Optical Drive"],
        correctAnswer: 0,
        explanation: "The Northbridge (Memory Controller Hub) connects the CPU to high-speed components like main memory (RAM) and the graphics controller."
      },
      {
        id: 4205,
        text: "What is the difference between CISC and RISC architectures?",
        options: ["CISC uses fewer instructions than RISC", "RISC instructions are complex and take multiple cycles", "CISC has a larger set of complex instructions, while RISC has a smaller set of simple instructions", "There is no difference"],
        correctAnswer: 2,
        explanation: "CISC (Complex Instruction Set Computing) emphasizes doing more with each instruction, while RISC (Reduced Instruction Set Computing) emphasizes simple instructions that can be executed in one clock cycle."
      }
    ]
  },
  {
    id: 'cs-111-info-rep',
    title: 'Information Representation and Number Systems',
    questions: [
      {
        id: 4301,
        text: "In Two's Complement representation, what is the value of the 8-bit binary number 11111111?",
        options: ["255", "127", "-1", "-128"],
        correctAnswer: 2,
        explanation: "In Two's Complement, a sequence of all 1s represents -1."
      },
      {
        id: 4302,
        text: "Which encoding standard was designed to support characters from all the world's writing systems?",
        options: ["ASCII", "EBCDIC", "Unicode", "ANSI"],
        correctAnswer: 2,
        explanation: "Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems."
      },
      {
        id: 4303,
        text: "What is the result of the bitwise XOR operation on 1010 and 1100?",
        options: ["1110", "1000", "0110", "0010"],
        correctAnswer: 2,
        explanation: "XOR results in 1 if the bits are different. 1^1=0, 0^1=1, 1^0=1, 0^0=0. So 1010 XOR 1100 = 0110."
      },
      {
        id: 4304,
        text: "How are floating-point numbers typically represented in modern computers?",
        options: ["Fixed-point notation", "IEEE 754 Standard", "BCD (Binary Coded Decimal)", "Excess-3 Code"],
        correctAnswer: 1,
        explanation: "The IEEE 754 standard is the most widely used representation for floating-point numbers (real numbers) in computers."
      },
      {
        id: 4305,
        text: "Convert the Hexadecimal number '1A' to Octal.",
        options: ["32", "26", "30", "24"],
        correctAnswer: 0,
        explanation: "Hex 1A = Decimal 26. Decimal 26 in Octal: 26/8 = 3 rem 2. So, 32."
      }
    ]
  },
  {
    id: 'cs-111-networks',
    title: 'Introduction to Computer Networks',
    questions: [
      {
        id: 4401,
        text: "Which layer of the OSI model is responsible for logical addressing and routing?",
        options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
        correctAnswer: 1,
        explanation: "The Network Layer (Layer 3) handles logical addressing (IP addresses) and routing packets across networks."
      },
      {
        id: 4402,
        text: "What is the primary difference between TCP and UDP?",
        options: ["TCP is connectionless, UDP is connection-oriented", "TCP provides reliable, ordered delivery; UDP is unreliable and connectionless", "UDP is slower than TCP", "TCP is used for streaming, UDP for email"],
        correctAnswer: 1,
        explanation: "TCP guarantees delivery and order (connection-oriented), while UDP sends packets without verifying receipt (connectionless), making it faster but less reliable."
      },
      {
        id: 4403,
        text: "Which topology connects all nodes to a central device?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        correctAnswer: 2,
        explanation: "In a Star topology, all nodes are individually connected to a central connection point, like a hub or switch."
      },
      {
        id: 4404,
        text: "What is the purpose of a Subnet Mask?",
        options: ["To hide the IP address", "To distinguish the network portion from the host portion of an IP address", "To encrypt data packets", "To assign MAC addresses"],
        correctAnswer: 1,
        explanation: "A Subnet Mask is used to divide an IP address into two parts: the network address and the host address."
      },
      {
        id: 4405,
        text: "Which protocol is used to automatically assign IP addresses to devices on a network?",
        options: ["DNS", "FTP", "DHCP", "SMTP"],
        correctAnswer: 2,
        explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices."
      }
    ]
  },
  {
    id: 'cs-111-programming',
    title: 'Programming Languages and Programming Process',
    questions: [
      {
        id: 4501,
        text: "Which phase of compilation checks for grammatical errors in the code?",
        options: ["Lexical Analysis", "Syntax Analysis (Parsing)", "Semantic Analysis", "Code Generation"],
        correctAnswer: 1,
        explanation: "Syntax Analysis (or Parsing) checks the source code against the grammatical rules (syntax) of the programming language."
      },
      {
        id: 4502,
        text: "What distinguishes a 'Declarative' programming language from an 'Imperative' one?",
        options: ["Declarative specifies HOW to do it; Imperative specifies WHAT to do", "Declarative specifies WHAT result is desired; Imperative specifies HOW to achieve it", "Declarative is always faster", "Imperative languages cannot use variables"],
        correctAnswer: 1,
        explanation: "Declarative languages (like SQL) focus on the desired result, while Imperative languages (like C) focus on the steps/commands to achieve that result."
      },
      {
        id: 4503,
        text: "In the context of algorithms, what does Big O notation describe?",
        options: ["The exact time an algorithm takes to run", "The space required by the algorithm", "The worst-case scenario for time or space complexity as input size grows", "The number of lines of code"],
        correctAnswer: 2,
        explanation: "Big O notation describes the upper bound of the complexity, representing the worst-case scenario for performance relative to input size."
      },
      {
        id: 4504,
        text: "What is 'Linker' in the context of the programming process?",
        options: ["A tool that combines object files into a single executable", "A tool that translates code to machine language", "A tool that finds errors", "A library of functions"],
        correctAnswer: 0,
        explanation: "A Linker combines one or more object files generated by a compiler into a single executable program."
      },
      {
        id: 4505,
        text: "Which programming paradigm treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data?",
        options: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Event-Driven Programming"],
        correctAnswer: 1,
        explanation: "Functional Programming emphasizes the application of functions and avoids changing state and mutable data."
      }
    ]
  },
  {
    id: 'cs-111-applications',
    title: 'Applications of Computer',
    questions: [
      {
        id: 4601,
        text: "What is an 'Expert System' in the field of Artificial Intelligence?",
        options: ["A system that learns from data without supervision", "A computer system that emulates the decision-making ability of a human expert", "A database of all human knowledge", "A robot that can perform surgery"],
        correctAnswer: 1,
        explanation: "An Expert System is a computer system designed to emulate the decision-making ability of a human expert, often using a knowledge base and inference engine."
      },
      {
        id: 4602,
        text: "In the context of business, what does ERP stand for?",
        options: ["Enterprise Resource Planning", "Electronic Resource Processing", "Efficient Resource Protocol", "Enterprise Revenue Program"],
        correctAnswer: 0,
        explanation: "ERP (Enterprise Resource Planning) software manages and integrates a company's financials, supply chain, operations, commerce, reporting, manufacturing, and human resource activities."
      },
      {
        id: 4603,
        text: "What is the primary function of a GIS (Geographic Information System)?",
        options: ["To forecast weather", "To capture, store, manipulate, analyze, manage, and present spatial or geographic data", "To track global stock markets", "To simulate flight paths"],
        correctAnswer: 1,
        explanation: "GIS is a system designed to capture, store, manipulate, analyze, manage, and present all types of geographical data."
      },
      {
        id: 4604,
        text: "Which technology is primarily associated with 'Cryptocurrency'?",
        options: ["Cloud Computing", "Blockchain", "Big Data", "Virtual Reality"],
        correctAnswer: 1,
        explanation: "Blockchain is the underlying distributed ledger technology that enables cryptocurrencies like Bitcoin."
      },
      {
        id: 4605,
        text: "What is 'Telemedicine'?",
        options: ["Using robots for surgery", "The remote diagnosis and treatment of patients by means of telecommunications technology", "A database of medical records", "Medicine for telepaths"],
        correctAnswer: 1,
        explanation: "Telemedicine allows health care professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology."
      }
    ]
  }
];
