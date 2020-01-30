var questions = [
    {
        id: 1, 
        question: "We have a variable, defined as $string, which is a string 200 characters long, and we want to display only 40 characters in a snippet. What approach would you take to achieve this?",
        answer: "echo $string[39];"
    },
    {
        id: 2, 
        question: "$string contains letters and numbers, the numbers aren't relevant to us, so we want to remove all of the numbers from the string. What approach would you take to achieve this?",
        answer: "$string = preg_replace('/[0-9]+/', '', $string);"
    },
    {
        id: 3, 
        question: "$string has been encrypted using a basic encryption method. We know that all occurrences of the letters 'a, r, d' were replaced with 'c, m, e' respectively; we need to replace these letters with the respective letters. What approach would you take to achieve this?",
        answer: `<pre>
        foreach ($string as $letter) {
            switch ($letter) {
                case 'a':
                    $letter = 'c';
                    break;
                case 'r':
                    $letter = 'm';
                    break;
                case 'd':
                    $letter = 'e';
            } 
        }
        </pre>`
    },
    {
        id: 4, 
        question: "We know that $string is a url, what we need to know is the domain name used in the url. What approach would you take to achieve this?",
        answer: "echo parse_url($string)['host'];"
    },
    {
        id: 5, 
        question: "Lastly, there were 2 parameters passed in the url. We need to know the name and value of the 2 parameters. What approach would you take to achieve this?",
        answer: `var_dump($_GET);`
    }
];


$(document).ready(() => {
    $('.carousel').slick({
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        pauseOnHover: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    swipe: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            }
        ]
    });

    // Generating list of questions with buttons and hidden answers
    questions.forEach((item) => {
        $('#questions-list').append(`
        <li>
            <div class="question">
                <div class="question-title"><i>${item.question}</i></div>
                <button class="reveal-button" question-id="${item.id}">Reveal</button>
            </div>
            <div class="answer" question-id="${item.id}"
                <p>${item.answer}</p>
            </div>
        </li>
        `);
    });

    // Listener for button's on click to show the answer
    $('button.reveal-button').click((event) => {
        $(`.answer[question-id="${event.target.getAttribute('question-id')}"]`).css('display', 'block');
    });
    
});