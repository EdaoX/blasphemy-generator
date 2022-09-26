(function(holder, generateButton, listenButton, copyButton){

    const blasphemyGenerator = require('./src/blasphemy-generator');
    let blasphemy;

    function animateButton(e) 
    {
        e.preventDefault;
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);
    };

    function speak() 
    {
        if(blasphemy){
            var msg = new SpeechSynthesisUtterance();
            msg.text = blasphemy;
            msg.lang = 'it-IT';
            window.speechSynthesis.speak(msg);
        }
    }

    function copyToClipboard()
    {
        navigator.clipboard.writeText(blasphemy);
    }

    function generateBlasphemy()
    {
        blasphemy = blasphemyGenerator.generate();
        holder.innerText = blasphemy;
    }

    window.addEventListener('load', generateBlasphemy);

    generateButton.addEventListener('click', generateBlasphemy);
    generateButton.addEventListener('click', animateButton, false);
    listenButton.addEventListener('click', speak);
    copyButton.addEventListener('click', copyToClipboard);

})(document.getElementById('blasphemy-holder'), 
    document.getElementById('generate'), 
    document.getElementById('listen'),
    document.getElementById('copy')
);
