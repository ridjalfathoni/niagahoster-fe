<template>
  <div class="home">
    <section id="top-content">
        <div class="top-content">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="article-header">
                            <h2 class="montserrat-bold">PHP Hosting</h2>
                            <h2 class="montserrat-light">Cepat, handal, penuh dengan modul PHP yang Anda butuhkan</h2>
                        </div>
                        <div class="article-content">
                            <div class="article-text mt-3 montserrat-regular d-flex flex-row align-items-center">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <span class>Solusi PHP untuk performa query yang lebih cepat</span>
                            </div>
                            <div class="article-text mt-3 montserrat-regular d-flex flex-row align-items-center">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <span>Konsumsi memori yang lebih rendah</span>
                            </div>
                            <div class="article-text mt-3 montserrat-regular d-flex flex-row align-items-center">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <span>Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7</span>
                            </div>
                            <div class="article-text mt-3 montserrat-regular d-flex flex-row align-items-center">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <span>Fitur enkripsi IonCube dan Zend Guard Loaders</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="top-content-img h-100 w-100">
                            <img src="../assets/svg/illustration banner PHP hosting-01.svg" alt="Banner">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="content2" class="mt-5">
        <div class="php-content">
            <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-center">
                <div class="php-article d-flex flex-column align-items-center m-4">
                    <div class="article-img">
                        <logo class="svg-logo" name="zendguard"></logo>
                    </div>
                    <div class="article-text">
                        <span>PHP Zend Guard Loader</span>
                    </div>
                </div>
                <div class="php-article d-flex flex-column align-items-center m-4">
                    <div class="article-img">
                        <logo class="svg-logo" name="composer"></logo>
                    </div>
                    <div class="article-text">
                        <span>PHP Composer</span>
                    </div>
                </div>
                <div class="php-article d-flex flex-column align-items-center m-4">
                    <div class="article-img">
                        <logo class="svg-logo" name="ioncube"></logo>
                    </div>
                    <div class="article-text">
                        <span>PHP ionCube Loader</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-content mt-5">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="article-header d-flex flex-column justify-content-center align-items-center m-4">
                    <h2 class="montserrat-bold">Paket Hosting Singapura yang Tepat</h2>
                    <h3 class="montserrat-light">Dsiskon 40% + Domain dan SSL Gratis untuk Anda</h3>
                </div>
                <div class="card-container d-flex flex-column flex-sm-row flex-wrap w-100 justify-content-center m-4">
                    <div class="card-package mb-4 mb-sm-0 d-flex flex-column align-items-center"
                        v-for="(res,index) in package.data"
                        :key="index + '-label'"
                        :class="(res.is_bestseller ? ' best-seller' : '')"
                        v-if="res.is_active"
                    >
                        <div class="package-header w-100">
                            <h3 class="text-center">{{res.name}}</h3>
                        </div>
                        <div class="package-price w-100">
                            <p class="price-text text-center">{{res.price}}</p>
                            <p class="discount-text text-center">{{res.discount_price}}</p>
                        </div>
                        <div class="package-user w-100">
                            <p class="user-text text-center"><b>{{res.details.registered_user}}</b> Pengguna Terdaftar</p>
                        </div>
                        <div class="package-info w-100 d-flex flex-column align-items-center">
                            <p v-html="res.details.description"></p>
                            <button class="btn btn-package">Pilih Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hosting-info">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="article-header d-flex flex-column justify-content-center align-items-center m-4">
                    <h3 class="montserrat-light">Powerful dengan Limit PHP yang lebih Besar</h3>
                </div>
                <div class="article-content d-flex flex-column flex-sm-row w-100">
                    <table class="table table-striped border m-0 m-sm-4 mb-sm-0 mb-2">
                        <tbody>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>max execution time 300s</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>max execution time 300s</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>php memory limit 1024 MB</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-striped border m-0 m-sm-4">
                        <tbody>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>post max size 128 MB</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>upload max filesize 128MB</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <span>max input vars 2500</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pembatas"></div>
            </div>
        </div>
        <div class="hosting-info">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="article-header d-flex flex-column justify-content-center align-items-center m-4">
                    <h3 class="montserrat-light">Semua Paket Hosting Sudah Termasuk</h3>
                </div>
                <div class="article-content d-flex flex-row w-100">
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_PHP Semua Versi.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>PHP Semua Versi</h5>
                                    <p class="text-center">Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_My SQL.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>MySQL Versi 5.6</h5>
                                    <p class="text-center">Nikmati MySQL versi terbaru, tercepat dan kaya akan fitur.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_CPanel.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>Panel Hosting cPanel</h5>
                                    <p class="text-center">Kelola website dengan panel canggih yang familiar di hari Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_garansi uptime.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>Garansi Uptime 99.9%</h5>
                                    <p class="text-center">Data center yang mendukung kelangsungan website Anda 24/7</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_InnoDB.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>Database InnoDB Unlimited</h5>
                                    <p class="text-center">Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="paket-hosting d-flex flex-column align-items-center">
                                <div class="paket-img">
                                    <img src="../assets/svg/icon PHP Hosting_My SQL remote.svg" alt="">
                                </div>
                                <div class="paket-info d-flex flex-column align-items-center">
                                    <h5>PHP Semua Versi</h5>
                                    <p class="text-center">Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pembatas"></div>
            </div>
        </div>
        <div class="laravel-support">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="article-header d-flex flex-column justify-content-center align-items-center">
                    <h3 class="montserrat-light">Mendukung Penuh Framework Laravel</h3>
                </div>
                <div class="article-content d-flex flex-row flex-wrap w-100">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="article-header">
                                <p class="montserrat-light">Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.</p>
                            </div>
                            <div class="article-content">
                                <div class="laravel-text montserrat-regular d-flex flex-row align-items-center">
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>Install Laravel 1 klik dengan Softaculous Installer</span>
                                </div>
                                <div class="laravel-text montserrat-regular d-flex flex-row align-items-center">
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>Mendukung ekstensi PHP MCrypt, phar, mbstring, json, dan fileinfo.</span>
                                </div>
                                <div class="laravel-text montserrat-regular d-flex flex-row align-items-center">
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>tersedia Composer dan SSH untuk menginstall packages pilihan Anda.</span>
                                </div>
                                <div class="nb-text montserrat-regular d-flex flex-row align-items-center">
                                    <span>Nb. Composerdan SSH hanya tersedia pada paket Personal dan Bisnis</span>
                                </div>
                                <button class="btn btn-hosting">Pilih Hosting Anda</button>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="laravel-content-img h-100 w-100">
                                <img src="../assets/svg/illustration banner support laravel hosting.svg" alt="Banner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modul-lengkap">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="article-header d-flex flex-column justify-content-center align-items-center">
                    <h3 class="montserrat-light">Modul Lengkap untuk MenjalankanAplikasi PHP Anda</h3>
                </div>
                <div class="row">
                    <div class="col-6 col-sm-3 mb-4">
                        <div class="modul-items">
                            <div class="modul-text">
                                IcePHP
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apc
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apcu
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apm
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                ares
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcmath
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcompiler
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                big_int
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bitset
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bloomy
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bz2_filter
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                clamav
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                coin_acceptor
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                crack
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                dba
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3 mb-4">
                        <div class="modul-items">
                            <div class="modul-text">
                                IcePHP
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apc
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apcu
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apm
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                ares
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcmath
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcompiler
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                big_int
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bitset
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bloomy
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bz2_filter
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                clamav
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                coin_acceptor
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                crack
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                dba
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3 mb-4">
                        <div class="modul-items">
                            <div class="modul-text">
                                IcePHP
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apc
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apcu
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apm
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                ares
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcmath
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcompiler
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                big_int
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bitset
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bloomy
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bz2_filter
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                clamav
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                coin_acceptor
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                crack
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                dba
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3 mb-4">
                        <div class="modul-items">
                            <div class="modul-text">
                                IcePHP
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apc
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apcu
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                apm
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                ares
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcmath
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bcompiler
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                big_int
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bitset
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bloomy
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                bz2_filter
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                clamav
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                coin_acceptor
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                crack
                            </div>
                        </div>
                        <div class="modul-items">
                            <div class="modul-text">
                                dba
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-selengkapnya">Selengkapnya</button> 
            </div>
        </div>
        <div class="support">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="support-content d-flex flex-row w-100">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="support-header">
                                <h1 class="montserrat-light">Linux Hosting yang Stabil dengan Teknologi LVE</h1>
                            </div>
                            <div class="support-content">
                                <div class="support-text montserrat-regular d-flex flex-row align-items-center">
                                    <span>SuperMicro Intel Xeon 24-Cores server dengan RAM 128 GB dan
                                        teknologi LVE CloudLinux untuk stabilitas server Anda. Dilengkapi
                                        dengan SSD untuk kecepatan MySQL dan caching. Apache load balancer
                                        berbasis LiteSpeed Technologies, CagerFS security, Raid-10 protection
                                        dan auto backup untuk keamanan website PHP Anda
                                    </span>
                                </div>
                                <button class="btn btn-hosting">Pilih Hosting Anda</button>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="support-content-img h-100 w-100">
                                <img src="../assets/images/Image support.png" alt="Support">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="share">
            <div class="container h-100">
                <div class="share-content d-flex flex-row flex-wrap align-items-center h-100">
                    <p class="share-text text-center text-sm-left mx-auto mx-md-0">Bagikan jika Anda menyukai halaman ini.</p>
                    <div class="share-to d-flex flex-row flex-wrap mx-auto">
                        <div class="share-items d-flex flex-row flex-wrap">
                            <div class="facebook">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div class="share-count">
                                <span>80k</span>
                            </div>
                        </div>
                        <div class="share-items d-flex flex-row flex-wrap">
                            <div class="twitter">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div class="share-count">
                                <span>450</span>
                            </div>
                        </div>
                        <div class="share-items d-flex flex-row flex-wrap">
                            <div class="google">
                                <i class="fa fa-google-plus" aria-hidden="true"></i>
                            </div>
                            <div class="share-count" id="talkbubble">
                                <span>1900</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bantuan">
            <div class="container h-100 d-flex align-items-center">
                <div class="bantuan-content d-flex flex-row flex-wrap align-items-center justify-content-center w-100">
                    <div class="bantuan-text w-75 ">
                        <span>Perlu <b>BANTUAN?</b> Hubungi Kami : <b>0274-5305505</b></span>
                        <div class="border-right"></div>
                    </div>
                    <button class="btn btn-bantuan mt-2 mt-sm-0 mt-md-0" @click="getData()">
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        Live Chat
                    </button>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import types from "../store/types"
