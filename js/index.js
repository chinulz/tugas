function sukses() {
	swal.fire('Halo Selamat Datang');
}

function login() {
	alert('Login Dulu');
	var usr = prompt("Masukan Username");
	var pass = prompt("Masukan Password");
	
	if (usr != 'admin') {
		swal.fire('Gagal', 'Username atau Password Salah!', 'error');
	} else if (pass != 'admin') {
		swal.fire('Gagal', 'Username atau Password Salah!', 'error');
	} else {
		swal.fire('Berhasil', 'Kamu Telah Login', 'success');
		var i = 0, text;
		text = "Selamat Anda Berhasil Login...";
		
		function typing() {
		if (i < text.length) {
		document.getElementById('text').innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, 350);
    		}
	} typing();
	document.getElementById('tombol').innerHTML = `Anda Sudah Login`;
	document.getElementById('tombol').innerHTML = `Berhasil`;
	window.setTimeout("window.close();", 13000)
	} 
}
