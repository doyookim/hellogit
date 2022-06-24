import React, { memo } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import Spinner from "../components/Spinner";

import Table from "../components/Table";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .flex-item {
    flex-basis: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
`;

const Covid19Slice = memo(() => {
  const { data, loading, error } = useSelector((state) => state.covid19);

  return (
    <div>
      <Spinner visible={loading} />

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>date</th>
            <th>active</th>
            <th>confirmed_acc</th>
            <th>death_acc</th>
            <th>released_acc</th>
            <th>confirmed</th>
            <th>death</th>
            <th>released</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.date}</td>
                  <td>{Number(v.active).toLocaleString()}명</td>
                  <td>{Number(v.confirmed_acc).toLocaleString()}명</td>
                  <td>{Number(v.death_acc).toLocaleString()}명</td>
                  <td>{Number(v.released_acc).toLocaleString()}명</td>
                  <td>{Number(v.confirmed).toLocaleString()}명</td>
                  <td>{Number(v.death).toLocaleString()}명</td>
                  <td>{Number(v.released).toLocaleString()}명</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
});

export default Covid19Slice;
