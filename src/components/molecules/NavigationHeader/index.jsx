import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 2px;
  box-shadow: 0px 2px 2px #343a40;
  background-color: #343a40 !important;
`

const LogoText = styled.h1`
  font-family: 'IM Fell Great Primer';
  position: relative;
  margin: 1px 0;
  color: #f0f0f0;
  text-shadow: 1px 1px #ffe0e0;
`

const RightItem = styled.div`
  display: flex;
  margin-left: auto !important;
  align-items: center;
  gap: 10px;
`

const NavButton = styled.button`
  padding: 4px 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: ${props => props.$color || '#fff'};
  color: ${props => props.$color ? '#fff' : '#333'};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.85;
  }
`

const NavigationHeader = ({
  onPressDoneButton,
  onPressExportButton,
  onPressPrintButton,
  onPressDeleteButton,
  printElement,
}) => (
  <Wrapper>
    <LogoText>Show me the slide</LogoText>

    <RightItem>
      {onPressExportButton && (
        <NavButton onClick={() => onPressExportButton()}>Export</NavButton>
      )}
      {onPressDeleteButton && (
        <NavButton $color="#d9534f" onClick={() => onPressDeleteButton()}>Delete All</NavButton>
      )}
      {onPressPrintButton && (
        <NavButton onClick={() => onPressPrintButton(printElement)}>Print</NavButton>
      )}
      {onPressDoneButton && (
        <NavButton onClick={() => onPressDoneButton()}>Done</NavButton>
      )}
    </RightItem>
  </Wrapper>
)

export default NavigationHeader
