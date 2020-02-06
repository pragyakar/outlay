import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faChartLine, faCog, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const registerFonts = () => {
  library.add(
    faHome, 
    faChartLine, 
    faCog,
    faPlus,
    faTimesCircle
  );
}

export default registerFonts;

