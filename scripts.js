<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aptitude & Reasoning Practice</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Aptitude & Reasoning Practice</h1>
        <nav>
            <ul>
                <li><a href="#quantitative">Quantitative Aptitude</a></li>
                <li><a href="#logical">Logical Reasoning</a></li>
                <li><a href="#verbal">Verbal Reasoning</a></li>
                <li><a href="#data-interpretation">Data Interpretation</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="quantitative">
            <h2>Quantitative Aptitude</h2>
            <p>Click on the topics to practice.</p>
            <div class="topics">
                <button onclick="showQuestion('profitLoss')">Profit & Loss</button>
                <button onclick="showQuestion('timeWork')">Time & Work</button>
                <button onclick="showQuestion('simpleInterest')">Simple Interest</button>
            </div>
            <div id="questionContainer" class="question-container">
                <!-- Questions will appear here -->
            </div>
        </section>

        <section id="logical">
            <h2>Logical Reasoning</h2>
            <p>Click on the topics to practice.</p>
            <div class="topics">
                <button onclick="showReasoningQuestion('seatingArrangement')">Seating Arrangement</button>
                <button onclick="showReasoningQuestion('sudoku')">Sudoku</button>
                <button onclick="showReasoningQuestion('codingDecoding')">Coding Decoding</button>
            </div>
            <div id="reasoningContainer" class="reasoning-container">
                <!-- Reasoning questions will appear here -->
            </div>
        </section>

        <section id="verbal">
            <h2>Verbal Reasoning</h2>
            <p>Click on the topics to practice.</p>
            <div class="topics">
                <button onclick="showVerbalQuestion('synonyms')">Synonyms</button>
                <button onclick="showVerbalQuestion('antonyms')">Antonyms</button>
                <button onclick="showVerbalQuestion('sentenceCorrection')">Sentence Correction</button>
            </div>
            <div id="verbalContainer" class="verbal-container">
                <!-- Verbal reasoning questions will appear here -->
            </div>
        </section>

        <section id="data-interpretation">
            <h2>Data Interpretation</h2>
            <p>Click on the topics to practice.</p>
            <div class="topics">
                <button onclick="showDataQuestion('barChart')">Bar Chart</button>
                <button onclick="showDataQuestion('pieChart')">Pie Chart</button>
                <button onclick="showDataQuestion('lineGraph')">Line Graph</button>
            </div>
            <div id="dataContainer" class="data-container">
                <!-- Data Interpretation questions will appear here -->
            </div>
        </section>

        <section id="about">
            <h2>About</h2>
            <p>This website helps you practice aptitude and reasoning questions to enhance your problem-solving skills for competitive exams.</p>
        </section>
    </main>

    <footer>
        <p>© 2024 Aptitude & Reasoning Practice. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
