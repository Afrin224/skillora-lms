// coursesCurriculumData.js - Comprehensive curriculum & syllabus for all 12 courses

export const coursesCurriculumData = {
  'artificial-intelligence': {
    id: 'artificial-intelligence',
    courseName: 'Artificial Intelligence & Neural Networks',
    tagline: 'Master Deep Learning, CNNs, RNNs, Transformers, LLMs, and Generative AI from Scratch to Production',
    level: 'Intermediate to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Verified Professional Certificate',
    totalHours: '28 Hours',
    totalChapters: 8,
    totalLectures: 40,
    overview: 'Dive deep into the world of Artificial Intelligence and modern Deep Learning. This cutting-edge program takes you from fundamental mathematical concepts of perceptrons and backpropagation to state-of-the-art transformer architectures, generative adversarial networks (GANs), and Large Language Model fine-tuning. You will build, train, and deploy real-world AI models using PyTorch, TensorFlow, and Hugging Face.',
    whatYouWillLearn: [
      'Understand the mathematical foundations of Neural Networks, gradient descent, and backpropagation',
      'Build and train Deep Neural Networks (DNNs) with PyTorch and TensorFlow 2',
      'Construct Convolutional Neural Networks (CNNs) for computer vision and object detection',
      'Implement Recurrent Neural Networks (RNNs) and LSTMs for sequential data and time-series',
      'Master Transformer models, Self-Attention mechanisms, and BERT/GPT architectures',
      'Fine-tune Large Language Models (LLMs) with LoRA, QLoRA, and Hugging Face Transformers',
      'Build generative applications with Stable Diffusion and LangChain prompt orchestration',
      'Deploy production-ready AI models with FastAPI, Docker, and ONNX Runtime'
    ],
    requirements: [
      'Basic understanding of Python programming (variables, loops, functions)',
      'High school level algebra and basic calculus concepts (derivatives and matrices)',
      'A computer with at least 8GB RAM (GPU access via Google Colab / Kaggle provided free)'
    ],
    targetAudience: [
      'Software developers looking to transition into Machine Learning & AI Engineering',
      'Data analysts wanting to build predictive deep learning architectures',
      'Computer Science students and tech enthusiasts fascinated by generative AI and neural systems'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Introduction to Artificial Intelligence & Neural Networks',
        lectureCount: '4 lectures',
        topics: [
          { id: 'ai-1-1', title: '1.1 Welcome & AI Industry Landscape Overview', duration: '14:20', type: 'video', isPreview: true },
          { id: 'ai-1-2', title: '1.2 Setting Up PyTorch, CUDA, and Google Colab Environment', duration: '22:15', type: 'video', isPreview: true },
          { id: 'ai-1-3', title: '1.3 Linear Algebra & Calculus Essentials for Deep Learning', duration: '31:40', type: 'video', isPreview: false },
          { id: 'ai-1-4', title: '1.4 Chapter 1 Knowledge Check & Quiz', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Biological & Artificial Perceptrons: The Foundations',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ai-2-1', title: '2.1 The Single Layer Perceptron and Activation Functions (ReLU, Sigmoid)', duration: '25:10', type: 'video', isPreview: false },
          { id: 'ai-2-2', title: '2.2 Cost Functions: Mean Squared Error vs. Cross-Entropy', duration: '18:45', type: 'video', isPreview: false },
          { id: 'ai-2-3', title: '2.3 Forward Propagation: Matrix Operations in PyTorch', duration: '27:30', type: 'video', isPreview: false },
          { id: 'ai-2-4', title: '2.4 The Chain Rule and Backpropagation Deconstructed', duration: '34:15', type: 'video', isPreview: false },
          { id: 'ai-2-5', title: '2.5 Coding a Neural Network from Scratch in Pure Python & NumPy', duration: '42:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Optimizers, Regularization & Training Dynamics',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ai-3-1', title: '3.1 Stochastic Gradient Descent, Momentum & Adam Optimizer', duration: '20:15', type: 'video', isPreview: false },
          { id: 'ai-3-2', title: '3.2 Preventing Overfitting: Dropout, L1/L2 Weight Decay', duration: '24:50', type: 'video', isPreview: false },
          { id: 'ai-3-3', title: '3.3 Batch Normalization and Layer Normalization', duration: '19:40', type: 'video', isPreview: false },
          { id: 'ai-3-4', title: '3.4 Learning Rate Schedulers & Hyperparameter Tuning', duration: '26:10', type: 'video', isPreview: false },
          { id: 'ai-3-5', title: '3.5 Hands-on Lab: Tuning a Multi-Layer Perceptron on Tabular Data', duration: '35:20', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Computer Vision with Convolutional Neural Networks (CNNs)',
        lectureCount: '6 lectures',
        topics: [
          { id: 'ai-4-1', title: '4.1 Convolution Operation, Kernels, Stride and Padding', duration: '28:10', type: 'video', isPreview: false },
          { id: 'ai-4-2', title: '4.2 Pooling Layers and Feature Extraction Hierarchies', duration: '17:35', type: 'video', isPreview: false },
          { id: 'ai-4-3', title: '4.3 Classic Architectures: LeNet, AlexNet, VGG and ResNet-50', duration: '38:40', type: 'video', isPreview: false },
          { id: 'ai-4-4', title: '4.4 Transfer Learning: Fine-tuning Pre-trained Vision Models', duration: '32:15', type: 'video', isPreview: false },
          { id: 'ai-4-5', title: '4.5 Object Detection Concepts: YOLOv8 and bounding boxes', duration: '44:00', type: 'video', isPreview: false },
          { id: 'ai-4-6', title: '4.6 Project: End-to-End Medical Image Classification Pipeline', duration: '50:30', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Sequential Data, NLP & Recurrent Neural Networks',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ai-5-1', title: '5.1 Processing Sequences and Text Tokenization', duration: '21:00', type: 'video', isPreview: false },
          { id: 'ai-5-2', title: '5.2 Word Embeddings: Word2Vec, GloVe and Embedding Layers', duration: '26:45', type: 'video', isPreview: false },
          { id: 'ai-5-3', title: '5.3 Recurrent Neural Networks (RNN) and Vanishing Gradients', duration: '29:30', type: 'video', isPreview: false },
          { id: 'ai-5-4', title: '5.4 Long Short-Term Memory (LSTM) and GRU Architectures', duration: '33:10', type: 'video', isPreview: false },
          { id: 'ai-5-5', title: '5.5 Sentiment Analysis & Text Classification Hands-on Project', duration: '41:20', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Transformers, Self-Attention & LLM Foundations',
        lectureCount: '6 lectures',
        topics: [
          { id: 'ai-6-1', title: '6.1 The Landmark Paper: Attention Is All You Need', duration: '36:15', type: 'video', isPreview: false },
          { id: 'ai-6-2', title: '6.2 Scaled Dot-Product & Multi-Head Self-Attention in PyTorch', duration: '42:50', type: 'video', isPreview: false },
          { id: 'ai-6-3', title: '6.3 Positional Encodings and Transformer Encoder/Decoder Stacks', duration: '35:20', type: 'video', isPreview: false },
          { id: 'ai-6-4', title: '6.4 Hugging Face Transformers Library Mastery', duration: '28:40', type: 'video', isPreview: false },
          { id: 'ai-6-5', title: '6.5 Fine-Tuning LLMs with LoRA, QLoRA, and PEFT', duration: '48:15', type: 'video', isPreview: false },
          { id: 'ai-6-6', title: '6.6 Building Retrieval Augmented Generation (RAG) with Vector Databases', duration: '55:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - Generative AI, GANs & Diffusion Models',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ai-7-1', title: '7.1 Autoencoders and Variational Autoencoders (VAEs)', duration: '27:30', type: 'video', isPreview: false },
          { id: 'ai-7-2', title: '7.2 Generative Adversarial Networks (GANs): Generator vs. Discriminator', duration: '39:10', type: 'video', isPreview: false },
          { id: 'ai-7-3', title: '7.3 Denoising Diffusion Probabilistic Models (DDPM) Explained', duration: '45:00', type: 'video', isPreview: false },
          { id: 'ai-7-4', title: '7.4 Controlling Latent Space with Stable Diffusion & ControlNet', duration: '38:20', type: 'video', isPreview: false },
          { id: 'ai-7-5', title: '7.5 Project: Custom Generative Image Synthesis App', duration: '46:40', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 8,
        title: 'Chapter 8 - Production Deployment, MLOps & Capstone Defense',
        lectureCount: '4 lectures',
        topics: [
          { id: 'ai-8-1', title: '8.1 Model Quantization, Pruning, and ONNX Runtime Export', duration: '32:00', type: 'video', isPreview: false },
          { id: 'ai-8-2', title: '8.2 Packaging AI Models with FastAPI & Docker Containers', duration: '37:15', type: 'video', isPreview: false },
          { id: 'ai-8-3', title: '8.3 Cloud Deployment on AWS / GCP with Auto-scaling', duration: '44:20', type: 'video', isPreview: false },
          { id: 'ai-8-4', title: '8.4 Final Capstone Project Guidelines, Review & Certification', duration: '20:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'database-management': {
    id: 'database-management',
    courseName: 'Database Management Systems (SQL & MongoDB)',
    tagline: 'Complete Relational & NoSQL Database Engineering from DDL/DML to High-Performance Indexing and Sharding',
    level: 'Beginner to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Industry Recognized Database Specialist',
    totalHours: '18 Hours',
    totalChapters: 9,
    totalLectures: 99,
    overview: 'Master modern database architecture, relational database management with PostgreSQL and MySQL, and non-relational document databases with MongoDB. This course follows a comprehensive syllabus covering DDL, DML, DQL, normalization, indexing, transaction ACID properties, complex joins, stored procedures, and distributed scaling.',
    whatYouWillLearn: [
      'Design robust Relational Database Schemas and Entity-Relationship Diagrams (ERD)',
      'Execute high-level DDL, DML, and complex DQL queries with window functions',
      'Optimize database performance using B-Tree, Hash, and GIN indexes',
      'Implement ACID transactions with isolation levels to prevent race conditions',
      'Build NoSQL document stores, aggregation pipelines, and sharded clusters in MongoDB',
      'Connect databases to modern web applications with connection pooling and ORMs'
    ],
    requirements: [
      'No prior database experience required',
      'Basic computer literacy (Windows, Mac, or Linux)'
    ],
    targetAudience: [
      'Aspiring Backend Engineers and Full-Stack Developers',
      'Data Analysts who want to extract and manipulate large-scale data with SQL',
      'System Administrators looking to manage database operations and backups'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Course Introduction',
        lectureCount: '1 lecture',
        topics: [
          { id: 'db-1-1', title: '1.1 Course Orientation & Database Management Overview', duration: '12:00', type: 'video', isPreview: true }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Introduction to Software Applications',
        lectureCount: '9 lectures',
        topics: [
          { id: 'db-2-1', title: '2.1 What is a Database Management System (DBMS)?', duration: '14:20', type: 'video', isPreview: true },
          { id: 'db-2-2', title: '2.2 File System vs. Database Management System', duration: '16:45', type: 'video', isPreview: false },
          { id: 'db-2-3', title: '2.3 Client-Server Database Architecture', duration: '18:10', type: 'video', isPreview: false },
          { id: 'db-2-4', title: '2.4 RDBMS vs NoSQL: Making the Right Architectural Choice', duration: '22:30', type: 'video', isPreview: false },
          { id: 'db-2-5', title: '2.5 Installing PostgreSQL and pgAdmin 4', duration: '19:15', type: 'video', isPreview: false },
          { id: 'db-2-6', title: '2.6 Installing MySQL Server and Workbench', duration: '17:40', type: 'video', isPreview: false },
          { id: 'db-2-7', title: '2.7 Installing MongoDB Community Edition & Compass', duration: '15:20', type: 'video', isPreview: false },
          { id: 'db-2-8', title: '2.8 Command-Line Interfaces (psql, mysql, mongosh)', duration: '20:10', type: 'video', isPreview: false },
          { id: 'db-2-9', title: '2.9 Chapter 2 Summary & Conceptual Quiz', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Database Tables, Columns and Rows',
        lectureCount: '5 lectures',
        topics: [
          { id: 'db-3-1', title: '3.1 Tables, Attributes, Tuples, and Relations Defined', duration: '16:00', type: 'video', isPreview: false },
          { id: 'db-3-2', title: '3.2 Data Types: Integers, Decimals, Varchar, Boolean, and Timestamps', duration: '24:15', type: 'video', isPreview: false },
          { id: 'db-3-3', title: '3.3 Primary Keys, Candidate Keys, and Composite Keys', duration: '21:30', type: 'video', isPreview: false },
          { id: 'db-3-4', title: '3.4 Foreign Keys and Referential Integrity Constraints', duration: '27:40', type: 'video', isPreview: false },
          { id: 'db-3-5', title: '3.5 Practical Lab: Designing an E-Commerce Schema', duration: '35:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Setup Sample Database',
        lectureCount: '2 lectures',
        topics: [
          { id: 'db-4-1', title: '4.1 Importing the ClassicModels & DVD Rental Datasets', duration: '18:25', type: 'video', isPreview: false },
          { id: 'db-4-2', title: '4.2 Verifying Database Connectivity and Inspecting Tables', duration: '14:50', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - DDL (Data Definition Language)',
        lectureCount: '12 lectures',
        topics: [
          { id: 'db-5-1', title: '5.1 CREATE DATABASE and CREATE SCHEMA Statements', duration: '15:30', type: 'video', isPreview: false },
          { id: 'db-5-2', title: '5.2 CREATE TABLE Syntax & Column Definitions', duration: '21:10', type: 'video', isPreview: false },
          { id: 'db-5-3', title: '5.3 NOT NULL, UNIQUE, and CHECK Constraints', duration: '19:45', type: 'video', isPreview: false },
          { id: 'db-5-4', title: '5.4 DEFAULT Values and AUTO_INCREMENT / SERIAL Keys', duration: '16:20', type: 'video', isPreview: false },
          { id: 'db-5-5', title: '5.5 ALTER TABLE: Adding and Modifying Columns', duration: '18:50', type: 'video', isPreview: false },
          { id: 'db-5-6', title: '5.6 ALTER TABLE: Adding and Dropping Constraints', duration: '20:15', type: 'video', isPreview: false },
          { id: 'db-5-7', title: '5.7 DROP TABLE vs. TRUNCATE TABLE Differences', duration: '14:30', type: 'video', isPreview: false },
          { id: 'db-5-8', title: '5.8 CASCADE vs. RESTRICT Behaviors on Delete', duration: '22:10', type: 'video', isPreview: false },
          { id: 'db-5-9', title: '5.9 Creating and Managing Database Views', duration: '25:00', type: 'video', isPreview: false },
          { id: 'db-5-10', title: '5.10 Temporary Tables and Partitioning Concepts', duration: '28:40', type: 'video', isPreview: false },
          { id: 'db-5-11', title: '5.11 DDL Script Automation and Migrations', duration: '24:20', type: 'video', isPreview: false },
          { id: 'db-5-12', title: '5.12 DDL Hands-On Practical Challenge', duration: '30:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - DML (Data Manipulation Language)',
        lectureCount: '8 lectures',
        topics: [
          { id: 'db-6-1', title: '6.1 INSERT INTO: Single and Multi-Row Inserts', duration: '16:40', type: 'video', isPreview: false },
          { id: 'db-6-2', title: '6.2 INSERT ON CONFLICT DO UPDATE (UPSERT)', duration: '21:15', type: 'video', isPreview: false },
          { id: 'db-6-3', title: '6.3 UPDATE Statement and Safe WHERE Clauses', duration: '19:00', type: 'video', isPreview: false },
          { id: 'db-6-4', title: '6.4 Updating Columns from Subqueries', duration: '23:45', type: 'video', isPreview: false },
          { id: 'db-6-5', title: '6.5 DELETE FROM and Preventing Accidental Data Deletion', duration: '15:20', type: 'video', isPreview: false },
          { id: 'db-6-6', title: '6.6 Soft Deletes vs. Hard Deletes Architectural Pattern', duration: '22:10', type: 'video', isPreview: false },
          { id: 'db-6-7', title: '6.7 DML with RETURNING Clauses', duration: '18:30', type: 'video', isPreview: false },
          { id: 'db-6-8', title: '6.8 DML Practical Exercises and Assignments', duration: '28:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - DQL (Data Query Language)',
        lectureCount: '44 lectures',
        topics: [
          { id: 'db-7-1', title: '7.1 SELECT Syntax, Aliases, and Distinct Values', duration: '18:10', type: 'video', isPreview: false },
          { id: 'db-7-2', title: '7.2 WHERE Filtering, Comparison & Logical Operators', duration: '24:30', type: 'video', isPreview: false },
          { id: 'db-7-3', title: '7.3 Pattern Matching with LIKE, ILIKE, and Regular Expressions', duration: '20:15', type: 'video', isPreview: false },
          { id: 'db-7-4', title: '7.4 ORDER BY, Multi-Column Sorting, and NULL Handling', duration: '17:40', type: 'video', isPreview: false },
          { id: 'db-7-5', title: '7.5 LIMIT and OFFSET Pagination Performance Pitfalls', duration: '21:00', type: 'video', isPreview: false },
          { id: 'db-7-6', title: '7.6 Aggregate Functions: COUNT, SUM, AVG, MIN, MAX', duration: '26:50', type: 'video', isPreview: false },
          { id: 'db-7-7', title: '7.7 GROUP BY and Filtering Groups with HAVING', duration: '30:15', type: 'video', isPreview: false },
          { id: 'db-7-8', title: '7.8 INNER JOIN Explained with Venn Diagrams', duration: '25:20', type: 'video', isPreview: false },
          { id: 'db-7-9', title: '7.9 LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN', duration: '32:45', type: 'video', isPreview: false },
          { id: 'db-7-10', title: '7.10 CROSS JOIN, Self-Joins, and Hierarchical Queries', duration: '28:10', type: 'video', isPreview: false },
          { id: 'db-7-11', title: '7.11 Subqueries: Scalar, Column, and Table Subqueries', duration: '31:20', type: 'video', isPreview: false },
          { id: 'db-7-12', title: '7.12 Correlated Subqueries and EXISTS / NOT EXISTS', duration: '34:00', type: 'video', isPreview: false },
          { id: 'db-7-13', title: '7.13 Common Table Expressions (CTEs) & WITH Clauses', duration: '29:40', type: 'video', isPreview: false },
          { id: 'db-7-14', title: '7.14 Recursive CTEs for Organization Charts and Trees', duration: '38:15', type: 'video', isPreview: false },
          { id: 'db-7-15', title: '7.15 Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK()', duration: '41:30', type: 'video', isPreview: false },
          { id: 'db-7-16', title: '7.16 Running Totals and Moving Averages with OVER(PARTITION BY)', duration: '36:45', type: 'video', isPreview: false },
          { id: 'db-7-17', title: '7.17 LEAD, LAG, FIRST_VALUE, and LAST_VALUE Analytic Queries', duration: '35:20', type: 'video', isPreview: false },
          { id: 'db-7-18', title: '7.18 27 More Advanced Real-World Business Query Challenges', duration: '45:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 8,
        title: 'Chapter 8 - RDBMS Concepts & Database Normalization',
        lectureCount: '15 lectures',
        topics: [
          { id: 'db-8-1', title: '8.1 Database Anomalies: Insertion, Update, and Deletion', duration: '19:10', type: 'video', isPreview: false },
          { id: 'db-8-2', title: '8.2 First Normal Form (1NF) Rules and Implementation', duration: '22:30', type: 'video', isPreview: false },
          { id: 'db-8-3', title: '8.3 Second Normal Form (2NF) & Full Functional Dependency', duration: '24:15', type: 'video', isPreview: false },
          { id: 'db-8-4', title: '8.4 Third Normal Form (3NF) & Transitive Dependency Removal', duration: '28:40', type: 'video', isPreview: false },
          { id: 'db-8-5', title: '8.5 Boyce-Codd Normal Form (BCNF) Advanced Examples', duration: '26:20', type: 'video', isPreview: false },
          { id: 'db-8-6', title: '8.6 Denormalization Strategies for High-Throughput Read Systems', duration: '25:00', type: 'video', isPreview: false },
          { id: 'db-8-7', title: '8.7 ACID Properties: Atomicity, Consistency, Isolation, Durability', duration: '33:15', type: 'video', isPreview: false },
          { id: 'db-8-8', title: '8.8 Transaction Isolation Levels (Read Uncommitted to Serializable)', duration: '37:40', type: 'video', isPreview: false },
          { id: 'db-8-9', title: '8.9 Concurrency Control, Deadlocks, and Locking Mechanisms', duration: '32:10', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 9,
        title: 'Chapter 9 - Advanced Topics: Indexing, MongoDB & Scaling',
        lectureCount: '6 lectures',
        topics: [
          { id: 'db-9-1', title: '9.1 B-Tree vs. Hash Indexing: How DBs Find Data in O(log N)', duration: '31:20', type: 'video', isPreview: false },
          { id: 'db-9-2', title: '9.2 Query Planning & Analyzing Execution with EXPLAIN ANALYZE', duration: '36:45', type: 'video', isPreview: false },
          { id: 'db-9-3', title: '9.3 MongoDB CRUD Operations and Aggregation Pipeline Mastery', duration: '44:10', type: 'video', isPreview: false },
          { id: 'db-9-4', title: '9.4 Database Replication (Primary-Replica) and High Availability', duration: '38:00', type: 'video', isPreview: false },
          { id: 'db-9-5', title: '9.5 Horizontal Sharding & Distributed Database Partitions', duration: '41:15', type: 'video', isPreview: false },
          { id: 'db-9-6', title: '9.6 Final Project: Designing & Deploying Enterprise Database Infrastructure', duration: '52:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'web-development': {
    id: 'web-development',
    courseName: 'Full-Stack Web Development: MERN Bootcamp',
    tagline: 'Master React 19, Node.js, Express, MongoDB, Next.js, and Modern Full-Stack Production Engineering',
    level: 'Beginner to Professional',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Full-Stack Software Engineer',
    totalHours: '34 Hours',
    totalChapters: 8,
    totalLectures: 45,
    overview: 'Become an industry-ready full-stack software engineer by learning the modern MERN stack. From front-end React 19 architecture, modern hooks, state management, and responsive layouts to robust Node.js and Express RESTful APIs, JWT authentication, MongoDB schema design, and production deployment on AWS and Vercel.',
    whatYouWillLearn: [
      'Build rich, accessible Single Page Applications (SPAs) with React 19 and modern hooks',
      'Create high-performance REST and GraphQL APIs with Node.js and Express',
      'Model scalable document schemas and aggregations with MongoDB and Mongoose',
      'Implement secure JWT token authentication with HttpOnly cookies and role-based access',
      'Deploy full-stack applications with CI/CD pipelines, Docker, and Cloud hosting',
      'Optimize front-end and backend performance with caching and lazy loading'
    ],
    requirements: [
      'Basic knowledge of HTML and CSS is helpful but not mandatory',
      'A computer running Windows, Mac, or Linux'
    ],
    targetAudience: [
      'Beginners wanting to break into software development',
      'Frontend developers wanting to master backend architecture and databases',
      'Junior developers aiming to level up to senior full-stack roles'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Modern JavaScript & Web Architecture Essentials',
        lectureCount: '5 lectures',
        topics: [
          { id: 'mern-1-1', title: '1.1 Modern Web Architecture: Client vs. Server vs. Database', duration: '16:30', type: 'video', isPreview: true },
          { id: 'mern-1-2', title: '1.2 ES6+ Modern JavaScript: Destructuring, Spread, and Modules', duration: '24:15', type: 'video', isPreview: true },
          { id: 'mern-1-3', title: '1.3 Asynchronous JS: Promises, Async/Await, and Event Loop', duration: '32:40', type: 'video', isPreview: false },
          { id: 'mern-1-4', title: '1.4 Git & GitHub Workflow for Professional Teams', duration: '28:10', type: 'video', isPreview: false },
          { id: 'mern-1-5', title: '1.5 Chapter 1 Coding Challenge', duration: '20:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - React 19 Core Fundamentals & Component Architecture',
        lectureCount: '6 lectures',
        topics: [
          { id: 'mern-2-1', title: '2.1 Vite Tooling, JSX Syntax, and Virtual DOM Mechanics', duration: '22:00', type: 'video', isPreview: false },
          { id: 'mern-2-2', title: '2.2 Props, State, and Component Reusability Patterns', duration: '28:30', type: 'video', isPreview: false },
          { id: 'mern-2-3', title: '2.3 useEffect, Data Fetching, and Lifecycle Management', duration: '35:15', type: 'video', isPreview: false },
          { id: 'mern-2-4', title: '2.4 Handling Complex Forms and Custom Validation Hooks', duration: '31:20', type: 'video', isPreview: false },
          { id: 'mern-2-5', title: '2.5 Styling React: CSS Modules, Tailwind CSS, and Styled Components', duration: '29:40', type: 'video', isPreview: false },
          { id: 'mern-2-6', title: '2.6 Project: Interactive Task Management Dashboard', duration: '45:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Advanced React State & Routing',
        lectureCount: '5 lectures',
        topics: [
          { id: 'mern-3-1', title: '3.1 React Router v6: Dynamic Routes, Loaders & Protected Views', duration: '34:10', type: 'video', isPreview: false },
          { id: 'mern-3-2', title: '3.2 Context API & useReducer for Scalable Global State', duration: '38:25', type: 'video', isPreview: false },
          { id: 'mern-3-3', title: '3.3 State Management with Redux Toolkit and Zustand', duration: '42:50', type: 'video', isPreview: false },
          { id: 'mern-3-4', title: '3.4 Performance Optimization: useMemo, useCallback, and React.memo', duration: '30:15', type: 'video', isPreview: false },
          { id: 'mern-3-5', title: '3.5 TanStack React Query for Server State Synchronization', duration: '36:40', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Backend Engineering with Node.js & Express',
        lectureCount: '6 lectures',
        topics: [
          { id: 'mern-4-1', title: '4.1 Node.js Runtime Architecture, Event Loop & V8 Engine', duration: '26:30', type: 'video', isPreview: false },
          { id: 'mern-4-2', title: '4.2 Express.js Routing, Middleware Pipeline, and Request Lifecycle', duration: '32:15', type: 'video', isPreview: false },
          { id: 'mern-4-3', title: '4.3 Error Handling Middleware and Structured Logging', duration: '24:50', type: 'video', isPreview: false },
          { id: 'mern-4-4', title: '4.4 RESTful API Design Standards and Status Codes', duration: '27:00', type: 'video', isPreview: false },
          { id: 'mern-4-5', title: '4.5 Input Validation with Zod & Joi Schemas', duration: '25:30', type: 'video', isPreview: false },
          { id: 'mern-4-6', title: '4.6 File Uploads with Multer and Cloudinary CDN', duration: '33:10', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - MongoDB & Mongoose ODM Masterclass',
        lectureCount: '6 lectures',
        topics: [
          { id: 'mern-5-1', title: '5.1 MongoDB Atlas Setup, Connection Strings & Drivers', duration: '18:20', type: 'video', isPreview: false },
          { id: 'mern-5-2', title: '5.2 Mongoose Schema Definitions, Types, and Virtuals', duration: '28:40', type: 'video', isPreview: false },
          { id: 'mern-5-3', title: '5.3 Embedded Documents vs. Referenced Relationships', duration: '31:15', type: 'video', isPreview: false },
          { id: 'mern-5-4', title: '5.4 Compound Indexing for High-Speed Read Performance', duration: '27:50', type: 'video', isPreview: false },
          { id: 'mern-5-5', title: '5.5 The MongoDB Aggregation Framework for Analytics', duration: '40:30', type: 'video', isPreview: false },
          { id: 'mern-5-6', title: '5.6 Database Transactions and ACID Guarantees in MongoDB', duration: '26:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Authentication, Security & Payments',
        lectureCount: '6 lectures',
        topics: [
          { id: 'mern-6-1', title: '6.1 Password Hashing with Argon2 and bcrypt', duration: '22:15', type: 'video', isPreview: false },
          { id: 'mern-6-2', title: '6.2 JSON Web Tokens (JWT) & Refresh Token Rotation', duration: '37:40', type: 'video', isPreview: false },
          { id: 'mern-6-3', title: '6.3 Securing APIs: CORS, Helmet, Rate Limiting, and XSS Defense', duration: '29:50', type: 'video', isPreview: false },
          { id: 'mern-6-4', title: '6.4 Role-Based Access Control (Admin, Student, Instructor)', duration: '32:10', type: 'video', isPreview: false },
          { id: 'mern-6-5', title: '6.5 Stripe Payment Gateway Integration & Webhooks', duration: '46:00', type: 'video', isPreview: false },
          { id: 'mern-6-6', title: '6.6 Automated Email Notifications with Resend and Nodemailer', duration: '25:30', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - Real-Time Communication with WebSockets',
        lectureCount: '5 lectures',
        topics: [
          { id: 'mern-7-1', title: '7.1 HTTP Polling vs. Server-Sent Events vs. WebSockets', duration: '21:30', type: 'video', isPreview: false },
          { id: 'mern-7-2', title: '7.2 Setting Up Socket.io Server and React Client', duration: '28:15', type: 'video', isPreview: false },
          { id: 'mern-7-3', title: '7.3 Building Real-Time Group Chat Rooms and Private Messages', duration: '44:20', type: 'video', isPreview: false },
          { id: 'mern-7-4', title: '7.4 Real-Time User Online Status & Typing Indicators', duration: '27:10', type: 'video', isPreview: false },
          { id: 'mern-7-5', title: '7.5 Scaling WebSockets with Redis Pub/Sub Adapters', duration: '35:40', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 8,
        title: 'Chapter 8 - Full-Stack Production Deployment & CI/CD',
        lectureCount: '6 lectures',
        topics: [
          { id: 'mern-8-1', title: '8.1 Dockerizing MERN: Multi-Stage Frontend & Backend Containers', duration: '38:00', type: 'video', isPreview: false },
          { id: 'mern-8-2', title: '8.2 Setting Up GitHub Actions CI/CD Pipeline', duration: '32:45', type: 'video', isPreview: false },
          { id: 'mern-8-3', title: '8.3 Deploying Backend on AWS EC2 & DigitalOcean', duration: '41:10', type: 'video', isPreview: false },
          { id: 'mern-8-4', title: '8.4 Deploying Frontend on Vercel with Custom Domains', duration: '24:30', type: 'video', isPreview: false },
          { id: 'mern-8-5', title: '8.5 Performance Monitoring with Sentry & LogRocket', duration: '26:15', type: 'video', isPreview: false },
          { id: 'mern-8-6', title: '8.6 Capstone Project Presentation and Code Review', duration: '30:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'data-science': {
    id: 'data-science',
    courseName: 'Data Science & Machine Learning Masterclass',
    tagline: 'From Statistical Data Analysis & Pandas to Scikit-Learn Machine Learning Models and Predictive Analytics',
    level: 'Beginner to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Data Scientist',
    totalHours: '30 Hours',
    totalChapters: 7,
    totalLectures: 46,
    overview: 'Learn how to extract insights from massive datasets, build predictive models, and drive data-informed decisions. You will master Python data science libraries including NumPy, Pandas, Matplotlib, Seaborn, and Scikit-Learn with hands-on projects ranging from financial churn prediction to real estate price estimation.',
    whatYouWillLearn: [
      'Master data wrangling, cleaning, and transformation using Pandas and NumPy',
      'Perform Exploratory Data Analysis (EDA) and create publication-grade visualizations',
      'Implement supervised learning algorithms: Linear Regression, Logistic Regression, Random Forests',
      'Apply unsupervised learning techniques: K-Means Clustering, PCA, and Hierarchical Clustering',
      'Evaluate model performance using Cross-Validation, ROC-AUC, Precision, and Recall',
      'Deploy predictive ML pipelines as interactive web apps using Streamlit'
    ],
    requirements: [
      'Basic knowledge of mathematics and logic',
      'No previous data science experience required'
    ],
    targetAudience: [
      'Aspiring Data Scientists and Machine Learning Engineers',
      'Business Analysts and Software Engineers wanting to work with AI data'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Python for Data Science & Jupyter Environment',
        lectureCount: '6 lectures',
        topics: [
          { id: 'ds-1-1', title: '1.1 Introduction to the Data Science Workflow', duration: '15:20', type: 'video', isPreview: true },
          { id: 'ds-1-2', title: '1.2 Jupyter Notebooks, Conda Environments, and VS Code Setup', duration: '20:15', type: 'video', isPreview: true },
          { id: 'ds-1-3', title: '1.3 NumPy Arrays, Broadcasting, and Vectorized Operations', duration: '28:40', type: 'video', isPreview: false },
          { id: 'ds-1-4', title: '1.4 Pandas Series and DataFrames: Indexing and Filtering', duration: '32:10', type: 'video', isPreview: false },
          { id: 'ds-1-5', title: '1.5 Handling Missing Values, Outliers, and Inconsistencies', duration: '29:30', type: 'video', isPreview: false },
          { id: 'ds-1-6', title: '1.6 Data Cleaning Lab on Real-World Datasets', duration: '35:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Exploratory Data Analysis & Visualization',
        lectureCount: '7 lectures',
        topics: [
          { id: 'ds-2-1', title: '2.1 Statistical Thinking: Mean, Median, Variance, and Distributions', duration: '24:00', type: 'video', isPreview: false },
          { id: 'ds-2-2', title: '2.2 Matplotlib Essentials: Plots, Subplots, and Layouts', duration: '27:15', type: 'video', isPreview: false },
          { id: 'ds-2-3', title: '2.3 Seaborn: Histograms, Boxplots, and Heatmaps', duration: '30:45', type: 'video', isPreview: false },
          { id: 'ds-2-4', title: '2.4 Correlation Analysis and Pairwise Scatter Plots', duration: '22:30', type: 'video', isPreview: false },
          { id: 'ds-2-5', title: '2.5 Interactive Visualizations with Plotly Express', duration: '26:10', type: 'video', isPreview: false },
          { id: 'ds-2-6', title: '2.6 Project: Deep-Dive EDA into Global Covid/Economic Dataset', duration: '42:00', type: 'video', isPreview: false },
          { id: 'ds-2-7', title: '2.7 Chapter 2 Knowledge Test', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Feature Engineering & Data Preprocessing',
        lectureCount: '6 lectures',
        topics: [
          { id: 'ds-3-1', title: '3.1 Feature Scaling: Standardization vs. Min-Max Normalization', duration: '21:20', type: 'video', isPreview: false },
          { id: 'ds-3-2', title: '3.2 Categorical Encoding: One-Hot, Ordinal, and Target Encoding', duration: '25:40', type: 'video', isPreview: false },
          { id: 'ds-3-3', title: '3.3 Feature Selection Techniques and Mutual Information', duration: '28:15', type: 'video', isPreview: false },
          { id: 'ds-3-4', title: '3.4 Handling Imbalanced Data with SMOTE and Undersampling', duration: '31:50', type: 'video', isPreview: false },
          { id: 'ds-3-5', title: '3.5 Building Scikit-Learn Pipelines & ColumnTransformers', duration: '37:20', type: 'video', isPreview: false },
          { id: 'ds-3-6', title: '3.6 Pipeline Automation Coding Lab', duration: '30:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Supervised Learning: Regression Models',
        lectureCount: '7 lectures',
        topics: [
          { id: 'ds-4-1', title: '4.1 Simple & Multiple Linear Regression Explained', duration: '29:00', type: 'video', isPreview: false },
          { id: 'ds-4-2', title: '4.2 Ordinary Least Squares (OLS) & Assumptions of Regression', duration: '26:30', type: 'video', isPreview: false },
          { id: 'ds-4-3', title: '4.3 Evaluating Regression: MAE, MSE, RMSE, and R-squared', duration: '23:15', type: 'video', isPreview: false },
          { id: 'ds-4-4', title: '4.4 Regularization: Ridge (L2) and Lasso (L1) Regression', duration: '33:40', type: 'video', isPreview: false },
          { id: 'ds-4-5', title: '4.5 Decision Tree Regressors and Polynomial Regression', duration: '28:10', type: 'video', isPreview: false },
          { id: 'ds-4-6', title: '4.6 Project: House Price Prediction with California Housing Data', duration: '44:00', type: 'video', isPreview: false },
          { id: 'ds-4-7', title: '4.7 Regression Milestone Assignment', duration: '20:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Supervised Learning: Classification Models',
        lectureCount: '7 lectures',
        topics: [
          { id: 'ds-5-1', title: '5.1 Logistic Regression & The Sigmoid Probability Curve', duration: '27:15', type: 'video', isPreview: false },
          { id: 'ds-5-2', title: '5.2 Confusion Matrix, Precision, Recall, and F1-Score', duration: '31:40', type: 'video', isPreview: false },
          { id: 'ds-5-3', title: '5.3 ROC-AUC Curves and Optimal Probability Thresholds', duration: '28:50', type: 'video', isPreview: false },
          { id: 'ds-5-4', title: '5.4 K-Nearest Neighbors (KNN) & Support Vector Machines (SVM)', duration: '34:20', type: 'video', isPreview: false },
          { id: 'ds-5-5', title: '5.5 Decision Trees: Gini Impurity and Entropy', duration: '30:10', type: 'video', isPreview: false },
          { id: 'ds-5-6', title: '5.6 Ensemble Methods: Random Forests & Gradient Boosting (XGBoost)', duration: '43:30', type: 'video', isPreview: false },
          { id: 'ds-5-7', title: '5.7 Project: Predicting Customer Churn for a Telecom Firm', duration: '48:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Unsupervised Learning & Clustering',
        lectureCount: '6 lectures',
        topics: [
          { id: 'ds-6-1', title: '6.1 Unsupervised Learning Concepts and Business Use Cases', duration: '18:30', type: 'video', isPreview: false },
          { id: 'ds-6-2', title: '6.2 K-Means Clustering: Centroid Optimization & Elbow Method', duration: '32:10', type: 'video', isPreview: false },
          { id: 'ds-6-3', title: '6.3 Silhouette Score Analysis for Cluster Validation', duration: '24:45', type: 'video', isPreview: false },
          { id: 'ds-6-4', title: '6.4 Hierarchical Clustering and Dendrogram Interpretation', duration: '29:15', type: 'video', isPreview: false },
          { id: 'ds-6-5', title: '6.5 Dimensionality Reduction with Principal Component Analysis (PCA)', duration: '36:00', type: 'video', isPreview: false },
          { id: 'ds-6-6', title: '6.6 Project: Customer Segmentation for Retail Marketing', duration: '41:20', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - Model Deployment & Streamlit Web Apps',
        lectureCount: '7 lectures',
        topics: [
          { id: 'ds-7-1', title: '7.1 Saving and Loading Models with Pickle & Joblib', duration: '19:40', type: 'video', isPreview: false },
          { id: 'ds-7-2', title: '7.2 Introduction to Streamlit for Fast ML Web Dashboards', duration: '26:15', type: 'video', isPreview: false },
          { id: 'ds-7-3', title: '7.3 Building User Input Widgets & Displaying Live Predictions', duration: '33:50', type: 'video', isPreview: false },
          { id: 'ds-7-4', title: '7.4 Deploying Streamlit Apps to Streamlit Community Cloud', duration: '25:10', type: 'video', isPreview: false },
          { id: 'ds-7-5', title: '7.5 Creating an API for ML Models with FastAPI', duration: '35:20', type: 'video', isPreview: false },
          { id: 'ds-7-6', title: '7.6 Capstone Defense: End-to-End Predictive Analytics System', duration: '45:00', type: 'video', isPreview: false },
          { id: 'ds-7-7', title: '7.7 Final Course Certification Exam', duration: '30:00', type: 'quiz', isPreview: false }
        ]
      }
    ]
  },

  'python-development': {
    id: 'python-development',
    courseName: 'Python Development: From Zero to Hero',
    tagline: 'Master Python 3 Syntax, OOP, Data Structures, Web Scraping, FastAPI Backend, and Automation',
    level: 'Beginner to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Python Developer',
    totalHours: '28 Hours',
    totalChapters: 7,
    totalLectures: 42,
    overview: 'The most thorough, practical Python masterclass online. You will start from the very basics of Python syntax, logic, and data structures, progress into Object-Oriented Programming (OOP), file I/O, error handling, web scraping with Beautiful Soup, and finish by building asynchronous REST APIs with FastAPI.',
    whatYouWillLearn: [
      'Write clean, readable Python code adhering to PEP 8 standards',
      'Master data structures: Lists, Dictionaries, Sets, Tuples, and Comprehensions',
      'Build robust Object-Oriented software with Classes, Inheritance, and Polymorphism',
      'Automate repetitive workflows: Web scraping, Excel processing, and file management',
      'Develop modern asynchronous RESTful APIs using FastAPI and Pydantic',
      'Write unit tests using PyTest to ensure software reliability'
    ],
    requirements: [
      'No prior programming experience required',
      'A computer running Windows, macOS, or Linux'
    ],
    targetAudience: [
      'Total beginners wanting to learn coding with the most popular language',
      'Professionals looking to automate daily repetitive manual tasks',
      'Developers transitioning from other programming languages to Python'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Python Fundamentals & Environment Setup',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-1-1', title: '1.1 Welcome to Python & What Makes It Powerful', duration: '14:10', type: 'video', isPreview: true },
          { id: 'py-1-2', title: '1.2 Installing Python 3.12, VS Code, and Extensions', duration: '18:40', type: 'video', isPreview: true },
          { id: 'py-1-3', title: '1.3 Variables, Data Types, and Type Casting', duration: '22:15', type: 'video', isPreview: false },
          { id: 'py-1-4', title: '1.4 String Formatting, Slicing, and Built-in String Methods', duration: '26:50', type: 'video', isPreview: false },
          { id: 'py-1-5', title: '1.5 Arithmetic, Comparison, and Logical Operators', duration: '19:30', type: 'video', isPreview: false },
          { id: 'py-1-6', title: '1.6 Chapter 1 Coding Exercises', duration: '20:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Control Flow & Data Structures',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-2-1', title: '2.1 Conditional Logic: if, elif, and else Statements', duration: '21:00', type: 'video', isPreview: false },
          { id: 'py-2-2', title: '2.2 For Loops, While Loops, break, and continue', duration: '25:30', type: 'video', isPreview: false },
          { id: 'py-2-3', title: '2.3 Lists and Tuples: Operations, Methods, and Performance', duration: '29:45', type: 'video', isPreview: false },
          { id: 'py-2-4', title: '2.4 Dictionaries and Sets: Key-Value Lookups and Hash Maps', duration: '31:10', type: 'video', isPreview: false },
          { id: 'py-2-5', title: '2.5 List, Dictionary, and Set Comprehensions', duration: '27:20', type: 'video', isPreview: false },
          { id: 'py-2-6', title: '2.6 Project: Terminal-Based Inventory Management System', duration: '38:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Functions, Modules & Clean Code',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-3-1', title: '3.1 Defining Functions, Return Values, and Docstrings', duration: '23:15', type: 'video', isPreview: false },
          { id: 'py-3-2', title: '3.2 *args and **kwargs for Dynamic Function Arguments', duration: '24:50', type: 'video', isPreview: false },
          { id: 'py-3-3', title: '3.3 Variable Scope: Local, Global, and Nonlocal', duration: '19:20', type: 'video', isPreview: false },
          { id: 'py-3-4', title: '3.4 Lambda Functions, Map, Filter, and Reduce', duration: '26:40', type: 'video', isPreview: false },
          { id: 'py-3-5', title: '3.5 Creating Custom Modules and Virtual Environments (venv)', duration: '28:30', type: 'video', isPreview: false },
          { id: 'py-3-6', title: '3.6 Code Style: PEP 8, Black Formatter, and Flake8', duration: '20:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Object-Oriented Programming (OOP) in Python',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-4-1', title: '4.1 Classes, Objects, and the __init__ Constructor', duration: '29:10', type: 'video', isPreview: false },
          { id: 'py-4-2', title: '4.2 Instance vs. Class Attributes and Methods', duration: '25:40', type: 'video', isPreview: false },
          { id: 'py-4-3', title: '4.3 Inheritance, super(), and Method Overriding', duration: '31:25', type: 'video', isPreview: false },
          { id: 'py-4-4', title: '4.4 Encapsulation, Private Attributes, and Properties (@property)', duration: '27:50', type: 'video', isPreview: false },
          { id: 'py-4-5', title: '4.5 Polymorphism and Magic / Dunder Methods (__str__, __repr__)', duration: '34:10', type: 'video', isPreview: false },
          { id: 'py-4-6', title: '4.6 Project: Banking Application with OOP Architecture', duration: '42:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - File Handling, Exceptions & Automation',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-5-1', title: '5.1 Reading and Writing Text and CSV Files Safely (with context)', duration: '22:40', type: 'video', isPreview: false },
          { id: 'py-5-2', title: '5.2 Parsing and Generating JSON Data', duration: '24:15', type: 'video', isPreview: false },
          { id: 'py-5-3', title: '5.3 Exception Handling: try, except, else, and finally', duration: '27:30', type: 'video', isPreview: false },
          { id: 'py-5-4', title: '5.4 Automating Excel Worksheets with OpenPyXL', duration: '33:20', type: 'video', isPreview: false },
          { id: 'py-5-5', title: '5.5 Web Scraping with Requests and BeautifulSoup', duration: '39:45', type: 'video', isPreview: false },
          { id: 'py-5-6', title: '5.6 Project: Automated Amazon Price Tracker & Email Notifier', duration: '46:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Web APIs & Backend Development with FastAPI',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-6-1', title: '6.1 Introduction to Modern Web Frameworks: Why FastAPI?', duration: '21:10', type: 'video', isPreview: false },
          { id: 'py-6-2', title: '6.2 Async / Await Coroutines in Python', duration: '28:50', type: 'video', isPreview: false },
          { id: 'py-6-3', title: '6.3 Defining Request Models and Data Validation with Pydantic', duration: '32:40', type: 'video', isPreview: false },
          { id: 'py-6-4', title: '6.4 Building CRUD Endpoints and OpenAPI (Swagger) Docs', duration: '36:15', type: 'video', isPreview: false },
          { id: 'py-6-5', title: '6.5 Connecting SQLite with SQLAlchemy ORM', duration: '40:30', type: 'video', isPreview: false },
          { id: 'py-6-6', title: '6.6 Project: High-Speed Notes & Bookmark REST API', duration: '48:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - Testing, Packaging & Final Capstone',
        lectureCount: '6 lectures',
        topics: [
          { id: 'py-7-1', title: '7.1 Unit Testing Basics with PyTest', duration: '26:00', type: 'video', isPreview: false },
          { id: 'py-7-2', title: '7.2 Mocking APIs and Database Calls in Tests', duration: '29:40', type: 'video', isPreview: false },
          { id: 'py-7-3', title: '7.3 Packaging Python Projects with pyproject.toml & Poetry', duration: '25:15', type: 'video', isPreview: false },
          { id: 'py-7-4', title: '7.4 Containerizing Python Applications with Docker', duration: '33:50', type: 'video', isPreview: false },
          { id: 'py-7-5', title: '7.6 Capstone Project Walkthrough & Final Assessment', duration: '45:00', type: 'video', isPreview: false },
          { id: 'py-7-6', title: '7.6 Final Certification & Next Steps in Python Career', duration: '18:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'java-development': {
    id: 'java-development',
    courseName: 'Java Development: Enterprise Applications',
    tagline: 'Enterprise Java Architecture with Spring Boot, Hibernate, Microservices, and Cloud Native Deployments',
    level: 'Intermediate to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Enterprise Java Specialist',
    totalHours: '32 Hours',
    totalChapters: 8,
    totalLectures: 50,
    overview: 'Become an enterprise-grade backend developer using Java 21 and Spring Boot. Master object-oriented principles, Spring dependency injection, REST APIs, Hibernate/JPA persistence, Spring Security with OAuth2, Apache Kafka event streaming, and cloud containerization with Docker and Kubernetes.',
    whatYouWillLearn: [
      'Master Java 21 features: Records, Pattern Matching, Virtual Threads, and Streams',
      'Build robust enterprise REST APIs with Spring Boot 3',
      'Implement data persistence using Spring Data JPA and Hibernate ORM',
      'Secure microservices with Spring Security, JWT, and OAuth2 tokens',
      'Implement event-driven microservices architecture using Apache Kafka',
      'Containerize Java microservices with Docker and deploy to Kubernetes'
    ],
    requirements: [
      'Basic programming knowledge in any object-oriented language',
      'Understanding of basic computer science fundamentals'
    ],
    targetAudience: [
      'Backend developers targeting corporate enterprise Java positions',
      'Computer Science graduates wanting to learn industry-grade software architectures'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Modern Java 21 Foundations & Tooling',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-1-1', title: '1.1 The JVM, JDK, JRE, and Bytecode Compilation', duration: '18:20', type: 'video', isPreview: true },
          { id: 'java-1-2', title: '1.2 Setting Up IntelliJ IDEA, Maven, and OpenJDK 21', duration: '22:15', type: 'video', isPreview: true },
          { id: 'java-1-3', title: '1.3 Java Type System, Records, and Sealed Classes', duration: '27:40', type: 'video', isPreview: false },
          { id: 'java-1-4', title: '1.4 Generics, Wildcards, and Collection Framework Mastery', duration: '34:10', type: 'video', isPreview: false },
          { id: 'java-1-5', title: '1.5 Functional Interfaces, Lambdas, and Stream API Pipelines', duration: '38:00', type: 'video', isPreview: false },
          { id: 'java-1-6', title: '1.6 Java 21 Virtual Threads (Project Loom) Performance', duration: '31:30', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Spring Boot 3 Core & Dependency Injection',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-2-1', title: '2.1 Inversion of Control (IoC) and Dependency Injection', duration: '24:00', type: 'video', isPreview: false },
          { id: 'java-2-2', title: '2.2 Spring Beans, Scopes, and Component Scanning', duration: '26:45', type: 'video', isPreview: false },
          { id: 'java-2-3', title: '2.3 Spring Boot Auto-Configuration & application.yml', duration: '22:30', type: 'video', isPreview: false },
          { id: 'java-2-4', title: '2.4 Building REST Controllers with @RequestMapping & @PathVariable', duration: '29:50', type: 'video', isPreview: false },
          { id: 'java-2-5', title: '2.5 Global Exception Handling with @ControllerAdvice', duration: '25:10', type: 'video', isPreview: false },
          { id: 'java-2-6', title: '2.6 Validating DTOs with Hibernate Validator & Jakarta Validation', duration: '27:40', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Database Persistence with Spring Data JPA',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-3-1', title: '3.1 ORM Concepts: JPA vs. Hibernate Implementation', duration: '25:30', type: 'video', isPreview: false },
          { id: 'java-3-2', title: '3.2 Entity Mapping: @Id, @Column, @Table, and Enums', duration: '28:15', type: 'video', isPreview: false },
          { id: 'java-3-3', title: '3.3 Entity Relationships: @OneToMany, @ManyToOne, and Cascade Types', duration: '36:40', type: 'video', isPreview: false },
          { id: 'java-3-4', title: '3.4 Solving the N+1 Query Problem with JOIN FETCH and EntityGraphs', duration: '33:20', type: 'video', isPreview: false },
          { id: 'java-3-5', title: '3.5 Derived Queries, @Query JPQL, and Native SQL', duration: '30:15', type: 'video', isPreview: false },
          { id: 'java-3-6', title: '3.6 Database Migrations with Flyway', duration: '26:50', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Enterprise Security with Spring Security 6',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-4-1', title: '4.1 The SecurityFilterChain and Filter Architecture', duration: '31:00', type: 'video', isPreview: false },
          { id: 'java-4-2', title: '4.2 UserDetailsService and Password Encoders (BCrypt)', duration: '26:30', type: 'video', isPreview: false },
          { id: 'java-4-3', title: '4.3 Stateless JWT Authentication Filter Implementation', duration: '41:15', type: 'video', isPreview: false },
          { id: 'java-4-4', title: '4.4 Role-Based Authorization with @PreAuthorize', duration: '27:40', type: 'video', isPreview: false },
          { id: 'java-4-5', title: '4.5 OAuth2 and OpenID Connect (OIDC) Social Login', duration: '38:20', type: 'video', isPreview: false },
          { id: 'java-4-6', title: '4.6 Protecting Against CSRF, XSS, and CORS Misconfigurations', duration: '29:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Microservices Architecture & Communication',
        lectureCount: '7 lectures',
        topics: [
          { id: 'java-5-1', title: '5.1 Monolith vs Microservices Trade-offs & Domain-Driven Design', duration: '28:10', type: 'video', isPreview: false },
          { id: 'java-5-2', title: '5.2 Service Discovery and Registration with Netflix Eureka', duration: '33:45', type: 'video', isPreview: false },
          { id: 'java-5-3', title: '5.3 Centralized API Gateway with Spring Cloud Gateway', duration: '36:20', type: 'video', isPreview: false },
          { id: 'java-5-4', title: '5.4 Synchronous Communication: OpenFeign Clients', duration: '29:15', type: 'video', isPreview: false },
          { id: 'java-5-5', title: '5.5 Resiliency & Circuit Breakers with Resilience4j', duration: '34:50', type: 'video', isPreview: false },
          { id: 'java-5-6', title: '5.6 Centralized Configuration with Spring Cloud Config Server', duration: '27:30', type: 'video', isPreview: false },
          { id: 'java-5-7', title: '5.7 Distributed Tracing with Micrometer and Zipkin', duration: '32:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Event-Driven Architecture with Apache Kafka',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-6-1', title: '6.1 Message Broker Paradigms: Queues vs. Event Streams', duration: '25:00', type: 'video', isPreview: false },
          { id: 'java-6-2', title: '6.2 Kafka Architecture: Topics, Partitions, Brokers, and Consumer Groups', duration: '37:15', type: 'video', isPreview: false },
          { id: 'java-6-3', title: '6.3 Spring for Apache Kafka: Producer Configuration and Templates', duration: '31:40', type: 'video', isPreview: false },
          { id: 'java-6-4', title: '6.4 @KafkaListener, Deserialization, and Error Handling', duration: '35:20', type: 'video', isPreview: false },
          { id: 'java-6-5', title: '6.5 Implementing the Saga Pattern for Distributed Transactions', duration: '44:00', type: 'video', isPreview: false },
          { id: 'java-6-6', title: '6.6 Project: Real-Time Order Processing Event Pipeline', duration: '48:30', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 7,
        title: 'Chapter 7 - Automated Testing with JUnit 5 & Testcontainers',
        lectureCount: '6 lectures',
        topics: [
          { id: 'java-7-1', title: '7.1 Unit Testing Services with JUnit 5 and Mockito', duration: '28:30', type: 'video', isPreview: false },
          { id: 'java-7-2', title: '7.2 Controller Integration Testing with MockMvc & @WebMvcTest', duration: '32:10', type: 'video', isPreview: false },
          { id: 'java-7-3', title: '7.3 Real Database Integration Testing with Testcontainers', duration: '36:45', type: 'video', isPreview: false },
          { id: 'java-7-4', title: '7.4 End-to-End API Testing with REST-Assured', duration: '27:50', type: 'video', isPreview: false },
          { id: 'java-7-5', title: '7.5 Code Coverage Metrics with JaCoCo Plugin', duration: '21:15', type: 'video', isPreview: false },
          { id: 'java-7-6', title: '7.6 Writing Clean Test Fixtures and Builders', duration: '24:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 8,
        title: 'Chapter 8 - Docker, Kubernetes & Production Observability',
        lectureCount: '7 lectures',
        topics: [
          { id: 'java-8-1', title: '8.1 Multi-Stage Docker Builds & JRE Slim Image Optimization', duration: '31:10', type: 'video', isPreview: false },
          { id: 'java-8-2', title: '8.2 Composing Microservices with Docker Compose', duration: '28:40', type: 'video', isPreview: false },
          { id: 'java-8-3', title: '8.3 Kubernetes Deployments, Services, and Ingress Controller', duration: '42:30', type: 'video', isPreview: false },
          { id: 'java-8-4', title: '8.4 Spring Boot Actuator: Health Checks, Metrics, and Info', duration: '25:15', type: 'video', isPreview: false },
          { id: 'java-8-5', title: '8.5 Exporting Metrics to Prometheus and Visualizing in Grafana', duration: '36:00', type: 'video', isPreview: false },
          { id: 'java-8-6', title: '8.6 Final Capstone Project Review and Architecture Defense', duration: '46:00', type: 'video', isPreview: false },
          { id: 'java-8-7', title: '8.7 Course Completion & Certification', duration: '15:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'data-analytics': {
    id: 'data-analytics',
    courseName: 'Data Analytics with PowerBI, SQL & Tableau',
    tagline: 'Transform Raw Business Data into High-Impact Interactive Dashboards, KPI Reports, and Executive Stories',
    level: 'All Levels',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Business Intelligence Analyst',
    totalHours: '20 Hours',
    totalChapters: 6,
    totalLectures: 32,
    overview: 'Learn how to bridge business data with executive decision-making. Master advanced SQL data modeling, Power BI DAX functions, Tableau visual storytelling, ETL workflows, and create professional enterprise dashboards that impress hiring managers and stakeholders.',
    whatYouWillLearn: [
      'Extract, clean, and manipulate business databases using SQL queries',
      'Build end-to-end interactive reporting dashboards in Microsoft Power BI',
      'Master DAX (Data Analysis Expressions) for custom business KPIs and measures',
      'Create sophisticated charts, heatmaps, and storyboards in Tableau Desktop',
      'Automate data pipelines with Power Query ETL',
      'Communicate complex statistical findings to C-level executives through data storytelling'
    ],
    requirements: [
      'No prior analytics or coding background required',
      'Microsoft Windows recommended for Power BI Desktop (or Parallels/VM for Mac)'
    ],
    targetAudience: [
      'Aspiring Data Analysts and Business Intelligence Developers',
      'Product Managers, Marketers, and Financial Analysts wanting data mastery'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Analytics Fundamentals & The Modern BI Landscape',
        lectureCount: '5 lectures',
        topics: [
          { id: 'da-1-1', title: '1.1 The Business Intelligence Lifecycle: From Ingestion to Insight', duration: '16:00', type: 'video', isPreview: true },
          { id: 'da-1-2', title: '1.2 Installing Power BI Desktop, Tableau Public, and PostgreSQL', duration: '21:30', type: 'video', isPreview: true },
          { id: 'da-1-3', title: '1.3 Primary Data Types, Quality Assessment, and Cleaning Principles', duration: '24:10', type: 'video', isPreview: false },
          { id: 'da-1-4', title: '1.4 Formulating Business Hypotheses and Defining Key Metrics', duration: '19:45', type: 'video', isPreview: false },
          { id: 'da-1-5', title: '1.5 Chapter 1 Case Study Discussion', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Business SQL for Analysts',
        lectureCount: '6 lectures',
        topics: [
          { id: 'da-2-1', title: '2.1 Extracting Data with SELECT, WHERE, and Logical Operators', duration: '22:15', type: 'video', isPreview: false },
          { id: 'da-2-2', title: '2.2 Aggregating Metrics: Revenue, Sales Volume, and AOV with GROUP BY', duration: '27:40', type: 'video', isPreview: false },
          { id: 'da-2-3', title: '2.3 Multi-Table Joins to Connect Customers, Orders, and Products', duration: '31:20', type: 'video', isPreview: false },
          { id: 'da-2-4', title: '2.4 Subqueries and Common Table Expressions (CTEs) for Cohorts', duration: '34:10', type: 'video', isPreview: false },
          { id: 'da-2-5', title: '2.5 Window Functions for Rolling Revenue and MoM Growth', duration: '38:00', type: 'video', isPreview: false },
          { id: 'da-2-6', title: '2.6 Hands-on SQL Assessment: Analyzing E-Commerce Retail Data', duration: '35:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Power BI: ETL & Data Modeling',
        lectureCount: '5 lectures',
        topics: [
          { id: 'da-3-1', title: '3.1 Power Query: Transforming, Unpivoting, and Merging Dirty Data', duration: '29:30', type: 'video', isPreview: false },
          { id: 'da-3-2', title: '3.2 Star Schema vs Snowflake Schema Database Modeling', duration: '26:15', type: 'video', isPreview: false },
          { id: 'da-3-3', title: '3.3 Managing Relationships, Cardinality (1:M), and Filter Direction', duration: '28:40', type: 'video', isPreview: false },
          { id: 'da-3-4', title: '3.4 Creating a Standard Dedicated Date Dimension Table', duration: '22:50', type: 'video', isPreview: false },
          { id: 'da-3-5', title: '3.5 Power BI Data Pipeline Practical Exercise', duration: '30:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Power BI: DAX Calculations & Executive Dashboards',
        lectureCount: '6 lectures',
        topics: [
          { id: 'da-4-1', title: '4.1 Calculated Columns vs Measures: The Cardinal Rule of DAX', duration: '25:10', type: 'video', isPreview: false },
          { id: 'da-4-2', title: '4.2 The CALCULATE Function and Filter Context Modification', duration: '36:40', type: 'video', isPreview: false },
          { id: 'da-4-3', title: '4.3 Time Intelligence DAX: YTD, QTD, MoM, and SamePeriodLastYear', duration: '33:15', type: 'video', isPreview: false },
          { id: 'da-4-4', title: '4.4 Designing Visuals: KPI Cards, Waterfall Charts, and Matrix Views', duration: '30:20', type: 'video', isPreview: false },
          { id: 'da-4-5', title: '4.5 Dynamic Tooltips, Bookmarks, and Drill-Through Actions', duration: '32:50', type: 'video', isPreview: false },
          { id: 'da-4-6', title: '4.6 Project: Complete Executive C-Suite Financial Dashboard', duration: '45:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Tableau Desktop: Visual Storytelling',
        lectureCount: '5 lectures',
        topics: [
          { id: 'da-5-1', title: '5.1 Tableau Workspace, Dimensions vs. Measures, and Continuous/Discrete', duration: '24:30', type: 'video', isPreview: false },
          { id: 'da-5-2', title: '5.2 Creating Dual-Axis Charts, Heatmaps, and Geographic Map Plots', duration: '31:10', type: 'video', isPreview: false },
          { id: 'da-5-3', title: '5.3 Calculated Fields, Parameters, and Table Calculations', duration: '28:40', type: 'video', isPreview: false },
          { id: 'da-5-4', title: '5.4 Level of Detail (LOD) Expressions: FIXED, INCLUDE, and EXCLUDE', duration: '37:15', type: 'video', isPreview: false },
          { id: 'da-5-5', title: '5.5 Assembling Interactive Dashboards with Filter Actions and Containers', duration: '41:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Business Case Studies & Executive Presentations',
        lectureCount: '5 lectures',
        topics: [
          { id: 'da-6-1', title: '6.1 Designing for Non-Technical Stakeholders & Cognitive Load', duration: '21:00', type: 'video', isPreview: false },
          { id: 'da-6-2', title: '6.2 Real-World Case Study: Marketing Campaign Attribution & ROI', duration: '34:20', type: 'video', isPreview: false },
          { id: 'da-6-3', title: '6.3 Real-World Case Study: Supply Chain Logistics & Fulfillment Delays', duration: '36:10', type: 'video', isPreview: false },
          { id: 'da-6-4', title: '6.4 Publishing Reports to Power BI Service and Tableau Cloud', duration: '25:40', type: 'video', isPreview: false },
          { id: 'da-6-5', title: '6.5 Capstone Presentation and Certification Defense', duration: '40:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'cloud-computing': {
    id: 'cloud-computing',
    courseName: 'Cloud Computing & DevOps: AWS & Azure',
    tagline: 'Master Cloud Infrastructure, EC2, S3, Docker, Kubernetes, Terraform, and Automated CI/CD Pipelines',
    level: 'Intermediate',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'AWS & Azure Solutions Architect Ready',
    totalHours: '26 Hours',
    totalChapters: 6,
    totalLectures: 38,
    overview: 'Become a highly valued DevOps engineer or Cloud Architect. Learn the core principles of cloud networking, virtual machines, IAM security, object storage, serverless functions on AWS and Azure, combined with Infrastructure as Code (Terraform), container orchestration (Kubernetes), and automated CI/CD deployment pipelines.',
    whatYouWillLearn: [
      'Design fault-tolerant, scalable architectures on Amazon Web Services (AWS) and Azure',
      'Manage VPCs, subnets, route tables, internet gateways, and security groups',
      'Deploy containerized microservices using Docker, EKS, and Kubernetes manifests',
      'Automate cloud infrastructure provisioning using Terraform (HCL)',
      'Build end-to-end automated CI/CD pipelines using GitHub Actions',
      'Implement cloud monitoring and alerting with Prometheus, Grafana, and AWS CloudWatch'
    ],
    requirements: [
      'Basic command line and Linux fundamentals',
      'An active free-tier AWS or Azure account'
    ],
    targetAudience: [
      'Systems Administrators moving to modern cloud operations',
      'Developers wanting to control their deployment and infrastructure lifecycle'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Cloud Computing Foundations & Virtual Networks',
        lectureCount: '6 lectures',
        topics: [
          { id: 'cc-1-1', title: '1.1 Cloud Service Models: IaaS, PaaS, SaaS, and Shared Responsibility', duration: '18:10', type: 'video', isPreview: true },
          { id: 'cc-1-2', title: '1.2 Regions, Availability Zones, and Global Edge Infrastructure', duration: '22:40', type: 'video', isPreview: true },
          { id: 'cc-1-3', title: '1.3 AWS Virtual Private Cloud (VPC) Architecture & CIDR Blocks', duration: '31:15', type: 'video', isPreview: false },
          { id: 'cc-1-4', title: '1.4 Public vs. Private Subnets, NAT Gateways, and Route Tables', duration: '34:50', type: 'video', isPreview: false },
          { id: 'cc-1-5', title: '1.5 Security Groups vs. Network Access Control Lists (NACLs)', duration: '26:20', type: 'video', isPreview: false },
          { id: 'cc-1-6', title: '1.6 Lab: Provisioning a Secure Dual-Tier Custom VPC', duration: '40:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Compute & Storage: EC2, S3 & Load Balancing',
        lectureCount: '6 lectures',
        topics: [
          { id: 'cc-2-1', title: '2.1 Elastic Compute Cloud (EC2): Instance Types, AMIs, and SSH Keys', duration: '28:30', type: 'video', isPreview: false },
          { id: 'cc-2-2', title: '2.2 Elastic Block Store (EBS) Volumes, Snapshots, and IOPS', duration: '24:15', type: 'video', isPreview: false },
          { id: 'cc-2-3', title: '2.3 Simple Storage Service (S3): Buckets, Policies, and Lifecycle Rules', duration: '29:40', type: 'video', isPreview: false },
          { id: 'cc-2-4', title: '2.4 Application Load Balancer (ALB) and Health Checks', duration: '33:10', type: 'video', isPreview: false },
          { id: 'cc-2-5', title: '2.5 Auto Scaling Groups (ASG) and Scaling Policies', duration: '35:25', type: 'video', isPreview: false },
          { id: 'cc-2-6', title: '2.6 Project: Deploying a Self-Healing Multi-AZ Web Cluster', duration: '46:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Identity, Security & Serverless Functions',
        lectureCount: '6 lectures',
        topics: [
          { id: 'cc-3-1', title: '3.1 AWS IAM: Users, Groups, Roles, and Least Privilege Policies', duration: '27:10', type: 'video', isPreview: false },
          { id: 'cc-3-2', title: '3.2 AWS Key Management Service (KMS) and Secrets Manager', duration: '23:45', type: 'video', isPreview: false },
          { id: 'cc-3-3', title: '3.3 Serverless Compute: AWS Lambda Functions and Triggers', duration: '32:20', type: 'video', isPreview: false },
          { id: 'cc-3-4', title: '3.4 API Gateway Integration with Lambda Backend', duration: '29:15', type: 'video', isPreview: false },
          { id: 'cc-3-5', title: '3.5 DynamoDB: Serverless NoSQL Document Storage', duration: '31:50', type: 'video', isPreview: false },
          { id: 'cc-3-6', title: '3.6 Project: Serverless Image Resizing Microservice Pipeline', duration: '42:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Infrastructure as Code with Terraform',
        lectureCount: '6 lectures',
        topics: [
          { id: 'cc-4-1', title: '4.1 Declarative vs Imperative IaC & Terraform Architecture', duration: '24:00', type: 'video', isPreview: false },
          { id: 'cc-4-2', title: '4.2 Providers, Resources, Variables, and Output Blocks', duration: '28:30', type: 'video', isPreview: false },
          { id: 'cc-4-3', title: '4.3 Terraform State Management & S3 Remote Backend with Locking', duration: '34:10', type: 'video', isPreview: false },
          { id: 'cc-4-4', title: '4.4 Writing Reusable Terraform Modules', duration: '37:45', type: 'video', isPreview: false },
          { id: 'cc-4-5', title: '4.5 Terraform Workspaces for Multi-Environment (Dev/Prod) Deploys', duration: '31:20', type: 'video', isPreview: false },
          { id: 'cc-4-6', title: '4.6 Lab: Complete AWS Infrastructure Automated via Terraform', duration: '48:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Container Orchestration with Docker & Kubernetes',
        lectureCount: '7 lectures',
        topics: [
          { id: 'cc-5-1', title: '5.1 Containerization Concepts: Namespaces, Cgroups, and Layers', duration: '22:15', type: 'video', isPreview: false },
          { id: 'cc-5-2', title: '5.2 Writing Production Dockerfiles and Multi-Stage Builds', duration: '29:40', type: 'video', isPreview: false },
          { id: 'cc-5-3', title: '5.3 Kubernetes Control Plane vs. Worker Nodes Architecture', duration: '33:10', type: 'video', isPreview: false },
          { id: 'cc-5-4', title: '5.4 Pods, Deployments, ReplicaSets, and Rolling Updates', duration: '36:50', type: 'video', isPreview: false },
          { id: 'cc-5-5', title: '5.5 Cluster Networking: ClusterIP, NodePort, and Ingress', duration: '38:20', type: 'video', isPreview: false },
          { id: 'cc-5-6', title: '5.6 PersistentVolumes, Claims, and ConfigMaps/Secrets', duration: '32:00', type: 'video', isPreview: false },
          { id: 'cc-5-7', title: '5.7 Project: Deploying a Multi-Tier App onto Amazon EKS Cluster', duration: '52:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - CI/CD Pipelines & Cloud Monitoring',
        lectureCount: '7 lectures',
        topics: [
          { id: 'cc-6-1', title: '6.1 Continuous Integration vs Continuous Delivery Principles', duration: '20:30', type: 'video', isPreview: false },
          { id: 'cc-6-2', title: '6.2 GitHub Actions: Workflows, Jobs, Steps, and Runners', duration: '28:15', type: 'video', isPreview: false },
          { id: 'cc-6-3', title: '6.3 Automated Linting, Testing, and Security Scanning in CI', duration: '26:40', type: 'video', isPreview: false },
          { id: 'cc-6-4', title: '6.4 Building & Pushing Docker Images to AWS ECR in Pipeline', duration: '31:50', type: 'video', isPreview: false },
          { id: 'cc-6-5', title: '6.5 Automated Rolling Deployments to Kubernetes Clusters', duration: '37:20', type: 'video', isPreview: false },
          { id: 'cc-6-6', title: '6.6 CloudWatch Logs, Alarms, and Prometheus/Grafana Dashboards', duration: '35:10', type: 'video', isPreview: false },
          { id: 'cc-6-7', title: '6.7 Final DevOps Capstone Project Defense & Certification', duration: '45:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'cyber-security': {
    id: 'cyber-security',
    courseName: 'Cyber Security & Ethical Hacking Defense',
    tagline: 'Network Penetration Testing, Vulnerability Assessment, Cryptography, and Enterprise System Hardening',
    level: 'Beginner to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Ethical Hacker (CEH) Aligned',
    totalHours: '24 Hours',
    totalChapters: 6,
    totalLectures: 36,
    overview: 'Learn how malicious hackers think so you can defend critical corporate infrastructure. Master Kali Linux tools, network packet sniffing with Wireshark, port scanning with Nmap, web application penetration testing (OWASP Top 10), Metasploit exploitation, password cracking, and enterprise defensive hardening.',
    whatYouWillLearn: [
      'Master reconnaissance, OSINT gathering, and footprinting techniques',
      'Conduct network vulnerability scanning using Nmap and Nessus',
      'Analyze network traffic and decrypt protocols using Wireshark',
      'Test web applications against OWASP Top 10 (SQLi, XSS, CSRF, SSRF)',
      'Execute controlled exploit tests using the Metasploit framework',
      'Harden Linux and Windows enterprise systems against cyber attacks'
    ],
    requirements: [
      'Basic computer literacy and understanding of internet protocols (TCP/IP)',
      'A computer with virtualization support (VirtualBox / VMware for Kali Linux)'
    ],
    targetAudience: [
      'Aspiring Penetration Testers and Cyber Security Analysts',
      'System Administrators and Network Engineers wanting to specialize in security'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Cyber Security Foundations & Lab Setup',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-1-1', title: '1.1 The Cyber Threat Landscape & CIA Triad Principles', duration: '17:30', type: 'video', isPreview: true },
          { id: 'sec-1-2', title: '1.2 Legal Frameworks, Ethics, and Rules of Engagement', duration: '19:10', type: 'video', isPreview: true },
          { id: 'sec-1-3', title: '1.3 Installing VirtualBox and Kali Linux 2026 Penetration OS', duration: '28:40', type: 'video', isPreview: false },
          { id: 'sec-1-4', title: '1.4 Setting Up Metasploitable 2 & 3 Target Vulnerable Machines', duration: '26:15', type: 'video', isPreview: false },
          { id: 'sec-1-5', title: '1.5 Essential Linux Command-Line Commands for Hackers', duration: '32:00', type: 'video', isPreview: false },
          { id: 'sec-1-6', title: '1.6 Chapter 1 Security Foundations Quiz', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Reconnaissance, OSINT & Network Scanning',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-2-1', title: '2.1 Passive Reconnaissance and Open Source Intelligence (OSINT)', duration: '25:20', type: 'video', isPreview: false },
          { id: 'sec-2-2', title: '2.2 Google Dorking, Whois, Shodan, and DNS Enumeration', duration: '31:40', type: 'video', isPreview: false },
          { id: 'sec-2-3', title: '2.3 Network Architecture & The TCP/IP 3-Way Handshake', duration: '22:15', type: 'video', isPreview: false },
          { id: 'sec-2-4', title: '2.4 Active Scanning with Nmap: SYN Scans, Service & OS Detection', duration: '37:50', type: 'video', isPreview: false },
          { id: 'sec-2-5', title: '2.5 Nmap Scripting Engine (NSE) for Automated Vulnerability Detection', duration: '34:10', type: 'video', isPreview: false },
          { id: 'sec-2-6', title: '2.6 Vulnerability Assessment with OpenVAS & Nessus Scanner', duration: '41:30', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Network Sniffing, MITM & Wireless Security',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-3-1', title: '3.1 Wireshark Fundamentals: Capturing and Filtering Packets', duration: '29:40', type: 'video', isPreview: false },
          { id: 'sec-3-2', title: '3.2 ARP Spoofing and Man-in-the-Middle (MITM) Attacks Explained', duration: '33:15', type: 'video', isPreview: false },
          { id: 'sec-3-3', title: '3.3 SSL/TLS Stripping and Certificate Inspection', duration: '27:50', type: 'video', isPreview: false },
          { id: 'sec-3-4', title: '3.4 Wireless Security: WEP, WPA2, WPA3 Protocol Weaknesses', duration: '30:20', type: 'video', isPreview: false },
          { id: 'sec-3-5', title: '3.5 Capturing 4-Way WPA Handshakes with Aircrack-ng', duration: '36:45', type: 'video', isPreview: false },
          { id: 'sec-3-6', title: '3.6 Defending Wireless Networks: Enterprise 802.1X & Rogue AP Detection', duration: '28:10', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Web Application Penetration Testing (OWASP Top 10)',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-4-1', title: '4.1 Intercepting HTTP Traffic with Burp Suite Proxy', duration: '31:20', type: 'video', isPreview: false },
          { id: 'sec-4-2', title: '4.2 SQL Injection (SQLi): In-Band, Blind, and Time-Based Exploits', duration: '44:10', type: 'video', isPreview: false },
          { id: 'sec-4-3', title: '4.3 Cross-Site Scripting (XSS): Stored, Reflected, and DOM-based', duration: '38:30', type: 'video', isPreview: false },
          { id: 'sec-4-4', title: '4.4 Cross-Site Request Forgery (CSRF) and Broken Authentication', duration: '32:45', type: 'video', isPreview: false },
          { id: 'sec-4-5', title: '4.5 Server-Side Request Forgery (SSRF) and File Inclusion (LFI/RFI)', duration: '36:15', type: 'video', isPreview: false },
          { id: 'sec-4-6', title: '4.6 Project: Performing a Full Security Audit on DVWA Target', duration: '50:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - System Exploitation & Privilege Escalation',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-5-1', title: '5.1 Metasploit Framework: Modules, Exploits, Payloads, and Encoders', duration: '35:40', type: 'video', isPreview: false },
          { id: 'sec-5-2', title: '5.2 Gaining Remote Shell Access: Bind Shell vs. Reverse Shell', duration: '31:10', type: 'video', isPreview: false },
          { id: 'sec-5-3', title: '5.3 Linux Privilege Escalation: SUID Binaries, Sudo, and Cronjobs', duration: '39:25', type: 'video', isPreview: false },
          { id: 'sec-5-4', title: '5.4 Windows Privilege Escalation: Unquoted Service Paths & Tokens', duration: '42:00', type: 'video', isPreview: false },
          { id: 'sec-5-5', title: '5.5 Password Cracking with John the Ripper and Hashcat GPU', duration: '33:15', type: 'video', isPreview: false },
          { id: 'sec-5-6', title: '5.6 Post-Exploitation Persistence and Evading Anti-Virus Scanners', duration: '37:50', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Defensive Security, Incident Response & Hardening',
        lectureCount: '6 lectures',
        topics: [
          { id: 'sec-6-1', title: '6.1 Enterprise Endpoint Detection & Response (EDR) Systems', duration: '28:20', type: 'video', isPreview: false },
          { id: 'sec-6-2', title: '6.2 Security Information & Event Management (SIEM) with Splunk', duration: '36:40', type: 'video', isPreview: false },
          { id: 'sec-6-3', title: '6.3 Linux Server Hardening: SSH Keys, Fail2ban, and UFW Firewall', duration: '32:15', type: 'video', isPreview: false },
          { id: 'sec-6-4', title: '6.4 Cryptography Essentials: Public Key Infrastructure (PKI) & AES', duration: '30:00', type: 'video', isPreview: false },
          { id: 'sec-6-5', title: '6.5 Writing Professional Penetration Testing Reports for Clients', duration: '26:50', type: 'video', isPreview: false },
          { id: 'sec-6-6', title: '6.6 Final Capture-The-Flag (CTF) Challenge & Certification', duration: '60:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'mobile-app-development': {
    id: 'mobile-app-development',
    courseName: 'Mobile App Development: Flutter & React Native',
    tagline: 'Build High-Performance Cross-Platform iOS and Android Apps from a Single Codebase',
    level: 'Beginner to Intermediate',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Cross-Platform Mobile Engineer',
    totalHours: '28 Hours',
    totalChapters: 6,
    totalLectures: 42,
    overview: 'Learn modern cross-platform mobile development with Flutter (Dart) and React Native. Build fluid 60fps mobile interfaces, integrate native device hardware (camera, geolocation, biometric authentication), manage state with Bloc and Redux, and publish your applications to the Apple App Store and Google Play Store.',
    whatYouWillLearn: [
      'Master Dart programming and the Flutter declarative widget tree',
      'Build responsive, pixel-perfect UIs for both iOS and Android platforms',
      'Handle state management efficiently using Provider, Riverpod, and Bloc',
      'Integrate device hardware: GPS location, Camera, Push Notifications, and Biometrics',
      'Connect mobile clients to cloud backends with Firebase and RESTful APIs',
      'Prepare release builds, sign certificates, and submit to App Store and Google Play'
    ],
    requirements: [
      'Basic programming knowledge in any language',
      'A computer with at least 8GB RAM (Mac required for iOS simulator, Android runs on all OS)'
    ],
    targetAudience: [
      'Web developers transitioning into mobile applications',
      'Entrepreneurs wanting to build native-feeling cross-platform prototypes'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Mobile Development & Flutter / Dart Essentials',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-1-1', title: '1.1 Cross-Platform Mobile Architecture Overview', duration: '16:40', type: 'video', isPreview: true },
          { id: 'mob-1-2', title: '1.2 Installing Flutter SDK, Android Studio, and Xcode', duration: '26:15', type: 'video', isPreview: true },
          { id: 'mob-1-3', title: '1.3 Dart Fundamentals: Strong Typing, Null Safety, and Futures', duration: '31:20', type: 'video', isPreview: false },
          { id: 'mob-1-4', title: '1.4 Everything is a Widget: Stateless vs. Stateful Widgets', duration: '28:50', type: 'video', isPreview: false },
          { id: 'mob-1-5', title: '1.5 Layout Widgets: Row, Column, Stack, and Container', duration: '25:30', type: 'video', isPreview: false },
          { id: 'mob-1-6', title: '1.6 Building Your First Interactive Mobile Counter App', duration: '22:00', type: 'video', isPreview: false },
          { id: 'mob-1-7', title: '1.7 Chapter 1 Dart Coding Exercises', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - UI Design, Theming & Navigation',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-2-1', title: '2.1 Material 3 Design and Cupertino iOS Widgets', duration: '27:10', type: 'video', isPreview: false },
          { id: 'mob-2-2', title: '2.2 Dynamic Light and Dark Mode Theming', duration: '24:45', type: 'video', isPreview: false },
          { id: 'mob-2-3', title: '2.3 Responsive Layouts for Mobile and Tablet Screens', duration: '30:20', type: 'video', isPreview: false },
          { id: 'mob-2-4', title: '2.4 ListView.builder and GridView for Infinite Scrolling', duration: '29:00', type: 'video', isPreview: false },
          { id: 'mob-2-5', title: '2.5 Navigator 2.0 and Declarative Routing with GoRouter', duration: '36:15', type: 'video', isPreview: false },
          { id: 'mob-2-6', title: '2.6 Custom Transitions, Hero Animations, and Gestures', duration: '32:40', type: 'video', isPreview: false },
          { id: 'mob-2-7', title: '2.7 Project: E-Commerce Product Catalog with Smooth Animations', duration: '44:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - State Management: Provider, Riverpod & Bloc',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-3-1', title: '3.1 The Problem with Prop Drilling and setState()', duration: '20:15', type: 'video', isPreview: false },
          { id: 'mob-3-2', title: '3.2 Provider & ChangeNotifier: Clean Reactive State', duration: '32:40', type: 'video', isPreview: false },
          { id: 'mob-3-3', title: '3.3 Riverpod: Compile-Safe State Management without Context', duration: '38:10', type: 'video', isPreview: false },
          { id: 'mob-3-4', title: '3.4 BLoC (Business Logic Component) Pattern Architecture', duration: '42:50', type: 'video', isPreview: false },
          { id: 'mob-3-5', title: '3.5 Events, States, and BlocBuilder / BlocListener', duration: '36:20', type: 'video', isPreview: false },
          { id: 'mob-3-6', title: '3.6 Persisting State Locally with Hydrated Bloc & Hive DB', duration: '30:15', type: 'video', isPreview: false },
          { id: 'mob-3-7', title: '3.7 State Management Milestone Challenge', duration: '25:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - REST APIs, Firebase & Offline Storage',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-4-1', title: '4.1 Asynchronous HTTP Requests with Dio & Retrofit', duration: '28:30', type: 'video', isPreview: false },
          { id: 'mob-4-2', title: '4.2 JSON Serialization and Deserialization with Freezed', duration: '33:10', type: 'video', isPreview: false },
          { id: 'mob-4-3', title: '4.3 Firebase Authentication: Email, Google, and Apple Sign-In', duration: '37:45', type: 'video', isPreview: false },
          { id: 'mob-4-4', title: '4.4 Realtime Firestore Database and Security Rules', duration: '34:20', type: 'video', isPreview: false },
          { id: 'mob-4-5', title: '4.5 Local SQL Storage with SQLite and Floor ORM', duration: '31:50', type: 'video', isPreview: false },
          { id: 'mob-4-6', title: '4.6 Offline-First Architecture & Network Connectivity Listeners', duration: '36:00', type: 'video', isPreview: false },
          { id: 'mob-4-7', title: '4.7 Project: Full Real-Time Chat Application with Firestore', duration: '48:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Native Hardware Integration & Features',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-5-1', title: '5.1 Camera Integration: Capturing Photos and Video Streams', duration: '29:40', type: 'video', isPreview: false },
          { id: 'mob-5-2', title: '5.2 Geolocator: Live GPS Tracking and Google Maps Flutter', duration: '38:15', type: 'video', isPreview: false },
          { id: 'mob-5-3', title: '5.3 Push Notifications with Firebase Cloud Messaging (FCM)', duration: '41:30', type: 'video', isPreview: false },
          { id: 'mob-5-4', title: '5.4 Biometric Security: FaceID and Fingerprint Authentication', duration: '25:20', type: 'video', isPreview: false },
          { id: 'mob-5-5', title: '5.5 In-App Purchases (IAP) with RevenueCat SDK', duration: '36:40', type: 'video', isPreview: false },
          { id: 'mob-5-6', title: '5.6 React Native Quick Comparison: When and How to Choose', duration: '24:10', type: 'video', isPreview: false },
          { id: 'mob-5-7', title: '5.7 Project: Ride-Sharing Driver & Passenger Tracking App', duration: '55:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Testing, App Store Submission & Publishing',
        lectureCount: '7 lectures',
        topics: [
          { id: 'mob-6-1', title: '6.1 Unit, Widget, and Integration Testing in Flutter', duration: '30:15', type: 'video', isPreview: false },
          { id: 'mob-6-2', title: '6.3 Automated CI/CD for Mobile with Fastlane', duration: '34:50', type: 'video', isPreview: false },
          { id: 'mob-6-3', title: '6.3 Generating Android App Bundle (AAB) & Keystore Signing', duration: '28:30', type: 'video', isPreview: false },
          { id: 'mob-6-4', title: '6.4 Apple Developer Account, Provisioning Profiles & TestFlight', duration: '37:10', type: 'video', isPreview: false },
          { id: 'mob-6-5', title: '6.5 Google Play Console Store Listing, Screenshots & Review', duration: '32:40', type: 'video', isPreview: false },
          { id: 'mob-6-6', title: '6.6 Final Capstone Project Showcase & Code Review', duration: '45:00', type: 'video', isPreview: false },
          { id: 'mob-6-7', title: '6.7 Graduation & Mobile Certification', duration: '15:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'ui-ux-design': {
    id: 'ui-ux-design',
    courseName: 'UI/UX Design: Figma Systems & Prototyping',
    tagline: 'Master Design Thinking, User Research, Auto-Layout, Design Systems, and High-Fidelity Interactive Prototypes',
    level: 'Beginner to Advanced',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified UI/UX Product Designer',
    totalHours: '20 Hours',
    totalChapters: 6,
    totalLectures: 30,
    overview: 'Transform from a beginner into a hireable product designer. Master user empathy, research methodologies, wireframing, typography, color theory, layout grids, auto-layout 5.0, variables, design tokens, responsive component libraries, and micro-interactions in Figma.',
    whatYouWillLearn: [
      'Master Figma from canvas navigation to advanced auto-layout and component variants',
      'Execute user research, empathy mapping, user personas, and journey flows',
      'Build comprehensive enterprise Design Systems with design tokens and variables',
      'Create high-fidelity interactive prototypes with smart animations and micro-interactions',
      'Conduct usability tests and iterate designs based on qualitative user feedback',
      'Prepare developer handoff files with precise spacing, tokens, and redline annotations'
    ],
    requirements: [
      'No previous design or drawing skills required',
      'A free Figma account and a modern web browser'
    ],
    targetAudience: [
      'Graphic designers transitioning to digital product and UI/UX design',
      'Developers wanting to create beautiful interfaces without relying on templates'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Design Thinking & User Experience Foundations',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-1-1', title: '1.1 The Difference Between UI and UX Explained', duration: '15:20', type: 'video', isPreview: true },
          { id: 'ui-1-2', title: '1.2 The 5 Stages of Design Thinking: Empathize to Test', duration: '22:15', type: 'video', isPreview: true },
          { id: 'ui-1-3', title: '1.3 Conducting User Interviews & Creating Actionable Personas', duration: '28:40', type: 'video', isPreview: false },
          { id: 'ui-1-4', title: '1.4 User Journey Mapping and Information Architecture', duration: '26:10', type: 'video', isPreview: false },
          { id: 'ui-1-5', title: '1.5 Chapter 1 Quiz: UX Principles & Psychology', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Visual Design Foundations: Typography & Color',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-2-1', title: '2.1 Visual Hierarchy: Guiding the Eye with Scale and Weight', duration: '24:00', type: 'video', isPreview: false },
          { id: 'ui-2-2', title: '2.2 Typography: Type Pairing, Modular Scale, and Leading/Kerning', duration: '29:30', type: 'video', isPreview: false },
          { id: 'ui-2-3', title: '2.3 Color Theory: 60-30-10 Rule, Contrast Ratios, and Accessibility (WCAG)', duration: '31:15', type: 'video', isPreview: false },
          { id: 'ui-2-4', title: '2.4 The 8pt Grid System and Spacing Consistency', duration: '27:40', type: 'video', isPreview: false },
          { id: 'ui-2-5', title: '2.5 Project: Designing an Elegant Landing Page Hero Section', duration: '38:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Figma Mastery: Auto-Layout & Component Variants',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-3-1', title: '3.1 Figma Interface, Frames, Groups, and Vector Tools', duration: '25:10', type: 'video', isPreview: false },
          { id: 'ui-3-2', title: '3.2 Auto-Layout Mastery: Hug, Fixed, and Fill Behaviors', duration: '36:45', type: 'video', isPreview: false },
          { id: 'ui-3-3', title: '3.3 Building Reusable Master Components and Instances', duration: '30:20', type: 'video', isPreview: false },
          { id: 'ui-3-4', title: '3.4 Component Properties: Booleans, Text Swaps, and Instance Swaps', duration: '34:10', type: 'video', isPreview: false },
          { id: 'ui-3-5', title: '3.5 Component Variants and Interactive Hover States', duration: '32:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Scalable Design Systems & Variables',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-4-1', title: '4.1 What Makes an Enterprise Design System?', duration: '23:30', type: 'video', isPreview: false },
          { id: 'ui-4-2', title: '4.2 Figma Variables: Colors, Spacing, Numbers, and Booleans', duration: '33:15', type: 'video', isPreview: false },
          { id: 'ui-4-3', title: '4.3 Implementing Multi-Theme Systems: Dark Mode and Brand Themes', duration: '37:40', type: 'video', isPreview: false },
          { id: 'ui-4-4', title: '4.4 Building a Complete UI Kit: Buttons, Inputs, Modals, and Cards', duration: '44:00', type: 'video', isPreview: false },
          { id: 'ui-4-5', title: '4.5 Project: Assembling a SaaS Dashboard Design System', duration: '48:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Advanced Prototyping & Micro-Animations',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-5-1', title: '5.1 Smart Animate Mechanics and Easing Curves', duration: '28:15', type: 'video', isPreview: false },
          { id: 'ui-5-2', title: '5.2 Interactive Overlays, Bottom Sheets, and Dropdowns', duration: '31:40', type: 'video', isPreview: false },
          { id: 'ui-5-3', title: '5.3 Conditional Logic and Expressions in Figma Prototyping', duration: '39:20', type: 'video', isPreview: false },
          { id: 'ui-5-4', title: '5.5 Micro-interactions: Like Buttons, Toggle Switches, and Progress Bars', duration: '34:10', type: 'video', isPreview: false },
          { id: 'ui-5-5', title: '5.5 Project: End-to-End Clickable Mobile Banking Prototype', duration: '50:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Developer Handoff, Usability Testing & Portfolio',
        lectureCount: '5 lectures',
        topics: [
          { id: 'ui-6-1', title: '6.1 Figma Dev Mode, Inspecting CSS/iOS/Android Code & Tokens', duration: '26:30', type: 'video', isPreview: false },
          { id: 'ui-6-2', title: '6.2 Writing Design Specifications and Edge-Case Documentation', duration: '24:10', type: 'video', isPreview: false },
          { id: 'ui-6-3', title: '6.3 Conducting Remote Usability Testing with Maze and Lookback', duration: '32:45', type: 'video', isPreview: false },
          { id: 'ui-6-4', title: '6.4 Structuring Case Studies that Land Product Design Interviews', duration: '38:00', type: 'video', isPreview: false },
          { id: 'ui-6-5', title: '6.5 Final Capstone Portfolio Defense & Certification', duration: '42:00', type: 'video', isPreview: false }
        ]
      }
    ]
  },

  'digital-marketing': {
    id: 'digital-marketing',
    courseName: 'Digital Marketing & Growth Hacking Mastery',
    tagline: 'Master Performance Ads (Google & Meta), SEO Ranking, Email Automation, and Data-Driven Funnels',
    level: 'All Levels',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    certificate: 'Certified Digital Growth Strategist',
    totalHours: '22 Hours',
    totalChapters: 6,
    totalLectures: 34,
    overview: 'Learn how to generate predictable traffic, qualified leads, and scalable revenue. Master modern performance advertising across Meta (Facebook & Instagram) and Google Search, organic SEO ranking techniques, conversion rate optimization (CRO), automated email nurturing, and growth analytics.',
    whatYouWillLearn: [
      'Plan and execute profitable advertising campaigns on Meta Ads Manager',
      'Dominate Google Search with Google Ads PPC and Keyword Bidding strategies',
      'Rank websites on Google Page 1 using On-Page, Off-Page, and Technical SEO',
      'Design high-converting sales funnels that maximize Customer Lifetime Value (LTV)',
      'Automate email drip campaigns and customer segmentation using Klaviyo and Mailchimp',
      'Measure CAC, ROAS, LTV, and churn using Google Analytics 4 (GA4)'
    ],
    requirements: [
      'No prior marketing experience required',
      'A computer with internet access'
    ],
    targetAudience: [
      'Entrepreneurs and business owners seeking customer acquisition channels',
      'Marketing professionals looking to transition from traditional to digital performance marketing'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Chapter 1 - Modern Digital Marketing Strategy & Funnels',
        lectureCount: '5 lectures',
        topics: [
          { id: 'dm-1-1', title: '1.1 The Customer Value Journey: Awareness to Advocacy', duration: '17:20', type: 'video', isPreview: true },
          { id: 'dm-1-2', title: '1.2 Defining Target Buyer Personas and UVP (Unique Value Proposition)', duration: '21:40', type: 'video', isPreview: true },
          { id: 'dm-1-3', title: '1.3 Unit Economics: CAC, ROAS, LTV, and Payback Periods', duration: '28:15', type: 'video', isPreview: false },
          { id: 'dm-1-4', title: '1.4 Mapping High-Converting Sales Funnels (Top, Middle, Bottom)', duration: '25:30', type: 'video', isPreview: false },
          { id: 'dm-1-5', title: '1.5 Chapter 1 Strategy Assessment Quiz', duration: '15:00', type: 'quiz', isPreview: false }
        ]
      },
      {
        chapterNumber: 2,
        title: 'Chapter 2 - Search Engine Optimization (SEO) Domination',
        lectureCount: '6 lectures',
        topics: [
          { id: 'dm-2-1', title: '2.1 How Search Engines Work: Crawling, Indexing, and Ranking', duration: '22:10', type: 'video', isPreview: false },
          { id: 'dm-2-2', title: '2.2 Keyword Research: Search Intent, Difficulty, and Ahrefs/Semrush', duration: '31:40', type: 'video', isPreview: false },
          { id: 'dm-2-3', title: '2.3 On-Page SEO: Title Tags, Meta Descriptions, Headings, and Content', duration: '29:15', type: 'video', isPreview: false },
          { id: 'dm-2-4', title: '2.4 Technical SEO: Core Web Vitals, Sitemaps, and Mobile Optimization', duration: '34:50', type: 'video', isPreview: false },
          { id: 'dm-2-5', title: '2.5 Link Building Strategies: Digital PR, Guest Posting, and Broken Links', duration: '32:00', type: 'video', isPreview: false },
          { id: 'dm-2-6', title: '2.6 Project: Conducting an End-to-End SEO Audit for a Real Website', duration: '42:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 3,
        title: 'Chapter 3 - Meta Ads Mastery (Facebook & Instagram)',
        lectureCount: '6 lectures',
        topics: [
          { id: 'dm-3-1', title: '3.1 Meta Business Suite Setup, Ad Accounts, and Meta Pixel', duration: '26:30', type: 'video', isPreview: false },
          { id: 'dm-3-2', title: '3.2 Campaign Structure: Objectives, Ad Sets, and Ad Creatives', duration: '30:15', type: 'video', isPreview: false },
          { id: 'dm-3-3', title: '3.3 Audience Targeting: Custom Audiences and Lookalike Audiences', duration: '35:40', type: 'video', isPreview: false },
          { id: 'dm-3-4', title: '3.4 High-Converting Ad Copywriting and Creative Hook Design', duration: '32:20', type: 'video', isPreview: false },
          { id: 'dm-3-5', title: '3.5 Budget Optimization (CBO vs. ABO) and Scaling Winners', duration: '38:10', type: 'video', isPreview: false },
          { id: 'dm-3-6', title: '3.6 Project: Launching a Live $50 Lead Generation Campaign', duration: '44:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 4,
        title: 'Chapter 4 - Google Ads Search & Performance Max',
        lectureCount: '6 lectures',
        topics: [
          { id: 'dm-4-1', title: '4.1 Google Ads Auction: Quality Score, Ad Rank, and Max CPC', duration: '27:45', type: 'video', isPreview: false },
          { id: 'dm-4-2', title: '4.2 Keyword Match Types: Broad, Phrase, Exact, and Negative Keywords', duration: '31:20', type: 'video', isPreview: false },
          { id: 'dm-4-3', title: '4.3 Crafting Responsive Search Ads with Compelling Assets/Extensions', duration: '29:50', type: 'video', isPreview: false },
          { id: 'dm-4-4', title: '4.4 Smart Bidding Strategies: Target CPA, Target ROAS, Max Conversions', duration: '36:15', type: 'video', isPreview: false },
          { id: 'dm-4-5', title: '4.5 Performance Max (PMax) Campaigns & Conversion Tracking', duration: '40:00', type: 'video', isPreview: false },
          { id: 'dm-4-6', title: '4.6 Project: Setting Up an E-Commerce Google Search Campaign', duration: '45:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 5,
        title: 'Chapter 5 - Email Marketing Automation & Retention',
        lectureCount: '5 lectures',
        topics: [
          { id: 'dm-5-1', title: '5.1 Email Deliverability, SPF, DKIM, and Domain Reputation', duration: '24:30', type: 'video', isPreview: false },
          { id: 'dm-5-2', title: '5.2 Designing Welcome Series Drip Funnels and Lead Magnets', duration: '31:00', type: 'video', isPreview: false },
          { id: 'dm-5-3', title: '5.3 Abandoned Cart and Post-Purchase Upsell Automations', duration: '34:15', type: 'video', isPreview: false },
          { id: 'dm-5-4', title: '5.4 Audience Segmentation by Purchase Behavior and Engagement', duration: '28:50', type: 'video', isPreview: false },
          { id: 'dm-5-5', title: '5.5 A/B Testing Subject Lines, Preview Text, and Send Times', duration: '26:00', type: 'video', isPreview: false }
        ]
      },
      {
        chapterNumber: 6,
        title: 'Chapter 6 - Google Analytics 4 (GA4) & Growth Attribution',
        lectureCount: '6 lectures',
        topics: [
          { id: 'dm-6-1', title: '6.1 Introduction to Event-Based Data Models in GA4', duration: '28:10', type: 'video', isPreview: false },
          { id: 'dm-6-2', title: '6.2 Setting Up Custom Events, Parameters, and Conversions', duration: '33:40', type: 'video', isPreview: false },
          { id: 'dm-6-3', title: '6.3 Attribution Modeling: First Click, Last Click, and Data-Driven', duration: '31:15', type: 'video', isPreview: false },
          { id: 'dm-6-4', title: '6.4 Funnel Exploration and User Path Analysis Reports', duration: '35:20', type: 'video', isPreview: false },
          { id: 'dm-6-5', title: '6.5 Building an Executive KPI Dashboard in Looker Studio', duration: '42:00', type: 'video', isPreview: false },
          { id: 'dm-6-6', title: '6.6 Final Growth Strategy Presentation & Certification', duration: '30:00', type: 'video', isPreview: false }
        ]
      }
    ]
  }
};
