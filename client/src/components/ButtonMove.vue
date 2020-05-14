<template>
    <div>
        <canvas ref="game" width="640" height="480" style="border: 1px solid black;"></canvas>
        <p>
            <button v-on:click="move('right')">Right</button>
            <button v-on:click="move('left')">Left</button>
            <button v-on:click="move('up')">Up</button>
            <button v-on:click="move('down')">Down</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ButtonMove'
}

</script>