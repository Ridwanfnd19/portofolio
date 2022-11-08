<script setup>
    import { RouterLink } from 'vue-router'
</script>

<script>
    import logo from '../components/icon/IconLogo.vue'

    export default {
        components: { logo },
        methods: {
            klik() {
                const aside = document.querySelector(".aside");   
                aside.classList.toggle("open"); 
            }
        }
    }
</script>

<template>
    <aside class="aside">
        <logo/>
        <div class="nav-toggler">
            <fa-icon @click="klik" icon="fa fa-bars" size="2xl" fixed-width></fa-icon>
        </div>
        <ul>
            <nav>
                <li>
                    <RouterLink to="/">
                        <fa-icon icon="fa fa-home" size="lg" fixed-width />
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">
                        <fa-icon icon="fa fa-user" fixed-width  size="lg"/>
                        <span>About</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">
                        <fa-icon icon="fa fa-comments" size="lg" fixed-width/>
                        <span>Contact</span>
                    </RouterLink>
                </li>
            </nav>
        </ul>
    </aside>
</template>

<style>
    aside {
        background: var(--bg-black-100);
        width: 270px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        height: 100%;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center ;
        border-right: 1px solid var(--bg-black-50);
    }

    .nav-toggler .fa-bars {
        border: 1px solid var(--bg-black-50);
        cursor: pointer;
        position: fixed;
        left: 300px;
        display: none;
        top: 20px;
        border-radius: 5px;
        color: red;
        background: var(--bg-black-100);
        /* display: flex; */
    }

    nav {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav>ul>li {
        position: relative;
        white-space: nowrap;
    }

    nav a,
    nav a:focus {
        display: flex;
        align-items: center;
        color: black;
        padding: 10px 18px;
        margin-bottom: 8px;
        transition: 0.3s;
        font-size: 15px;
        border-radius: 50px;
        background: #f2f3f5;
        height: 56px;
        width: 100%;
        overflow: hidden;
        transition: 0.3s;
    }

    nav a i,
    nav a:focus i {
        font-size: 20px;
    }

    nav a span,
    nav a:focus span {
        padding: 0 5px 0 7px;
        /* color: #45505b; */
    }

    nav a:hover,
    nav .router-link-active,
    nav .router-link-active:focus,
    nav li:hover>a {
        background: red;
    }

    nav a:hover span,
    nav .router-link-active span,
    nav .router-link-active:focus span,
    nav li:hover>a span {
        color: black;
    }

    nav a:hover,
    nav li:hover>a {
        width: 100%;
        color: black;
    }

    nav a:hover span,
    nav li:hover>a span {
        display: block;
    }
</style>