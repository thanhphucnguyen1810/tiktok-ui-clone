import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem( ) {
  
  return (
    <div className={cx('wrapper')}>
      <img 
        className={cx('avatar')} 
        src='https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-4.jpg' 
        alt='avatar' 
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>NguyenVanA</span>
          <FontAwesomeIcon className={cx('check')}  icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>@NguyenVanA</span>
      </div>
    </div>
  );
}

export default AccountItem;