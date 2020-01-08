const groceriesTagStyle = {
  backgroundColor: 'rgba(0, 122, 126, 0.5)',
  border: '2px solid rgba(0, 122, 126, 0.1)'
}

const petrolTagStyle = {
  backgroundColor: 'rgba(255, 129, 0, 0.5)',
  border: '2px solid rgba(255, 129, 0, 0.1)'
}

const foodTagStyle = {
  backgroundColor: 'rgba(255, 0, 0, 0.5)',
  border: '2px solid rgba(255, 0, 0, 0.1)'
}
 
const taxTagStyle = {
  backgroundColor: 'rgba(198, 87, 255, 0.5)',
  border: '2px solid rgba(198, 87, 255, 0.1)'
}

const defaultTagStyle = {
  backgroundColor: 'rgba(136, 136, 136, 0.5)',
  border: '2px solid rgba(136, 136, 136, 0.1)'
}

const getTagStyle = (tagName) => {
  const tag = tagName.toLowerCase();
  switch (tag) {
    case 'petrol':
      return petrolTagStyle;
    case 'groceries':
      return groceriesTagStyle;
    case 'food':
      return foodTagStyle;
    case 'tax': 
      return taxTagStyle;
    default:
      return defaultTagStyle;
  }
}

export default getTagStyle;