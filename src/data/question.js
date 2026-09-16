// Kumpulan data soal dibagi berdasarkan kategori
export const quizData = {
    tkj: {
        title: "Teknik Komputer & Jaringan",
        description: "Uji wawasan jaringan, hardware, dan protokol.",
        icon: "🖥️",
        color: "indigo",
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
            }
        ]
    },
    rpl: {
        title: "Rekayasa Perangkat Lunak",
        description: "Tes logika pemrograman dan basis data.",
        icon: "💻",
        color: "emerald",
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
            }
        ]
    },
    multimedia: {
        title: "Desain & Multimedia",
        description: "Uji pengetahuan desain grafis dan video.",
        icon: "🎨",
        color: "rose",
        questions: [
            {
                question: "Format gambar yang mendukung transparansi (alpha channel) dengan kualitas tinggi tanpa kompresi yang merusak adalah...",
                options: ["JPG", "GIF", "PNG", "BMP"],
                correct: 2
            },
            {
                question: "Model warna yang digunakan untuk standar cetak (printing) adalah...",
                options: ["RGB", "CMYK", "HSL", "HEX"],
                correct: 1
            }
        ]
    }
};