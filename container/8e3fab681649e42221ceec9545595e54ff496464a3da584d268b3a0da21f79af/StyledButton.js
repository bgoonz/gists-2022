import styled from "vue-styled-components";
const buttonProps = {
 color: String
};
 
const CButton = styled("button", buttonProps)`
 color: ${props => props.color};
`;
 
export default CButton;