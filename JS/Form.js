document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const formData = new FormData(this);

    // 현재 스크롤 위치 저장
    const scrollPosition = window.scrollY;

    // fetch API로 폼 데이터 전송
    fetch('https://script.google.com/macros/s/AKfycbwBz4bi_53wfNBehmjsG-so5W32X9UmFuwIMfMEcO6rEStwnIVehuLlzcSSHDJ2dSSJvg/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // 전송 성공 시 메시지 표시
        document.getElementById('responseMessage').textContent = '전송이 완료되었습니다!';

        // 저장된 스크롤 위치로 이동
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        console.log(data); // 서버 응답 확인
    })
    .catch(error => {
        // 오류 발생 시 메시지 표시
        document.getElementById('responseMessage').textContent = '전송 중 오류가 발생했습니다.';
        console.error('Error:', error);
    });
});
