<script lang="ts">
    interface GameOpts {
        width: number
        height: number
        mines: number
    }

    const gameOpts: GameOpts = {
        width: 0,
        height: 0,
        mines: 0
    }

    function handleSelect(selected: Event) {
        const selecionado = selected.target as HTMLSelectElement
        const dificuldade = selecionado.value
        const largura = document.getElementById('wInput') as HTMLInputElement
        const altura = document.getElementById('hInput') as HTMLInputElement
        const minas = document.getElementById('mineInput') as HTMLInputElement

        switch (dificuldade) {
            case 'easy':
                largura.value = '8'
                altura.value = '8'
                minas.value = '10'
                break
            case 'medium':
                largura.value = '16'
                altura.value = '16'
                minas.value = '40'
                break
            case 'hard':
                largura.value = '24'
                altura.value = '24'
                minas.value = '99'
                break
        }
    }

    function handleInput() {
        const dificuldade = document.getElementById(
            'diffSlct'
        ) as HTMLSelectElement

        dificuldade.value = 'custom'
    }

    async function handleSubmit(ev: Event) {
        const gameBody = document.getElementById('gameBody') as HTMLDivElement
        const gameContainer = document.getElementById(
            'gameContainer'
        ) as HTMLDivElement
        const form = ev.target as HTMLFormElement
        const timer = document.getElementById('timeCount') as HTMLSpanElement

        const largura = form.elements.namedItem('w') as HTMLInputElement
        const altura = form.elements.namedItem('h') as HTMLInputElement
        const minas = form.elements.namedItem('mine') as HTMLInputElement

        gameOpts.width = parseInt(largura.value)
        gameOpts.height = parseInt(altura.value)
        gameOpts.mines = parseInt(minas.value)

        gameReady = true

        // clear the game container
        gameBody.innerHTML = ''

        gameContainer.classList.remove('hidden')
        gameContainer.classList.add('flex')

        for (let i = 0; i < gameOpts.height; i++) {
            // add a poop emoji in a div into the game container
            const row = document.createElement('div')
            row.classList.add('text-lg')
            row.innerText = '💩'

            gameBody.appendChild(row)
        }
    }

    let gameReady = false
</script>

<div class="flex flex-col items-center mb-8">
    <h2 class="text-pink-200 text-5xl font-extrabold">Minemopper</h2>
    <span>(Com certeza não é só campo minado)</span>
</div>

<div class="flex flex-col items-center">
    <!-- if game is not ready -->
    {#if !gameReady}
        <form
            id="config"
            name="gameConfig"
            class="max-w-xl w-full flex flex-col gap-4"
            on:submit|preventDefault={handleSubmit}
        >
            <div
                id="diffPicker"
                class="flex"
            >
                <label
                    for="diffSlct"
                    class="relative block w-full border-b border-white"
                >
                    <span class="absolute top-3 px-3">Dificuldade</span>
                    <select
                        id="diffSlct"
                        name="diff"
                        class="w-full text-lg bg-slate-900 font-extrabold rounded-md pt-10 pb-4 px-3"
                    >
                        <option
                            value=""
                            disabled
                            selected
                            hidden
                        />
                        <option
                            class="text-lg"
                            value="easy"
                            on:click={handleSelect}
                        >
                            Fácil
                        </option>
                        <option
                            class="text-lg"
                            value="medium"
                            on:click={handleSelect}
                        >
                            Médio
                        </option>
                        <option
                            class="text-lg"
                            value="hard"
                            on:click={handleSelect}
                        >
                            Difícil
                        </option>
                        <option
                            class="text-lg"
                            value="custom"
                            on:click={handleSelect}
                        >
                            Personalizado
                        </option>
                    </select>
                </label>
            </div>

            <div
                id="widthHeight"
                class="flex justify-between"
            >
                <label
                    for="wInput"
                    class="relative block border-b border-white"
                >
                    <span class="absolute top-3 px-3">Largura</span>
                    <input
                        name="w"
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        required={true}
                        min="5"
                        max="40"
                        step="1"
                        id="wInput"
                        class="text-lg font-extrabold bg-slate-900 rounded-md pt-10 pb-4 px-3"
                        on:input={handleInput}
                    />
                </label>
                <label
                    for="hInput"
                    class="relative block border-b border-white"
                >
                    <span class="absolute top-3 px-3">Altura</span>
                    <input
                        name="h"
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        required={true}
                        min="5"
                        max="40"
                        step="1"
                        id="hInput"
                        class="text-lg font-extrabold bg-slate-900 rounded-md pt-10 pb-4 px-3"
                        on:input={handleInput}
                    />
                </label>
            </div>

            <div
                id="mineCount"
                class="flex justify-between"
            >
                <label
                    for="mineInput"
                    class="relative block w-full border-b border-white"
                >
                    <span class="absolute top-3 px-3">Minas</span>
                    <input
                        name="mine"
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        required={true}
                        min="1"
                        max="99"
                        step="1"
                        id="mineInput"
                        class="w-full text-lg font-extrabold bg-slate-900 rounded-md pt-10 pb-4 px-3"
                        on:input={handleInput}
                    />
                </label>
            </div>

            <button
                type="submit"
                class="bg-pink-200 text-slate-900 text-xl font-extrabold rounded-md px-4 py-2"
            >
                Jogar
            </button>
        </form>
    {:else}
        <button
            class="bg-pink-200 text-slate-900 text-xl font-extrabold rounded-md px-4 py-2"
            on:click={() => (gameReady = false)}
        >
            Voltar
        </button>
    {/if}

    <div
        class="hidden max-w-xl w-full h-96 mt-8 p-4 flex-col bg-white opacity-50 rounded-2xl backdrop-blur-sm border-2 border-white text-black"
        id="gameContainer"
    >
        <div
            id="gameHeader"
            class="border-b-4 border-red-500"
        >
            <div class="flex">
                <div>
                    <span class="text-2xl font-bold">Minas</span>
                    <span
                        class="text-2xl font-bold"
                        id="mineCount">99</span
                    >
                </div>
                <div class="ml-auto">
                    <span class="text-2xl font-bold">Tempo</span>
                    <span
                        class="text-2xl font-bold"
                        id="timeCount">00:00</span
                    >
                </div>
            </div>
        </div>
        <div
            id="gameBody"
            class="flex m-auto"
        />
    </div>
</div>
