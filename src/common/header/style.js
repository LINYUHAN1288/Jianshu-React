import styled from 'styled-components'
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 40px;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div `
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696; 
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const Span1 = styled.span `
  &.iconfont {
    font-size: 20px;
  }
`;

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 18px;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 300px;  
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;

export const SearchInfo = styled.div `
  position: absolute;
  left: 25px;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696
`;

export const SearchInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div `
  overflow: hidden;
`;

export const SearchInfoItem = styled.a `
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;

`;

export const Addition = styled.div `
  position: absolute;
  right: 40px;
  top: 0;
  height: 56px;
`;

export const Button = styled.div `
  line-height: 38px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  float: right;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
