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
                question: "Model warna yang digunakan untuk standar cetak (printing) adalah...",
                options: ["RGB", "CMYK", "HSL", "HEX"],
                correct: 1
            }
        ]
    }
};