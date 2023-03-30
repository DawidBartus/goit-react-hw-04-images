import React, { useEffect, useState } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

const KEY = '14551273-a2f87cd1c4bb2f6c327ac1a47';

const App = () => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState([]);
  const [modalAlt, setModalAlt] = useState('');
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (page !== 1) {
      fetchdata();
    }
  }, [page]);
  useEffect(() => {
    if (text !== '') {
      fetchdata();
    }
  }, [text]);

  const handleSubmit = e => {
    e.preventDefault();
    setImages([]);
    setText('');
    setPage(1);
    setLoading(true);
    const imageText = e.target.elements.searchInput.value;
    setText(imageText);
  };

  const fetchdata = async () => {
    const link = `https://pixabay.com/api/?q=${text}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&height=250`;
    const request = await fetch(link);
    const respons = await request.json();

    if (respons.hits.length === 0) {
      Notiflix.Notify.failure('0 images found.');
      setLoading(false);
    } else {
      setImages([...images, ...respons.hits]);
      setTotal(respons.total);
      setLoading(false);
    }
  };

  const handleClick = e => {
    if (e.target.tagName === 'IMG') {
      setModal([]);
      setModalAlt('');
      const newModal = [];
      newModal.push(e.target.getAttribute('dataid'));
      setModal([...newModal]);
      setModalAlt(' e.target.alt');
    }
  };

  const onEscClose = e => {
    if (e.key === 'Escape') {
      setModal([]);
      setModalAlt('');
    }
  };
  const onClickClose = e => {
    if (e.target.tagName === 'IMG' || e.target.nodeName === 'DIV') {
      setModal([]);
      setModalAlt('');
    }
  };

  const loadMode = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleClick={handleClick} />
      )}
      {isLoading && <Loader />}
      {modal.length > 0 && (
        <Modal
          modalIsOpen={modal}
          modalAlt={modalAlt}
          onEscClose={onEscClose}
          onClickClose={onClickClose}
        />
      )}

      {images.length > 0 && total > images.length ? (
        <Button loadMoreBttn={loadMode} />
      ) : null}
    </>
  );
};

App.propTypes = {
  images: PropTypes.object,
  modalIsOpen: PropTypes.object,
  modalAlt: PropTypes.string,
  isLoading: PropTypes.bool,
  total: PropTypes.string,
};

export default App;
