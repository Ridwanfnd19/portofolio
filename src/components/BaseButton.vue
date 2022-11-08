<script>
export default {
    name: 'BaseButton',
    props: {
        name: String
    }
    
}
</script>

<template>
    <div class="btn" >{{ name }}</div>
</template>

<style>
    .btn {
        width: fit-content;
        font-size: 16px;
        font-weight: 500;
        padding: 12px 35px;
        background: red;
        color: white;
        border: none;
        border-radius: 40px;
        display: inline-block;
        white-space: nowrap;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .btn:hover {
        transform: scale(1.05);
    }
</style>