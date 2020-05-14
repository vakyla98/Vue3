import { mount } from '@vue/test-utils'
import ToDoList from '../src/components/ToDoList.vue'

import Vue from 'vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify)

const todos = [
    { id: 1, isCompleted: true, text: "Some text1", },
    { id: 2, isCompleted: false, text: "Some text2", },
    { id: 3, isCompleted: true, text: "Some text3", },
    { id: 4, isCompleted: false, text: "Some text4", },
    { id: 5, isCompleted: true, text: "Some text5", },
    { id: 6, isCompleted: true, text: "Some text6", }
]

describe('ToDoList', () => {
    let item;
    beforeEach(() => {
        item = mount(ToDoList, {
            propsData: { todos },
        })
    });
    it('render correctly', () => {
        expect(item.element).toMatchSnapshot()
    })
    it('render completed todos correctly', () => {
        let completed = item.findAll('.completedList .completedTodo')
        expect(completed).toHaveLength(4)
    })
    it('render uncompleted todos correctly', () => {
        let uncompleted = item.findAll('.uncompletedList .uncompletedTodo')
        expect(uncompleted).toHaveLength(2)
    })
})