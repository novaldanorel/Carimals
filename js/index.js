 // Fungsi untuk menampilkan footer setelah animasi selesai
 function showFooter() {
  document.getElementById('footer').style.display = 'block';
}

// Memanggil fungsi showFooter saat animasi selesai
document.querySelector('.img').addEventListener('animationend', showFooter);

// Pengalihan halaman setelah beberapa detik
setTimeout(function() {
  window.location.href = "...";
}, 4000);
