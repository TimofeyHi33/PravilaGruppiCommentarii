// Функция для замены 10 случайных символов в текстовом узле при клике
function replaceTenCharsOnClick() {
  const mysteriousChars = '%)(Й№;*)(_)"№;()_№;1010';

  const getRandomMysteriousChar = () => {
    return mysteriousChars[Math.floor(Math.random() * mysteriousChars.length)];
  };

  const replaceRandomChars = (textNode) => {
    const currentText = textNode.nodeValue.trim();

    if (currentText.length === 0) return;

    let newText = '';
    for (let i = 0; i < currentText.length; i++) {
      if (Math.random() < 0.005) {
        newText += getRandomMysteriousChar();
      } else {
        newText += currentText[i];
      }
    }

    textNode.nodeValue = newText;
  };

  const allTextNodes = [];

  const collectTextNodes = (node) => {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
      allTextNodes.push(node);
    } else {
      node.childNodes.forEach(collectTextNodes);
    }
  };

  collectTextNodes(document.body);

  if (allTextNodes.length > 0) {
    const randomNode = allTextNodes[Math.floor(Math.random() * allTextNodes.length)];
    replaceRandomChars(randomNode);
  }
}

// Добавление обработчика клика на всю страницу
document.addEventListener('click', function() {
  for (let i = 0; i < 10; i++) {
    replaceTenCharsOnClick();
  }
});
