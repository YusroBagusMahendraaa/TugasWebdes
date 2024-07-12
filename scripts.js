function belanjaSekarang() {
    const belanjaSection = document.getElementById('products');
    belanjaSection.scrollIntoView({ behavior: 'smooth' });
    alert("Ayo mulai berbelanja di Toko Sayur dan Rempah!");
}

function beliProduk(produk) {
    alert("Anda memilih untuk membeli " + produk + ". Tambahkan ke keranjang dan lanjutkan ke pembayaran.");
}

function kirimPesan(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert("Terima kasih, " + name + ". Pesan Anda telah terkirim.\n\nEmail: " + email + "\nPesan: " + message);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
