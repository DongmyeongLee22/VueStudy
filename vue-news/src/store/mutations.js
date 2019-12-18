export default {
    SET_NEWS(state, newList) {
        state.newsList = newList;
    },
    SET_JOBS(state, jobsList) {
        state.jobsList = jobsList;
    },
    SET_ASK(state, askList) {
        state.askList = askList;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    }
}