<script>
    import BaseButton from './BaseButton.vue';
    export default {
        name: "TheEmail",
        components: { BaseButton},
        data: () => ({
            title: "Email",
            input: {
                nama: '',
                email: '',
                subject: '',
                pesan: ''
            },
        }),
        methods: {
            submit() {
                console.log(this.input);
            }
        },
    }
</script>

<template>
    <div class="contact-from padd-15">
        <form class="padd-15">
            <div class="row">
                <div class="from-item col-6 padd-15">
                    <div class="from-group">
                        <input v-model="input.nama" type="text" class="from-control" placeholder="Nama">
                    </div>
                </div>
                <div class="from-item col-6 padd-15">
                    <div class="from-group">
                        <input v-model="input.email" type="text" class="from-control" placeholder="Email">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="from-item col-12 padd-15">
                    <div class="from-group">
                        <input v-model="input.subject" type="text" class="from-control" placeholder="Subjek">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="from-item col-12 padd-15">
                    <div class="from-group">
                        <textarea v-model="input.pesan" name="" class="from-control" placeholder="Pesan"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="from-item col-12 padd-15 from-button">
                    <div class="from-group">
                        <BaseButton name="Kirim" @click="submit"></BaseButton>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
    .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .from-item {
        margin-bottom: 16px;
    }

    .from-control {
        width: 100%;
        border-radius: 4px;
        background-clip: padding-box;
        padding: 0.375rem 0.75rem;
        font-weight: 400;
        line-height: 1.5;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    input {
        height: 44px;
    }

    input, textarea {
        box-shadow: none;
        font-size: 14px;
    }

    textarea {
        min-height: 200px
    }

    .from-button {
        text-align: center;
    }
</style>