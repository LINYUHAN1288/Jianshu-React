import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
Button, Span1, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch,
SearchInfoItem, SearchInfoList } from './style';


class Header extends Component {
  
  getListArea() {
    const pageList = [];
    const jsList = this.props.list.toJS();
    if (jsList.length) {
      for (let i = (this.props.page-1) * 10; i < this.props.page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}
            >
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851; </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  
  
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
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</span>
            {this.getListArea()}
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
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      //console.log(123);
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
