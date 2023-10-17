import ICON_BACK from '@/assets/images/arrow-back.svg'
import ICON_MORE from '@/assets/images/more.svg'
import MaskIcon from '@/components/MaskIcon'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const showBack = location.pathname !== '/'

  return (
    <header data-tauri-drag-region className="header">
      <div className={classNames(!showBack && 'invisible')} onClick={() => navigate('/')}>
        <MaskIcon src={ICON_BACK} />
      </div>
      <div className={classNames(showBack && 'invisible')}>
        {/* 相当于 HTML 中的 <a>，点击后跳转页面 */}
        <Link to="/more" title="更多">
          <MaskIcon src={ICON_MORE} />
        </Link>
      </div>
    </header>
  )
}
