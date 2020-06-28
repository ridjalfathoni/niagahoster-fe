<template>
    <div class="navigasi">
        <section id="top-nav">
            <div class="top-nav d-none d-sm-block">
                <div class="container h-100 d-flex flex-row flex-wrap align-items-center">
                    <div class="ebook-container desktop" v-if="isShow">
                        <div class="d-flex align-items-center d-none d-lg-block d-sm-none">
                            <div class="badges">
                                <i class="fa fa-tag" aria-hidden="true"></i>
                            </div>
                            <a href="#">Gratis Ebook 9 Cara Cerdas Menggunakan Domain </a><span class="close-badge" @click="btnClose">[x]</span>
                        </div>
                    </div>
                    <div class="info-container ml-md-auto ml-lg-auto ml-0 mx-lg-0 mx-md-auto mx-sm-auto">
                        <div class="d-flex justify-content-center align-items-center flex-row flex-wrap">
                            <div class="info-item">
                                <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                                <span>0274-5305505</span>
                            </div>
                            <div class="info-item">
                                <i class="fa fa-comments mr-2" aria-hidden="true"></i>
                                <span>Live Chat</span>
                            </div>
                            <div class="info-item">
                                <i class="fa fa-user-circle mr-2" aria-hidden="true"></i>
                                <span>Member Area</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="navbar">
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <div class="navbar-logo navbar-brand d-lg-inline-block d-md-none d-sm-inline-block">
                        <img src="../assets/images/logo-niagahoster.jpg" alt="">
                    </div>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div class="collapse navbar-collapse mx-sm-auto" id="collapsibleNavId">
                        <ul class="navbar-nav mx-sm-auto mx-md-auto mx-lg-0 mt-2 mt-lg-0 ml-md-auto ml-lg-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hosting</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Domain</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Server</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Website</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Afiliasi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Promo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pembayaran</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Kontak</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        btnClose() {
            this.isShow = false;
        },
    },
}
</script>

<style lang="scss">
.top-nav {
    height: 40px;
    border-bottom: 1px solid #c4c4c4;
    color: #4C4C4C;
    /* padding: 0px 20px; */
    .ebook-container a {
        text-decoration: none;
        color: #333;
        position: relative;
        margin-left: 3rem;
    }

    .badges {
        clip-path: polygon(50% 70%, 100% 100%, 100% 0, 0 0, 0 100%);
        background: #008FEE;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;

        * {
            bottom: 65%;
            right: 65%;
            position: absolute;
            transform: translateX(50%) translateY(25%);
            font-size: 12px;
            color: white;
        }
    }

    .close-badge {
        cursor: pointer;
    }
}

#navbar {
    .navbar-logo {
        height: 100%;
        width: 20%;
        padding: 10px;

        img {
            height: 100%;
            width: 100%;
        }
    }
}

@media (max-width: 768px) {
  #navbar {
    .navbar-logo {
        height: 100%;
        width: 50%;
        padding: 10px;

        img {
            height: 100%;
            width: 100%;
        }
    }
}
}
</style>