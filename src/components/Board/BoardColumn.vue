<template>
    <div class="column__card">
        <div class="single__list">
            <div class="single__list__header">
                <span>{{ boardInfo.name }}</span>
            </div>

            <draggable :list="tasks" group="tasks" @end="onDragEnd" item-key="id">
                <template #item="{ element }">
                    <SingleTask :task-info="element"></SingleTask>
                </template>
            </draggable>


            <div class="single__list__footer">
                <div class="single__list__footer__addInput" v-if="canIAddTask">
                    <form action="">
                        <textarea placeholder="Enter a title for this Task..." @keyup.enter="addTask" v-model="inputValue"
                            autofocus></textarea>
                        <div class="single__list__footer__addInput__actions">
                            <button class="btn btn-primary" type="submit" @click.prevent="addTask">Add Task</button>
                            <button type="button" class="single__list__footer__addInput__actions__cansle"
                                @click="toggleAddTask">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <button class="single__list__footer__btn" v-if="!canIAddTask" @click="toggleAddTask">Add a Task</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import draggable from 'vuedraggable';
import SingleTask from "./SingleTask.vue";

export default {
    name: 'BoardColumn',
    components: { draggable, SingleTask },
    props: ['boardInfo'],
    data() {
        return {
            inputValue: '',
            canIAddTask: false,
        };
    },

    methods: {
        toggleAddTask() {
            this.canIAddTask = !this.canIAddTask;
        },
        addTask() {
            this.$store.dispatch('addTask', {
                id: this.boardInfo.id,
                value: this.inputValue,
            });
            this.inputValue = '';
        },
        onDragEnd() {
            this.$store.dispatch("saveChanges", {
                board: this.$store.getters.getBoard,
            })
        },
        handdleValueChange(e) {
            this.$store.dispatch("handdleValueChange", {
                boardId: e.target.closest(".column__card").dataset.id,
                taskId: e.target.dataset.id,
                valueUpdated: e.target.value,
            })
        }
    },

    computed: {
        tasks() {
            return this.boardInfo.tasks;
        },
    },
};
</script>
  
<style lang="scss" scoped>
.column__card {
    width: 300px;
    height: 100%;
    flex-shrink: 0;

    .single__list {
        background-color: #ebecf0;
        padding: 0.5rem;
        border-radius: 0.5rem;

        &__header {
            span {
                font-weight: bold;
            }
        }

        &__footer {
            margin-top: 0.5rem;

            &__addInput {
                textarea {
                    resize: none;
                    border: 0;
                    width: 100%;
                    border-radius: 0.5rem;
                    box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
                    padding: 8px 12px 4px;
                    min-height: 75px;
                    color: #172b4d;

                    &::placeholder {
                        color: #172b4d;
                    }

                    &:focus-visible {
                        outline: none;
                    }
                }

                &__actions {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    &__cansle {
                        font-size: 1.25rem;
                        border: 0;
                        background-color: transparent;
                    }
                }
            }

            &__btn {
                width: 100%;
                border: 0;
                text-align: start;
                border-radius: 8px;
                padding: 6px 12px 6px 8px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background-color: #091e4224;
                }

                &::before {
                    content: "\2b";
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    margin-inline-end: 0.5rem;
                }
            }
        }
    }
}
</style>
  