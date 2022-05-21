function cE(element) {
    
    return document.createElement(element)
}
function creation(element,classo) {
    const namo = document.createElement(element)
    namo.setAttribute('class',classo)
    return namo
}

const content = document.querySelector('#content')

export function initializeHomepage(content) {
    
    const contento = document.createElement('div')
    content.appendChild(contento)
    contento.setAttribute('class','contento')
    const footer = document.createElement('div')
    footer.setAttribute('class','footer')
    content.appendChild(footer)
    const navbar = cE('div')
    navbar.setAttribute('class','navbar')
    contento.appendChild(navbar)
    const w = cE('div')
    w.setAttribute('class','w')
    w.innerHTML = 'W'
    navbar.appendChild(w)
    const tabs = creation('div','tabs')
    navbar.appendChild(tabs)
    const home = creation('div','home');
    tabs.appendChild(home);
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id','home');
    homeBtn.innerHTML = 'Home';
    home.appendChild(homeBtn);

    const collection = creation('div','collection');
    tabs.appendChild(collection);
    const collectionBtn = document.createElement('button')
    collectionBtn.setAttribute('id','collection')
    collectionBtn.innerHTML = 'Collection'
    collection.appendChild(collectionBtn)

    const contact = creation('div','contact');
    tabs.appendChild(contact);
    const contactBtn = document.createElement('button')
    contactBtn.setAttribute('id','contact')
    contactBtn.innerHTML = 'Contact'
    contact.appendChild(contactBtn)

    const container = creation('div','container')
    contento.appendChild(container)

    const homepage = creation('div','homepage');
    container.appendChild(homepage)

    const sec1 = creation('div','sec1')
    const sec2 = creation('div','sec2')
    homepage.appendChild(sec1)
    homepage.appendChild(sec2)

    const sec1img = document.createElement('img');
    sec1img.setAttribute('src',"../assets/wineback.png")
    sec1img.setAttribute('id','winebackground')
    sec1.appendChild(sec1img)

    const homeText = creation('div','home-text');
    homeText.innerHTML = 'Welcome to the Wine World'
    sec1.appendChild(homeText)

    const para = document.createElement('p')
    sec2.appendChild(para)

    const aa = document.createElement('a')
    aa.setAttribute('href',"https://github.com/tylerdurden-code")
    aa.setAttribute('target',"_blank")
    footer.appendChild(aa)

    const footerImg = document.createElement('img')
    footerImg.setAttribute('src',"../assets/github.png")
    footerImg.setAttribute('id',"githubpng");
    aa.appendChild(footerImg)
    
    
}