let remainingAttempts = 2;

function checkAnswer(answer) {
    if (answer === 'yes') {
        document.getElementById('response').innerText = 'Hvala mala slatka čupava 🥰';
    } else if (answer === 'no') {
        if (remainingAttempts > 0) {
            document.getElementById('response').innerText = 'Pitaću te još ' + remainingAttempts + ' puta.';
            remainingAttempts--;
        } else {
            document.getElementById('response').innerText = 'Zao mi je, više ne pitam.';
        }
    }
}
