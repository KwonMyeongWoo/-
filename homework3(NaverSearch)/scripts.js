const SearchMessege = document.querySelector('.search-messege');
const SearchButton = document.querySelector('.naver-search');

const search = () => {
  const SearchKey = SearchMessege.value;
  location.href = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=${SearchKey}`;
};

SearchMessege.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') search();
});
SearchButton.addEventListener('click', search);
