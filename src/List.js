import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    // return (

    //     // <ul>
    //     //     <Item content={todos[0].content} />
    //     //     <Item content={todos[1].content} />
    //     //     <Item content={todos[2].content} />
    //     //     <Item content={todos[3].content} />
    //     // </ul>
    //     <ul>
    //         {
    //             todos.map(todo => {
    //                 return (
    //                     <Item content={todo.content}
    //                         id={todo.id}
    //                         key={todo.id} />
    //                 )
    //             })
    //         }
    //     </ul>
    //     //配列が追加された度に呼び出すのは面倒なのでmapを使って反復処理を行ない、自動的にしてくれるようにする
    // )
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item content={todo.content}
                            id={todo.id}
                            key={todo.id} />
                    )
                })
            }
        </ul>
    )
}

export default List