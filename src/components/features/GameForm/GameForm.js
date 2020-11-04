import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameForm.module.scss';

import Button from '../../common/Button/Button';
import PhotoCarousel from '../../features/PhotoCarousel/PhotoCarousel';
import NumberInput from '../../features/NumberInput/NumberInput';

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

  ChangeTotalPrice = () => {
    this.setState({
      ...this.state,
      totalPrice: this.props.price * this.state.qty,
    });
  }

  render() {

    const {_id, description, genres, photos, addToCart} = this.props;

    return (
      <div className={styles.container}>
        <p>Genres:</p>
        <ul className={styles.genreList}>
          {genres.map(genre => (
            <li key={genre._id}>{genre.name}</li>
          ))}
        </ul>
        <p className={styles.description}>{description}</p>
        <PhotoCarousel photos={photos} />
        <p className={styles.price}>Price: {this.state.totalPrice} €</p>
        <NumberInput
          qty={this.state.qty}
          className='alignRight'
          plusAction={() => this.AddQty()}
          minusAction={() => this.SubstractQty()}
        />
        <div className={styles.submit}>
          <Button Type='div' onClick={() => addToCart(_id, this.state.totalPrice, this.state.qty)}>Buy it now</Button>
        </div>
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
};

GameForm.defaultProps = {
  genres: [],
};

export default GameForm;
