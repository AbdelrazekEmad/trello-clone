<template>
    <div class="add__list">
        <button @click="toggleAddList" v-if="!canIAddList">Add another List</button>
        <div class="add__list__form" v-if="canIAddList">
            <form action="">
                <input placeholder="Enter a title for this card..." autofocus v-model="inputValue" />
                <div class="add__list__form__actions">
                    <button class="btn btn-primary" type="submit" @click.prevent="addList">Add List</button>
                    <button type="button" class="add__list__form__actions__cansle" @click="toggleAddList">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddList',
    data() {
        return {
            canIAddList: false,
            inputValue: '',
        }
    },
    methods: {
        toggleAddList() {
            this.canIAddList = !this.canIAddList;
        },
        addList() {
            this.$store.dispatch({
                type: 'addList',
                payload: {
                    id: Date.now(),
                    listName: this.inputValue,
                }
            });
            this.inputValue = '';
        }
    },
}
</script>

<style lang="scss" scoped>
.add__list {
    height: fit-content;

    & > button {
        display: block;
        width: 300px;
        padding: 12px;
        background-color: #ffffff3d;
        color: #000;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 500;
        border: 0;
        text-align: start;

        &::before {
            content: "\2b";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            margin-inline-end: 0.5rem;
        }
    }

    &__form {
        background-color: #ebecf0;
        border-radius: 12px;
        padding: 8px;
        width: 272px;

        input {
            border: 0;
            padding: 6px 12px;
            background-color: #ebecf0;
            color: #172b4d;
            margin-bottom: 0.5rem;
            width: 100%;
            max-height: 256px;
            min-height: 20px;
            border-radius: 4px;

            &::placeholder {
                color: #172b4d;
            }

            &:focus {
                outline: 0;
                box-shadow: inset 0 0 0 2px #388bff;
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
}
</style>