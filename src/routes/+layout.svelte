<script>
    import '../app.css'
</script>

<header class="px-4">
    <div class="flex justify-center border-b uppercase">
        <h1 class="text-3xl py-4 font-extrabold">Super Pedrão Games</h1>
    </div>
</header>

<main class="min-h-screen px-8 mt-12">
    <slot />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

    h1 {
        font-family: 'Permanent Marker', cursive;
        background: linear-gradient(
            0deg,
            rgba(112, 26, 117, 1) 0%,
            rgba(112, 26, 117, 1) 41%,
            rgba(255, 255, 255, 1) 50%,
            rgba(56, 189, 248, 1) 60%,
            rgba(56, 189, 248, 1) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
