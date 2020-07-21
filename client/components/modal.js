import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line import/named
import { modal, nameProject } from '../redux/reducers/data'
import './style.scss'

Modal.setAppElement('#root')

const ModalWindow = () => {
  const setModal = useSelector((s) => s.data.modalWindow)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [admin, setAdmin] = useState('')
  const [image, setImage] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  return (
    <div className="flex">
      <Modal
        className="modal m-auto"
        isOpen={setModal}
        onRequestClose={() => dispatch(modal(false))}
        style={{
          overlay: {
            background: 'black',
            opacity: '75%'
          }
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="project-name"
          placeholder="Введите название"
        />
        <div>
          <div className="flex date-input">
            <span>Дата Старта</span>
            <input
              type="text"
              placeholder="дд.мм.гг"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span>Дата окончания</span>
            <input
              type="text"
              placeholder="дд.мм.гг"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="img-input"
            placeholder="Вставьте url изображения"
          />
        </div>
        <input
          onChange={(e) => setSupervisor(e.target.value)}
          type="text"
          className="project-name mt-3"
          placeholder="Введите имя руководителя"
        />
        <input
          onChange={(e) => setAdmin(e.target.value)}
          type="text"
          className="project-name mt-3"
          placeholder="Введите имя администратора"
        />
        <div className="flex justify-end">
          <button
            className="modal-btn mr-3"
            type="button"
            onClick={() => {
              dispatch(nameProject(name, admin, supervisor, image, startDate, endDate))
              dispatch(modal(false))
            }}
          >
            Добавить проект
          </button>
          <button className="cancel-modal" type="button" onClick={() => dispatch(modal(false))}>
            Отмена
          </button>
        </div>
      </Modal>
    </div>
  )
}
export default ModalWindow
