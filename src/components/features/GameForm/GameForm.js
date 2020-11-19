import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './GameForm.module.scss';

import Button from '../../common/Button/Button';
import PhotoCarousel from '../../features/PhotoCarousel/PhotoCarousel';
import NumberInput from '../../features/NumberInput/NumberInput';
import Load from '../../common/Load/Load';

class GameForm extends React.Component {
  state = {
    qty: 1,
    totalPrice: this.props.price,
  }

  AddQty = () => {
    const newQty = this.state.qty + 1;
    this.setState({
      ...this.state,
      qty: newQty,
      totalPrice: this.props.price * newQty,
    });
  };

  SubstractQty = () => {
    if(this.state.qty > 1) {
      const newQty = this.state.qty - 1;
      this.setState({
        ...this.state,
        qty: newQty,
        totalPrice: this.props.price * newQty,
      });
    }
  };

  SubmitGameToCart = (id, price, qty) => {
    if(id && price > 0 && qty > 0) {
      const gameInCartId = shortid();
      this.props.addToCart(id, price, qty, gameInCartId);
      this.props.changePromptInfoStatus('success');
      this.props.saveCartToLocalStorage(
        {
          id: gameInCartId,
          game: this.props._id,
          price: this.state.totalPrice,
          quantity: this.state.qty,
          description: '',
        }
      );
      this.DefaultState();
    } else {
      this.props.changePromptInfoStatus('error');
    }
  }

  DefaultState = () => {
    this.setState({
      ...this.state,
      qty: 1,
      totalPrice: this.props.price,
    });
  }

  componentDidMount() {
    if(this.props._id === undefined) this.props.getSelectedGameApi(this.props.gameId);
    if(this.props.genres.length === 0) this.props.getGenresApi();
  }

  render() {

    const {_id, description, genres, photos, price} = this.props;

    return (
      <div>
        {_id === undefined
          ?
          <Load />
          :
          <div className={styles.container}>
            <p>Genres:</p>
            <ul className={styles.genreList}>
              {genres !== null
                ?
                genres.map(genre => (
                  <li key={genre._id}>{genre.name}</li>
                ))
                :
                null
              }
            </ul>
            <p className={styles.description}>{description}</p>
            <PhotoCarousel photos={photos} />
            <p className={styles.price}>Price: {this.state.totalPrice || price} €</p>
            <NumberInput
              qty={this.state.qty}
              className='alignRight'
              plusAction={() => this.AddQty()}
              minusAction={() => this.SubstractQty()}
            />
            <div className={styles.submit}>
              <Button Type='div' onClick={() =>
              {
                if(this.state.totalPrice === undefined) {
                  this.setState({
                    ...this.state,
                    totalPrice: price * this.state.qty,
                  });
                }
                this.SubmitGameToCart(_id, price * this.state.qty, this.state.qty);
              }
              }>Buy it now</Button>
            </div>
          </div>
        }
      </div>
    );
  }
}

GameForm.propTypes = {
  description: PropTypes.string,
  price: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ]
  ),
  genres: PropTypes.array,
  photos: PropTypes.array,
  addToCart: PropTypes.func,
  _id: PropTypes.string,
  changePromptInfoStatus: PropTypes.func,
  getGenresApi: PropTypes.func,
  getSelectedGameApi: PropTypes.func,
  gameId: PropTypes.string,
  saveCartToLocalStorage: PropTypes.func,
};

GameForm.defaultProps = {
  genres: [],
};

export default GameForm;
