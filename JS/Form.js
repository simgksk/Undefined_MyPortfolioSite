document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const scrollPosition = window.scrollY;

    fetch('https://script.google.com/macros/s/AKfycbzdpMPXTzGNcqtjS1yvUzzTLQatSAcFZGuP1567QgFwbM9XgY-UxbAjBRROuXzTSqGu9A/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = '전송이 완료되었습니다!';

        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        console.log(data);
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = '전송 중 오류가 발생했습니다.';
        console.error('Error:', error);
    });
});
