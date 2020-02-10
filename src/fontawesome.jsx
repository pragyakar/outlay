import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faChartLine, faCog, faPlus, faTimesCircle, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const registerFonts = () => {
  library.add(
    faHome, 
    faChartLine, 
    faCog,
    faPlus,
    faTimesCircle,
    faArrowAltCircleRight
  );
}

export default registerFonts;

