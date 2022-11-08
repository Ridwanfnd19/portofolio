<script>
    import { useCounterStore } from '../../stores/counter.js';
    import { mapState } from 'pinia';
    import BaseImage from '../BaseImage.vue';

    export default {
    name: "DetailSection",
    computed: {
        ...mapState(useCounterStore, ["getDetail"]),
        detail() {
            return this.getDetail(this.$route.params.id);
        }
    },
    components: { BaseImage }
}
</script>

<template>
    <section class="detail section">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>{{ detail.title }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="gambar padd-15">
                    <BaseImage :src="detail.img" :alt="detail.title"></BaseImage>
                </div>
                <div class="info padd-15">
                    <div class="keterangan">
                        <h3>Informasi Project</h3>
                        <ul>
                            <li><strong>Kategori</strong>: {{ detail.kategori }}</li>
                            <li><strong>Keperluan</strong>: {{ detail.keperluan }}</li>
                            <li><strong>Tanggal</strong>: {{ detail.tanggal }}</li>
                            <li><strong>Link Projek</strong>: <a :href="detail.link" target="_blank">{{ detail.link }}</a></li>
                        </ul>
                    </div>
                    <div class="deskripsi padd-15">
                        <h2>Deskripsi</h2>
                        <p>
                            {{ detail.deskripsi }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .gambar img {
        width: 100%;
        border: 6px solid rgba(69, 80, 91, 0.8);
        border-radius: 10px;
    }

    .detail .keterangan {
        background: var(--text-black-700);
        padding: 30px;
        box-shadow: 0px 0 10px rgba(69, 80, 91, 0.8);
    }

    .detail .keterangan h3 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
        padding-bottom: 20px;
        color: red;
        border-bottom: 1px solid var(--bg-black-50);
    }

    .detail .keterangan a {
        color: black;
    }

    .detail .keterangan ul {
        list-style: none;
        padding: 0;
        font-size: 15px;
    }

    .detail .keterangan ul li+li {
        margin-top: 10px;
    }

    .detail .deskripsi {
        padding-top: 20px;
    }

    .detail .deskripsi h2 {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 10px;
        color: red;
    }

    .detail .deskripsi p {
        padding: 0;
        color: var(--text-black-700);
    }
</style>