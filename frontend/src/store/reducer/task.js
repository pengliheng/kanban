import { ACTION_TYPE } from '../../utils/constants'

const taskInitState = {
    content: [
        [],[],[],[]
    ],
    select: null
}
export default function taskReducer(state=taskInitState, action) {
    switch(action.type) {
        case ACTION_TYPE.CREATE_TASK:
            return {
                ...state,
                content: state.content.map((item,i) => {
                    if (i===0) {
                        return [
                            ...item,
                            {name: action.payload, id: Math.random()}
                        ]
                    }
                    return item
                })
            }
        case ACTION_TYPE.SELECT_TASK:
            return {
                ...state,
                select: action.payload
            }
        case ACTION_TYPE.DELETE_TASK:
            return {
                ...state,
                content: state.content.map(item => item.filter(task => task.id !== action.payload))
            }
            case ACTION_TYPE.MOVE_BACK_TASK:
                if (!action.payload) return state
                for(let i=0;i<state.content.length;i++) {
                    const selectTask = state.content[i].find(task => task.id === action.payload)
                    if (i>0 && selectTask) {
                        return {
                            ...state,
                            content: state.content.map((item,ii) => {
                                if (ii === i-1) {
                                    return [...item, selectTask]
                                } else if (ii===i) {
                                    return item.filter(task => task.id !== action.payload)
                                }
                                return item
                            })
                        }
                    }
                }
                return state
            case ACTION_TYPE.MOVE_FORWARD_TASK:
                if (!action.payload) return state
                for(let i=0;i<state.content.length;i++) {
                    const selectTask = state.content[i].find(task => task.id === action.payload)
                    if (i<state.content.length-1 && selectTask) {
                        return {
                            ...state,
                            content: state.content.map((item,ii) => {
                                if (ii === i+1) {
                                    return [...item, selectTask]
                                } else if (ii===i) {
                                    return item.filter(task => task.id !== action.payload)
                                }
                                return item
                            })
                        }
                    }
                }
                return state
        default:
            return state
    }
}