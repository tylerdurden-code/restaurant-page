const container = document.querySelector('.container')

export function contact(container) {
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    
    const para = document.createElement('p');
    para.setAttribute('class','paragraph')

    para.innerHTML = "17480 E Smith Road Ext,Palmer, Alaska, 234509992"

    container.appendChild(para)
}