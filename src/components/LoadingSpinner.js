// material
import { keyframes } from "@mui/styled-engine";
import { Box, styled } from '@mui/material';
// ----------------------------------------------------------------------
const stepSize = '8'
const bounce = keyframes`
  0%,
  100% {
    box-shadow: 0 -${3*stepSize}px 0 ${0.2*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 0, ${3*stepSize}px 0 0 -${1*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, 0 ${3*stepSize}px 0 -${1*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, -${3*stepSize}px 0 0 -${1*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 0;
  }
  12.5% {
    box-shadow: 0 -${3*stepSize}px 0 0, ${2*stepSize}px -${2*stepSize}px 0 ${0.2*stepSize}px, ${3*stepSize}px 0 0 0, ${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, 0 ${3*stepSize}px 0 -${1*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, -${3*stepSize}px 0 0 -${1*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px;
  }
  25% {
    box-shadow: 0 -${3*stepSize}px 0 -${0.5*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 0, ${3*stepSize}px 0 0 ${0.2*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 0, 0 ${3*stepSize}px 0 -${1*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, -${3*stepSize}px 0 0 -${1*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px;
  }
  37.5% {
    box-shadow: 0 -${3*stepSize}px 0 -${1*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px, ${3*stepSize}px 0 0 0, ${2*stepSize}px ${2*stepSize}px 0 ${0.2*stepSize}px, 0 ${3*stepSize}px 0 0, -${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, -${3*stepSize}px 0 0 -${1*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px;
  }
  50% {
    box-shadow: 0 -${3*stepSize}px 0 -${1*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px, ${3*stepSize}px 0 0 -${1*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 0, 0 ${3*stepSize}px 0 ${0.2*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 0, -${3*stepSize}px 0 0 -${1*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px;
  }
  62.5% {
    box-shadow: 0 -${3*stepSize}px 0 -${1*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px, ${3*stepSize}px 0 0 -${1*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, 0 ${3*stepSize}px 0 0, -${2*stepSize}px ${2*stepSize}px 0 ${0.2*stepSize}px, -${3*stepSize}px 0 0 0, -${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px;
  }
  75% {
    box-shadow: 0 -${3*stepSize}px 0 -${1*stepSize}px, ${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px, ${3*stepSize}px 0 0 -${1*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, 0 ${3*stepSize}px 0 -${1*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 0, -${3*stepSize}px 0 0 ${0.2*stepSize}px, -${2*stepSize}px -${2*stepSize}px 0 0;
  }
  87.5% {
    box-shadow: 0 -${3*stepSize}px 0 0, ${2*stepSize}px -${2*stepSize}px 0 -${1*stepSize}px, ${3*stepSize}px 0 0 -${1*stepSize}px, ${2*stepSize}px ${2*stepSize}px 0 -${1*stepSize}px, 0 ${3*stepSize}px 0 -${1*stepSize}px, -${2*stepSize}px ${2*stepSize}px 0 0, -${3*stepSize}px 0 0 0, -${2*stepSize}px -${2*stepSize}px 0 ${0.2*stepSize}px;
  }
`;

const LoadingSpinner = styled(Box)({
  position: 'relative',
  '&:before': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: `${stepSize}px`,
    height: `${stepSize}px`,
    transform: 'translate3d(-50%, -50%, 0)',
    borderRadius: '50%',
    color: '#149bc3',
    content: "''",
    willChange: 'box-shadow',
    animation: `${bounce} 1.3s infinite linear`,
  }
});

export default LoadingSpinner