import React from 'react';
import s from './SwipeButtons.module.scss';

const SwipeButtons = () => {
	return (
		<div className={s.buttons}>
			<button>
				<img src='images/return.svg' alt='return' />
			</button>

			<button>
				<img src='images/close.svg' alt='close' />
			</button>

			<button>
				<img src='images/star.svg' alt='star' />
			</button>

			<button>
				<img src='images/heart.svg' alt='heart' />
			</button>

			<button>
				<img src='images/lightning.svg' alt='lightning' />
			</button>
		</div>
	)
};

export default SwipeButtons;