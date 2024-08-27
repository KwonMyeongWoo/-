const $messege = document.querySelector('messege');
const $search = document.querySelector('.search');

const search = () => {
  const keyword = $messege.value;
  location.href = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=${keyword}`;
};

$messege.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    search();
  }
});
$search.addEventListener('click', search);
