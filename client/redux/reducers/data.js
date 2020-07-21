const initialState = {
  modalWindow: false,
  activeButton: false,
  title: [
    {
      name: 'React Information',
      admin: 'Денис Ястрев',
      supervisor: 'Иван Иванов',
      image: 'https://medic-tur.ru/wp-content/uploads/2015/03/anadolu.jpg',
      startDate: '14.07.2020',
      endDate: '24.07.2020'
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'MODAL':
      return { ...state, modalWindow: action.modalWindow }
    case 'ACTIVE_BUTTON':
      return { ...state, modalWindow: action.modalWindow }
    case 'START_DATE':
      return { ...state, startDate: action.startDate }
    case 'END_DATE':
      return { ...state, endDate: action.endDate }
    case 'TITLE':
      return { ...state, title: [...state.title, action.title] }
    default:
      return state
  }
}
export function modal(boolean) {
  return { type: 'MODAL', modalWindow: boolean }
}
export function editActiveButton(boolean) {
  return { type: 'ACTIVE_BUTTON', activeButton: boolean }
}

export function nameProject(name, admin, supervisor, image, startDate, endDate) {
  return { type: 'TITLE', title: { name, admin, supervisor, image, startDate, endDate } }
}
