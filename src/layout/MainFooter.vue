<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="">
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Pendanaan
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, crafted with <md-icon>favorite</md-icon> by
                <a href="" target="_blank">rainierio</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
