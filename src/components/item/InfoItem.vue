<template>
    <div class="item">
        <i>
            <slot name="icon"></slot>
        </i>
        <div class="details">
            <h4>
                <slot name="heading"></slot>
            </h4>
            <slot></slot>
        </div>
    </div>
</template>