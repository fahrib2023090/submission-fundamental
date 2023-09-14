import '../component/club-list.js';
import '../component/kategori-list.js';
import '../component/search-bar.js';
import $ from "jquery";
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = $('search-bar')[0]
  const clubListElement = $('club-list')[0];

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    clubListElement.clubs = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};


export default main;
