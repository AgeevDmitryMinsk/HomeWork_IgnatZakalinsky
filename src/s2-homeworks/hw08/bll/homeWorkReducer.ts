import {UserType} from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': { // by name
			return state.sort((a, b) => {
					if (action.payload === 'up') return a.name > b.name ? 1 : -1
					return a.name < b.name ? 1 : -1
				} // if (action.payload ==='down')
			) // need to fix __ВЕРНО
		}

		// case 'sort': { // by name
		//     if (action.payload === 'up') state = state.sort((u, u2) => u.name.localeCompare(u2.name))
		//     else state = state.sort((u, u2) => u2.name.localeCompare(u.name))
		//     return state // need to fix
		// }

		// case 'check': {
		// 	let mappedState = state
		// 	mappedState = mappedState.sort((a, b) => a.name > b.name ? 1 : -1)
        //         .filter(el => el.age > action.payload)
		// 	// state = state.filter(el => el.age > action.payload)
		//
		// 	console.log('state=', state)
		// 	console.log('mappedState=', mappedState)
		// 	return mappedState// need to fix
		// }

		case 'check': {
		    console.log('state before=', state)
		    state = state
		        .sort((u, u2) => u.name.localeCompare(u2.name))
		        .filter(u => u.age >= action.payload)
		    console.log('state after=', state)
		    return state // need to fix
		}
		default:
			return state
	}
}
