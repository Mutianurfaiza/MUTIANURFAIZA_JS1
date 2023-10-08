// Deklarasi variabel
let nilai = 75;
let huruf;

// Menggunakan if, else if, else untuk menentukan grade berdasarkan nilai
if (nilai >= 90) 
{
    huruf = 'A';
} 
else if (nilai >= 80) 
{
    huruf = 'B';
} 
else if (nilai >= 70) 
{
    huruf = 'C';
} 
else if (nilai >= 60) 
{
    huruf = 'D';
} 
else 
{
    huruf = 'E';
}

console.log(`Nilai ${nilai} mendapatkan grade ${huruf}`);

// Menggunakan switch case untuk menampilkan hari berdasarkan angka
let angkaHari = 3;
let namaHari;

switch (angkaHari) 
{
    case 1:
        namaHari = 'Senin';
        break;
    case 2:
        namaHari = 'Selasa';
        break;
    case 3:
        namaHari = 'Rabu';
        break;
    case 4:
        namaHari = 'Kamis';
        break;
    case 5:
        namaHari = 'Jumat';
        break;
    default:
        namaHari = 'Hari tidak valid';
}

console.log(`Angka ${angkaHari} mewakili hari ${namaHari}`);

// Menggunakan for statement untuk menampilkan angka dari 1 hingga 5
console.log('Menggunakan for statement:');
for (let i = 1; i <= 5; i++) 
{
    console.log(i);
}

// Menggunakan while loop untuk menghitung mundur dari 5 ke 1
console.log('Menggunakan while loop:');
let counter = 5;
while (counter >= 1) 
{
    console.log(counter);
    counter--;
}

// Menggunakan do while loop untuk menghitung mundur dari 5 ke 1
console.log('Menggunakan do while loop:');
counter = 5;
do 
{
    console.log(counter);
    counter--;
} while (counter >= 1);

// Mendefinisikan sebuah fungsi
function tambah(a, b) 
{
    return a + b;
}

// Menggunakan fungsi untuk menjumlahkan dua angka
let hasilTambah = tambah(5, 3);
console.log(`Hasil penjumlahan 5 + 3 adalah ${hasilTambah}`);
