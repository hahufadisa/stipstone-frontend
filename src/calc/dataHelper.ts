// Получаем все элементы с классом "stone" - это и есть наши товары/плитки
const allStones = Array.from(document.querySelectorAll('.stone'));

// Получаем базовый URL сайта для преобразования относительных путей
const baseUrl = window.location.origin; // https://xn--80akjflh1k.xn--p1ai

// Преобразуем каждый элемент в объект с данными
const productData = allStones.map(stone => {
    // Основные данные
    const price = stone.getAttribute('data-price');
    const nameElement = stone.querySelector('.name');
    const name = nameElement ? nameElement.textContent.trim() : 'No name';
    
    // Ищем изображение напрямую - img с классом .img внутри .stone
    let image = 'No image';
    const imgElement = stone.querySelector('img.img');
    if (imgElement && imgElement.src) {
        // Делаем URL абсолютным
        let imgSrc = imgElement.src;
        if (imgSrc && !imgSrc.startsWith('http')) {
            imgSrc = imgSrc.replace(/^\//, '');
            image = baseUrl + '/' + imgSrc;
        } else {
            image = imgSrc;
        }
    }
    
    // Базовые data-атрибуты
    const id = stone.getAttribute('data-id');
    const category = stone.getAttribute('data-category');
    
    // Данные фильтров - только цвета и фактура
    const colors = stone.getAttribute('data-filter-colors');
    const faktura = stone.getAttribute('data-filter-faktura');
    
    return {
        id: id,
        name: name,
        price: price,
        image: image,
        category: category,
        colors: colors,
        faktura: faktura
    };
});

// Выводим результат в консоль
console.log('Найдено товаров:', productData.length);
console.table(productData);

// Показываем пример первого товара с изображением
if (productData.length > 0) {
    console.log('Первый товар с изображением:', productData[0]);
}

// Копируем в формате как в примере
console.log('Чтобы скопировать данные JSON, выполните:');
console.log('copy(JSON.stringify(productData, null, 2));');




// Функция для скачивания с задержкой
async function downloadAllImages() {
    const allStones = Array.from(document.querySelectorAll('.stone'));
    const baseUrl = window.location.origin;
    
    console.log('Найдено товаров:', allStones.length);
    
    for (let i = 0; i < allStones.length; i++) {
        const stone = allStones[i];
        const imgElement = stone.querySelector('img.img');
        
        if (imgElement && imgElement.src) {
            // Формируем URL
            let imageUrl = imgElement.src;
            if (!imageUrl.startsWith('http')) {
                imageUrl = baseUrl + '/' + imageUrl.replace(/^\//, '');
            }
            
            // Извлекаем и декодируем название файла
            const urlParts = imageUrl.split('/');
            let filename = urlParts[urlParts.length - 1];
            filename = decodeURIComponent(filename); // Декодируем %20 и другие спецсимволы
            
            // Заменяем все не-буквенно-цифровые символы на подчеркивания
            filename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
            
            // Убираем множественные подчеркивания
            filename = filename.replace(/_{2,}/g, '_');
            
            // Скачиваем с задержкой 500мс между файлами
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Создаем скрытую ссылку для скачивания
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log(`Скачано ${i + 1}/${allStones.length}: ${filename}`);
        }
    }
    
    console.log('Все изображения скачаны!');
}

// Запускаем скачивание
downloadAllImages();