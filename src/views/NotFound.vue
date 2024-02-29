<template>
    <section class="error__section">
        <div class="container">
            <div class="row">
                <span class="error-num">404</span>

                <router-link to="/" class="error-msg"><i class="far fa-long-arrow-left"></i> Back to home page</router-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Error Section'
}

</script>

<style lang="scss" scoped>

.error__section {
    width: 100%;
    padding: 100px 0;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 20px;
    }

    .error-num {
        font-size: calc(80px + 20 * (100vw / 1920));
        font-weight: 700;
    }

    .error-msg {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        gap: 15px;
        align-items: center;
        transition: .4s;
        
        &::first-letter {
            text-transform: uppercase;
        }

        i {
            margin-top: 2px;
            transition: .3s;
        }

        &:hover {
            color: var(--main-blue);

            i {
                transform: translateX(-5px);
                color: var(--main-blue);
            }
        }
    }
}

@media (min-width: 1920px) {
    .error-num {
        font-size: 100px !important;
    }
}

</style>