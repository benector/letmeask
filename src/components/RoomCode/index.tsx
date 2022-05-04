import { Popover } from 'antd';

import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
  code: string;
} 

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  const content = (
    <div>
      <span>Código copiado com sucesso</span>
    </div>
  )
  return (
    <Popover content={content} trigger="click">
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <span>#{props.code}</span>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
      </button>
    </Popover>
  )
}