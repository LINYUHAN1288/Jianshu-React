import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
Button, Span1, SearchWrapper } from './style';

class Header extends Component {

  
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>
            <Span1 className="iconfont">&#xe786; </Span1>
            首页
          </NavItem>
          <NavItem className='left'>
            <Span1 className="iconfont">&#xe686; </Span1>
            下载App
          </NavItem>
          <NavItem className='right'>登录</NavItem> 
          <NavItem className='right'>
            <span className="iconfont">&#xe637; </span>
          </NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636; </span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="iconfont">&#xe61c; </span>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  } 
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      //console.log(123);
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
