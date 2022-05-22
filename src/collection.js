const container = document.querySelector('.container')

export function collection(container) {
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    
    const title = document.createElement('h1');
    title.innerHTML = 'Types of Wine'
    title.setAttribute('class','wineTitle')

    container.appendChild(title)

    const list = document.createElement('ul')
    list.setAttribute('class','wineList')

    container.appendChild(list)

    const l1 = document.createElement('li')
    list.appendChild(l1);
    l1.innerHTML = 'Pinot Noir'

    const l2 = document.createElement('li')
    list.appendChild(l2);
    l2.innerHTML = 'Merlot'

    const l3 = document.createElement('li')
    list.appendChild(l3);
    l3.innerHTML = 'Cabernet Sauvignon' 

    const l4 = document.createElement('li')
    list.appendChild(l4);
    l4.innerHTML = 'Sauvignon Blanc' 

    const l5 = document.createElement('li')
    list.appendChild(l5);
    l5.innerHTML = 'Chardonnay' 



}