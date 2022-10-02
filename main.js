const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.fa-solid.fa-bars');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isasideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isasideClosed){
       shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isasideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isasideClosed){
       shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
   
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoaside(){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
}

const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
}

   shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Tres Leches',
    price: 5,
    image: 'https://cdn.colombia.com/gastronomia/2014/02/17/postre-de-mani-haiti-3442.jpg',
});
productList.push({
    name: 'mágico de mantequilla',
    price: 4,
    image: 'https://cdn7.kiwilimon.com/recetaimagen/30883/34919.jpg',
});
productList.push({
    name: 'Limon y merengue',
    price: 3,
    image: 'https://4.bp.blogspot.com/-VyrIP6mKVfg/WTVPEo0JnTI/AAAAAAAApGU/Dt4qi6BVpWYLsz7FVBzRidvMdE4RxT9UACLcB/s1600/Pastel-de-naranja-merengue.jpg',
});
productList.push({
    name: 'Chiffon',
    price: 7,
    image: 'https://www.diariamenteali.com/medias/Receta-de-Chiffon-angel-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxNTc3NzN8aW1hZ2UvanBlZ3xoN2UvaDUwLzkwNzQyMTk3NzgwNzgvUmVjZXRhLWRlLUNoaWZmb24tYW5nZWxfMTkwMFd4NTAwSHxiYTk0OWNmNTJmZmE0OWU5MWJkMjZiMGY3ZDIxN2I5MTAxMjVmYzc2ZmY0MWQxMDUwNWQwODIxMDdmMDJkMmIx',
});
productList.push({
    name: 'Bizcocho de plátano',
    price: 4,
    image: 'https://i.blogs.es/63b786/foto-14-13.-bizcocho-de-platano/450_1000.jpg',
});
productList.push({
    name: 'Pay de mango',
    price: 5,
    image: 'https://crehana-blog.imgix.net/media/filer_public/a0/5a/a05a2743-34ea-4885-9f64-476aae17091b/rellenos-pasteles-queso-crema.jpg?auto=format&q=50',
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('i');
        productImgCart.setAttribute('class', 'fa-solid fa-cart-plus');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

