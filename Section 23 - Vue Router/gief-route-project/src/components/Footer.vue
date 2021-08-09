<template>
    <div class="footer">
        <footer class="text-center bg-dark bg-gradient text-white py-3">
            <h3>&copy; {{ year}} - Enmanuel Gonzalez Liriano</h3>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        year: new Date().getFullYear()
    })
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0px;
    width: 100%;
}
</style>