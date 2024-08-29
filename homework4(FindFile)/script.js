const input = document.querySelector('#file-test');

input.addEventListener('input', (value) => {
  const FileValue = value.target.files[0].type.split('/')[0];

  if (FileValue == 'image') {
    alert('이미지 파일 입니다.');
  } else if (FileValue == 'text') {
    alert('텍스트 파일 입니다.');
  } else {
    alert('알수없는 파일 입니다.');
  }
});
