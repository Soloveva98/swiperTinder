import React from 'react';
import s from './Header.module.scss';

const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.header__inner}>
				<button>
					<img src='images/user.svg' alt='user' />
				</button>

				<button>
					<img src='images/logo.svg' alt='logo' />
				</button>

				<button>
					<img src='images/messages.svg' alt='messages' />
				</button>
			</div>
		</div>
	)
};

export default Header;