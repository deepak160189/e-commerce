import styled from "styled-components"
import CategoryItem from './CategoryItem';
import {categories} from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories?.map((item) => (
        <CategoryItem key={item?.id} item={item}/>
      ))}
    </Container>
  );
}

export default Categories
