// Kumpulan data soal dibagi berdasarkan kategori
export const quizData = {
    tkj: {
        title: "Teknik Komputer & Jaringan",
        description: "Uji wawasan jaringan, hardware, dan protokol.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`,
        // Class tailwind utuh agar terbaca oleh compiler
        theme: {
            borderHover: "hover:border-indigo-500 dark:hover:border-indigo-400",
            headerBg: "bg-indigo-600 dark:bg-indigo-700",
            iconColor: "text-indigo-500 dark:text-indigo-400"
        },
        questions: [
            {
                question: "Perangkat keras jaringan yang berfungsi untuk menghubungkan beberapa jaringan lokal (LAN) ke jaringan yang lebih luas (WAN) adalah...",
                options: ["Switch", "Hub", "Router", "Access Point"],
                correct: 2 
            },
            {
                question: "Berapa panjang bit dari sebuah alamat IPv4?",
                options: ["16 bit", "32 bit", "64 bit", "128 bit"],
                correct: 1
            },
            {
                question: "Protokol standar yang digunakan untuk mengirimkan email adalah...",
                options: ["HTTP", "FTP", "POP3", "SMTP"],
                correct: 3
            },
            {
                question: "Kepanjangan dari LAN adalah...",
                options: ["Local Area Network", "Large Area Network", "Local Access Network", "Line Area Network"],
                correct: 0
            },
            {
                question: "Kabel yang umum digunakan pada jaringan Ethernet adalah...",
                options: ["HDMI", "UTP", "VGA", "SATA"],
                correct: 1
            },
            {
                question: "Urutan warna kabel UTP standar T568B yang benar adalah...",
                options: [
                    "Putih Hijau – Hijau – Putih Orange – Biru – Putih Biru – Orange – Putih Coklat – Coklat",
                    "Putih Orange – Orange – Putih Hijau – Biru – Putih Biru – Hijau – Putih Coklat – Coklat",
                    "Orange – Putih Orange – Hijau – Putih Hijau – Biru – Putih Biru – Coklat – Putih Coklat",
                    "Putih Biru – Biru – Putih Orange – Orange – Putih Hijau – Hijau – Putih Coklat – Coklat"
                ],
                correct: 1
            },
            {
                question: "IP address 192.168.1.10 termasuk dalam kelas...",
                options: ["A", "B", "C", "D"],
                correct: 2
            },
            {
                question: "Fungsi utama router adalah...",
                options: [
                    "Menyimpan file",
                    "Menghubungkan jaringan yang berbeda",
                    "Mengubah sinyal digital menjadi analog saja",
                    "Mencetak dokumen"
                ],
                correct: 1
            },
            {
                question: "Protokol yang digunakan untuk menerjemahkan nama domain menjadi IP address adalah...",
                options: ["DHCP", "FTP", "HTTP", "DNS"],
                correct: 3
            },
            {
                question: "Protokol yang digunakan untuk memberikan IP address secara otomatis kepada client adalah...",
                options: ["DNS", "DHCP", "FTP", "SSH"],
                correct: 1
            },
            {
                question: "Pada model OSI, IP address bekerja pada layer...",
                options: ["Physical", "Data Link", "Network", "Transport"],
                correct: 2
            },
            {
                question: "MAC Address bekerja pada layer...",
                options: ["Physical", "Session", "Network", "Data Link"],
                correct: 3  
            },
            {
                question: "Perintah Linux yang digunakan untuk melihat isi direktori adalah...",
                options: ["cd", "ls", "mkdir", "rm"],
                correct: 1
            },
            {
                question: "Perintah Linux untuk berpindah direktori adalah...",
                options: ["cd", "pwd", "cp", "mv"],
                correct: 0
            },
            {
                question: "Fungsi perintah ping adalah...",
                options: [
                    "Menghapus konfigurasi jaringan",
                    "Menguji konektivitas jaringan",
                    "Mengubah IP address",
                    "Membuat akun pengguna"
                ],
                correct: 1
            },
            {
                question: "Dalam MikroTik, aplikasi yang umum digunakan untuk melakukan konfigurasi router secara GUI adalah...",
                options: ["Winbox", "PuTTY", "Notepad", "FileZilla"],
                correct: 0
            },
            {
                question: "Fungsi NAT pada router adalah...",
                options: [
                    "Mengubah nama komputer",
                    "Menerjemahkan alamat IP tertentu, terutama private dan public",
                    "Menghapus MAC Address",
                    "Mempercepat prosesor"
                ],
                correct: 1
            },
            {
                question: "Jika komputer mendapatkan IP 169.254.x.x secara otomatis, salah satu kemungkinan penyebabnya adalah...",
                options: [
                    "DHCP server tidak dapat dihubungi",
                    "DNS terlalu cepat",
                    "Kabel HDMI rusak",
                    "RAM terlalu besar"
                ],
                correct: 0 
            },
            {
                question: "Perangkat yang digunakan untuk memperluas jangkauan sinyal Wi-Fi adalah...",
                options: ["Repeater", "Switch", "Patch panel", "NIC"],
                correct: 0
            },
            {
                question: "Topologi jaringan yang menggunakan satu perangkat pusat sebagai penghubung seluruh komputer disebut...",
                options: ["Bus", "Ring", "Mesh", "Star"],
                correct: 3
            },
            {
                question: "Port default yang digunakan oleh SSH adalah...",
                options: ["21", "22", "23", "80"],
                correct: 1
            },
            {
                question: "Alamat IP yang digunakan untuk menguji koneksi ke komputer itu sendiri adalah...",
                options: [
                    "127.0.0.1",
                    "192.168.1.1",
                    "255.255.255.0",
                    "8.8.8.8"
                ],
                correct: 0
            },
            {
                question: "Perangkat yang berfungsi menghubungkan jaringan lokal dengan jaringan internet adalah...",
                options: [
                    "Router",
                    "Hub",
                    "NIC",
                    "Repeater"
                ],
                correct: 0
            },
            {
                question: "Subnet mask default untuk jaringan kelas C adalah...",
                options: [
                    "255.0.0.0",
                    "255.255.0.0",
                    "255.255.255.0",
                    "255.255.255.255"
                ],
                correct: 2
            },
            {
                question: "Jika komputer dapat melakukan ping 8.8.8.8, tetapi tidak dapat membuka google.com, kemungkinan masalah terdapat pada...",
                options: ["DNS", "RAM", "Monitor", "Keyboard"],
                correct: 0
            }
        ]
    },
    rpl: {
        title: "Rekayasa Perangkat Lunak",
        description: "Tes logika pemrograman dan basis data.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
        theme: {
            borderHover: "hover:border-emerald-500 dark:hover:border-emerald-400",
            headerBg: "bg-emerald-600 dark:bg-emerald-700",
            iconColor: "text-emerald-500 dark:text-emerald-400"
        },
        questions: [
            {
                question: "Paradigma pemrograman yang berfokus pada objek adalah...",
                options: ["Procedural", "Functional", "OOP", "Declarative"],
                correct: 2 
            },
            {
                question: "Bahasa kueri yang digunakan untuk memanipulasi database relasional adalah...",
                options: ["HTML", "SQL", "Python", "CSS"],
                correct: 1
            },
            {
                question: "Apa kepanjangan dari RPL?",
                options: [
                    "Rekayasa Perangkat Lunak",
                    "Rekayasa Pemrograman Linux",
                    "Rancangan Perangkat Lunak",
                    "Rekayasa Program Lokal"
                ],
                correct: 0
            },
            {
                question: "Bahasa pemrograman yang umum digunakan untuk membuat halaman web interaktif adalah...",
                options: [
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "SQL"
                ],
                correct: 0
            },
            {
                question: "HTML digunakan untuk...",
                options: [
                    "Mengatur struktur halaman web",
                    "Mengatur database",
                    "Mengatur koneksi jaringan",
                    "Mengompres file"
                ],
                correct: 0
            },
            {
                question: "CSS digunakan untuk...",
                options: [
                    "Membuat database",
                    "Mengatur tampilan dan desain halaman web",
                    "Menjalankan server",
                    "Mengelola sistem operasi"
                ],
                correct: 1
            },
            {
                question: "Bahasa yang digunakan untuk mengelola database relasional adalah...",
                options: [
                    "HTML",
                    "CSS",
                    "SQL",
                    "JavaScript"
                ],
                correct: 2
            },
            {
                question: "Apa fungsi utama dari Git?",
                options: [
                    "Mengedit gambar",
                    "Mengelola versi kode program",
                    "Membuat desain UI",
                    "Menjalankan sistem operasi"
                ],
                correct: 1
            },
            {
                question: "GitHub biasanya digunakan untuk...",
                options: [
                    "Menyimpan dan mengelola repository kode secara online",
                    "Membuat koneksi Wi-Fi",
                    "Mengedit video",
                    "Menginstal driver"
                ],
                correct: 0
            },
            {
                question: "Dalam pemrograman, variabel digunakan untuk...",
                options: [
                    "Menyimpan nilai atau data",
                    "Menghapus program",
                    "Menghubungkan komputer",
                    "Mengubah sistem operasi"
                ],
                correct: 0
            },
            {
                question: "Struktur percabangan yang digunakan untuk menjalankan kode berdasarkan suatu kondisi adalah...",
                options: [
                    "if",
                    "loop",
                    "array",
                    "function"
                ],
                correct: 0
            },
            {
                question: "Perulangan dalam pemrograman digunakan untuk...",
                options: [
                    "Menjalankan kode berulang kali",
                    "Menghapus variabel",
                    "Membuat database",
                    "Mengubah tipe data"
                ],
                correct: 0
            },
            {
                question: "Manakah yang merupakan contoh bahasa pemrograman?",
                options: [
                    "Python",
                    "HTML",
                    "CSS",
                    "JSON"
                ],
                correct: 0
            },
            {
                question: "Apa fungsi dari database dalam sebuah aplikasi?",
                options: [
                    "Menyimpan dan mengelola data",
                    "Mengatur warna halaman",
                    "Membuat kabel jaringan",
                    "Mengatur resolusi monitor"
                ],
                correct: 0
            },
            {
                question: "Framework yang populer digunakan untuk pengembangan aplikasi web menggunakan PHP adalah...",
                options: [
                    "Laravel",
                    "React",
                    "Django",
                    "Flutter"
                ],
                correct: 0
            },
            {
                question: "Django merupakan framework yang menggunakan bahasa...",
                options: [
                    "PHP",
                    "Java",
                    "Python",
                    "C++"
                ],
                correct: 2
            },
            {
                question: "Apa yang dimaksud dengan debugging?",
                options: [
                    "Proses mencari dan memperbaiki kesalahan pada program",
                    "Proses menghapus seluruh program",
                    "Proses membuat desain aplikasi",
                    "Proses menginstal sistem operasi"
                ],
                correct: 0
            },
            {
                question: "Dalam OOP, istilah class digunakan untuk...",
                options: [
                    "Mendefinisikan cetak biru atau struktur objek",
                    "Menghapus objek",
                    "Menghubungkan database",
                    "Menjalankan server"
                ],
                correct: 0
            },
            {
                question: "API merupakan singkatan dari...",
                options: [
                    "Application Programming Interface",
                    "Application Program Internet",
                    "Advanced Programming Internet",
                    "Application Processing Input"
                ],
                correct: 0
            },
            {
                question: "JSON biasanya digunakan untuk...",
                options: [
                    "Pertukaran dan penyimpanan data terstruktur",
                    "Mengatur tampilan halaman",
                    "Mengedit gambar",
                    "Mengatur jaringan LAN"
                ],
                correct: 0
            },
            {
                question: "Apa fungsi utama dari frontend dalam pengembangan aplikasi web?",
                options: [
                    "Mengatur tampilan dan interaksi yang dilihat pengguna",
                    "Mengatur perangkat keras komputer",
                    "Mengelola kabel jaringan",
                    "Mengatur BIOS"
                ],
                correct: 0
            },
            {
                question: "Tipe data yang digunakan untuk menyimpan nilai benar atau salah adalah...",
                options: [
                    "String",
                    "Boolean",
                    "Integer",
                    "Float"
                ],
                correct: 1
            },
            {
                question: "Apa fungsi utama dari sebuah function dalam pemrograman?",
                options: [
                    "Mengelompokkan kode agar dapat digunakan untuk tugas tertentu",
                    "Menghapus seluruh variabel",
                    "Mengubah komputer menjadi server",
                    "Menghapus database"
                ],
                correct: 0
            },
            {
                question: "Kesalahan dalam program yang menyebabkan program tidak berjalan sesuai yang diharapkan disebut...",
                options: [
                    "Bug",
                    "Framework",
                    "Compiler",
                    "Repository"
                ],
                correct: 0
            },
            {
                question: "Backend pada aplikasi web bertanggung jawab terhadap...",
                options: [
                    "Logika aplikasi, server, dan pengolahan data",
                    "Warna dan ukuran font",
                    "Desain logo",
                    "Resolusi layar pengguna"
                ],
                correct: 0
            }
        ]
    },
    multimedia: {
        title: "Desain & Multimedia",
        description: "Uji pengetahuan desain grafis dan video.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
        theme: {
            borderHover: "hover:border-rose-500 dark:hover:border-rose-400",
            headerBg: "bg-rose-600 dark:bg-rose-700",
            iconColor: "text-rose-500 dark:text-rose-400"
        },
        questions: [
            {
                question: "Format gambar yang mendukung transparansi (alpha channel) dengan kualitas tinggi tanpa kompresi yang merusak adalah...",
                options: ["JPG", "GIF", "PNG", "BMP"],
                correct: 2
            },
            {
                question: "Alat yang digunakan untuk mengambil gambar atau video disebut...",
                options: [
                    "Kamera",
                    "Mixer",
                    "Speaker",
                    "Proyektor"
                ],
                correct: 0
            },
            {
                question: "Timeline pada software editing video digunakan untuk...",
                options: [
                    "Mengatur dan menyusun klip berdasarkan waktu",
                    "Mengatur koneksi internet",
                    "Membuat database",
                    "Mengubah sistem operasi"
                ],
                correct: 0
            },
            {
                question: "Teknik menggabungkan beberapa elemen visual menjadi satu gambar atau adegan disebut...",
                options: [
                    "Compositing",
                    "Rendering",
                    "Encoding",
                    "Cropping"
                ],
                correct: 0
            },
            {
                question: "Model warna yang digunakan untuk standar cetak (printing) adalah...",
                options: ["RGB", "CMYK", "HSL", "HEX"],
                correct: 1
            },
            {
                question: "Apa kepanjangan dari MM dalam bidang keahlian SMK?",
                options: [
                    "Multimedia",
                    "Media Modern",
                    "Manajemen Multimedia",
                    "Media Management"
                ],
                correct: 0
            },
            {
                question: "Software yang umum digunakan untuk mengedit foto adalah...",
                options: [
                    "Adobe Photoshop",
                    "VLC Media Player",
                    "Google Chrome",
                    "WinRAR"
                ],
                correct: 0
            },
            {
                question: "Adobe Premiere Pro biasanya digunakan untuk...",
                options: [
                    "Mengedit video",
                    "Membuat database",
                    "Mengedit kode program",
                    "Mengelola jaringan"
                ],
                correct: 0
            },
            {
                question: "Software yang sering digunakan untuk membuat animasi 3D adalah...",
                options: [
                    "Blender",
                    "Notepad",
                    "Winamp",
                    "FileZilla"
                ],
                correct: 0
            },
            {
                question: "Format file gambar yang mendukung transparansi adalah...",
                options: [
                    "JPG",
                    "PNG",
                    "MP3",
                    "MP4"
                ],
                correct: 1
            },
            {
                question: "Format gambar yang umumnya menggunakan kompresi lossy adalah...",
                options: [
                    "PNG",
                    "SVG",
                    "JPG",
                    "GIF"
                ],
                correct: 2
            },
            {
                question: "Dalam desain grafis, RGB merupakan singkatan dari...",
                options: [
                    "Red, Green, Blue",
                    "Red, Gray, Black",
                    "Red, Gold, Blue",
                    "Rose, Green, Black"
                ],
                correct: 0
            },
            {
                question: "Mode warna CMYK umumnya digunakan untuk...",
                options: [
                    "Tampilan layar",
                    "Desain untuk kebutuhan cetak",
                    "Editing audio",
                    "Pembuatan animasi"
                ],
                correct: 1
            },
            {
                question: "Resolusi gambar menunjukkan...",
                options: [
                    "Jumlah piksel pada gambar",
                    "Ukuran file audio",
                    "Durasi video",
                    "Kecepatan internet"
                ],
                correct: 0
            },
            {
                question: "FPS pada video merupakan singkatan dari...",
                options: [
                    "Frame Per Second",
                    "File Per Second",
                    "Frame Pixel Size",
                    "Fast Picture System"
                ],
                correct: 0
            },
            {
                question: "Semakin tinggi nilai FPS pada video, secara umum gerakan video akan terlihat...",
                options: [
                    "Lebih patah-patah",
                    "Lebih halus",
                    "Lebih gelap",
                    "Lebih kecil"
                ],
                correct: 1
            },
            {
                question: "Format file audio yang menggunakan kompresi lossy adalah...",
                options: [
                    "WAV",
                    "FLAC",
                    "MP3",
                    "AIFF"
                ],
                correct: 2
            },
            {
                question: "Mikrofon digunakan untuk...",
                options: [
                    "Merekam suara",
                    "Mengambil gambar",
                    "Mengedit video",
                    "Mencetak dokumen"
                ],
                correct: 0
            },
            {
                question: "Storyboard dalam pembuatan video berfungsi untuk...",
                options: [
                    "Merencanakan urutan adegan secara visual",
                    "Mengatur koneksi internet",
                    "Mengompres file",
                    "Mengedit database"
                ],
                correct: 0
            },
            {
                question: "Apa yang dimaksud dengan tipografi?",
                options: [
                    "Teknik dan seni mengatur teks atau huruf",
                    "Teknik merekam suara",
                    "Teknik mengedit video",
                    "Teknik membuat animasi 3D"
                ],
                correct: 0
            },
            {
                question: "Dalam fotografi, ISO berhubungan dengan...",
                options: [
                    "Sensitivitas sensor terhadap cahaya",
                    "Kecepatan internet",
                    "Ukuran layar",
                    "Format file video"
                ],
                correct: 0
            },
            {
                question: "Shutter speed pada kamera berfungsi untuk mengatur...",
                options: [
                    "Lama sensor menerima cahaya",
                    "Ukuran file gambar",
                    "Resolusi monitor",
                    "Warna gambar"
                ],
                correct: 0
            },
            {
                question: "Adobe After Effects umumnya digunakan untuk...",
                options: [
                    "Motion graphics dan visual effects",
                    "Membuat database",
                    "Mengelola jaringan",
                    "Mengedit dokumen teks"
                ],
                correct: 0
            },
            {
                question: "Dalam desain grafis, vector memiliki kelebihan yaitu...",
                options: [
                    "Dapat diperbesar tanpa kehilangan ketajaman secara signifikan",
                    "Selalu memiliki ukuran file terbesar",
                    "Hanya dapat digunakan untuk video",
                    "Tidak dapat menggunakan warna"
                ],
                correct: 0
            },
            {
                question: "Komposisi dalam fotografi yang membagi frame menjadi sembilan bagian dengan dua garis horizontal dan dua garis vertikal disebut...",
                options: [
                    "Rule of Thirds",
                    "Golden Ratio",
                    "Center Composition",
                    "Leading Frame"
                ],
                correct: 0
            }
        ]
    }
};