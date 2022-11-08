<template>
    <div class="project-item">
        <div class="project-image">
            <slot name="img"></slot>
            <!-- <img src="../assets/Github.png" alt="GithubUserApp"> -->
            <div class="project-info">
                <slot name="project-title"></slot>
                <!-- <h4>GithubUserAPP</h4> -->
                <div class="project-link">
                    <slot name="links"></slot>
                    <!-- <a href="" title="Code">
                        <fa-icon icon="fa fa-code" fixed-width></fa-icon>
                    </a>
                    <RouterLink to="/" title="Detail">
                        <fa-icon icon="fa fa-link" fixed-width></fa-icon>
                    </RouterLink> -->
                    <!-- <a href="detail" title="Detail">
                        <fa-icon icon="fa fa-link" fixed-width></fa-icon>
                    </a> -->
                </div>
            </div>
        </div>
    </div>
</template>