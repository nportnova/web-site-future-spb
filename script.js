const navItems = document.querySelectorAll('.navigation_n, .navigation_n1');

const blockIds = ['block1', 'block2', 'block3', 'block4', 'block5'];
const blocks = [];

blockIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        blocks.push(element);

    } else {
        console.error(`Блок НЕ НАЙДЕН: ${id} — проверь ID в HTML!`);
    }
});




function switchBlock(index) {
    

    blocks.forEach(block => {
        if (block) {
            block.style.display = 'none';
        }
    });

    if (blocks[index]) {
        blocks[index].style.display = 'block';

    } else {
        console.error(` Блок ${index + 1} не существует!`);

    }
}


navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => {
            nav.classList.remove('navigation_n1');
            nav.classList.add('navigation_n');
        });
        this.classList.remove('navigation_n');
        this.classList.add('navigation_n1');
        

        switchBlock(index);
    });
});


blocks.forEach(block => {
    if (block) block.style.display = 'none';
});

if (blocks.length > 0 && blocks[0]) {
    blocks[0].style.display = 'block';
} else {
    console.error(' Нет ни одного блока!');
}