import logo from "../components/logo.component"

export default {
    name: 'homepage',
    components: {
        logo
    },
    data() {
        return {
            package: []
        }
    },
    created () {
        this.$store.dispatch(types.GET_PACKAGE)
        this.package = JSON.parse(this.$store.state.package);
        
    },
    mounted() {
        this.$nextTick(() => {
            $('.price-text').each((i,v)=> {
                let $v = $(v);
                let price = $v.text().slice();
                let sisa = price.length % 3;
                let rupiah = price.substr(0, sisa)
                let ribuan = price.substr(sisa).match(/\d{3}/g);
                if (ribuan) {
                    let separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                }
                $v.text('Rp '+rupiah)
            })
            $('.user-text b').each((i,v)=> {
                let $v = $(v);
                let value = $v.text().slice();
                let sisa = value.length % 3;
                let rupiah = value.substr(0, sisa)
                let ribuan = value.substr(sisa).match(/\d{3}/g);
                if (ribuan) {
                    let separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                }
                $v.text(rupiah)
            })
            $('.discount-text').each((i,v)=> {
                let $v = $(v);
                let price = $v.text().slice();
                let sisa = price.length % 3;
                let rupiah = price.substr(0, sisa)
                let ribuan = price.substr(sisa).match(/\d{3}/g);
                if (ribuan) {
                    let separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                }
                let split = rupiah.split('.')
                $v.html("<sup>Rp</sup><b>"+ split[0]+"</b><sup><b>."+split[1]+"</b></sup><sup>/bln</sup>");
            })
            $('.package-info p i').css('color', '#008FEE');
        })
    },
    metaInfo: {
        link: [
        {
            rel: "stylesheet",
            href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        },
        ]
    }
}
</script>

