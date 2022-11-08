<script>
    import ProjectItem from '../item/ProjectItem.vue';
    import { useCounterStore } from '../../stores/counter.js';
    import { mapState } from 'pinia';
    import BaseImage from '../BaseImage.vue';

    export default {
        name: 'ProjectSection',
        components: { ProjectItem, BaseImage },
        computed: {
            ... mapState(useCounterStore, ['getData'])
        }
    }
</script>

<template>
    <section class="project section" ref="project">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>Projek Saya</h2>
                </div>
            </div>
            <div class="row">
                <ProjectItem v-for="(img, index) in getData" :key="index">
                    <template #img>
                        <BaseImage :src="img.img" :alt="img.title"></BaseImage>
                    </template>
                    <template #project-title>
                        <h4>{{ img.title }}</h4>
                    </template>
                    <template #links>
                        <a :href="img.link" target="_blank" title="Code">
                            <fa-icon icon="fa fa-code" fixed-width></fa-icon>
                        </a>
                        <RouterLink :to="{ name: 'detail', params: { id: img.slug }}" title="Detail">
                            <fa-icon icon="fa fa-link" fixed-width></fa-icon>
                        </RouterLink>
                    </template>
                </ProjectItem>
            </div>
        </div>            
    </section>
</template>

<style>
    .project .container {
        padding-bottom: 40px;
    }

    .project-image {
        transition: 0.3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        background: rgba(69, 80, 91, 0.8);
        border: 6px solid var(--bg-black-100);
        border-radius: 10px;
    }

    .project-image img {
        width: 100%;
        display: block;
    }

    .project .project-image::before {
        content: "";
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
        left: 30px;
        right: 30px;
        top: 30px;
        bottom: 30px;
        transition: all ease-in-out 0.3s;
        z-index: 2;
        opacity: 0;
    }

    .project .project-image .project-info {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        z-index: 3;
        transition: all ease-in-out 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .project .project-image .project-info::before {
        display: block;
        content: "";
        width: 48px;
        height: 48px;
        position: absolute;
        top: 35px;
        left: 35px;
        border-top: 3px solid #8991a5;
        border-left: 3px solid #8991a5;
        transition: all 0.5s ease 0s;
        z-index: 9994;
    }

    .project .project-image .project-info::after {
        display: block;
        content: "";
        width: 48px;
        height: 48px;
        position: absolute;
        bottom: 35px;
        right: 35px;
        border-bottom: 3px solid #8991a5;
        border-right: 3px solid #8991a5;
        transition: all 0.5s ease 0s;
        z-index: 9994;
    }

    .project .project-image .project-info h4 {
        font-size: 20px;
        color: #45505b;
        font-weight: 600;
    }

    .project .project-image .project-link {
        text-align: center;
        z-index: 4;
    }

    .project .project-image .project-link a {
        color: #45505b;
        margin: 0 2px;
        font-size: 28px;
        display: inline-block;
        transition: 0.3s;
    }

    .project .project-image .project-link a:hover {
        color: red;
    }

    .project .project-image:hover::before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
    }

    .project .project-image:hover .project-info {
        opacity: 1;
    }

    .project .project-image:hover .project-info::before {
        top: 15px;
        left: 15px;
    }

    .project .project-image:hover .project-info::after {
        bottom: 15px;
        right: 15px;
    }
</style>