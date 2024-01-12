<template>
    <div class="list__item" :data-id="taskInfo.id">
        <input :value="taskInfo.name" @input="handdleValueChange" />
        <i class="fa-solid fa-trash-can" @click="deleteTask"></i>
    </div>
</template>

<script>
export default {
    name: "SingleTask",
    props: ['taskInfo'],
    methods: {
        handdleValueChange(e) {
            this.$store.dispatch("handdleValueChange", {
                boardId: e.target.closest(".column__card").dataset.id,
                taskId: e.target.closest(".list__item").dataset.id,
                valueUpdated: e.target.value,
            })
        },
        deleteTask(e) {
            this.$store.dispatch("deleteTask", {
                boardId: e.target.closest(".column__card").dataset.id,
                taskId: e.target.closest(".list__item").dataset.id,
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.list__item {
    padding: 8px 12px 4px;
    min-height: 24px;
    list-style: none;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
    color: #172b4d;
    word-wrap: break-word;
    display: flex;
    align-items: center;

    input {
        border: 0;
        flex-grow: 1;
    }

    i {
        cursor: pointer;
    }

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }
}
</style>