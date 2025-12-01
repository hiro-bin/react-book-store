import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'

interface Props {
    isChecked: boolean;
    onCheck: () => void;
}

function CheckIconButton({ isChecked, onCheck }: Props) {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
        {
            isChecked ? (<FaRegCircle />) : (<FaRegCheckCircle />)
        }
    </CheckIconButtonStyle>
  );
}

const CheckIconButtonStyle = styled.button``;

export default CheckIconButton;