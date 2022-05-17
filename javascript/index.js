function createNav(){
    let navbar1 = document.querySelector(".navbar");

    navbar1.innerHTML = `
    <div class="nav">
    <div class="logo">Clothing</div>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search Brand, Product">
            <button class="search-btn">Search</button>
            <a href="" class="login">Login/Signup
                <ul class="login-dropdown">
                    <li class="login-dropdown-item">Login</li>
                    <li class="login-dropdown-item">Signup</li>
                </ul>
            </a>
        </div>
    </div>
</div>
    `;
} 

function createList(){
    document.querySelector(".list").innerHTML = `<a class="list-item" href="index.html"><span class="list-main-item">home</span>
    <ul class="list-child">
        <li>company</li>
        <li>information</li>
        <li>customer care</li>
        <li>contact us</li>
        <li>about us</li>
    </ul>
</a>
<a class="list-item" href="">
    <span class="list-main-item">men</span>
    <ul class="list-child">
        <li>apparels</li>
        <li>shirts</li>
        <li>t-shirts</li>
        <li>trousers</li>
        <li>innerwear</li>
        <li>sportswear</li>
    </ul>
</a>
<a class="list-item" href=""><span class="list-main-item">women</span>
    <ul class="list-child">
        <li>apparels</li>
        <li>shirts</li>
        <li>t-shirts</li>
        <li>trousers</li>
        <li>innerwear</li>
        <li>sportswear</li>
    </ul>
</a>
<a class="list-item" href=""><span class="list-main-item">kids</span>
    <ul class="list-child">
        <li>apparels</li>
        <li>shirts</li>
        <li>t-shirts</li>
        <li>trousers</li>
        <li>innerwear</li>
        <li>sportswear</li>
    </ul>
</a>
<a class="list-item" href=""><span class="list-main-item">accessories</span>
    <ul class="list-child">
        <li>socks</li>
        <li>caps</li>
        <li>bags</li>
        <li>belts</li>
        <li>shoes</li>
        <li>perfumes</li>
    </ul>
</a>`;
}

createNav();
createList();








//<div class="nav">
// <div class="logo">Clothing</div>
// <div class="nav-items">
//     <div class="search">
//         <input type="text" class="search-box" placeholder="Search Brand, Product">
//         <button class="search-btn">Search</button>
//     </div>
// </div>
// </div>