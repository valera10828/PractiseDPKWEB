# Проект "Природа" - Содержимое файлов

## forest.html
```html
<body>
  <div class="forest-content">
    <h1>Леса - лёгкие планеты</h1>
    <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Лесной пейзаж">
    
    <p>Леса играют важнейшую роль в поддержании жизни на Земле. Они регулируют климат, очищают воздух и воду, предотвращают эрозию почвы и являются домом для большого разнообразия видов животных и растений.</p>
    
    <div class="fact-box">
      <h3>Интересные факты о лесах:</h3>
      <ul>
        <li>Леса покрывают около 30% земной поверхности</li>
        <li>Более 80% наземных видов животных, растений и насекомых обитают в лесах</li>
        <li>Одно большое дерево может обеспечить дневную норму кислорода для 4 человек</li>
      </ul>
    </div>
    
    <p>Несмотря на их важность, каждый год вырубается около 13 миллионов гектаров леса. Сохранение лесов - одна из важнейших экологических задач современности.</p>
    
    <a href="left.html" class="back-button">Вернуться к категориям</a>
  </div>
</body>
```

## index.html
Примечание: `index.html` использует фреймы, поэтому у него нет традиционного содержимого тега `<body>` для отображения контента напрямую. Вместо этого он определяет структуру фреймов.
```html
<frameset rows="40%,*">
  <frame src="top.html" name="topFrame" scrolling="auto">
  <frameset cols="50%,50%">
    <frame src="left.html" name="leftFrame" scrolling="auto">
    <frame src="right.html" name="rightFrame" scrolling="auto">
  </frameset>
</frameset>
```

## left.html
```html
<body>
  <h2>Лесные экосистемы</h2>
  <ul class="nature-list">
    <li onclick="showImage('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 'Хвойный лес')">Хвойные леса</li>
    <li onclick="showImage('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 'Лиственный лес')">Лиственные леса</li>
    <li onclick="showImage('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 'Тропический лес')">Тропические леса</li>
  </ul>
  
  <div class="image-container" id="imageContainer"></div>
  
  <script>
    function showImage(src, alt) {
      document.getElementById('imageContainer').innerHTML = `<h3>${alt}</h3><img src="${src}" alt="${alt}">`;
    }
  </script>
</body>
```

## ocean.html
```html
<body>
  <div class="ocean-content">
    <h1>Океаны - водный мир Земли</h1>
    <img src="https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80" alt="Океанский пейзаж">
    
    <p>Океаны покрывают более 70% поверхности Земли и содержат около 97% всей воды на планете. Они играют ключевую роль в формировании климата, круговороте воды и поддержании жизни на Земле.</p>
    
    <div class="ocean-list">
      <h3>Пять океанов Земли:</h3>
      <ol>
        <li>Тихий океан - самый большой и глубокий</li>
        <li>Атлантический океан</li>
        <li>Индийский океан</li>
        <li>Южный океан (Антарктический)</li>
        <li>Северный Ледовитый океан - самый маленький</li>
      </ol>
    </div>
    
    <p>Океаны являются домом для миллионов видов растений и животных, от микроскопического планктона до огромных китов. Они также производят более половины кислорода на Земле благодаря морским водорослям и фитопланктону.</p>
    
    <a href="right.html" class="back-button">Вернуться к категориям</a>
  </div>
</body>
```

## right.html
```html
<body>
  <h2>Водные пространства</h2>
  
  <div class="water-container">
    <div class="water-type" onclick="showWaterInfo('ocean')">Океаны</div>
    <div class="water-type" onclick="showWaterInfo('sea')">Моря</div>
    <div class="water-type" onclick="showWaterInfo('river')">Реки</div>
    <div class="water-type" onclick="showWaterInfo('lake')">Озера</div>
  </div>
  
  <div id="waterInfo" class="description"></div>
  
  <script>
    function showWaterInfo(type) {
      let info = '';
      let image = '';
      
      switch(type) {
        case 'ocean':
          image = 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
          info = 'Океаны покрывают более 70% поверхности Земли и содержат около 97% всей воды на планете.';
          break;
        case 'sea':
          image = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
          info = 'Моря - это части океанов, частично окруженные сушей. Они обычно меньше и менее глубокие, чем океаны.';
          break;
        case 'river':
          image = 'https://images.unsplash.com/photo-1506355683710-bd071c0a5828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
          info = 'Реки - естественные водные потоки, текущие в выработанном ими углублении.';
          break;
        case 'lake':
          image = 'https://th.bing.com/th/id/R.b965783490105b5d5a3d4c0c39ad2a34?rik=TmlFUOxbG9QRPg&pid=ImgRaw&r=0';
          info = 'Озера - это естественные водоемы, заполненные в пределах озерной чаши водой и не имеющие непосредственного соединения с морем.';
          break;
      }
      
      document.getElementById('waterInfo').innerHTML = `
        <h3>${type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <img src="${image}" alt="${type}">
        <p>${info}</p>
      `;
    }
  </script>
</body>
```

## top.html
```html
<body>
  <header>
    <h1>Красота природы</h1>
  </header>
  <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Природный пейзаж" class="main-image">
  <p>Природа - удивительный мир, полный красоты и гармонии. Изучайте её разнообразие в наших разделах.</p>
  <button onclick="parent.leftFrame.location.href='forest.html'">Изучить леса</button>
  <button onclick="parent.rightFrame.location.href='ocean.html'">Изучить океаны</button>
</body>
```