<style lang="scss" scoped>
    .svg-logo {
        width: 100%;
        height: 100%;
    }

    #top-content {
        .article-text {
            i {
                color: #00B348;
            }
        }
    }

    #content2 {
        .price-content {
            .package-info {
                p {
                    text-align: center;
                    line-height: 2.2rem;
                }
                
                i.fa.fa-star {
                        color: #008FEE !important;
                        padding: 2px;
                    }
            }
        }
        .hosting-info {
            .paket-info {
                text-align: center;
            }
            td {
                i {
                    color: #00B348;
                }
                span {
                    font-size: 18px;
                }
            }
        }
        .laravel-support {
            .laravel-text {
                i {
                    color: #00B348;
                }
            }
        }
        .modul-lengkap {
            .modul-text {
                padding: 5px 3rem;
            }
        }

        .share {
            .share-items {
                .facebook {
                    i {
                        position: absolute;
                        bottom: -2px;
                        right: 2px;
                        font-size: 30px;
                    }
                }
                .twitter {
                    i {
                        position: absolute;
                        bottom: 50%;
                        right: 50%;
                        transform: translateX(50%) translateY(50%);
                        font-size: 18px;
                    }
                }
                .google {
                    i {
                        position: absolute;
                        bottom: 50%;
                        right: 50%;
                        transform: translateX(50%) translateY(50%);
                        font-size: 18px;
                    }
                }
            }
        }
    }
    
</style>
