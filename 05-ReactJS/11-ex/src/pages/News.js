import React from "react";
import Spinner from "../components/Spinner";
import NewsItem from "../components/NewsItem";
import styled from "styled-components";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
// Slice에 정의된 액션함수를 참조
import { getList } from "../slices/NewsSlice";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const News = () => {
  // 컴포넌트가 마운트 될 때 콘솔의 모든 내용을 삭제함(출력 결과가 복잡해 지는 것을 방지)
  React.useEffect(() => console.clear(), []);

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.news);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <ListContainer>
          {data && data.map((v, i) => <NewsItem key={i} item={v} />)}
        </ListContainer>
      )}
    </div>
  );
};

export default React.memo(News);
