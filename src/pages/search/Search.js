import styled from "styled-components";
import { colors, spacing } from "../../Globalstyled";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

const Form = styled.form`
  margin: 0 ${spacing.moSide};
  padding: 15px ${spacing.hamSide};
  border: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.fontColor};
  input {
    all: unset;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSearchResult = () => {};
  return (
    <Form onSubmit={handleSubmit(onSearchResult)}>
      <input
        {...register("keyword", {
          required: "검색어를 입력해주세요.",
        })}
        type="text"
        placeholder="어떤걸 검색하시나요?"
      ></input>
      <FiSearch />
    </Form>
  );
};
