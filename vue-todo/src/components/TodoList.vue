<template>
    <div>
        <!-- name의 list가 아래 css스타일의 list-enter-active를 가능하게 하는 것
             - tag는 원래 있던 tag명, 원래 ul 태그였는데 transition으로 교체 훟 tag = ul 한것  -->
        <transition-group name="list" tag="ul">
            <!--  v-for를 사용하면 갯수가 몇개건 간에 순서를 부여해줄 수 있다. index가 그 순서라고 생각하면 된다.
                  - v-bind:key 안해주면 idnex 오류난다. -->
            <li class="shadow" v-bind:key="todoItem.item" v-for="(todoItem,index) in this.todoItems">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted : todoItem.completed }"
                   v-on:click="toggleComplete({todoItem, index})"/>
                <span v-bind:class="{textCompleted : todoItem.completed }">
                    {{ todoItem.item }}
                </span>
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"/>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        methods: {
            ...mapMutations({
                removeTodo: 'removeOneItem', // todoItem, index를 안넣어도 된다. 알아서 넘겨줌. 대신 템플릿을 객체로 넣어줘야함
                toggleComplete: 'toggleOneItem'
            }),
            // removeTodo(todoItem, index) {
            //     this.$store.commit('removeOneItem', {todoItem, index});
            // },
            // toggleComplete(todoItem, index) {
            //     this.$store.commit('toggleOneItem', {todoItem, index});
            // }
        },
        computed: {
            // todoItems() {
            //     return this.$store.getters.storedTodoItems;
            // },
            // ...mapGetters(['storedTodoItems']),
            ...mapGetters({
                todoItems: 'storedTodoItems',
            }) // Getter의 이름이랑 실제로 컴포넌트에서 사용하는 이름이 다를 때는 객체로 선언하면된다.

        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .removeBtn {
        margin-left: auto;;
        color: #de4343;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 10px;
    }

    .checkBtnCompleted {
        color: #b3adad;
    }

    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    /* 리스트 아이템 Transitions & Animation */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }
</style>