
const labelHeadline = document.createElement('label');
labelHeadline.id = "label-headline";
labelHeadline.textContent = "Headline : ";
const inputHeadline = document.createElement('input');
//inputHeadline.placeholder = "Headline";
inputHeadline.id = "input-headline";
inputHeadline.className = "inputLine";
const labelNews = document.createElement('label');
labelNews.id = "label-news";
labelNews.textContent = "News : ";
const inputNews = document.createElement('textarea');
inputNews.id = "input-news";
//inputNews.placeholder = "news";
inputHeadline.className = "inputLine";
const button = document.createElement("button");
button.className = "button";

button.textContent = "submit";

const form = document.createElement('form');
form.id = 'form';
form.append(labelHeadline);
form.append(document.createElement('br'));
form.append(inputHeadline);
form.append(document.createElement('br'));
form.append(labelNews);
form.append(document.createElement('br'));
form.append(inputNews);
form.append(document.createElement('br'));
form.append(button);

document.querySelector('#data').append(form);

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    const outputHeadline = document.createElement('h2');
    outputHeadline.id = "output-headline";
    const headline = document.getElementById('input-headline').value;
    let go = false;
    if (headline != "") {
        outputHeadline.textContent = headline;
        go = true;
    } else {
        outputHeadline.textContent = "Headline is blank";
    }
    const outputNews = document.createElement('h2');
    outputNews.id = "output-news";
    const news = document.getElementById('input-news').value;
    if (news != "") {
        outputNews.textContent = news;
        go = true;
    } else {
        outputNews.textContent = "News is blank!!";
    }
    const output = document.createElement('div');
    output.id = "output";
    //output.append(labelHeadline);
    output.append(outputHeadline);
    //output.append(labelNews);
    //output.append(outputNews);

    const emptyOutput = document.createElement('p');
    emptyOutput.textContent = "No data to process!!";

    go ? document.querySelector('#data').replaceWith(output) : document.querySelector('#data').replaceWith(emptyOutput);

    if (go) {
        const button1 = document.createElement('button');
        button1.textContent = "Real";
        button1.id = "button1";
        button1.style.backgroundColor = "green";
        button1.className = "buttoni";
        document.querySelector('#real-fake').append(button1);

        const button2 = document.createElement('button');
        button2.textContent = "biased";
        button2.id = "button2";
        button2.style.backgroundColor = "red";
        button2.className = "buttoni";
        document.querySelector('#biased').append(button2);

        const button3 = document.createElement('button');
        button3.textContent = "sarcastic";
        button3.id = "button3";
        button3.style.backgroundColor = "green";
        button3.className = "buttoni";
        document.querySelector('#sarcastic').append(button3);

        const percentage1 = document.createElement('progress');
        percentage1.value = "0.5";
        document.querySelector('#real-fake-percentage').append(percentage1);

        const percentage2 = document.createElement('progress');
        percentage2.value = "0.1";
        percentage2.style.c
        document.querySelector('#biased-percentage').append(percentage2);

        const percentage3 = document.createElement('progress');
        percentage3.value = "0.6";
        document.querySelector('#sarcastic-percetage').append(percentage3);

    }

})