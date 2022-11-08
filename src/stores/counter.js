// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'image', 
  state: () => ({
    data: [
      {
        slug: 'p1',
        title: 'GithubUserApp',
        img: 'Github.png',
        kategori: 'Aplikasi Android',
        keperluan: 'Submission Dicoding',
        tanggal: '15 September 2021',
        link: 'https://github.com/Ridwanfnd19/GithubuserApp',
        deskripsi: 'Progman ini dibuat menggunakan bahasa kotlin untuk memenuhi syarat kelulusan dari dicoding.' + 
        'Intinya progam ini akan menampilkan sebuah list data user dari github. Data diperoleh melalui API'
      },
      {
        slug: 'p2',
        title: 'Rock Paper Scissors',
        img: 'ml.png',
        kategori: 'Machine Learning',
        keperluan: 'Submission Dicoding',
        tanggal: '08 Juli 2022',
        link: 'https://github.com/Ridwanfnd19/Rockpaperscissors-Classification',
        deskripsi: 'Progman ini dibuat menggunakan bahasa python untuk memenuhi syarat kelulusan dari dicoding.' + 
        'Progam ini akan mengidentifikasi apakah gambar termasuk ke dalam batu, gunting, atau kertas'
      },
      {
        slug: 'p3',
        title: 'Restoran',
        img: 'restoran.png',
        kategori: 'Progam',
        keperluan: 'Tugas Kuliah',
        tanggal: '11 Juni 2022',
        link: 'https://github.com/Ridwanfnd19/Restoran',
        deskripsi: 'Progman ini dibuat menggunakan bahasa c++ untuk memenuhi tugas kuliah.' + 
        'Progam ini dibuat dengan menerapkan konsep pemograman berorientasi objek'
      },
      {
        slug: 'p4',
        title: 'Kalkulator',
        img: 'kalkulator.png',
        kategori: 'Progam',
        keperluan: 'Tugas Kuliah',
        tanggal: '1 Oktober 2022',
        link: 'https://github.com/Ridwanfnd19/Kalkulator',
        deskripsi: 'Progman ini dibuat menggunakan nodejs untuk memenuhi tugas kuliah.' + 
        'Progam ini dapat dijalankan menggunakan terminal'
      }
    ]
  }),
  actions: {},
  getters: {
    getData: ({ data }) => data,
    getDetail: ({ data }) => {
      return (slug) => data.find((image) => image.slug == slug)
    }
  }
})

