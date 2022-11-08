<script setup>
    import InfoItem from './item/InfoItem.vue';
</script>

<template>
    <div class="info">
        <InfoItem>
            <template #icon>
                <fa-icon icon="fa fa-location-dot" fixed-width></fa-icon>
            </template>
            <template #heading>Location</template>
            <p>Ds Bogem, Kediri, Jawa Timur</p>
        </InfoItem>

        <InfoItem>
            <template #icon>
                <fa-icon icon="fa fa-envelope" fixed-width></fa-icon>
            </template>
            <template #heading>Email</template>
            <p>Ridwanefendi1903@gmail.com</p>
        </InfoItem>

        <InfoItem>
            <template #icon>
                <fa-icon icon="fa fa-mobile" fixed-width></fa-icon>
            </template>
            <template #heading>Phone</template>
            <p>089097345890</p>
        </InfoItem>
    </div>
</template>

<style>
    .info {
        flex: 0 0 30%;
        max-width: 30%;
        /* background: #fff; */
    }

    .info i {
        font-size: 22px;
        color: red;
        float: left;
        width: 46px;
        height: 46px;
        background: var(--bg-black-50);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
    }

    .info h4 {
        padding: 0 0 0 60px;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 5px;
        color: var(--text-black-900);
    }

    .info p {
        padding: 0 0 0 60px;
        margin-bottom: 0;
        /* font-size: 14px; */
        color: #728394;
    }

    .item {
        margin-bottom: 40px;
    }

    .item:hover i {
        background: red;
        color: #fff;
    }
</style>