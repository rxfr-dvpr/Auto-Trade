<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-brand">
                <router-link to="/" class="footer-logo">
                    <img :src="store.logo" alt="" class="footer-logo-img">
                </router-link>

                <p class="footer-brand-txt">{{ store.brandTxt }}</p>

                <ul class="footer__list">
                    <li class="footer__list-item" v-for="(link, idx) in nStore.navList" :key="idx">
                        <a :href="link.url" class="footer__list-link">{{ link.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="footer-contact">
                <a :href="link.url" class="contact-link" v-for="(link, id) in store.contactLinks" :key="id">
                    {{ link.title }}: <span>{{ link.txt }}</span>
                </a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore(),
            nStore: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 50px 0;
    border-top: 2px solid #D9D9D9;
    border-bottom: 2px solid #D9D9D9;
    margin-top: 70px;

    .row {
        justify-content: space-between;
        gap: 45px;
    }

    .footer-brand {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .footer-logo {
            max-width: 130px;
            width: 100%;

            &-img {
                width: 100%;
            }
        }

        &-txt {
            max-width: 235px;
            width: 100%;
            font-size: 14px;
            color: var(--main-gray);
            font-weight: 300;
        }

        .footer__list {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-top: 25px;

            &-link {
                font-size: 12px;
                font-weight: 400;
                text-transform: uppercase;
                transition: .3s;

                &:hover {
                    color: var(--main-blue);
                }
            }
        }
    }

    .footer-contact {
        max-width: 670px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: end;
        justify-content: space-between;
        row-gap: 25px;

        .contact-link {
            max-width: 500px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            font-size: 12px;
            font-weight: 300;
            transition: .3s;

            span {
                font-size: calc(15px + 3 * (100vw / 1920));
                transition: .3s;
            }

            &:hover {
                color: var(--main-blue);

                span {
                    color: var(--main-blue);
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .contact-link {
        span {
            font-size: 18px !important;
        }
    }
}

@media (max-width: 668px) {
    .row {
        flex-direction: column;
        justify-content: flex-start !important;
        align-items: center;
    }

    .footer-brand {
        align-items: center;
        text-align: center;
    }

    .footer-contact {
        align-items: center !important;
        text-align: center !important;
    }
}

</style>