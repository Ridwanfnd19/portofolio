<script setup>
import BaseButton from '../BaseButton.vue';

</script>

<template>
    <section class="about section">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>Tentang Saya</h2>
                </div>
            </div>
            <div class="row">
                <div class="about-konten padd-15">
                    <div class="row">
                        <div class="about-text padd-15">
                            <h3>Saya Ridwan Efendi seorang <span>Mahasiswa Informatika</span></h3>
                            <p>
                                Saya seorang mahasiswa ilmu komputer tahun ke-3 di Universitas
                                Pembangunan Nasional "Veteran" Jawa Timur yang memiliki minat di bidang
                                teknologi maupun pemograman. Minat tersebut membuat saya semangat dan
                                senang selama mempelajari hal-hal yang diajarkan di ilmu komputer, sepertWeb Developer, AI, dll. Saya suka menghabiskan waktu luang dengan
                                mengikuti bootcamp dan belajar untuk menambah pengetahuan serta
                                keterampilan saya dalam membuat sebuah progam. 
                            </p>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="personal-info padd-15">
                            <div class="row">
                                <div class="info-item padd-15">
                                    <p>Tanggal Lahir : <span>19 Maret 2001</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p>Umur : <span>21</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p>Github : <span>Ridwan19</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p>Email : <span>Ridwanefendi1903@gmail.com</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p>Telepon : <span>089097345890</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p>Kota : <span>Kediri, Jawa Timur</span></p>
                                </div>
                            </div>
                            <div class="row padd-15">
                                <BaseButton name="Download CV"></BaseButton>
                            </div>
                        </div>
                        <div class="pelatihan padd-15">
                            <h3 class="title">Pelatihan</h3>
                                <div class="pelatihan-item">
                                    <h4>Android Developers</h4>
                                    <h5>2021</h5>
                                    <p><em>Dicoding</em></p>
                                </div>
                                <div class="pelatihan-item">
                                    <h4>Mechine Learning</h4>
                                    <h5>2022</h5>
                                    <p><em>Dicoding</em></p>
                                </div>
                            <div class="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
</template>

<style>
    .about-text {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 15px;
    }

    .about-text h3 {
        font-size: 24px;
        margin-bottom: 15px;
        font-weight: 700;
        color: var(--text-black-900);
    }

    .about-text h3 span {
        color: red;
    }

    .about-text p {
        font-size: 16px;
        line-height: 25px;
        color: var(--text-black-700);
    }

    .info-item {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .info-item p {
        font-weight: 700;
        padding: 10px 0;
        font-size: 16px;
        color: var(--text-black-900);
        border-bottom: 1px solid var(--bg-black-50);
    }

    .info-item p span {
        font-weight: 400;
        color: var(--text-black-700);
        margin-left: 4px;
        display: inline-block;
    }

    .personal-info .btn {
        margin-top: 40px;
    }

    .pelatihan p {
        color: var(--text-black-700);
    }

    .pelatihan .title {
        font-size: 26px;
        font-weight: 700;
        /* margin-top: 20px; */
        margin-bottom: 20px;
        color: var(--text-black-900);
    }

    .pelatihan .pelatihan-item h4 {
        line-height: 18px;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        /* font-family: "Poppins", sans-serif; */
        color: red;
        margin-bottom: 10px;
    }

    .pelatihan .pelatihan-item h5 {
        /* font-size: 16px; */
        background: var(--bg-black-50);
        padding: 5px 15px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .pelatihan .pelatihan-item:last-child {
        padding-bottom: 0;
    }

    .pelatihan .pelatihan-item::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        left: -9px;
        top: 0;
        background: #fff;
        border: 2px solid red;
    }
</style>