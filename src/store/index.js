import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    board: [
      {
        id: 1,
        name: "To Do",
        tasks: [
          {
            id: 1,
            name: "To Do 1",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
            attachments: [""],
          },
        ],
      },
      {
        id: 2,
        name: "Doing",
        tasks: [
          {
            id: 2,
            name: "Doing 1",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 3,
            name: "Doing 2",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 4,
            name: "Doing 3",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 5,
            name: "Doing 4",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 6,
            name: "Doing 5",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 7,
            name: "Doing 6",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
        ],
      },
      {
        id: 3,
        name: "Done",
        tasks: [
          {
            id: 8,
            name: "Done 1",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 9,
            name: "Done 2",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 10,
            name: "Done 3",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
          {
            id: 11,
            name: "Done 4",
            description: "lorem lorem lorem lorem lorem lorem lorem ",
          },
        ],
      },
    ],
  },
  mutations: {
    addTask(state, payload) {
      const identifiedBoard = state.board.find((ele) => ele.id === payload.id);
      identifiedBoard.tasks.push({ id: Date.now(), name: payload.value, description: "" });
    },
    addList(state, { payload }) {
      state.board.push({
        id: payload.id,
        name: payload.listName,
        tasks: [],
      });
    },
    saveChanges(state, payload) {
      state.board = payload.board;
    },
    handdleValueChange(state, payload) {
      const board = state.board.find((column) => column.id == payload.boardId);
      const task = board.tasks.find((task) => task.id == payload.taskId);
      task.name = payload.valueUpdated;
    },
    deleteTask(state, payload) {
      const board = state.board.find((column) => column.id == payload.boardId);
      // console.log(board.tasks.filter((task) => task.id != payload.taskId));
      board.tasks = board.tasks.filter((task) => task.id != payload.taskId);
    },
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload);
    },
    addList(context, payload) {
      context.commit("addList", payload);
    },
    saveChanges(context, payload) {
      context.commit("saveChanges", payload);
    },
    handdleValueChange(context, payload) {
      context.commit("handdleValueChange", payload);
    },
    deleteTask(context, payload) {
      context.commit("deleteTask", payload);
    },
  },
  getters: {
    getBoard(state) {
      return state.board;
    },
    listCount(state) {
      return state.board.length;
    },
  },

  plugins: [createPersistedState()],
});

export default store;
