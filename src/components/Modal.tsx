import { useCallback, useState } from 'react';
import ModalUI from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { getIdPizza } from '../api/api';
import { Pizza } from '../../Interfaces/index';

ModalUI.setAppElement('#root');

export default function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalIsOpen] = useState(true);

  const { data, isLoading, error } = useQuery<Pizza[]>({
    queryKey: ['PizzaId', id],
    queryFn: async () => {
      if (id) {
        return getIdPizza(+id);
      }
      throw new Error('ID is not defined');
    },
  });

  const closeModal = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <ModalUI
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="pizza-modal"
    >
      {error && <p>error.message</p>}
      {!isLoading ? (
        <>
          <button
            type="button"
            onClick={closeModal}
            className="pizza-modal__close"
          >
            <MdClose />
          </button>
          <div className="pizza-modal__inner">
            <div className="pizza-modal__vision">
              <img
                className="pizza-block__image"
                src={data && data[0].imageUrl}
                alt={data && data[0].title}
              />
              <h4 className="pizza-block__title">{data && data[0].title}</h4>
            </div>
            <div className="pizza-modal__info">
              <div className="pizza-block__bottom">
                <div className="pizza-block__price">
                  от {data && data[0].price} ₴
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ModalUI>
  );
}
