import React from "react";
import styled from "styled-components";
import bgimg from "../assets/img/bg_check_off.gif";
import "../assets/scss/SearchWrap.css";

const SearchModal = styled.div``;

const SearchWrap = () => {
  const [style, setStyle] = React.useState({ display: "block" });

  return (
    <SearchModal className="modalSearchWrap" style={style}>
      <div className="modalBg"></div>
      <div className="modalContainer">
        <div className="modalContent">
          <div className="modalBody">
            <div className="search_product">
              <fieldset>
                <legend>제품 검색 폼</legend>
                <table className="table">
                  <caption>제품 검색 폼</caption>
                  <colgroup>
                    <col width="90" />
                    <col width="486" />
                    <col width="90" />
                    <col width="*" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>제품명</th>
                      <td>
                        <select className="ScTop">
                          <option>전체</option>
                          <option>아이스크림</option>
                          <option>아이스크림케이크</option>
                          <option>음료</option>
                          <option>커피</option>
                          <option>디저트</option>
                          <option>block pack</option>
                          <option>ready pack</option>
                        </select>
                        <label className="sr_only">제품명 입력</label>
                        <input type="text" title="제품명입력" />
                      </td>
                      <th>해시태그</th>
                      <td>
                        <div>
                          <label className="sr_only">검색</label>
                          <input
                            type="text"
                            className="myPlaceholder"
                            placeholder=""
                          ></input>
                        </div>
                        <div className="hashtag">
                          <dl>
                            <dt>자주 찾는 해시태그</dt>
                            <dd>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #피카피카피카츄
                              </a>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #피카츄초코바나나블라스트
                              </a>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #쿨쿨잠만보밀키소다블라스트
                              </a>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #고라파덕아이스크림콘
                              </a>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #푸린아이스크림콘
                              </a>
                              <a href="http://www.baskinrobbins.co.kr/#">
                                #포켓몬스터
                              </a>
                            </dd>
                          </dl>
                        </div>
                      </td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <th>알레르기 성분</th>
                      <td colSpan="3">
                        <div className="allergie">
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              계란
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              대두
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              돼지고기
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              땅콩
                            </span>
                          </label>
                          <label className="clearLabel">
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              밀
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              복숭아
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              우유
                            </span>
                          </label>
                          <label>
                            <input
                              className="sr_only"
                              type="checkbox"
                              name="Allergy[]"
                            />
                            <span style={{ backgroundImage: `url(${bgimg})` }}>
                              없음
                            </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="submit">
                  <button type="submit">검색</button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="modalClose">
        <a
          href="#none"
          onClick={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <img src={require("../assets/img/btn_search_close.gif")} alt="Clos" />
        </a>
      </div>
    </SearchModal>
  );
};

export default SearchWrap;
