<script>
    import BaseButton from '../BaseButton.vue'
    import BaseImage from '../BaseImage.vue';

    export default {
        components: { BaseButton, BaseImage },
        methods: {
            goto(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;

                window.scrollTo(0, top);
            }
        }
    }
</script>

<template>
    <section class="home section">
        <div class="container">
            <div class="row">
                <div class="home-konten padd-15">
                    <h3 class="hello">
                        Hallo, nama saya 
                        <span>Ridwan</span> 
                    </h3>
                    <h3 class="profesi">
                        Saya seorang 
                        <span>Mahasiswa Informatika</span>
                    </h3>
                    <p>Menjadi mahasiswa informatika itu mudah dan menyenangkan jika tidak ada eror pada saat memprogram</p>
                    <a @click="goto('project')">
                        <BaseButton name="Projek Saya"/>
                    </a>
                </div>
                <div class="home-hero padd-15">
                    <BaseImage src="Foto2.png" alt="home-hero"></BaseImage>
                </div>
            </div>
        </div>
    </section>
    <ProjectSection ref="project"></ProjectSection>
</template>

<style>
    .home {
        display: flex;
    }

    .home .row {
        align-items: center;
    }

    .home-hero img {
        margin: auto;
        border-radius: 5px;
        height: 350px;
        width: 300px;
    }

    .home .home-hero {
        flex: 0 0 40%;
        max-width: 40%;
        text-align: center;
        position: relative;
    }

    h3.hello {
        font-size: 28px;
        margin: 15px 0;
        color: var(--text-black-900);
    }

    h3.hello span {
        font-family: 'Clicker Script', cursive;
        font-size: 30px;
        font-weight: 700;
        color: red;
    }

    h3.profesi {
        font-size: 30px;
        margin: 15px 0;
        color: var(--text-black-900);
    }

    h3.profesi span {
        color: red
    }

    .home-konten p {
        margin-bottom: 70px;
        font-size: 20px;
        color: var(--text-black-700);
    }     

    .home-hero::after {
        content: '';
        position: absolute;
        height: 80px;
        width: 80px;
        border-bottom: 10px solid red;
        border-right: 10px solid red;
        right: -10px;
        bottom: -50px;
    }

    .home-hero::before {
        content: '';
        position: absolute;
        height: 80px;
        width: 80px;
        border-top: 10px solid red;
        border-left: 10px solid red;
        left: -10px;
        top: -50px;
    }
</style>