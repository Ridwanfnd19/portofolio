<template>
    <div class="logo">
        <div>
            <span>R</span>idwan
        </div>
    </div>
</template>

<style>
    .logo {
        position: absolute;
        top: 50px;
        font-size: 30px;
        text-transform: capitalize;
    } 
    .logo div {
        color: var(--text-black-900);
        font-weight: 700;
        padding: 15px 20px;
        font-size: 30px;
        letter-spacing: 5px; 
        position: relative;
    }
    .logo div span {
        font-family: 'Clicker Script', cursive;
        font-size: 40px;
    }

    .logo div::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-bottom: 5px solid red;
        border-left: 5px solid red;
        bottom: 0;
        left: 0;
    }

    .logo div::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-top: 5px solid red;
        border-right: 5px solid red;
        top: 0;
        right: 0;
    }
</style>