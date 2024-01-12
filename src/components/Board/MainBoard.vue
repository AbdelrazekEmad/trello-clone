<template>
    <main class="py-4">
        <div class="container-fluid h-100">
            <div class="main__board">

                <draggable class="main__board" :list="boardOne" group="boardOne" @end="onDragEnd" item-key="id">
                    <template #item="{ element }">
                        <BoardColumn :board-info="element" :data-id="element.id"></BoardColumn>
                    </template>
                </draggable>

                <AddList></AddList>
            </div>
        </div>
    </main>
</template>

<script>
import BoardColumn from "./BoardColumn.vue";
import AddList from "./AddList.vue";
import draggable from 'vuedraggable';


export default {
    name: "MainBoard",
    components: {
        BoardColumn,
        AddList,
        draggable
    },
    computed: {
        boardOne() {
            return this.$store.getters.getBoard
        }
    },
    methods: {
        onDragEnd() {
            this.$store.dispatch("saveChanges", {
                board: this.$store.getters.getBoard,
            })
        },
    },
}
</script>


<style>
main {
    height: calc(100vh - 40px);
    background-image: url('../../assets/images/board-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: auto;
}

.main__board {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    height: 100%;
}
</style>