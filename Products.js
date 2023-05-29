let products = ["mercedes", "audi", "ford", "lamborghini"];


function showProducts() {
    if (products.length === 0) {
        console.log("Không có sản phẩm để hiển thị");
    } else {
        console.log(`Danh sách sản phẩm (${products.length}):`);
        products.forEach((product) => console.log(`- ${product}`));
    }
}


function addProduct() {
    let newProduct;
    do {
        newProduct = prompt("Nhập tên sản phẩm mới:");
    } while (newProduct.length < 5);
    products.push(newProduct);
    console.log("Đã thêm sản phẩm mới vào danh sách!");
    showProducts();
}


function removeProduct() {
    let productToRemove = prompt("Nhập tên sản phẩm cần xóa:");
    let index = products.indexOf(productToRemove);
    if (index === -1) {
        console.log("Không tìm thấy sản phẩm cần xóa!");
    } else {
        products.splice(index, 1);
        console.log("Đã xóa sản phẩm khỏi danh sách!");
        showProducts();
    }
}


function updateProduct() {
    let productToUpdate = prompt("Nhập tên sản phẩm cần cập nhật:");
    let index = products.indexOf(productToUpdate);
    if (index === -1) {
        console.log("Không tìm thấy sản phẩm cần cập nhật!");
    } else {
        let newProductName;
        do {
            newProductName = prompt("Nhập tên mới cho sản phẩm:");
        } while (newProductName.length < 5);
        products[index] = newProductName;
        console.log("Đã cập nhật sản phẩm!");
        showProducts();
    }
}


function removeAllProducts() {
    products = [];
    console.log("Đã xóa toàn bộ sản phẩm!");
    showProducts();
}

showProducts();
addProduct();
removeProduct();
updateProduct();