<script setup>

    import TheInfo from '../TheInfo.vue';
    import EmailSection from '../TheEmail.vue';

</script>

<template>
    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>Hubungi Saya</h2>
                </div>    
            </div>
            <div class="row">
                <TheInfo class="padd-15"></TheInfo>
                <EmailSection></EmailSection>
            </div>
        </div>
    </section>
</template>
